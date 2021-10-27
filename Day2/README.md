# Day02 - 動態元件之應用

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

如下範例，根據點擊「露娜柴爾德」、「斯妲莎菲雅」或「桑妮蜜兒可」，<component> 會依照 :is 來代入的值來動態決定載入哪一個元件。

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

```
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { ImportAll } from "../Util/prototypes/imoprtAll";

@Component({})
export default class Touhou extends Vue {
  // 組件狀態
  private status: unknown = "LunaChild";

  private refresh = false;

  /** 切換組件 */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public doSwitch(key: unknown) {
    switch (key) {
      case "露娜柴爾德":
        this.status = "LunaChild";
        break;
      case "斯妲莎菲雅":
        this.status = "StarSapphire";
        break;
      case "桑妮蜜兒可":
        this.status = "SunnyMilk";
        break;
      default:
        this.status = "";
        break;
    }
  }

  @Watch("status")
  private watchData() {
    // 移除組件
    this.refresh = !this.refresh;
    // this.$nextTick可實現在DOM 狀態更新後，執行傳入的方法。
    this.$nextTick(() => {
      // 重新渲染組件
      console.log(this.status);

      this.refresh = !this.refresh;
    });
  }

  private created() {
    // TODO: 獲取指定目錄下所有文件路徑
    const requireComponents = require.context(
      // TODO: 其組件目錄的相對路徑
      "../components/Touhou",
      // TODO: 標記表示是否還搜索其子目錄
      true,
      // TODO: 匹配文件的正則表達式
      /\.vue/
    );
    // TODO: 動態加載文件
    ImportAll(requireComponents);
  }
}
</script>
```
