



1. ```.then(value => value + "!")``` .then() method will wrap the result inside of a resolve promise that way we can chain .then() on it with the result value.

2. this in function

   一般函数的this 根据其运行环境决定指向

   1. 普通的函数调用this指向全局变量(window, global object)

      ```js
      func test() {
      	this.a = 1;
      	clg(this) // window
      }
      test()
      ```

   2. 对象的函数调用，this指向调用者

      ```javascript
      var obj = {
      	a: 10,
      	test: function() {
      		clg(this); // obj
      		clg(this.a); // 10
      	}
      }
      obj.test() //
      ```

      如果把调用甩出来：相当于普通的函数调用

      ```
      var res = obj.test
      res() // window
       			// undefined
      ```

   3. 绑定this，使用call, apply, bind能把函数的this强制绑定

   4. new 关键字使得 this指向构造函数本身创建出来的对象

      

   箭头函数的this，由定义它的外部函数作用域决定

   f()是普通函数的调用，f中的this指向global obj

   ```javascript
   function f() {
     console.log("f", this);
     const run = () => {
       console.log(this);
       console.log(this.a);
     };
     run();
   }
   f() 
   //f global obj
   //global obj
   //undefined
   ```

   f()是obj的方法调用，this指向调用者，继而run中的this也和调用者一致

   ```javascript
   function f() {
     console.log("f", this);
     const run = () => {
       console.log(this);
       console.log(this.a);
     };
     run();
   }
   
   var a = {
     a: 1,
     f: f,
   };
   
   a.f();
   //f { a: 1, f: [Function: f] }
   //{ a: 1, f: [Function: f] }
   //1
   ```

   即使被甩出来，依然指向外部函数的this：

   ```javascript
   function f() {
     console.log("f", this);
     const run = () => {
       console.log(this);
       console.log(this.a);
     };
     return run;
   }
   
   var a = {
     a: 1,
     f: f,
   };
   
   a.f()();
   //f { a: 1, f: [Function: f] }
   //{ a: 1, f: [Function: f] }
   //1
   ```

   注意，js中的obj是没有作用域的，所以这里的箭头函数的外部环境的this不是A，而是window

   ```javascript
   let A = {
     a: 1,
     f: () => {
       console.log(this);
     },
   };
   A.f();
   ```

   虽然obj没有this，但是class中是有this的，它与function 作为构造函数中的this更像，指向这个class构造出来的obj，这也就是为什么在react class component中可以使用箭头函数不需要bind的原因

   箭头函数很适用于定义这样的class methods

   A good rule of thumb is this: Use arrow functions on any class methods you define and aren't part of React (i.e. render(), componentDidMount()).

   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

3. this.setState()中如果需要用到当前的state, props时，建议使用函数instead of object作为setState的第一个参数，这样可以避免多个setState同时修改导致的问题

   ```js
   this.setState((prevState, prevProps) => {
   	return {a: prevState.a + 1}
   })
   ```

4. 在constructor里加入这段的目的是使得在constructor中可以使用this.props

   ```js
   constructor(props) {
       super(props);
       this.state = {
         monsters: this.props, // 可以使用This.props
         searchField: "",
       };
   }
   ```

   在constructor参数中不加props不会影响到class中其他地方使用this.props但是在constructor内部就不能使用this.props了 

5. React-router-dom

   1. index.js 中加入<BrowserRouter> 包裹在APP外层

   2. 在App.js中

      ```jsx
      <div className="App">
        <Switch>
          <Route path="/shop/hats" component={HatsPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
      ```

   3. 

6. 两种方式实现react router跳转

   1. ```html
      <Link to="/topics"> Topics </Link> 
      ```

   2. ```html
      <button onClick={() => props.history.push('/topics')}>Topics</button>
      ```

7. props tunneling 指的是 不停地向子组件传一个prop，但是中间通过的组件并不需要这个prop，单纯是为了传递

   Solution:  {withRouter} from 'react-router-dom', which is a higher order component

   A higher order component is a function that takes a component as an arg and turns you a modified component

   ``` withRouter(MenuItem)``` 返回一个具有history, location, match等props的强化版组件

8. 快速传递参数的方法 Spread Attributes (https://reactjs.org/docs/jsx-in-depth.html#spread-attributes)

   ```js
   {this.state.sections.map(({ id, ...otherSectionProps }) => (
     <MenuItem key={id} {...otherSectionProps} />
   ))}
   等价于
   {this.state.sections.map(({ id, title, imageUrl, linkUrl}) => (
     <MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl} />
   ))}
   ```

    

9. way to import svg file

   ```js
   import { ReactComponent as Logo } from "../../assets/crown.svg";
   
   ```

10. In ES6, you can use variable as object key by using []

    ```
    {
        [yourKeyVariable]: someValueArray,
    } 
    ```

11. 



























