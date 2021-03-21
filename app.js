const btn = document.getElementById("btn");
const input = document.getElementById("input");
const div = document.querySelector(".list");
const table = document.createElement('table');
div.appendChild(table);
table.classList.add('column');
const Add = () =>{
    btn.addEventListener("click",()=>{
        const value =input.value;
const tr = document.createElement("tr");
tr.classList.add('row');
table.appendChild(tr);

const th = document.createElement("th");
tr.appendChild(th);

const h3 = document.createElement('h3');
th.appendChild(h3);
h3.classList.add('h3');
h3.textContent=value;
input.value='';
const th2 = document.createElement('th');
tr.appendChild(th2);

const i  =document.createElement('i');
th2.append(i);
i.classList.add('fa')
i.classList.add('fa-check')
i.classList.add('icon')
i.classList.add('check')
i.title='checked';
const th3 = document.createElement('th');
tr.appendChild(th3);

const i2  =document.createElement('i');
th3.append(i2);
i2.classList.add('fa')
i2.classList.add('fa-trash')
i2.classList.add('icon')
i2.classList.add('delete')
i2.title='remove';
const th4 = document.createElement('th');
tr.appendChild(th4);

const i3  =document.createElement('i');
th4.append(i3);
i3.classList.add('fa')
i3.classList.add('fa-remove')
i3.classList.add('icon')
i3.classList.add('unchecked')
i3.title='unchecked'
cursor();
check();
    });
   
    input.addEventListener("click",()=>{
        input.placeholder='';
    })
}
Add();

function cursor(){
    const check = document.querySelectorAll('.check');
    const trash = document.querySelectorAll('.fa-trash');
    const remove = document.querySelectorAll(".fa-remove");
  check.forEach(function(mark){
    mark.addEventListener("mousemove",()=>{
        mark.style.color='green';
    })
    mark.addEventListener("mouseout",()=>{
       
        mark.style.color='white';
    })
  })

   trash.forEach((e)=>{
    e.addEventListener("mousemove",()=>{
        e.style.color='red';
    })
    e.addEventListener("mouseout",()=>{
       
        e.style.color='white';
    })
   })
   remove.forEach((r)=>{
    r.addEventListener("mousemove",()=>{
        r.style.color='blue';
    })
    r.addEventListener("mouseout",()=>{
       
        r.style.color='white';
    })
   })
} 
const check = () =>{
    const markElement = document.querySelectorAll('.check');
    const unchecked = document.querySelectorAll(".fa-remove")
    const remove = document.querySelectorAll(".fa-trash")
   const h3= document.querySelectorAll('.h3')
markElement.forEach((check)=>{
check.addEventListener("click",(e)=>{
e.currentTarget.parentElement.parentElement.childNodes[0].classList.add("strike");
})
})
unchecked.forEach((n)=>{
n.addEventListener("click",(x)=>{
x.currentTarget.parentElement.parentElement.childNodes[0].classList.remove("strike");
})
})
remove.forEach((r)=>{
r.addEventListener("click",(z)=>{
z.currentTarget.parentElement.parentElement.remove();
})
})
}