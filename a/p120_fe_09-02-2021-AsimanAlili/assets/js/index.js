var btns = document.getElementsByClassName("open-btn");
var change_btns = document.getElementsByClassName("change-btn");
console.log(change_btns);

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var cards = document.getElementsByClassName("my-card");
    if (!cards[i].classList.contains("open")) {
      var opens = document.querySelectorAll(".my-card.open");
      if (opens.length < 2) {
        cards[i].classList.add("open");
        btns[i].innerText = "Hədiyyəni bağla";
      }
    } else {
      cards[i].classList.remove("open");
      btns[i].innerText = "Hədiyyəni aç";
    }
  });
}

for (let i = 0; i < change_btns.length; i++) {
  change_btns[i].addEventListener("click", function () {
    var images = document.querySelectorAll(".my-card img");
    images[i].setAttribute("src", getMeARandomImage());
  });
}

var random_image_url = "./assets/images/";
function getMeARandomImage() {
  var rand = Math.ceil(Math.random() * 7);
  var url = random_image_url + rand + ".jpg";
  return url;
}
