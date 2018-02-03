var health = 10;
var money = 10;

function genRandNum(min, max){
    
    return Math.floor(Math.random() * (max - min) + min );
}


function renderRandNum() {
    document.getElementById("randNumDiv").innerText = genRandNum(4, 8);
}

function renderHealth() {
     document.getElementById("health").innerText = health;
}

function renderMoney() {
    document.getElementById("cash").innerText = money;
}
function doggyAttack(){
    money = money + getRandNum(-5,5)
    renderMoney();
}
renderHealth();

renderMoney();