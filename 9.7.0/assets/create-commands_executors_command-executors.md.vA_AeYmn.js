import{_ as a,C as n,c as r,o as c,G as s,am as m,w as i,j as o,a as l}from"./chunks/framework.DAr4A1sI.js";const w=JSON.parse('{"title":"Command executors","description":"","frontmatter":{"order":1,"authors":["JorelAli"]},"headers":[],"relativePath":"create-commands/executors/command-executors.md","filePath":"en/create-commands/executors/command-executors.md","lastUpdated":1742050500000}'),d={name:"create-commands/executors/command-executors.md"};function u(h,e,p,x,f,_){const t=n("TitleAnchor");return c(),r("div",null,[s(t,{anchor:"command-executors"},{default:i(()=>e[0]||(e[0]=[o("h1",{id:"command-executors",tabindex:"-1"},[l("Command executors "),o("a",{class:"header-anchor",href:"#command-executors","aria-label":'Permalink to "Command executors"'},"​")],-1)])),_:1}),e[1]||(e[1]=m('<div class="info custom-block"><p class="custom-block-title"><strong>Developer&#39;s Note:</strong></p><p>This section can be a little bit challenging to follow. If you only want the bare basic features <em>(executes a command)</em>, read the section on <em>Normal command executors</em> - this behaves very similar to the <code>onCommand</code> method in Bukkit.</p></div><p>The CommandAPI provides various command executors which are lambdas which execute the code you want when a command is called. With a lot of simplifications, there are two main types of command executors:</p><ul><li>Ones that just run the command (let&#39;s call it a <em>normal command executor</em>)</li><li>Ones that return an integer as a result (let&#39;s call it a <em>resulting command executor</em>)</li></ul><div class="info custom-block"><p class="custom-block-title"><strong>Developer&#39;s Note:</strong></p><p>In general, you needn’t focus too much on what type of command executor to implement. If you know for certain that you&#39;re going to be using your command with command blocks, and specifically want to state whether a command returns a value, just ensure you return an integer at the end of your declared command executor. Java will infer the type <em>(whether it&#39;s a normal command executor or a resulting command executor)</em> automatically, so feel free to return an integer or not.</p></div><p>In addition to these two types of command executors, there are ways to restrict the execution of commands to certain <code>CommandSender</code> subclasses. In other words, you can make commands executable by players in game only for instance. These restrictions are covered in more detail in <a href="./normal-executors">Normal command executors</a>.</p>',5))])}const b=a(d,[["render",u]]);export{w as __pageData,b as default};
