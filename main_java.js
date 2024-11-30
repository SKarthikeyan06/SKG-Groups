function username(){
    const value = localStorage.getItem('myValue');
    document.getElementById('us').textContent+="\t\n"+value
}
function data_search()
{
  const uvalue = localStorage.getItem('myValue');
  var scriptURL;
  if (uvalue=="KSB")
  {
    scriptURL="https://script.google.com/a/~/macros/s/AKfycbzRlYlrZMR0CGuFWEErf61ncWr-ZIeHbaFYMehAWv0_ffPUivuF2lPM6cHkSAuo-um3/exec";
  }
  else if(uvalue=="KM")
  {
    scriptURL="https://script.google.com/a/~/macros/s/AKfycbxli51kStlkh8iMcuCJNYqqK7qNTukmtY6Y-iCQ4ricUJYkOXc4NCmtMy-MGBUmiwvQ-w/exec";
  }
  else if(uvalue=="KRISHNA")
  {
    scriptURL="https://script.google.com/a/~/macros/s/AKfycbxhN7nRaEdaJ22DR89DOxCyl8LT8FMJEJtH9wTnm9lvj_gnWsViMedt05vBdUYvtN8BqA/exec";
  }
  console.log(scriptURL);
  window.location.href=scriptURL;
}
async function logout_page()
{
  logout1("Allow");
  window.location.href="index.html";
}
function logout1(message)
{
    const scriptUrl = "https://script.google.com/macros/s/AKfycbxr-4KMBKQ5QzKFAsW1NLccb4cLBylR_zISDyMOhpao70zkXMQgKQxlavuFhwWvcZ1Y/exec";
    async function updateSpreadsheet(cell, value) {
      
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
            alert('Spreadsheet updated successfully');
          } else {
            console.error('Error:', result.error);
          }
        } catch (error) {
          console.error('Fetch Error:', error);
        }
    }
    const uname=localStorage.getItem('myValue');
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
    updateSpreadsheet(row,message);
}