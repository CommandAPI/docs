import{_ as e,l as o,K as i,e as n,L as p}from"../app.DXKuOw9A.js";import{p as g}from"./radar-MK3ICKWK.DWxOv4In.js";import"./framework.DAr4A1sI.js";import"./commonjsHelpers.Cpj98o6Y.js";import"./theme.B2g1P5pO.js";import"./baseUniq.DkzOWWLc.js";import"./basePickBy.ByKD9Dl8.js";import"./clone.BChvvTIO.js";var m={parse:e(async r=>{const a=await g("info",r);o.debug(a)},"parse")},v={version:p.version},d=e(()=>v.version,"getVersion"),c={getVersion:d},l=e((r,a,s)=>{o.debug(`rendering info diagram
`+r);const t=i(a);n(t,100,400,!0),t.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${s}`)},"draw"),f={draw:l},E={parser:m,db:c,renderer:f};export{E as diagram};
