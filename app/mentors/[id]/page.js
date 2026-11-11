"use client";
import {useEffect,useState} from "react";
import {useParams} from "next/navigation";
import Link from "next/link";
import {useT} from "@/components/Providers";
import {reviews} from "@/lib/data";
import {load,save} from "@/lib/mine";
import {ics} from "@/lib/ics";
const days=[...Array(5)].map((_,i)=>new Date(Date.now()+864e5*(i+1)).toISOString().slice(0,10));
export default function P(){const t=useT();const {id}=useParams();const [m,setM]=useState(null);const [date,setDate]=useState(days[0]);const [slot,setSlot]=useState("");const [taken,setTaken]=useState([]);const [method,setMethod]=useState("kaspi");const [email,setEmail]=useState("");const [phone,setPhone]=useState("");const [msg,setMsg]=useState("");const [done,setDone]=useState(null);
useEffect(()=>{fetch("/api/mentors/"+id).then(r=>r.json()).then(setM)},[id]);
useEffect(()=>{setSlot("");fetch(`/api/bookings?mentorId=${id}&date=${date}`).then(r=>r.json()).then(setTaken).catch(()=>{})},[id,date,done]);
async function pay(){setMsg("");try{const r=await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mentorId:id,date,slot,method,email,phone})});const j=await r.json();if(r.ok){save([j,...load()]);setDone(j)}else setMsg(r.status==409?t("taken"):t("err"))}catch(e){setMsg(t("err"))}}
if(!m)return <main className="wrap"><p>{t("loading")}</p></main>;
if(done)return <main className="wrap"><div className="card"><h1>✓ {t("done")}</h1><p>{done.mentor} · {done.date} · {done.slot}</p><p className="mut">{done.id}</p><div className="row"><a className="btn" href={done.zoom} target="_blank" rel="noreferrer">Zoom</a><a className="btn out" href={ics(done)} download="ustaz-session.ics">{t("cal")}</a><Link className="btn out" href="/dashboard">{t("mine")}</Link></div></div></main>;
return <main className="wrap"><div className="row"><div className="av">{m.name.split(" ").map(w=>w[0]).join("")}</div><div><h1 style={{margin:0}}>{m.name}</h1><p className="mut" style={{margin:0}}>{m.role} · ★ {m.rating} ({m.reviews}) · {m.exp}+ {t("years")}</p></div></div>
<div className="cols" style={{gridTemplateColumns:"1fr 380px"}}><div><div className="card"><h3>{t("about")}</h3><p>{m.about}</p>{m.skills.map(s=><span className="chip" key={s}>{s}</span>)}</div>
<div className="card"><h3>{t("reviews")}</h3>{reviews.map(r=><p key={r.n}><b>{r.n}</b> ★ {r.r}<br/><span className="mut">{r.t}</span></p>)}</div></div>
<div className="card"><h3>{t("slot")}</h3><div>{days.map(d=><button key={d} className={"chip "+(d==date?"on":"")} onClick={()=>setDate(d)}>{d.slice(5)}</button>)}</div>
<div>{m.slots.map(s=><button key={s} disabled={taken.includes(s)} className={"chip "+(s==slot?"on":"")} onClick={()=>setSlot(s)}>{s}</button>)}</div>
<h3 style={{marginTop:16}}>{t("pay")}</h3>
<label><input type="radio" checked={method=="kaspi"} onChange={()=>setMethod("kaspi")}/> Kaspi Pay</label>
<label><input type="radio" checked={method=="card"} onChange={()=>setMethod("card")}/> Visa / Mastercard</label>
<input type="email" placeholder={t("email")} value={email} onChange={e=>setEmail(e.target.value)}/><input placeholder={t("phone")} value={phone} onChange={e=>setPhone(e.target.value)}/>
<p>{t("total")}: <b>{m.price.toLocaleString("ru-RU")} ₸</b></p>
<button className="btn" disabled={!slot||!email} onClick={pay}>{t("confirm")}</button>{msg&&<p className="err">{msg}</p>}</div></div></main>}
