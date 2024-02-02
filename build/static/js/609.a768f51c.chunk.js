"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[609],{4609:(e,n,t)=>{t.r(n),t.d(n,{default:()=>J});var a=t(1057),s=t(9603),i=t(4720),r=t(1141),l=t(2791),d=t(3950),m=t(4569),o=t.n(m);const h=e=>{const[n,t]=(0,l.useState)({}),[a,s]=(0,l.useState)({}),[i,r]=(0,l.useState)(!1);(0,l.useEffect)((()=>{0===Object.keys(a).length&&i&&(t(""),d.ZP.success({message:"Success",description:"Your message has been sent!"}))}),[a,i]);return{handleChange:e=>{e.persist(),t((n=>({...n,[e.target.name]:e.target.value}))),s((n=>({...n,[e.target.name]:""})))},handleSubmit:t=>{t.preventDefault(),s(e(n));3===Object.keys(n).length&&o().post("",{...n}).then((()=>{r(!0)}))},values:n,errors:a}};function c(e){let n={};return e.name||(n.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(n.email="Email address is invalid"):n.email="Email address is required",e.message||(n.message="Message is required"),n}var p,x,g,u=t(5224),Z=t(168),j=t(1191);const v=(0,j.ZP)("p")(p||(p=(0,Z.Z)(["\n  margin-top: 1.5rem;\n"]))),b=(0,j.ZP)("div")(x||(x=(0,Z.Z)(["\n  position: relative;\n  max-width: 700px;\n"]))),y=(0,j.ZP)("div")(g||(g=(0,Z.Z)(["\n  border-radius: 3rem;\n  max-width: 400px;\n"])));var f=t(184);const w=(0,i.Z)()((e=>{let{title:n,content:t,t:a}=e;return(0,f.jsxs)(b,{children:[(0,f.jsx)("h6",{children:a(n)}),(0,f.jsx)(y,{children:(0,f.jsx)(v,{children:a(t)})})]})}));var P,C;const S=(0,j.ZP)("div")(P||(P=(0,Z.Z)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n"]))),k=(0,j.ZP)("input")(C||(C=(0,Z.Z)(["\n  font-size: 0.875rem;\n"])));var z,E,M;const Y=(0,j.ZP)("div")(z||(z=(0,Z.Z)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n  margin-bottom: -0.625rem;\n"]))),q=(0,j.ZP)("textarea")(E||(E=(0,Z.Z)(["\n  resize: none;\n  font-size: 0.875rem;\n  height: 185px;\n"]))),F=(0,j.ZP)("label")(M||(M=(0,Z.Z)(["\n  display: block;\n  padding-bottom: 10px;\n  text-transform: capitalize;\n"]))),N=(0,i.Z)()((e=>{let{name:n,placeholder:t,onChange:a,t:s}=e;return(0,f.jsxs)(S,{children:[(0,f.jsx)(F,{htmlFor:n,children:s(n)}),(0,f.jsx)(k,{placeholder:s(t),name:n,id:n,onChange:a})]})})),O=(0,i.Z)()((e=>{let{name:n,placeholder:t,onChange:a,t:s}=e;return(0,f.jsxs)(Y,{children:[(0,f.jsx)(F,{htmlFor:n,children:s(n)}),(0,f.jsx)(q,{placeholder:s(t),id:n,name:n,onChange:a})]})}));var _,D,G,L;const A=(0,j.ZP)("div")(_||(_=(0,Z.Z)(["\n  padding: 5rem 0;\n\n  @media only screen and (max-width: 1024px) {\n    padding: 3rem 0;\n  }\n"]))),B=(0,j.ZP)("form")(D||(D=(0,Z.Z)(["\n  width: 100%;\n  max-width: 520px;\n\n  @media only screen and (max-width: 1045px) {\n    max-width: 100%;\n    margin-top: 2rem;\n  }\n"]))),H=(0,j.ZP)("span")(G||(G=(0,Z.Z)(["\n  display: block;\n  font-weight: 600;\n  color: rgb(255, 130, 92);\n  height: 0.775rem;\n  padding: 0 0.675rem;\n"]))),I=(0,j.ZP)("div")(L||(L=(0,Z.Z)(["\n  text-align: end;\n  position: relative;\n\n  @media only screen and (max-width: 414px) {\n    padding-top: 0.75rem;\n  }\n"]))),J=(0,i.Z)()((e=>{let{title:n,content:t,id:i,t:l}=e;const{values:d,errors:m,handleChange:o,handleSubmit:p}=h(c),x=e=>{let{type:n}=e;const t=m[n];return(0,f.jsx)(r.LG,{direction:"left",children:(0,f.jsx)(H,{erros:m[n],children:t})})};return(0,f.jsx)(A,{id:i,children:(0,f.jsxs)(a.Z,{justify:"space-between",align:"middle",children:[(0,f.jsx)(s.Z,{lg:12,md:11,sm:24,xs:24,children:(0,f.jsx)(r.Mi,{direction:"left",children:(0,f.jsx)(w,{title:n,content:t})})}),(0,f.jsx)(s.Z,{lg:12,md:12,sm:24,xs:24,children:(0,f.jsx)(r.Mi,{direction:"right",children:(0,f.jsxs)(B,{autoComplete:"off",onSubmit:p,children:[(0,f.jsxs)(s.Z,{span:24,children:[(0,f.jsx)(N,{type:"text",name:"name",placeholder:"Your Name",value:d.name||"",onChange:o}),(0,f.jsx)(x,{type:"name"})]}),(0,f.jsxs)(s.Z,{span:24,children:[(0,f.jsx)(N,{type:"text",name:"email",placeholder:"Your Email",value:d.email||"",onChange:o}),(0,f.jsx)(x,{type:"email"})]}),(0,f.jsxs)(s.Z,{span:24,children:[(0,f.jsx)(O,{placeholder:"Your Message",value:d.message||"",name:"message",onChange:o}),(0,f.jsx)(x,{type:"message"})]}),(0,f.jsx)(I,{children:(0,f.jsx)(u.z,{name:"submit",children:l("Submit")})})]})})})]})})}))}}]);
//# sourceMappingURL=609.a768f51c.chunk.js.map