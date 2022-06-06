const fetch = (...args) => import('node-fetch').then(({
    default: fetch
}) => fetch(...args));
const cluster = require("cluster");
const {
    cpus
} = require("os")

const numCPUs = cpus().length;
function endpoint(id) {
    return `https://fb.blooket.com/c/firebase/id?id=${id}`
}
if (cluster.isPrimary) {

    console.log(`master: ${process.pid}`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`death: ${worker.process.pid}`);
    });
    console.log("BlookForcer!")
} else {
    setInterval(() => {
        let gid = Math.floor(100000 + Math.random() * 900000)
        fetch(endpoint(String(gid))).then(res => res.json()).then(data => {
            data.success === true ? console.log(gid, data.success) : ""
            data.success === true ? console.log(data) : ""
        })
    }, 50)
}
