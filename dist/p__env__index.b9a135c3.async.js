(self.webpackChunk=self.webpackChunk||[]).push([[4896],{80377:function(Y,h,e){"use strict";e.d(h,{m:function(){return S.m}});var S=e(72612),b=e(59609)},8791:function(Y,h,e){"use strict";e.r(h);var S=e(85500),b=e(44602),U=e(91443),a=e(69915),i=e(21300),l=e(21355),E=e(30606),D=e(88938),g=e(15658),u=e(2468),T=e(22205),d=e.n(T),v=e(12924),p=e.n(v),c=e(42237),o=e(27131),s=M=>{var Q=M.ids,C=M.handleCancel,V=M.visible,B=g.Z.useForm(),P=(0,u.Z)(B,1),n=P[0],le=(0,v.useState)(!1),j=(0,u.Z)(le,2),H=j[0],J=j[1],I=function(){var F=(0,E.Z)(d().mark(function y(q){var R,X,W;return d().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return J(!0),L.next=3,c.W.put("".concat(o.Z.apiPrefix,"envs/name"),{data:{ids:Q,name:q.name}});case 3:R=L.sent,X=R.code,W=R.data,X===200?l.ZP.success("\u66F4\u65B0\u73AF\u5883\u53D8\u91CF\u540D\u79F0\u6210\u529F"):l.ZP.error(W),J(!1),C();case 9:case"end":return L.stop()}},y)}));return function(q){return F.apply(this,arguments)}}();return(0,v.useEffect)(()=>{n.resetFields()},[Q,V]),p().createElement(b.Z,{title:"\u4FEE\u6539\u73AF\u5883\u53D8\u91CF\u540D\u79F0",visible:V,forceRender:!0,centered:!0,maskClosable:!1,onOk:()=>{n.validateFields().then(F=>{I(F)}).catch(F=>{console.log("Validate Failed:",F)})},onCancel:()=>C(),confirmLoading:H},p().createElement(g.Z,{form:n,layout:"vertical",name:"edit_name_modal"},p().createElement(g.Z.Item,{name:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u7684\u73AF\u5883\u53D8\u91CF\u540D\u79F0"}]},p().createElement(a.Z,{placeholder:"\u8BF7\u8F93\u5165\u65B0\u7684\u73AF\u5883\u53D8\u91CF\u540D\u79F0"}))))};h.default=s},43478:function(Y,h,e){"use strict";e.r(h);var S=e(77137),b=e(8167),U=e(87025),a=e(8019),i=e(21300),l=e(21355),E=e(85500),D=e(44602),g=e(44997),u=e(4117),T=e(18763),d=e(530),v=e(70751),p=e(95125),c=e(57549),o=e(18158),s=e(2468),M=e(7592),Q=e(91443),C=e(69915),V=e(87988),B=e(13066),P=e(12924),n=e.n(P),le=e(36531),j=e(69731),H=e(50333),J=e(27478),I=e(27131),F=e(77894),y=e(42237),q=e(3221),R=e(8791),X=e(57633),W=e(76985),G=e(95413),L=e(56022),ee=e(83732),te=B.Z.Text,oe=B.Z.Paragraph,ae=C.Z.Search,O;(function(_){_[_.\u5DF2\u542F\u7528=0]="\u5DF2\u542F\u7528",_[_.\u5DF2\u7981\u7528=1]="\u5DF2\u7981\u7528"})(O||(O={}));var N;(function(_){_[_.success=0]="success",_[_.error=1]="error"})(N||(N={}));var z;(function(_){_[_.\u542F\u7528=0]="\u542F\u7528",_[_.\u7981\u7528=1]="\u7981\u7528"})(z||(z={}));var $;(function(_){_[_.enable=0]="enable",_[_.disable=1]="disable"})($||($={}));var ge="DragableBodyRow",A=_=>{var ne=_.index,ve=_.moveRow,Oe=_.className,pe=_.style,Pe=(0,M.Z)(_,["index","moveRow","className","style"]),re=(0,P.useRef)(),Z=(0,X.L)({accept:ge,collect:K=>{var he=K.getItem()||{},se=he.index;return se===ne?{}:{isOver:K.isOver(),dropClassName:se<ne?" drop-over-downward":" drop-over-upward"}},drop:K=>{ve(K.index,ne)}}),k=(0,s.Z)(Z,2),_e=k[0],ie=_e.isOver,ue=_e.dropClassName,de=k[1],fe=(0,W.c)({type:ge,item:{index:ne},collect:K=>({isDragging:K.isDragging()})}),me=(0,s.Z)(fe,2),De=me[1];return de(De(re)),n().createElement("tr",(0,c.Z)({ref:re,className:"".concat(Oe).concat(ie?ue:""),style:(0,o.Z)({cursor:"move"},pe)},Pe))},ce=_=>{var ne=_.headerStyle,ve=_.isPhone,Oe=_.theme,pe=[{title:"\u5E8F\u53F7",align:"center",width:60,render:(t,r,m)=>n().createElement("span",{style:{cursor:"text"}},m+1," ")},{title:"\u540D\u79F0",dataIndex:"name",key:"name",align:"center",sorter:(t,r)=>t.name.localeCompare(r.name)},{title:"\u503C",dataIndex:"value",key:"value",align:"center",width:"35%",render:(t,r)=>n().createElement(oe,{style:{wordBreak:"break-all",marginBottom:0,textAlign:"left"},ellipsis:{tooltip:t,rows:2}},t)},{title:"\u5907\u6CE8",dataIndex:"remarks",key:"remarks",align:"center"},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"timestamp",key:"timestamp",align:"center",width:165,ellipsis:{showTitle:!1},sorter:{compare:(t,r)=>{var m=new Date(t.updatedAt||t.timestamp).getTime(),f=new Date(r.updatedAt||r.timestamp).getTime();return m-f}},render:(t,r)=>{var m=navigator.language||navigator.languages[0],f=r.updatedAt||r.timestamp,x=new Date(f).toLocaleString(m,{hour12:!1}).replace(" 24:"," 00:");return n().createElement(p.Z,{placement:"topLeft",title:x,trigger:["hover","click"]},n().createElement("span",null,x))}},{title:"\u72B6\u6001",key:"status",dataIndex:"status",align:"center",width:70,filters:[{text:"\u5DF2\u542F\u7528",value:0},{text:"\u5DF2\u7981\u7528",value:1}],onFilter:(t,r)=>r.status===t,render:(t,r,m)=>n().createElement(u.Z,{size:"middle",style:{cursor:"text"}},n().createElement(d.Z,{color:N[r.status],style:{marginRight:0}},O[r.status]))},{title:"\u64CD\u4F5C",key:"action",width:120,align:"center",render:(t,r,m)=>{var f=!ve;return n().createElement(u.Z,{size:"middle"},n().createElement(p.Z,{title:f?"\u7F16\u8F91":""},n().createElement("a",{onClick:()=>He(r,m)},n().createElement(le.Z,null))),n().createElement(p.Z,{title:f?r.status===O.\u5DF2\u7981\u7528?"\u542F\u7528":"\u7981\u7528":""},n().createElement("a",{onClick:()=>ke(r,m)},r.status===O.\u5DF2\u7981\u7528?n().createElement(j.Z,null):n().createElement(H.Z,null))),n().createElement(p.Z,{title:f?"\u5220\u9664":""},n().createElement("a",{onClick:()=>Xe(r,m)},n().createElement(J.Z,null))))}}],Pe=(0,P.useState)([]),re=(0,s.Z)(Pe,2),Z=re[0],k=re[1],_e=(0,P.useState)(!0),ie=(0,s.Z)(_e,2),ue=ie[0],de=ie[1],fe=(0,P.useState)(!1),me=(0,s.Z)(fe,2),De=me[0],K=me[1],he=(0,P.useState)(!1),se=(0,s.Z)(he,2),Le=se[0],Me=se[1],Ze=(0,P.useState)(),Ce=(0,s.Z)(Ze,2),Ke=Ce[0],Be=Ce[1],Ue=(0,P.useState)([]),ye=(0,s.Z)(Ue,2),w=ye[0],Ae=ye[1],Fe=(0,P.useState)(""),be=(0,s.Z)(Fe,2),Te=be[0],we=be[1],xe=(0,P.useState)(),Ie=(0,s.Z)(xe,2),Se=Ie[0],Re=Ie[1],Ee=()=>{de(!0),y.W.get("".concat(I.Z.apiPrefix,"envs?searchValue=").concat(Te)).then(t=>{k(t.data)}).finally(()=>de(!1))},ke=(t,r)=>{D.Z.confirm({title:"\u786E\u8BA4".concat(t.status===O.\u5DF2\u7981\u7528?"\u542F\u7528":"\u7981\u7528"),content:n().createElement(n().Fragment,null,"\u786E\u8BA4",t.status===O.\u5DF2\u7981\u7528?"\u542F\u7528":"\u7981\u7528","Env"," ",n().createElement(te,{style:{wordBreak:"break-all"},type:"warning"},t.value)," ","\u5417"),onOk(){y.W.put("".concat(I.Z.apiPrefix,"envs/").concat(t.status===O.\u5DF2\u7981\u7528?"enable":"disable"),{data:[t.id]}).then(m=>{if(m.code===200){l.ZP.success("".concat(t.status===O.\u5DF2\u7981\u7528?"\u542F\u7528":"\u7981\u7528","\u6210\u529F"));var f=t.status===O.\u5DF2\u7981\u7528?O.\u5DF2\u542F\u7528:O.\u5DF2\u7981\u7528,x=[...Z];x.splice(r,1,(0,o.Z)((0,o.Z)({},t),{},{status:f})),k(x)}else l.ZP.error(m)})},onCancel(){console.log("Cancel")}})},Ve=()=>{Be(null),K(!0)},He=(t,r)=>{Be(t),K(!0)},Xe=(t,r)=>{D.Z.confirm({title:"\u786E\u8BA4\u5220\u9664",content:n().createElement(n().Fragment,null,"\u786E\u8BA4\u5220\u9664\u53D8\u91CF"," ",n().createElement(te,{style:{wordBreak:"break-all"},type:"warning"},t.name,": ",t.value)," ","\u5417"),onOk(){y.W.delete("".concat(I.Z.apiPrefix,"envs"),{data:[t.id]}).then(m=>{if(m.code===200){l.ZP.success("\u5220\u9664\u6210\u529F");var f=[...Z];f.splice(r,1),k(f)}else l.ZP.error(m)})},onCancel(){console.log("Cancel")}})},Ge=t=>{K(!1),t&&ze(t)},Ne=t=>{Me(!1),Ee()},ze=t=>{var r=[...Z],m=Z.findIndex(f=>f.id===t.id);m===-1?(t=Array.isArray(t)?t:[t],r.push(...t)):r.splice(m,1,(0,o.Z)({},t)),k(r)},$e={body:{row:A}},Ye=(0,P.useCallback)((t,r)=>{if(t!==r){var m=Z[t];y.W.put("".concat(I.Z.apiPrefix,"envs/").concat(m.id,"/move"),{data:{fromIndex:t,toIndex:r}}).then(f=>{if(f.code===200){var x=[...Z];x.splice(t,1),x.splice(r,0,(0,o.Z)((0,o.Z)({},m),f.data)),k([...x])}else l.ZP.error(f)})}},[Z]),Qe=t=>{Ae(t),setTimeout(()=>{(w.length===0||t.length===0)&&Re((0,ee.W)({extraHeight:87}))})},je={selectedRowIds:w,onChange:Qe},Je=()=>{D.Z.confirm({title:"\u786E\u8BA4\u5220\u9664",content:n().createElement(n().Fragment,null,"\u786E\u8BA4\u5220\u9664\u9009\u4E2D\u7684\u53D8\u91CF\u5417"),onOk(){y.W.delete("".concat(I.Z.apiPrefix,"envs"),{data:w}).then(t=>{t.code===200?(l.ZP.success("\u6279\u91CF\u5220\u9664\u6210\u529F"),Ae([]),Ee()):l.ZP.error(t)})},onCancel(){console.log("Cancel")}})},We=t=>{D.Z.confirm({title:"\u786E\u8BA4".concat(z[t]),content:n().createElement(n().Fragment,null,"\u786E\u8BA4",z[t],"\u9009\u4E2D\u7684\u53D8\u91CF\u5417"),onOk(){y.W.put("".concat(I.Z.apiPrefix,"envs/").concat($[t]),{data:w}).then(r=>{r.code===200?Ee():l.ZP.error(r)})},onCancel(){console.log("Cancel")}})},qe=()=>{Me(!0)},et=t=>{we(t.trim())};return(0,P.useEffect)(()=>{Ee()},[Te]),(0,P.useEffect)(()=>{setTimeout(()=>{Re((0,ee.W)({extraHeight:87}))})},[]),n().createElement(F.ZP,{className:"ql-container-wrapper env-wrapper",title:"\u73AF\u5883\u53D8\u91CF",extra:[n().createElement(ae,{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u503C/\u5907\u6CE8",style:{width:"auto"},enterButton:!0,loading:ue,onSearch:et}),n().createElement(a.Z,{key:"2",type:"primary",onClick:()=>Ve()},"\u65B0\u5EFA\u53D8\u91CF")],header:{style:ne}},w.length>0&&n().createElement("div",{style:{marginBottom:16}},n().createElement(a.Z,{type:"primary",style:{marginBottom:5},onClick:qe},"\u6279\u91CF\u4FEE\u6539\u53D8\u91CF\u540D\u79F0"),n().createElement(a.Z,{type:"primary",style:{marginBottom:5,marginLeft:8},onClick:Je},"\u6279\u91CF\u5220\u9664"),n().createElement(a.Z,{type:"primary",onClick:()=>We(0),style:{marginLeft:8,marginBottom:5}},"\u6279\u91CF\u542F\u7528"),n().createElement(a.Z,{type:"primary",onClick:()=>We(1),style:{marginLeft:8,marginRight:8}},"\u6279\u91CF\u7981\u7528"),n().createElement("span",{style:{marginLeft:8}},"\u5DF2\u9009\u62E9",n().createElement("a",null,w==null?void 0:w.length),"\u9879")),n().createElement(G.W,{backend:L.PD},n().createElement(b.Z,{columns:pe,rowSelection:je,pagination:!1,dataSource:Z,rowKey:"id",size:"middle",scroll:{x:1e3,y:Se},components:$e,loading:ue,onRow:(t,r)=>({index:r,moveRow:Ye})})),n().createElement(q.default,{visible:De,handleCancel:Ge,env:Ke}),n().createElement(R.default,{visible:Le,handleCancel:Ne,ids:w}))};h.default=ce},3221:function(Y,h,e){"use strict";e.r(h);var S=e(85500),b=e(44602),U=e(38460),a=e(38144),i=e(91443),l=e(69915),E=e(21300),D=e(21355),g=e(18158),u=e(30606),T=e(88938),d=e(15658),v=e(2468),p=e(22205),c=e.n(p),o=e(12924),s=e.n(o),M=e(42237),Q=e(27131),C=V=>{var B=V.env,P=V.handleCancel,n=V.visible,le=d.Z.useForm(),j=(0,v.Z)(le,1),H=j[0],J=(0,o.useState)(!1),I=(0,v.Z)(J,2),F=I[0],y=I[1],q=function(){var R=(0,u.Z)(c().mark(function X(W){var G,L,ee,te,oe,ae,O,N,z,$;return c().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return y(!0),G=W.value,L=W.split,ee=W.name,te=W.remarks,oe=B?"put":"post",B?ae=(0,g.Z)((0,g.Z)({},W),{},{id:B.id}):L==="1"?(O=G.includes("&")?"&":`
`,ae=G.split(O).map(ce=>({name:ee,value:ce,remarks:te}))):ae=[{value:G,name:ee,remarks:te}],A.prev=4,A.next=7,M.W[oe]("".concat(Q.Z.apiPrefix,"envs"),{data:ae});case 7:N=A.sent,z=N.code,$=N.data,z===200?D.ZP.success(B?"\u66F4\u65B0\u53D8\u91CF\u6210\u529F":"\u65B0\u5EFA\u53D8\u91CF\u6210\u529F"):D.ZP.error($),y(!1),P($),A.next=18;break;case 15:A.prev=15,A.t0=A.catch(4),y(!1);case 18:case"end":return A.stop()}},X,null,[[4,15]])}));return function(W){return R.apply(this,arguments)}}();return(0,o.useEffect)(()=>{H.resetFields()},[B,n]),s().createElement(b.Z,{title:B?"\u7F16\u8F91\u53D8\u91CF":"\u65B0\u5EFA\u53D8\u91CF",visible:n,forceRender:!0,centered:!0,maskClosable:!1,onOk:()=>{H.validateFields().then(R=>{q(R)}).catch(R=>{console.log("Validate Failed:",R)})},onCancel:()=>P(),confirmLoading:F},s().createElement(d.Z,{form:H,layout:"vertical",name:"env_modal",initialValues:B},s().createElement(d.Z.Item,{name:"name",label:"\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u73AF\u5883\u53D8\u91CF\u540D\u79F0",whitespace:!0},{pattern:/^[a-zA-Z_][0-9a-zA-Z_]*$/,message:"\u53EA\u80FD\u8F93\u5165\u5B57\u6BCD\u6570\u5B57\u4E0B\u5212\u7EBF\uFF0C\u4E14\u4E0D\u80FD\u4EE5\u6570\u5B57\u5F00\u5934"}]},s().createElement(l.Z,{placeholder:"\u8BF7\u8F93\u5165\u73AF\u5883\u53D8\u91CF\u540D\u79F0"})),!B&&s().createElement(d.Z.Item,{name:"split",label:"\u81EA\u52A8\u62C6\u5206",initialValue:"0",tooltip:"\u591A\u4E2A\u4F9D\u8D56\u662F\u5426\u6362\u884C\u5206\u5272"},s().createElement(a.ZP.Group,null,s().createElement(a.ZP,{value:"1"},"\u662F"),s().createElement(a.ZP,{value:"0"},"\u5426"))),s().createElement(d.Z.Item,{name:"value",label:"\u503C",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u73AF\u5883\u53D8\u91CF\u503C",whitespace:!0}]},s().createElement(l.Z.TextArea,{rows:4,autoSize:!0,placeholder:"\u8BF7\u8F93\u5165\u73AF\u5883\u53D8\u91CF\u503C"})),s().createElement(d.Z.Item,{name:"remarks",label:"\u5907\u6CE8"},s().createElement(l.Z,{placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"}))))};h.default=C},27131:function(Y,h){"use strict";h.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u4EFB\u52A1\u65E5\u5FD7",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u4EFB\u52A1\u65E5\u5FD7",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"email",label:"\u90AE\u7BB1"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahtxxtps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/cron":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u4EFB\u52A1\u65E5\u5FD7","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7"},dependenceTypes:["nodejs","python3","linux"]}},42237:function(Y,h,e){"use strict";e.d(h,{W:function(){return p}});var S=e(30606),b=e(18158),U=e(21300),a=e(21355),i=e(22205),l=e.n(i),E=e(50659),D=e(27131),g=e(80377);a.ZP.config({duration:1.5});var u=Date.now(),T=function(o){if(o.response){var s=o.data?o.data.message||o.message||o.data:o.response.statusText,M=o.response.status;[502,504].includes(M)?g.m.push("/error"):M===401?g.m.location.pathname!=="/login"&&(a.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(D.Z.authKey),g.m.push("/login")):a.ZP.error(s)}else console.log(o.message);throw o},d=(0,E.l7)({timeout:6e4,params:{t:u},errorHandler:T}),v=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];d.interceptors.request.use((c,o)=>{var s=localStorage.getItem(D.Z.authKey);if(s&&!v.includes(c)){var M={Authorization:"Bearer ".concat(s)};return{url:c,options:(0,b.Z)((0,b.Z)({},o),{},{headers:M})}}return{url:c,options:o}}),d.interceptors.response.use(function(){var c=(0,S.Z)(l().mark(function o(s){var M;return l().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,s.clone();case 2:return M=C.sent,C.abrupt("return",s);case 4:case"end":return C.stop()}},o)}));return function(o){return c.apply(this,arguments)}}());var p=d},83732:function(Y,h,e){"use strict";e.d(h,{Z:function(){return S},W:function(){return b}});function S(){var U=navigator.userAgent.toLowerCase(),a=o=>o.test(U),i=o=>(U.match(o)||[]).toString().replace(/[^0-9|_.]/g,"").replace(/_/g,"."),l="unknow";a(/windows|win32|win64|wow32|wow64/g)?l="windows":a(/macintosh|macintel/g)?l="macos":a(/x11/g)?l="linux":a(/android|adr/g)?l="android":a(/ios|iphone|ipad|ipod|iwatch/g)&&(l="ios");var E="unknow";l==="windows"?a(/windows nt 5.0|windows 2000/g)?E="2000":a(/windows nt 5.1|windows xp/g)?E="xp":a(/windows nt 5.2|windows 2003/g)?E="2003":a(/windows nt 6.0|windows vista/g)?E="vista":a(/windows nt 6.1|windows 7/g)?E="7":a(/windows nt 6.2|windows 8/g)?E="8":a(/windows nt 6.3|windows 8.1/g)?E="8.1":a(/windows nt 10.0|windows 10/g)&&(E="10"):l==="macos"?E=i(/os x [\d._]+/g):l==="android"?E=i(/android [\d._]+/g):l==="ios"&&(E=i(/os [\d._]+/g));var D="unknow";l==="windows"||l==="macos"||l==="linux"?D="desktop":(l==="android"||l==="ios"||a(/mobile/g))&&(D="mobile");var g="unknow",u="unknow";a(/applewebkit/g)?(g="webkit",a(/edge/g)?u="edge":a(/opr/g)?u="opera":a(/chrome/g)?u="chrome":a(/safari/g)&&(u="safari")):a(/gecko/g)&&a(/firefox/g)?(g="gecko",u="firefox"):a(/presto/g)?(g="presto",u="opera"):a(/trident|compatible|msie/g)&&(g="trident",u="iexplore");var T="unknow";g==="webkit"?T=i(/applewebkit\/[\d._]+/g):g==="gecko"?T=i(/gecko\/[\d._]+/g):g==="presto"?T=i(/presto\/[\d._]+/g):g==="trident"&&(T=i(/trident\/[\d._]+/g));var d="unknow";u==="chrome"?d=i(/chrome\/[\d._]+/g):u==="safari"?d=i(/version\/[\d._]+/g):u==="firefox"?d=i(/firefox\/[\d._]+/g):u==="opera"?d=i(/opr\/[\d._]+/g):u==="iexplore"?d=i(/(msie [\d._]+)|(rv:[\d._]+)/g):u==="edge"&&(d=i(/edge\/[\d._]+/g));var v="none",p="unknow";a(/micromessenger/g)?(v="wechat",p=i(/micromessenger\/[\d._]+/g)):a(/qqbrowser/g)?(v="qq",p=i(/qqbrowser\/[\d._]+/g)):a(/ucbrowser/g)?(v="uc",p=i(/ucbrowser\/[\d._]+/g)):a(/qihu 360se/g)?v="360":a(/2345explorer/g)?(v="2345",p=i(/2345explorer\/[\d._]+/g)):a(/metasr/g)?v="sougou":a(/lbbrowser/g)?v="liebao":a(/maxthon/g)&&(v="maxthon",p=i(/maxthon\/[\d._]+/g));var c=Object.assign({engine:g,engineVs:T,platform:D,supporter:u,supporterVs:d,system:l,systemVs:E},v==="none"?{}:{shell:v,shellVs:p});return console.log(`%c
 .d88b.  d888888b d8b   db  d888b  db       .d88b.  d8b   db  d888b  
.8P  Y8.   \`88'   888o  88 88' Y8b 88      .8P  Y8. 888o  88 88' Y8b 
88    88    88    88V8o 88 88      88      88    88 88V8o 88 88      
88    88    88    88 V8o88 88  ooo 88      88    88 88 V8o88 88  ooo 
\`8P  d8'   .88.   88  V888 88. ~8~ 88booo. \`8b  d8' 88  V888 88. ~8~ 
 \`Y88'Y8 Y888888P VP   V8P  Y888P  Y88888P  \`Y88P'  VP   V8P  Y888P  
                                                                     
                                                                     
`,"color: blue;font-size: 14px;"),console.log(`%c\u5FD8\u5F62\u96E8\u7B20\u70DF\u84D1\uFF0C\u77E5\u5FC3\u7267\u5531\u6A35\u6B4C\u3002\u660E\u6708\u6E05\u98CE\u5171\u6211\uFF0C\u95F2\u4EBA\u4E09\u4E2A\uFF0C\u4ECE\u4ED6\u4ECA\u53E4\u6D88\u78E8\u3002
`,"color: yellow;font-size: 18px;"),console.log(`%c\u9752\u9F99\u8FD0\u884C\u73AF\u5883:

\u7CFB\u7EDF\uFF1A`.concat(c.system,"/").concat(c.systemVs,`
\u6D4F\u89C8\u5668\uFF1A`).concat(c.supporter,"/").concat(c.supporterVs,`
\u5185\u6838\uFF1A`).concat(c.engine,"/").concat(c.engineVs),"color: green;font-size: 14px;font-weight: bold;"),c}function b(){var U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=U.extraHeight,i=U.id;typeof a=="undefined"&&(a=121);var l=null;i?l=document.getElementById(i)?document.getElementById(i).getElementsByClassName("ant-table-thead")[0]:null:l=document.querySelector(".ant-table-wrapper");var E=0;l&&(E=l.getBoundingClientRect().top);var D=document.body.clientHeight-E-a;return D}},71129:function(){}}]);
