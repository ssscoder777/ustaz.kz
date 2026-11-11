"use client";
import {useEffect,useState} from "react";
import {useRouter} from "next/navigation";
import MentorCard from "@/components/MentorCard";
import {useT} from "@/components/Providers";
export default function Home(){const t=useT();const r=useRouter();const [q,setQ]=useState("");const [ms,setMs]=useState([]);
useEffect(()=>{fetch("/api/mentors?top=1").then(x=>x.json()).then(setMs).catch(()=>{})},[]);
return <main className="wrap"><section className="hero"><h1>{t("h1")}</h1><p className="mut">{t("sub")}</p>
<div className="row"><input value={q} onChange={e=>setQ(e.target.value)} placeholder={t("ph")}/><button className="btn" style={{marginTop:0}} onClick={()=>r.push("/mentors?q="+encodeURIComponent(q))}>{t("search")}</button></div></section>
<h2>{t("top")}</h2><div className="grid">{ms.map(m=><MentorCard key={m.id} m={m}/>)}</div></main>}
