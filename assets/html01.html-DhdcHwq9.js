import{_ as e,o as t,c as r,e as a}from"./app-Bp0opq6Q.js";const s={},n=a(`<p>1、src和href的区别？<br> src：指向外部文件的位置，指向的内容会嵌入到文档中当前标签所在的位置（js脚本，img图片等），浏览器解析时会暂停其他资源下载，因此js脚本放在底部。<br> href：指向网络资源所在位置，在当前文档和引用资源之间建立联系。</p><div class="language-angular2html line-numbers-mode" data-highlighter="prismjs" data-ext="angular2html" data-title="angular2html"><pre class="language-angular2html"><code><span class="line">&lt;link href=”common.css” rel=”stylesheet”/&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>浏览器会识别该文档为css文件，并行下载资源且不会停止对当前文档的处理。<br> 因此建议使用link方式来加载css，而不是使用@import方式</p><p>2、html语义化：根据内容的结构化，选择合适的标签</p><p>3、DOCTYPE：告诉浏览器应该以什么样的文档类型定义解析文档，必须申明在html文档第一行<br> 浏览器渲染页面两种模式：标准模式和怪异模式（宽松的向后兼容方式）</p><p>4、script标签中的defer和async区别<br> 共同点：都是异步加载，都不会阻塞页面的解析<br> 区别：<br> （1）执行顺序：多个async，不保证执行顺序；多个defer，按照加载顺序执行<br> （2）脚本是否并行执行：async-后续文档的加载和执行与js脚本的加载和执行是并行的，即异步执行；defer-加载后续文档和js脚本的加载是并行的（异步） ，js脚本需要等文档所有元素解析完再执行。</p><p>5、常用的meta标签（描述网页文档的属性）有哪些？<br> ● charset-文档编码类型<br> ● keywords-关键字<br> ● description-页面描述<br> ● refresh-页面重定向和刷新<br> ● viewport-控制视口的大小和比例（content：宽高 缩放比例）<br> ● robots-搜索引擎索引方式（content：文件能否被检索 页面上链接能否被查询）</p><p>6、HTML5有那些更新<br> （1）语义化标签：header(页眉、头部) / nav（导航链接）/ footer（页脚、底部）/ article（文章内容）/ section（文档中的节）/ aside（侧边）<br> （2）媒体标签：audio video source<br> （3）表单：表单类型（email、url、number、search、range、color、time、data、datatime） 表单属性（placeholder提示、autofocus自动获取 焦点、autoconplete、required必填、pattern正则） 表单事件（oninput输入框内容变化、oninvalid验证不通过）<br> （4）web存储：在客户端存储的新方式，localStorage（没有时间限制的数据存储）和sessionStorage（针对一份session的数据存储 ）<br> （5）拖放（draggable=&quot;true&quot;）画布（canvas）SVG（） 地理定位</p>`,8),l=[n];function o(i,c){return t(),r("div",null,l)}const m=e(s,[["render",o],["__file","html01.html.vue"]]),p=JSON.parse('{"path":"/blogs/front/html/html01.html","title":"HTML","lang":"en-US","frontmatter":{"title":"HTML","date":"2024/09/02"},"headers":[],"git":{},"filePathRelative":"blogs/front/html/html01.md"}');export{m as comp,p as data};