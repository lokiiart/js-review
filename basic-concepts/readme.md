## 基本概念
javascript是一门非常简单但又同时非常混乱的语言。花时间回顾一下这些基本概念会让你不至于措手不及。
### es5 / es6 / es2015 / es7

es5 以前的老版本，浏览器端大都还是兼容这个版本，并且应该还是以这个版本为主吧。嗯，今年是2019年。

es6 现在最流行的版本，大量的新特性。es2015没出来之前，社区叫es6。结果官方出来了es6叫es2015，说是为了出小版本的时候方便

es7 马上要更新的版本，babel上面现在分四个小版本，stage1-4。还没有仔细了解，现在了解到最大的差别是支持async/await

### CommonJS/AMD/CMD

加载模块的方式，应该是前端热刚开始的时候最早支持的特性，require/import/export等等。由此也催生了了各种前端打包工具。NodeJS是CommonJS的。其它的看工具。现在区别不大了吧。不用太关注。

### Browserify / Webpack / Parcel

流行的时间顺序是 Browserify->webpack->parcel。当下最流行的是webpack，确实很爽，大型项目也应该是webpack用得比较多。但我因为懒所以选择了parcel。

## 基本方法

通过pure js的方式，可以更好地了解js的特性。
通过babel的将es6转换成es5可以更好的理解一些新特性被发布的历史原因。
一般的调试执行，通过nodejs就可以。

***

## 三座大山
1. 原型和原型链
2. 作用域和闭包
3. 异步和回调

### 原型和原型链

《七周七语言》里面谈到的IO与javascript是一样的基于原型链继承的一种语言。原型链继承是很易于理解且应用的一种模式。顶级成员就是对象，所有的东西都继承于Object，Object又继承于null（null却又继承与Object，这一点有点混乱，但是无需理解，开发者也在考虑要不要换掉），然后每一个对象可以理解成一个HashTable。就算在javascript里面，这个特性也没有被真的弄得乱七八糟。

#### 创建对象和创建函数的语法糖

    var o1 = {}; 
    var o2 =new Object();
    var o3 = new f1();

    function f1(){}; 
    var f2 = function(){};
    var f3 = new Function('str','console.log(str)');

    console.log(typeof Object); //function 
    console.log(typeof Function); //function  

    console.log(typeof f1); //function 
    console.log(typeof f2); //function 
    console.log(typeof f3); //function   

    console.log(typeof o1); //object 
    console.log(typeof o2); //object 
    console.log(typeof o3); //object

都可以，没有什么区别。
javascript的new object其实就是copy或者clone一个object对象。


#### 构造函数
写过程序的正经人都知道构造函数吧。java什么的都有。

    function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.sayName = function() { alert(this.name) } 
    }
    var person1 = new Person('Zaxlct', 28, 'Software Engineer');
    var person2 = new Person('Mick', 23, 'Doctor');

当然，这个Person也是一个对象，嗯，是一个函数对象。
那么person1这种实例又是一个什么对象呢？
通过调试我们知道

    Person:{
        ...
        prototype: Object{
            constructor: function Person{}
            __proto__: Object{
                constructor: function Object{}
                __proto__: null
            }
        },
        __proto__: function{
            constructor: function Function{}
            __proto__: Object{
                constructor: function Object{}
                __proto__: null
            }
        }
    }

    person1: {
        ...
        constructor: Person()
        __proto__: Object{
            constructor: function Person{}
            __proto__: Object{
                constructor: function Object{}
                __proto__: null
            }
        }
    }

当然是个普通对象。plain object。

#### 普通对象和函数对象
通过构造函数以及对两种对象内部的解析。我们容易知道下面几个事实。

    1. 每个对象都有 __proto__ （原型，具体点应该是指向原型的指针，抽象点类似于父类）属性，但只有函数对象才有 prototype 属性
        其中，函数对象的prototype是函数对象的一个默认实例。
    2. 如果代码中没有其它的继承关系。一般情况：
        plain object.__proto__->(class.prototype)Object.__proto__->Object.__proto__->null
        而
        function object.__proto__->FunctionObject（空函数）.__proto__->Object__proto__->null
        就是四层关系。
    3. 在 ECMAScript 核心所定义的全部属性中，最耐人寻味的就要数 prototype 属性了。对于 ECMAScript 中的引用类型而言，prototype 是保存着它们所有实例方法的真正所在。换句话所说，诸如 toString()和 valuseOf() 等方法实际上都保存在 prototype 名下，只不过是通过各自对象的实例访问罢了。

#### 应用
本质上，所有的对象都是根对象拷贝的时候添加几个属性或者方法，所以，在根对象上添加的方法或者属性会应用到每一个对象。
比如，可以给Object增加一个toJson()的方法。这样你的每个对象都可以方便输出成json查看。

### 作用域和闭包
这一块是真的乱，看不懂，先晾着吧。

#### 上下文环境
上下文环境就是解释器在读取代码时先在栈上做的一些操作。

#### this & _this
鬼知道指向了哪里。

#### 作用域
es5只有全局作用域和函数作用域。es6的let可以创建块作用域。还有个什么鬼作用域链。


#### 闭包
特征：函数做参数或者返回函数
原理：让子作用域内的变量保持在内存上

#### 闭包应用
单例模式
对象的私有值

### 异步和 回调&&Promise&&async/await

javascript是单线程的，即使现在可以开多线程你也不知道你的环境支持不支持。所以需要异步，需要事件循环。

异步很好理解。但是在javascript里面这个问题的解决已经经历了几个版本的方案。

#### 回调
不是所有的回调都是异步。

##### 是异步的回调
##### 不是异步的回调

##### 事件绑定是不是事件循环

#### Promise

#### async/await
