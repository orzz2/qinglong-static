(self.webpackChunk=self.webpackChunk||[]).push([[4756],{5008:function(Ee){Ee.exports={"left-tree-container":"left-tree-container___3ivV3","left-tree-scroller":"left-tree-scroller___r-ES6","log-container":"log-container___2Beqi"}},5338:function(Ee,x,e){"use strict";e.r(x);var Qe=e(85500),Y=e(44602),Xe=e(84707),ie=e(31946),Ye=e(45340),de=e(16783),we=e(91443),b=e(69915),qe=e(38460),V=e(38144),N=e(18158),f=e(3178),et=e(21300),w=e(21355),ye=e(30606),ce=e(88938),L=e(15658),M=e(2468),tt=e(6400),j=e(76854),E=e(22205),Z=e.n(E),C=e(12924),u=e.n(C),_=e(42237),t=e(27131),I=e(23311),Be=j.Z.Option,me=g=>{var q=g.handleCancel,p=g.treeData,ee=g.visible,ve=L.Z.useForm(),De=(0,M.Z)(ve,1),T=De[0],k=(0,C.useState)(!1),G=(0,M.Z)(k,2),Pe=G[0],H=G[1],Me=(0,C.useState)([]),te=(0,M.Z)(Me,2),Oe=te[0],ae=te[1],le=(0,C.useState)(),ne=(0,M.Z)(le,2),z=ne[0],O=ne[1],R=(0,C.useState)("blank"),v=(0,M.Z)(R,2),y=v[0],h=v[1],S=function(){var i=(0,ye.Z)(Z().mark(function m(r){var o;return Z().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:H(!0),r.path=r.path||"",o=new FormData,o.append("file",z),o.append("filename",r.filename),o.append("path",r.path),o.append("content",""),_.W.post("".concat(t.Z.apiPrefix,"scripts"),{data:o}).then(D=>{var _e=D.code,ge=D.data;if(_e===200){w.ZP.success("\u4FDD\u5B58\u6587\u4EF6\u6210\u529F");var re=r.path?"".concat(r.path,"/"):"",d=z?z.name:r.filename;q({filename:d,path:r.path,key:"".concat(re).concat(d)})}else w.ZP.error(ge);H(!1)}).finally(()=>H(!1));case 8:case"end":return W.stop()}},m)}));return function(r){return i.apply(this,arguments)}}(),K=i=>(O(i),!1),fe=i=>{h(i.target.value)},$=i=>{var m=(0,f.Z)(i),r;try{for(m.s();!(r=m.n()).done;){var o=r.value;o.children&&o.children.length>0&&(o.children=o.children.filter(B=>B.type==="directory").map(B=>(0,N.Z)((0,N.Z)({},B),{},{disabled:!1})),$(o.children))}}catch(B){m.e(B)}finally{m.f()}return i};return(0,C.useEffect)(()=>{var i=p.filter(r=>r.type==="directory").map(r=>(0,N.Z)((0,N.Z)({},r),{},{disabled:!1})),m=$(i);ae(m)},[p]),(0,C.useEffect)(()=>{T.resetFields()},[ee]),u().createElement(Y.Z,{title:"\u65B0\u5EFA\u811A\u672C",visible:ee,forceRender:!0,centered:!0,maskClosable:!1,onOk:()=>{T.validateFields().then(i=>{S(i)}).catch(i=>{console.log("Validate Failed:",i)})},onCancel:()=>q(),confirmLoading:Pe},u().createElement(L.Z,{form:T,layout:"vertical",name:"edit_name_modal"},u().createElement(L.Z.Item,{name:"type",label:"\u7C7B\u578B",rules:[{required:!0}],initialValue:"blank"},u().createElement(V.ZP.Group,{onChange:fe},u().createElement(V.ZP,{value:"blank"},"\u7A7A\u6587\u4EF6"),u().createElement(V.ZP,{value:"upload"},"\u672C\u5730\u4E0A\u4F20"))),y==="blank"&&u().createElement(L.Z.Item,{name:"filename",label:"\u6587\u4EF6\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6587\u4EF6\u540D"}]},u().createElement(b.Z,{placeholder:"\u8BF7\u8F93\u5165\u6587\u4EF6\u540D"})),u().createElement(L.Z.Item,{label:"\u7236\u76EE\u5F55",name:"path"},u().createElement(de.Z,{allowClear:!0,treeData:Oe,fieldNames:{value:"key",label:"title"},placeholder:"\u8BF7\u9009\u62E9\u7236\u76EE\u5F55",treeDefaultExpandAll:!0})),y==="upload"&&u().createElement(L.Z.Item,{label:"\u6587\u4EF6",name:"file"},u().createElement(ie.Z.Dragger,{beforeUpload:K,maxCount:1},u().createElement("p",{className:"ant-upload-drag-icon"},u().createElement(I.Z,null)),u().createElement("p",{className:"ant-upload-text"},"\u70B9\u51FB\u6216\u8005\u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u533A\u57DF\u4E0A\u4F20")))))};x.default=me},54863:function(Ee,x,e){"use strict";e.r(x);var Qe=e(6428),Y=e(92155),Xe=e(63898),ie=e(22465),Ye=e(91443),de=e(69915),we=e(70751),b=e(95125),qe=e(23779),V=e(14578),N=e(87025),f=e(8019),et=e(45340),w=e(16783),ye=e(35993),ce=e(87918),L=e(21300),M=e(21355),tt=e(85500),j=e(44602),E=e(2468),Z=e(18158),C=e(87988),u=e(13066),_=e(12924),t=e.n(_),I=e(27131),Be=e(77894),me=e(1858),g=e(42237),q=e(5008),p=e.n(q),ee=e(35058),ve=e(27768),De=e(30498),T=e(48487),k=e(36531),G=e(27478),Pe=e(77062),H=e(5338),Me=e(66292),te=e.n(Me),Oe=e(80377),ae=u.Z.Text;function le(O,R){var v=[];if(O){var y=[];return R.forEach(h=>{if(h.title.toLocaleLowerCase().includes(O))y.push(h);else{var S=[];(h.children||[]).forEach(K=>{K.title.toLocaleLowerCase().includes(O)&&S.push(K)}),S.length>0&&(y.push((0,Z.Z)((0,Z.Z)({},h),{},{children:S})),v.push(h.key))}}),{tree:y,expandedKeys:v}}return{tree:R,expandedKeys:v}}var ne={".py":"python",".js":"javascript",".sh":"shell",".ts":"typescript"},z=O=>{var R=O.headerStyle,v=O.isPhone,y=O.theme,h=O.socketMessage,S=(0,_.useState)("\u8BF7\u9009\u62E9\u811A\u672C\u6587\u4EF6"),K=(0,E.Z)(S,2),fe=K[0],$=K[1],i=(0,_.useState)("\u8BF7\u9009\u62E9\u811A\u672C\u6587\u4EF6"),m=(0,E.Z)(i,2),r=m[0],o=m[1],B=(0,_.useState)(),W=(0,E.Z)(B,2),D=W[0],_e=W[1],ge=(0,_.useState)([]),re=(0,E.Z)(ge,2),d=re[0],he=re[1],at=(0,_.useState)([]),Ae=(0,E.Z)(at,2),lt=Ae[0],J=Ae[1],nt=(0,_.useState)(!1),Le=(0,E.Z)(nt,2),_t=Le[0],Ze=Le[1],rt=(0,_.useState)(""),Ie=(0,E.Z)(rt,2),Te=Ie[0],st=Ie[1],ot=(0,_.useState)(),Se=(0,E.Z)(ot,2),ut=Se[0],Et=Se[1],se=(0,_.useRef)(),it=(0,_.useState)(!1),Ke=(0,E.Z)(it,2),dt=Ke[0],Re=Ke[1],ct=(0,_.useState)(""),We=(0,E.Z)(ct,2),mt=We[0],vt=We[1],Dt=(0,_.useState)(!1),Fe=(0,E.Z)(Dt,2),oe=Fe[0],F=Fe[1],Q=(0,_.useRef)(null),Pt=(0,_.useState)(!1),Ue=(0,E.Z)(Pt,2),Mt=Ue[0],xe=Ue[1],Ot=(0,_.useState)(),be=(0,E.Z)(Ot,2),c=be[0],Ve=be[1],ft=(0,_.useState)([]),Ne=(0,E.Z)(ft,2),gt=Ne[0],Ce=Ne[1],ht=()=>{Ze(!0),g.W.get("".concat(I.Z.apiPrefix,"scripts")).then(a=>{he(a.data),J(a.data),Ct()}).finally(()=>Ze(!1))},je=a=>{g.W.get("".concat(I.Z.apiPrefix,"scripts/").concat(a.title,"?path=").concat(a.parent||"")).then(l=>{o(l.data)})},Ct=()=>{var a=Oe.m.location.query,l=a.p,n=a.s;if(n){var s="".concat(l,"/").concat(n),U={node:{title:n,key:l?s:n,parent:l}};Ce([l]),ke([s],U)}},ue=(a,l)=>{if(!(l.key===D||!a)){o("\u52A0\u8F7D\u4E2D...");var n=a?ne[a.slice(-3)]:"";st(v&&n==="typescript"?"javascript":n),_e(l.key),$(l.key),Ve(l),je(l)}},pt=a=>{Ce(a)},ke=(0,_.useCallback)((a,l)=>{var n=Q.current?Q.current.getValue().replace(/\r\n/g,`
`):r;n!==r?j.Z.confirm({title:"\u786E\u8BA4\u79BB\u5F00",content:t().createElement(t().Fragment,null,"\u5F53\u524D\u4FEE\u6539\u672A\u4FDD\u5B58\uFF0C\u786E\u5B9A\u79BB\u5F00\u5417"),onOk(){ue(a[0],l.node),F(!1)},onCancel(){console.log("Cancel")}}):(F(!1),ue(a[0],l.node))},[r]),yt=(0,_.useCallback)(a=>{var l=a.target.value;Bt(l)},[d,J]),Bt=(0,_.useCallback)(te()(a=>{vt(a);var l=le(a.toLocaleLowerCase(),d),n=l.tree,s=l.expandedKeys;Ce(s),J(n)},300),[d,J]),Ge=()=>{setTimeout(()=>{F(!0)},300)},He=()=>{F(!1),o("\u52A0\u8F7D\u4E2D..."),je(c)},ze=()=>{j.Z.confirm({title:"\u786E\u8BA4\u4FDD\u5B58",content:t().createElement(t().Fragment,null,"\u786E\u8BA4\u4FDD\u5B58\u6587\u4EF6",t().createElement(ae,{style:{wordBreak:"break-all"},type:"warning"},c.title)," ","\uFF0C\u4FDD\u5B58\u540E\u4E0D\u53EF\u6062\u590D"),onOk(){var a=Q.current?Q.current.getValue().replace(/\r\n/g,`
`):r;return new Promise((l,n)=>{g.W.put("".concat(I.Z.apiPrefix,"scripts"),{data:{filename:c.title,path:c.parent||"",content:a}}).then(s=>{s.code===200?(M.ZP.success("\u4FDD\u5B58\u6210\u529F"),o(a),F(!1)):M.ZP.error(s),l(null)}).catch(s=>n(s))})},onCancel(){console.log("Cancel")}})},$e=()=>{j.Z.confirm({title:"\u786E\u8BA4\u5220\u9664",content:t().createElement(t().Fragment,null,"\u786E\u8BA4\u5220\u9664\u6587\u4EF6",t().createElement(ae,{style:{wordBreak:"break-all"},type:"warning"},D)," ","\uFF0C\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D"),onOk(){g.W.delete("".concat(I.Z.apiPrefix,"scripts"),{data:{filename:c.title,path:c.parent||""}}).then(a=>{if(a.code===200){M.ZP.success("\u5220\u9664\u6210\u529F");var l=[...d];if(c.parent){var n=l.findIndex(P=>P.key===c.parent),s=l[n],U=s.children.findIndex(P=>P.key===c.key);U!==-1&&n!==-1&&(s.children.splice(U,1),l.splice(n,1,(0,Z.Z)({},s)))}else{var A=l.findIndex(P=>P.key===c.key);A!==-1&&l.splice(A,1)}he(l)}else M.ZP.error(a)})},onCancel(){console.log("Cancel")}})},Je=()=>{xe(!0)},At=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{filename:"",path:"",key:""},n=l.filename,s=l.path,U=l.key;if(n){var A=[...d],P={title:n,key:U,parent:s};if(s){var pe=A.findIndex(Tt=>Tt.key===s);if(pe!==-1){var X=A[pe];X.children&&X.children.length>0?X.children.unshift(P):X.children=[P],A.splice(pe,1,(0,Z.Z)({},X))}}else A.unshift(P);he(A),ue(P.title,P),F(!0)}xe(!1)},St=()=>{g.W.post("".concat(I.Z.apiPrefix,"scripts/download"),{data:{filename:c.title}}).then(a=>{var l=new Blob([a],{type:"application/json"}),n=URL.createObjectURL(l),s=document.createElement("a");s.href=n,s.download=c.title,document.documentElement.appendChild(s),s.click(),document.documentElement.removeChild(s)})};(0,_.useEffect)(()=>{var a=mt||"",l=le(a.toLocaleLowerCase(),d),n=l.tree;J(n),_e(""),Ve(null),$("\u8BF7\u9009\u62E9\u811A\u672C\u6587\u4EF6"),o("\u8BF7\u9009\u62E9\u811A\u672C\u6587\u4EF6")},[d]),(0,_.useEffect)(()=>{ht(),se&&se.current&&Et(se.current.clientHeight)},[]);var Lt=a=>{switch(a){case"save":ze();break;case"exit":He();break;default:break}},Zt=a=>{switch(a){case"save":Je();break;case"edit":Ge();break;case"delete":$e();break;default:break}},It=oe?t().createElement(ce.Z,{items:[{label:"\u4FDD\u5B58",key:"save",icon:t().createElement(T.Z,null)},{label:"\u9000\u51FA\u7F16\u8F91",key:"exit",icon:t().createElement(k.Z,null)}],onClick:a=>{var l=a.key,n=a.domEvent;n.stopPropagation(),Lt(l)}}):t().createElement(ce.Z,{items:[{label:"\u65B0\u5EFA",key:"add",icon:t().createElement(T.Z,null)},{label:"\u7F16\u8F91",key:"edit",icon:t().createElement(k.Z,null),disabled:!D},{label:"\u5220\u9664",key:"delete",icon:t().createElement(G.Z,null),disabled:!D}],onClick:a=>{var l=a.key,n=a.domEvent;n.stopPropagation(),Zt(l)}});return t().createElement(Be.ZP,{className:"ql-container-wrapper log-wrapper",title:fe,loading:_t,extra:v?[t().createElement(w.Z,{className:"log-select",value:D,dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:d,placeholder:"\u8BF7\u9009\u62E9\u811A\u672C",fieldNames:{value:"key",label:"title"},showSearch:!0,onSelect:ue}),t().createElement(V.Z,{overlay:It,trigger:["click"]},t().createElement(f.Z,{type:"primary",icon:t().createElement(Pe.Z,null)}))]:oe?[t().createElement(f.Z,{type:"primary",onClick:ze},"\u4FDD\u5B58"),t().createElement(f.Z,{type:"primary",onClick:He},"\u9000\u51FA\u7F16\u8F91")]:[t().createElement(b.Z,{title:"\u65B0\u5EFA"},t().createElement(f.Z,{type:"primary",onClick:Je,icon:t().createElement(T.Z,null)})),t().createElement(b.Z,{title:"\u7F16\u8F91"},t().createElement(f.Z,{disabled:!D,type:"primary",onClick:Ge,icon:t().createElement(k.Z,null)})),t().createElement(b.Z,{title:"\u5220\u9664"},t().createElement(f.Z,{type:"primary",disabled:!D,onClick:$e,icon:t().createElement(G.Z,null)})),t().createElement(f.Z,{type:"primary",onClick:()=>{Re(!0)}},"\u8C03\u8BD5")],header:{style:R}},t().createElement("div",{className:"".concat(p()["log-container"]," log-container")},!v&&t().createElement(De.Z,{split:"vertical",size:200,maxSize:-100},t().createElement("div",{className:p()["left-tree-container"]},d.length>0?t().createElement(t().Fragment,null,t().createElement(de.Z.Search,{className:p()["left-tree-search"],onChange:yt,placeholder:"\u8BF7\u8F93\u5165\u811A\u672C\u540D",allowClear:!0}),t().createElement("div",{className:p()["left-tree-scroller"],ref:se},t().createElement(ie.Z,{className:p()["left-tree"],treeData:lt,showIcon:!0,height:ut,selectedKeys:[D],expandedKeys:gt,onExpand:pt,showLine:{showLeafIcon:!0},onSelect:ke}))):t().createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}},t().createElement(Y.Z,{description:"\u6682\u65E0\u811A\u672C",image:Y.Z.PRESENTED_IMAGE_SIMPLE}))),t().createElement(me.ZP,{language:Te,value:r,theme:y,options:{readOnly:!oe,fontSize:12,lineNumbersMinChars:3,folding:!1,glyphMargin:!1},onMount:a=>{Q.current=a}})),v&&t().createElement(ve.fk,{value:r,options:{lineNumbers:!0,lineWrapping:!0,styleActiveLine:!0,matchBrackets:!0,mode:Te,readOnly:!oe},onBeforeChange:(a,l,n)=>{o(n)},onChange:(a,l,n)=>{}}),t().createElement(ee.default,{visible:dt,treeData:d,currentNode:c,content:r,socketMessage:h,handleCancel:()=>{Re(!1)}}),t().createElement(H.default,{visible:Mt,treeData:d,handleCancel:At})))};x.default=z}}]);