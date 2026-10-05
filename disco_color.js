function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1},${val2},${val3})`
}

let object = document.getElementsByTagName("h4")
let obj = document.getElementsByTagName("h3")


setInterval(() => {
    Array.from(object).forEach(e => {
        e.style.color = getRandomColor()
    });
    Array.from(obj).forEach(e => {
        e.style.color = getRandomColor()
    });
}, 1000);