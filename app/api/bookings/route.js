import {mentors} from "@/lib/data";
const db=(globalThis.__bookings??=[]);
export async function GET(req){const p=new URL(req.url).searchParams;return Response.json(db.filter(x=>x.mentorId==p.get("mentorId")&&x.date==p.get("date")).map(x=>x.slot))}
export async function POST(req){const b=await req.json();const m=mentors.find(x=>x.id==b.mentorId);
if(!m||!m.slots.includes(b.slot)||!["kaspi","card"].includes(b.method)||!/^\d{4}-\d\d-\d\d$/.test(b.date||"")||!/^\S+@\S+$/.test(b.email||""))return Response.json({error:"invalid"},{status:400});
if(db.some(x=>x.mentorId==m.id&&x.date==b.date&&x.slot==b.slot))return Response.json({error:"taken"},{status:409});
const r={id:"UZ-"+Math.floor(Math.random()*900000+100000),mentorId:m.id,mentor:m.name,date:b.date,slot:b.slot,method:b.method,price:m.price,zoom:"https://zoom.us/j/"+Math.floor(Math.random()*9e9+1e9)};
db.push(r);return Response.json(r,{status:201})}
export async function DELETE(req){const id=new URL(req.url).searchParams.get("id");const i=db.findIndex(x=>x.id==id);if(i>=0)db.splice(i,1);return Response.json({ok:true})}
