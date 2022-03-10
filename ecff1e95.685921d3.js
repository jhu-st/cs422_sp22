(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),r=(n(0),n(126)),o={id:"ex5",title:"Exercise 5 (Thu 2/10)"},c={unversionedId:"ex/ex5",id:"ex/ex5",isDocsHomePage:!1,title:"Exercise 5 (Thu 2/10)",description:"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions. Aim to complete as much as possible during our meeting, but you need not hand it in.",source:"@site/docs\\ex\\ex5.md",slug:"/ex/ex5",permalink:"/cs422_sp22/docs/ex/ex5",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ex/ex5.md",version:"current"},s=[{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"Questions",id:"questions",children:[]}],l={toc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions. Aim to complete as much as possible during our meeting, but you need not hand it in. "))),Object(r.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(r.b)("div",{className:"admonition admonition-success alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Objectives")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This exercise should help you practice with:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"Coverage criterion"),Object(r.b)("li",{parentName:"ul"},"Subsumption"),Object(r.b)("li",{parentName:"ul"},"Combination-based criteria")))),Object(r.b)("h2",{id:"questions"},"Questions"),Object(r.b)("p",null,"The following questions are desgined to stimulate your thinking and solidify your understanding of criteria-based testing. Contemplate about each and answer them the best you can:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Does path coverage subsume branch coverage? If not, give an example.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Give an actual example (i.e., a program) where a ",Object(r.b)("strong",{parentName:"p"},"minimum")," test set is different from a ",Object(r.b)("strong",{parentName:"p"},"minimal")," test set for some program P and some coverage criterion C with the test requirement set TR.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Give an example of a program that is faulty and two test sets S1 and S2 where S1 achieves statement coverage and reveals the fault in the program, but S2 that achieves branch coverage does NOT reveal that fault.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Give an example of a program that is faulty and two test sets S1 and S2 where both S1 and S2 achieve either statement coverage or branch coverage, but only one of the test sets reveals the fault in the program.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Give an example of a program that is faulty and a test set S1 that acheieves path coverage but does NOT reveal the fault.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Recall the following function that determines the type of a traingle given its sides' lengths:"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"int traingle(int a, int b, int c) { ... }\n")),Object(r.b)("p",null,"Assume we have applied EP on the input domains of the three input parameters ",Object(r.b)("inlineCode",{parentName:"p"},"a"),", ",Object(r.b)("inlineCode",{parentName:"p"},"b")," and ",Object(r.b)("inlineCode",{parentName:"p"},"c")," such that each domain is partitioned into three (equivalence) blocks of negative (N), zero (Z), and positive (P)."),Object(r.b)("p",null,"Answer the followings:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"What is the total number of test requirements for ",Object(r.b)("em",{parentName:"li"},"All Combinations Coverage (ACoC)"),"?"),Object(r.b)("li",{parentName:"ul"},"Write down test requirements for ",Object(r.b)("em",{parentName:"li"},"pair-wise coverage (PWC)"),"."),Object(r.b)("li",{parentName:"ul"},"Assume positive (P) is the base choice for all three inputs ",Object(r.b)("inlineCode",{parentName:"li"},"a"),", ",Object(r.b)("inlineCode",{parentName:"li"},"b"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"c"),". Write the test requirements for ",Object(r.b)("em",{parentName:"li"},"Base Choice Coverage (BCC)"),".")))}b.isMDXComponent=!0},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,d=p["".concat(o,".").concat(u)]||p[u]||m[u]||r;return n?i.a.createElement(d,c(c({ref:t},l),{},{components:n})):i.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);