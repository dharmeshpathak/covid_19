(this.webpackJsonpreact2=this.webpackJsonpreact2||[]).push([[0],{27:function(t,e,n){t.exports=n(56)},32:function(t,e,n){},50:function(t,e,n){},56:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(25),o=n.n(i),r=(n(32),n(11)),u=n(3),d=n(1),f=n(2),s=n.n(f);var l=function(t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{display:"flex",textAlign:"center",padding:"20px"}},c.a.createElement("div",{className:"card shadow-lg p-3 mb-5 bg-white rounded",style:{width:"18rem"}},c.a.createElement("ul",{className:"list-group list-group-flush"},c.a.createElement("li",{className:"list-group-item",style:{backgroundColor:"red",color:"white",fontFamily:"Helvetica"}},t.provinceState),c.a.createElement("li",{className:"list-group-item",style:{fontFamily:"Laila",color:"red"}},"Confirmed Cases- ",t.confirmed),c.a.createElement("li",{className:"list-group-item",style:{fontFamily:"Laila",color:"red"}},"Active Cases- ",t.active),c.a.createElement("li",{className:"list-group-item",style:{fontFamily:"Laila",color:"red"}},"Recovered Cases- ",t.recovered),c.a.createElement("li",{className:"list-group-item",style:{fontFamily:"Laila",color:"red"}},"Death Cases- ",t.deaths)))))},h=function(){var t=Object(a.useState)([]),e=Object(d.a)(t,2),n=e[0],i=e[1],o=Object(a.useState)([]),r=Object(d.a)(o,2),u=r[0],f=r[1],h=Object(a.useState)([]),m=Object(d.a)(h,2),b=m[0],p=m[1],O=Object(a.useState)([]),j=Object(d.a)(O,2),g=j[0],v=j[1],E=Object(a.useState)([]),y=Object(d.a)(E,2),S=y[0],x=y[1],N=Object(a.useState)([]),F=Object(d.a)(N,2),w=F[0],k=F[1],C=Object(a.useState)([]),L=Object(d.a)(C,2),A=L[0],T=L[1],J=Object(a.useState)([]),z=Object(d.a)(J,2),W=z[0],B=z[1],D=Object(a.useState)([]),I=Object(d.a)(D,2),H=I[0],G=I[1],M=Object(a.useState)([]),R=Object(d.a)(M,2),q=R[0],K=R[1],P=Object(a.useState)([]),Q=Object(d.a)(P,2),U=Q[0],V=Q[1],X=Object(a.useState)([]),Y=Object(d.a)(X,2),Z=Y[0],$=Y[1],_=Object(a.useState)([]),tt=Object(d.a)(_,2),et=tt[0],nt=tt[1],at=Object(a.useState)([]),ct=Object(d.a)(at,2),it=ct[0],ot=ct[1],rt=Object(a.useState)([]),ut=Object(d.a)(rt,2),dt=ut[0],ft=ut[1],st=Object(a.useState)([]),lt=Object(d.a)(st,2),ht=lt[0],mt=lt[1],bt=Object(a.useState)([]),pt=Object(d.a)(bt,2),Ot=pt[0],jt=pt[1],gt=Object(a.useState)([]),vt=Object(d.a)(gt,2),Et=vt[0],yt=vt[1],St=Object(a.useState)([]),xt=Object(d.a)(St,2),Nt=xt[0],Ft=xt[1],wt=Object(a.useState)([]),kt=Object(d.a)(wt,2),Ct=kt[0],Lt=kt[1],At=Object(a.useState)([]),Tt=Object(d.a)(At,2),Jt=Tt[0],zt=Tt[1],Wt=Object(a.useState)([]),Bt=Object(d.a)(Wt,2),Dt=Bt[0],It=Bt[1],Ht=Object(a.useState)([]),Gt=Object(d.a)(Ht,2),Mt=Gt[0],Rt=Gt[1],qt=Object(a.useState)([]),Kt=Object(d.a)(qt,2),Pt=Kt[0],Qt=Kt[1],Ut=Object(a.useState)([]),Vt=Object(d.a)(Ut,2),Xt=Vt[0],Yt=Vt[1],Zt=Object(a.useState)([]),$t=Object(d.a)(Zt,2),_t=$t[0],te=$t[1],ee=Object(a.useState)([]),ne=Object(d.a)(ee,2),ae=ne[0],ce=ne[1],ie=Object(a.useState)([]),oe=Object(d.a)(ie,2),re=oe[0],ue=oe[1],de=Object(a.useState)([]),fe=Object(d.a)(de,2),se=fe[0],le=fe[1],he=Object(a.useState)([]),me=Object(d.a)(he,2),be=me[0],pe=me[1],Oe=Object(a.useState)([]),je=Object(d.a)(Oe,2),ge=je[0],ve=je[1],Ee=Object(a.useState)([]),ye=Object(d.a)(Ee,2),Se=ye[0],xe=ye[1],Ne=Object(a.useState)([]),Fe=Object(d.a)(Ne,2),we=Fe[0],ke=Fe[1],Ce=Object(a.useState)([]),Le=Object(d.a)(Ce,2),Ae=Le[0],Te=Le[1],Je=Object(a.useState)([]),ze=Object(d.a)(Je,2),We=ze[0],Be=ze[1],De=Object(a.useState)([]),Ie=Object(d.a)(De,2),He=Ie[0],Ge=Ie[1];Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return i(t.data[0])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return f(t.data[1])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return p(t.data[2])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return v(t.data[3])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return x(t.data[4])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return k(t.data[5])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return T(t.data[6])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return B(t.data[7])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return G(t.data[8])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return K(t.data[9])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return V(t.data[10])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return $(t.data[11])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return nt(t.data[12])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return ot(t.data[13])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return ft(t.data[14])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return mt(t.data[15])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return jt(t.data[16])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return yt(t.data[17])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return Ft(t.data[18])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return Lt(t.data[19])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return zt(t.data[20])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return It(t.data[21])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return Rt(t.data[22])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return Qt(t.data[23])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return Yt(t.data[24])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return te(t.data[25])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return ce(t.data[26])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return ue(t.data[27])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return le(t.data[28])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return pe(t.data[29])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return ve(t.data[30])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return xe(t.data[31])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return xe(t.data[31])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return ke(t.data[32])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return Te(t.data[33])})).catch((function(t){return Ge(t)}))}),[]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/india/confirmed").then((function(t){return Be(t.data[34])})).catch((function(t){return Ge(t)}))}),[]);var Me=[n,u,b,g,S,w,A,W,H,q,U,Z,et,it,dt,ht,Ot,Et,Nt,Ct,Jt,Dt,Mt,Pt,Xt,_t,ae,re,se,be,ge,Se,we,Ae,We];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container d-flex justify-content-center  flex-wrap align-content-xxl-center my-5"},Me.map((function(t,e){return c.a.createElement(l,{key:e,provinceState:t.provinceState,active:t.active,confirmed:t.confirmed,recovered:t.recovered,deaths:t.deaths})})),He))};var m=function(){var t=Object(a.useState)([]),e=Object(d.a)(t,2),n=e[0],i=e[1],o=Object(a.useState)([]),r=Object(d.a)(o,2),u=r[0],f=r[1],l=Object(a.useState)([]),h=Object(d.a)(l,2),m=h[0],b=h[1],p=Object(a.useState)(!1),O=Object(d.a)(p,2),j=O[0],g=O[1],v=Object(a.useState)("india"),E=Object(d.a)(v,2),y=E[0],S=E[1],x=Object(a.useState)("india"),N=Object(d.a)(x,2),F=N[0],w=N[1];return Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/".concat(F)).then((function(t){i(t.data.confirmed)})).catch((function(t){g(j)}))}),[j,F]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/".concat(F)).then((function(t){f(t.data.recovered)})).catch((function(t){g(j)}))}),[j,F]),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/countries/".concat(F)).then((function(t){b(t.data.deaths)})).catch((function(t){g(j)}))}),[j,F]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"my-5",style:{textAlign:"center",color:"grey",marginBottom:"100px"}},c.a.createElement("h1",{style:{textAlign:"center",color:"grey",marginBottom:"100px",fontFamily:"Laila",fontWeight:"bold"}},"Get Latest updates about your country covid cases"),c.a.createElement("input",{placeholder:"Enter your country name",value:y,name:"input",onChange:function(t){return S(t.target.value)},style:{borderStyle:"solid",borderColor:"grey",padding:"2px",paddingLeft:"5px",color:"red"}}),c.a.createElement("button",{onClick:function(){null===y&&w("India"),w(y)},style:{borderStyle:"solid",borderColor:"lightgrey",padding:"2px",color:"black",fontFamily:"calibiri",texTtransform:"capitalize"}},"Show Country Data"),c.a.createElement("p",{style:{marginTop:"50px",fontSize:"20px",fontFamily:"Laila",fontWeight:"bold"}},"Total active cases in ",F,"-",JSON.stringify(n.value)),c.a.createElement("p",{style:{marginTop:"50px",fontSize:"20px",fontFamily:"Laila",fontWeight:"bold"}},"Total recovered cases in ",F,"-",JSON.stringify(u.value)),c.a.createElement("p",{style:{marginTop:"50px",fontSize:"20px",fontFamily:"Laila",fontWeight:"bold"}},"Total Death cases in ",F,"-",JSON.stringify(m.value))))};var b=function(){var t=Object(a.useState)([]),e=Object(d.a)(t,2),n=e[0],i=e[1],o=Object(a.useState)([]),r=Object(d.a)(o,2),u=r[0],f=r[1],l=Object(a.useState)([]),h=Object(d.a)(l,2),m=h[0],b=h[1],p=Object(a.useState)(!1),O=Object(d.a)(p,2),j=O[0],g=O[1];return Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/").then((function(t){i(t.data.confirmed)})).catch((function(t){g(j)}))})),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/").then((function(t){f(t.data.recovered)})).catch((function(t){g(j)}))})),Object(a.useEffect)((function(){s.a.get("https://covid19.mathdro.id/api/").then((function(t){b(t.data.deaths)})).catch((function(t){g(j)}))})),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"my-5 py-5",style:{backgroundColor:"lightgrey",backgroundBlendMode:"overlay",height:"100%",width:"100%"}},c.a.createElement("h1",{style:{textAlign:"center",color:"red",fontFamily:"Laila"}},"Total Number of cases in the world -  "),c.a.createElement("p",{style:{textAlign:"center",fontSize:"20px",color:"grey",fontWeight:"bold",fontFamily:"Laila",padding:"5px",boxShadow:"2px"}},"Total active cases-",JSON.stringify(n.value)),c.a.createElement("p",{style:{textAlign:"center",fontSize:"20px",color:"grey",fontWeight:"bold",fontFamily:"Laila",padding:"5px",boxShadow:"2px"}},"Total recovered cases-",JSON.stringify(u.value)),c.a.createElement("p",{style:{textAlign:"center",fontSize:"20px",color:"grey",fontWeight:"bold",fontFamily:"Laila",padding:"5px",boxShadow:"2px"}},"Total Death cases-",JSON.stringify(m.value))))};n(50);var p=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.a,null,c.a.createElement("div",{className:"container  "},c.a.createElement("div",{className:" row navbar navbar-expand-lg navbar-light  link  "},c.a.createElement("div",{className:" col-lg-12 col-xl-12 col-md-12 col-sm-6 container-fluid link flex-column"},c.a.createElement("ul",{style:{textAlign:"center"},className:"navbar-nav"},c.a.createElement("li",{className:"nav-item",style:{textAlign:"center"}},c.a.createElement(r.b,{className:"nav-link active ",to:"/home",exact:!0,activeStyle:{color:"red"}},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{className:"nav-link active ",to:"/country",style:{textAlign:"center"},exact:!0,activeStyle:{color:"red"}},"Check Country wise ")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{className:"nav-link active ",to:"/indianstates",exact:!0,activeStyle:{color:"red"}},"Indian States "))))),c.a.createElement(u.c,null,c.a.createElement(u.a,{exact:!0,path:"/home",component:b}),c.a.createElement(u.a,{exact:!0,path:"/country",component:m}),c.a.createElement(u.a,{exact:!0,path:"/indianstates",component:h})))))},O=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,null))};o.a.render(c.a.createElement(O,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.c0a99b82.chunk.js.map