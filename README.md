![Electron](.github/electron.svg) ![React](.github/react.svg)

# Electron RT Boilerplate
> 一个开源的 Electron 开发环境脚手架，使用了 Electron + React + Typescript + Less + Webpack进行构建。  
> 代码检查使用了 Eslint ，规则集采用的是 eslint-config-ali ，强制删除不必要的分号。

## 界面预览

<img src=".github/electronrt.png" width="80%">

## 构建说明

### 克隆代码

```
git clone git@github.com:AlishaHawkward/electron-react-typescript.git --depth=1
```

### 安装运行环境

```
// 使用npm
npm install

// 使用yarn
yarn
```

### 运行调试
```
// 使用npm
npm run dev

// 使用yarn
yarn dev
```

### 构建可执行文件
```
// 使用npm
npm run dist

// 使用yarn
yarn dist
```

## 目录说明
+ `src/common` 通用逻辑处理目录 
+ `src/main` 主进程目录
+ `src/renderer` 渲染进程目录
+ `src/static` 静态资源目录

## 使用方法

#### 修改窗口大小
打开 `src/main/index.ts` 将 `width: 600, height: 480,` 改为自定义值即可

#### 修改窗口标题
打开 `electron-webpack.json` 将 `Electron RT Boilerplate` 改为 `"You App Name"` 即可

#### 自定义 Webpack 设定
请参考[这个文档](https://webpack.electron.build/modifying-webpack-configurations)

#### 使用到的主要依赖

+ [Electron](https://electronjs.org/)
+ [Electron-Webpack](https://webpack.electron.build/)
+ [React](https://react.docschina.org/)
+ [Typescript](https://www.typescriptlang.org/)
+ [Less](http://lesscss.org/)
+ [Eslint](https://eslint.org/)

## 许可协议

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FAlishaHawkward%2Felectron-react-typescript.svg?type=large)](https://app.fossa.com/api/projects/git%2Bgithub.com%2FAlishaHawkward%2Felectron-react-typescript.svg?type=large)
