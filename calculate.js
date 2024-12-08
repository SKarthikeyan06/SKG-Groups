function username(){
    const value = localStorage.getItem('myValue');
    document.getElementById('us').textContent+="\t\t"+value
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
    scriptURL="https://script.google.com/macros/s/AKfycbxhN7nRaEdaJ22DR89DOxCyl8LT8FMJEJtH9wTnm9lvj_gnWsViMedt05vBdUYvtN8BqA/exec";
  }
  console.log(scriptURL);
  window.location.href=scriptURL;
}
function calculate(){
    document.getElementById("ca").addEventListener("click",(e)=>
    {
        const amount=document.getElementById("amount").value;
        const date=document.getElementById("date").value;
        const monthsDifference = calculateMonthsDifference(date);
        const actual=monthsDifference+1;
        const rate=document.getElementById("rate").value;
        var interest,interest1;
        if (rate=="Gold")
        {
            interest=amount*0.02*monthsDifference;
            interest=Math.round(interest);
            interest1=interest%10;
            if (interest1<5 && interest1!=0)
            {
                interest=interest+(5-interest1);
            }
            else if(interest1>5)
            {
                interest=interest+(10-interest1);
            }
        }
        else if(rate=="Silver"){
            interest=amount*0.03*monthsDifference;
            interest=Math.round(interest);
            interest1=interest%10;
            if (interest1<5 && interest1!=0)
            {
                interest=interest+(5-interest1);
            }
            else if(interest1>5)
            {
                interest=interest+(10-interest1);
            }
        }
        else if(rate=="Note"){
            interest=amount*0.01*actual;
            interest=Math.round(interest);
        }
        const total=Number(amount)+interest;
        const str = `Actual Months: ${actual}<br>
                     Calculated Month: ${monthsDifference}<br>
                     Amount: ${amount}<br>
                     Interest: ${Number(interest)}<br>
                     -----------------------<br>
                     Total Amount: ${total}`;
        document.getElementById('result').innerHTML = str;
    });
}
function calculateMonthsDifference(dateString) {
    const date1 = new Date();
    const date2 = new Date(dateString.split('-').reverse().join('-'));
    let monthsDiff = (date2.getFullYear() - date1.getFullYear()) * 12 + (date2.getMonth() - date1.getMonth());
    monthsDiff = Math.abs(monthsDiff);
    const dayDiff = date2.getDate() - date1.getDate();
    if (dayDiff < 0) {
        monthsDiff += 1;
    }
    const result = monthsDiff - 1;
    return result;
}
async function fetchData() {
    const uvalue = localStorage.getItem('myValue');
    var scriptURL;
    if (uvalue=="KSB")
    {
        scriptURL="https://script.google.com/macros/s/AKfycbzRlYlrZMR0CGuFWEErf61ncWr-ZIeHbaFYMehAWv0_ffPUivuF2lPM6cHkSAuo-um3/exec";
    }
    else if(uvalue=="KM")
    {
        scriptURL="https://script.google.com/macros/s/AKfycbxli51kStlkh8iMcuCJNYqqK7qNTukmtY6Y-iCQ4ricUJYkOXc4NCmtMy-MGBUmiwvQ-w/exec";
    }
    else if(uvalue=="KRISHNA")
    {
        scriptURL="https://script.google.com/macros/s/AKfycbxhN7nRaEdaJ22DR89DOxCyl8LT8FMJEJtH9wTnm9lvj_gnWsViMedt05vBdUYvtN8BqA/exec";
    }
    const response = await fetch(`${scriptURL}?type=json`);
    const data = await response.json();
    displayData1(data);
}
function displayData1(data) {
    var count;
    let stopLoop = false;
    const value=data.forEach(row=>{
      const records=row.forEach(o=>{
        if (stopLoop) return;
        var tempno=row[0];
        var searchno=document.getElementById('number').value;
        if (searchno==tempno)
        {
            count=1;
            pro=row[7].split(" ")
            if (pro[0]=="பவுன்")
            {
                document.getElementById("opt").selected=true;
            }
            else
            {
                document.getElementById("opt1").selected=true;
            }
            const num=row[2].replace(/[^a-zA-Z0-9]/g,"");
            document.getElementById('amount').value=num;
            t=document.getElementById('date');
            t.type="text";
            document.getElementById('date').value=row[1];
            stopLoop = true;
            return;
        }
      })
});
var searchno=document.getElementById('number').value;
if (!count)
{
    alert("The Number "+searchno+" is not Present in the Database\nPlease Ensure the Loan Number\nOtherwise Manually Enter Data for Calculation.");
}
}