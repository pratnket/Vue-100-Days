# Day02 - Vue 元件的生命週期與更新機制

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

### 線上預覽

-   https://codepen.io/pratnket/pen/VwzpqJr?editors=1010

### 前言

Vue 的實體物件從建立、掛載、更新，到銷毀移除，這一連串的過程，我們將它稱作生命週期。 在這個過程中， Vue.js 提供了開發者在這些週期階段做對應處理的 callback function， 這些 callback function 我們就稱它叫生命週期的 Hooks function。

---

生命週期:

-   beforeCreate
    -   Vue 實體被建立，狀態與事件都尚未初始化
-   created
    -   Vue 實體已建立，狀態與事件已初始化完成 (prop、data、computed 等屬性已建立，vm.$el 屬性無法使用 )
-   beforeMount
    -   Vue 實體尚未與模板 (DOM 節點) 綁定
-   mounted
    -   實體與掛載完成， el 的目標 DOM 被 $el 所替換 (可以視作 jQuery 的 Ready)
-   beforeUpdate
    -   Vue 實體尚未與模板 (DOM 節點) 綁定
-   updated
    -   Vue 當狀態被變動時，畫面已同步更新完成
-   beforeDestroy
    -   (2.X)Vue 實體物件被銷毀前
-   beforeUnmount
    -   (3.0)Vue 實體物件被銷毀前
-   destroyed (2.X)
    -   Vue 實體物件被銷毀完畢
-   unmounted (3.0)
    -   Vue 實體物件被銷毀完畢
-   errorCaptured
    -   子/孫代元件的錯誤被捕獲時觸發
-   activated
    -   Vue 元件被啟動時觸發，搭配 keep-alive 使用
-   deactivated
    -   Vue 元件被解除時觸發，搭配 keep-alive 使用

### 生命週期與 Hooks function

---

![image](public/image/Preview/status.png)
