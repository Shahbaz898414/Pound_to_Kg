const  input =document.querySelector('.pound')
const  submit =document.querySelector('.button')
const  kg =document.querySelector('.kg')

submit.addEventListener('click',function() {
  let p=input.value;
  let k=p/2.2046;
  kg.innerHTML=k.toFixed(2);
})