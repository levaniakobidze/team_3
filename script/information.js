const picture1 = document.getElementById("picture1");
const picture2 = document.getElementById("picture2");
const picture3 = document.getElementById("picture3");
const picture4 = document.getElementById("picture4");
const input1 = document.getElementById("allinput1");
const input2 = document.getElementById("allinput2");
const input3 = document.getElementById("allinput3");
const input4 = document.getElementById("allinput4");
const nameinput = document.getElementById("nameinput");
const emailinput = document.getElementById("emailinput");
const numberinput = document.getElementById("numberinput");
const dateinput = document.getElementById("dateinput");
const nameinvalid = document.getElementById("nameinvalid");
const emailinvalid = document.getElementById("emailinvalid");
const numberinvalid = document.getElementById("numberinvalid");
const dateinvalid = document.getElementById("dateinvalid");
const close1 = document.querySelectorAll(".close");
const invalid = document.querySelectorAll(".Invalid-div");
const checkbox = document.querySelector(".first-box");
const button = document.querySelector(".next");
const regexName = /^[A-Za-z]{2,}$/;
const regexEmail = /[a-z0-9]+@redberry.ge/;
const regexNumber = /^5\d{8}$/;
const regexDate = /^(0[1-9]|[1-2]\d|3[0-1])\/(0[1-9]|1[0-2])\/(19\d{2}|200[0-5])$/;

let active = 0;
// Retrieve stored values from localStorage
const localName = localStorage.getItem('name');
const localEmail = localStorage.getItem('email')
const localNumber = localStorage.getItem("number");
const localDate = localStorage.getItem('date');
// Restore values to the respective elements if they exist

if (localName) {
    nameinput.value = localName;
    const valid = regexName.test(nameinput.value);
    picture1.style.display = valid ? "block" : "none";
    input1.style.backgroundColor = valid ? "" : "#FFEFEF";
    nameinput.style.backgroundColor = valid ? "" : "#FFEFEF";
    nameinput.style.color = valid ? "" : "#DC3545";
    nameinvalid.style.display = valid ? "" : "none";
    checkbox.style.backgroundColor = valid ? "#E9FAF1" : "";
    document.querySelector(".span1").style.display = "none";
    if (valid) {
      checkValid(regexName, regexEmail, regexNumber, regexDate);
    }
  }

if (localEmail) {
    emailinput.value = localEmail;
    const valid = regexEmail.test(emailinput.value);
    picture2.style.display = valid ? "block" : "none";
    input2.style.backgroundColor = valid ? "" : "#FFEFEF";
    emailinput.style.backgroundColor = valid ? "" : "#FFEFEF";
    emailinput.style.color = valid ? "" : "#DC3545";
    emailinvalid.style.display = valid ? "" : "none";
    document.querySelector(".span2").style.display = "none";
    if (valid) {
      checkValid(regexName, regexEmail, regexNumber, regexDate);
    }
  }

if (localNumber) {
    numberinput.value = localNumber;
    const valid = regexNumber.test(numberinput.value);
    picture3.style.display = valid ? "block" : "none";
    input3.style.backgroundColor = valid ? "" : "#FFEFEF";
    numberinput.style.backgroundColor = valid ? "" : "#FFEFEF";
    numberinput.style.color = valid ? "" : "#DC3545";
    numberinvalid.style.display = valid ? "" : "none";
    document.querySelector(".span3").style.display = "none";
    if (valid) {
      checkValid(regexName, regexEmail, regexNumber, regexDate);
    }
  }

if (localDate) {
    dateinput.value = localDate;
    const valid = regexDate.test(dateinput.value);
    picture4.style.display = valid ? "block" : "none";
    input4.style.backgroundColor = valid ? "" : "#FFEFEF";
    dateinput.style.backgroundColor = valid ? "" : "#FFEFEF";
    dateinput.style.color = valid ? "" : "#DC3545";
    dateinvalid.style.display = valid ? "" : "none";
    document.querySelector(".span4").style.display = "none";
    if (valid) {
      checkValid(regexName, regexEmail, regexNumber, regexDate);
    }
  }

nameinput.addEventListener("input", function () {
    const span1 = document.querySelector(".span1");
    localStorage.setItem("name", nameinput.value);
    checkValid(regexName, regexEmail, regexNumber, regexDate);
  
    const valid = regexName.test(nameinput.value);
    picture1.style.display = valid ? "block" : "none";
    input1.style.backgroundColor = valid ? "" : "#FFEFEF";
    nameinput.style.backgroundColor = valid ? "" : "#FFEFEF";
    nameinput.style.color = valid ? "" : "#DC3545";
    nameinvalid.style.display = valid ? "" : "";
    checkbox.style.backgroundColor = valid ? "#E9FAF1" : "";
    
    if (nameinput.value === "") {
      picture1.style.display = "none";
      input1.style.backgroundColor = "";
      nameinput.style.backgroundColor = "";
      nameinput.style.color = "";
      nameinvalid.style.display = "";
      checkbox.style.backgroundColor = "";
      span1.style.display = "block";
    } else {
      span1.style.display = "none";
    }
  });

