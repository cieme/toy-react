import { createElement, Component, render } from './toy-react'
/* 如果没有一个行为，那么应该有一个默认行为 所以需要继承 */
class Mycomponent extends Component {
  render() {
    return <section class='wrapper'>
      <h1>my component</h1>
      {this.children}
    </section>
  }
  constructor() {
    super()
    // console.log(this)
  }
}

render(<Mycomponent id='a' class='c' >
  <h2>皮卡丘</h2>
  <h3>123</h3>
</Mycomponent>, document.body)
