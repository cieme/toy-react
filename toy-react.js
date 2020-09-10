const RENDER_TO_DOM = Symbol("render to dom");
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
  get vdom() {
    return this.render().vdom;
  }
  // get vchildren() {
  //   return this.children.map(child => child.vdom);
  // }
  /**range api */
  [RENDER_TO_DOM](range) {
    this._range = range;
    this._vdom = this.vdom;
    /**递归调用 重新渲染 */
    this._vdom[RENDER_TO_DOM](range);
    // this.render()[RENDER_TO_DOM](range);
  }
  update() {
    /* 根节点对比 fun */
    let isSameNode = (oldNode, newNode) => {
      if (oldNode.type !== newNode.type)
        return false

      for (let name in newNode.props) {
        if (newNode.props[name] !== oldNode.props[name]) {
          return false;
        }
      }
      /* 属性长度 */
      if (Object.keys(oldNode.props).length > Object.keys(newNode.props).length)
        return false;
      /* 比较文本节点 */
      if (newNode.type === "#text") {
        if (newNode.content !== oldNode.content)
          return false;
      }
      return true
    }
    let update = (oldNode, newNode) => {
      //对比属性 type,props,children
      //#text content
      if (!isSameNode(oldNode, newNode)) {
        newNode[RENDER_TO_DOM](oldNode._range);
        return;
      }
      newNode._range = oldNode._range;

      let newChildren = newNode.vchildren;
      let oldChildren = oldNode.vchildren;
      if (!newChildren || !newChildren.length) {
        return;
      }

      let tailRange = oldChildren[oldChildren.length - 1]._range;

      for (let i = 0; i < newChildren.length; i++) {
        let newChild = newChildren[i];
        let oldChild = oldChildren[i];
        if (i < oldChildren.length) {
          update(oldChild, newChild);
        } else {
          let range = document.createRange();
          range.setStart(tailRange.endContainer, tailRange.endOffset);
          range.setEnd(tailRange.endContainer, tailRange.endOffset);
          newChild[RENDER_TO_DOM](range);
          tailRange = range;
          //TODO
        }
      }
    }
    let vdom = this.vdom;
    update(this._vdom, vdom);
    this._vdom = vdom;
  }
  /**重新绘制 */
  // rerender() {
  //   /* 先保存 老的 range */
  //   let oldRange = this._range;
  //   /**创建 新的 range 把他设置为 老 range 的 start */
  //   /* bug 为了保证 range 不空 需要先插入 */
  //   let range = document.createRange();
  //   range.setStart(oldRange.startContainer, oldRange.startOffset)
  //   range.setEnd(oldRange.startContainer, oldRange.startOffset);
  //   /* 老 range 的 start 挪到插入的内容之后 */
  //   this[RENDER_TO_DOM](range);
  //   oldRange.setStart(range.endContainer, range.endOffset);
  //   /**全删掉 */
  //   oldRange.deleteContents();
  //   /**渲染 */
  //   // this[RENDER_TO_DOM](this._range);
  // }
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
    // this.rerender();
    this.update();
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
class ElementWrapper extends Component {
  constructor(type) {
    super(type);
    this.type = type;
    /**
     * 创建的实体dom 放到一个属性上
     */
    // this.root = document.createElement(type);
    // console.log(this.root)
    // <div>abc</div>
    // <div>123</div>
    // <h1>my component</h1>
    // <div class="wrapper"><h1>my component</h1><div>abc</div><div>123</div></div>
  }
  // setAttribute(name, value) {
  //   /**
  //    * 处理事件
  //    * reg 匹配 所有字符 所有空白和所有非空白，可以匹配所有字符 */
  //   if (name.match(/^on([\s\S]+)$/)) {
  //     this.root.addEventListener(RegExp.$1.replace(/^[\s\S]/, c => c.toLowerCase()), value);
  //   } else {
  //     if (name === 'className') {
  //       this.root.setAttribute("class", value);
  //     }
  //     this.root.setAttribute(name, value)
  //   }

  // }
  // appendChild(component) {
  //   let range = document.createRange();
  //   /*append child 是 append 进去的一定是在最后的*/
  //   range.setStart(this.root, this.root.childNodes.length);
  //   range.setEnd(this.root, this.root.childNodes.length);
  //   // console.log(component)
  //   component[RENDER_TO_DOM](range);
  //   // this.root.appendChild(component.root)
  // }
  get vdom() {
    /* 递归调用 children 变为 vdom 树 */
    this.vchildren = this.children.map(child => child.vdom);
    return this;
    // return {
    //   type: this.type,
    //   props: this.props,
    //   children: this.children.map(child => child.vdom)
    // }
  }

  [RENDER_TO_DOM](range) {
    this._range = range;
    /**删掉内容 */
    // range.deleteContents();
    /**插入内容 */
    // range.insertNode(this.root);

    let root = document.createElement(this.type);

    for (let name in this.props) {
      let value = this.props[name];
      if (name.match(/^on([\s\S]+)$/)) {
        root.addEventListener(RegExp.$1.replace(/^[\s\S]/, c => c.toLowerCase()), value);
      } else {
        if (name === 'className') {
          root.setAttribute("class", value);
        }
        else {
          root.setAttribute(name, value)
        }
      }
    }
    if (!this.vchildren)
      this.vchildren = this.children.map(child => child.vdom);

    for (let child of this.vchildren) {
      let childRange = document.createRange();
      childRange.setStart(root, root.childNodes.length);
      childRange.setEnd(root, root.childNodes.length);
      child[RENDER_TO_DOM](childRange);
    }
    
    replaceContent(range, root);
    // range.insertNode(root);
  }
}
class TextWrapper extends Component {

  /**
   * 文本节点没有attr属性不必 setattr
   */
  constructor(content) {
    super(content);
    this.content = content;
    // this.root = document.createTextNode(content);
    this.type = "#text";
  }
  get vdom() {
    return this;
    // return {
    //   type: "#text",
    //   content: this.content
    // }
  }
  [RENDER_TO_DOM](range) {
    this._range = range;
    // /**删掉内容 */
    // range.deleteContents();
    // /**插入内容 */
    // range.insertNode(this.root);
    let root = document.createTextNode(this.content);
    replaceContent(range, root);
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
function replaceContent(range, node) {
  range.insertNode(node);
  range.setStartAfter(node);
  range.deleteContents();

  range.setStartBefore(node);
  range.setEndAfter(node);
}
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
