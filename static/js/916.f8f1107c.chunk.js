"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[916],{8024:function(n,t){t.Z={dateOfBirth:"21 century",phoneNumber:"Is absent",location:"\ud83d\udc99\ud83d\udc9bUkraine, Nikopol",role:"my friend",email:"sili41995@gmail.com",chat:"sili4_a",description:"No description"}},5919:function(n,t,e){e.r(t),e.d(t,{default:function(){return bn}});var r,i,o,a,c,u,s,l,h,f,m,d,p,x,g,Z,y,j,v,b,w=e(2791),F=e(9434),z=e(7689),_=e(9439),S=e(1087),C=e(9046),k=e(3459),N=e(4717),I=e(168),W=e(6088),O=W.Z.li(r||(r=(0,I.Z)(["\n  align-items: center;\n  padding: ","px;\n  border-radius: 10px;\n  border: 0.5px solid rgba(137, 137, 137, 0.43);\n  transition: box-shadow ",";\n  &:hover,\n  &:focus {\n    box-shadow: ",";\n  }\n  & a {\n    display: flex;\n    gap: ","px;\n    text-decoration: none;\n    color: black;\n  }\n"])),(function(n){return 3*n.theme.spacing}),(function(n){return n.theme.transitionDurationAndFunc}),(function(n){return n.theme.primaryShadow}),(function(n){return n.theme.primaryGap})),E=W.Z.img(i||(i=(0,I.Z)(["\n  width: 70px;\n"]))),A=W.Z.div(o||(o=(0,I.Z)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  gap: ","px;\n  align-items: center;\n  & div {\n    flex-basis: calc((100% - ","*2px) / 3);\n  }\n"])),(function(n){return n.theme.primaryGap}),(function(n){return n.theme.primaryGap})),P=W.Z.div(a||(a=(0,I.Z)([""]))),B=W.Z.p(c||(c=(0,I.Z)(["\n  color: ",";\n  font-family: Inter;\n  font-size: 20px;\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return n.theme.primaryFontColor}),(function(n){return n.theme.secondaryFontWeight})),D=W.Z.p(u||(u=(0,I.Z)(["\n  color: #636363;\n  font-family: Inter;\n  font-size: ","px;\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return n.theme.primaryFontSize}),(function(n){return n.theme.primaryFontWeight})),G=W.Z.p(s||(s=(0,I.Z)(["\n  color: ",";\n  font-family: Inter;\n  font-size: ","px;\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return n.theme.primaryFontColor}),(function(n){return n.theme.secondaryFontSize}),(function(n){return n.theme.primaryFontWeight})),R=W.Z.p(l||(l=(0,I.Z)(["\n  color: #696969;\n  font-family: Inter;\n  font-size: ","px;\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return n.theme.secondaryFontSize}),(function(n){return n.theme.secondaryFontWeight})),T=e(3329),J=function(n){var t=n.contact,e=(0,N.Z)(t),r=e.userAvatar,i=e.name,o=e.id,a=e.role,c=e.number,u=e.email;return(0,T.jsx)(O,{children:(0,T.jsxs)(k.Z,{to:"".concat(C.Z.contactDetailsPath,"/").concat(o,"/").concat(C.Z.contactPath),children:[(0,T.jsx)(E,{src:r,alt:i}),(0,T.jsxs)(A,{children:[(0,T.jsxs)(P,{children:[(0,T.jsx)(B,{children:i}),(0,T.jsx)(D,{children:a})]}),(0,T.jsx)("div",{children:(0,T.jsx)(G,{children:c})}),(0,T.jsx)("div",{children:(0,T.jsx)(R,{children:u})})]})]})})},L=W.Z.p(h||(h=(0,I.Z)(["\n  color: ",";\n  font-family: Jua;\n  font-size: ","px;\n  font-weight: ",";\n"])),(function(n){return n.theme.primaryFontColor}),(function(n){return n.theme.secondaryFontSize}),(function(n){return n.theme.otherFontWeight})),Y=function(){return(0,T.jsx)(L,{children:"Contact list is empty"})},K=W.Z.div(f||(f=(0,I.Z)(["\n  width: 650px;\n  flex-shrink: 0;\n"]))),H=W.Z.ul(m||(m=(0,I.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n"])),(function(n){return n.theme.primaryGap})),U=e(3433),q=e(5795).Z.DESC_SORT_TYPE,M=function(n,t){return(0,U.Z)(n).sort((function(n,e){var r=n.name,i=e.name;return t===q?i.localeCompare(r):r.localeCompare(i)}))},Q=function(n,t){return t?n.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())})):n},V=e(2946),X=e(6048),$=X.Z.FILTER_SP_KEY,nn=X.Z.SORT_SP_KEY,tn=function(){var n,t,e=(0,F.v9)(V.Af),r=(0,S.lr)(),i=(0,_.Z)(r,1)[0],o=null!==(n=i.get($))&&void 0!==n?n:"",a=null!==(t=i.get(nn))&&void 0!==t?t:"",c=M(e,a),u=Q(c,o);return(0,T.jsx)(K,{children:e.length?(0,T.jsx)(H,{children:u.map((function(n){return(0,T.jsx)(J,{contact:n},n.id)}))}):(0,T.jsx)(Y,{})})},en=e(8820),rn=e(8617),on=e(6907),an=e(4217),cn=e(8024),un=e(1262),sn=function(n){var t=n.name,e=n.lastName,r=n.email,i=n.avatar,o=n.dateOfBirth,a=void 0===o?cn.Z.dateOfBirth:o,c=n.phoneNumber,u=void 0===c?cn.Z.phoneNumber:c,s=n.location,l=void 0===s?cn.Z.location:s,h=e?"".concat(t," ").concat(e):"".concat(t);return{name:t,userAvatar:(0,un.D)(i),userName:h,email:r,dateOfBirth:a,phoneNumber:u,location:l}},ln=W.Z.div(d||(d=(0,I.Z)(["\n  flex-shrink: 0;\n"]))),hn=W.Z.img(p||(p=(0,I.Z)(["\n  width: 150px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),fn=W.Z.p(x||(x=(0,I.Z)(["\n  color: ","px;\n  font-family: Jua;\n  font-size: 35px;\n  font-weight: ",";\n"])),(function(n){return n.theme.primaryFontColor}),(function(n){return n.theme.otherFontWeight})),mn=W.Z.div(g||(g=(0,I.Z)(["\n  margin-top: ","px;\n  margin-bottom: ","px;\n"])),(function(n){return 7*n.theme.spacing}),(function(n){return 16*n.theme.spacing})),dn=W.Z.div(Z||(Z=(0,I.Z)([""]))),pn=W.Z.p(y||(y=(0,I.Z)(["\n  margin-top: ","px;\n  margin-bottom: ","px;\n  color: ",";\n  font-family: Jua;\n  font-size: 25px;\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return 2*n.theme.spacing}),(function(n){return n.theme.spacing}),(function(n){return n.theme.primaryFontColor}),(function(n){return n.theme.otherFontWeight})),xn=W.Z.p(j||(j=(0,I.Z)(["\n  color: #7c7c7c;\n  font-family: Inter;\n  font-size: ","px;\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return n.theme.secondaryFontSize}),(function(n){return n.theme.primaryFontWeight})),gn=W.Z.div(v||(v=(0,I.Z)(["\n  display: flex;\n  align-items: center;\n  gap: ","px;\n  color: #7c7c7c;\n  font-family: Inter;\n  font-size: ","px;\n  font-weight: ",";\n  &:not(:last-child) {\n    margin-bottom: ","px;\n  }\n"])),(function(n){return 3*n.theme.spacing}),(function(n){return n.theme.primaryFontSize}),(function(n){return n.theme.primaryFontWeight}),(function(n){return 6*n.theme.spacing})),Zn=W.Z.span(b||(b=(0,I.Z)(["\n  display: flex;\n  align-items: center;\n  & svg {\n    width: 22px;\n    height: 22px;\n  }\n"]))),yn=function(){var n=(0,F.v9)(an.dy),t=sn(n),e=t.name,r=t.userAvatar,i=t.userName,o=t.email,a=t.dateOfBirth,c=t.phoneNumber,u=t.location;return(0,T.jsxs)(ln,{children:[(0,T.jsx)(fn,{children:e}),(0,T.jsxs)(mn,{children:[(0,T.jsx)(hn,{src:r,alt:"user avatar"}),(0,T.jsx)(pn,{children:i}),(0,T.jsx)(xn,{children:o})]}),(0,T.jsxs)(dn,{children:[(0,T.jsxs)(gn,{children:[(0,T.jsx)(Zn,{children:(0,T.jsx)(en.xHR,{})}),a]}),(0,T.jsxs)(gn,{children:[(0,T.jsx)(Zn,{children:(0,T.jsx)(rn.PES,{})}),c]}),(0,T.jsxs)(gn,{children:[(0,T.jsx)(Zn,{children:(0,T.jsx)(on.OxZ,{})}),u]})]})]})},jn=e(3634),vn=e(4044),bn=function(){var n=(0,F.I0)();return(0,w.useEffect)((function(){n((0,jn.yF)())}),[n]),(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(yn,{}),(0,T.jsx)(tn,{}),(0,T.jsx)(w.Suspense,{fallback:(0,T.jsx)(vn.Z,{}),children:(0,T.jsx)(z.j3,{})})]})}},1262:function(n,t,e){e.d(t,{r:function(){return a},D:function(){return o}});var r=e.p+"static/media/default-user-avatar.129549ba76517a278b4b.jpg",i=e.p+"static/media/default-contact-avatar.08a73d47add070689699.jpg",o=function(n){return n||r},a=function(n){return n||i}},4717:function(n,t,e){var r=e(8024),i=e(1262);t.Z=function(n){var t=n.id,e=n.name,o=n.number,a=n.avatar,c=n.role,u=void 0===c?r.Z.role:c,s=n.email,l=void 0===s?r.Z.email:s,h=n.chat,f=void 0===h?r.Z.chat:h,m=n.description,d=void 0===m?r.Z.description:m;return{userAvatar:(0,i.r)(a),name:e,id:t,role:u,number:o,email:l,chat:f,description:d}}}}]);
//# sourceMappingURL=916.f8f1107c.chunk.js.map