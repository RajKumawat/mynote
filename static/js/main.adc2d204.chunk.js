(this.webpackJsonpmynote=this.webpackJsonpmynote||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(8),o=n.n(r),s=n(3),i=n(0);function u(){return Object(i.jsx)("nav",{children:Object(i.jsx)("div",{children:"Online Note Making App"})})}var j=a.a.createContext({currentNote:null,notes:[{id:1,text:"Homework, food, dance, study, sleep"},{id:2,text:"Take out trash"},{id:3,text:"Clean Your Room"}]});function d(){var t=Object(c.useContext)(j),e=(t.state,t.dispatch),n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],o=a[1],u=Object(c.useRef)();Object(c.useEffect)((function(){u.current.focus()}));return Object(i.jsx)("div",{className:"note-form",children:Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""===r.trim()?alert("Cannot add a blank note"):(e({type:"ADD_NOTE",payload:r}),o(""))},action:"",children:[Object(i.jsx)("input",{type:"text",ref:u,onChange:function(t){o(t.target.value)},value:r}),Object(i.jsx)("button",{children:"Add note"})]})})}function l(t){var e=t.note,n=Object(c.useContext)(j).dispatch;return Object(i.jsxs)("div",{className:"note",children:[Object(i.jsx)("p",{children:e.text}),Object(i.jsxs)("div",{className:"btn-container",children:[Object(i.jsx)("button",{onClick:function(){return n({type:"SET_CURRENT_NOTE",payload:e})},className:"edit",children:"Edit"}),Object(i.jsx)("button",{onClick:function(){return n({type:"DELETE_NOTE",payload:e.id})},className:"delete",children:"Delete"})]})]})}function b(){var t=Object(c.useContext)(j).state;return Object(i.jsx)("div",{className:"notes-container",children:t.notes.map((function(t,e){return Object(i.jsx)(l,{note:t},e)}))})}function O(){var t=Object(c.useContext)(j),e=t.state,n=t.dispatch,a=Object(c.useState)(e.currentNote.text),r=Object(s.a)(a,2),o=r[0],u=r[1],d=Object(c.useRef)();Object(c.useEffect)((function(){d.current.focus()}));return Object(i.jsx)("div",{className:"note-form",children:Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""===o.trim()?alert("Cannot add a blank note"):(n({type:"UPDATE_NOTE",payload:o}),u(""))},action:"",children:[Object(i.jsx)("textarea",{ref:d,onChange:function(t){u(t.target.value)},value:o,name:"",id:"",cols:"30",rows:"10"}),Object(i.jsx)("div",{style:{textAlign:"right"},children:Object(i.jsx)("button",{children:"Update note"})})]})})}var x=n(2),f=n(6),p=n(18);function h(t,e){switch(e.type){case"ADD_NOTE":var n={id:Object(p.a)(),text:e.payload},c=[].concat(Object(f.a)(t.notes),[n]);return Object(x.a)(Object(x.a)({},t),{},{notes:c});case"DELETE_NOTE":var a=t.notes.filter((function(t){return t.id!==e.payload}));return Object(x.a)(Object(x.a)({},t),{},{notes:a});case"SET_CURRENT_NOTE":return Object(x.a)(Object(x.a)({},t),{},{currentNote:e.payload});case"UPDATE_NOTE":var r=Object(x.a)(Object(x.a)({},t.currentNote),{},{text:e.payload}),o=t.notes.findIndex((function(e){return e.id===t.currentNote.id}));return{currentNote:null,notes:[].concat(Object(f.a)(t.notes.slice(0,o)),[r],Object(f.a)(t.notes.slice(o+1)))};default:return t}}var v=function(){var t=Object(c.useContext)(j),e=Object(c.useReducer)(h,t),n=Object(s.a)(e,2),a=n[0],r=n[1];return Object(i.jsxs)(j.Provider,{value:{state:a,dispatch:r},children:[Object(i.jsx)(u,{}),null===a.currentNote?Object(i.jsxs)("div",{children:[Object(i.jsx)(d,{}),Object(i.jsx)(b,{})]}):Object(i.jsx)(O,{})]})};n(14),n(15);o.a.render(Object(i.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.adc2d204.chunk.js.map