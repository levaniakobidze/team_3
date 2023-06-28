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

let active = 0;
if (localStorage.getItem("name")) {
  nameinput.value = localStorage.getItem("name");
  const span1 = document.querySelector(".span1");
  span1.style.display = "none";
  let regex = /^[A-Za-z]{2,}$/;
  const input = nameinput.value;
  if (regex.test(input)) {
    picture1.style.display = "block";
    input1.style.backgroundColor = "";
    nameinput.style.backgroundColor = "";
    nameinput.style.color = "";
    nameinvalid.style.display = "";
    checkbox.style.backgroundColor = "#E9FAF1";
  } else if (input === "") {
    picture1.style.display = "none";
    input1.style.backgroundColor = "";
    nameinput.style.backgroundColor = "";
    nameinput.style.color = "";
    nameinvalid.style.display = "";
    checkbox.style.backgroundColor = "";
  } else {
    picture1.style.display = "none";
    input1.style.backgroundColor = "#FFEFEF";
    nameinput.style.backgroundColor = "#FFEFEF";
    nameinput.style.color = "#DC3545";
  }
  if (input !== "") {
    span1.style.display = "none";
  }
  if (input == "") {
    span1.style.display = "block";
  }
}
if (localStorage.getItem("email")) {
  emailinput.value = localStorage.getItem("email");
  const span1 = document.querySelector(".span2");
  span1.style.display = "none";
  const input = emailinput.value;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  const valid = regex.test(input);
  const span2 = document.querySelector(".span2");
  localStorage.setItem("email", input);

  if (valid) {
    picture2.style.display = "block";
    input2.style.backgroundColor = "";
    emailinput.style.backgroundColor = "";
    emailinput.style.color = "";
    emailinvalid.style.display = "";
  } else if (input == "") {
    input2.style.backgroundColor = "";
    emailinput.style.backgroundColor = "";
    emailinput.style.color = "";
    emailinvalid.style.display = "";
  } else {
    picture2.style.display = "none";
    input2.style.backgroundColor = "#FFEFEF";
    emailinput.style.backgroundColor = "#FFEFEF";
    emailinput.style.color = "#DC3545";
    // emailinvalid.style.display = "block";
  }
  if (input !== "") {
    span2.style.display = "none";
  }
  if (input == "") {
    span2.style.display = "block";
  }

}

if (localStorage.getItem("number")) {
  numberinput.value = localStorage.getItem("number");
  const span1 = document.querySelector(".span3");
  span1.style.display = "none";
  const input = numberinput.value;
  const regex = /^5\d{8}$/;
  const valid = regex.test(input);
  const span3 = document.querySelector(".span3");
  localStorage.setItem("number", input);

  if (valid) {
    picture3.style.display = "block";
    input3.style.backgroundColor = "";
    numberinput.style.backgroundColor = "";
    numberinput.style.color = "";
    numberinvalid.style.display = "";
  } else if (input == "") {
    input3.style.backgroundColor = "";
    numberinput.style.backgroundColor = "";
    numberinput.style.color = "";
    numberinvalid.style.display = "";
  } else {
    picture3.style.display = "none";
    input3.style.backgroundColor = "#FFEFEF";
    numberinput.style.backgroundColor = "#FFEFEF";
    numberinput.style.color = "#DC3545";
  }
  if (input !== "") {
    span3.style.display = "none";
  }
  if (input == "") {
    span3.style.display = "block";
  }
}

if (localStorage.getItem("date")) {
  dateinput.value = localStorage.getItem("date");
  const span1 = document.querySelector(".span4");
  span1.style.display = "none";
  const input = dateinput.value;
  const regex = /^\d{2} \d{2} \d{4}$/;
  const regex1 = /^\d{2}-\d{2}-\d{4}$/;
  const valid = regex.test(input);
  const valid1 = regex1.test(input);
  const span4 = document.querySelector(".span4");
  localStorage.setItem("date", input);
  if (valid || valid1) {
    picture4.style.display = "block";
    input4.style.backgroundColor = "";
    dateinput.style.backgroundColor = "";
    dateinput.style.color = "";
    dateinvalid.style.display = "";
  } else if (input == "") {
    input4.style.backgroundColor = "";
    dateinput.style.backgroundColor = "";
    dateinput.style.color = "";
    dateinvalid.style.display = "";
  } else {
    picture4.style.display = "none";
    input4.style.backgroundColor = "#FFEFEF";
    dateinput.style.backgroundColor = "#FFEFEF";
    dateinput.style.color = "#DC3545";
  }
  if (input !== "") {
    span4.style.display = "none";
  }
  if (input == "") {
    span4.style.display = "block";
  }
}
nameinput.addEventListener("input", function () {
  let regex = /^[A-Za-z]{2,}$/;
  const input = nameinput.value;
  const span1 = document.querySelector(".span1");
  localStorage.setItem("name", input);

  if (regex.test(input)) {
    picture1.style.display = "block";
    input1.style.backgroundColor = "";
    nameinput.style.backgroundColor = "";
    nameinput.style.color = "";
    nameinvalid.style.display = "";
    checkbox.style.backgroundColor = "#E9FAF1";
  } else if (input === "") {
    picture1.style.display = "none";
    input1.style.backgroundColor = "";
    nameinput.style.backgroundColor = "";
    nameinput.style.color = "";
    nameinvalid.style.display = "";
    checkbox.style.backgroundColor = "";
  } else {
    picture1.style.display = "none";
    input1.style.backgroundColor = "#FFEFEF";
    nameinput.style.backgroundColor = "#FFEFEF";
    nameinput.style.color = "#DC3545";
  }
  if (input !== "") {
    span1.style.display = "none";
  }
  if (input == "") {
    span1.style.display = "block";
  }
});

