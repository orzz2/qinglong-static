(self.webpackChunk=self.webpackChunk||[]).push([[4585],{45589:function(ae,N,e){"use strict";e.d(N,{Z:function(){return Z}});var v=e(42479),n=e(12924),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},r=c,H=e(1719),C=function(U,A){return n.createElement(H.Z,(0,v.Z)((0,v.Z)({},U),{},{ref:A,icon:r}))};C.displayName="EyeOutlined";var Z=n.forwardRef(C)},91177:function(ae){ae.exports={container:"container___kt4TS",top:"top___but-E",header:"header___g8Zm7",logo:"logo___2nVz6",title:"title___31Kfx",desc:"desc___3UpVk",main:"main___3Ley5","ant-steps":"ant-steps___22Lrk","steps-container":"steps-container___1iiDs",extra:"extra___WMKko"}},20208:function(){},80377:function(ae,N,e){"use strict";e.d(N,{m:function(){return v.m}});var v=e(72612),n=e(59609)},35153:function(ae,N,e){"use strict";e.r(N),e.d(N,{default:function(){return Ee}});var v=e(91443),n=e(69915),c=e(87025),r=e(8019),H=e(18158),C=e(21300),Z=e(21355),f=e(2468),U=e(87988),A=e(13066),I=e(6400),L=e(76854),te=e(20859),ge=e(20208),ne=e(943),_=e(69535),M=e(21886),i=e(12924),o=e.n(i),j=e(42479),oe=e(24189),K=e(4820),me=e(72143),R=e(73066),se=e(89827),Oe=e(24127),_e=e(19803),he=e.n(_e),Ne=["className","prefixCls","style","active","status","iconPrefix","icon","wrapperStyle","stepNumber","disabled","description","title","subTitle","progressDot","stepIcon","tailContent","icons","stepIndex","onStepClick","onClick"];function Me(F){return typeof F=="string"}var ye=function(F){(0,R.Z)(g,F);var y=(0,se.Z)(g);function g(){var p;return(0,K.Z)(this,g),p=y.apply(this,arguments),p.onClick=function(){var u=p.props,t=u.onClick,a=u.onStepClick,m=u.stepIndex;t&&t.apply(void 0,arguments),a(m)},p}return(0,me.Z)(g,[{key:"renderIconNode",value:function(){var u,t=this.props,a=t.prefixCls,m=t.progressDot,G=t.stepIcon,Q=t.stepNumber,W=t.status,Y=t.title,z=t.description,S=t.icon,J=t.iconPrefix,O=t.icons,T,q=he()("".concat(a,"-icon"),"".concat(J,"icon"),(u={},(0,M.Z)(u,"".concat(J,"icon-").concat(S),S&&Me(S)),(0,M.Z)(u,"".concat(J,"icon-check"),!S&&W==="finish"&&(O&&!O.finish||!O)),(0,M.Z)(u,"".concat(J,"icon-cross"),!S&&W==="error"&&(O&&!O.error||!O)),u)),l=i.createElement("span",{className:"".concat(a,"-icon-dot")});return m?typeof m=="function"?T=i.createElement("span",{className:"".concat(a,"-icon")},m(l,{index:Q-1,status:W,title:Y,description:z})):T=i.createElement("span",{className:"".concat(a,"-icon")},l):S&&!Me(S)?T=i.createElement("span",{className:"".concat(a,"-icon")},S):O&&O.finish&&W==="finish"?T=i.createElement("span",{className:"".concat(a,"-icon")},O.finish):O&&O.error&&W==="error"?T=i.createElement("span",{className:"".concat(a,"-icon")},O.error):S||W==="finish"||W==="error"?T=i.createElement("span",{className:q}):T=i.createElement("span",{className:"".concat(a,"-icon")},Q),G&&(T=G({index:Q-1,status:W,title:Y,description:z,node:T})),T}},{key:"render",value:function(){var u,t=this.props,a=t.className,m=t.prefixCls,G=t.style,Q=t.active,W=t.status,Y=W===void 0?"wait":W,z=t.iconPrefix,S=t.icon,J=t.wrapperStyle,O=t.stepNumber,T=t.disabled,q=t.description,l=t.title,d=t.subTitle,X=t.progressDot,ee=t.stepIcon,xe=t.tailContent,Te=t.icons,Ze=t.stepIndex,be=t.onStepClick,Ae=t.onClick,Be=(0,oe.Z)(t,Ne),De=he()("".concat(m,"-item"),"".concat(m,"-item-").concat(Y),a,(u={},(0,M.Z)(u,"".concat(m,"-item-custom"),S),(0,M.Z)(u,"".concat(m,"-item-active"),Q),(0,M.Z)(u,"".concat(m,"-item-disabled"),T===!0),u)),Re=(0,j.Z)({},G),fe={};return be&&!T&&(fe.role="button",fe.tabIndex=0,fe.onClick=this.onClick),i.createElement("div",Object.assign({},Be,{className:De,style:Re}),i.createElement("div",Object.assign({onClick:Ae},fe,{className:"".concat(m,"-item-container")}),i.createElement("div",{className:"".concat(m,"-item-tail")},xe),i.createElement("div",{className:"".concat(m,"-item-icon")},this.renderIconNode()),i.createElement("div",{className:"".concat(m,"-item-content")},i.createElement("div",{className:"".concat(m,"-item-title")},l,d&&i.createElement("div",{title:typeof d=="string"?d:void 0,className:"".concat(m,"-item-subtitle")},d)),q&&i.createElement("div",{className:"".concat(m,"-item-description")},q))))}}]),g}(i.Component),Ie=["prefixCls","style","className","children","direction","type","labelPlacement","iconPrefix","status","size","current","progressDot","stepIcon","initial","icons","onChange"],ie=function(F){(0,R.Z)(g,F);var y=(0,se.Z)(g);function g(){var p;return(0,K.Z)(this,g),p=y.apply(this,arguments),p.onStepClick=function(u){var t=p.props,a=t.onChange,m=t.current;a&&m!==u&&a(u)},p}return(0,me.Z)(g,[{key:"render",value:function(){var u,t=this,a=this.props,m=a.prefixCls,G=a.style,Q=G===void 0?{}:G,W=a.className,Y=a.children,z=a.direction,S=a.type,J=a.labelPlacement,O=a.iconPrefix,T=a.status,q=a.size,l=a.current,d=a.progressDot,X=a.stepIcon,ee=a.initial,xe=a.icons,Te=a.onChange,Ze=(0,oe.Z)(a,Ie),be=S==="navigation",Ae=d?"vertical":J,Be=he()(m,"".concat(m,"-").concat(z),W,(u={},(0,M.Z)(u,"".concat(m,"-").concat(q),q),(0,M.Z)(u,"".concat(m,"-label-").concat(Ae),z==="horizontal"),(0,M.Z)(u,"".concat(m,"-dot"),!!d),(0,M.Z)(u,"".concat(m,"-navigation"),be),u));return o().createElement("div",Object.assign({className:Be,style:Q},Ze),(0,Oe.Z)(Y).map(function(De,Re){var fe=ee+Re,Se=(0,j.Z)({stepNumber:"".concat(fe+1),stepIndex:fe,key:fe,prefixCls:m,iconPrefix:O,wrapperStyle:Q,progressDot:d,stepIcon:X,icons:xe,onStepClick:Te&&t.onStepClick},De.props);return T==="error"&&Re===l-1&&(Se.className="".concat(m,"-next-error")),De.props.status||(fe===l?Se.status=T:fe<l?Se.status="finish":Se.status="wait"),Se.active=fe===l,(0,i.cloneElement)(De,Se)}))}}]),g}(o().Component);ie.Step=ye,ie.defaultProps={type:"default",prefixCls:"rc-steps",iconPrefix:"rc",direction:"horizontal",labelPlacement:"horizontal",initial:0,current:0,status:"process",size:"",progressDot:!1};var Pe=ie,s=e(6410),h=e(46434),P=e(58720),E=e(40480),D=e(67719),pe=function(F,y){var g={};for(var p in F)Object.prototype.hasOwnProperty.call(F,p)&&y.indexOf(p)<0&&(g[p]=F[p]);if(F!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,p=Object.getOwnPropertySymbols(F);u<p.length;u++)y.indexOf(p[u])<0&&Object.prototype.propertyIsEnumerable.call(F,p[u])&&(g[p[u]]=F[p[u]]);return g},$=function(y){var g,p=y.percent,u=y.size,t=y.className,a=y.direction,m=y.responsive,G=pe(y,["percent","size","className","direction","responsive"]),Q=(0,D.Z)(m),W=Q.xs,Y=i.useContext(P.E_),z=Y.getPrefixCls,S=Y.direction,J=i.useCallback(function(){return m&&W?"vertical":a},[W,a]),O=z("steps",y.prefixCls),T=z("",y.iconPrefix),q=he()((g={},(0,M.Z)(g,"".concat(O,"-rtl"),S==="rtl"),(0,M.Z)(g,"".concat(O,"-with-progress"),p!==void 0),g),t),l={finish:i.createElement(s.Z,{className:"".concat(O,"-finish-icon")}),error:i.createElement(h.Z,{className:"".concat(O,"-error-icon")})},d=function(ee){var xe=ee.node,Te=ee.status;if(Te==="process"&&p!==void 0){var Ze=u==="small"?32:40,be=i.createElement("div",{className:"".concat(O,"-progress-icon")},i.createElement(E.Z,{type:"circle",percent:p,width:Ze,strokeWidth:4,format:function(){return null}}),xe);return be}return xe};return i.createElement(Pe,(0,_.Z)({icons:l},G,{size:u,direction:J(),stepIcon:d,prefixCls:O,iconPrefix:T,className:q}))};$.Step=Pe.Step,$.defaultProps={current:0,responsive:!0};var V=$,Ce=e(88938),b=e(15658),k=e(27131),B=e(80377),ue=e(91177),x=e.n(ue),ve=e(42237),w=b.Z.Item,le=V.Step,ce=L.Z.Option,de=A.Z.Link,re=()=>{var F=(0,i.useState)(!1),y=(0,f.Z)(F,2),g=y[0],p=y[1],u=o().useState(0),t=(0,f.Z)(u,2),a=t[0],m=t[1],G=(0,i.useState)([]),Q=(0,f.Z)(G,2),W=Q[0],Y=Q[1],z=()=>{m(a+1)},S=()=>{m(a-1)},J=l=>{p(!0),ve.W.put("".concat(k.Z.apiPrefix,"user/init"),{data:{username:l.username,password:l.password}}).then(d=>{d.code===200?z():Z.ZP.error(d.message)}).finally(()=>p(!1))},O=l=>{p(!0),ve.W.put("".concat(k.Z.apiPrefix,"user/notification/init"),{data:(0,H.Z)({},l)}).then(d=>{d&&d.code===200?z():Z.ZP.error(d.message)}).finally(()=>p(!1))},T=l=>{var d=k.Z.notificationModeMap[l];Y(d||[])};(0,i.useEffect)(()=>{localStorage.removeItem(k.Z.authKey)},[]);var q=[{title:"\u6B22\u8FCE\u4F7F\u7528",content:o().createElement("div",{className:x().top,style:{marginTop:100}},o().createElement("div",{className:x().header},o().createElement("span",{className:x().title},"\u6B22\u8FCE\u4F7F\u7528\u9752\u9F99\u63A7\u5236\u9762\u677F")),o().createElement("div",{className:x().action},o().createElement(r.Z,{type:"primary",onClick:()=>{z()}},"\u5F00\u59CB\u5B89\u88C5")))},{title:"\u901A\u77E5\u8BBE\u7F6E",content:o().createElement(b.Z,{onFinish:O,layout:"vertical"},o().createElement(b.Z.Item,{label:"\u901A\u77E5\u65B9\u5F0F",name:"type",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u901A\u77E5\u65B9\u5F0F"}],style:{maxWidth:350}},o().createElement(L.Z,{onChange:T,placeholder:"\u8BF7\u9009\u62E9\u901A\u77E5\u65B9\u5F0F"},k.Z.notificationModes.filter(l=>l.value!=="closed").map(l=>o().createElement(ce,{value:l.value},l.label)))),W.map(l=>o().createElement(b.Z.Item,{label:l.label,name:l.label,extra:l.tip,rules:[{required:l.required}],style:{maxWidth:400}},o().createElement(n.Z.TextArea,{autoSize:!0,placeholder:"\u8BF7\u8F93\u5165".concat(l.label)}))),o().createElement(r.Z,{type:"primary",htmlType:"submit",loading:g},"\u4FDD\u5B58"),o().createElement(r.Z,{type:"link",htmlType:"button",onClick:()=>z()},"\u8DF3\u8FC7"))},{title:"\u8D26\u6237\u8BBE\u7F6E",content:o().createElement(b.Z,{onFinish:J,layout:"vertical"},o().createElement(b.Z.Item,{label:"\u7528\u6237\u540D",name:"username",rules:[{required:!0}],style:{maxWidth:350}},o().createElement(n.Z,{placeholder:"\u7528\u6237\u540D"})),o().createElement(b.Z.Item,{label:"\u5BC6\u7801",name:"password",rules:[{required:!0},{pattern:/^(?!admin$).*$/,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3Aadmin"}],hasFeedback:!0,style:{maxWidth:350}},o().createElement(n.Z,{type:"password",placeholder:"\u5BC6\u7801"})),o().createElement(b.Z.Item,{name:"confirm",label:"\u786E\u8BA4\u5BC6\u7801",dependencies:["password"],hasFeedback:!0,style:{maxWidth:350},rules:[{required:!0},l=>{var d=l.getFieldValue;return{validator(X,ee){return!ee||d("password")===ee?Promise.resolve():Promise.reject(new Error("\u60A8\u8F93\u5165\u7684\u4E24\u4E2A\u5BC6\u7801\u4E0D\u5339\u914D\uFF01"))}}}]},o().createElement(n.Z.Password,{placeholder:"\u786E\u8BA4\u5BC6\u7801"})),o().createElement(r.Z,{type:"primary",htmlType:"submit",loading:g},"\u63D0\u4EA4"))},{title:"\u5B8C\u6210\u5B89\u88C5",content:o().createElement("div",{className:x().top,style:{marginTop:80}},o().createElement("div",{className:x().header},o().createElement("span",{className:x().title},"\u606D\u559C\u5B89\u88C5\u5B8C\u6210\uFF01"),o().createElement(de,{href:"https://github.com/whyour/qinglong",target:"_blank"},"Github"),o().createElement(de,{href:"https://t.me/jiao_long",target:"_blank"},"Telegram\u9891\u9053")),o().createElement("div",{style:{marginTop:16}},o().createElement(r.Z,{type:"primary",onClick:()=>{B.m.push("/login")}},"\u53BB\u767B\u5F55")))}];return o().createElement("div",{className:x().container},o().createElement("div",{className:x().top},o().createElement("div",{className:x().header},o().createElement("img",{alt:"logo",className:x().logo,src:"http://0.0.0.0:5700/images/logo.png"}),o().createElement("span",{className:x().title},"\u521D\u59CB\u5316\u914D\u7F6E"))),o().createElement("div",{className:x().main},o().createElement(V,{current:a,direction:"vertical",size:"small",className:x()["ant-steps"]},q.map(l=>o().createElement(le,{key:l.title,title:l.title}))),o().createElement("div",{className:x()["steps-container"]},q[a].content)))},Ee=re},27131:function(ae,N){"use strict";N.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u4EFB\u52A1\u65E5\u5FD7",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u4EFB\u52A1\u65E5\u5FD7",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"email",label:"\u90AE\u7BB1"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahtxxtps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/cron":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u4EFB\u52A1\u65E5\u5FD7","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7"},dependenceTypes:["nodejs","python3","linux"]}},42237:function(ae,N,e){"use strict";e.d(N,{W:function(){return ge}});var v=e(30606),n=e(18158),c=e(21300),r=e(21355),H=e(22205),C=e.n(H),Z=e(50659),f=e(27131),U=e(80377);r.ZP.config({duration:1.5});var A=Date.now(),I=function(_){if(_.response){var M=_.data?_.data.message||_.message||_.data:_.response.statusText,i=_.response.status;[502,504].includes(i)?U.m.push("/error"):i===401?U.m.location.pathname!=="/login"&&(r.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(f.Z.authKey),U.m.push("/login")):r.ZP.error(M)}else console.log(_.message);throw _},L=(0,Z.l7)({timeout:6e4,params:{t:A},errorHandler:I}),te=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];L.interceptors.request.use((ne,_)=>{var M=localStorage.getItem(f.Z.authKey);if(M&&!te.includes(ne)){var i={Authorization:"Bearer ".concat(M)};return{url:ne,options:(0,n.Z)((0,n.Z)({},_),{},{headers:i})}}return{url:ne,options:_}}),L.interceptors.response.use(function(){var ne=(0,v.Z)(C().mark(function _(M){var i;return C().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,M.clone();case 2:return i=j.sent,j.abrupt("return",M);case 4:case"end":return j.stop()}},_)}));return function(_){return ne.apply(this,arguments)}}());var ge=L},58823:function(ae,N,e){"use strict";e.d(N,{Z:function(){return r}});var v=e(39587),n=e(12924),c=e.n(n);function r(){var H=n.useReducer(function(f){return f+1},0),C=(0,v.Z)(H,2),Z=C[1];return Z}},16264:function(ae,N,e){"use strict";e.d(N,{jD:function(){return n},fk:function(){return r}});var v=e(2911),n=function(){return(0,v.Z)()&&window.document.documentElement},c,r=function(){if(!n())return!1;if(c!==void 0)return c;var C=document.createElement("div");return C.style.display="flex",C.style.flexDirection="column",C.style.rowGap="1px",C.appendChild(document.createElement("div")),C.appendChild(document.createElement("div")),document.body.appendChild(C),c=C.scrollHeight===1,document.body.removeChild(C),c}},92449:function(ae,N,e){"use strict";var v=e(69535),n=e(12924),c=e.n(n),r=e(45640),H=function(f,U){var A={};for(var I in f)Object.prototype.hasOwnProperty.call(f,I)&&U.indexOf(I)<0&&(A[I]=f[I]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function")for(var L=0,I=Object.getOwnPropertySymbols(f);L<I.length;L++)U.indexOf(I[L])<0&&Object.prototype.propertyIsEnumerable.call(f,I[L])&&(A[I[L]]=f[I[L]]);return A},C={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},Z=n.forwardRef(function(f,U){var A=function(i){var o=i.keyCode;o===r.Z.ENTER&&i.preventDefault()},I=function(i){var o=i.keyCode,j=f.onClick;o===r.Z.ENTER&&j&&j()},L=f.style,te=f.noStyle,ge=f.disabled,ne=H(f,["style","noStyle","disabled"]),_={};return te||(_=(0,v.Z)({},C)),ge&&(_.pointerEvents="none"),_=(0,v.Z)((0,v.Z)({},_),L),n.createElement("div",(0,v.Z)({role:"button",tabIndex:0,ref:U},ne,{onKeyDown:A,onKeyUp:I,style:_}))});N.Z=Z},67719:function(ae,N,e){"use strict";var v=e(12924),n=e.n(v),c=e(58823),r=e(2014);function H(){var C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,Z=(0,v.useRef)({}),f=(0,c.Z)();return(0,v.useEffect)(function(){var U=r.ZP.subscribe(function(A){Z.current=A,C&&f()});return function(){return r.ZP.unsubscribe(U)}},[]),Z.current}N.Z=H},69915:function(ae,N,e){"use strict";e.d(N,{Z:function(){return Pe}});var v=e(86910),n=e(69535),c=e(21886),r=e(12924),H=e(19803),C=e.n(H),Z=e(58720),f=e(59759),U=function(h){var P,E=(0,r.useContext)(Z.E_),D=E.getPrefixCls,pe=E.direction,$=h.prefixCls,V=h.className,Ce=V===void 0?"":V,b=D("input-group",$),k=C()(b,(P={},(0,c.Z)(P,"".concat(b,"-lg"),h.size==="large"),(0,c.Z)(P,"".concat(b,"-sm"),h.size==="small"),(0,c.Z)(P,"".concat(b,"-compact"),h.compact),(0,c.Z)(P,"".concat(b,"-rtl"),pe==="rtl"),P),Ce),B=(0,r.useContext)(f.aM),ue=(0,r.useMemo)(function(){return(0,n.Z)((0,n.Z)({},B),{isFormItemInput:!1})},[B]);return r.createElement("span",{className:k,style:h.style,onMouseEnter:h.onMouseEnter,onMouseLeave:h.onMouseLeave,onFocus:h.onFocus,onBlur:h.onBlur},r.createElement(f.aM.Provider,{value:ue},h.children))},A=U,I=e(99496),L=e(74532),te=e(8019),ge=e(23874),ne=e(36659),_=function(s,h){var P={};for(var E in s)Object.prototype.hasOwnProperty.call(s,E)&&h.indexOf(E)<0&&(P[E]=s[E]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var D=0,E=Object.getOwnPropertySymbols(s);D<E.length;D++)h.indexOf(E[D])<0&&Object.prototype.propertyIsEnumerable.call(s,E[D])&&(P[E[D]]=s[E[D]]);return P},M=r.forwardRef(function(s,h){var P,E=s.prefixCls,D=s.inputPrefixCls,pe=s.className,$=s.size,V=s.suffix,Ce=s.enterButton,b=Ce===void 0?!1:Ce,k=s.addonAfter,B=s.loading,ue=s.disabled,x=s.onSearch,ve=s.onChange,w=s.onCompositionStart,le=s.onCompositionEnd,ce=_(s,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),de=r.useContext(Z.E_),re=de.getPrefixCls,Ee=de.direction,F=r.useContext(ge.Z),y=r.useRef(!1),g=$||F,p=r.useRef(null),u=function(d){d&&d.target&&d.type==="click"&&x&&x(d.target.value,d),ve&&ve(d)},t=function(d){var X;document.activeElement===((X=p.current)===null||X===void 0?void 0:X.input)&&d.preventDefault()},a=function(d){var X,ee;x&&x((ee=(X=p.current)===null||X===void 0?void 0:X.input)===null||ee===void 0?void 0:ee.value,d)},m=function(d){y.current||a(d)},G=re("input-search",E),Q=re("input",D),W=typeof b=="boolean"?r.createElement(L.Z,null):null,Y="".concat(G,"-button"),z,S=b||{},J=S.type&&S.type.__ANT_BUTTON===!0;J||S.type==="button"?z=(0,ne.Tm)(S,(0,n.Z)({onMouseDown:t,onClick:function(d){var X,ee;(ee=(X=S==null?void 0:S.props)===null||X===void 0?void 0:X.onClick)===null||ee===void 0||ee.call(X,d),a(d)},key:"enterButton"},J?{className:Y,size:g}:{})):z=r.createElement(te.Z,{className:Y,type:b?"primary":void 0,size:g,disabled:ue,key:"enterButton",onMouseDown:t,onClick:a,loading:B,icon:W},b),k&&(z=[z,(0,ne.Tm)(k,{key:"addonAfter"})]);var O=C()(G,(P={},(0,c.Z)(P,"".concat(G,"-rtl"),Ee==="rtl"),(0,c.Z)(P,"".concat(G,"-").concat(g),!!g),(0,c.Z)(P,"".concat(G,"-with-button"),!!b),P),pe),T=function(d){y.current=!0,w==null||w(d)},q=function(d){y.current=!1,le==null||le(d)};return r.createElement(v.ZP,(0,n.Z)({ref:(0,I.sQ)(p,h),onPressEnter:m},ce,{size:g,onCompositionStart:T,onCompositionEnd:q,prefixCls:Q,addonAfter:z,suffix:V,onChange:u,className:O,disabled:ue}))});M.displayName="Search";var i=M,o=e(76356),j=e(39587),oe=e(45876),K=e(45589),me=e(42479),R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},se=R,Oe=e(1719),_e=function(h,P){return r.createElement(Oe.Z,(0,me.Z)((0,me.Z)({},h),{},{ref:P,icon:se}))};_e.displayName="EyeInvisibleOutlined";var he=r.forwardRef(_e),Ne=function(s,h){var P={};for(var E in s)Object.prototype.hasOwnProperty.call(s,E)&&h.indexOf(E)<0&&(P[E]=s[E]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var D=0,E=Object.getOwnPropertySymbols(s);D<E.length;D++)h.indexOf(E[D])<0&&Object.prototype.propertyIsEnumerable.call(s,E[D])&&(P[E[D]]=s[E[D]]);return P},Me={click:"onClick",hover:"onMouseOver"},ye=r.forwardRef(function(s,h){var P=(0,r.useState)(!1),E=(0,j.Z)(P,2),D=E[0],pe=E[1],$=function(){var k=s.disabled;k||pe(!D)},V=function(k){var B,ue=s.action,x=s.iconRender,ve=x===void 0?function(){return null}:x,w=Me[ue]||"",le=ve(D),ce=(B={},(0,c.Z)(B,w,$),(0,c.Z)(B,"className","".concat(k,"-icon")),(0,c.Z)(B,"key","passwordIcon"),(0,c.Z)(B,"onMouseDown",function(re){re.preventDefault()}),(0,c.Z)(B,"onMouseUp",function(re){re.preventDefault()}),B);return r.cloneElement(r.isValidElement(le)?le:r.createElement("span",null,le),ce)},Ce=function(k){var B=k.getPrefixCls,ue=s.className,x=s.prefixCls,ve=s.inputPrefixCls,w=s.size,le=s.visibilityToggle,ce=Ne(s,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),de=B("input",ve),re=B("input-password",x),Ee=le&&V(re),F=C()(re,ue,(0,c.Z)({},"".concat(re,"-").concat(w),!!w)),y=(0,n.Z)((0,n.Z)({},(0,oe.Z)(ce,["suffix","iconRender"])),{type:D?"text":"password",className:F,prefixCls:de,suffix:Ee});return w&&(y.size=w),r.createElement(v.ZP,(0,n.Z)({ref:h},y))};return r.createElement(Z.C,null,Ce)});ye.defaultProps={action:"click",visibilityToggle:!0,iconRender:function(h){return h?r.createElement(K.Z,null):r.createElement(he,null)}},ye.displayName="Password";var Ie=ye,ie=v.ZP;ie.Group=A,ie.Search=i,ie.TextArea=o.Z,ie.Password=Ie;var Pe=ie},76854:function(ae,N,e){"use strict";var v=e(21886),n=e(69535),c=e(12924),r=e.n(c),H=e(45876),C=e(19803),Z=e.n(C),f=e(95348),U=e(58720),A=e(42055),I=e(23874),L=e(38797),te=e(59759),ge=e(22985),ne=e(76414),_=e(29840),M=function(oe,K){var me={};for(var R in oe)Object.prototype.hasOwnProperty.call(oe,R)&&K.indexOf(R)<0&&(me[R]=oe[R]);if(oe!=null&&typeof Object.getOwnPropertySymbols=="function")for(var se=0,R=Object.getOwnPropertySymbols(oe);se<R.length;se++)K.indexOf(R[se])<0&&Object.prototype.propertyIsEnumerable.call(oe,R[se])&&(me[R[se]]=oe[R[se]]);return me},i="SECRET_COMBOBOX_MODE_DO_NOT_USE",o=function(K,me){var R,se=K.prefixCls,Oe=K.bordered,_e=Oe===void 0?!0:Oe,he=K.className,Ne=K.getPopupContainer,Me=K.dropdownClassName,ye=K.listHeight,Ie=ye===void 0?256:ye,ie=K.placement,Pe=K.listItemHeight,s=Pe===void 0?24:Pe,h=K.size,P=K.disabled,E=K.notFoundContent,D=K.status,pe=K.showArrow,$=M(K,["prefixCls","bordered","className","getPopupContainer","dropdownClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","showArrow"]),V=c.useContext(U.E_),Ce=V.getPopupContainer,b=V.getPrefixCls,k=V.renderEmpty,B=V.direction,ue=V.virtual,x=V.dropdownMatchSelectWidth,ve=c.useContext(I.Z),w=b("select",se),le=b(),ce=c.useMemo(function(){var l=$.mode;if(l!=="combobox")return l===i?"combobox":l},[$.mode]),de=ce==="multiple"||ce==="tags",re=pe!==void 0?pe:$.loading||!(de||ce==="combobox"),Ee=(0,c.useContext)(te.aM),F=Ee.status,y=Ee.hasFeedback,g=Ee.isFormItemInput,p=Ee.feedbackIcon,u=(0,ge.F)(F,D),t;E!==void 0?t=E:ce==="combobox"?t=null:t=(k||_.Z)("Select");var a=(0,A.Z)((0,n.Z)((0,n.Z)({},$),{multiple:de,hasFeedback:y,feedbackIcon:p,showArrow:re,prefixCls:w})),m=a.suffixIcon,G=a.itemIcon,Q=a.removeIcon,W=a.clearIcon,Y=(0,H.Z)($,["suffixIcon","itemIcon"]),z=Z()(Me,(0,v.Z)({},"".concat(w,"-dropdown-").concat(B),B==="rtl")),S=h||ve,J=c.useContext(L.Z),O=P||J,T=Z()((R={},(0,v.Z)(R,"".concat(w,"-lg"),S==="large"),(0,v.Z)(R,"".concat(w,"-sm"),S==="small"),(0,v.Z)(R,"".concat(w,"-rtl"),B==="rtl"),(0,v.Z)(R,"".concat(w,"-borderless"),!_e),(0,v.Z)(R,"".concat(w,"-in-form-item"),g),R),(0,ge.Z)(w,u,y),he),q=function(){return ie!==void 0?ie:B==="rtl"?"bottomRight":"bottomLeft"};return c.createElement(f.ZP,(0,n.Z)({ref:me,virtual:ue,dropdownMatchSelectWidth:x},Y,{transitionName:(0,ne.mL)(le,(0,ne.q0)(ie),$.transitionName),listHeight:Ie,listItemHeight:s,mode:ce,prefixCls:w,placement:q(),direction:B,inputIcon:m,menuItemSelectedIcon:G,removeIcon:Q,clearIcon:W,notFoundContent:t,className:T,getPopupContainer:Ne||Ce,dropdownClassName:z,showArrow:y||pe,disabled:O}))},j=c.forwardRef(o);j.SECRET_COMBOBOX_MODE_DO_NOT_USE=i,j.Option=f.Wx,j.OptGroup=f.Xo,N.Z=j},45640:function(ae,N){"use strict";var e={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(n){var c=n.keyCode;if(n.altKey&&!n.ctrlKey||n.metaKey||c>=e.F1&&c<=e.F12)return!1;switch(c){case e.ALT:case e.CAPS_LOCK:case e.CONTEXT_MENU:case e.CTRL:case e.DOWN:case e.END:case e.ESC:case e.HOME:case e.INSERT:case e.LEFT:case e.MAC_FF_META:case e.META:case e.NUMLOCK:case e.NUM_CENTER:case e.PAGE_DOWN:case e.PAGE_UP:case e.PAUSE:case e.PRINT_SCREEN:case e.RIGHT:case e.SHIFT:case e.UP:case e.WIN_KEY:case e.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(n){if(n>=e.ZERO&&n<=e.NINE||n>=e.NUM_ZERO&&n<=e.NUM_MULTIPLY||n>=e.A&&n<=e.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&n===0)return!0;switch(n){case e.SPACE:case e.QUESTION_MARK:case e.NUM_PLUS:case e.NUM_MINUS:case e.NUM_PERIOD:case e.NUM_DIVISION:case e.SEMICOLON:case e.DASH:case e.EQUALS:case e.COMMA:case e.PERIOD:case e.SLASH:case e.APOSTROPHE:case e.SINGLE_QUOTE:case e.OPEN_SQUARE_BRACKET:case e.BACKSLASH:case e.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};N.Z=e},44026:function(ae,N,e){"use strict";e.d(N,{Z:function(){return f}});var v=e(42479),n=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,c=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,r="".concat(n," ").concat(c).split(/[\s\n]+/),H="aria-",C="data-";function Z(U,A){return U.indexOf(A)===0}function f(U){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,I;A===!1?I={aria:!0,data:!0,attr:!0}:A===!0?I={aria:!0}:I=(0,v.Z)({},A);var L={};return Object.keys(U).forEach(function(te){(I.aria&&(te==="role"||Z(te,H))||I.data&&Z(te,C)||I.attr&&r.includes(te))&&(L[te]=U[te])}),L}},71129:function(){}}]);
