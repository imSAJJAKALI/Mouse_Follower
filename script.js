
let circle=document.getElementById('circle')

window.addEventListener('mousemove',function(details){
    setTimeout(() => {
      circle.style.top=details.clientY+'px'
      circle.style.left=details.clientX+'px'
    
  }, 200);
})
