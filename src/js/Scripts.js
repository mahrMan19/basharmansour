function FC(c , id){
  let a= document.getElementById(id);
  a.style.color= c;

}
function BGE(c , id){
  let a= document.getElementById(id);
  a.style.backgroundColor= c;

}
function stars(number){
  let s= document.getElementsByClassName("star");
  for(i=0 ; i< number ; i++){
    s[i].classList.remove('bx-star');
    s[i].classList.add('bxs-star');
  }
    for(i=number ; i<= s.length ; i++){
    s[i].classList.remove('bxs-star');
    s[i].classList.add('bx-star');
  }
}