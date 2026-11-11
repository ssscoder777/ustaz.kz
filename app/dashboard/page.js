"use client";
import {useEffect,useState} from "react";
import Link from "next/link";
import {useT} from "@/components/Providers";
import {load,save} from "@/lib/mine";
import {ics} from "@/lib/ics";
export default function D(){const t=useT();const [b,setB]=useState(null);
useEffect(()=>{setB(load())},[]);
async function cancel(x){await fetch("/api/bookings?id="+x.id,{method:"DELETE"}).catch(()=>{});const n=load().filter(y=>y.id!=x.id);save(n);setB(n)}
return <main className="wrap"><h1>{t("mine")}</h1>{b===null?<p>{t("loading")}</p>:b.length?b.map(x=><div className="card" key={x.id}><div className="row sp"><h3>{x.mentor}</h3><b>{x.price.toLocaleString("ru-RU")} ₸</b></div><p className="mut">{x.date} · {x.slot} · {x.id}</p><div className="row"><a className="btn" href={x.zoom} target="_blank" rel="noreferrer">Zoom</a><a className="btn out" href={ics(x)} download="ustaz-session.ics">{t("cal")}</a><button className="btn out" onClick={()=>cancel(x)}>{t("cancel")}</button></div></div>):<div className="card"><p>{t("none")}</p><Link className="btn" href="/mentors">{t("nav1")}</Link></div>}</main>}
