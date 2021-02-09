// console.log(document.forms[0]);

// document.getElementsByTagName("form")[0].setAttribute("class", "hello");
// document.forms.login.setAttribute("class", "hello");

var inputs = document.getElementsByName("surname");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("blur", function () {
    console.log("Blur");
  });
  inputs[i].onfocus = function () {
    console.log("Focus");
  };
}

var btns = document.getElementsByTagName("button");
btns[0].onclick = function () {
  inputs[0].focus();
};

const showValue = (e) => {
  console.log(e.target.value);
  if (e.target.value.length < 4) {
    var el = document.createElement("small");
    el.setAttribute("class", "error");
    el.style.fontSize = "30px";
    el.innerText = "Şifrənin uzunluğu minimum 4 simvol olmalıdır.";
    e.target.style.border = "1px solid red";
    e.target.after(el);
  }
};

const showCopy = () => {
  return false;
  //   console.log(e.target.value);
};

const submitFunc = (e) => {
  e.preventDefault();
};
