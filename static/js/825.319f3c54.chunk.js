"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[825,947],{6825:function(n,t,e){e.r(t),e.d(t,{default:function(){return $}});var r,o,i,c,a,u,s,l,d,f,h,m,p=e(9439),x=e(7689),g=e(9434),y=e(2791),Z=e(8820),j=e(458),b=e(168),v=e(6088),C=v.Z.div(r||(r=(0,b.Z)(["\n  flex-grow: 1;\n"]))),w=v.Z.div(o||(o=(0,b.Z)(["\n  display: flex;\n  gap: ","px;\n  justify-content: flex-end;\n  margin-bottom: ",";\n"])),(function(n){return n.theme.primaryGap}),(function(n){return n.theme.spacing(28)})),F=e(1087),k=e(9251),S=e(1079),T=e(4044),V=v.Z.img(i||(i=(0,b.Z)(["\n  width: 112px;\n  margin: 0 auto ",";\n"])),(function(n){return n.theme.spacing(2)})),z=v.Z.div(c||(c=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(2)})),W=v.Z.p(a||(a=(0,b.Z)(["\n  color: ",";\n  font-family: Jua;\n  font-size: ","px;\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return n.theme.colors.primaryFontColor}),(function(n){return n.theme.fontSize.secondaryFontSize}),(function(n){return n.theme.fontWeight.otherFontWeight})),_=v.Z.p(u||(u=(0,b.Z)(["\n  color: ",";\n  font-family: Inter;\n  font-size: ","px;\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return n.theme.colors.secondaryFontColor}),(function(n){return n.theme.fontSize.primaryFontSize}),(function(n){return n.theme.fontWeight.primaryFontWeight})),P=v.Z.nav(s||(s=(0,b.Z)(["\n  padding: ",";\n  border-radius: ","px;\n  margin-top: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.spacing()}),(function(n){return n.theme.borderRadius.secondaryBorderRadius}),(function(n){return n.theme.spacing(20)}),(function(n){return n.theme.spacing(10)})),B=v.Z.ul(l||(l=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),I=v.Z.li(d||(d=(0,b.Z)(["\n  & a {\n    display: block;\n    padding: ",";\n    border-radius: ","px;\n    color: ",";\n    font-family: Jua;\n    font-size: ","px;\n    font-weight: ",";\n    text-decoration: none;\n    transition: background-color\n      ",";\n    &.active,\n    &:hover,\n    &:focus {\n      background-color: ",";\n    }\n  }\n"])),(function(n){var t=n.theme;return"".concat(t.spacing()," ").concat(t.spacing(5))}),(function(n){return n.theme.borderRadius.secondaryBorderRadius}),(function(n){return n.theme.colors.otherFontColor}),(function(n){return n.theme.fontSize.primaryFontSize}),(function(n){return n.theme.fontWeight.otherFontWeight}),(function(n){return n.theme.transitionDurationAndFunc}),(function(n){return n.theme.colors.otherLinkColor})),O=e(9046),U=e(3329),q=function(){var n=(0,k.d)(),t=(0,S.lC)(n),e=t.name,r=t.role,o=t.avatar,i=S.wX.getContactAvatar(o);return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(V,{src:i,alt:"".concat(e," photo")}),(0,U.jsxs)(z,{children:[(0,U.jsx)(W,{children:e}),(0,U.jsx)(_,{children:r})]}),(0,U.jsx)(P,{children:(0,U.jsxs)(B,{children:[(0,U.jsx)(I,{children:(0,U.jsx)(F.OL,{to:O.Z.contactPath,children:"Contact"})}),(0,U.jsx)(I,{children:(0,U.jsx)(F.OL,{to:O.Z.aboutPath,children:"About"})})]})}),(0,U.jsx)(y.Suspense,{fallback:(0,U.jsx)(T.Z,{}),children:(0,U.jsx)(x.j3,{})})]})},A=e(1413),G=e(5763),R=e(8014),E=e(1134),L=(e(5462),v.Z.p(f||(f=(0,b.Z)(["\n  color: ",";\n  font-family: Inter;\n  font-size: ","px;\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return n.theme.colors.primaryFontColor}),(function(n){return n.theme.fontSize.otherFontSize}),(function(n){return n.theme.fontWeight.secondaryFontWeight}))),N=v.Z.form(h||(h=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n"])),(function(n){return n.theme.primaryGap})),D=v.Z.div(m||(m=(0,b.Z)(["\n  display: flex;\n  gap: ",";\n  align-self: center;\n"])),(function(n){return n.theme.spacing(10)})),J=e(9705),K=e(2894),H=e(2032),Q=e(3634),X=e(2946),Y=function(n){var t=n.setEditContact,e=(0,g.v9)(X.xU),r=(0,g.I0)(),o=(0,x.UO)()[H.VW.dynamicParam],i=(0,k.d)(),c=(0,S.lC)(i),a=c.name,u=c.number,s=(0,E.cI)(),l=s.register,d=s.formState.errors,f=s.handleSubmit;return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(L,{children:"Contact editing"}),(0,U.jsxs)(N,{onSubmit:f((function(n){r((0,Q.Tk)({data:n,id:o})).unwrap().then((function(){S.Vy.successToast("Contact updated successfully")})).catch((function(){S.Vy.errorToast("Contact update failed")}))})),children:[(0,U.jsx)(K.Z,{defaultValue:a,settings:(0,A.Z)({},l("name",{required:!0})),type:"text",placeholder:"Name"}),d.name&&S.Vy.errorToast("Name is required"),(0,U.jsx)(K.Z,{defaultValue:u,settings:(0,A.Z)({},l("number",{required:!0})),type:"tel",placeholder:"Phone"}),d.number&&S.Vy.errorToast("Phone is required"),(0,U.jsxs)(D,{children:[(0,U.jsx)(J.Z,{disabled:e,btnType:H._o.accept,width:44,height:35,type:"submit",children:(0,U.jsx)(R.pkh,{})}),(0,U.jsx)(J.Z,{btnType:H._o.cancel,width:44,height:35,onBtnClick:t,children:(0,U.jsx)(G.Q7B,{})})]})]})]})},M=e(3947),$=function(){var n=(0,y.useState)(!1),t=(0,p.Z)(n,2),e=t[0],r=t[1],o=(0,g.v9)(X.xU),i=(0,x.UO)()[H.VW.dynamicParam],c=(0,k.m)(),a=function(){r((function(n){return!n}))};return(0,U.jsx)(U.Fragment,{children:(0,U.jsxs)(C,{children:[(0,U.jsxs)(w,{children:[!e&&(0,U.jsx)(J.Z,{disabled:o,btnType:H._o.delete,width:44,height:35,onBtnClick:function(){c(i)},children:(0,U.jsx)(Z.VPh,{})}),(0,U.jsx)(J.Z,{btnType:H._o.edit,width:44,height:35,onBtnClick:function(n){a(),(0,S.KY)(n.currentTarget)},children:(0,U.jsx)(j.FNg,{})})]}),e?(0,U.jsx)(M.default,{children:(0,U.jsx)(Y,{setEditContact:a})}):(0,U.jsx)(q,{})]})})}},3947:function(n,t,e){e.r(t),e.d(t,{default:function(){return a}});var r,o=e(168),i=e(6088).Z.div(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n"])),(function(n){return n.theme.primaryGap})),c=e(3329),a=function(n){var t=n.children;return(0,c.jsx)(i,{children:t})}},9251:function(n,t,e){e.d(t,{m:function(){return l},d:function(){return f}});var r=e(9439),o=e(2791),i=e(7689),c=e(9434),a=e(3634),u=e(1079),s=e(2032),l=function(){var n=(0,o.useState)(null),t=(0,r.Z)(n,2),e=t[0],l=t[1],d=(0,c.I0)(),f=(0,i.s0)(),h=(0,i.TH)().search,m="/".concat(s.VW.contactsPath+h);return(0,o.useEffect)((function(){e&&d((0,a.GK)(e)).unwrap().then((function(){f(m),u.Vy.successToast("Contact successfully removed")})).catch((function(){u.Vy.errorToast("Deleting a contact failed")}))}),[e,d,f,m]),l},d=e(2946),f=function(){var n=(0,i.UO)()[s.VW.dynamicParam],t=(0,c.v9)(d.Af);if(t.length)return t.find((function(t){return t.id===n}))}}}]);
//# sourceMappingURL=825.319f3c54.chunk.js.map