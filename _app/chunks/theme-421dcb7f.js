import{J as e,K as t,C as o}from"./vendor-3a42d728.js";const r=e(o({isDark:!1}),t(),"themeStore"),l=["dark","synthwave","halloween","aqua","forest","luxury","black","dracula"],n=s=>{s.includes(" ")&&(s=s.split(" ")[1].trim());const a=l.includes(s);console.log("Setting theme",s),r.set({theme:s,isDark:a})};export{n as s,r as t};
