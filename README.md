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

#### 3. 修改配置
> 在module中做了三处修改 
- 第一处是找到 `test: /\.css$/` 将其改为 `test: /\.(css|less)$/`

- 第二处是增加 `less-loader`的配置 

- 第三处是在exclude属性中增加 `/\.(css|less)$/`
