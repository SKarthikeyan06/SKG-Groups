const scriptURL="https://script.google.com/macros/s/AKfycbzmOOqFlgiiVI02nYRy6gmEFM89ye0p7U3nm8xpNwSWvC96dyJ1Eo_fAWK4Vk4QN-NJ/exec";
//Login Details
function f(){
document.getElementById("login").addEventListener("click",(event)=>
{
  login.disabled = true;
  event.preventDefault();
  let user=document.getElementById("usname").value;
  user=user.toUpperCase()
  const password=document.getElementById("pass").value;
  const responseMessage = document.getElementById('responseMessage');
  let response=0;
  if (user=="KRISHNA" && password=="mk@2019")
  {
    response=1;
  }
  else if (user=="KM" && password=="km@2019")
  {
    response=1;
  }
  else if (user=="KSB" && password=="ksb@2019")
  {
    response=1;
  }
  else if (user=="ADMIN" && password=="admin")
  {
    uname=["KSB","KM","KRISHNA"]
    for (i in uname)
    {
      logout(uname[i],"Allow");
    }
    response=2;
  }
  if (response==1) {
      Swal.fire({
        icon: 'info',
        title: 'Notification',
        html: 'Password Correct<br>Waiting for Permission<br>Please Wait',
      });
      fetchData();
      responseMessage.textContent = 'Password and Username Matched Please Wait for Permission!';
      responseMessage.style.color = 'green';
      responseMessage.style.fontFamily="Consolas";
      responseMessage.style.textAlign='Center';
    } 
  else if(response==2)
  {
    login.disabled = false;
    responseMessage.textContent = 'Your Permissions for Login is Changed !!';
    responseMessage.style.color = 'brown';
    responseMessage.style.fontFamily="MS Serif";
    responseMessage.style.textAlign='Center';
  }
  else {
      login.disabled = false;
      Swal.fire({
        icon: 'warning',
        title: 'Notification',
        html: 'Password InCorrect<br>Please Try Again',
      });
      responseMessage.textContent = 'Oops! There was a problem with our password and username.';
      responseMessage.style.color = 'red';
      responseMessage.style.fontFamily="Arial";
      responseMessage.style.textAlign='Center';
      responseMessage.style.fontSize='medium';
    }
  }
)
}
function show(){
  const res=document.getElementById('pass');
  if (res.type=="password"){
    res.type="text";
  }
  else{
    res.type="password";
  }
}
async function fetchData() {
  const response = await fetch(`${scriptURL}?type=json`);
  const data = await response.json();
  displayData1(data);
}
function displayData1(data) {
  let stopLoop = false;
  const value=data.forEach(row=>{
    const records=row.forEach(o=>{
      if (stopLoop) return;
      var tempno=row[0];
      var searchno=document.getElementById('usname').value;
      searchno=searchno.toUpperCase()
      login.disabled = true;
      if (searchno==tempno)
      {
        const usmode=document.getElementById("mode").value;
        if (usmode=="Write")
        {
          permission=row[1];
          if (permission=="Allow")
          {
            let minm = 10000;
            let maxm = 99999;
            port_n=Math.floor(Math.random() * (maxm - minm + 1)) + minm;
            logout(searchno,'Allow '+port_n);
            localStorage.clear();
            localStorage.setItem('myValue', searchno);
            localStorage.setItem('port',port_n);
            window.location.href="Main_Menu.html"; 
          }
          else{
            alert("Sorry\nWe Cannot allow to Write\nPlease Contact the Concerned Person");
            login.disabled = false;
            responseMessage.textContent = 'Your Account is logged in another device\n Please wait until they logout.';
            responseMessage.style.color = 'blue';
            responseMessage.style.fontFamily="courier";
            responseMessage.style.textAlign='Center';
          }
          stopLoop = true;
          return;
        }
        else{
          var searchno=document.getElementById('usname').value;
          searchno=searchno.toUpperCase()
          localStorage.setItem('myValue', searchno);
          localStorage.setItem('port','Empty');
          window.location.href="Main_Menu.html"; 
        }
      }
      })
    })
}
function logout(uname,message)
{
    async function updateSpreadsheet(cell, value) {
        const scriptUrl = 'https://script.google.com/macros/s/AKfycbwypQB-iWjdZwDzVGO3yfjEjRtzhAib0okp7SAdtzuzGdav3CBJZ4bjDey_6GI8uSuW/exec';
      
        const data = {
          sheetName: 'Sheet1',
          cell: cell,
          value: value
        };
        try {
          const response = await fetch(scriptUrl, {
            mode:'no-cors',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
          const result = await response.json();
          if (result.success) {
            alert('Your Spreadsheet Permission Updated successfully');
          } else {
            console.error('Error:', result.error);
          }
        } catch (error) {
          console.error('Fetch Error:', error);
        }
      }
      if (uname=="KSB")
      {
        row='B2';
      }
      else if (uname=="KM")
      {
        row='B3';
      }
      else if (uname=="KRISHNA")
      {
        row='B4';
      }
      updateSpreadsheet(row, message);
}