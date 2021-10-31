import { Component, Vue, Prop } from 'vue-property-decorator';

/** 動態加載組件
 * @param { Module } __WebpackModuleApi.RequireContext 組件
 * ----------------------------
 * 語法
 * ----------------------------
 * ImportAll(
 *   require.context(
 *     directory,
 *     (useSubdirectories = true),
 *     (regExp = /^\.\/.*$/),
 *     (mode = 'sync')
 *   );
 * );
 * ----------------------------
 * 範例
 * ----------------------------
 * const requireComponents = require.context(
 *   '../gameDetail/components',
 *   true,
 *   /\.vue/,
 * );
 * ImportAll(requireComponents);
 */

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function ImportAll(requireComponents: __WebpackModuleApi.RequireContext) {
  const fileList: Array<string> = requireComponents.keys();

  const list: Array<string> = [];
  const filter: Array<string> = ["mock", "config"];

  // TODO: 過濾非必要文件
  fileList
    .filter((item) => {
      return !filter.filter((fd) => item.includes(fd)).length;
    })
    .forEach((fileName) => {
      // TODO: 加載文件
      const reqCom = requireComponents(fileName);
      // TODO: 擷取組件名稱
      const ComName = fileName.replace(/^\.\//, '').replace(/\.\w+$/, '');

      const ipos = ComName.indexOf('/');
      const reqComName = ComName.substring(ipos + 1, ComName.length);
      const indexOf = reqComName.indexOf('/');

      if (indexOf === -1) {
        Vue.component(reqComName, reqCom.default || reqCom);
      }
    });
}
 
export { ImportAll };

export default { ImportAll };
