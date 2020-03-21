//1. 引入核心包
import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

//2. 类组件
class Child extends React.Component {
  state = {}
  render() {
    return (
      <div>
        <div className="one">测试 sass</div>
        <div className="">测试 less</div>
      </div>
    )
  }
}

//3. 渲染
ReactDOM.render(<Child />, document.getElementById('root'))
