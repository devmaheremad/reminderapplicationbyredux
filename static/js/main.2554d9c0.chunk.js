(this.webpackJsonpreminderapplication=this.webpackJsonpreminderapplication||[]).push([[0],{145:function(e,t,n){"use strict";n.r(t);var r=n(8),o=n(0),a=n(16),i=n.n(a),c=n(30),s=n(35),d=n(62),l=n(63),m=n(71),h=n(69),j=(n(81),n(150)),u=n(151),p=n(65),b=n(152),f=n(153),x="ADD_REMINDER",O="DELETE_REMINDER",D="CLEAR_REMINDERS",T=n(64),w=n.n(T),y=n(66),R=n.n(y),g=(n(83),n.p+"static/media/reminders-icon.1c7af7b0.png"),k=(n(84),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={whatToDo:"",timeToDo:""},e.renderReminder=function(){return e.props.reminders.map((function(t,n){return Object(r.jsx)(j.a,{className:"reminder-note text-dark text-left p-2 my-3 rounded overflow-hidden",children:Object(r.jsxs)(u.a,{children:[Object(r.jsxs)(p.a,{xs:10,md:10,className:"info float-left",children:[Object(r.jsx)("h4",{className:"what-to-do",children:t.whatToDo}),Object(r.jsx)("p",{className:"time-to-do",children:w()(new Date(t.timeToDo)).fromNow()})]}),Object(r.jsx)(p.a,{xs:2,md:2,className:"delete float-left text-right",children:Object(r.jsx)("span",{className:"btn btn-danger rounded-circle",onClick:function(){e.props.deleteReminder(n)},children:"\xd7"})})]})},n)}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsxs)("section",{className:"reminder rounded px-3 py-3 text-center text-white",children:[Object(r.jsx)("img",{src:g,alt:"logo-reminder"}),Object(r.jsx)("h2",{children:"What Shoud You Do?"}),Object(r.jsx)(b.a.Group,{controlId:"forTitle",children:Object(r.jsx)(b.a.Control,{type:"text",placeholder:"Type What are you planning to do?",onChange:function(t){e.setState({whatToDo:t.target.value})},value:this.state.whatToDo})}),Object(r.jsx)(b.a.Group,{controlId:"fordate",children:Object(r.jsx)(R.a,{className:"for-time",placeholderText:"Enter Date",selected:this.state.timeToDo,onChange:function(t){e.setState({timeToDo:t})},showTimeSelect:!0,timeFormat:"p",dateFormat:"Pp",value:this.state.timeToDo})}),Object(r.jsx)(f.a,{className:"my-2",variant:"primary",size:"lg",block:!0,onClick:function(){e.props.addReminder(e.state.whatToDo,e.state.timeToDo),e.setState({whatToDo:"",timeToDo:""})},children:"Add Reminder"}),Object(r.jsx)("div",{className:"reminders",children:this.renderReminder()}),Object(r.jsx)(f.a,{variant:"danger",size:"lg",block:!0,onClick:function(){e.props.clearReminder()},children:"Clear Reminders"})]})}}]),n}(o.Component)),v=Object(s.b)((function(e){return{reminders:e}}),{addReminder:function(e,t){return{type:x,whatToDo:e,timeToDo:t}},deleteReminder:function(e){return{type:O,index:e}},clearReminder:function(){return{type:D}}})(k),N=n(70),E=n(29),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=null;return e=Object(E.read_cookie)("reminders"),t.type===x?(n=[].concat(Object(N.a)(e),[{whatToDo:t.whatToDo,timeToDo:t.timeToDo}]),Object(E.bake_cookie)("reminders",n),n):t.type===O?(n=e.filter((function(e,n){return n!==t.index})),Object(E.bake_cookie)("reminders",n),n):t.type===D?(n=[],Object(E.bake_cookie)("reminders",n),n):e},_=Object(c.b)(C);i.a.render(Object(r.jsx)(s.a,{store:_,children:Object(r.jsx)(v,{})}),document.getElementById("root"))},84:function(e,t,n){}},[[145,1,2]]]);
//# sourceMappingURL=main.2554d9c0.chunk.js.map