document.getElementById('images').addEventListener('click',function (e){
  let name =e.target.tagName;
  console.log(name);
  if(name === 'IMG'){
  const image = e.target.parentNode;
  image.remove(); 
  }
  
});