const need=["Milk","Horlicks","Oil"]

const have=["Curd","Biscuits","snacks"]

const havebtn=document.getElementById('havebtn');

let myhavevalues="";


let active=true;

have.map((data)=>{
    myhavevalues+="<li>"+data +"\t"+"<button>  DELETE"+"</button>"+"</li>"
})
document.getElementById('haveitem').innerHTML="<ol>"+myhavevalues+"</ol>"

        
havebtn.onclick=function(){
    let newvalue=document.getElementById('item').value;

    have.push(newvalue);
    let myhavevalues="";

    have.map((data)=>{
        myhavevalues+="<li>"+data +"\t"+"<button>  DELETE"+"</button>"+"</li>"
    })
    document.getElementById('haveitem').innerHTML="<ol>"+myhavevalues+"</ol>"

    return active=false;
   }