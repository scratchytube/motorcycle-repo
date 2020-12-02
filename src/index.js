/****DOM ELEMENT***/
const bikes = document.querySelector('#motorcycle-div')
const submitBtn = document.querySelector("#submit-btn")
const form = document.querySelector('#appointment-form')
const username = document.querySelector('#username')




<<<<<<< HEAD
/****RENDERS***/
=======
const renderLookbook = looksArray => {
  looksArray.forEach(look => {
    const img = document.createElement('img')
    img.src = look.img
    img.className = 'img-bikes'
    img.alt = look.name 
  })
}

>>>>>>> brian
const renderAllMotorcycles = cycleObj => {
  cycleObj.forEach(bike => {
    const img = document.createElement('img')
    img.dataset.id = bike.id
    img.className = 'img-bikes'
    img.src = bike.imageUrl
    img.alt = `${bike.maker} ${bike.name}`
    // form.dataset.id = bike.id
    bikes.append(img)
  })
}

// fake sign in form
// once user presses enter the 'Account text in the header should 
// change to what the user inputs: checking for input value




// render appointments here
const renderAppointments = () => {
  // create appointment tags & attributes
  // give attributes value(s)
  // append data
  // call function in appointmentSubmission's fetch
}

//-----------------------------------//
const appointmentSubmission = event => {
  event.preventDefault()
  // const id = event.target.dataset.id

  const modObj = {
    motorcycle_id: 2, // just hard coding it for now! How do we get the id to be dynamic here ? 
    day: form.querySelector('#day').value,
    time: form.querySelector('#time-input').value
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
    })
  
  event.target.reset()
}

/****EVENTS***/
form.addEventListener('submit', appointmentSubmission)



/****FETCH***/

const getLookbook = () => {
  fetch('http://localhost:3000/api/v1/lookbooks')
  .then(r => r.json())
  .then(renderLookbook)
}

const getMotorcycles = () => {
    fetch('http://localhost:3000/api/v1/motorcycles')
    .then(r => r.json())
    .then(data => renderAllMotorcycles(data))
}

getMotorcycles()
getLookbook()

