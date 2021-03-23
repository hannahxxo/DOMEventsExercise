// DOM Events Exercise

// 1a
const button1 = document.querySelector('#one');

// 1b
button1.onclick = function buttonOne(){
    alert("Cool! You can hear/understand a hummingbird and ants")
}

// button1.onclick = () => alert("Cool! You can hear/understand a hummingbird and ants.");

// 2a
const h3 = document.querySelector(`h3`);

// 2b
h3.addEventListener(`mouseenter`, () => alert("OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one"));

// BONUS

// 3a
const form = document.querySelector(`form`);

// 3b
form.addEventListener(`submit`, q => {
    q.preventDefault();
    const mess = form.elements.quote.value;
    alert(mess);
});

// 4a
const darkMode = document.querySelector(`#dm`);

// 4b
darkMode.addEventListener(`click`, () => {
    for (element of document.querySelectorAll(`*`)){
        element.classList.toggle(`dark-mode`);
    }
});

// 5a
const reality = document.querySelector(`#reality`);

// 5b
let i = 1;
function realityJump(){
  if (i < 3){
    alert("You have successfully moved to another reality");
    i++;
  } else {
    alert("OH NO! You can only move to a new another reality a couple times. You are stuck in this reality!");
    reality.removeEventListener(`click`, realityJump);
  }
}
reality.addEventListener(`click`, realityJump);