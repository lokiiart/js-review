## 基本概念
javascript是一门非常简单但又同时非常混乱的语言。花时间回顾一下这些基本概念会让你不至于措手不及。
### es5 / es6 / es2015 / es7

es5 以前的老版本，浏览器端大都还是兼容这个版本，并且应该还是以这个版本为主吧。嗯，今年是2019年。

es6 现在最流行的版本，大量的新特性。es2015没出来之前，社区叫es6。结果官方出来了es6叫es2015，说是为了出小版本的时候方便

es7 马上要更新的版本，babel上面现在分四个小版本，stage1-4。还没有仔细了解，现在了解到最大的差别是支持async/await

### CommonJS/AMD/CMD

加载模块的方式，前端热刚开始的时候应该是最早支持的特性，require/import/export等等。由此也催生了了各种前端打包工具。NodeJS是CommonJS的。其它的看工具。现在区别不大了吧。不用太关注。

### Browserify / Webpack / Parcel

流行的时间顺序是 Browserify-webpack-parcel。当下最流行的是webpack，确实很爽。我因为懒所以选择了parcel。

## 基本方法

通过pure js的方式，可以更好地了解js的特性。
通过babel的将es6转换成es5可以更好的理解一些新特性被发布的历史原因。

## 三座大山

### 原型和原型链

### 作用域和闭包

### 异步和 回调&&Promise&&async/await
