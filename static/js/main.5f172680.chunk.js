(this["webpackJsonpreact-markdown-perviewer"]=this["webpackJsonpreact-markdown-perviewer"]||[]).push([[0],{135:function(e,n,t){},163:function(e,n,t){},164:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t(4),a=t.n(i),s=t(49),c=t.n(s),o=(t(57),t(21)),d=(t(58),t(10)),l=t(19),u=Object(r.jsx)(d.a,{icon:l.a}),h=function(e){return Object(r.jsxs)("div",{id:"editor-wrapper",className:"editor-wrapper ".concat(e.classes[0]),style:e.editorExpand?{width:"99%",margin:"2em 0"}:{},children:[Object(r.jsxs)("div",{className:"toolbar",style:e.editorExpand?{width:"99.5%"}:{},children:[Object(r.jsx)("span",{children:u})," Editor",Object(r.jsx)("button",{onClick:function(){e.setEditorExpand(!e.editorExpand)},children:e.classes[2]})]}),Object(r.jsx)("textarea",{style:e.editorExpand?{minHeight:"100vh"}:{},value:e.input,onChange:function(n){e.setInput(n.target.value)}})]})},p=t(50),j=t.n(p),b=(t(135),t(51)),x=t.n(b),f=function(e){var n=e.href,t=e.children;return n.match("http")?Object(r.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:t}):Object(r.jsx)("a",{href:n,children:t})},w=Object(r.jsx)(d.a,{icon:l.a}),O=function(e){return Object(r.jsxs)("div",{id:"previewer-wrapper",className:"previewer-wrapper ".concat(e.classes[1]),style:e.previewerExpand?{width:"98%"}:{},children:[Object(r.jsxs)("div",{className:"toolbar",style:e.previewerExpand?{width:"99.1%"}:{},children:[Object(r.jsx)("span",{children:w})," Previewer",Object(r.jsx)("button",{onClick:function(){e.setPreviewerExpand(!e.previewerExpand)},children:e.classes[2]})]}),Object(r.jsx)("div",{id:"previewer",children:Object(r.jsx)(j.a,{plugins:x.a,source:e.input,renderers:{link:f}})})]})},v=(t(163),t(20)),m=Object(r.jsx)(d.a,{icon:v.b}),g=Object(r.jsx)(d.a,{icon:v.a}),k=function(){var e=Object(i.useState)("\n  # Welcome to my React Markdown Previewer!\n\n  ## This is a sub-heading...\n  ### And here's some other cool stuff:\n\n  Heres some code, ``` <div></div> ```, between 2 backticks.\n\n  ```\n  // this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!  \nOr _italic_.    \nOr... wait for it... **_both!_**  \nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n        \n![React Logo w/ Text](https://goo.gl/Umyytc)\n  "),n=Object(o.a)(e,2),t=n[0],a=n[1],s=Object(i.useState)(!1),c=Object(o.a)(s,2),d=c[0],l=c[1],u=Object(i.useState)(!1),p=Object(o.a)(u,2),j=p[0],b=p[1],x=d?["expand","hide",g]:j?["hide","expand",g]:["","",m];return Object(r.jsxs)("div",{id:"wrapper",children:[Object(r.jsx)(h,{input:t,setInput:a,editorExpand:d,setEditorExpand:l,classes:x}),Object(r.jsx)(O,{input:t,previewerExpand:j,setPreviewerExpand:b,classes:x})]})},E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,165)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),r(e),i(e),a(e),s(e)}))};c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root")),E()},57:function(e,n,t){},58:function(e,n,t){}},[[164,1,2]]]);
//# sourceMappingURL=main.5f172680.chunk.js.map