emailinput.addEventListener("input", function () {
  const span2 = document.querySelector(".span2");
  localStorage.setItem("email", emailinput.value);
  checkValid(regexName, regexEmail, regexNumber, regexDate);

  if (regexEmail.test(emailinput.value)) {
    picture2.style.display = "block";
    input2.style.backgroundColor = "";
    emailinput.style.backgroundColor = "";
    emailinput.style.color = "";
    emailinvalid.style.display = "";
  } else if (emailinput.value == "") {
    input2.style.backgroundColor = "";
    emailinput.style.backgroundColor = "";
    emailinput.style.color = "";
    emailinvalid.style.display = "";
    span2.style.display = "block";
  } else {
    picture2.style.display = "none";
    input2.style.backgroundColor = "#FFEFEF";
    emailinput.style.backgroundColor = "#FFEFEF";
    emailinput.style.color = "#DC3545";
  }
  if (emailinput.value !== "") {
    span2.style.display = "none";
  }
});

numberinput.addEventListener("input", function () {
  const span3 = document.querySelector(".span3");
  localStorage.setItem("number", numberinput.value);
  checkValid(regexName, regexEmail, regexNumber, regexDate);

  if (regexNumber.test(numberinput.value)) {
    picture3.style.display = "block";
    input3.style.backgroundColor = "";
    numberinput.style.backgroundColor = "";
    numberinput.style.color = "";
    numberinvalid.style.display = "";
  } else if (numberinput.value == "") {
    input3.style.backgroundColor = "";
    numberinput.style.backgroundColor = "";
    numberinput.style.color = "";
    numberinvalid.style.display = "";
    span3.style.display = "block";
  } else {
    picture3.style.display = "none";
    input3.style.backgroundColor = "#FFEFEF";
    numberinput.style.backgroundColor = "#FFEFEF";
    numberinput.style.color = "#DC3545";
  }
  if (numberinput.value !== "") {
    span3.style.display = "none";
  }
});

dateinput.addEventListener("input", function (event) {
    const input = dateinput.value;
    const span4 = document.querySelector(".span4");
    localStorage.setItem("date", dateinput.value);
    checkValid(regexName, regexEmail, regexNumber, regexDate);
  
    if (input.length === 2 || input.length === 5) {
      if (event.inputType !== "deleteContentBackward") {
        dateinput.value = input + "/";
      }
    }
  
    if (input.length >= 10) {
      // Format number and replace non-digit characters
      const sanitizedNumber = input.substring(0, 10).replace(/\D/g, '');
      const formattedNumber = sanitizedNumber.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
  
      if (formattedNumber !== input.substring(0, 10)) {
        dateinput.value = formattedNumber;
      }
    }
  
    if (regexDate.test(dateinput.value)) {
        picture4.style.display = "block";
        input4.style.backgroundColor = "";
        dateinput.style.backgroundColor = "";
        dateinput.style.color = "";
        dateinvalid.style.display = "";
      } else if (dateinput.value == "") {
        input4.style.backgroundColor = "";
        dateinput.style.backgroundColor = "";
        dateinput.style.color = "";
        dateinvalid.style.display = "";
        span4.style.display = "block";
      } else {
        picture4.style.display = "none";
        input4.style.backgroundColor = "#FFEFEF";
        dateinput.style.backgroundColor = "#FFEFEF";
        dateinput.style.color = "#DC3545";
      }
    if (input !== "") {
      span4.style.display = "none";
    } 
  });

button.addEventListener("click", () => {
  const inputName = nameinput.value;

  if (regexName.test(inputName)) {
    nameinput.style.color = "";
  }  else if(nameinput.value == ""){
    nameinvalid.style.display = "none";
  }else {
    nameinvalid.style.display = "block";
    emailinvalid.style.display = "none";
  }
  if (regexEmail.test(emailinput.value)) {
    emailinput.style.color = "";
  }  else if(emailinput.value == ""){
    emailinvalid.style.display = "none";
  }else {
    emailinvalid.style.display = "block";
    nameinvalid.style.display = "none";
  }
  if (regexNumber.test(numberinput.value)) {
    numberinput.style.color = "";
  }  else if(numberinput.value == ""){
    numberinvalid.style.display = "none";
  }else {
    numberinvalid.style.display = "block";
    nameinvalid.style.display = "none";
    emailinvalid.style.display = "none";
  }
  if (regexDate.test(dateinput.value)) {
    dateinput.style.color = "";
  } else if(dateinput.value == ""){
    dateinvalid.style.display = "none";
  }else{
    dateinvalid.style.display = "block";
    nameinvalid.style.display = "none";
    emailinvalid.style.display = "none";
    numberinvalid.style.display = "none";
  }
 
  if (
    !regexName.test(inputName) ||
    !regexEmail.test(emailinput.value) ||
    !regexNumber.test(numberinput.value) ||
    !regexDate.test(dateinput.value)
  ) {
    return;
  }else {
    window.location.replace("/experience.html");
  }
});

for (let k = 0; k < close1.length; k++) {
  close1[k].addEventListener("click", () => {
    for (let i = 0; i < invalid.length; i++) {
      invalid[i].style.display = "none";
    }
  });
}
//check 4 input, if they valid check icon display change
function checkValid(regexName, regexEmail, regexNumber, regexDate){
        const pathD = document.querySelector('.path');
        const one = document.querySelector('.one');
    if (
        !regexName.test(nameinput.value) ||
        !regexEmail.test(emailinput.value) ||
        !regexNumber.test(numberinput.value) ||
        !regexDate.test(dateinput.value)
      ) {
        pathD.classList.remove('pathActive') ;
        one.classList.remove('none');
      } else{
        pathD.classList.add('pathActive');
        one.classList.add('none');
      }
};