emailinput.addEventListener("input", function () {
  const regex = /[a-z0-9]+@redberry.ge/;
  const valid = regex.test(emailinput.value);
  const span2 = document.querySelector(".span2");
  localStorage.setItem("email", emailinput.value);

  if (valid) {
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
  } else {
    picture2.style.display = "none";
    input2.style.backgroundColor = "#FFEFEF";
    emailinput.style.backgroundColor = "#FFEFEF";
    emailinput.style.color = "#DC3545";
    // emailinvalid.style.display = "block";
  }
  if (emailinput.value !== "") {
    span2.style.display = "none";
  }
  if (emailinput.value == "") {
    span2.style.display = "block";
  }
});

numberinput.addEventListener("input", function () {
  const regex = /^5\d{8}$/;
  const valid = regex.test(numberinput.value);
  const span3 = document.querySelector(".span3");
  localStorage.setItem("number", numberinput.value);

  if (valid) {
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
  } else {
    picture3.style.display = "none";
    input3.style.backgroundColor = "#FFEFEF";
    numberinput.style.backgroundColor = "#FFEFEF";
    numberinput.style.color = "#DC3545";
  }
  if (numberinput.value !== "") {
    span3.style.display = "none";
  }
  if (numberinput.value == "") {
    span3.style.display = "block";
  }
});

// dateinput.addEventListener("input", function () {
//   const regex = /^\d{2} \d{2} \d{4}$/;
//   const regex1 = /^\d{2}-\d{2}-\d{4}$/;
//   const valid = regex.test(dateinput.value);
//   const valid1 = regex1.test(dateinput.value);
//   const span4 = document.querySelector(".span4");
//   localStorage.setItem("date", dateinput.value);
//   if (valid || valid1) {
//     picture4.style.display = "block";
//     input4.style.backgroundColor = "";
//     dateinput.style.backgroundColor = "";
//     dateinput.style.color = "";
//     dateinvalid.style.display = "";
//   } else if (dateinput.value == "") {
//     input4.style.backgroundColor = "";
//     dateinput.style.backgroundColor = "";
//     dateinput.style.color = "";
//     dateinvalid.style.display = "";
//   } else {
//     picture4.style.display = "none";
//     input4.style.backgroundColor = "#FFEFEF";
//     dateinput.style.backgroundColor = "#FFEFEF";
//     dateinput.style.color = "#DC3545";
//   }
//   if (dateinput.value !== "") {
//     span4.style.display = "none";
//   }
//   if (dateinput.value == "") {
//     span4.style.display = "block";
//   }


// });
dateinput.addEventListener("input", function () {
    const input = dateinput.value;
    const regex = /^(0[1-9]|[1-2]\d|3[0-1])\/(0[1-9]|1[0-2])\/(19\d{2}|200[0-5])$/;
    const valid = regex.test(dateinput.value);
    const span4 = document.querySelector(".span4");
  localStorage.setItem("date", input);

  if (input.length === 2 || input.length === 5) {
    dateinput.value = input + "/";
  }

  if (input.length === 10) {
    const day = input.substring(0, 2);
    const month = input.substring(3, 5);
    const year = input.substring(6, 10);
    const valid = regex.test(day);
  }

    // if (valid) {
    //   picture4.style.display = "block";
    //   input4.style.backgroundColor = "";
    //   dateinput.style.backgroundColor = "";
    //   dateinput.style.color = "";
    //   dateinvalid.style.display = "";
    //   dateinput.value = day + "/" + month + "/" + year;
    // } else {
    //   picture4.style.display = "none";
    //   input4.style.backgroundColor = "#FFEFEF";
    //   dateinput.style.backgroundColor = "#FFEFEF";
    //   dateinput.style.color = "#DC3545";
    // }
  

  if (valid) {
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
  } else {
    picture4.style.display = "none";
    input4.style.backgroundColor = "#FFEFEF";
    dateinput.style.backgroundColor = "#FFEFEF";
    dateinput.style.color = "#DC3545";
  }

  if (input !== "") {
    span4.style.display = "none";
  } else {
    span4.style.display = "block";
  }
});



for (let k = 0; k < close1.length; k++) {
  close1[k].addEventListener("click", () => {
    for (let i = 0; i < invalid.length; i++) {
      invalid[i].style.display = "none";
    }
  });
}

button.addEventListener("click", () => {
  const regexName = /^[A-Za-z]{2,}$/;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  const regexNumber = /^5\d{8}$/;
  const inputName = nameinput.value;
  const regexDate = /^\d{2} \d{2} \d{4}$/;
  if (
    regexName.test(inputName) &&
    regexEmail.test(emailinput.value) &&
    regexNumber.test(numberinput.value) &&
    regexDate.test(dateinput.value)
  ) {
    const pathD = document.querySelector('.path');
    const one = document.querySelector('.one');
    pathD.classList.toggle('pathActive');
    one.classList.add('path');
  };

  if (regexName.test(inputName)) {
    nameinput.style.color = "";
  } else {
    nameinvalid.style.display = "block";
    emailinvalid.style.display = "none";
  }
  if (regexEmail.test(emailinput.value)) {
    emailinput.style.color = "";
  } else {
    emailinvalid.style.display = "block";
    nameinvalid.style.display = "none";
  }
  if (regexNumber.test(numberinput.value)) {
    numberinput.style.color = "";
  } else {
    numberinvalid.style.display = "block";
    nameinvalid.style.display = "none";
    emailinvalid.style.display = "none";
  }
  if (regexDate.test(dateinput.value)) {
    dateinput.style.color = "";
  } else {
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
    // const pathD = document.querySelector('.path');
    // pathD.style.display = "block";
    window.location.replace("/experience.html");
  }

});


