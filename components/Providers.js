"use client";
import {createContext,useContext,useState,useEffect} from "react";
import Link from "next/link";
import {dict} from "@/lib/i18n";
const C=createContext({lang:"ru"});
export const useT=()=>{const {lang}=useContext(C);return k=>dict[lang]?.[k]??k};
export default function Providers({children}){
const [lang,setLang]=useState("ru");
useEffect(()=>{try{const l=localStorage.getItem("lang");if(dict[l])setLang(l)}catch(e){}},[]);
const t=k=>dict[lang][k];
const pick=l=>{setLang(l);try{localStorage.setItem("lang",l)}catch(e){}document.documentElement.lang=l};
return <C.Provider value={{lang}}>
<header className="hdr"><div className="wrap row"><Link href="/" className="logo"><b>Ustaz</b>.kz</Link>
<nav><Link href="/mentors">{t("nav1")}</Link><Link href="/dashboard">{t("nav2")}</Link></nav>
<div className="lang">{["kk","ru","en"].map(l=><button key={l} className={l===lang?"on":""} onClick={()=>pick(l)}>{l.toUpperCase()}</button>)}</div></div></header>
{children}<footer className="wrap mut">{t("foot")}</footer></C.Provider>}
