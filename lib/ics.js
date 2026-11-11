export function ics(b){const d=b.date.replace(/-/g,""),[h,m]=b.slot.split(":"),e=String(+h+1).padStart(2,"0");
return "data:text/calendar;charset=utf-8,"+encodeURIComponent(`BEGIN:VCALENDAR\r\nVERSION:2.0\r\nBEGIN:VEVENT\r\nUID:${b.id}@ustaz.kz\r\nDTSTART:${d}T${h}${m}00\r\nDTEND:${d}T${e}${m}00\r\nSUMMARY:Ustaz.kz - ${b.mentor}\r\nURL:${b.zoom}\r\nEND:VEVENT\r\nEND:VCALENDAR`)}
