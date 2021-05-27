### ES2021

#### 1. 逻辑赋值运算符

> 新的逻辑赋值运算符有 ||= &&= ??=
* ||= => x ||= y => x = x || y

```javaScript
let a = 0
a ||= 2
console.log(a) // 2
```

* ??= => x ??= y => x = x??y (?? 专门检测值是否为null或者未定义undefined)
```javaScript
let a = 0
let b;
console.log(a ??= 3, a) // 0 0
console.log(b ??=3 , b) // 3 3
```

* &&= => x &&= y => x = x && y
```javaScript
let a = 1
a &&= 2
console.log(a) // 2

// 等价于
// if(x) x = y
```

##### 2. String.prototype.replaceAll
> replaceAll 返回一个新的字符串，该字符串匹配所有的模式都由传递的第二个参数替代
```javaScript
const str = '牛鬼蛇神牛鬼蛇神'
console.log(str.replaceAll('神', '虫')) // 牛鬼蛇虫牛鬼蛇虫
```

##### 3.数值分隔符
>　数字分隔符是为了方便提供数字的直观性
```js
const bill = 1_223_144_555; // 12亿多
```

##### 4. Promise.any
> Promise.any（）方法是一个新的Promise方法，该方法接受一系列Promise，并解析为成功解析的第一个Promise的值。换句话说，Promise.any成功解决任何承诺，如果所有承诺都拒绝，则拒绝。
```js
const pro1 = new Promise((resolve, reject) => setTimeout((x) => resolve(x), 300, '300'))
const pro2 = new Promise((resolve, reject) => setTimeout((x) => resolve(x), 200, '200'))
const pro3 = new Promise((resolve, reject) => setTimeout((x) => resolve(x), 100, '100'))

Promise.any([pro1, pro2, pro3]).then(v=> console.log(v)).catch(e=>console.log(e))  // 100
```

##### 5. WeakRef
> WeakRef对象允许您保留对另一个对象的弱引用，而不会阻止被弱引用对象被GC回收,具体可以参考[mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)
> WeakRef对象包含对对象的弱引用，这个弱引用被称为该WeakRef对象的target或者是referent。对对象的弱引用是指当该对象应该被GC回收时不会阻止GC的回收行为。而与此相反的，一个普通的引用（默认是强引用）会将与之对应的对象保存在内存中。只有当该对象没有任何的强引用时，JavaScript引擎GC才会销毁该对象并且回收该对象所占的内存空间。如果上述情况发生了，那么你就无法通过任何的弱引用来获取该对象。
```js
const weakRef = new WeakRef({
   name:"周杰伦";
});
console.log(weakRef.deref().name)  // 周杰伦
```
* mdn例子

```js
class Counter {
  constructor(element) {
    // Remember a weak reference to the DOM element
    this.ref = new WeakRef(element);
    this.start();
  }

  start() {
    if (this.timer) {
      return;
    }

    this.count = 0;

    const tick = () => {
      // Get the element from the weak reference, if it still exists
      const element = this.ref.deref();
      if (element) {
        element.textContent = ++this.count;
      } else {
        // The element doesn't exist anymore
        console.log("The element is gone.");
        this.stop();
        this.ref = null;
      }
    };

    tick();
    this.timer = setInterval(tick, 1000);
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = 0;
    }
  }
}

const counter = new Counter(document.getElementById("counter"));
counter.start();
setTimeout(() => {
  document.getElementById("counter").remove();
}, 5000);
```

### 怎么在代码库中使用ES2021的功能
> 最新版本的主流浏览器（例如Chrome85+， Firefox 79+ Safari14）已经支持ES2021的新功能，如果要在旧版本的浏览器中使用，可以使用Babel工具，
具体可以参考文档[babel 文档中对ES2021的支持](https://babeljs.io/blog/2020/07/30/7.11.0)

### 参考文献

1. [babel 文档中对ES2021的支持](https://babeljs.io/blog/2020/07/30/7.11.0)
2. [ES2021 new Features](https://backbencher.dev/javascript/es2021-new-features)
3. [New ES2021 features you may have missed](https://blog.logrocket.com/new-es2021-features-you-may-have-missed/)