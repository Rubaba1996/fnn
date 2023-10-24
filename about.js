let prev = document.querySelector('#prevv');
let next = document.querySelector('#nexv');
let iuu = document.getElementsByClassName('iuu');
let c = 0;

nextv.addEventListener('click',()=>{
  c++;
  if(c > iuu.length-1){
    c = 0;
  }
  document.getElementsByClassName('show1')[0].classList.remove('show1');
  iuu[c].classList.add('show1');
})

prev.addEventListener('click',()=>{
  c--;
  if(c < 0){
    c = iuu.length-1;
  }
  document.getElementsByClassName('show1')[0].classList.remove('show1');
  iuu[c].classList.add('show1');
})




