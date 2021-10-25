<template>
  <div>
    <div class="body">
      <img src="image/Character/300px-Illust_67169867_20200312_024329.png" />
      <p>露娜柴爾德 ルナチャイルド Luna Child 月光之妖精</p>
    </div>
    <div class="wrap">
      <img src="image/Background/1680px-Luna-Child.jpg" class="bg" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@keyframes appear {
  from {
    opacity: 0;
    transform: scale(1.3);
  }
}
#Touhou {
  .body {
    position: relative;
    z-index: 1;
    p {
      background: black;
      color: yellow;
    }
    img {
      position: relative;
      z-index: 1;
      width: 300px;
    }
  }
  .wrap {
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: -3;
    display: block;
    user-select: none;
  }
  .bg {
    position: fixed;
    left: 0;
    top: 0px;
    width: 1903px;
    height: 100%;
    object-fit: cover;
    object-position: 0px -200px;
    animation: 5s ease 0s 1 normal none running appear;
  }
}
</style>
