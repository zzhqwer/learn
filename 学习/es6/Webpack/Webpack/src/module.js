

export default 15;
class Prepeo {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
let p = new Promise((resolve, reject) => {
    resolve('正确')
})
p.then(res => {
    console.log(res)
})
console.log(new Prepeo('zs', 18))
console.log('module.js')