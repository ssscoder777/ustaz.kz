const S=["10:00","11:30","14:00","16:30","18:00","19:30"];
const A=(id,name,role,cat,price,rating,reviews,exp,skills,about)=>({id,name,role,cat,price,rating,reviews,exp,skills,about,slots:S});
export const mentors=[
A(1,"Anel Sergazinova","Senior UX/UI Designer","UX/UI",18000,4.98,126,9,["Figma","UX Research","Design Systems"],"I help designers move from making screens to solving real product problems. 9 years in fintech and marketplace products."),
A(2,"Daniyar Akhmetov","Lead C++ Developer","C++",22000,5.0,84,8,["C++","Algorithms","System Design"],"Lead developer focused on high-load systems. I prepare people for algorithm interviews and system design rounds."),
A(3,"Aisultan Bekov","Fullstack Engineer","Frontend",15000,4.92,68,5,["React","Next.js","Node.js"],"Fullstack engineer building production web apps. I teach React, Next.js and how to ship real projects."),
A(4,"Alina Nurpeisova","Python & Data Lead","Python",17500,4.96,51,6,["Python","Data Science","ML"],"Data lead helping juniors move into Python, analytics and machine learning roles.")];
export const reviews=[{n:"Aruzhan K.",r:5,t:"Specific, actionable feedback. It helped me reframe my portfolio story in one session."},{n:"Timur M.",r:5,t:"Clear, kind and very practical. I left with a concrete plan."}];
