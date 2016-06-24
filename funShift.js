window.onload=function (){
document.body.addEventListener('click',function (ev){
  console.log(ev);
  if (ev.shiftKey){
    if (ev.target.style.textTransform=='uppercase'){ev.target.style.textTransform='';} else {ev.target.style.textTransform='uppercase';};
      ev.preventDefault();
      return false;
    }
});
} // onload
