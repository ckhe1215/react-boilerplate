# react-boilerplate

React+TypeScript+Webpack

## package.json 세팅

```bash
npm init -y
```

```js
"type": "module",
"scripts": {
  "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js --coverage",
  "build": "webpack",
  "start": "webpack serve"
},
```

## webpack, react, typescript 설치

```bash
npm init -y
npm i -D webpack webpack-cli webpack-dev-server
npm i react react-dom
npm i -D typescript @types/react @types/react-dom
npm i -D jest @types/jest
npm i -D html-webpack-plugin
npm i -D ts-loader
```

## webpack.config.js 세팅

webpack.config.js 파일 참고

## tsconfig.json 세팅

```bash
npx tsc --init
```

`"jsx": "react-jsx",` 추가
