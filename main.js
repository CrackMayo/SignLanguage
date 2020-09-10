var data = [];
fetch('https://dwaapi.juvasquez88.vercel.app/letters')
  .then(res => res.json())
  .then(sign => {
    data.push(sign);
  })
  .catch(err => {
    throw new Error(err.message)
  })
  .finally(() =>  {console.log("Loaded")})

console.log(data)

function printSign (id) {

    //console.log(data[0].letters[id].image)
    url = data[0].letters[id].image
    document.getElementById('img').style.backgroundImage="url(" + url + ")";
}

