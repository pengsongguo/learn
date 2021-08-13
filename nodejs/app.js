process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
})
console.log(process.argv);
const args = process.argv.slice(2)
console.log(args);