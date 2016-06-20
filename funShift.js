window.onload=function (){
  //document.body.style.background='red';
document.body.addEventListener('click',function (ev){
  console.log(ev);
  //console.log(ev.target.style.textTransform);
  //ev.target.textContent=toUpperCase(ev.target.textContent);
  if (ev.shiftKey){
    if (ev.target.style.textTransform=='uppercase'){ev.target.style.textTransform='';} else {ev.target.style.textTransform='uppercase';};
      ev.preventDefault();
      return false;
    }
});


} // onload
