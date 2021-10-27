<template>
  <div>
    <p>Zun元件(打開F12的console檢查生命週期)</p>
    <p>銷毀元件，保留輸入狀態</p>
    <input type="text" />
    <ul>
      <li v-for="(item, index) in menuItems" :key="index">{{ item.text }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Zun extends Vue {
  private count = 0;

  private menuItems: { text: string }[] = [
    {
      text: "幻想の境界",
    },
    {
      text: "隙間妖怪的式神",
    },
    {
      text: "凶兆の黑貓",
    },
  ];

  private beforeUnmount() {
    // Vue 實體物件被銷毀前
    console.log("7.beforeUnmount-Zun");
  }

  private unmounted() {
    // Vue 實體物件被銷毀完畢
    console.log("8.unmounted-Zun");
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
