"use strict";(self.webpackChunkopen_code_conform_site=self.webpackChunkopen_code_conform_site||[]).push([[790],{7666:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>t});var i=s(4848),r=s(8453);const l={},a="CSS Style Guidelines",o={id:"css/css_code_style_en",title:"CSS Style Guidelines",description:"Author: Programmer80101",source:"@site/docs/css/css_code_style_en.md",sourceDirName:"css",slug:"/css/css_code_style_en",permalink:"/OpenCodeConform/docs/css/css_code_style_en",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"languageSidebar",previous:{title:"CSS",permalink:"/OpenCodeConform/docs/category/css"},next:{title:"HTML",permalink:"/OpenCodeConform/docs/category/html"}},c={},t=[{value:"Code Formatting",id:"code-formatting",level:2},{value:"Property Declaration",id:"property-declaration",level:3},{value:"Indentation",id:"indentation",level:3},{value:"Spacing and Empty Lines",id:"spacing-and-empty-lines",level:3},{value:"Placement of Curly Braces",id:"placement-of-curly-braces",level:3},{value:"Line Length &amp; Line Breaks",id:"line-length--line-breaks",level:3},{value:"Naming Conventions",id:"naming-conventions",level:2},{value:"Code Structure",id:"code-structure",level:2},{value:"Organization of Files and Directories",id:"organization-of-files-and-directories",level:3},{value:"Order of Properties",id:"order-of-properties",level:3},{value:"Comments",id:"comments",level:2},{value:"When to Comment?",id:"when-to-comment",level:3},{value:"How to Comment",id:"how-to-comment",level:3},{value:"Typical Errors &amp; How to avoid them",id:"typical-errors--how-to-avoid-them",level:2},{value:"Using inline styles",id:"using-inline-styles",level:3},{value:"Using overly specific selectors",id:"using-overly-specific-selectors",level:3},{value:"Using IDs for styling",id:"using-ids-for-styling",level:3},{value:"Using <code>!important</code>",id:"using-important",level:3},{value:"Overusing Universal Selector",id:"overusing-universal-selector",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Using browser prefixes",id:"using-browser-prefixes",level:3},{value:"Resetting CSS",id:"resetting-css",level:3},{value:"Using short hand properties",id:"using-short-hand-properties",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"css-style-guidelines",children:"CSS Style Guidelines"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Author"}),": ",(0,i.jsx)(n.a,{href:"https://github.com/Programmer80101",children:"Programmer80101"})]}),"\n",(0,i.jsx)(n.p,{children:"This is a guideline which lists best practices and principles that should be followed when writing CSS."}),"\n",(0,i.jsx)(n.h2,{id:"code-formatting",children:"Code Formatting"}),"\n",(0,i.jsx)(n.h3,{id:"property-declaration",children:"Property Declaration"}),"\n",(0,i.jsx)(n.p,{children:"Each property must be declared on a new line. This makes the code readable and consistent."}),"\n",(0,i.jsx)(n.p,{children:"Every property declaration must end with a semicolon even if it is the last declaration in a CSS ruleset."}),"\n",(0,i.jsx)(n.p,{children:"Do this"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".my-class {\n  color: blue;\n  height: 100px;\n  width: 20px;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Instead of this"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".my-class {\n  color: blue; height: 100px; width: 20px\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Notice how both the code blocks shown above are valid and have the same effect but one of them is more readable than the other."}),"\n",(0,i.jsx)(n.h3,{id:"indentation",children:"Indentation"}),"\n",(0,i.jsx)(n.p,{children:"Add two spaces for each level of indentation. This ensures consistency and readability."}),"\n",(0,i.jsx)(n.p,{children:"Do this"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"@media (max-width: 600px) {\n  .cool-class {\n    color: blue;\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Instead of this"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"@media (max-width: 600px) {\n.cool-class {\ncolor: blue;\n}\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"spacing-and-empty-lines",children:"Spacing and Empty Lines"}),"\n",(0,i.jsxs)(n.p,{children:["Adding appropriate spacing can make code easy to read. It is recommended to add a space after each colon ",(0,i.jsx)(n.code,{children:":"})," in property declaration and after every comma ",(0,i.jsx)(n.code,{children:","})," in property value."]}),"\n",(0,i.jsx)(n.p,{children:"Use empty lines to separate different CSS rulesets and separate properties whenever necessary. This keeps the code consistent and easy to read."}),"\n",(0,i.jsx)(n.p,{children:"Do this"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".cool-class {\n  color: blue;\n}\n\n.cooler-class {\n  filter: brightness(3.0), sepia(0.25), saturate(0.75);\n}\n\n.coolest-class {\n  transform: rotate(360deg), scale(1.00);\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Instead of this"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".cool-class {\n  color:blue;\n}\n.cooler-class {\n  filter:brightness(3.0),sepia(0.25),saturate(0.75);\n}\n.coolest-class {\n  transform:rotate(360deg),scale(1.00);\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"placement-of-curly-braces",children:"Placement of Curly Braces"}),"\n",(0,i.jsx)(n.p,{children:"The starting curly brace must be in the same line as the CSS selector with a space between them. The closing curly brace must be on a new line."}),"\n",(0,i.jsx)(n.p,{children:"Do this"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".wrapper {\n  width: min(90vw, 450px);\n  height: 100px;\n  color: white;\n}\n\n.blue {\n  color: blue;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Instead of this"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".wrapper\n{\n  width: min(90vw, 450px);\n  height: 100px;\n  color: white;\n}\n\n.blue { color: blue; }\n"})}),"\n",(0,i.jsx)(n.h3,{id:"line-length--line-breaks",children:"Line Length & Line Breaks"}),"\n",(0,i.jsx)(n.p,{children:"A line should not have more than 80 characters and it shouldn't be difficult to read or interpret. If something like this happens then it is better to break it into multiple lines."}),"\n",(0,i.jsx)(n.p,{children:"This rule may not be applicable in certain scenarios like when using a URL or SVG. It is also better to break complex or grouped CSS selectors into multiple lines to improve readability."}),"\n",(0,i.jsx)(n.p,{children:"Do this"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".red,\n.accent,\n.error,\n.warning {\n  color: red;\n}\n\n.cool-bg {\n  background: linear-gradient(\n    to right,\n    #41C,\n    #401,\n    #701,\n    #707\n  );\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Instead of this"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".red, .accent, .error, .warning {\n  color: red;\n}\n\n.cool-bg {\n  background: linear-gradient( to right, #41C, #401, #701, #707);\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"naming-conventions",children:"Naming Conventions"}),"\n",(0,i.jsxs)(n.p,{children:["In CSS, every CSS property follows ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case",children:"kebab-case"})," (sometimes referred to as hyphenated). Therefore it is common practice to name variables (also applicable to class names and id names) using kebab-case as it maintains consistency. Avoid use of multiple variable naming convention."]}),"\n",(0,i.jsxs)(n.p,{children:["When declaring CSS variables, the variable name should always start with ",(0,i.jsx)(n.code,{children:"--"})," if it is a global variable which are commonly declared in ",(0,i.jsx)(n.code,{children:":root"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["But in case of a local variable (variable declared in another element) its name should start with ",(0,i.jsx)(n.code,{children:"--_"}),". The underscore in the name indicates that the variable is a local variable."]}),"\n",(0,i.jsx)(n.p,{children:"Make sure the variable names are concise and indicate their purpose and use case."}),"\n",(0,i.jsx)(n.p,{children:"Do this"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:":root {\n  --accent-color: lime;\n  --primary-color: blue;\n}\n\n#my-div, \n.red, \n.size-big {\n  --_size-big: 20px;\n  font-size: var(--_size-big);\n  background-color: red;\n}\n\n.lightblue {\n  color: lightblue;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Instead of"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:":root {\n  --accentColor: lime;\n  --primary_color: blue;\n}\n\n#myDiv,\n.RED,\n.size_big {\n  --sizeBig: 20px;\n  font-size: var(--sizeBig);\n  background-color: red;\n}\n\n.blue {\n  color: lightblue;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"code-structure",children:"Code Structure"}),"\n",(0,i.jsx)(n.h3,{id:"organization-of-files-and-directories",children:"Organization of Files and Directories"}),"\n",(0,i.jsx)(n.p,{children:"Organizing CSS files can be very difficult, therefore it is best to create separate CSS files based on layouts and use case. It is also best practice to have a different CSS file for every HTML file."}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"css/\n  global.css\n  docs.css\n  components/\n    forms.css\n    cards.css\n    buttons.css\n  layout/\n    grid.css\n    header.css\n    footer.css\n  theme/\n    light-theme.css\n    dark-theme.css\n"})}),"\n",(0,i.jsx)(n.h3,{id:"order-of-properties",children:"Order of Properties"}),"\n",(0,i.jsx)(n.p,{children:"Grouping related properties by using empty lines can make code easier to understand."}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".box::before {\n  content: '';\n\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  display: block;\n  aspect-ratio: 16 / 9;\n  width: 200px;\n  margin: 2rem auto;\n  padding: 0;\n\n  border: 2px solid black;\n  box-shadow: 0 0 20px 5px #000;\n  background: linear-gradient(\n    to right,\n    red,\n    blue\n  );\n\n  transition: transform ease 1s;\n  animation: rotate infinite ease 10s;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"comments",children:"Comments"}),"\n",(0,i.jsx)(n.h3,{id:"when-to-comment",children:"When to Comment?"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"When a part of a code is difficult to understand, complicated or needs context."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"/* screen width <= 800px */\n/* Phones, Large Phones and Tablets */\n@media (max-width: 800px) {\n  ...\n}\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"To separate sections in a CSS file."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"/* Variables */\n:root {\n  ...\n}\n\n/* Base changes */\nbody {\n  ...\n}\n\n/* Navbar */\nnav {\n  ...\n}\n\n/* Footer */\nfooter {\n  ...\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"how-to-comment",children:"How to Comment"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Only use comments when necessary."}),"\n",(0,i.jsx)(n.li,{children:"Be concise and avoid long comments."}),"\n",(0,i.jsx)(n.li,{children:"Update comments from time to time."}),"\n",(0,i.jsx)(n.li,{children:"Make sure that they have a purpose and reflect their intended meaning."}),"\n",(0,i.jsx)(n.li,{children:"Use single line comments for short descriptive purposes."}),"\n",(0,i.jsx)(n.li,{children:"Use multiline comments for writing long comments."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"/* This is a single line comment */\n\n/* This is a multiline comment\n * This comment spans multiple lines\n */\n"})}),"\n",(0,i.jsx)(n.h2,{id:"typical-errors--how-to-avoid-them",children:"Typical Errors & How to avoid them"}),"\n",(0,i.jsx)(n.h3,{id:"using-inline-styles",children:"Using inline styles"}),"\n",(0,i.jsx)(n.p,{children:"Using inline styles makes your code messier. It is always better to keep your CSS centralised and not spread out. Not using inline styles keeps the HTML clean."}),"\n",(0,i.jsx)(n.p,{children:"Avoid this"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div style="color: red; font-size: 20px;">Hello World</div>\n'})}),"\n",(0,i.jsx)(n.p,{children:"Do this"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div class="red">Hello World</div>\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".red {\n  color: red;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"using-overly-specific-selectors",children:"Using overly specific selectors"}),"\n",(0,i.jsx)(n.p,{children:"Use simple and more maintainable selectors. Avoid unnecessary specificity."}),"\n",(0,i.jsx)(n.p,{children:"Avoid this"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"nav > ul.menu > li > a {\n  text-decoration: none;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Do this instead"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"nav a {\n  text-decoration: none;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"using-ids-for-styling",children:"Using IDs for styling"}),"\n",(0,i.jsx)(n.p,{children:"Using classes for styling is much more convenient as multiple elements can have the same class. It allows for flexibility and reusability."}),"\n",(0,i.jsx)(n.p,{children:"Avoid this"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"#blue {\n  color: blue;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Do this"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".blue {\n  color: blue;\n}\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"using-important",children:["Using ",(0,i.jsx)(n.code,{children:"!important"})]}),"\n",(0,i.jsxs)(n.p,{children:["Overusing ",(0,i.jsx)(n.code,{children:"!important"})," can make the code hard to maintain and override. Only use it when absolutely necessary."]}),"\n",(0,i.jsx)(n.p,{children:"Avoid this"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".red {\n  color: red !important;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Do this"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".red {\n  color: red !important;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"overusing-universal-selector",children:"Overusing Universal Selector"}),"\n",(0,i.jsx)(n.p,{children:"Overusing universal selector can cause massive performance issues. It is best to apply some styles to specific elements."}),"\n",(0,i.jsx)(n.p,{children:"Avoid this"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"* {\n  font-family: Arial, sans-serif;\n  color: white;\n  font-size: 16px;\n  border: none;\n  outline: none;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Do this"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: Arial, sans-serif;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,i.jsx)(n.h3,{id:"using-browser-prefixes",children:"Using browser prefixes"}),"\n",(0,i.jsxs)(n.p,{children:["Using browser prefixes allow for cross-browser compatibility, especially for old browsers. Browser prefixes are also called ",(0,i.jsx)(n.a,{href:"http://web.simmons.edu/~grovesd/comm244/notes/week6/css3-compatibility",children:"vendor prefixes"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".cool-box {\n  -webkit-transform: rotate(45deg);\n     -moz-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n       -o-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"resetting-css",children:"Resetting CSS"}),"\n",(0,i.jsx)(n.p,{children:"Resetting CSS is important because different browser have different default styles. Using a proper CSS reset ensures consistency across browsers. Try to avoid unnecessary resets."}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"using-short-hand-properties",children:"Using short hand properties"}),"\n",(0,i.jsx)(n.p,{children:"Using short hand properties reduces the amount of code and makes the code more readable."}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".my-wrapper {\n  margin: 15px 20px;\n  padding: 10px 200px 20px 5px;\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var i=s(6540);const r={},l=i.createContext(r);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);