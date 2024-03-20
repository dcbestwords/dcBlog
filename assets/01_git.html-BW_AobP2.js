import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as t,c as l,a,b as n,d as r,e as o}from"./app-DjAh5oHf.js";const c="/dcBlog/assets/rebase-SPk9LkCi.png",d={},p=a("h2",{id:"一、安装",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#一、安装"},[a("span",null,"一、安装")])],-1),u={href:"https://npm.taobao.org/mirrors/git-for-windows/",target:"_blank",rel:"noopener noreferrer"},m=o(`<h2 id="二、配置" tabindex="-1"><a class="header-anchor" href="#二、配置"><span>二、配置</span></a></h2><p>配置 name 和 email（标识自己身份）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;xxxx&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;xxx@xxx.xxx&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看当前的Git配置</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="三、使用-git" tabindex="-1"><a class="header-anchor" href="#三、使用-git"><span>三、使用 git</span></a></h2><h3 id="_1-查看当前仓库的状态" tabindex="-1"><a class="header-anchor" href="#_1-查看当前仓库的状态"><span>1. 查看当前仓库的状态</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-初始化仓库" tabindex="-1"><a class="header-anchor" href="#_2-初始化仓库"><span>2. 初始化仓库</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-文件状态" tabindex="-1"><a class="header-anchor" href="#_3-文件状态"><span>3. 文件状态</span></a></h3><ol><li><p>未跟踪</p><ul><li>文件没有被git所管理</li></ul></li><li><p>已跟踪</p><p>文件已经被git所管理</p><ul><li>暂存，文件修改已经保存，但是尚未提交到git仓库</li><li>未修改，表示磁盘中的文件和git仓库中的文件相同，没有修改</li><li>已修改，表示磁盘中的文件已被修改，和git仓库中文件不同</li><li>可以使用<code>git status</code>来查看文件的状态</li></ul></li><li><p>未跟踪 → 暂存</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span> 将文件切换到暂存的状态
<span class="token function">git</span> <span class="token function">add</span> * 将所有已修改（未跟踪）的文件暂存
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>暂存 → 未修改（将本地修改的代码提交到仓库与之同步）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;xxxx&quot;</span> 将暂存的文件存储到仓库中
<span class="token function">git</span> commit <span class="token parameter variable">-a</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;xxxx&quot;</span> 提交所有已修改的文件（未跟踪的文件不会提交）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>未修改 → 修改</p><ul><li>修改代码后，文件会变为修改状态</li></ul></li></ol><h3 id="_4-常用的命令" tabindex="-1"><a class="header-anchor" href="#_4-常用的命令"><span>4. 常用的命令</span></a></h3><ol><li>重置文件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> restore <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span> <span class="token comment"># 恢复文件</span>
<span class="token function">git</span> restore <span class="token parameter variable">--staged</span> <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span> <span class="token comment"># 取消暂存状态（不取消操作）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>删除文件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span> <span class="token comment"># 删除文件</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span> <span class="token parameter variable">-f</span> <span class="token comment"># 强制删除</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>移动文件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">mv</span> from to <span class="token comment"># 移动文件 重命名文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="四、分支" tabindex="-1"><a class="header-anchor" href="#四、分支"><span>四、分支</span></a></h2><h3 id="_1-基本操作" tabindex="-1"><a class="header-anchor" href="#_1-基本操作"><span>1. 基本操作</span></a></h3><p>git 在存储文件时，每一次代码的提交都会创建一个与之对应的节点（<mark>存档</mark>），git 就是通过一个一个的节点来记录代码的状态的。节点会构成一个树状结构，树状结构就意味着这个树会存在分支，默认情况下仓库只有一个分支，命名为 <mark>master</mark>。在使用 git 时，可以创建多个分支，分支与分支之间相互独立，在一个分支上修改代码不会影响其他的分支。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token comment"># 查看当前分支</span>

<span class="token comment"># 在新的分支上完成功能</span>
<span class="token function">git</span> branch <span class="token operator">&lt;</span>branch name<span class="token operator">&gt;</span> <span class="token comment"># 创建新的分支</span>
<span class="token function">git</span> switch <span class="token operator">&lt;</span>branch name<span class="token operator">&gt;</span> <span class="token comment"># 切换分支</span>
<span class="token function">git</span> switch <span class="token parameter variable">-c</span> <span class="token operator">&lt;</span>branch name<span class="token operator">&gt;</span> <span class="token comment"># 创建并切换分支</span>

<span class="token comment"># 当功能开发完成时首先切回主分支，然后合并新开发功能的分支</span>
<span class="token comment"># 测试没有问题后，将原有开发分支删除</span>
<span class="token function">git</span> merge <span class="token operator">&lt;</span>branch name<span class="token operator">&gt;</span> <span class="token comment"># 和并分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>branch name<span class="token operator">&gt;</span> <span class="token comment"># 删除分支</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在开发中，都是在自己的分支上编写代码，代码编写完成后，再将自己的分支合并到主分支中。</p><h3 id="_2-变基-rebase" tabindex="-1"><a class="header-anchor" href="#_2-变基-rebase"><span>2. 变基（rebase）</span></a></h3><p>在开发中除了通过 merge 来合并分支外，还可以通过变基来完成分支的合并。</p><p>我们通过 merge 合并分支时，在提交记录中会将所有的分支创建和分支合并的过程全部都显示出来，这样当项目比较复杂，开发过程比较波折时，我必须要反复的创建、合并、删除分支。这样一来将会使得我们代码的提交记录变得极为混乱。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> <span class="token function">git</span> rebase master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>原理（变基时发生了什么）：</p><ol><li>当我们发起变基时，git 会首先找到两条分支的最近的共同祖先</li><li>对比当前分支相对于祖先的历史提交，并且将它们提取出来存储到一个临时文件中</li><li>将当前部分指向目标的基底</li><li>以当前基底开始，重新执行历史操作</li></ol><blockquote><p>先将自己分支上的修改保存起来，在主分支新的代码之后重新进行这些操作（自己的改变先按兵不动，将新的代码拿过来再尝试将自己的修改应用到新代码中）</p></blockquote><figure><img src="`+c+`" alt="image-20230427172648863" tabindex="0" loading="lazy"><figcaption>image-20230427172648863</figcaption></figure><p>变基和 merge 对于合并分支来说最终的结果是一样的！但是变基会使得代码的提交记录更整洁更清晰！注意！大部分情况下合并和变基是可以互换的，<mark>但是如果分支已经提交给了远程仓库，那么这时尽量不要变基</mark>。</p><h2 id="五、远程仓库-remote" tabindex="-1"><a class="header-anchor" href="#五、远程仓库-remote"><span>五、远程仓库（remote）</span></a></h2><p>目前我们对于 git 所有操作都是在本地进行的。在开发中显然不能这样的，这时我们就需要一个远程的 git 仓库。远程的 git 仓库和本地的本质没有什么区别，不同点在于远程的仓库可以被多人同时访问使用，方便我们协同开发。在实际工作中，git 的服务器通常由公司搭建内部使用或是购买一些公共的私有 git 服务器。我们学习阶段，直接使用一些开放的公共 git 仓库。目前我们常用的库有两个：GitHub 和 Gitee（码云）</p><blockquote><p>将本地库上传 git：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/lilichao/git-demo.git
<span class="token comment"># git remote add &lt;remote name&gt; &lt;url&gt;</span>

<span class="token function">git</span> branch <span class="token parameter variable">-M</span> main
<span class="token comment"># 修改分支的名字的为main</span>

<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin main
<span class="token comment"># git push [remote] [branch]</span>
<span class="token comment"># git push 将代码上传服务器上</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>将本地库上传 gitee：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> gitee https://gitee.com/ymhold/vue-course.git
<span class="token function">git</span> push <span class="token parameter variable">-u</span> gitee main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-远程库的操作的命令" tabindex="-1"><a class="header-anchor" href="#_1-远程库的操作的命令"><span>1. 远程库的操作的命令</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token comment"># 列出当前的关联的远程库</span>
<span class="token function">git</span> remote <span class="token function">add</span> <span class="token operator">&lt;</span>远程库名<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span> <span class="token comment"># 关联远程仓库</span>
<span class="token function">git</span> remote remove <span class="token operator">&lt;</span>远程库名<span class="token operator">&gt;</span>  <span class="token comment"># 删除关联的远程库</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> <span class="token operator">&lt;</span>远程库名<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>分支名<span class="token operator">&gt;</span> <span class="token comment"># 向远程库推送代码，并和当前分支关联</span>
<span class="token function">git</span> push <span class="token operator">&lt;</span>远程库<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>本地分支<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>远程分支<span class="token operator">&gt;</span>
<span class="token function">git</span> clone <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span> <span class="token comment"># 从远程库下载代码</span>

<span class="token function">git</span> push <span class="token comment"># 如果本地的版本低于远程库，push默认是推不上去</span>
<span class="token function">git</span> fetch <span class="token comment"># 要想推送成功，必须先确保本地库和远程库的版本一致，fetch它会从远程仓库下载所有代码，但是它不会将代码和当前分支自动合并</span>
<span class="token comment"># 使用fetch拉取代码后，必须要手动对代码进行合并</span>
<span class="token function">git</span> merge <span class="token operator">&lt;</span>远程库名/远程分支<span class="token operator">&gt;</span>

<span class="token function">git</span> pull  <span class="token comment"># 从服务器上拉取代码并自动合并</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：推送代码之前，一定要先从远程库中拉取最新的代码</p><h3 id="_2-tag-标签" tabindex="-1"><a class="header-anchor" href="#_2-tag-标签"><span>2. tag 标签</span></a></h3><ul><li><p>当头指针没有执行某个分支的头部时，这种状态我们称为分离头指针（HEAD detached），分离头指针的状态下也可以操作代码，但是这些操作不会出现在任何的分支上，所以注意不要再分离头指针的状态下来操作仓库。</p></li><li><p>如果非得要回到后边的节点对代码进行操作，则可以选择创建分支后再操作</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> switch <span class="token parameter variable">-c</span> <span class="token operator">&lt;</span>分支名<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>提交id<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>可以为提交记录设置标签，设置标签以后，可以通过标签快速的识别出不同的开发节点：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> tag
<span class="token function">git</span> tag 版本
<span class="token function">git</span> tag 版本 提交id
<span class="token function">git</span> push 远程仓库 标签名
<span class="token function">git</span> push 远程仓库 <span class="token parameter variable">--tags</span>
<span class="token function">git</span> tag <span class="token parameter variable">-d</span> 标签名 <span class="token comment"># 删除标签</span>
<span class="token function">git</span> push 远程仓库 <span class="token parameter variable">--delete</span> 标签名 <span class="token comment"># 删除远程标签</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_3-gitignore" tabindex="-1"><a class="header-anchor" href="#_3-gitignore"><span>3. gitignore</span></a></h3><ul><li><p>默认情况下，git 会监视项目中所有内容，但是有些内容比如 node_modules 目录中的内容，我们不希望它被 git 所管理。我们可以在项目目录中添加一个<code>.gitignore</code>文件，来设置那些需要 git 忽略的文件。</p></li><li><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># Numerous always-ignore extensions  
*.bak  
*.patch  
*.diff  
*.err  

# temp file for git conflict merging  
*.orig  
*.log  
*.rej  
*.swo  
*.swp  
*.zip  
*.vi  
*~  
*.sass-cache  
*.tmp.html  
*.dump  

# OS or Editor folders  
.DS_Store  
._*  
.cache  
.project  
.settings  
.tmproj  
*.esproj  
*.sublime-project  
*.sublime-workspace  
nbproject  
thumbs.db  
*.iml  

# Folders to ignore  
.hg  
.svn  
.CVS  
.idea  
node_modules/  
jscoverage_lib/  
bower_components/  
dist/  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_4-github-的静态页面" tabindex="-1"><a class="header-anchor" href="#_4-github-的静态页面"><span>4. github 的静态页面</span></a></h3><ul><li>在 github 中，可以将自己的静态页面直接部署到 github 中，它会给我们提供一个地址使得我们的页面变成一个真正的网站，可以供用户访问。</li><li>要求： <ul><li>静态页面的分支必须叫做：gh-pages</li><li>如果希望页面可以通过 xxx.github.io 访问，则需要将库的名字配置为 xxx.github.io</li></ul></li></ul><h2 id="六、常规工作流" tabindex="-1"><a class="header-anchor" href="#六、常规工作流"><span>六、常规工作流</span></a></h2><p>将远程仓库复制到本地</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/example/example.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>新建一个自己的分支</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> my-feature
 or
<span class="token function">git</span> switch <span class="token parameter variable">-c</span> my-feature
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改代码（添加功能、修改bug...），此时可以通过下述命令查看代码变化（<mark>非必须</mark>）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加改变到暂存区</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>changed_file<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将改变提交到本地git仓库</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;fix xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果此时远程仓库没有更新，可以将改变提交到远程仓库</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin my-feature
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><p>如果此时远程仓库存在更新，则本地的版本低于远程库，push默认推不上去，此时需要先同步远程仓库的变化</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout main 
// <span class="token function">git</span> switch main
<span class="token function">git</span> pull origin master 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后切回自己的分支合并自己的修改与最新代码，当出现冲突的时候选择需要保留的代码</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git checkout my-feature 
// git switch my-feature
git rebase main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后将做出的修改推送到远程仓库</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git push -f origin my-feature
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请求pull request</p><hr><p>仓库维护者审查代码之后执行squash and merge，将分支上的改变合并为一个改变并合并，删除远程分支</p><hr><p>我们同样要删除本地的分支并拉取最新的代码</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-D</span> my-feature
<span class="token function">git</span> pull origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,74);function v(g,b){const s=i("ExternalLinkIcon");return t(),l("div",null,[p,a("p",null,[n("阿里的git镜像站："),a("a",u,[n("https://npm.taobao.org/mirrors/git-for-windows/"),r(s)]),n("，下载安装即可")]),m])}const f=e(d,[["render",v],["__file","01_git.html.vue"]]),x=JSON.parse('{"path":"/Efficiency/01_git.html","title":"Git管理","lang":"zh-CN","frontmatter":{"title":"Git管理","order":3,"icon":"git","description":"一、安装 阿里的git镜像站：https://npm.taobao.org/mirrors/git-for-windows/，下载安装即可 二、配置 配置 name 和 email（标识自己身份） 查看当前的Git配置 三、使用 git 1. 查看当前仓库的状态 2. 初始化仓库 3. 文件状态 未跟踪 文件没有被git所管理 已跟踪 文件已经被git...","head":[["meta",{"property":"og:url","content":"https://dcbestwords.gitee.io/dcBlog/Efficiency/01_git.html"}],["meta",{"property":"og:site_name","content":"dcBlog"}],["meta",{"property":"og:title","content":"Git管理"}],["meta",{"property":"og:description","content":"一、安装 阿里的git镜像站：https://npm.taobao.org/mirrors/git-for-windows/，下载安装即可 二、配置 配置 name 和 email（标识自己身份） 查看当前的Git配置 三、使用 git 1. 查看当前仓库的状态 2. 初始化仓库 3. 文件状态 未跟踪 文件没有被git所管理 已跟踪 文件已经被git..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-19T13:13:32.000Z"}],["meta",{"property":"article:author","content":"Dachao"}],["meta",{"property":"article:modified_time","content":"2024-03-19T13:13:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git管理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-19T13:13:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dachao\\",\\"email\\":\\"wyc168hard@163.com\\"}]}"]]},"headers":[{"level":2,"title":"一、安装","slug":"一、安装","link":"#一、安装","children":[]},{"level":2,"title":"二、配置","slug":"二、配置","link":"#二、配置","children":[]},{"level":2,"title":"三、使用 git","slug":"三、使用-git","link":"#三、使用-git","children":[{"level":3,"title":"1. 查看当前仓库的状态","slug":"_1-查看当前仓库的状态","link":"#_1-查看当前仓库的状态","children":[]},{"level":3,"title":"2. 初始化仓库","slug":"_2-初始化仓库","link":"#_2-初始化仓库","children":[]},{"level":3,"title":"3. 文件状态","slug":"_3-文件状态","link":"#_3-文件状态","children":[]},{"level":3,"title":"4. 常用的命令","slug":"_4-常用的命令","link":"#_4-常用的命令","children":[]}]},{"level":2,"title":"四、分支","slug":"四、分支","link":"#四、分支","children":[{"level":3,"title":"1. 基本操作","slug":"_1-基本操作","link":"#_1-基本操作","children":[]},{"level":3,"title":"2. 变基（rebase）","slug":"_2-变基-rebase","link":"#_2-变基-rebase","children":[]}]},{"level":2,"title":"五、远程仓库（remote）","slug":"五、远程仓库-remote","link":"#五、远程仓库-remote","children":[{"level":3,"title":"1. 远程库的操作的命令","slug":"_1-远程库的操作的命令","link":"#_1-远程库的操作的命令","children":[]},{"level":3,"title":"2. tag 标签","slug":"_2-tag-标签","link":"#_2-tag-标签","children":[]},{"level":3,"title":"3. gitignore","slug":"_3-gitignore","link":"#_3-gitignore","children":[]},{"level":3,"title":"4. github 的静态页面","slug":"_4-github-的静态页面","link":"#_4-github-的静态页面","children":[]}]},{"level":2,"title":"六、常规工作流","slug":"六、常规工作流","link":"#六、常规工作流","children":[]}],"git":{"createdTime":1710854012000,"updatedTime":1710854012000,"contributors":[{"name":"dachao","email":"1114686398@qq.com","commits":1}]},"readingTime":{"minutes":7.91,"words":2373},"filePathRelative":"Efficiency/01_git.md","localizedDate":"2024年3月19日","excerpt":"<h2>一、安装</h2>\\n<p>阿里的git镜像站：<a href=\\"https://npm.taobao.org/mirrors/git-for-windows/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://npm.taobao.org/mirrors/git-for-windows/</a>，下载安装即可</p>\\n<h2>二、配置</h2>\\n<p>配置 name 和 email（标识自己身份）</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--global</span> user.name <span class=\\"token string\\">\\"xxxx\\"</span>\\n<span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--global</span> user.email <span class=\\"token string\\">\\"xxx@xxx.xxx\\"</span>\\n</code></pre></div>","autoDesc":true}');export{f as comp,x as data};