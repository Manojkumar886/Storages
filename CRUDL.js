const first=()=>{
    
    const saySome={"objs":[
        {
            "name":"Razak mohamed S",
            "skills":"Java full stack development",
            "experience":10
        },
        {
            "name":"Sabarinathan",
            "skills":"Senior service analyst",
            "experience":13
        }
    ]}

    localStorage.setItem("operate",JSON.stringify(saySome))
    alert("localstorage has set");

}

const alls=()=>{
   
    const t = localStorage.getItem("operate");
    const son=JSON.parse(t);
    let collect="";
    son['objs'].map((d)=>{
        collect+="<tr><td>"+  JSON.stringify(d) +"</td></tr>"
        JSON.stringify(d)
    })
     var place=document.getElementById("template")

    place.innerHTML="<table border='1px' style='text-align:center;box-shadow:3px 3px 3px blue;'><thead><tr><th>Name Skills Experience</th></tr></thead><tbody>"+collect+"</tbody></table>"

}

const add=()=>{
    const t = localStorage.getItem("operate")
    const son=JSON.parse(t)

    const a=document.forms['ins'].name.value;
    const b=document.forms['ins'].skills.value;
    const c=document.forms['ins'].experience.value;

    son['objs'].push({
        "name":a,"skills":b,"experience":c
    })

    localStorage.setItem("operate",JSON.stringify(son))

    alert("Added");
}

const delete1=()=>
{
    // localStorage.clear();
    let hi=document.forms['ins'].dataofvalue.value;
    const t = localStorage.getItem("operate")
    const son=JSON.parse(t)
    son['objs']=son['objs'].filter((data)=>
    {
        return data!==son['objs'][hi];
    });
    localStorage.setItem("operate",JSON.stringify(son))
    
}