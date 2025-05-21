
  const clear = document.querySelector('#reset-btn');
  clear.addEventListener('submit',(r)=>{
    if(r.target.id==="reset-btn"){
      refresh();
    }
  });
  const submit = document.querySelector('form');
  submit.addEventListener('submit',(e)=>{
   e.preventDefault();
   const height=parseInt(document.querySelector('#height').value);
   const weight =parseInt(document.querySelector('#weight').value);
   const result =document.querySelector('#results');
   
   if(height === " " || height <= 0 || isNaN(height)){
    result.innerHTML=`Please enter the correct height.`; 
   }
   else if(weight===" " || weight<=0 || isNaN(weight)){
    result.innerHTML=`Please enter the correct weight.`;
   }
   else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML=`<span style="font-size:50px">${bmi}</span>`;
   }
  });
     const refresh = () => {
    document.querySelector('#height').value=" ";
    document.querySelector('#weight').value=" ";
  };
