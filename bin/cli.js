#!/usr/bin/env node
(()=>{var e={120:e=>{function o(e){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}o.keys=()=>[],o.resolve=o,o.id=120,e.exports=o},317:e=>{"use strict";e.exports=require("child_process")},330:e=>{"use strict";e.exports=JSON.parse('{"name":"@maloulab/cli","version":"1.0.0","scripts":{"test":"echo \\"Error: no test specified\\" && exit 1","build":"webpack --config webpack.config.js"},"keywords":["maloulab","maloulab/cli","@maloulab/cli","weapp"],"bin":{"malou":"./bin/cli.js"},"files":["bin","README.md"],"publishConfig":{"registry":"https://registry.npmjs.org/"},"author":"savior","license":"ISC","description":"","dependencies":{},"devDependencies":{"webpack-cli":"^5.1.4","@types/node":"^22.9.0","ts-loader":"^9.5.1","typescript":"^5.6.3","webpack":"5","webpack-shell-plugin-next":"^2.3.2"}}')}},o={};function s(t){var r=o[t];if(void 0!==r)return r.exports;var c=o[t]={exports:{}};return e[t](c,c.exports,s),c.exports}s.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{"use strict";const e="/Applications/wechatwebdevtools.app/Contents/MacOS/cli",o="C:/Program Files (x86)/Tencent/微信web开发者工具/cli.bat",t="dist",r="[32m%s[0m",c="malou",{exec:l}=s(317),a=require("fs"),p=require("path"),n="win32"===process.platform?o:e,i=".malou.config",{version:d}=s(330),u=process.argv.slice(2)[0];if("open:weapp"===u){const{devToolsPath:e,filePath:o,appId:d}=function(){const e=p.resolve(process.cwd(),i),o={appId:"",devToolsPath:n,filePath:p.resolve(process.cwd(),t)};if(console.log("-------.malou.config配置读取中----------"),!a.existsSync(e))return console.log("未发现.malou.config配置文件，使用默认配置"),o;try{const o=a.readFileSync(e,"utf-8");console.log("读取完成，正在打开");let r={};(function(e){try{return JSON.parse(e),!0}catch(e){return!1}})(o)&&(r=JSON.parse(o)),r=s(120)(e);let c=r?.devToolsPath||n,l=r?.appId||"";const i=r?.appId||t;return{appId:l,devToolsPath:c,filePath:r?.filePath||p.resolve(process.cwd(),i)}}catch(e){return console.log(`${c}: 读取${i} 文件报错:", error`),o}}();!function({wechatDevToolsPath:e,projectPath:o,appId:s}){let t=`${e} open --project ${o}`;s&&(t+=` --appId ${s}`),l(t,((t,l,a)=>{t?console.error(`${c}: 打开失败: ${t}`):(console.log(r,`${c}: success, appId：${s}`),console.log(r,`${c}: success, wechatDevToolsPath：${e}`),console.log(r,`${c}: success, projectPath${o}`))}))}({wechatDevToolsPath:e||"",projectPath:o||"",appId:d})}"--version"!==u&&"-v"!==u||(console.log(`v${d}`),process.exit(0))})()})();