(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),client=(__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")),index_esm=__webpack_require__("./node_modules/@ionic/react/dist/index.esm.js"),preview=__webpack_require__("./node_modules/@storybook/addon-viewport/dist/esm/preview.js"),jsx_runtime=(__webpack_require__("./node_modules/@ionic/react/css/core.css"),__webpack_require__("./node_modules/@ionic/react/css/normalize.css"),__webpack_require__("./node_modules/@ionic/react/css/structure.css"),__webpack_require__("./node_modules/@ionic/react/css/typography.css"),__webpack_require__("./node_modules/@ionic/react/css/padding.css"),__webpack_require__("./node_modules/@ionic/react/css/float-elements.css"),__webpack_require__("./node_modules/@ionic/react/css/text-alignment.css"),__webpack_require__("./node_modules/@ionic/react/css/text-transformation.css"),__webpack_require__("./node_modules/@ionic/react/css/flex-utils.css"),__webpack_require__("./node_modules/@ionic/react/css/display.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));Object(index_esm.n)();var preview_IonWrapper=function IonWrapper(_ref){var children=_ref.children;return Object(jsx_runtime.jsx)(index_esm.a,{children:Object(jsx_runtime.jsx)(index_esm.j,{children:Object(jsx_runtime.jsx)(index_esm.e,{children:children})})})};preview_IonWrapper.displayName="IonWrapper",Object(client.addDecorator)((function(storyFn){return Object(jsx_runtime.jsx)(preview_IonWrapper,{children:storyFn()})}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},defaultViewport:"Large mobile (P)",viewport:{viewports:Object.assign({},preview.a),defaultViewport:"iphonex"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./node_modules/@stencil/core/internal/client lazy recursive ^\\.\\/.*\\.entry\\.js.*$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":function(module,exports){function webpackEmptyAsyncContext(req){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=function(){return[]},webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,module.exports=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id="./node_modules/@stencil/core/internal/client lazy recursive ^\\.\\/.*\\.entry\\.js.*$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$"},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/IonPhotoViewer/IonPhotoViewer.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,"/* .lg-container .lg-backdrop {\n    background-color: rgba(0, 0, 0, 0.6);\n    backdrop-filter: blur(4px);\n    -webkit-backdrop-filter: blur(4px);\n}\n\n.lg-close,\n.lg-zoom-in,\n.lg-zoom-out {\n    display: none;\n} */\n.pswp {\n    --pswp-bg: rgba(0, 0, 0, 0.6);\n    --pswp-placeholder-bg: rgba(0, 0, 0, 0.4);\n}\n\n.pswp__top-bar{\n    display: none;\n}\n\n/* div.pswp__img--placeholder,\n.pswp__img--with-bg {\n\tbackground: transparent;\n    /* object-fit: contain; */\n    /* max-width: 20px !important;\n    max-height: 20px !important;\n    width: 20px !important;\n    height: 20px !important; */\n/* }  */\n/* .pswp img{ */\n    /* width: 100%;\n    height: 100%; */\n    /* object-fit: contain; */\n    /* background: transparent;\n} */\n\n/* .pswp__container .pswp__item img.pswp__thumb{\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n    background: transparent;\n} */\n\n\n\n.pswp__bg {\n    /* background-color: rgba(0, 0, 0, 0.6); */\n    backdrop-filter: blur(4px) !important;\n    -webkit-backdrop-filter: blur(4px);\n}\n\n.header-no-shadow.header-md::after {\n    background-image: none !important;\n}\n\nion-avatar .ion-photo-viewer img {\n    border-radius: 50%;\n}\n\nion-avatar[slot] .ion-photo-viewer img {\n    width: 40px;\n    height: 40px;\n    max-width: -webkit-fit-content;\n    max-width: -moz-fit-content;\n    max-width: fit-content;\n}\n\nion-thumbnail[slot] .ion-photo-viewer img {\n    width: 56px;\n    height: 56px;\n    max-width: -webkit-fit-content;\n    max-width: -moz-fit-content;\n    max-width: fit-content;\n}\n\n.ion-photo-viewer img {\n    border-radius: var(--border-radius);\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    overflow: hidden;\n}\n",""]),module.exports=exports},"./node_modules/ionicons/node_modules/@stencil/core/internal/client lazy recursive ^\\.\\/.*\\.entry\\.js.*$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":function(module,exports){function webpackEmptyAsyncContext(req){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=function(){return[]},webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,module.exports=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id="./node_modules/ionicons/node_modules/@stencil/core/internal/client lazy recursive ^\\.\\/.*\\.entry\\.js.*$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./IonPhotoViewer/IonPhotoViewer.stories.tsx":"./src/IonPhotoViewer/IonPhotoViewer.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/IonPhotoViewer/IonPhotoViewer.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/IonPhotoViewer/IonPhotoViewer.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/IonPhotoViewer/IonPhotoViewer.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"IonAvatarExample",(function(){return IonPhotoViewer_stories_IonAvatarExample})),__webpack_require__.d(__webpack_exports__,"IonThumbnailExample",(function(){return IonPhotoViewer_stories_IonThumbnailExample}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),dist=(__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/photoswipe/dist/photoswipe.css"),__webpack_require__("./src/IonPhotoViewer/IonPhotoViewer.css"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/react-photoswipe-gallery/dist/index.js")),index_esm=__webpack_require__("./node_modules/@ionic/react/dist/index.esm.js"),icons=__webpack_require__("./node_modules/ionicons/icons/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),IonHeaderComponent_IonHeaderComponent=function IonHeaderComponent(_ref){var title=_ref.title;return Object(jsx_runtime.jsx)(index_esm.f,{class:"header-no-shadow",children:Object(jsx_runtime.jsxs)(index_esm.m,{children:[Object(jsx_runtime.jsx)(index_esm.d,{slot:"start",children:Object(jsx_runtime.jsx)(index_esm.c,{id:"ion-header-close-button",children:Object(jsx_runtime.jsx)(index_esm.g,{slot:"icon-only",icon:icons.a})})}),Object(jsx_runtime.jsx)(index_esm.l,{children:title})]})})};IonHeaderComponent_IonHeaderComponent.displayName="IonHeaderComponent";var IonPhotoViewer_IonHeaderComponent=IonHeaderComponent_IonHeaderComponent;try{IonHeaderComponent_IonHeaderComponent.displayName="IonHeaderComponent",IonHeaderComponent_IonHeaderComponent.__docgenInfo={description:"",displayName:"IonHeaderComponent",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/IonPhotoViewer/IonHeaderComponent.tsx#IonHeaderComponent"]={docgenInfo:IonHeaderComponent_IonHeaderComponent.__docgenInfo,name:"IonHeaderComponent",path:"src/IonPhotoViewer/IonHeaderComponent.tsx#IonHeaderComponent"})}catch(__react_docgen_typescript_loader_error){}var server_browser=__webpack_require__("./node_modules/react-dom/server.browser.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var IonPhotoViewer_IonPhotoViewer_IonPhotoViewer=function IonPhotoViewer(_ref){var _children=_ref.children,title=_ref.title,src=_ref.src,_ref$showHeader=_ref.showHeader,showHeader=void 0===_ref$showHeader||_ref$showHeader,_React$useState2=_slicedToArray(react_default.a.useState({height:0,width:0}),2),dimensions=_React$useState2[0],setImageDimensions=_React$useState2[1],uiElements=[{name:"IonHeaderComponent",order:9,isButton:!1,appendTo:"wrapper",onInit:function onInit(el,pswpInstance){showHeader&&(el.style.top="0",el.style.gridTemplateColumns="repeat(auto-fit, 40px)",el.style.gridTemplateRows="repeat(auto-fit, 40px)",el.style.justifyContent="left",el.append(function createElementFromHTML(htmlString){var div=document.createElement("div");return div.innerHTML=htmlString.trim(),div.firstChild?div.firstChild:div}(Object(server_browser.renderToString)(Object(jsx_runtime.jsx)(IonPhotoViewer_IonHeaderComponent,{title:title})))))},onClick:function onClick(e,el,pswpInstance){var target=e.target;"ion-header-close-button"===(null==target?void 0:target.id)&&pswpInstance.close()}}];return Object(react.useEffect)((function(){(function getImageDimensions(imageUrl){return new Promise((function(resolve,reject){var img=new Image;img.src=imageUrl,img.onload=function(){resolve({height:img.height,width:img.width})},img.onerror=function(err){console.log("img error"),console.error(err),reject(err)}}))})(src).then((function(dimensions){return setImageDimensions(dimensions)}))}),[]),Object(jsx_runtime.jsx)("div",{className:"ion-photo-viewer",onClick:function onClick(e){return e.stopPropagation()},onKeyDown:function onKeyDown(e){return e.stopPropagation()},role:"presentation",children:Object(jsx_runtime.jsx)(dist.a,{uiElements:uiElements,children:Object(jsx_runtime.jsx)(dist.b,{original:src,thumbnail:src,width:dimensions.width,height:dimensions.height,children:function children(_ref2){var ref=_ref2.ref,open=_ref2.open;return Object(jsx_runtime.jsx)("div",{onClick:open,ref:ref,children:_children})}})})})};IonPhotoViewer_IonPhotoViewer_IonPhotoViewer.displayName="IonPhotoViewer";var src_IonPhotoViewer_IonPhotoViewer=IonPhotoViewer_IonPhotoViewer_IonPhotoViewer;try{IonPhotoViewer_IonPhotoViewer_IonPhotoViewer.displayName="IonPhotoViewer",IonPhotoViewer_IonPhotoViewer_IonPhotoViewer.__docgenInfo={description:"",displayName:"IonPhotoViewer",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},showHeader:{defaultValue:{value:"true"},description:"",name:"showHeader",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/IonPhotoViewer/IonPhotoViewer.tsx#IonPhotoViewer"]={docgenInfo:IonPhotoViewer_IonPhotoViewer_IonPhotoViewer.__docgenInfo,name:"IonPhotoViewer",path:"src/IonPhotoViewer/IonPhotoViewer.tsx#IonPhotoViewer"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Demo/IonPhotoViewer",component:src_IonPhotoViewer_IonPhotoViewer};var IonPhotoViewer_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(src_IonPhotoViewer_IonPhotoViewer,Object.assign({},args,{children:args.children}))};IonPhotoViewer_stories_Template.displayName="Template";var imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/June_odd-eyed-cat_cropped.jpg/712px-June_odd-eyed-cat_cropped.jpg",Default=IonPhotoViewer_stories_Template.bind({});Default.args={title:"Image title",src:imageUrl,children:Object(jsx_runtime.jsx)("img",{src:imageUrl,alt:"Image alt"})};var IonPhotoViewer_stories_IonAvatarExample=function IonAvatarExample(){return Object(jsx_runtime.jsxs)(index_esm.h,{button:!0,lines:"none",detail:!1,children:[Object(jsx_runtime.jsx)(index_esm.b,{slot:"start",children:Object(jsx_runtime.jsx)(src_IonPhotoViewer_IonPhotoViewer,{title:"User name",src:imageUrl,children:Object(jsx_runtime.jsx)("img",{src:imageUrl,alt:"Image alt"})})}),Object(jsx_runtime.jsx)(index_esm.i,{children:"IonAvatar example"})]})};IonPhotoViewer_stories_IonAvatarExample.displayName="IonAvatarExample";var IonPhotoViewer_stories_IonThumbnailExample=function IonThumbnailExample(){return Object(jsx_runtime.jsxs)(index_esm.h,{button:!0,lines:"none",detail:!1,children:[Object(jsx_runtime.jsx)(index_esm.k,{slot:"start",children:Object(jsx_runtime.jsx)(src_IonPhotoViewer_IonPhotoViewer,{title:"User name",src:imageUrl,children:Object(jsx_runtime.jsx)("img",{src:imageUrl,alt:"Image alt"})})}),Object(jsx_runtime.jsx)(index_esm.i,{children:"IonThumbnail example"})]})};IonPhotoViewer_stories_IonThumbnailExample.displayName="IonThumbnailExample",Default.parameters=Object.assign({storySource:{source:"(args: IonPhotoViewerProps) => (\n  <IonPhotoViewer {...args}>{args.children}</IonPhotoViewer>\n)"}},Default.parameters),IonPhotoViewer_stories_IonAvatarExample.parameters=Object.assign({storySource:{source:'() => (\n  <IonItem button lines="none" detail={false}>\n    <IonAvatar slot="start">\n      <IonPhotoViewer title="User name" src={imageUrl}>\n        <img src={imageUrl} alt="Image alt" />\n      </IonPhotoViewer>\n    </IonAvatar>\n    <IonLabel>IonAvatar example</IonLabel>\n  </IonItem>\n)'}},IonPhotoViewer_stories_IonAvatarExample.parameters),IonPhotoViewer_stories_IonThumbnailExample.parameters=Object.assign({storySource:{source:'() => (\n  <IonItem button lines="none" detail={false}>\n    <IonThumbnail slot="start">\n      <IonPhotoViewer\n        title="User name"\n        src={imageUrl}\n      >\n        <img\n          src={imageUrl}\n          alt="Image alt"\n        />\n      </IonPhotoViewer>\n    </IonThumbnail>\n    <IonLabel>IonThumbnail example</IonLabel>\n  </IonItem>\n)'}},IonPhotoViewer_stories_IonThumbnailExample.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,6,7]]]);