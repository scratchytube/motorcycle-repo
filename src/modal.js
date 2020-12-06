
const triggers = document.getElementsByClassName("trigger");
const triggerArray = Array.from(triggers).entries();
const modals = document.getElementsByClassName("modal");
const closeButtons = document.getElementsByClassName("close-button");

// Then use `for...of`-loop with the index of each item in `triggerArray` 
// for listening to a click event which toggles each modal to open and close
for (let [index, trigger] of triggerArray) {
  let triggerIndex = index;
  function toggleModal() {
    modals[triggerIndex].classList.toggle("show-modal");
  }
  trigger.addEventListener("click", toggleModal);
  closeButtons[triggerIndex].addEventListener("click", toggleModal);
}

const closeWindow = () => {
  const modalClass = document.querySelector('.modal')
  modalClass.style.visibility = 'hidden'
}

const hideAccForm = () => {
  const accForm = document.querySelector("#account-form")
  accForm.style.display = 'none'
}

const displayModalContent = () => {
  const modalDisplay = document.querySelector("#account-form")
  const hideUserOptions = document.querySelector("#signup-signin-div")
  hideUserOptions.style.display = 'none'
  modalDisplay.style.display = 'initial'
}