import {mentors} from "@/lib/data";
export async function GET(_,{params}){const m=mentors.find(x=>x.id==params.id);return m?Response.json(m):Response.json({error:"not found"},{status:404})}
