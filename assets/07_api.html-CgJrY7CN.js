import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as e,e as n}from"./app-Br5h-4yB.js";const s="/dcblog/assets/api-BCoCukHK.png",o={},p=n('<h1 id="接口" tabindex="-1"><a class="header-anchor" href="#接口"><span>接口</span></a></h1><h2 id="一、简介" tabindex="-1"><a class="header-anchor" href="#一、简介"><span>一、简介</span></a></h2><h3 id="_1-接口是什么" tabindex="-1"><a class="header-anchor" href="#_1-接口是什么"><span>1. 接口是什么</span></a></h3><blockquote><p>接口是 <span style="color:red;">前后端通信的桥梁</span></p></blockquote><p>简单理解：一个接口就是 <span style="color:red;">服务中的一个路由规则</span> ，根据请求响应结果</p><p>接口的英文单词是 API (Application Program Interface)，所以有时也称之为 <code>API 接口</code></p><p>这里的接口指的是『数据接口』， <span style="color:red;">与编程语言（Java，Go 等）中的接口语法不同</span></p><h3 id="_2-接口的作用" tabindex="-1"><a class="header-anchor" href="#_2-接口的作用"><span>2. 接口的作用</span></a></h3><blockquote><p>实现 <span style="color:red;">前后端通信</span></p></blockquote><figure><img src="'+s+`" alt="image-20230327163353386" tabindex="0" loading="lazy"><figcaption>image-20230327163353386</figcaption></figure><h3 id="_3-接口的开发与调用" tabindex="-1"><a class="header-anchor" href="#_3-接口的开发与调用"><span>3. 接口的开发与调用</span></a></h3><p>大多数接口都是由 <span style="color:red;">后端工程师</span> 开发的， <span style="color:red;">开发语言不限</span></p><p>一般情况下接口都是由 <span style="color:red;">前端工程师</span> 调用的，但有时 <span style="color:red;">后端工程师也会调用接口</span> ，比如短信接口，支付接口 等</p><h3 id="_4-接口的组成" tabindex="-1"><a class="header-anchor" href="#_4-接口的组成"><span>4. 接口的组成</span></a></h3><p>一个接口一般由如下几个部分组成</p><ul><li><p>请求方法</p></li><li><p>接口地址（URL）</p></li><li><p>请求参数</p></li><li><p>响应结果</p></li></ul><p>一个接口示例 https://www.free-api.com/doc/325</p><p>体验一下： https://api.asilu.com/idcard/?id=371522199111299668</p><h2 id="二、restful-api" tabindex="-1"><a class="header-anchor" href="#二、restful-api"><span>二、RESTful API</span></a></h2><p>RESTful API 是一种特殊风格的接口，主要特点有如下几个：</p><ul><li>URL 中的路径表示 <span style="color:red;">资源</span>，路径中不能有 <code>动词</code>，例如<code>create</code> , <code>delete</code> , <code>update</code> 等这些都不能有</li><li>操作资源要与 <code>HTTP 请求方法</code> 对应</li><li>操作结果要与 <code>HTTP 响应状态码</code> 对应</li></ul><p>规则示例：</p><table><thead><tr><th>操作</th><th>请求类型</th><th>URL</th><th>返回</th></tr></thead><tbody><tr><td>新增歌曲</td><td>POST</td><td>/song</td><td>返回新生成的歌曲信息</td></tr><tr><td>删除歌曲</td><td>DELETE</td><td>/song/10</td><td>返回一个空文档</td></tr><tr><td>修改歌曲</td><td>PUT</td><td>/song/10</td><td>返回更新后的歌曲信息</td></tr><tr><td>修改歌曲</td><td>PATCH</td><td>/song/10</td><td>返回更新后的歌曲信息</td></tr><tr><td>获取所有歌曲</td><td>GET</td><td>/song</td><td>返回歌曲列表数组</td></tr><tr><td>获取单个歌曲</td><td>GET</td><td>/song/10</td><td>返回单个歌曲信息</td></tr></tbody></table><blockquote><p>扩展阅读： https://www.ruanyifeng.com/blog/2014/05/restful_api.html</p></blockquote><p><strong>可以根据MVC的结构对业务代码进行进一步的拆分</strong></p><h2 id="三、json-server" tabindex="-1"><a class="header-anchor" href="#三、json-server"><span>三、json-server</span></a></h2><p>json-server 本身是一个 JS 编写的工具包，可以快速搭建 RESTful API 服务</p><p>官方地址: https://github.com/typicode/json-server</p><p>操作步骤：</p><ol><li><p>全局安装 <code>json-server</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> json-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>创建 JSON 文件（db.json），编写基本结构</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;song&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;干杯&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;singer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;五月天&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;当&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;singer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;动力火车&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;不能说的秘密&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;singer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;周杰伦&quot;</span> <span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>以 JSON 文件所在文件夹作为工作目录</code>，执行如下命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>json-server <span class="token parameter variable">--watch</span> db.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p>默认监听端口为 <code>3000</code></p><h2 id="四、接口测试工具" tabindex="-1"><a class="header-anchor" href="#四、接口测试工具"><span>四、接口测试工具</span></a></h2><p>介绍几个接口测试工具</p><p>apipost https://www.apipost.cn/ (中文)</p><p>apifox https://www.apifox.cn/ (中文)</p><p>postman https://www.postman.com/ (英文)</p>`,36),r=[p];function l(c,i){return t(),e("div",null,r)}const h=a(o,[["render",l],["__file","07_api.html.vue"]]),m=JSON.parse('{"path":"/Server/nodeJS/07_api.html","title":"接口","lang":"zh-CN","frontmatter":{"description":"接口 一、简介 1. 接口是什么 接口是 前后端通信的桥梁 简单理解：一个接口就是 服务中的一个路由规则 ，根据请求响应结果 接口的英文单词是 API (Application Program Interface)，所以有时也称之为 API 接口 这里的接口指的是『数据接口』， 与编程语言（Java，Go 等）中的接口语法不同 2. 接口的作用 实现 ...","head":[["meta",{"property":"og:url","content":"https://dcbestwords.gitee.io/dcblog/Server/nodeJS/07_api.html"}],["meta",{"property":"og:site_name","content":"dcBlog"}],["meta",{"property":"og:title","content":"接口"}],["meta",{"property":"og:description","content":"接口 一、简介 1. 接口是什么 接口是 前后端通信的桥梁 简单理解：一个接口就是 服务中的一个路由规则 ，根据请求响应结果 接口的英文单词是 API (Application Program Interface)，所以有时也称之为 API 接口 这里的接口指的是『数据接口』， 与编程语言（Java，Go 等）中的接口语法不同 2. 接口的作用 实现 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-19T13:13:32.000Z"}],["meta",{"property":"article:author","content":"Dachao"}],["meta",{"property":"article:modified_time","content":"2024-03-19T13:13:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"接口\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-19T13:13:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dachao\\",\\"email\\":\\"wyc168hard@163.com\\"}]}"]]},"headers":[{"level":2,"title":"一、简介","slug":"一、简介","link":"#一、简介","children":[{"level":3,"title":"1. 接口是什么","slug":"_1-接口是什么","link":"#_1-接口是什么","children":[]},{"level":3,"title":"2. 接口的作用","slug":"_2-接口的作用","link":"#_2-接口的作用","children":[]},{"level":3,"title":"3. 接口的开发与调用","slug":"_3-接口的开发与调用","link":"#_3-接口的开发与调用","children":[]},{"level":3,"title":"4. 接口的组成","slug":"_4-接口的组成","link":"#_4-接口的组成","children":[]}]},{"level":2,"title":"二、RESTful API","slug":"二、restful-api","link":"#二、restful-api","children":[]},{"level":2,"title":"三、json-server","slug":"三、json-server","link":"#三、json-server","children":[]},{"level":2,"title":"四、接口测试工具","slug":"四、接口测试工具","link":"#四、接口测试工具","children":[]}],"git":{"createdTime":1710854012000,"updatedTime":1710854012000,"contributors":[{"name":"dachao","email":"1114686398@qq.com","commits":1}]},"readingTime":{"minutes":2.23,"words":668},"filePathRelative":"Server/nodeJS/07_api.md","localizedDate":"2024年3月19日","excerpt":"\\n<h2>一、简介</h2>\\n<h3>1. 接口是什么</h3>\\n<blockquote>\\n<p>接口是 <span style=\\"color:red\\">前后端通信的桥梁</span></p>\\n</blockquote>\\n<p>简单理解：一个接口就是 <span style=\\"color:red\\">服务中的一个路由规则</span> ，根据请求响应结果</p>\\n<p>接口的英文单词是 API (Application Program Interface)，所以有时也称之为 <code>API 接口</code></p>\\n<p>这里的接口指的是『数据接口』， <span style=\\"color:red\\">与编程语言（Java，Go 等）中的接口语法不同</span></p>","autoDesc":true}');export{h as comp,m as data};