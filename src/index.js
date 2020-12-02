/****DOM ELEMENT***/
const bikes = document.querySelector('#motorcycle-div')
const submitBtn = document.querySelector("#submit-btn")
const form = document.querySelector('#appointment-form')

/****RENDERS***/

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

// render appointments here
const renderAppointments = () => {
  
}

//-----------------------------------//
const appointmentSubmission = event => {
  event.preventDefault()
  // const id = event.target.dataset.id

  const modObj = {
    motorcycle_id: 2,
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

const getMotorcycles = () => {
    fetch('http://localhost:3000/api/v1/motorcycles')
    .then(r => r.json())
    .then(data => renderAllMotorcycles(data))
}

getMotorcycles()

