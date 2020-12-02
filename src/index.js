/****DOM ELEMENT***/
const bikes = document.querySelector('#motorcycle-div')








/****RENDERS***/
// render one motorcycle here //



// ----------- //
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


/****EVENTS***/
// on mouse over
// hover event displays info for a single motorcycle  //
bikes.addEventListener('mouseover', event => {
  event.target.style.color = 'white';
  console.log(event.target)
})



/****FETCH***/

const getMotorcycles = () => {
    fetch('http://localhost:3000/api/v1/motorcycles')
    .then(r => r.json())
    .then(data => renderAllMotorcycles(data))
}

getMotorcycles()

