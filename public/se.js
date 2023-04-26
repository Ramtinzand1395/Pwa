//sd
self.addEventListener("install",e =>{
    console.log("install")
})

self.addEventListener("activate",e=>{
    console.log("active")
})

self.addEventListener("fetch",e=>{
    console.log("fetch" , e)
})