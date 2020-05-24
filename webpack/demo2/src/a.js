export default () => {
    const a = 'AAA';
    let b = "BBB";
    let [c, d] = ['CCC', 'DDD'];
    console.log([a, b, c, d]);
    const arr = ['a', 'b', 'c', 'd'];
    for (let item of arr) {
        console.log(item);
    }
}