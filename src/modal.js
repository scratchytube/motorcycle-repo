// Functions 
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}
function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

// Event Listeners
trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// Modal user flow functionality
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