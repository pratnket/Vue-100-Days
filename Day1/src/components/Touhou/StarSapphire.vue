<template>
  <div>
    <div class="body">
      <img src="image/Character/800px-Illust_67156260_20200312_024334.png" />
      <p>斯妲莎菲雅 スターサファイア Star Sapphire 星光之妖精</p>
    </div>
    <div class="wrap">
      <img src="image/Background/1680px-Star-Sapphire.jpg" class="bg" />
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
      color: blue;
      background: black;
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
