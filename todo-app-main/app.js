let form = document.querySelector('form');
let list = document.querySelector('ul');
let count = document.querySelector('#itemsleft');
let clearAll = document.querySelector('#clear');



count.textContent='0';
let a = 0; //adding counter
let b = 0; //removing counter

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let inp = form.elements.newtodo;

    if(inp.value==""){
        alert("invalid input");
    }
    else{
        let newli = document.createElement('li')
        let content = document.createElement('span')
        let cancelit = document.createElement('span')
        let strikeit = document.createElement('span')
        
        //adding item
        strikeit.classList.add("strike")
        newli.append(strikeit);

        content.append(`${inp.value}`);
        content.classList.add('licontent')
        newli.append(content);
        
        cancelit.classList.add("cross")
        newli.append(cancelit);

        list.append(newli); 


        //striking item
        strikeit.addEventListener('click',()=>{
            content.classList.toggle("strikedword");
        })

        //removing item
        cancelit.addEventListener('click',()=>{
            list.removeChild(newli);
            b++;
            count.textContent=`${a-b}`;
         })
         a++; 
         
         //remove all
         clearAll.addEventListener('click',(e)=>{
             list.remove();
             a = 0;
             count.textContent = `${a}`;
         })
    }
    count.textContent=`${a-b}`;
    inp.value='';    
})






