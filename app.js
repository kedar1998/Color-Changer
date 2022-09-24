const btn = document.querySelector("#button");

btn.addEventListener('click', function(e){
    let text = "0123456789ABCDEF";
    let color = "";
    for(let i=0;i<6;i++){
        let random = Math.ceil(Math.random() * 15);
        color = color + text[random];
        
    }
    // console.log(color);
    document.getElementById("canvas").style.backgroundColor = `#${color}`;
})