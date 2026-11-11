"use client";
import {useEffect,useState} from "react";
import MentorCard from "@/components/MentorCard";
import {useT} from "@/components/Providers";
const CATS=["UX/UI","C++","Frontend","Python"];
export default function Cat(){const t=useT();const [cats,setCats]=useState([]);const [min,setMin]=useState(8000);const [max,setMax]=useState(25000);const [exp,setExp]=useState(0);const [sort,setSort]=useState("best");const [q,setQ]=useState("");const [ms,setMs]=useState(null);
useEffect(()=>{setQ(new URLSearchParams(location.search).get("q")||"")},[]);
useEffect(()=>{setMs(null);fetch(`/api/mentors?cat=${cats.join(",")}&min=${min}&max=${max}&exp=${exp}&sort=${sort}&q=${encodeURIComponent(q)}`).then(r=>r.json()).then(setMs).catch(()=>setMs([]))},[cats,min,max,exp,sort,q]);
const tog=c=>setCats(a=>a.includes(c)?a.filter(x=>x!==c):[...a,c]);
return <main className="wrap"><h1>{t("find")}</h1><input value={q} onChange={e=>setQ(e.target.value)} placeholder={t("ph")}/>
<div className="cols"><aside className="card"><h3>{t("filters")}</h3>{CATS.map(c=><label key={c}><input type="checkbox" checked={cats.includes(c)} onChange={()=>tog(c)}/> {c}</label>)}
<h4>{t("price")}</h4><input type="number" value={min} onChange={e=>setMin(+e.target.value)}/><input type="number" value={max} onChange={e=>setMax(+e.target.value)}/>
<h4>{t("expf")}</h4><select value={exp} onChange={e=>setExp(+e.target.value)}><option value={0}>{t("any")}</option>{[3,5,8].map(n=><option key={n} value={n}>{n}+ {t("years")}</option>)}</select>
<h4>{t("sortb")}</h4><select value={sort} onChange={e=>setSort(e.target.value)}><option value="best">{t("s1")}</option><option value="p1">{t("s2")}</option><option value="p2">{t("s3")}</option></select></aside>
<div>{ms===null?<p>{t("loading")}</p>:ms.length?<div className="grid">{ms.map(m=><MentorCard key={m.id} m={m}/>)}</div>:<p>{t("empty")}</p>}</div></div></main>}
