(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{116:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(3),i=(a(0),a(125));const r={id:"ex4",title:"Exercise 4 (Tue 2/8)"},c={unversionedId:"ex/ex4",id:"ex/ex4",isDocsHomePage:!1,title:"Exercise 4 (Tue 2/8)",description:"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions. Aim to complete as much as possible during our meeting, but you need not hand it in.",source:"@site/docs\\ex\\ex4.md",slug:"/ex/ex4",permalink:"/cs422_sp22/docs/ex/ex4",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ex/ex4.md",version:"current"},o=[{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"Quick Question 1: Find the problem",id:"quick-question-1-find-the-problem",children:[]},{value:"Quick Question 2: Test Fxiture",id:"quick-question-2-test-fxiture",children:[]},{value:"Task 1: Parameterzied Tests machanics",id:"task-1-parameterzied-tests-machanics",children:[]},{value:"Task 2: Tag and Filter",id:"task-2-tag-and-filter",children:[]}],s={toc:o};function b({components:e,...t}){return Object(i.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions. Aim to complete as much as possible during our meeting, but you need not hand it in. "))),Object(i.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(i.b)("div",{className:"admonition admonition-success alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Objectives")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This exercise should help you practice with:"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"JUnit concepts and mechanics")))),Object(i.b)("h2",{id:"quick-question-1-find-the-problem"},"Quick Question 1: Find the problem"),Object(i.b)("p",null,"Assume the following code does not have any syntactical flaws. The goal of the test is to make sure the ",Object(i.b)("inlineCode",{parentName:"p"},"sort")," method works as expected. Do you see any issues with this test case?"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testSort() {\n   names.add ("Laura"); \n   names.add ("Han"); \n   names.add ("Alex"); \n   names.add ("Ashley"); \n   names.sort(); \n   assertTrue ("Sort method", names.getFirst().equals("Alex"));\n}\n')),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"In the ",Object(i.b)("inlineCode",{parentName:"p"},"testSort")," method, ",Object(i.b)("inlineCode",{parentName:"p"},"names")," is an instance of an object that stores strings and has methods ",Object(i.b)("inlineCode",{parentName:"p"},"add()"),", ",Object(i.b)("inlineCode",{parentName:"p"},"sort()"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"getFirst()"),", which do exactly what you would expect from their names. You can assume that the object names has been properly instantiated and the ",Object(i.b)("inlineCode",{parentName:"p"},"add()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"getFirst()")," methods have already been tested and work correctly."))),Object(i.b)("h2",{id:"quick-question-2-test-fxiture"},"Quick Question 2: Test Fxiture"),Object(i.b)("p",null,"Assume you were writing a JUnit test class to test the functionalities that ",Object(i.b)("inlineCode",{parentName:"p"},"ArrayList")," of Java utilities offers! Also, assume you would wanted to start with an empty ",Object(i.b)("inlineCode",{parentName:"p"},"ArrayList")," for each test case. Which of ",Object(i.b)("inlineCode",{parentName:"p"},"@BeforeEach"),", ",Object(i.b)("inlineCode",{parentName:"p"},"@BeforeAll"),", ",Object(i.b)("inlineCode",{parentName:"p"},"@AfterEach"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"@AfterAll")," you would make use of? What exactly would go inside each (that you'd use)?"),Object(i.b)("h2",{id:"task-1-parameterzied-tests-machanics"},"Task 1: Parameterzied Tests machanics"),Object(i.b)("p",null,"Recall in task 1 of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"ex3"}),"exercise 3"),", you were asked to write test cases for ",Object(i.b)("inlineCode",{parentName:"p"},"countOutsideRange"),". Implement the test cases you developed there as a single ",Object(i.b)("strong",{parentName:"p"},"paramerized test"),". "),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Try to look up and find out how you can write parameterized tests where an input to the function is an array. Also, how would you go about tailoring the expected value for each test case?"))),Object(i.b)("h2",{id:"task-2-tag-and-filter"},"Task 2: Tag and Filter"),Object(i.b)("p",null,"Do a git pull on the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jhu-st/jhu-st-sp22-public"}),"course public repo")," that contains test cases in a file named ",Object(i.b)("inlineCode",{parentName:"p"},"TriangleTest.java")," for ",Object(i.b)("inlineCode",{parentName:"p"},"Triangle.triangle")," included in ",Object(i.b)("inlineCode",{parentName:"p"},"jhu-triangle-0.1.0.jar")," that we worked on in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"ex2"}),"exercise 2"),":"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Tag each test case in ",Object(i.b)("inlineCode",{parentName:"p"},"TriangleTest.java")," as either ",Object(i.b)("inlineCode",{parentName:"p"},"EP")," i.e., equivalnce partitioning or ",Object(i.b)("inlineCode",{parentName:"p"},"BA")," i.e., boundary analysis or both. Then (by making adjustments in ",Object(i.b)("inlineCode",{parentName:"p"},"build.gradle"),") run only ",Object(i.b)("inlineCode",{parentName:"p"},"EP")," tests. Then, run only ",Object(i.b)("inlineCode",{parentName:"p"},"BA")," tests. ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"EXTRA PRACTICE: rewrite all test cases with identical tag(s) as a single parameterized test case."))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If needed, refer to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"ex2"}),"exercise 2")," on how to include a ",Object(i.b)("inlineCode",{parentName:"p"},"jar")," file in your gradle project!"))))}b.isMDXComponent=!0},125:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),d=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=d(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),l=d(a),m=n,u=l["".concat(c,".").concat(m)]||l[m]||p[m]||r;return a?i.a.createElement(u,o(o({ref:t},b),{},{components:a})):i.a.createElement(u,o({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<r;b++)c[b]=a[b];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);