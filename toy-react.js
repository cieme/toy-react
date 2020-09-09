const RENDER_TO_DOM = Symbol("render to dom");
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
    /**
     * 处理事件
     * reg 匹配 所有字符 所有空白和所有非空白，可以匹配所有字符 */
    if (name.match(/^on([\s\S]+)$/)) {
      this.root.addEventListener(RegExp.$1.replace(/^[\s\S]/, c => c.toLowerCase()), value);
    } else {
      this.root.setAttribute(name, value)
    }

  }
  appendChild(component) {
    let range = document.createRange();
    /*append child 是 append 进去的一定是在最后的*/
    range.setStart(this.root, this.root.childNodes.length);
    range.setEnd(this.root, this.root.childNodes.length);
    // console.log(component)
    component[RENDER_TO_DOM](range);
    // this.root.appendChild(component.root)
  }
  [RENDER_TO_DOM](range) {
    /**删掉内容 */
    range.deleteContents();
    /**插入内容 */
    range.insertNode(this.root);
  }
}
class TextWrapper {
  /**
   * 文本节点没有attr属性不必 setattr
   */
  constructor(content) {
    this.root = document.createTextNode(content);
  }
  [RENDER_TO_DOM](range) {

    /**删掉内容 */
    range.deleteContents();
    /**插入内容 */
    range.insertNode(this.root);
  }
}
export class Component {
  constructor() {
    this.props = Object.create(null);
    /* element h2,element h3 */
    this.children = [];
    this._root = null;
    this._range = null;
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
  /**range api */
  [RENDER_TO_DOM](range) {
    this._range = range;
    /**递归调用 */
    this.render()[RENDER_TO_DOM](range);
  }
  /**重新绘制 */
  rerender() {
    /**全删掉 */
    this._range.deleteContents();
    /**渲染 */
    this[RENDER_TO_DOM](this._range);
  }
  setState(newState) {
    if (this.state === null || typeof this.state !== "object") {
      this.state = newState;
      this.rerender();
      return;
    }
    /**递归调用 遍历所有属性 深拷贝 */
    let merge = (oldState, newState) => {
      for (let p in newState) {
        /**如果是空 那么 直接赋值上去 */
        if (oldState[p] === null || typeof oldState[p] !== "object") {
          oldState[p] = newState[p];
        } else {
          merge(oldState[p], newState[p]);
        }
      }
    }
    merge(this.state, newState);
    this.rerender();
  }
  // get root() {
  //   /* 如果没有 root */
  //   if (!this._root) {
  //     /**
  //      * Mycomponent.render 
  //      * 如果 是 compoent 那么就会发生递归，直到变为 elementwrapper 或者 textwrapper
  //      */
  //     this._root = this.render().root;
  //   }
  //   return this._root;
  // }
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
      // console.log(child)
      if (typeof child === 'string' || typeof child === 'number') {
        // if (typeof child === 'string') {
        child = new TextWrapper(child);
      }
      if (child === null) {
        continue;
      }
      if ((typeof child === "object") && (child instanceof Array)) {
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
  // parentElement.appendChild(component.root)
  let range = document.createRange();
  /* 清到最后 0-last */
  range.setStart(parentElement, 0);
  /* childNodes 是因为可能是文本或者ele 节点  */
  range.setEnd(parentElement, parentElement.childNodes.length);
  /* 星空 */
  range.deleteContents();
  /* 渲染 */
  component[RENDER_TO_DOM](range);
}
