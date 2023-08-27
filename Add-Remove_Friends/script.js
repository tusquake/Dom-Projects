let is_status = document.querySelector("h5");

let add = document.querySelector('#add');

let img = document.querySelector('img');


let flag = 0;

add.addEventListener('click',function(){
    if(flag==0){
    is_status.innerHTML = "Friends";
    is_status.style.color="green";
    img.style.filter="blur(0px)";
    add.innerHTML = "Remove Friends-"
    flag=1;
}
else{
    is_status.innerHTML = "Unknown";
    is_status.style.color="red";
    img.style.filter="blur(2px)";
    add.innerHTML = "Add Friends+"
    flag=0;
    }
});