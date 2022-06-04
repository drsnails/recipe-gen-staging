"use strict";(self.webpackChunkrecipe_gen=self.webpackChunkrecipe_gen||[]).push([[968],{7590:function(e,n,t){t.d(n,{_:function(){return a}});var r=t(2791),a=function(e,n){var t=(0,r.useRef)(!0);(0,r.useEffect)((function(){t.current?t.current=!1:e()}),n)}},9968:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var r=t(2982),a=t(4942),i=t(1413),c=t(5861),s=t(885),u=t(7757),o=t.n(u),p=t(2791),l=t(364),f=t(6871),d=t(184);function h(e){var n=e.value,t=e.onChange;return(0,d.jsxs)("div",{className:"input-switch",children:[(0,d.jsx)("input",{checked:n,onChange:t,type:"checkbox",name:"switch",id:"cb2",className:"tgl tgl-light"}),(0,d.jsx)("label",{htmlFor:"cb2",className:"tgl-btn"}),(0,d.jsx)("h4",{children:"Fixed Mode?"})]})}var m=t(9258),v=t(4483);function g(e){return x.apply(this,arguments)}function x(){return(x=(0,c.Z)(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"recipe-gen",t="https://api.cloudinary.com/v1_1/".concat("recipe-gen","/image/upload"),(r=new FormData).append("file",n.target.files[0]),r.append("upload_preset","recipe-gen"),e.abrupt("return",fetch(t,{method:"POST",body:r}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.error(e)})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t(6801);var b=t(5190),Z=t(3174);function j(e){var n=e.imgUrl,t=e.onChangeImg,r=(e.isEdited,(0,l.I0)()),a=(0,p.useState)(),i=(0,s.Z)(a,2),u=i[0],f=i[1],h=(0,p.useRef)(),m=function(){var e=(0,c.Z)(o().mark((function e(n){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=function(){var e=(0,c.Z)(o().mark((function e(){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.target.files[0]){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,r((0,b.K)(!0)),e.next=6,g(n);case 6:a=e.sent,t(a.url),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:return e.prev=13,e.finish(13);case 15:case"end":return e.stop()}}),e,null,[[2,10,13,15]])})));return function(){return e.apply(this,arguments)}}(),a(n);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=u?"expand":"",j=n?"img-class":"";return(0,d.jsx)("section",{className:"recipe-img-container",children:(0,d.jsxs)("section",{className:"recipe-img ".concat(x," ").concat(j),children:[n?(0,d.jsx)("section",{onClick:function(){return f((function(e){return!e}))},className:"img-container",style:{backgroundImage:"url(".concat(n,")")},children:(0,d.jsxs)("section",{className:"img-actions ".concat(x),children:[(0,d.jsxs)("button",{onClick:function(e){e.stopPropagation(),h.current.click()},children:[(0,d.jsx)(v.G,{icon:Z.VmB})," ",(0,d.jsx)("span",{children:"Change"})]}),(0,d.jsxs)("button",{onClick:function(e){e.stopPropagation(),t(null,!0),f(!1)},children:[(0,d.jsx)(v.G,{icon:Z.$aW})," ",(0,d.jsx)("span",{children:"Remove"})]})]})}):(0,d.jsx)("section",{className:"img-upload",children:(0,d.jsx)("label",{htmlFor:"imgUploader",children:(0,d.jsx)(v.G,{className:"upload-icon",icon:Z.r6c})})}),(0,d.jsx)("input",{ref:h,type:"file",id:"imgUploader",onChange:m,hidden:!0})]})})}var y=t(6971),w=t(2709),k=t(9846),C=t(3127),N=t(8414),I=t(8685),S=t(6549),R=t(9326),T=function(e){switch(e.type){case"whatsapp":return(0,d.jsx)(y.Z,(0,i.Z)((0,i.Z)({},e),{},{children:(0,d.jsx)(w.Z,{})}));case"facebook":return(0,d.jsx)(k.Z,(0,i.Z)((0,i.Z)({},e),{},{children:(0,d.jsx)(C.Z,{})}));case"telegram":return(0,d.jsx)(N.Z,(0,i.Z)((0,i.Z)({},e),{},{children:(0,d.jsx)(I.Z,{})}));case"email":return(0,d.jsx)(S.Z,(0,i.Z)((0,i.Z)({},e),{},{children:(0,d.jsx)(R.Z,{})}));default:return(0,d.jsx)(d.Fragment,{})}};function O(e){return(0,d.jsx)("section",{className:"share-btn",children:(0,d.jsx)(T,(0,i.Z)({},e))})}var _=t(7590),E=(t(3741),t(1731)),U=t(1945),D=(t(2901),t(9275)),F=(0,p.lazy)((function(){return Promise.all([t.e(738),t.e(168)]).then(t.bind(t,5168))})),B=t(1016);function P(){var e=(0,p.useState)(),n=(0,s.Z)(e,2),t=n[0],u=n[1],v=(0,p.useState)(null),g=(0,s.Z)(v,2),x=g[0],Z=(g[1],(0,p.useState)("")),y=(0,s.Z)(Z,2),w=y[0],k=y[1],C=(0,p.useState)(!1),N=(0,s.Z)(C,2),I=N[0],S=N[1],R=(0,p.useState)(!1),T=(0,s.Z)(R,2),P=T[0],q=T[1],z=(0,p.useState)(""),A=(0,s.Z)(z,2),G=A[0],L=A[1],K=((0,p.useRef)(null),(0,p.useState)(!1)),W=(0,s.Z)(K,2),M=W[0],Q=W[1],V=(0,p.useState)(),Y=(0,s.Z)(V,2),$=Y[0],H=Y[1],J=(0,l.I0)(),X=(0,f.UO)();(0,p.useEffect)((function(){ee()}),[X.id]),(0,p.useEffect)((function(){if(t){var e=te(t);H(e.amount)}}),[null===t||void 0===t?void 0:t.ingToScaleId]);var ee=function(){var e=(0,c.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!X.id){e.next=7;break}return e.next=4,U.O.getById(X.id);case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0=U.O.getEmptyRecipe();case 8:n=e.t0,u(n),e.next=16;break;case 12:e.prev=12,e.t1=e.catch(0),console.log("failing"),L("Sorry,  can't find this recipe at the moment");case 16:return e.prev=16,e.finish(16);case 18:case"end":return e.stop()}}),e,null,[[0,12,16,18]])})));return function(){return e.apply(this,arguments)}}();(0,_._)((function(){if(!M){var e=te(t);H(e.amount)}}),[M]);var ne=function(){var e=(0,c.Z)(o().mark((function e(n,t){var r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.recipe,a=B(r),!M){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,u(r),e.next=8,U.O.save(n,t);case 8:return e.abrupt("return","res");case 11:throw e.prev=11,e.t0=e.catch(4),console.log("cant save recipe: ",e.t0),u(a),e.t0;case 16:return e.prev=16,J((0,b.K)(!1)),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[4,11,16,19]])})));return function(n,t){return e.apply(this,arguments)}}(),te=(0,p.useCallback)((function(e){return e.ingredients.find((function(n){return n.id===e.ingToScaleId}))}),[t]),re=function(){var e=(0,c.Z)(o().mark((function e(n,r){var c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=(0,i.Z)((0,i.Z)({},t),{},(0,a.Z)({},n,r)),"ingToScaleId"===n||"imgUrl"===n?ne({recipe:c,field:n,value:r},"updateRecipe"):ce(c);case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),ae=function(){var e=(0,c.Z)(o().mark((function e(n,r){var c,s,u,p,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=n.target,s=c.name,u=c.value,"SELECT"===c.nodeName||"INPUT"===c.nodeName){e.next=12;break}if(s=c.dataset.name,u=c.innerText,"amount"!==s){e.next=12;break}if(u=+u){e.next=12;break}return u=r.amount,c.innerText=u,e.abrupt("return");case 12:if(u!==r[s]){e.next=14;break}return e.abrupt("return");case 14:if(p=(0,i.Z)((0,i.Z)({},r),{},(0,a.Z)({},s,u)),l=(0,i.Z)((0,i.Z)({},t),{},{ingredients:t.ingredients.map((function(e){return e.id===r.id?p:e}))}),"units"!==s||"units"!==u||l.ingToScaleId!==p.id){e.next=18;break}return e.abrupt("return",(0,E.oc)({txt:"Can't change main relative quantity to 'Units'"}));case 18:ce(l);case 19:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),ie=function(){var e=(0,c.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(!1),e.next=4,ne({recipe:t},"general");case 4:(0,E.CB)({txt:"Recipe saved",time:2e3}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),(0,E.oc)({txt:"Saving recipe failed",time:2e3});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),ce=function(e){u(e),I||(S(!0),q(!0))},se=function(){var e=(0,c.Z)(o().mark((function e(){var n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=U.O.getEmptyIngredient()).isNew=!0,a=(0,i.Z)((0,i.Z)({},t),{},{ingredients:[].concat((0,r.Z)(t.ingredients),[n])}),ce(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=(0,c.Z)(o().mark((function e(n){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=(0,i.Z)((0,i.Z)({},t),{},{ingredients:t.ingredients.filter((function(e){return e.id!==n}))}),t.ingToScaleId===n&&(t.ingToScaleId=""),ce(r);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),oe=function(){var e=(0,c.Z)(o().mark((function e(n,t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n||t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,re("imgUrl",n);case 4:J((0,b.K)(!1));case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();if(!t)return(0,d.jsx)("div",{children:G||(0,d.jsx)(m.a,{_isLoading:!0})});var pe=te(t),le=I?"animate-in":"animate-out",fe=U.O.getRecipeTxt(t);return $?(0,d.jsxs)("div",{className:"recipe-editor",children:[(0,d.jsxs)("section",{className:"title-container",children:[(0,d.jsx)("h2",{onFocus:D.eO,onBlur:function(e){var n=e.target;return re("name",n.innerText)},contentEditable:!0,suppressContentEditableWarning:!0,children:t.name}),(0,d.jsx)("button",{className:"btn copy",onClick:function(){var e=U.O.getRecipeTxt(t);(0,D.vQ)(e),(0,E.CB)({txt:"Copied to clipboard"})},children:"Copy To Clipboard"})]}),(0,d.jsx)(j,{imgUrl:t.imgUrl,isEdited:I,onChangeImg:oe}),(0,d.jsxs)("section",{className:"share-btns",children:[(0,d.jsx)(O,{url:" ",type:"whatsapp",title:fe}),(0,d.jsx)(O,{url:"facebook.com",type:"facebook",quote:fe}),(0,d.jsx)(O,{url:"telegram.com",type:"telegram",title:fe}),(0,d.jsx)(O,{url:"",type:"email",subject:t.name,body:fe})]}),(0,d.jsxs)("section",{className:"title-edit",children:[(0,d.jsx)(h,{value:M,onChange:function(){return Q((function(e){return!e}))}}),(0,d.jsx)("form",{onSubmit:function(e){return e.preventDefault()},className:"nice-form",children:(0,d.jsxs)("div",{className:"form__group field dishes-form",children:[(0,d.jsx)("input",{value:w,onChange:function(e){var n=+e.target.value;(!n||n<0)&&(n=""),k(n)},type:"number",id:"numOfDishes",name:"numOfDishes",className:"form__field",placeholder:"Search by recipe or ingredient"}),(0,d.jsx)("label",{htmlFor:"numOfDishes",className:"form__label",children:"Number Of Dishes"})]})})]}),(0,d.jsx)(F,{removeIngredient:ue,addIngredient:se,handleIngChange:ae,ingredients:t.ingredients,ingToScale:pe,onChangeRecipeData:re,ingToRemoveIdx:x,onReOrderIngs:function(e){var n=e.destination.index,a=e.source.index,c=(0,r.Z)(t.ingredients);c=(0,D.th)(c,n,a);var s=(0,i.Z)((0,i.Z)({},t),{},{ingredients:c});I?u(s):ne({recipe:s},"general")},numOfDishes:w,isFixedRatio:M,handleRecipeAmounts:function(e,n){var t=+e.target.innerText;t||(t=pe.amount),H(t)},amountToScaleFixed:$}),(0,d.jsxs)("section",{className:"instructions",children:[(0,d.jsx)("strong",{className:"instructions-title",children:"Instructions"}),(0,d.jsx)("textarea",{onClick:function(e){return e.stopPropagation()},className:"instructions-area",onChange:function(e){var n=e.target;return re("instructions",n.value)},value:t.instructions,name:"instructions",id:"",cols:"30",rows:"30"})]}),P&&(0,d.jsx)("button",{onClick:ie,className:"edit-btn save-changes ".concat(le),children:"Save Changes"})]}):(0,d.jsx)(m.a,{_isLoading:!0})}},1945:function(e,n,t){t.d(n,{O:function(){return p}});var r=t(7762),a=t(5861),i=t(7757),c=t.n(i),s=t(763),u=t(1732);var o=t(9275),p={query:function(e,n){return f.apply(this,arguments)},getEmptyRecipe:function(){var e=g();return{name:"New Recipe",createdAt:Date.now(),ingToScaleId:e.id,ingredients:[e],imgUrl:"",instructions:""}},getEmptyIngredient:g,getById:function(e){return d.apply(this,arguments)},remove:function(e){return h.apply(this,arguments)},update:function(e){return v.apply(this,arguments)},save:function(e,n){return m.apply(this,arguments)},getRecipeTxt:function(e){var n="";n+=(0,o.YA)(e.name)+"\n\n\n";var t=e.ingredients.find((function(n){return n.id===e.ingToScaleId}));n+="--Ingredients--\n";var a,i=(0,r.Z)(e.ingredients);try{for(i.s();!(a=i.n()).done;){var c=a.value,u=t&&(0,o.ze)(c,t);n+=(0,s.capitalize)(c.name)+"\t\t ",n+=c.amount+" "+c.units+"\t\t ",n+=u,n+="\n\n"}}catch(p){i.e(p)}finally{i.f()}return n+="\n\n",n+="--Instructions--\n",n+=e.instructions}},l="recipe";function f(){return(f=(0,a.Z)(c().mark((function e(n,t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",u.R.get(l,{userId:n,filterBy:t}));case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return");case 7:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}function d(){return(d=(0,a.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.R.get("recipe/"+n);case 3:return t=e.sent,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function h(){return(h=(0,a.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",u.R.delete("".concat(l,"/").concat(n)));case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return");case 7:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}function m(){return(m=(0,a.Z)(c().mark((function e(n,t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",null!==n&&void 0!==n&&n.recipe._id?u.R.put(l,{data:n,type:t}):u.R.post(l,n.recipe));case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return");case 7:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}function v(){return(v=(0,a.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",u.R.put(l,n));case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return");case 7:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}function g(){return{id:(0,o.qR)(),name:"ingredient",amount:1,units:"g"}}},6801:function(e,n,t){t.d(n,{z:function(){return c}});var r=t(5861),a=t(7757),i=t.n(a);function c(e){var n=e.txt,t=e.title,a=e.successCb,c=void 0===a?function(){}:a,s=e.failCb,u=void 0===s?function(){}:s;return function(){var e=(0,r.Z)(i().mark((function e(r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",r({type:"SET_DIALOG_OPEN",txt:n,title:t,successCb:c,failCb:u}));case 4:throw e.prev=4,e.t0=e.catch(0),console.log("err:",e.t0),e.t0;case 8:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(n){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=968.b40cc1d2.chunk.js.map