<template>
  <div>
    <p>Touhou元件(打開F12的console檢查生命週期)</p>
    <p>銷毀元件，不保留輸入狀態</p>
    <input type="text" />
    <ul>
      <li v-for="(item, index) in menuItems" :key="index">{{ item.text }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Touhou extends Vue {
  private count = 0;

  private menuItems: { text: string }[] = [
    {
      text: "日光之妖精",
    },
    {
      text: "月光之妖精",
    },
    {
      text: "星光之妖精",
    },
  ];

  private mounted() {
    // 當狀態被變動時，畫面同步更新前
    console.log("5.beforeUpdate-App");
    // 故意引發錯誤讓 errorCaptured 捕捉
    // a
  }

  private activated() {
    // Vue 元件被啟動時觸發，搭配 keep-alive 使用
    console.log("9.activated-Zun");
  }

  private deactivated() {
    // Vue 元件被解除時觸發，搭配 keep-alive 使用
    console.log("10.deactivated-Zun");
  }
}
</script>

<style scoped lang="scss"></style>
