import { createElement, Component, render } from './toy-react'
/* 如果没有一个行为，那么应该有一个默认行为 所以需要继承 */
class Mycomponent extends Component {
  render() {
    return <div>
      <h1>my component</h1>
      {this.children}
    </div>
  }
}

render(<Mycomponent id='a' class='c' >
  <div>abc</div>
  <div></div>
</Mycomponent>, document.body) 