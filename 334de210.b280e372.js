(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{134:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,d=s["".concat(c,".").concat(m)]||s[m]||b[m]||o;return r?a.a.createElement(d,i(i({ref:t},l),{},{components:r})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(134)),c={slug:"understand-typescript-type-notation",title:"\u7406\u89e3 Typescript \u7684\u7c7b\u578b\u6ce8\u89e3",author:"Turkyden",author_title:"A Coder & Designer",author_url:"https://github.com/Turkyden",author_image_url:"https://avatars2.githubusercontent.com/u/24560160?s=460&u=a615f51b53cd57ce0cc8e8c0234c2f1618eec99b&v=4",tags:["Typescript","Javascript","Development"]},i={permalink:"/blog/understand-typescript-type-notation",editUrl:"https://github.com/Turkyden/edit/master/blog/blog/2020-09-23-understand-typescript-type-notation.md",source:"@site/blog/2020-09-23-understand-typescript-type-notation.md",description:"Welcome to this blog. This blog is created with Docusaurus 2 alpha.",date:"2020-09-23T00:00:00.000Z",tags:[{label:"Typescript",permalink:"/blog/tags/typescript"},{label:"Javascript",permalink:"/blog/tags/javascript"},{label:"Development",permalink:"/blog/tags/development"}],title:"\u7406\u89e3 Typescript \u7684\u7c7b\u578b\u6ce8\u89e3",readingTime:.295,truncated:!0,prevItem:{title:"Low Code Platform \u4f4e\u4ee3\u7801\u5f00\u53d1",permalink:"/blog/low-code-platform"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},p=[{value:"Trying out the code examples",id:"trying-out-the-code-examples",children:[]}],l={rightToc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Welcome to this blog. This blog is created with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://v2.docusaurus.io/"}),Object(o.b)("strong",{parentName:"a"},"Docusaurus 2 alpha")),"."),Object(o.b)("p",null,"This is a test post."),Object(o.b)("p",null,"A whole bunch of other information."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"interface Array<T> {\n  concat(...items: Array<T[] | T>): T[];\n  reduce<U>(\n    callback: (state: U, element: T, index: number, array: T[]) => U,\n    firstState?: U\n  ): U;\n  // \xb7\xb7\xb7\n}\n")),Object(o.b)("h2",{id:"trying-out-the-code-examples"},"Trying out the code examples"))}u.isMDXComponent=!0}}]);