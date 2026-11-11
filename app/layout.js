import "./globals.css";
import {Inter} from "next/font/google";
import Providers from "@/components/Providers";
const inter=Inter({subsets:["latin","cyrillic"]});
export const metadata={title:"Ustaz.kz"};
export default function L({children}){return <html lang="ru"><body className={inter.className}><Providers>{children}</Providers></body></html>}
