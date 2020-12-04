/****DOM ELEMENT***/
const bikes = document.querySelector('#motorcycle-div')
const submitBtn = document.querySelector("#submit-btn")
const form = document.querySelector('#appointment-form')
const username = document.querySelector('#username')
const accountForm = document.querySelector("#account-form")
const modalSubmitBtn = document.querySelector("#submit-btn2")
const acctBtn = document.querySelector("#acct-btn")
const appointments = document.querySelector("#appointment-div")
const apptDate = document.querySelector("#my-appt-date")
const updateApptBtn = document.querySelector("#update-appt")
const closeBtn = document.querySelector(".close-button")
const companyField = document.querySelector("#cycle-input")
const apptsContainer = document.querySelector('#user-appts-div')


// const renderLookbook = looksArray => {
//   looksArray.forEach(look => {
//     const img = document.createElement('img')
//     img.src = look.img
//     // img.className = 'img-bikes'
//     img.alt = look.name 
//   })
// }

const renderAllMotorcycles = cycleObj => {
  cycleObj.forEach(bike => {
    const img = document.createElement('img')
    img.dataset.id = bike.id
    img.className = 'img-bikes'
    img.src = bike.imageUrl
    img.alt = `${bike.maker} ${bike.name}`
    form.dataset.id = bike.id
    bikes.append(img)
  })
}


const renderAppointments = (apptObj) => {
  apptObj.forEach(appt => {
    const myApptForm = document.createElement('form')
    myApptForm.dataset.id = appt.id
    myApptForm.innerHTML = `
      <br><br><br>
      <span class="close-button">x</span>
      <label for="">Date of appointment: </label>
      <input id="my-appt-date" type="text" placeholder="${appt.day} ${appt.time}">
      <label for="">Company: </label>
      <input id="cycle-input" type="text" placeholder="Cycle Heaven"><br>
      <button id="update-appt">Update Appointment</button>
    `
    apptsContainer.append(myApptForm)
  })
}

//-----------------------------------//
const appointmentSubmission = event => {
  event.preventDefault()
  // const appointmentId = form.dataset.id
  // motorcycle_id: 2, // just hard coding it for now! How do we get the id to be dynamic here ? 
  const modObj = {
    day: form.querySelector('#day').value,
    time: form.querySelector('#time-input').value,
    // increment motorcycle_id + 1 and stop when it hits 10
    motorcycle_id: form.querySelector('#make').value
  }
  // console.log(modObj)

    fetch("http://localhost:3000/api/v1/modification_requests", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(modObj)
    })
    .then(r => r.json())
    .then(data => {
      console.log('Success:', data)
      // renderAppointments(data)
    })
  
  event.target.reset()
}

// fake sign in form
// once user presses enter the 'Account text in the header should 
// change to what the user inputs: checking for input value
const accountSubmit = event => {
  event.preventDefault()

  const username = accountForm.querySelector("#username").value
  // console.log(username)
  // username.value = document.querySelector("#acct-text")
  acctBtn.textContent = `Hi ${username}!`
  
  event.target.reset()
}

// DELETE FUNCTION HERE //
// const deleteAppt = event => {
//   console.log(event.target)

//   id = event.target.dataset.id
//   const form = event.target.closest('form')

//   fetch(`http://localhost:3000/api/v1/modification_requests/${id}`, {
//     method: 'DELETE',
//   })
//   form.remove()
// }

/****EVENTS***/
form.addEventListener('submit', appointmentSubmission)
accountForm.addEventListener('submit', accountSubmit)
// myApptForm.addEventListener('click', deleteAppt)

/****FETCH***/

// const getLookbook = () => {
//   fetch('http://localhost:3000/api/v1/lookbooks')
//   .then(r => r.json())
//   .then(renderLookbook)
// }

const getMotorcycles = () => {
  fetch('http://localhost:3000/api/v1/motorcycles')
  .then(r => r.json())
    .then(data => {
      console.log(data)
      renderAllMotorcycles(data)
    })
}

const getAppointments = () => {
  fetch("http://localhost:3000/api/v1/modification_requests")
  .then(r => r.json())
    .then(data => {
      console.log(data)
      renderAppointments(data)
    })
}

getMotorcycles()
getAppointments()
// getLookbook()

