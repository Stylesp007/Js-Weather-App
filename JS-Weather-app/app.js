

const button = document.querySelector('.submit')
const inputValue = document.querySelector('.inputValue');
const name1 = document.querySelector('.name1');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');


button.addEventListener('click',() => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=`+inputValue.value+`&appid=b92ac238b9ac22eefac74477bd060b21`)
  .then(response => response.json())
  // .then(data => console.log(data))
  .then(data => {
    const nameValue = data['name'];
    const tempVal   = data['main']['temp'];
    const descValue = data['weather'][0]['description'];
    name1.innerHTML = nameValue;
    temp.innerHTML  = tempVal;
    desc.innerHTML  = descValue;
  })

  

.catch(err => alert("Wrong City Name"))
})




 