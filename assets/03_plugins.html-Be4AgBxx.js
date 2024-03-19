import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,e as s}from"./app-Br5h-4yB.js";const p="/dcblog/assets/16495747667518-SbtNjThj.jpg",t={},c=s(`<h2 id="一、html-webpack-plugin" tabindex="-1"><a class="header-anchor" href="#一、html-webpack-plugin"><span>一、<em>html-webpack-plugin</em></span></a></h2><p>在前端迅速发展的今天，许多没有太多技术含量并且感觉是在浪费时间的事情，就可以交给构建工具来做，例如：我们去手动创建 <code>index.html</code>，手动引入打包好的 <em>js</em> 文件等操作，都可以叫 <code>webpack</code>来做，来帮助我们提升效率。</p><p>因此，你只需要理解，插件其实就是 <code>webpack</code> 的一些扩展功能，旨在帮助我们提示效率的工具。</p><p>首先，我们在我们的项目中安装 <code>html-webpack-plugin</code> 插件，命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> html-webpack-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来在 <code>webpack.config.js</code>中引入 <code>html-webpack-plugin</code>插件，并添加 <em>plugins</em> 配置，如下：</p><p>引入 <code>html-webpack-plugin</code> 插件：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;html-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加 plugins 配置信息：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//添加插件</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们删除之前打包好的 <em>dist</em> 目录，重新运行<code>npm run dev</code>，运行结果如下：</p><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果是要为已有的 <em>html</em> 文件引入打包好的 <em>js</em> 文件，可以进行如下的设置：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 添加插件</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span>
        <span class="token comment">// 在这个插件内部，可以指定模版和自定义生成的文件名</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;main.html&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 生成的 html 文件的名称</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;src/index.html&#39;</span> <span class="token comment">// 模板文件存在的位置</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、clean-webpack-plugin" tabindex="-1"><a class="header-anchor" href="#二、clean-webpack-plugin"><span><em>二、clean-webpack-plugin</em></span></a></h2><p>当我们的 <code>src</code>目录下的原文件发生了更改，这个时候就需要重新打包。但是在重新打包之前，需要先把之前打好的包给删除掉（即 <em>dist</em> 目录），每次手动删除非常的麻烦，所以此时可以使用 <code>clean-webpack-plugin</code>插件。</p><p>首先，还是需要安装此插件：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> clean-webpack-plugin 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来在 <em>webpack.config.js</em> 文件中引入此插件，并添加到 <em>plugins</em> 所对应的数组里面，如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 引入clean-webpack-plugin插件</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>CleanWebpackPlugin<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;clean-webpack-plugin&quot;</span><span class="token punctuation">)</span>


<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//....其他插件</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置之后，每次我们运行<code>npm run dev</code>，就会将之前的 dist 目录删除掉，然后重新生成新的 dist 目录。</p><blockquote><p>注：使用 <em>clean-webpack-plugin</em> 这个插件时，必须首字母大写，否则会报错。</p></blockquote>`,22),l=[c];function i(o,d){return e(),a("div",null,l)}const m=n(t,[["render",i],["__file","03_plugins.html.vue"]]),k=JSON.parse('{"path":"/Efficiency/webpack/03_plugins.html","title":"常用基本插件","lang":"zh-CN","frontmatter":{"title":"常用基本插件","order":3,"description":"一、html-webpack-plugin 在前端迅速发展的今天，许多没有太多技术含量并且感觉是在浪费时间的事情，就可以交给构建工具来做，例如：我们去手动创建 index.html，手动引入打包好的 js 文件等操作，都可以叫 webpack来做，来帮助我们提升效率。 因此，你只需要理解，插件其实就是 webpack 的一些扩展功能，旨在帮助我们提示效...","head":[["meta",{"property":"og:url","content":"https://dcbestwords.gitee.io/dcblog/Efficiency/webpack/03_plugins.html"}],["meta",{"property":"og:site_name","content":"dcBlog"}],["meta",{"property":"og:title","content":"常用基本插件"}],["meta",{"property":"og:description","content":"一、html-webpack-plugin 在前端迅速发展的今天，许多没有太多技术含量并且感觉是在浪费时间的事情，就可以交给构建工具来做，例如：我们去手动创建 index.html，手动引入打包好的 js 文件等操作，都可以叫 webpack来做，来帮助我们提升效率。 因此，你只需要理解，插件其实就是 webpack 的一些扩展功能，旨在帮助我们提示效..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-19T13:13:32.000Z"}],["meta",{"property":"article:author","content":"Dachao"}],["meta",{"property":"article:modified_time","content":"2024-03-19T13:13:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常用基本插件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-19T13:13:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dachao\\",\\"email\\":\\"wyc168hard@163.com\\"}]}"]]},"headers":[{"level":2,"title":"一、html-webpack-plugin","slug":"一、html-webpack-plugin","link":"#一、html-webpack-plugin","children":[]},{"level":2,"title":"二、clean-webpack-plugin","slug":"二、clean-webpack-plugin","link":"#二、clean-webpack-plugin","children":[]}],"git":{"createdTime":1710854012000,"updatedTime":1710854012000,"contributors":[{"name":"dachao","email":"1114686398@qq.com","commits":1}]},"readingTime":{"minutes":1.8,"words":539},"filePathRelative":"Efficiency/webpack/03_plugins.md","localizedDate":"2024年3月19日","excerpt":"<h2>一、<em>html-webpack-plugin</em></h2>\\n<p>在前端迅速发展的今天，许多没有太多技术含量并且感觉是在浪费时间的事情，就可以交给构建工具来做，例如：我们去手动创建 <code>index.html</code>，手动引入打包好的 <em>js</em> 文件等操作，都可以叫 <code>webpack</code>来做，来帮助我们提升效率。</p>\\n<p>因此，你只需要理解，插件其实就是 <code>webpack</code> 的一些扩展功能，旨在帮助我们提示效率的工具。</p>\\n<p>首先，我们在我们的项目中安装 <code>html-webpack-plugin</code> 插件，命令如下：</p>","autoDesc":true}');export{m as comp,k as data};
