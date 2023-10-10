"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[825,947],{6825:function(n,t,e){e.r(t),e.d(t,{default:function(){return dn}});var r,i,a,c,o,u,s,l,d,f,h,p,x=e(9439),m=e(7689),g=e(9434),Z=e(2791),j=e(8820),y=e(458),b=e(168),v=e(6088),C=v.Z.div(r||(r=(0,b.Z)(["\n  flex-grow: 1;\n"]))),T=v.Z.div(i||(i=(0,b.Z)(["\n  display: flex;\n  gap: ","px;\n  justify-content: flex-end;\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.primaryGap}),(function(n){return 28*n.theme.spacing})),k=e(1087),w=e(9251),F=e(6454),P=e(4044),S=v.Z.img(a||(a=(0,b.Z)(["\n  width: 112px;\n  margin: 0 auto ","px;\n"])),(function(n){return 2*n.theme.spacing})),_=v.Z.div(c||(c=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n"])),(function(n){return 2*n.theme.spacing})),z=v.Z.p(o||(o=(0,b.Z)(["\n  color: ",";\n  font-family: Jua;\n  font-size: ","px;\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return n.theme.primaryFontColor}),(function(n){return n.theme.secondaryFontSize}),(function(n){return n.theme.otherFontWeight})),B=v.Z.p(u||(u=(0,b.Z)(["\n  color: #7c7c7c;\n  font-family: Inter;\n  font-size: ","px;\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return n.theme.primaryFontSize}),(function(n){return n.theme.primaryFontWeight})),I=v.Z.nav(s||(s=(0,b.Z)(["\n  padding: ","px;\n  border-radius: 10px;\n  background: #eee;\n  margin-top: ","px;\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.spacing}),(function(n){return 20*n.theme.spacing}),(function(n){return 10*n.theme.spacing})),O=v.Z.ul(l||(l=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),U=v.Z.li(d||(d=(0,b.Z)(["\n  & a {\n    display: block;\n    padding: ","px\n      ","px;\n    border-radius: 10px;\n    color: #555;\n    font-family: Jua;\n    font-size: ","px;\n    font-weight: ",";\n    text-decoration: none;\n    transition: background ",";\n    &.active,\n    &:hover,\n    &:focus {\n      background: #44de6f;\n    }\n  }\n"])),(function(n){return n.theme.spacing}),(function(n){return 5*n.theme.spacing}),(function(n){return n.theme.primaryFontSize}),(function(n){return n.theme.otherFontWeight}),(function(n){return n.theme.transitionDurationAndFunc})),A=e(3329),q=w.Z.useTargetContact,D=F.Z.getAvatar,G=F.Z.getContactInfo,W=function(){var n=q(),t=G(n),e=t.name,r=t.role,i=t.avatar,a=D.getContactAvatar(i);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(S,{src:a,alt:"".concat(e," photo")}),(0,A.jsxs)(_,{children:[(0,A.jsx)(z,{children:e}),(0,A.jsx)(B,{children:r})]}),(0,A.jsx)(I,{children:(0,A.jsxs)(O,{children:[(0,A.jsx)(U,{children:(0,A.jsx)(k.OL,{to:"contact",children:"Contact"})}),(0,A.jsx)(U,{children:(0,A.jsx)(k.OL,{to:"about",children:"About"})})]})}),(0,A.jsx)(Z.Suspense,{fallback:(0,A.jsx)(P.Z,{}),children:(0,A.jsx)(m.j3,{})})]})},E=e(1413),N=e(5763),V=e(8014),J=e(1134),L=(e(5462),v.Z.p(f||(f=(0,b.Z)(["\n  color: ",";\n  font-family: Inter;\n  font-size: 20px;\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return n.theme.primaryFontColor}),(function(n){return n.theme.secondaryFontWeight}))),H=v.Z.form(h||(h=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n"])),(function(n){return n.theme.primaryGap})),K=v.Z.div(p||(p=(0,b.Z)(["\n  display: flex;\n  gap: ","px;\n  align-self: center;\n"])),(function(n){return 10*n.theme.spacing})),Q=e(9705),M=e(2894),R=e(3634),X=e(2946),Y=e(3870),$=F.Z.getContactInfo,nn=F.Z.toasts,tn=Y.Z.pagesPath,en=Y.Z.iconBtnType,rn=w.Z.useTargetContact,an=function(n){var t=n.setEditContact,e=(0,g.v9)(X.xU),r=(0,g.I0)(),i=(0,m.UO)()[tn.dynamicParam],a=rn(),c=$(a),o=c.name,u=c.number,s=(0,J.cI)(),l=s.register,d=s.formState.errors,f=s.handleSubmit;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(L,{children:"Contact editing"}),(0,A.jsxs)(H,{onSubmit:f((function(n){r((0,R.Tk)({data:n,id:i})).unwrap().then((function(){nn.successToast("Contact updated successfully")})).catch((function(){nn.errorToast("Contact update failed")}))})),children:[(0,A.jsx)(M.Z,{defaultValue:o,settings:(0,E.Z)({},l("name",{required:!0})),type:"text",placeholder:"Name"}),d.name&&nn.errorToast("Name is required"),(0,A.jsx)(M.Z,{defaultValue:u,settings:(0,E.Z)({},l("number",{required:!0})),type:"tel",placeholder:"Phone"}),d.number&&nn.errorToast("Phone is required"),(0,A.jsxs)(K,{children:[(0,A.jsx)(Q.Z,{disabled:e,btnType:en.accept,width:44,height:35,type:"submit",children:(0,A.jsx)(V.pkh,{})}),(0,A.jsx)(Q.Z,{btnType:en.cancel,width:44,height:35,onBtnClick:t,children:(0,A.jsx)(N.Q7B,{})})]})]})]})},cn=e(3947),on=F.Z.makeBlur,un=Y.Z.iconBtnType,sn=Y.Z.pagesPath,ln=w.Z.useDeleteContact,dn=function(){var n=(0,Z.useState)(!1),t=(0,x.Z)(n,2),e=t[0],r=t[1],i=(0,g.v9)(X.xU),a=(0,m.UO)()[sn.dynamicParam],c=(0,m.TH)().search,o="/".concat(sn.contactsPath+c),u=ln(o),s=function(){r((function(n){return!n}))};return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(C,{children:[(0,A.jsxs)(T,{children:[!e&&(0,A.jsx)(Q.Z,{disabled:i,btnType:un.delete,width:44,height:35,onBtnClick:function(){u(a)},children:(0,A.jsx)(j.VPh,{})}),(0,A.jsx)(Q.Z,{btnType:un.edit,width:44,height:35,onBtnClick:function(n){s(),on(n.currentTarget)},children:(0,A.jsx)(y.FNg,{})})]}),e?(0,A.jsx)(cn.default,{children:(0,A.jsx)(an,{setEditContact:s})}):(0,A.jsx)(W,{})]})})}},3947:function(n,t,e){e.r(t),e.d(t,{default:function(){return o}});var r,i=e(168),a=e(6088).Z.div(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n"])),(function(n){return n.theme.primaryGap})),c=e(3329),o=function(n){var t=n.children;return(0,c.jsx)(a,{children:t})}},9251:function(n,t,e){e.d(t,{Z:function(){return x}});var r=e(9439),i=e(7689),a=e(9434),c=e(3634),o=e(6454),u=e(3870),s=e(2791),l=o.Z.toasts,d=u.Z.pagesPath,f=function(n){var t=(0,s.useState)(null),e=(0,r.Z)(t,2),o=e[0],u=e[1],f=(0,i.UO)()[d.dynamicParam],h=(0,a.I0)(),p=(0,i.s0)();return(0,s.useEffect)((function(){o&&h((0,c.GK)(o)).unwrap().then((function(){l.successToast("Contact successfully removed"),n?p(n):f===o&&p("/".concat(d.contactsPath))})).catch((function(){l.errorToast("Deleting a contact failed")}))}),[o,h,p,n,f]),u},h=e(2946),p=u.Z.pagesPath,x={useDeleteContact:f,useTargetContact:function(){var n=(0,i.UO)()[p.dynamicParam],t=(0,a.v9)(h.Af);if(t.length)return t.find((function(t){return t.id===n}))}}}}]);
//# sourceMappingURL=825.3fab3645.chunk.js.map