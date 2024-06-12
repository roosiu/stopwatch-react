export default function timeFormatter(time: number) { //TODO return format 00:00:00
    if (time === 0) return '00:00:0'
    if (time >= 10) return time.toString().slice(0, -1) + ":" + time.toString().slice(-1);
    if (time >= 600) return ":"+time.toString().slice(0, -1) + ":" + time.toString().slice(-1);
    return time.toString()
}