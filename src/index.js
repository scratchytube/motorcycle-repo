/****DOM ELEMENT***/
const bikes = document.querySelector('#motorcycle-div')
const submitBtn = document.querySelector("#submit-btn")
const form = document.querySelector('#appointment-form')
const username = document.querySelector('#username')
const accountForm = document.querySelector("#account-form")
const modalSubmitBtn = document.querySelector("#submit-btn2")
const acctBtn = document.querySelector("#acct-btn")
const appointments = document.querySelector("#appointment-div")
const updateApptBtn = document.querySelector("#update-appt")
const closeBtn = document.querySelector(".close-button")
const companyField = document.querySelector("#cycle-input")
const apptsContainer = document.querySelector('#user-appts-div')
const lookbookDiv = document.querySelector("#lookbook-div")

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


const renderAppointments = apptObj => {
  apptObj.forEach(appt => {
    const myApptForm = document.createElement('form')
    myApptForm.className = 'myappts'
    myApptForm.dataset.id = appt.id
    myApptForm.innerHTML = `
      <br><br><br>
      <span data-id=${appt.id} class="close-button">x</span>
      <label for="">Company: </label>
      <input id="cycle-input" type="text" placeholder="Cycle Heaven" disabled><br>
      <label for="">Date of appointment: </label>
      <input id="my-appt-day" type="text" placeholder="${appt.day}">
      <input id="my-appt-time" type="text" placeholder="${appt.time}">
      <button data-action="update" id="update-appt">Update Appointment</button>
    `
    apptsContainer.append(myApptForm)
  })
}

const renderLookbooks = lookbookObj => {
  lookbookObj.forEach(lookbook => {
    const img = document.createElement('img')
    img.dataset.id = lookbook.id
    img.className = 'lookbook-img'
    img.src = lookbook.imgUrl
    img.alt = `${lookbook.name}`

    lookbookDiv.append(img)
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
    motorcycle_id: 1 // ids now start at 31..
    // motorcycle_id: form.querySelector('#make').value
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

  const modalClass = document.querySelector('.modal-content')
  // const closeBtn = modalCLass.querySelector('.span')
  //closeBtn.addEventListener('')

  
  event.target.reset()
}

// DELETE FUNCTION HERE //
const deleteAppt = event => {
  
  if (event.target.matches('.close-button')) {
    
    const btn = event.target
    const form = btn.closest('.myappts')
    const id = form.dataset.id

    fetch(`http://localhost:3000/api/v1/modification_requests/${id}`, {
    method: 'DELETE',
    })
    .then(r => r.json())
    .then(data => {
      console.log('Success: ', data)
    })

    form.remove()
  } else if (event.target.dataset.action === 'update') {

    const btn = event.target
    const form = btn.closest('.myappts')
    const id = form.dataset.id
    const apptDay = form.querySelector("#my-appt-day");
    const apptTime = form.querySelector("#my-appt-time");

    const apptDateObj = {
      day: apptDay.value,
      time: apptTime.value
    }
    console.log(apptDateObj)
    // debugger

    fetch(`http://localhost:3000/api/v1/modification_requests/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apptDateObj)
    })
    .then(r => r.json())
    .then(console.log)
  }
}

/****EVENTS***/
form.addEventListener('submit', appointmentSubmission)
accountForm.addEventListener('submit', accountSubmit)
apptsContainer.addEventListener('click', deleteAppt)




/****FETCH***/
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

const getLookbook = () => {
  fetch("http://localhost:3000/api/v1/lookbooks")
  .then(r => r.json())
    .then(data => {
      console.log(data)
      renderLookbooks(data)
  })
}

// INITIALIZE 
getMotorcycles()
getAppointments()
getLookbook()

