function endpoint(id) {
  return `https://fb.blooket.com/c/firebase/id?id=${id}`
}

let i = 50000

setInterval(()=>{
  i+=1
  fetch(endpoint(String(i))).then(res=>res.json()).then(data=>{
    console.log(i, data.success)
  })
}, 10)
