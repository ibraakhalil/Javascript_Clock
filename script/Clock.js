function tick() {
    let clock = document.querySelectorAll(".clock-div div")   
    let date = new Date();
    let array = [date.getSeconds()*6, date.getMinutes()*6 +date.getSeconds()*0.1 , date.getHours() * 30 + date.getMinutes()*0.5 ]

    clock.forEach(function(x,index){
        x.setAttribute("style",`transform : translateX(30%) rotate(${array[index]}deg);`)
    })
}
tick();
setInterval(() => {
    tick();
}, 1000);





