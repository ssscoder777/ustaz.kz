"use client";
import Link from "next/link";
import {useT} from "./Providers";
export default function MentorCard({m}){const t=useT();
return <div className="card"><div className="row"><div className="av">{m.name.split(" ").map(w=>w[0]).join("")}</div><div><h3>{m.name}</h3><p className="mut" style={{margin:0}}>{m.role}</p></div></div>
<div className="row sp"><span>★ {m.rating} ({m.reviews})</span><b>{m.price.toLocaleString("ru-RU")} ₸ <small className="mut">/ {t("session")}</small></b></div>
<div>{m.skills.map(s=><span className="chip" key={s}>{s}</span>)}</div>
<Link className="btn" href={"/mentors/"+m.id}>{t("book")}</Link></div>}
