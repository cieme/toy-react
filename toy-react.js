
class ElementWrapper {
  constructor(type) {
    /**
     * 创建的实体dom 放到一个属性上
     */
    this.root = document.createElement(type);
    // console.log(this.root)
    // <div>abc</div>
    // <div>123</div>
    // <h1>my component</h1>
    // <div class="wrapper"><h1>my component</h1><div>abc</div><div>123</div></div>
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value)
  }
  appendChild(component) {
    this.root.appendChild(component.root)
  }
}
class TextWrapper {
  /**
   * 文本节点没有attr属性不必 setattr
   */
  constructor(content) {
    this.root = document.createTextNode(content);
  }
}
export class Component {
  constructor(content) {
    this.props = Object.create(null);
    /* element h2,element h3 */
    this.children = [];
    this._root = null;
  }
  setAttribute(name, value) {
    /**
     * props 就是 传递过来的 element
     */
    this.props[name] = value;
  }
  appendChild(component) {
    this.children.push(component);
  }
  get root() {
    /* 如果没有 root */
    if (!this._root) {
      /**
       * Mycomponent.render 
       * 如果 是 compoent 那么就会发生递归，直到变为 elementwrapper 或者 textwrapper
       */
      this._root = this.render().root;
    }
    return this._root;
  }
}
/**
 *
 * var a = createElement("div", {
    id: "a",
    "class": "c"
  }, createElement("div", null), createElement("div", null)); 
  @type :any _ element (h2,div)||Mycomponent
  @attributes :any _  null,obj{class,id...}
  @children :Array _ [ElementWrapper,textWrapper(123,皮卡丘,my component)]
 */
export function createElement(type, attributes, ...children) {
  // console.log(type, attributes, children)
  let e;
  /* 如果是字符串，那么就当作 标签去处理 */
  if (typeof type === 'string') {
    e = new ElementWrapper(type);
  } else {
    e = new type;
  }
  // console.log(e);
  /**
   * @obj {}
   */
  for (let p in attributes) {
    e.setAttribute(p, attributes[p])
  }
  /**
   * 递归处理节点
   */
  let insertChildren = (children) => {
    for (let child of children) {
      if (typeof child === 'string') {
        child = new TextWrapper(child);
      }
      if (typeof child === "object" && child instanceof Array) {
        insertChildren(child)
      } else {
        e.appendChild(child)
      }

    }
  }
  insertChildren(children);
  return e;
}
export function render(component, parentElement) {
  parentElement.appendChild(component.root)
}
