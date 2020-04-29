export default function () {
    const arr = [new Promise(()=>{}), new Promise(()=>{})]
    arr.map((v, i) => {
        console.log(v);
    })
}