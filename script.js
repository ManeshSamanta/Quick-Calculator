let string="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='dlt'){
            string=String(string);
            string=string.slice(0,string.length-1);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='%'){
            string=eval(string)/100;
            document.querySelector('input').value=string;
        }
        else{
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
});