import { createElement, Component, render } from './toy-react'
/* 如果没有一个行为，那么应该有一个默认行为 所以需要继承 */
class Mycomponent extends Component {
  constructor() {
    super();
    this.state = {
      a: 'aaaa',
      b: 123
    }
  }
  render() {
    return <section class='wrapper'>
      <h1>my component</h1>
      <button onclick={() => { this.state.b += 1; this.rerender() }}>BUTTON ADDHANDLE</button>
      {/* <h5>{JSON.stringify(this.state)}</h5> */}
      {/* <h5>{"123"}</h5> */}
      <h5>{this.state.b}</h5>
      {this.children}
    </section >
  }
}

render(<Mycomponent id='a' class='c' >
  <h2>皮卡丘</h2>
  <h3>123</h3>
</Mycomponent>, document.body)
