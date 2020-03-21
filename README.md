#  React 使用 sass
#### 1. 安装 node-sass
```js
yarn add node-sass 

or

cnpm i  node-sass -D  // 如果安装失败 尝试一下使用 cnpm
``` 

#### 2. 创建一个 `.scss` 文件, 引入即可
```js
import './index.scss'
```


#  React 使用 less
#### 1. 导出 webpack 配置
- 执行命令 : `yarn eject`
- 保存到本地仓库 : `git add .  和  git commit -m 信息`

#### 2. 安装依赖包
```js
yarn add less less-loader 
```

#### 3. 仿 sass 添加一个 less 正则
```js
const cssRegex = /\.(css)$/
const cssModuleRegex = /\.module\.css$/
const sassRegex = /\.(scss|sass)$/
const sassModuleRegex = /\.module\.(scss|sass)$/
// ************** 新加 less *****************
const lessRegex = /\.less$/
const lessModuleRegex = /\.module\.less$/
// ************** 新加 less *****************
```

#### 4. 仿 sass 添加一个 less 配置
```js
// 之前的 sass 的配置
{
  test: sassRegex,
  ....
},
{
  test: sassModuleRegex,
  ....
},
// 新加的 less 配置
{
  test: lessRegex,  // 新加
  exclude: lessModuleRegex,  // 新加
  use: getStyleLoaders(
    {
      importLoaders: 3,
      sourceMap: isEnvProduction && shouldUseSourceMap
    },
    'less-loader'   // 新加
  ),
  sideEffects: true
},
{
  test: lessModuleRegex,  // 新加
  use: getStyleLoaders(
    {
      importLoaders: 3,
      sourceMap: isEnvProduction && shouldUseSourceMap,
      modules: {
        getLocalIdent: getCSSModuleLocalIdent
      }
    },
    'less-loader'    // 新加
  )
},
```

