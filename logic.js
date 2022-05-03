console.log("aur bhai kya hal hai");
let change = document.getElementById('change');
let con = document.getElementById('con');
change.addEventListener('click',function(){
    con.style.background='black';
    con.style.color='white';
})
let dark = document.getElementById('dark');
let light = document.getElementById('light');
let body = document.getElementById('body');
let x = document.getElementById('nave');
dark.addEventListener('click', function(){
    body.style.background='black';
    body.style.color="white";
    x.style.background='white';
    con.style.color='white'
})
light.addEventListener('click',function(){
    body.style.background='white';
    con.style.color='black';
})