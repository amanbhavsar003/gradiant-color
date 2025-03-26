let bt1 = document.getElementById("btn1")
let bt2 = document.getElementById("btn2")
let txt = document.getElementById("textColor")

let bt1color = "#051937"
let bt2color = "#a8eb12"

const randomColor = () =>{
    let myHex = "0123456789abcdef"
    let myHexStr = "#"
    for (let i = 0; i < 6; i++) {
        myHexStr += myHex[Math.floor(Math.random() * 16)]
    }
    return myHexStr
}

const bt1Change = () =>{
    bt1color = randomColor()
    bt1.innerHTML = bt1color
    bt1.style.backgroundColor = `${bt1color}`
    txt.innerHTML = `background-image: linear-gradient(to right , ${bt1color}, ${bt2color})`
    document.body.style.backgroundImage = `linear-gradient(to right, ${bt1color}, ${bt2color})`
}


const bt2Change = () =>{
    bt2color = randomColor()
    bt2.innerHTML = bt2color
    bt2.style.backgroundColor = `${bt2color}`
    txt.innerHTML = `background-image: linear-gradient(to right , ${bt1color} ,${bt2color});`
    document.body.style.backgroundImage = `linear-gradient(to right, ${bt1color}, ${bt2color})`
}

bt1.addEventListener("click", bt1Change)
bt2.addEventListener("click", bt2Change)