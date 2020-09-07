
class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type);
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value)
  }
  appendChild(component) { this.root.appendChild(component.root) }
}
class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content);
  }
}
export class Component {
  constructor(content) {
    this.props = Object.create(null);
    this.children = [];
    this._root = null;
  }
  setAttribute(name, value) {
    this.props[name] = value;
  }
  appendChild(component) {
    this.children.push(component);
  }
  get root() {
    if (!this._root) {
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
 */
export function createElement(type, attributes, ...children) {
  // console.log(tagName, attributes, children)
  let e;
  /* 如果是字符串，那么就当作 标签去处理 */
  if (typeof type === 'string') {
    e = new ElementWrapper(type);
  } else {
    e = new type;
  }

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
      if (typeof child  === "object"  && child instanceof Array) {
        insertChildren(child)
      }else{
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
