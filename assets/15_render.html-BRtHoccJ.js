import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-Br5h-4yB.js";const p={},e=t(`<h2 id="一、模板语法" tabindex="-1"><a class="header-anchor" href="#一、模板语法"><span>一、模板语法</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token string">&#39;456&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token string">&#39;789&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;a{a.b}aa{a.c}aa {a.d}aaaa&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将字符串中括号内的字符由对应的变量进行替换，没有对应的变量时显示原始字符串</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">parse</span><span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> str<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;{&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      start <span class="token operator">=</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flag<span class="token punctuation">)</span> res <span class="token operator">+=</span> str<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;}&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res <span class="token operator">+=</span> <span class="token function">match</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    k<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">match</span><span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> keys <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> <span class="token constant">O</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;</span> keys<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token constant">O</span><span class="token punctuation">[</span>keys<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">{</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>str<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">}</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token constant">O</span> <span class="token operator">=</span> <span class="token constant">O</span><span class="token punctuation">[</span>keys<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    k<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token constant">O</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">parse</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//a123aa456aa 789aaaa</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、虚拟dom转真实dom" tabindex="-1"><a class="header-anchor" href="#二、虚拟dom转真实dom"><span>二、虚拟dom转真实dom</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// {</span>
<span class="token comment">//   tag, attrs, children;</span>
<span class="token comment">// }</span>
<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  container<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token function">_render</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">_render</span><span class="token punctuation">(</span><span class="token parameter">vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> vnode <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> vnode <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vnode <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> ele <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>attrs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>attrs<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      ele<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>attrs<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vnode<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">child</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">_render</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> ele<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> ele<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","15_render.html.vue"]]),d=JSON.parse(`{"path":"/algorithm/method_mock/15_render.html","title":"模板渲染","lang":"zh-CN","frontmatter":{"title":"模板渲染","description":"一、模板语法 将字符串中括号内的字符由对应的变量进行替换，没有对应的变量时显示原始字符串 二、虚拟dom转真实dom","head":[["meta",{"property":"og:url","content":"https://dcbestwords.gitee.io/dcblog/algorithm/method_mock/15_render.html"}],["meta",{"property":"og:site_name","content":"dcBlog"}],["meta",{"property":"og:title","content":"模板渲染"}],["meta",{"property":"og:description","content":"一、模板语法 将字符串中括号内的字符由对应的变量进行替换，没有对应的变量时显示原始字符串 二、虚拟dom转真实dom"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-19T13:13:32.000Z"}],["meta",{"property":"article:author","content":"Dachao"}],["meta",{"property":"article:modified_time","content":"2024-03-19T13:13:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"模板渲染\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-19T13:13:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dachao\\",\\"email\\":\\"wyc168hard@163.com\\"}]}"]]},"headers":[{"level":2,"title":"一、模板语法","slug":"一、模板语法","link":"#一、模板语法","children":[]},{"level":2,"title":"二、虚拟dom转真实dom","slug":"二、虚拟dom转真实dom","link":"#二、虚拟dom转真实dom","children":[]}],"git":{"createdTime":1710854012000,"updatedTime":1710854012000,"contributors":[{"name":"dachao","email":"1114686398@qq.com","commits":1}]},"readingTime":{"minutes":0.7,"words":211},"filePathRelative":"algorithm/method_mock/15_render.md","localizedDate":"2024年3月19日","excerpt":"<h2>一、模板语法</h2>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> a <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token literal-property property\\">b</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">123</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">c</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'456'</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">d</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'789'</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">const</span> str <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'a{a.b}aa{a.c}aa {a.d}aaaa'</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}`);export{k as comp,d as data};
