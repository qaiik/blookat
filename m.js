function endpoint(id) {
  return `https://fb.blooket.com/c/firebase/id?id=${id}`
}

let checked = 0;

let s = Date.now();
setInterval(()=>{
  let gid = Math.floor(100000 + Math.random() * 900000)
  checked+=1
  fetch(endpoint(String(gid))).then(res=>res.json()).then(data=>{
    checked%15===0 ? console.log(checked) : ""
    data.success === true ? console.log(gid, data.success) : ""
  })
}, 50)
