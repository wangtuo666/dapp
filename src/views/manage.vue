<template>
  <div class="payout">
    <div style="background-color: #fff; margin: 10px; border-radius: 5px">
      <van-button style="width: 100%;margin: 10px 0 0;" size="small" @click="transferBWEtoWallet" type="primary"
        >benchmarking</van-button
      >
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: space-around;
          margin: 10px 20px;
        "
      >
        <van-button size="small" @click="link" type="primary">{{
          userStatus == 0 ? "Connect wallet" : "Disconnect"
        }}</van-button>
        <span>{{
          userAddress.slice(0, 9) + "..." + userAddress.slice(-4)
        }}</span>
        <van-button size="small" @click="select" type="primary"
          >Query orders</van-button
        >
      </div>

      <ul>
        <li v-for="(item, index) in listArr" :key="index">
          <span>orderID：{{ item.id }}</span>
          <span>need：{{ item.bb.toFixed(2) }} bwe</span>
          <van-button v-if="item.redemptionStatus == false"  size="small" @click="shuhui(item)" type="primary">{{
            item.redemptionStatus == false ? "redemption" : "Redeemed"
          }}</van-button>
          <span style="color: red;" v-if="item.redemptionStatus == true" > Redeemed </span>
        </li>
      </ul>
      <van-overlay :show="show" @click="show.value = false">
        <div class="wrapper" @click.stop>
          <van-loading type="spinner" />
        </div>
      </van-overlay>
    </div>
  </div>
</template>

<script setup >
import { manageaddress, manageABI } from "../utils/manage";
import { BWEaddress, BWEABI } from "../utils/BWE";
import { onMounted, reactive, ref } from "vue";
import { showNotify, Field } from "vant";
import { ethers } from "ethers";
import { Conctract, providerfun } from "../assets/js/common";

const form = reactive({
  user: "",
});
let listArr = reactive([]);
let userAddress = ref("");
let show = ref(false);
let userStatus = ref(0);
onMounted(async () => {
  await link();
});

const transferBWEtoWallet = async function () {
  try {
    const manageConctract = await Conctract(manageaddress, manageABI);
    manageConctract.transferBWEtoWallet().then((res) => {
      showNotify({ type: "danger", message: "success" });
    });
  } catch {
    showNotify({ type: "danger", message: "fail" });
  }
};
const checkHash = async function (txHash) {
  show.value = true;
  let checkHash = false;
  const provider = new ethers.providers.JsonRpcProvider(
    "https://bsc.nodereal.io"
  );
  for (var i = 0; i < 15; i++) {
    await provider
      .getTransactionReceipt(txHash)
      .then((receipt) => {
        console.log(receipt);
        if (receipt && receipt.status === 1) {
          console.log("交易成功！", receipt);
          checkHash = true;
          show.value = false;
        } else {
          console.log("交易失败或仍在等待确认。");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    if (checkHash) {
      break;
    }
  }
  return checkHash;
};

const link = async function () {
  if (userStatus.value == 0) {
    try {
      const [account] = await providerfun().send("eth_requestAccounts", []);
      userAddress.value = account;
      userStatus.value = 1;
      showNotify({ type: "success", message: "Successfully connected wallet" });
      sessionStorage.setItem("user", account);
    } catch {
      showNotify({ type: "success", message: "Failed to connect to wallet" });
    }
  } else {
    userStatus.value = 0;
    sessionStorage.removeItem("user");
  }
};

const select = async function () {
  const manageConctract = await Conctract(manageaddress, manageABI);
  // console.log(userAddress);
  manageConctract.getUserOrders(userAddress.value).then((res) => {
    if (res.length <= 0) {
      return;
    }
    listArr.length = 0;
    res.map(async (element) => {
      await manageConctract
        .getOrderDetails(parseInt(element._hex))
        .then(async (res2) => {
          console.log(res2);
          const result = await manageConctract.calculateRedemption(Number(parseInt(res2[0]._hex)));
          let bb = Number(parseInt(result) / 1e18) + 0.1;
          var tt = {
            id: Number(parseInt(res2[0]._hex)),
            bb:bb,
            redemptionStatus: res2.redemptionStatus,
          };
          listArr.push(tt);
        });
    });
  });
};

const shuhui = async function (item) {
  try {
    const manageConctract = await Conctract(manageaddress, manageABI);
    const BWEConctract = await Conctract(BWEaddress, BWEABI);
    const BWEbalance = await BWEConctract.balanceOf(userAddress.value);

    const result = await manageConctract.calculateRedemption(item.id);
    let bb = Number(parseInt(result) / 1e18) + 0.1;
    if (!(parseInt(BWEbalance) / 1e18 >= bb)) {
      showNotify({ type: "danger", message: "余额不足" });
      return;
    }
    const allowance = await BWEConctract.allowance(
      userAddress.value,
      manageaddress
    );
    const approbalance = allowance.toString() / 1e18;
    if (approbalance >= bb && item.redemptionStatus == false) {
      const redeem = await manageConctract.redeem(item.id + "").then((res) => {
        checkHash(res.hash).then((ffff) => {
          if (ffff) {
            showNotify({ type: "success", message: "Success" });
            item.redemptionStatus=true
            
          }
        });
      });
      return;
    }

    if (parseInt(result) > 0) {
      const BWEapprove = await BWEConctract.approve(
        manageaddress,
        ethers.utils.parseEther(bb + "")
      );
      checkHash(BWEapprove.hash).then(async (ttttt) => {
        if (ttttt) {
          const redeem = await manageConctract
            .redeem(item.id + "")
            .then((res) => {
              checkHash(res.hash).then((ffff) => {
                if (ffff) {
                  showNotify({ type: "success", message: "Success" });
                  item.redemptionStatus=true
                }
              });
            });
        }
      });
    } else {
      showNotify({ type: "danger", message: "fail" });
    }
  } catch (error) {
    showNotify({ type: "danger", message: "提交失败" });
  }
};
</script>

<style lang="scss" >
.title {
  margin: 15px 0;
}
.spanfon {
  // font-size: 6px;
}
.van-cell {
  padding: 5px !important;
}
li {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fff;
  height: 50px;
  align-items: center;
}
ul {
  padding: 10px 20px;
  border-radius: 15px;
}
.payout {
  width: 100vw;
  height: 100vh;
  background-color: rgb(247, 248, 250) !important;
  overflow: hidden;
  padding: 5px 0px;
  font-size: 14px;
  color: #7e7373;
  box-sizing: border-box !important;
  .constrct-message {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px 10px;
    box-sizing: border-box;
  }

  .inputblock {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 10px 0;
    box-sizing: border-box;
  }
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>