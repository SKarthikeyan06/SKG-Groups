const uvalue = localStorage.getItem('myValue');
var scriptURL;
function username(){
  const value = localStorage.getItem('myValue');
  document.getElementById('us').textContent+="\t\t"+value;
  fetchDatapermission();
}
if (uvalue=="KSB")
{
  scriptURL="https://script.google.com/macros/s/AKfycbw_0SqVCkEFM2eeVB5z9R4QwGKHuVD_rlBAssOKbG5G4XOMXB8oUTDrJon6Bs2dFIMm/exec";
}
else if(uvalue=="KM")
{
  scriptURL="https://script.google.com/macros/s/AKfycbxli51kStlkh8iMcuCJNYqqK7qNTukmtY6Y-iCQ4ricUJYkOXc4NCmtMy-MGBUmiwvQ-w/exec";
}
else if(uvalue=="KRISHNA")
{
  scriptURL="https://script.google.com/macros/s/AKfycbxhN7nRaEdaJ22DR89DOxCyl8LT8FMJEJtH9wTnm9lvj_gnWsViMedt05vBdUYvtN8BqA/exec";
}
async function translateToTamil() {
    let inputText = document.getElementById('inputText').value;
    let inputText1 = document.getElementById('sur').value;
    inputText+=" 10";
    inputText1+=" 10";
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${inputText}&langpair=en|ta`);
        const response1 = await fetch(`https://api.mymemory.translated.net/get?q=${inputText1}&langpair=en|ta`);
        const data = await response.json();
        const data1 = await response1.json();
        r=data.responseData.translatedText;
        r1=data1.responseData.translatedText;
        r=r.slice(0,-2)
        r1=r1.slice(0,-2)
        console.log(r,r1);
        if (inputText1==" 10")
        {
          document.getElementById("inputText").value = r||"Translation failed!";
          document.getElementById("sur").value ="";
        }
        else{
        document.getElementById("inputText").value = r||"Translation failed!";
        document.getElementById("sur").value = r1||"Translation failed!";}
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
function myGeeks() {
    const optionsArray = [
      'தோடு', 'தோடு ஜிமிக்கி', 'தொங்கல்', 'தொங்கல் தோடு', 'சாதா கல் தோடு',
      'மாட்டல்', 'ஜிமிக்கி', 'Delhi மாட்டல்', 'TV மோதிரம்', 'லேடீஸ் மோதிரம்', 'உருட்டு',
      'செயின்', 'நெக்லஸ்', 'கொலுசு', 'M/C கொலுசு', 'கொடி', 'தாளி  குண்டு', 'தாளி', 'குண்டு', 'மூகுத்தி',
      'நாணல்', 'டாலர்', 'அடி காசு', 'மாங்காய் காசு', 'லெஷ்மி காசு', 'BABY மோதிரம்', 'வாழை சீப்பு', 'கோஸ் மூகுத்தி',
      'சலங்கை மாட்டல்', 'ATTACHED தொ.தோடு', 'வளையல்', 'காசு ', 'கைச்செயின்', 'காது வளையம்', 'டை.தொங்கல்',
      'மோதிரம்', 'சாதா கல் மூகுத்தி', 'தாயத்து', 'உருப்படி', 'மொட்டு தொங்கல்'
    ];
    const optionsArray1=  [
    'சீர்காழி','ஆச்சாள்புரம்','அகனி','அகரஎலத்தூர்','ஆலக்குடி','அரசூர்','எடமணல்','எருக்கூர்',
    'கடவாசல்','கதிராமங்கலம்','கார்கோயில்','காத்திரிப்பு','கீழமாத்தூர்','கீழகனி','கொண்டல்','கூத்தியாம்பேட்டை ','குன்னம்',
    'மாதிரவேலூர்','மகாராஜபுரம் ','மகேந்திரப்பள்ளி','மங்கைமடம்','மேல மாத்தூர்','"56 , நிம்மேலி"',
    'ஓலையம்புதூர்','P.P.N','பழையபாளையம்','புதுப்பட்டினம்','புங்கனூர்','புத்தூர்','பாதரகுடி','பெருந்தோட்டம்','ராதாநல்லூர்',
    'சட்டநாதபுரம் ','செம்பதனிருப்பு','செம்மங்குடி','சேந்தங்குடி','ஆலஞ்சேரி','திருமுல்லைவாசல் ',
    'திருநகரி','திருவெங்காடு','திட்டை','தென்னங்குடி','தெற்கு தென்னங்குடி', 'உமையாள்பதி',
    'வடரங்கம்','வள்ளுவக்குடி','வி.சமுத்திரம் ','பட்டவிளாகம்','தத்தங்குடி','தா. காமராஜபுரம்',
    'திருக்கோலக்கா ', 'பூங்குடி','கோவில்பத்து','தென்பாதி','வை.இ.ஏரி','மடபுரம்','வடவஞாறு','நேரசோஷபுரம்','சோத்திரியம்',
    'P.K.K','எலத்தூர் ','முத்துகிருஷ்ணாபுரம் ','தேனூர் ','மாதானம்','மேலகனி','பனிகிருப்பு ','மண்ணிப்பள்ளம் ','ஓதவந்தன்குடி ',
    'கீழதென்பாதி ','ஐவேளி ','ஏனாகுடி ','துறையூர் ','மருதங்குடி','S.கோடங்குடி',
    'வழுதலைக்குடி',  'அத்தியூர் '];
    const datalist = document.getElementById("names");
    datalist.innerHTML = "";
    for (let option of optionsArray) {
      let opt = document.createElement("OPTION");
      opt.value = option;
      datalist.appendChild(opt);
    }
    const datalist1 = document.getElementById("names1");
    datalist1.innerHTML = "";
    for (let option of optionsArray1) {
      let opt = document.createElement("OPTION");
      opt.value = option;
      datalist1.appendChild(opt);
    }
}
async function data_save() {
  const form = document.forms['submit-to-google-sheet'];
  const formData = new FormData(form);
  let number_from;
  for (let [key, value] of formData.entries()) {
    if (key=="Number")
    {
      number_from=value;
    }
    if (key=="Name")
    {
      name_from=value;
    }
    if (key=="Gua")
    {
        gua_from=value;
    }
    if (key=="SurName")
    {
        surname_from=value;
    }
    if (key=="Product")
    {
      if (!value==""){
      product_from=value;}
      else{
        product_from="Please Selected";
        Swal.fire({
          icon: 'error',
          title: 'Product is Not Found',
          text: 'Product is not Selected\nPlease Ensure that.',
        });
        return;
      }
    }
    if (key=="Address")
    {
      if (!value==""){
      address_from=value;}
      else
      {
        address_from="Please Selected";
        Swal.fire({
          icon: 'error',
          title: 'Address is not Found',
          text: 'Address is not Selected\nPlease Ensure that.',
        });
        return;
      }
    }
    if (key=="Option")
    {
      option_from=value;
    }
    if (key=="LDate")
    {
      date_from=value;
    }
}
const  result =await Swal.fire({
    title: 'Confirm Save',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#30d65c',
    cancelButtonColor: '#ed82a2',
    confirmButtonText: 'Correct & Save it',
    cancelButtonText: 'Cancel',  
    html: '<p style="text-align:left;font-size:20px;">Loan Number : <strong>'+number_from+'</strong><br>Name : '+name_from+""+gua_from+" "+surname_from+'<br>Product : '+option_from+" "+product_from+'<br>Address : '+address_from+'<br>Loan Date : '+date_from+'<br>is Correct ?</p>',
})
if(result.isConfirmed){
  fetch(scriptURL, { mode:'no-cors',method: 'POST', body: new FormData(form)})
      .then(response => {console.log("Okay");
      document.contact-form.reset();
      location.reload();})
      Swal.fire({
          icon: 'success',
          title: 'Success',
          html: '<p style="text-align:left;font-size:20px;">Loan Number : <strong>'+number_from+'</strong><br>Name : '+name_from+""+gua_from+" "+surname_from+'<br>Product : '+option_from+" "+product_from+'<br>Address : '+address_from+'<br>Loan Date : '+date_from+'<br>is Saved Successfully !</p>',
      })
      .catch(error => console.error('Error!', error.message))
}
else
{
  Swal.fire({
    icon: 'alert',
    title: 'Please Be Careful',
    text: 'The Loan Number '+number_from+' was not saved.!!Try Again',
  });
}
}
document.getElementById('fo').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    alert("Don't Press Enter");
  }
  else if (event.ctrlKey && event.key === 'B' )
  {
    event.preventDefault();
    alert("Welcome");
    data_save();
  }
});
const but=document.getElementById('sub')
but.addEventListener('click',data_save())
async function fetchData() {
  const response = await fetch(`${scriptURL}?type=json`);
  const data = await response.json();
  displayData1(data);
}
async function fetchData_num() {
const response = await fetch(`${scriptURL}?type=json`);
const data = await response.json();
displayData(data);
}
function generate(h){
var ch="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var no=h;
let final;
var alpha;
if(no<=10000)
{
  final=no++;
  document.getElementById("num").value=no++;
}
else
{
  if (ch.includes(h[0]))
  {
    var no=h.slice(1);
    alpha=ch.search(h[0]);
    ++no;
    final=ch[alpha]+" "+Number(no);
    document.getElementById("num").value=final;
  }
  else
  {
  alpha=ch.search(h[0]);
  final=ch[alpha+1]+" "+"1";
  document.getElementById("num").value=final;
  }
}
}
function displayData(data) {
const number=data[data.length-1][0];
generate(number);
document.getElementById("ldate").value="\'"+data[data.length-1][1];
}
function displayData1(data) {
let stopLoop = false;
const value=data.forEach(row=>{
  const records=row.forEach(o=>{
    if (stopLoop) return;
    var tempno=row[0];
    var searchno=document.getElementById('searchno').value;
    if (searchno==tempno)
    {
      console.log(row[5].split("/O"));
      gname=row[5].split("/O");
      if (gname.length!=1){
      if ('S'.includes(gname[0][gname[0].length-1])){
        document.getElementById("so").selected=true;
      }
      else if ('W'.includes(gname[0][gname[0].length-1])){
        document.getElementById("wo").selected=true;
      }
      else if ('D'.includes(gname[0][gname[0].length-1])){
        document.getElementById("do").selected=true;
      }
      document.getElementById("inputText").value=gname[0].slice(0,-1);
      document.getElementById("address").value=row[6];
      re=gname.slice(1)
      re=String(re)
      document.getElementById("sur").value=re.trim();
    }
    else if (row[5].split(" ")[row[5].split(" ").length-1]=="")
    {
      so=row[5].split(" ");
      document.getElementById("inputText").value=so[0];
      document.getElementById("address").value=row[6];
      document.getElementById("sur").value=String(so.slice(1)).replace(",","");;
      document.getElementById("other").selected=true;
      stopLoop = true;
      return;
    }
    else
      {
        so=gname[0].split(" ");
        sq=so.slice(0,so.length-1);
        var te1="",sq1="";
        for (s in sq){
        sq1+=String(sq[s]).replace(",","");}
        for (i=so.length-1;i<so.length;i++)
          te1+=so[i];
        document.getElementById("inputText").value=sq1;
        document.getElementById("address").value=row[6];
        document.getElementById("sur").value=te1;
        document.getElementById("other").selected=true;
        stopLoop = true;
        return; 
      }
    }
  })
});
}
function addtocart(){
const temp=document.getElementById("product").value;
if ((document.getElementById('cart').value).length==0){
  document.getElementById('cart').value+=" "+temp;   
}
else{
document.getElementById('cart').value+=" ,"+temp+" "; }
}
async function fetchDatapermission() {
  const scriptURL_forlogin="https://script.google.com/macros/s/AKfycbzmOOqFlgiiVI02nYRy6gmEFM89ye0p7U3nm8xpNwSWvC96dyJ1Eo_fAWK4Vk4QN-NJ/exec";
  const response = await fetch(`${scriptURL_forlogin}?type=json`);
  const data = await response.json();
  displayDatapermission(data);
}
function displayDatapermission(data) {
  let stopLoop = false;
  const value=data.forEach(row=>{
    const records=row.forEach(o=>{
      if (stopLoop) return;
      var tempno=row[0];
      var searchno=uvalue;
      if (searchno==tempno)
      {
          permission=row[1];
          const port_n = localStorage.getItem('port');
          if (permission!="Allow "+port_n)
          {
            console.log(permission);
            if(permission=="Allow"){
              eus="Go to Login Page and Login with Write to Write";
            }
            else{
              eus=permission.slice(6);
            }
            Swal.fire({
              icon: 'warning',
              title: 'Don\'t Cheat',
              html: 'You are not allowed to add data now.<br><strong>'+eus+"</strong> having permission to write<br>Please Wait until they logout.",
            });
            setTimeout(() => window.location.href="Main_Menu.html" , 8000);
          }
          stopLoop = true;
          return;
      }
      })
      })
    }