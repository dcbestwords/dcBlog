import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,e as t}from"./app-Br5h-4yB.js";const p={},e=t(`<h2 id="一、柯里化" tabindex="-1"><a class="header-anchor" href="#一、柯里化"><span>一、柯里化</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>inArgs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> allArgs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>inArgs<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>allArgs<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> fn<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>allArgs<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">curry</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token operator">...</span>allArgs<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本质上分为两个阶段：</p><ul><li>将所有传入的参数利用闭包储存到一个数组中。</li><li>当完成 <mark>固定条件时</mark> （这里指传入参数的数量大于等于函数的数量），执行 <mark>对应的操作</mark> （执行传入的函数）</li></ul><h2 id="二、实现add-1-2-3-4" tabindex="-1"><a class="header-anchor" href="#二、实现add-1-2-3-4"><span>二、实现add(1)(2)(3)(4)</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> _args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>args<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>inArgs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    _args<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>inArgs<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> fn<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  fn<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> _args<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> fn<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>将条件变为<code>toString</code>的自动调用，即与原始数据相加，对应操作变为将储存的所有参数相加。</li></ul>`,7),o=[e];function c(l,i){return a(),s("div",null,o)}const k=n(p,[["render",c],["__file","09_curry.html.vue"]]),d=JSON.parse('{"path":"/algorithm/method_mock/09_curry.html","title":"柯里化","lang":"zh-CN","frontmatter":{"title":"柯里化","description":"一、柯里化 本质上分为两个阶段： 将所有传入的参数利用闭包储存到一个数组中。 当完成 固定条件时 （这里指传入参数的数量大于等于函数的数量），执行 对应的操作 （执行传入的函数） 二、实现add(1)(2)(3)(4) 将条件变为toString的自动调用，即与原始数据相加，对应操作变为将储存的所有参数相加。","head":[["meta",{"property":"og:url","content":"https://dcbestwords.gitee.io/dcblog/algorithm/method_mock/09_curry.html"}],["meta",{"property":"og:site_name","content":"dcBlog"}],["meta",{"property":"og:title","content":"柯里化"}],["meta",{"property":"og:description","content":"一、柯里化 本质上分为两个阶段： 将所有传入的参数利用闭包储存到一个数组中。 当完成 固定条件时 （这里指传入参数的数量大于等于函数的数量），执行 对应的操作 （执行传入的函数） 二、实现add(1)(2)(3)(4) 将条件变为toString的自动调用，即与原始数据相加，对应操作变为将储存的所有参数相加。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-19T13:13:32.000Z"}],["meta",{"property":"article:author","content":"Dachao"}],["meta",{"property":"article:modified_time","content":"2024-03-19T13:13:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"柯里化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-19T13:13:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dachao\\",\\"email\\":\\"wyc168hard@163.com\\"}]}"]]},"headers":[{"level":2,"title":"一、柯里化","slug":"一、柯里化","link":"#一、柯里化","children":[]},{"level":2,"title":"二、实现add(1)(2)(3)(4)","slug":"二、实现add-1-2-3-4","link":"#二、实现add-1-2-3-4","children":[]}],"git":{"createdTime":1710854012000,"updatedTime":1710854012000,"contributors":[{"name":"dachao","email":"1114686398@qq.com","commits":1}]},"readingTime":{"minutes":0.56,"words":168},"filePathRelative":"algorithm/method_mock/09_curry.md","localizedDate":"2024年3月19日","excerpt":"<h2>一、柯里化</h2>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">curry</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">fn<span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">...</span>args</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\"><span class=\\"token operator\\">...</span>inArgs</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">const</span> allArgs <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token operator\\">...</span>args<span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">...</span>inArgs<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>allArgs<span class=\\"token punctuation\\">.</span>length <span class=\\"token operator\\">&gt;</span> fn<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">return</span> <span class=\\"token function\\">fn</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">...</span>allArgs<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">return</span> <span class=\\"token function\\">curry</span><span class=\\"token punctuation\\">(</span>fn<span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">...</span>allArgs<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{k as comp,d as data};
