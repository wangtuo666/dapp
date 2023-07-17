<template>
  <transition name="headShow">
    <div>
      <van-popup
        v-model:show="showTabble"
        position="left"
        :style="{ width: '70%', height: '100%' }"
      >
        <div class="header-wrap">
          <ul>
            <li
              @click="clickSelect(item)"
              v-for="(item, index) in tabList"
              :key="index"
            >
              <div>
                <div>
                  <van-icon :name="item.icon" />
                  {{ item.title }}
                </div>
                <div :id="item.permiss" class="icon" v-if="item.subs">
                  <van-icon name="arrow" />
                </div>
              </div>
              <transition name="showlist">
                <div class="ss" v-show="item.open">
                  <div v-for="(items, index) in item.subs" :key="index">
                    {{ items.title }}
                  </div>
                </div>
              </transition>
            </li>
          </ul>
        </div>
      </van-popup>

      <div class="header-top">
        <van-icon @click="showTabble = true" size="1.8rem" name="apps-o" />
        <p class="head-title" >{{ router.currentRoute.value.meta.title}}</p>
        <img src="../assets/images/logo.png" alt="">
      </div>
    </div>
  </transition>
</template>

<script setup >
import { reactive, ref } from "vue";
import { Icon, Overlay, Popup } from "vant";
import { useRouter } from "vue-router";
const tabList = reactive([
  {
    icon: "friends-o",
    index: "/adminpayout",
    title: "存款合约提现",
    permiss: "2",
    open: false,
  },
  {
    icon: "friends-o",
    index: "/adminpayout2",
    title: "收款合约提现",
    permiss: "3",
    open: false,
  },
]);
const showTabble = ref(false);
const router = useRouter();
const clickSelect = function (item) {
  if (item.subs) {
    if (item.open) {
      let icon = document.getElementById(item.permiss);
      console.log(icon);
      icon.className = "icon anmition2";
    } else {
      let icon = document.getElementById(item.permiss);
      console.log(icon);
      icon.className = "icon anmition1";
    }
    item.open = !item.open;
  } else {
    showTabble.value = false;
    router.push(item.index);
  }
};
</script>

<style lang="scss" >
*{
  box-sizing: border-box;
}
.header-top {
  height: 40px;
  width: 100vw;
  background-color: #242f42;
  color: white;
  line-height: 40px;
  padding: 5px 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img{
    // background-color: #fff;
    width: 100px;
    height: 20px;
  }
}
.header-wrap {
  z-index: 100;
  overflow-x: hidden;
  width: 101%;
  height: 100vh;
  overflow-y: auto;
  background-color: #324157;
  position: fixed;
  left: 0;
  top: 0;
  color: rgb(191, 203, 217);
  ul {
    padding: 35px 25px;
    box-sizing: border-box;
    font-size: 16px;
    li > div:nth-child(1) {
      height: 40px;
      line-height: 40px;
      display: flex;
      justify-content: space-between;
    }
    li {
      div:nth-child(2) {
        div {
          height: 40px;
          line-height: 40px;
        }
      }
    }
  }
}
.anmition1 {
  transform-origin: 50%, 50%;
  transform: rotate(90deg) !important;
  transition: 0.25s, 0.5s;
}
.anmition2 {
  transform-origin: 50%, 50%;
  transform: rotate(0) !important;
  transition: 0.25s, 0.5s;
}
.headShow-enter {
  width: 0;
}
.headShow-enter-to {
  width: 230px;
}
.headShow-enter-active {
  transition: 0.8s;
  transition-timing-function: ease;
}
.ss {
  overflow: hidden;
  padding-left: 8px; 
  box-sizing: border-box;
}
.head-title{
  font-size: 14px;
  font-weight: 400;
}
</style>