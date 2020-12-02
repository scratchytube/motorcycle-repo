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
    
    bikes.append(img)
  })
}


const appointmentSubmission = event => {
  // console.log(event.target)
  event.preventDefault()
  // const id = event.target.dataset.id

  const modObj = {
    day: form.querySelector('#day').value,
    time: form.querySelector('#time').value,
    description: form.querySelector('#description').value
  }

  console.log(modObj)
    fetch('http://localhost:3000/api/v1/modification_requests', {
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
    // .catch((error) => {
    //   console.error('Error:', error)
    // });
  
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

