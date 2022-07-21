Analogclock();
Digitalclock();
let value = 59;

let hour_hand = document.getElementById("hour_hand");
let minute_hand = document.getElementById("minute_hand");
let second_hand = document.getElementById("second_hand");
let Analog = document.getElementById("Analog");
let Digital = document.getElementById("Digital");
let outer_digital_container = document.querySelector(
  ".outer_digital_container"
);
let Analog_img_container = document.querySelector(".Analog_img_container");

let horizontal_line = document.getElementById("horizontal_line");
//onclick digital
Digital.addEventListener("click", () => {
  horizontal_line.style.left = "63%";
  outer_digital_container.classList.add("outer_digital_container_2");
  Analog_img_container.classList.add("Analog_img_container_2");
});

//onclick analog
Analog.addEventListener("click", () => {
  horizontal_line.style.left = "13%";
  outer_digital_container.classList.remove("outer_digital_container_2");
  Analog_img_container.classList.remove("Analog_img_container_2");
});

function Analogclock() {
  setInterval(() => {
    let date = new Date();
    let P_hour = date.getHours();
    let P_minute = date.getMinutes();
    let P_second = date.getSeconds();
    hrotation = P_hour * 30 + P_minute / 2;
    mrotation = P_minute * 6;
    srotation = P_second * 6;

    hour_hand.style.transform = `rotate(${hrotation}deg)`;
    minute_hand.style.transform = `rotate(${mrotation}deg)`;
    second_hand.style.transform = `rotate(${srotation}deg)`;
  }, 1000);
}

let m = document.querySelector(".minute");
let hour_digital = document.getElementById("hour_digital");
let min_digital = document.getElementById("min_digital");
let sec_digital = document.getElementById("sec_digital");
let am_pm = document.getElementById("am_pm");
function Digitalclock() {
  setInterval(function () {
    let date = new Date();
    Present_hour = date.getHours();
    Present_minute = date.getMinutes();
    Present_second = date.getSeconds();
    //setting digital time

    if (Present_hour >= 12) {
      am_pm.innerText = "PM";
    } else {
      am_pm.innerText = "AM";
    }
    if (Present_hour > 12) {
      Present_hour -= 12;
    }

    if (Present_hour < 10) {
      hour_digital.innerText = "0" + Present_hour;
    } else {
      hour_digital.innerText = Present_hour;
    }
    if (Present_minute < 10) {
      min_digital.innerText = "0" + Present_minute;
    } else {
      min_digital.innerText = Present_minute;
    }
    if (Present_second < 10) {
      sec_digital.innerText = "0" + Present_second;
    } else {
      sec_digital.innerText = Present_second;
    }

    //adding and removing the animation tag
    if (sec_digital.innerText == value) {
      min_digital.classList.add("animation_div");
      setTimeout(() => {
        min_digital.classList.remove("animation_div");
      }, 6000);
    }
    if (min_digital.innerText == value && sec_digital.innerText == value) {
      hour_digital.classList.add("animation_div");
      setTimeout(() => {
        hour_digital.classList.remove("animation_div");
      }, 6000);
    }
    if (am_pm.innerText == "AM" || am_pm.innerText == "PM") {
      am_pm.classList.add("animation_div");
    }
  }, 1000);
}
