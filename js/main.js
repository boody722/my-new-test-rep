// /******** sec1********** */
let itemInputSec1 = document.getElementById("itemInput")
let addBtn = document.getElementById("addBtn")
let delBtn = document.getElementById("delBtn")
let valus=[];

addBtn.addEventListener("click",function(){
   addValue()
   displayData()
   
})



function addValue(){
  let inputItemVal = 
  {
    "itemVal":itemInputSec1.value
  }
  valus.push(inputItemVal)

}

function displayData(){
  let uls = "";
  for( let i=0;i<valus.length;i++){
    uls+=
    `
    <li class="form-control text-left position-relative">`+valus[i].itemVal+`
    <button onclick="removeData(`+i+`)" class=" btn btn-danger delete" id="delBtn">X</button>
    </li>
    `
  }  
  document.getElementById("itemsUl").innerHTML=uls;
}

function removeData(ind){
  valus.splice(ind,1)
  displayData()
}
//  /**************end of sec 1*************** */
//**********sec 1 jquery******** */
//  $(".btn-primary").click(
//    function()
//    {let inpItem =  $("#itemInput").val();   
//    $("#itemsUl").append(`<li class="form-control text-left position-relative">
//     ${inpItem}
//     <button  class=" btn btn-danger delete" id="delBtn">X</button>
//     </li>
//     `);
//   })
// مش عارف اعمل ال (delete)
//*********************** */

// /*****sec 2 ***** */

var playSound = new Audio();
playSound.src = "sound/ThoseWereTheDaysIDTMaanHamadeh纯音频文件إخراجالصوتفقطRingtone.MP3";

$('.music').hover(function(){
  playSound.play();
})

//فى حاجه  غلط  انه لازم ادوس ع  الكلمهعشان  تشتغل  والوقت قصير فسبتها هى والالوان
/**********sec 3************* */
let countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

function clock(){
  let countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML=days
  document.getElementById("hour").innerHTML=hours
  document.getElementById("muint").innerHTML=minutes
  document.getElementById("scond").innerHTML=seconds



}
let interval=setInterval(clock,0000)


/**********sec4 ************ */
$(".row .red h2").hover(function(){
  $("#Qest4").css("background-color", "red");
    }, function(){
  $("#Qest4").css("background-color", "white");
})
$(".row .green h2").hover(function(){
  $("#Qest4").css("background-color", "green");
    }, function(){
  $("#Qest4").css("background-color", "white");
})

$(".row .blue h2").hover(function(){
  $("#Qest4").css("background-color", "blue");
    }, function(){
  $("#Qest4").css("background", "white");
})
/******************end of sec 4********************** */
/*********start of sec 5***************** */
let userName = document.getElementById("userName")
let  nameError=document.getElementById("nameError")
let btnDisable = document.getElementById("btnDisable")
userName.addEventListener("keyup",function(){
  let nameRejax = /^[A-Z][a-z]{2,9}$/
  if(nameRejax.test(userName.value)){
    userName.classList.add("is-valid")
    userName.classList.remove("is-invalid")
    nameError.style.display="none"
  }
  else{
    userName.classList.remove("is-valid")
    userName.classList.add("is-invalid")
    nameError.style.display="block"
  }
});
/********************************************* */
let userEmail = document.getElementById("userEmail")
let mailError=document.getElementById("mailError")
userEmail.addEventListener("keyup",function(){
  let mailRejax= /^[a-zA-Z0-9]{5,60}@[a-z]{3,10}.([a-z]{2,10})$/;
  if(mailRejax.test(userEmail.value)){
    userEmail.classList.add("is-valid")
    userEmail.classList.remove("is-invalid")
    mailError.style.display="none"
  }
  else{
    userEmail.classList.remove("is-valid")
    userEmail.classList.add("is-invalid")
    mailError.style.display="block"
  }
})  
/////////////////////////////////////////////
let userPhone = document.getElementById("userPhone")
let phoneError=document.getElementById("phoneError")
userPhone.addEventListener("keyup",function(){
  let phoneRejax=  /^01(11|14|01|15|00)[0-9]{7}$/;
  if(phoneRejax.test(userPhone.value)){
    userPhone.classList.add("is-valid")
    userPhone.classList.remove("is-invalid")
    phoneError.style.display="none"
    btnDisable.setAttribute("disabled","true")
  }
  else{
    userPhone.classList.remove("is-valid")
    userPhone.classList.add("is-invalid")
    phoneError.style.display="block"
  }
})
///////////////////////////////////////////////////////


new WOW().init();




