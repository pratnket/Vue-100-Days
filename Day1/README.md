# Day01 - 動態元件之應用

## 專案安裝

```
yarn install
```

### 開發編譯和熱重載

```
yarn serve
```

### 專案環境

-   vue + typescript
-   Vuex
-   Router

### 預覽畫面

![image](public/image/Preview/2021-10-26_015818.png)

![image](public/image/Preview/2021-10-26_015832.png)

![image](public/image/Preview/2021-10-26_015846.png)

動態元件（Dynamic-Components）是指可根據傳入參數的不同，而去切換不同的元件。

如下範例，根據點擊「home」、「posts」或「archieve」，<component> 會依照 :is 來代入的值來動態決定載入哪一個元件。

```
<template>
  <div>
    <!-- 動態元件（Dynamic-Components）是指可根據傳入參數的不同，而去切換不同的元件 -->
    <div id="Touhou">
      <component :is="status" :key="refresh" />
      <a href="javascript:void(0)" @click="doSwitch('露娜柴爾德')"
        >露娜柴爾德</a
      >
      |
      <a href="javascript:void(0)" @click="doSwitch('斯妲莎菲雅')"
        >斯妲莎菲雅</a
      >
      |
      <a href="javascript:void(0)" @click="doSwitch('桑妮蜜兒可')"
        >桑妮蜜兒可</a
      >
    </div>
  </div>
</template>
```
