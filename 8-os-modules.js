
const os = require('os')

// info about current user 

const user = os.userInfo()
console.log(user)


// method returns the system up times in seconds
console.log(`the systm uptime is ${os.uptime()} seconds`)

const currentOS ={
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem :os.freemem()
}
console.log(currentOS)
















