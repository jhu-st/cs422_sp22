(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{112:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),i=a(7),o=(a(0),a(129)),r={id:"hw5",title:"Homework 5"},c={unversionedId:"hw/hw5",id:"hw/hw5",isDocsHomePage:!1,title:"Homework 5",description:"* You are expected to work individually.",source:"@site/docs\\hw\\hw5.md",slug:"/hw/hw5",permalink:"/cs422_sp22/docs/hw/hw5",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/hw/hw5.md",version:"current"},s=[{value:"Task 0 (18 points)",id:"task-0-18-points",children:[]},{value:"Task 1 (12 points)",id:"task-1-12-points",children:[]},{value:"Task 2 (25 points)",id:"task-2-25-points",children:[]},{value:"Submission",id:"submission",children:[]}],l={toc:s};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"You are expected to work individually."),Object(o.b)("li",{parentName:"ul"},"Due: ",Object(o.b)("strong",{parentName:"li"},"Thursday April 7th at 11pm EST (Baltimore time).")),Object(o.b)("li",{parentName:"ul"},"This assignment is worth 55 points.")))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Objectives")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Debugging Basics"),Object(o.b)("li",{parentName:"ul"},"Problem Reporting"),Object(o.b)("li",{parentName:"ul"},"Debugging by Obseveration")))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You can get all the starter files for task 2 this homework by doing a ",Object(o.b)("inlineCode",{parentName:"p"},"git pull")," on the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jhu-st/jhu-st-sp22-public"}),"course public repo"),". The files can be found under ",Object(o.b)("inlineCode",{parentName:"p"},"hw/hw5"),"."))),Object(o.b)("h2",{id:"task-0-18-points"},"Task 0 (18 points)"),Object(o.b)("p",null,"Answer the following questions in details:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"What are the differences between testing and debugging? "),Object(o.b)("li",{parentName:"ol"},"How testing and debugging complement each other? "),Object(o.b)("li",{parentName:"ol"},"Is testing necessarily a prerequisite of debugging? Explain. "),Object(o.b)("li",{parentName:"ol"},"What are the major differences between a dedicated problem-tracking system such as BUGZILLA and a general organizing and messaging tool such as Microsoft Outlook?"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://bugzilla.mozilla.org/show_bug.cgi?id=1476888"}),"Here")," is a link to an actual problem report on BUGZILLA about Firefox browser. Is this a bug report or feature request? What is the current status of the problem? What is the priority level? Who is assigned to work on this problem? Is this a perfect problem report? Justify your answer to the last question by elaborating on 1) what necessary information are included?, and 2) what necessary/important/\u201dgood-to-have\u201d information are missing?"),Object(o.b)("li",{parentName:"ol"},"The original ",Object(o.b)("inlineCode",{parentName:"li"},"ddmin()")," algorithm finds only one possible 1-minimal input i.e. an input where removing any single character makes the failure disappear. Sketch an extension of ",Object(o.b)("inlineCode",{parentName:"li"},"ddmin()")," algorithm named ",Object(o.b)("inlineCode",{parentName:"li"},"ddminAll()")," that finds ALL possible 1-minimal inputs.")),Object(o.b)("h2",{id:"task-1-12-points"},"Task 1 (12 points)"),Object(o.b)("p",null,"The function ",Object(o.b)("inlineCode",{parentName:"p"},"bool geegg(String s)")," returns:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"true"),", i.e. failure, if the string ",Object(o.b)("inlineCode",{parentName:"li"},"s")," contains three ",Object(o.b)("inlineCode",{parentName:"li"},"g")," characters or more,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"true"),", i.e. failure, if the string ",Object(o.b)("inlineCode",{parentName:"li"},"s")," contains two ",Object(o.b)("inlineCode",{parentName:"li"},"e")," characters or more,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"false"),", i.e. no failure, otherwise.",Object(o.b)("br",{parentName:"li"}),"For instance, ",Object(o.b)("inlineCode",{parentName:"li"},'geeg("good eggs tomorrow")')," returns ",Object(o.b)("inlineCode",{parentName:"li"},"true"),", and\n",Object(o.b)("inlineCode",{parentName:"li"},'geeg("no eggs today")')," returns false.")),Object(o.b)("p",null,"Apply ddmin() algorithm on the following inputs:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"a-debugging-exam")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"as-easy-as-pie"))),Object(o.b)("p",null,"Write down all the steps ",Object(o.b)("inlineCode",{parentName:"p"},"ddmin()")," would take to simplify these inputs."),Object(o.b)("h2",{id:"task-2-25-points"},"Task 2 (25 points)"),Object(o.b)("p",null,"Follow the instructions in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jhu-st/jhu-st-sp22-public/blob/main/hw/hw5/SudokuSolver.java"}),"SudokuSolver.java"),". Also, find ",Object(o.b)("inlineCode",{parentName:"p"},"SudokuSolverTest.java")," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jhu-st/jhu-st-sp22-public/blob/main/hw/hw5/SudokuSolverTest.java"}),"here"),". "),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip 1")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"As part of the requirements, you will need to work with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://logging.apache.org/log4j/2.x/"}),"Log4j 2"),". A straightforward way to do so is to add the followings to ",Object(o.b)("inlineCode",{parentName:"p"},"build.gradle"),".:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-groovy"}),"implementation 'org.apache.logging.log4j:log4j-core:2.3.2'\nimplementation 'org.apache.logging.log4j:log4j-api:2.3.2'\n")))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip 2")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Also, you may find ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://logging.apache.org/log4j/2.x/manual/architecture.html"}),"this")," useful which provides explanations on Log4j 2\u2019s architecture and how it works."))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Deliverables ")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"SudokuSolver.java")," which contains log4j 2 logging code,"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"SudokuSolver.log"),","),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"log4j2.xml")," which contains your log4J 2 settings,"),Object(o.b)("li",{parentName:"ol"},"a short report in the form of comments at the top of ",Object(o.b)("inlineCode",{parentName:"li"},"SudokuSolver.java")," that explains how you used the log messages and/or a debugger of your choice and what hypotheses you developed, what breakpoints/watchpoints you used etc. Write at least a few paragraphs and make detailed explanations. Try to use a debugger in a meaningful way to find the faults. Even if you spot a bug before running the debugger, still set appropriate breakpoints/watchpints and run the debugger to verify your hypothesis. If you do so, it should feel natural and straightforward to write this short report. "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"SudokuSolverFixed.java")," containing all fixes to all the faults found as well as detailed and clear comments for each fault at the exact corresponding location in the code.")))),Object(o.b)("h2",{id:"submission"},"Submission"),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Submission")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Submissions should be made to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.gradescope.com/courses/358400"}),"Gradescope"),". Create a zip file named ",Object(o.b)("inlineCode",{parentName:"p"},"hw5.zip")," which contains all the deliverables for all the parts. For each task, create a separate folder named taskX, where X is the part number, under which you put all the deliverables for that task. For each task, make sure to submit all the necessary deliverables including JUnit test classes (",Object(o.b)("inlineCode",{parentName:"p"},".java")," files NOT ",Object(o.b)("inlineCode",{parentName:"p"},".class")," files), documents, reports etc."))),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"Important Note:")," If any of your ",Object(o.b)("inlineCode",{parentName:"p"},".java")," files is not compilable/executable for any reason, you will receive a zero for that part. Thus, please make sure all the source files you hand in successfully compile and run!"))))}b.isMDXComponent=!0},129:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,h=p["".concat(r,".").concat(m)]||p[m]||d[m]||o;return a?i.a.createElement(h,c(c({ref:t},l),{},{components:a})):i.a.createElement(h,c({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var l=2;l<o;l++)r[l]=a[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);