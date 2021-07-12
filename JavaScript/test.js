function cat(name, color) {
    return {
        name,
        color
    }
}

const cat1 = cat('大毛', '红色');
const cat2 = cat('二毛', '黑色');

console.log(cat1);
console.log(cat2);