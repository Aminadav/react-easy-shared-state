(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),r=(n(0),n(104)),i={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",slug:"/"},s={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Installation",source:"@site/docs/gettingStarted.mdx",slug:"/",permalink:"/docs/",editUrl:"https://github.com/aminadav/globx/edit/master/website/docs/gettingStarted.mdx",version:"current",sidebar_label:"Getting Started",sidebar:"someSidebar",next:{title:"Todo App",permalink:"/docs/todo"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Creating your first store",id:"creating-your-first-store",children:[]},{value:"Mutating objects",id:"mutating-objects",children:[]},{value:"Async operations",id:"async-operations",children:[]},{value:"Sharing Logic",id:"sharing-logic",children:[]},{value:"Multi stores",id:"multi-stores",children:[]}],c={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"First you have to install GlobX"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"npm i globx\n")),Object(r.b)("h2",{id:"creating-your-first-store"},"Creating your first store"),Object(r.b)("p",null,"Create the store file ",Object(r.b)("inlineCode",{parentName:"p"},"mystore.js")," (or ",Object(r.b)("inlineCode",{parentName:"p"},"mystore.ts"),")"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import {newStore} from 'globx'\nconst myStore=newStore({\n  value:1,\n  todos:[]\n})\nexport default myStore\n")),Object(r.b)("p",null,"The store may contain primitive values, objects, functions, arrays, Dates or whatever you wish. is just a regular javascript object."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"If you need you can create more than one store"))),Object(r.b)("p",null,"Then you can show values from the store and update or call functions in your store:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import store from './mystore'\nfunction MyComponent(){\n  return <div>\n    Current value: {store.value}\n    <button onClick={()=>{\n      store.value++\n    }}>Increment</button>\n  </div>\n}\n")),Object(r.b)("p",null,"To be sure that your component will render when value changed you have to do 2 things:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"call the function ",Object(r.b)("inlineCode",{parentName:"li"},"updateStore")," after changing the store."),Object(r.b)("li",{parentName:"ul"},"Call the function ",Object(r.b)("inlineCode",{parentName:"li"},"useRenderIfIChange")," and give it an array of values that should be inseted. One of the those values changed, the component will rerender.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js",metastring:"{3,8}","{3,8}":!0},"import store from './mystore'\nfunction MyComponent(){\n  store.useRerenderIfChange(()=>[store.value])\n  return <div>\n    Current value: {store.value}\n    <button onClick={()=>{\n      store.value++\n      store.updateStore()\n    }}>Increment</button>\n  </div>\n}\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"That It! Now you know everything about how to use GlobX!"))),Object(r.b)("h2",{id:"mutating-objects"},"Mutating objects"),Object(r.b)("p",null,"Another examples of a simple todo list. You don't have to clone the array:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"import store from './mystore'\nfunction MyComponent(){\n  store.useRerenderIfChange(()=>[store.todos])\n  return <div>\n    {store.todos.map(x=><div>{x}</div>)}\n    <button onClick={()=>{\n      store.todos.push(new Math.random())\n      store.updateStore()\n    }}>Add new item</button>\n  </div>\n}\n")),Object(r.b)("p",null,"The last thing to know is that you have auto-complete everywhere:"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://snipboard.io/bkl6nq.jpg",alt:"img"})),Object(r.b)("p",null,"All IDE smart language features like Renaming Symbols, or find all references are working."),Object(r.b)("h2",{id:"async-operations"},"Async operations"),Object(r.b)("p",null,"What about async operations? It's working out of the box:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"<button onClick={async ()=>{\n  store.isLoading = true\n  store.updateStore() // update ajax loaders on the screeen\n  let res = await fetch('/getSomethingFromServer')\n  store.isloading = false\n  store.result=res\n  store.updateStore()\n}}>Add new item</button>\n}\n")),Object(r.b)("h2",{id:"sharing-logic"},"Sharing Logic"),Object(r.b)("p",null,"If you wish to have a specific logic of mutating to the store (actions), you can add functions to the store and call them:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"var store=newStore({\n  value:1,\n  setValue: newValue=>{\n    store.value++\n    store.updateStore()\n  }\n})\n")),Object(r.b)("p",null,"You can also create async functions."),Object(r.b)("h2",{id:"multi-stores"},"Multi stores"),Object(r.b)("p",null,"Although probably most of the projects will use one global store. You are free to create multi stores, and use each or both of them in any component."))}b.isMDXComponent=!0}}]);