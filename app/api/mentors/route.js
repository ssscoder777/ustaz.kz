import {mentors} from "@/lib/data";
export async function GET(req){const p=new URL(req.url).searchParams;
const cats=(p.get("cat")||"").split(",").filter(Boolean);const min=+p.get("min")||0,max=+p.get("max")||1e9,exp=+p.get("exp")||0;const q=(p.get("q")||"").toLowerCase();
let r=mentors.filter(m=>(!cats.length||cats.includes(m.cat))&&m.price>=min&&m.price<=max&&m.exp>=exp&&(m.name+m.role+m.skills.join()).toLowerCase().includes(q));
const s=p.get("sort");r=[...r].sort((a,b)=>s=="p1"?a.price-b.price:s=="p2"?b.price-a.price:b.rating-a.rating);
if(p.get("top"))r=r.slice(0,3);
return Response.json(r)}
