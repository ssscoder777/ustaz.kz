export const load=()=>{try{return JSON.parse(localStorage.getItem("ub")||"[]")}catch(e){return[]}};
export const save=a=>{try{localStorage.setItem("ub",JSON.stringify(a))}catch(e){}};
