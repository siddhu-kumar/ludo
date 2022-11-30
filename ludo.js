var image = [
    "face1.png",
    "face2.png",
    "face3.png",
    "face4.png",
    "face5.png",
    "face6.png",
];

function getRandom() {
    return(Math.floor(Math.random()*6));
}


function fun() {
    var t = document.getElementById("dice").classList.add("xyz");
    var flag = false;
    var a = setInterval(function() {
    if(flag) {
        var r = document.getElementById("dice").classList.remove("xyz");
        clearInterval(a);
    } else {
        flag = true;
            var ele = document.getElementById("score");
            var dice1;
            var dice2;
            
            var el1 = document.getElementById("die1");
            var el2 = document.getElementById("die2");
            
            dice1 = getRandom();
            dice2 = getRandom();
            
            el1.setAttribute("src",image[dice1]);
            el2.setAttribute("src",image[dice2]);
            
            ele.innerHTML = dice1+dice2+2;
            console.log(dice1+dice2);
        }
    },1500);
}
    