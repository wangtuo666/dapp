视频教程在项目中
视频教程在项目中
视频教程在项目中
视频教程在项目中


部署ipfs教程:
1.拉取代码修改后 上传至自己的 github仓库
2.注册https://app.fleek.co/账户并且绑定github账户
3.部署时候选择对应的仓库和分支 并且选择对应的项目语言 因为fleek并未内置vue模板 因此可以选择NuxtJs 修改创建指令 删除掉&& yarn export
4.点击确定部署 后系统会自动部署 并且部署完成后会在最后显示部署后的地址 就可以访问了 
5.如果为其他语言的项目请选择相对应的部署模板
6.若出现部署失败的情况可以选择重新部署会解决  如果不能解决  检查时候语言模板选择错误

视频教程在项目中
视频教程在项目中
视频教程在项目中
视频教程在项目中
视频教程在项目中


![1690100583574](https://github.com/wangtuo666/dapp/assets/46156408/c8a69b06-6cb7-48a6-93d2-db0fcb4de443)# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.


