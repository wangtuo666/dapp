<template>
  <div class="payout">
    <van-button
      style="margin: 10px 20px"
      size="small"
      @click="link"
      type="primary"
      >连接钱包</van-button
    >
    <van-cell-group inset>
      <van-field
        v-model="form.user"
        center
        clearable
        placeholder="请输入用户信息"
      >
        <template #button>
          <van-button size="small" @click="select" type="primary"
            >查询</van-button
          >
        </template>
      </van-field>
    </van-cell-group>

    <ul>
      <li v-for="(item, index) in listArr" :key="index">
        <span>{{ item.id }}</span>
        <van-button
          size="small"
          v-if="item.redemptionStatus == false"
          @click="shuhui(item)"
          type="primary"
          >赎回</van-button
        >
      </li>
    </ul>
  </div>
</template>

<script setup >
import { manageaddress, manageABI } from "../utils/manage";
import { BWEaddress, BWEABI } from "../utils/BWE";
import { onMounted, reactive, ref } from "vue";
import { showNotify, Field } from "vant";
import { ethers } from "ethers";
import { Conctract, providerfun } from "../assets/js/common";
import checkHash from "../utils/checkHash";
const form = reactive({
  user: "",
});
let listArr = reactive([]);

onMounted(async () => {
  await link();
});
const link = async function () {
  try {
    const [account] = await providerfun().send("eth_requestAccounts", []);
    showNotify({ type: "success", message: "连接钱包成功" });
  } catch {
    showNotify({ type: "success", message: "连接钱包失败" });
  }
};

const select = async function () {
  const manageConctract = await Conctract(manageaddress, manageABI);
  manageConctract.getUserOrders(form.user).then((res) => {
    if (res.length <= 0) {
      return;
    }
    listArr.length = 0;
    res.map(async (element) => {
      await manageConctract
        .getOrderDetails(parseInt(element._hex))
        .then((res2) => {
          var tt = {
            id: Number(parseInt(res2[0]._hex)),
            redemptionStatus: res2.redemptionStatus,
          };
          listArr.push(tt);
        });
    });

    sessionStorage.setItem("user", form.user);
  });
};

const shuhui = async function (item) {
  try {
    const manageConctract = await Conctract(manageaddress, manageABI);
    const BWEConctract = await Conctract(BWEaddress, BWEABI);
    const BWEbalance = await BWEConctract.balanceOf(
      sessionStorage.getItem("user")
    );
    const result = await manageConctract.calculateRedemption(item.id);
    let bb = Number(parseInt(result) / 1e18) + 0.1;
    if (!(parseInt(BWEbalance) / 1e18 >= bb)) {
      showNotify({ type: "danger", message: "余额不足" });
      return;
    }
    const allowance = await BWEConctract.allowance(
      sessionStorage.getItem("user"),
      manageaddress
    );
    const approbalance = allowance.toString() / 1e18;
    if (approbalance >= bb && item.redemptionStatus == false) {
      const redeem = await manageConctract.redeem(item.id + "").then((res) => {
        checkHash.checkHash(res.hash).then((ffff) => {
          if (ffff) {
            showNotify({ type: "success", message: "赎回成功" });
            select();
          }
        });
      });
      return;
    }

    if (parseInt(result) > 0) {
      const BWEapprove = await BWEConctract.approve(
        contractAddress,
        ethers.utils.parseEther(bb + "")
      );
      checkHash.checkHash(BWEapprove.hash).then(async (ttttt) => {
        if (ttttt) {
          const redeem = await manageConctract
            .redeem(item.id + "")
            .then((res) => {
              checkHash.checkHash(res.hash).then((ffff) => {
                if (ffff) {
                  showNotify({ type: "success", message: "赎回成功" });
                  select();
                }
              });
            });
        }
      });
    } else {
      showNotify({ type: "danger", message: "赎回失败" });
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
</style>