### 这是没有架构的纯过程式的javascript完成的todolist
css是用todomvc的样式
html其实也是它那个vanillaJS的页面

过滤我没写了，不知道怎么方便的获取不带name不带id不带class的dom。当然querySelector是可以获取到的。我也可以在页面上给那些锚点加个id。

但是我不愿意。

学习的目的已经达到了。

这个写法是对每一个节点的任何改动都刷新整个树。这个效果当然不好。但是写起来方便啊。

还有一种写法是针对每个节点的任何改动只刷新这一个节点。嗯，写起来太麻烦了。

嗯，下一步看一下带架构的todomvc怎么写吧。