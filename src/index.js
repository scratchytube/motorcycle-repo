/****DOM ELEMENT***/






/****EVENTS***/








/****RENDERS***/









/****FETCH***/

const getMotorcycles () => {
    fetch('http://localhost:3000/api/v1/motorcycles')
    .then(r => r.json())
    .then(console.log)
}

