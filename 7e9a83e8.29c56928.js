(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{134:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return O}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),i=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},p=function(e){var n=i(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=i(t),d=a,O=p["".concat(o,".").concat(d)]||p[d]||u[d]||c;return t?r.a.createElement(O,b(b({ref:n},s),{},{components:t})):r.a.createElement(O,b({ref:n},s))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=d;var b={};for(var l in n)hasOwnProperty.call(n,l)&&(b[l]=n[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var s=2;s<c;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},97:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return i}));var a=t(2),r=t(6),c=(t(0),t(134)),o={id:"websocket",title:"Websocket"},b={unversionedId:"browser/websocket",id:"browser/websocket",isDocsHomePage:!1,title:"Websocket",description:"\u4e00\u3001\u4e3a\u4ec0\u4e48\u9700\u8981 WebSocket\uff1f",source:"@site/docs/browser/websocket.md",slug:"/browser/websocket",permalink:"/docs/browser/websocket",editUrl:"https://github.com/Turkyden/edit/master/docs/browser/websocket.md",version:"current",sidebar:"someSidebar",previous:{title:"\u8f93\u5165 URL \u540e\u53d1\u751f\u4ec0\u4e48\ud83d\udd25",permalink:"/docs/browser/what-happen-url"},next:{title:"\u7f13\u5b58\u7b56\u7565",permalink:"/docs/performance/cache-policy"}},l=[{value:"\u4e00\u3001\u4e3a\u4ec0\u4e48\u9700\u8981 WebSocket\uff1f",id:"\u4e00\u3001\u4e3a\u4ec0\u4e48\u9700\u8981-websocket\uff1f",children:[]},{value:"\u4e8c\u3001\u7b80\u4ecb",id:"\u4e8c\u3001\u7b80\u4ecb",children:[]},{value:"\u4e09\u3001\u5ba2\u6237\u7aef\u7684\u7b80\u5355\u793a\u4f8b",id:"\u4e09\u3001\u5ba2\u6237\u7aef\u7684\u7b80\u5355\u793a\u4f8b",children:[]},{value:"\u56db\u3001\u5ba2\u6237\u7aef\u7684 API",id:"\u56db\u3001\u5ba2\u6237\u7aef\u7684-api",children:[{value:"4.1 WebSocket \u6784\u9020\u51fd\u6570",id:"41-websocket-\u6784\u9020\u51fd\u6570",children:[]},{value:"4.2 webSocket.readyState",id:"42-websocketreadystate",children:[]},{value:"4.3 webSocket.onopen",id:"43-websocketonopen",children:[]},{value:"4.4 webSocket.onclose",id:"44-websocketonclose",children:[]},{value:"4.5 webSocket.onmessage",id:"45-websocketonmessage",children:[]},{value:"4.6 webSocket.send()",id:"46-websocketsend",children:[]},{value:"4.7 webSocket.bufferedAmount",id:"47-websocketbufferedamount",children:[]},{value:"4.8 webSocket.onerror",id:"48-websocketonerror",children:[]}]},{value:"\u4e94. \u53c2\u8003\u8d44\u6599",id:"\u4e94-\u53c2\u8003\u8d44\u6599",children:[]}],s={rightToc:l};function i(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u4e00\u3001\u4e3a\u4ec0\u4e48\u9700\u8981-websocket\uff1f"},"\u4e00\u3001\u4e3a\u4ec0\u4e48\u9700\u8981 WebSocket\uff1f"),Object(c.b)("p",null,"\u521d\u6b21\u63a5\u89e6 WebSocket \u7684\u4eba\uff0c\u90fd\u4f1a\u95ee\u540c\u6837\u7684\u95ee\u9898\uff1a\u6211\u4eec\u5df2\u7ecf\u6709\u4e86 HTTP \u534f\u8bae\uff0c\u4e3a\u4ec0\u4e48\u8fd8\u9700\u8981\u53e6\u4e00\u4e2a\u534f\u8bae\uff1f\u5b83\u80fd\u5e26\u6765\u4ec0\u4e48\u597d\u5904\uff1f"),Object(c.b)("p",null,"\u7b54\u6848\u5f88\u7b80\u5355\uff0c\u56e0\u4e3a HTTP \u534f\u8bae\u6709\u4e00\u4e2a\u7f3a\u9677\uff1a\u901a\u4fe1\u53ea\u80fd\u7531\u5ba2\u6237\u7aef\u53d1\u8d77\u3002"),Object(c.b)("p",null,"\u4e3e\u4f8b\u6765\u8bf4\uff0c\u6211\u4eec\u60f3\u4e86\u89e3\u4eca\u5929\u7684\u5929\u6c14\uff0c\u53ea\u80fd\u662f\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u5668\u53d1\u51fa\u8bf7\u6c42\uff0c\u670d\u52a1\u5668\u8fd4\u56de\u67e5\u8be2\u7ed3\u679c\u3002HTTP \u534f\u8bae\u505a\u4e0d\u5230\u670d\u52a1\u5668\u4e3b\u52a8\u5411\u5ba2\u6237\u7aef\u63a8\u9001\u4fe1\u606f\u3002"),Object(c.b)("p",null,'\u8fd9\u79cd\u5355\u5411\u8bf7\u6c42\u7684\u7279\u70b9\uff0c\u6ce8\u5b9a\u4e86\u5982\u679c\u670d\u52a1\u5668\u6709\u8fde\u7eed\u7684\u72b6\u6001\u53d8\u5316\uff0c\u5ba2\u6237\u7aef\u8981\u83b7\u77e5\u5c31\u975e\u5e38\u9ebb\u70e6\u3002\u6211\u4eec\u53ea\u80fd\u4f7f\u7528"\u8f6e\u8be2"\uff1a\u6bcf\u9694\u4e00\u6bb5\u65f6\u5019\uff0c\u5c31\u53d1\u51fa\u4e00\u4e2a\u8be2\u95ee\uff0c\u4e86\u89e3\u670d\u52a1\u5668\u6709\u6ca1\u6709\u65b0\u7684\u4fe1\u606f\u3002\u6700\u5178\u578b\u7684\u573a\u666f\u5c31\u662f\u804a\u5929\u5ba4\u3002'),Object(c.b)("p",null,"\u8f6e\u8be2\u7684\u6548\u7387\u4f4e\uff0c\u975e\u5e38\u6d6a\u8d39\u8d44\u6e90\uff08\u56e0\u4e3a\u5fc5\u987b\u4e0d\u505c\u8fde\u63a5\uff0c\u6216\u8005 HTTP \u8fde\u63a5\u59cb\u7ec8\u6253\u5f00\uff09\u3002\u56e0\u6b64\uff0c\u5de5\u7a0b\u5e08\u4eec\u4e00\u76f4\u5728\u601d\u8003\uff0c\u6709\u6ca1\u6709\u66f4\u597d\u7684\u65b9\u6cd5\u3002WebSocket \u5c31\u662f\u8fd9\u6837\u53d1\u660e\u7684\u3002"),Object(c.b)("h2",{id:"\u4e8c\u3001\u7b80\u4ecb"},"\u4e8c\u3001\u7b80\u4ecb"),Object(c.b)("p",null,"WebSocket \u534f\u8bae\u57282008\u5e74\u8bde\u751f\uff0c2011\u5e74\u6210\u4e3a\u56fd\u9645\u6807\u51c6\u3002\u6240\u6709\u6d4f\u89c8\u5668\u90fd\u5df2\u7ecf\u652f\u6301\u4e86\u3002"),Object(c.b)("p",null,"\u5b83\u7684\u6700\u5927\u7279\u70b9\u5c31\u662f\uff0c\u670d\u52a1\u5668\u53ef\u4ee5\u4e3b\u52a8\u5411\u5ba2\u6237\u7aef\u63a8\u9001\u4fe1\u606f\uff0c\u5ba2\u6237\u7aef\u4e5f\u53ef\u4ee5\u4e3b\u52a8\u5411\u670d\u52a1\u5668\u53d1\u9001\u4fe1\u606f\uff0c\u662f\u771f\u6b63\u7684\u53cc\u5411\u5e73\u7b49\u5bf9\u8bdd\uff0c\u5c5e\u4e8e",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Push_technology"}),"\u670d\u52a1\u5668\u63a8\u9001\u6280\u672f"),"\u7684\u4e00\u79cd\u3002"),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"http://www.ruanyifeng.com/blogimg/asset/2017/bg2017051502.png",alt:"Websocket"}))),Object(c.b)("p",null,"\u5176\u4ed6\u7279\u70b9\u5305\u62ec\uff1a"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u5efa\u7acb\u5728 TCP \u534f\u8bae\u4e4b\u4e0a\uff0c\u670d\u52a1\u5668\u7aef\u7684\u5b9e\u73b0\u6bd4\u8f83\u5bb9\u6613\u3002"),Object(c.b)("li",{parentName:"ol"},"\u4e0e HTTP \u534f\u8bae\u6709\u7740\u826f\u597d\u7684\u517c\u5bb9\u6027\u3002\u9ed8\u8ba4\u7aef\u53e3\u4e5f\u662f80\u548c443\uff0c\u5e76\u4e14\u63e1\u624b\u9636\u6bb5\u91c7\u7528 HTTP \u534f\u8bae\uff0c\u56e0\u6b64\u63e1\u624b\u65f6\u4e0d\u5bb9\u6613\u5c4f\u853d\uff0c\u80fd\u901a\u8fc7\u5404\u79cd HTTP \u4ee3\u7406\u670d\u52a1\u5668\u3002"),Object(c.b)("li",{parentName:"ol"},"\u6570\u636e\u683c\u5f0f\u6bd4\u8f83\u8f7b\u91cf\uff0c\u6027\u80fd\u5f00\u9500\u5c0f\uff0c\u901a\u4fe1\u9ad8\u6548\u3002"),Object(c.b)("li",{parentName:"ol"},"\u53ef\u4ee5\u53d1\u9001\u6587\u672c\uff0c\u4e5f\u53ef\u4ee5\u53d1\u9001\u4e8c\u8fdb\u5236\u6570\u636e\u3002"),Object(c.b)("li",{parentName:"ol"},"\u6ca1\u6709\u540c\u6e90\u9650\u5236\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u4e0e\u4efb\u610f\u670d\u52a1\u5668\u901a\u4fe1\u3002"),Object(c.b)("li",{parentName:"ol"},"\u534f\u8bae\u6807\u8bc6\u7b26\u662fws\uff08\u5982\u679c\u52a0\u5bc6\uff0c\u5219\u4e3awss\uff09\uff0c\u670d\u52a1\u5668\u7f51\u5740\u5c31\u662f URL\u3002")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"ws://example.com:80/some/path\n")),Object(c.b)("h2",{id:"\u4e09\u3001\u5ba2\u6237\u7aef\u7684\u7b80\u5355\u793a\u4f8b"},"\u4e09\u3001\u5ba2\u6237\u7aef\u7684\u7b80\u5355\u793a\u4f8b"),Object(c.b)("p",null,"WebSocket \u7684\u7528\u6cd5\u76f8\u5f53\u7b80\u5355\u3002"),Object(c.b)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u7f51\u9875\u811a\u672c\u7684\u4f8b\u5b50\uff08\u70b9\u51fb\u8fd9\u91cc\u770b\u8fd0\u884c\u7ed3\u679c\uff09\uff0c\u57fa\u672c\u4e0a\u4e00\u773c\u5c31\u80fd\u660e\u767d\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'var ws = new WebSocket("wss://echo.websocket.org");\n\nws.onopen = function(evt) { \n  console.log("Connection open ..."); \n  ws.send("Hello WebSockets!");\n};\n\nws.onmessage = function(evt) {\n  console.log( "Received Message: " + evt.data);\n  ws.close();\n};\n\nws.onclose = function(evt) {\n  console.log("Connection closed.");\n};\n')),Object(c.b)("h2",{id:"\u56db\u3001\u5ba2\u6237\u7aef\u7684-api"},"\u56db\u3001\u5ba2\u6237\u7aef\u7684 API"),Object(c.b)("p",null,"WebSocket \u5ba2\u6237\u7aef\u7684 API \u5982\u4e0b\u3002"),Object(c.b)("h3",{id:"41-websocket-\u6784\u9020\u51fd\u6570"},"4.1 WebSocket \u6784\u9020\u51fd\u6570"),Object(c.b)("p",null,"WebSocket \u5bf9\u8c61\u4f5c\u4e3a\u4e00\u4e2a\u6784\u9020\u51fd\u6570\uff0c\u7528\u4e8e\u65b0\u5efa WebSocket \u5b9e\u4f8b\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"var ws = new WebSocket('ws://localhost:8080');\n")),Object(c.b)("p",null,"\u6267\u884c\u4e0a\u9762\u8bed\u53e5\u4e4b\u540e\uff0c\u5ba2\u6237\u7aef\u5c31\u4f1a\u4e0e\u670d\u52a1\u5668\u8fdb\u884c\u8fde\u63a5\u3002"),Object(c.b)("p",null,"\u5b9e\u4f8b\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027\u548c\u65b9\u6cd5\u6e05\u5355\uff0c\u53c2\u89c1",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSocket"}),"\u8fd9\u91cc"),"\u3002"),Object(c.b)("h3",{id:"42-websocketreadystate"},"4.2 webSocket.readyState"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"readyState")," \u5c5e\u6027\u8fd4\u56de\u5b9e\u4f8b\u5bf9\u8c61\u7684\u5f53\u524d\u72b6\u6001\uff0c\u5171\u6709\u56db\u79cd\u3002"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"CONNECTING\uff1a\u503c\u4e3a0\uff0c\u8868\u793a\u6b63\u5728\u8fde\u63a5\u3002"),Object(c.b)("li",{parentName:"ul"},"OPEN\uff1a\u503c\u4e3a1\uff0c\u8868\u793a\u8fde\u63a5\u6210\u529f\uff0c\u53ef\u4ee5\u901a\u4fe1\u4e86\u3002"),Object(c.b)("li",{parentName:"ul"},"CLOSING\uff1a\u503c\u4e3a2\uff0c\u8868\u793a\u8fde\u63a5\u6b63\u5728\u5173\u95ed\u3002"),Object(c.b)("li",{parentName:"ul"},"CLOSED\uff1a\u503c\u4e3a3\uff0c\u8868\u793a\u8fde\u63a5\u5df2\u7ecf\u5173\u95ed\uff0c\u6216\u8005\u6253\u5f00\u8fde\u63a5\u5931\u8d25\u3002")),Object(c.b)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"switch (ws.readyState) {\n  case WebSocket.CONNECTING:\n    // do something\n    break;\n  case WebSocket.OPEN:\n    // do something\n    break;\n  case WebSocket.CLOSING:\n    // do something\n    break;\n  case WebSocket.CLOSED:\n    // do something\n    break;\n  default:\n    // this never happens\n    break;\n}\n")),Object(c.b)("h3",{id:"43-websocketonopen"},"4.3 webSocket.onopen"),Object(c.b)("p",null,"\u5b9e\u4f8b\u5bf9\u8c61\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"onopen")," \u5c5e\u6027\uff0c\u7528\u4e8e\u6307\u5b9a\u8fde\u63a5\u6210\u529f\u540e\u7684\u56de\u8c03\u51fd\u6570\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"ws.onopen = function () {\n  ws.send('Hello Server!');\n}\n")),Object(c.b)("p",null,"\u5982\u679c\u8981\u6307\u5b9a\u591a\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u53ef\u4ee5\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"addEventListener")," \u65b9\u6cd5\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"ws.addEventListener('open', function (event) {\n  ws.send('Hello Server!');\n});\n")),Object(c.b)("h3",{id:"44-websocketonclose"},"4.4 webSocket.onclose"),Object(c.b)("p",null,"\u5b9e\u4f8b\u5bf9\u8c61\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"onclose")," \u5c5e\u6027\uff0c\u7528\u4e8e\u6307\u5b9a\u8fde\u63a5\u5173\u95ed\u540e\u7684\u56de\u8c03\u51fd\u6570\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'ws.onclose = function(event) {\n  var code = event.code;\n  var reason = event.reason;\n  var wasClean = event.wasClean;\n  // handle close event\n};\n\nws.addEventListener("close", function(event) {\n  var code = event.code;\n  var reason = event.reason;\n  var wasClean = event.wasClean;\n  // handle close event\n});\n')),Object(c.b)("h3",{id:"45-websocketonmessage"},"4.5 webSocket.onmessage"),Object(c.b)("p",null,"\u5b9e\u4f8b\u5bf9\u8c61\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"onmessage")," \u5c5e\u6027\uff0c\u7528\u4e8e\u6307\u5b9a\u6536\u5230\u670d\u52a1\u5668\u6570\u636e\u540e\u7684\u56de\u8c03\u51fd\u6570\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'ws.onmessage = function(event) {\n  var data = event.data;\n  // \u5904\u7406\u6570\u636e\n};\n\nws.addEventListener("message", function(event) {\n  var data = event.data;\n  // \u5904\u7406\u6570\u636e\n});\n')),Object(c.b)("p",null,"\u6ce8\u610f\uff0c\u670d\u52a1\u5668\u6570\u636e\u53ef\u80fd\u662f\u6587\u672c\uff0c\u4e5f\u53ef\u80fd\u662f\u4e8c\u8fdb\u5236\u6570\u636e\uff08",Object(c.b)("inlineCode",{parentName:"p"},"blob")," \u5bf9\u8c61\u6216 ",Object(c.b)("inlineCode",{parentName:"p"},"Arraybuffer")," \u5bf9\u8c61\uff09\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'ws.onmessage = function(event){\n  if(typeof event.data === String) {\n    console.log("Received data string");\n  }\n\n  if(event.data instanceof ArrayBuffer){\n    var buffer = event.data;\n    console.log("Received arraybuffer");\n  }\n}\n')),Object(c.b)("p",null,"\u9664\u4e86\u52a8\u6001\u5224\u65ad\u6536\u5230\u7684\u6570\u636e\u7c7b\u578b\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"binaryType")," \u5c5e\u6027\uff0c\u663e\u5f0f\u6307\u5b9a\u6536\u5230\u7684\u4e8c\u8fdb\u5236\u6570\u636e\u7c7b\u578b\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// \u6536\u5230\u7684\u662f blob \u6570\u636e\nws.binaryType = "blob";\nws.onmessage = function(e) {\n  console.log(e.data.size);\n};\n\n// \u6536\u5230\u7684\u662f ArrayBuffer \u6570\u636e\nws.binaryType = "arraybuffer";\nws.onmessage = function(e) {\n  console.log(e.data.byteLength);\n};\n')),Object(c.b)("h3",{id:"46-websocketsend"},"4.6 webSocket.send()"),Object(c.b)("p",null,"\u5b9e\u4f8b\u5bf9\u8c61\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"send()")," \u65b9\u6cd5\u7528\u4e8e\u5411\u670d\u52a1\u5668\u53d1\u9001\u6570\u636e\u3002"),Object(c.b)("p",null,"\u53d1\u9001\u6587\u672c\u7684\u4f8b\u5b50\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"ws.send('your message');\n")),Object(c.b)("p",null,"\u53d1\u9001 Blob \u5bf9\u8c61\u7684\u4f8b\u5b50\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"var file = document\n  .querySelector('input[type=\"file\"]')\n  .files[0];\nws.send(file);\n")),Object(c.b)("p",null,"\u53d1\u9001 ArrayBuffer \u5bf9\u8c61\u7684\u4f8b\u5b50\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Sending canvas ImageData as ArrayBuffer\nvar img = canvas_context.getImageData(0, 0, 400, 320);\nvar binary = new Uint8Array(img.data.length);\nfor (var i = 0; i < img.data.length; i++) {\n  binary[i] = img.data[i];\n}\nws.send(binary.buffer);\n")),Object(c.b)("h3",{id:"47-websocketbufferedamount"},"4.7 webSocket.bufferedAmount"),Object(c.b)("p",null,"\u5b9e\u4f8b\u5bf9\u8c61\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"bufferedAmount")," \u5c5e\u6027\uff0c\u8868\u793a\u8fd8\u6709\u591a\u5c11\u5b57\u8282\u7684\u4e8c\u8fdb\u5236\u6570\u636e\u6ca1\u6709\u53d1\u9001\u51fa\u53bb\u3002\u5b83\u53ef\u4ee5\u7528\u6765\u5224\u65ad\u53d1\u9001\u662f\u5426\u7ed3\u675f\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"var data = new ArrayBuffer(10000000);\nsocket.send(data);\n\nif (socket.bufferedAmount === 0) {\n  // \u53d1\u9001\u5b8c\u6bd5\n} else {\n  // \u53d1\u9001\u8fd8\u6ca1\u7ed3\u675f\n}\n")),Object(c.b)("h3",{id:"48-websocketonerror"},"4.8 webSocket.onerror"),Object(c.b)("p",null,"\u5b9e\u4f8b\u5bf9\u8c61\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"onerror")," \u5c5e\u6027\uff0c\u7528\u4e8e\u6307\u5b9a\u62a5\u9519\u65f6\u7684\u56de\u8c03\u51fd\u6570\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'socket.onerror = function(event) {\n  // handle error event\n};\n\nsocket.addEventListener("error", function(event) {\n  // handle error event\n});\n')),Object(c.b)("h2",{id:"\u4e94-\u53c2\u8003\u8d44\u6599"},"\u4e94. \u53c2\u8003\u8d44\u6599"),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.ruanyifeng.com/blog/2017/05/websocket.html"}),"WebSocket \u6559\u7a0b\xb7\u962e\u4e00\u5cf0")))}i.isMDXComponent=!0}}]);