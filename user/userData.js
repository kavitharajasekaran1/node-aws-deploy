const userDataFun = () =>{
    return new Promise((resolve, reject)=>{
         console.log("jjj")
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            let result = res.json();
            resolve(result)
        }).catch((error)=>{
            reject(error)
        })
    })
}

module.exports = {userDataFun};