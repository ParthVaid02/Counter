console.log(`counter program`)

let num=0;

console.log(`the number is ${num}`)

document.getElementById("num").textContent = num

document.getElementById("num").onclick = function(){
    num++;
    document.getElementById("num").textContent = num
}

document.getElementById("plus").onclick = function(){
    num++;
    document.getElementById("num").textContent = num
}

document.getElementById("minus").onclick = function(){
    num--;
    document.getElementById("num").textContent = num
}

document.getElementById("reset").onclick = function(){
    num=0;
    document.getElementById("num").textContent = num
}