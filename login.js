const username=document.getElementById('username')
const password=document.getElementById('password')
const login=document.getElementById('login')

login.onclick=function()
{
    let user1="Manoj";
    let pass1="Manoj123";
    const user=username.value;
    const pass=password.value;

    if(user && pass)
    {
        if(user1===user && pass1===pass)
        {
            sessionStorage.setItem(user,pass)
            location.replace("crud.html");
        }
        else{
            alert('not matching username or password (please enter original values)')
        }
    }
    else
    {
        alert('must enter password and username')
    }
}