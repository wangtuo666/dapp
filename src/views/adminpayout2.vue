<template>
  <div class="payout">
    <p class="title">合约信息：</p>
    <div class="constrct-message">
      <div>
        合约地址：<br /><span class="spanfon">{{ manageaddress }}</span>
        <p class="fuzhi" @click="handleCopy">复制地址</p>
      </div>
      <div>余额：{{ balance }}</div>
      <div>收款合约地址：{{ balance }}</div>
    </div>
    <p class="title">管理员：</p>
    <div class="manage">
      <van-button size="small" @click="adminSubmit1" type="primary">{{
        admin1Flag ? "管理员1已确认" : "管理员1未确认"
      }}</van-button>
      <van-button size="small" @click="adminSubmit2" type="primary">{{
        admin2Flag ? "管理员2已确认" : "管理员2未确认"
      }}</van-button>
    </div>
    <p class="title">提现：</p>
    <div class="inputblock">
      <van-field
        v-model="form.amount"
        label="提现金额"
        placeholder="请输入提现金额"
      />
      <van-field
        v-model="form.address"
        label="提现地址"
        placeholder="请输入提现地址"
      />

      <van-button style="width: 50px;margin:20px auto 0 ;" size="small" @click="onSubmit" type="primary">提交</van-button>
    </div>
  </div>
</template>

<script setup >
import { manageaddress, manageABI } from "../utils/manage2";
import { BWEaddress, BWEABI } from "../utils/BWE";
import { onMounted, reactive, ref } from "vue";
import { showNotify, Field } from "vant";
import { ethers } from "ethers";
import { Conctract } from "../assets/js/common";
const form = reactive({
  amount: "",
  address: "",
});
let balance = ref("");
let admin1Flag = ref(false);
let admin2Flag = ref(false);

onMounted(async () => {
  getBalance();
  getFlag();
});

const handleCopy = function () {
  const input = document.createElement("input"); // 创建input对象
  const testDiv = document.querySelector(".testDiv"); // 获取需要复制文字的容器
  input.value = manageaddress; // 设置复制内容
  document.body.appendChild(input); // 添加临时实例
  input.select(); // 选择实例内容
  document.execCommand("Copy"); // 执行复制
  document.body.removeChild(input); // 删除临时实例
  showNotify({ type: "success", message: "复制成功" });
};
const getBalance = async function () {
  const BWEConctract = await Conctract(BWEaddress, BWEABI);
  console.log(BWEConctract);

  BWEConctract.balanceOf(manageaddress).then((res) => {
    balance.value = (res / 1e18).toString();
    console.log(res, (res / 1e18).toString());
  });
};
const getFlag = async function () {
  const manageConctract = await Conctract(manageaddress, manageABI);
  manageConctract.admin1Flag().then((res) => {
    admin1Flag.value = res;
  });
  manageConctract.admin2Flag().then((res) => {
    admin2Flag.value = res;
  });
};
// 提交
const onSubmit = async () => {
  try {
    const manageConctract = await Conctract(manageaddress, manageABI);
    console.log(ethers.BigNumber.from(form.amount), form.address);

    manageConctract
      .adminWithdraw(ethers.BigNumber.from(form.amount), form.address)
      .then((res) => {
        showNotify({ type: "success", message: "提交成功" });
      });
  } catch {
    showNotify({ type: "danger", message: "提交失败" });
  }
};
const adminSubmit1 = async function () {
  try {
    const manageConctract = await Conctract(manageaddress, manageABI);
    console.log(manageConctract);
    manageConctract.admin1Confirm().then((res) => {
      console.log(res);
      getFlag();
      showNotify({ type: "success", message: "提交成功" });
    });
  } catch {
    showNotify({ type: "danger", message: "提交失败" });
  }
};
const adminSubmit2 = async function () {
  try {
    const manageConctract = await Conctract(manageaddress, manageABI);
    manageConctract.admin2Confirm().then((res) => {
      getFlag();
      showNotify({ type: "success", message: "提交成功" });
    });
  } catch {
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
.payout {
  width: 100vw;
  height: 100vh;
  background-color: rgb(247, 248, 250) !important;
  overflow: hidden;
  padding: 5px 15px;
  font-size: 14px;
  color: #7e7373;

  .constrct-message {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px 10px;
  }
  .manage {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px 10px;
    display: flex;
    justify-content: space-around;
  }
  .inputblock {
  display: flex;
  flex-direction: column;
    background-color: #fff;
    padding: 20px 0;
}
}

.fuzhi {
  width: 80px;
  height: 30px;
  background-color: rgb(25, 137, 250);
  line-height: 30px;
  border-radius: 5px;
  color: white;
  text-align: center;
}
.submitButton {
  width: 30px;
  height: 15px;
  background-color: rgb(25, 137, 250);
  line-height: 15px;
  border-radius: 5px;
  color: white;
  text-align: center;
  // font-size: 6px;
}


</style>