// npm-global command,comes with node 
// npm -- version 

// local dependency - use it to only in this peticular project
// npm i (pacage name)

// global dependency - use it in any project
// npm install -g pacage name
//sudo install -g pacage name(mac)

// pacakage.json - manifest file(store important info about project/pacakage)
//manual approach (create pacakge.json in the root,create properties etc..)
//npn init (step by step,press enp, nter to skip)
//npm init -y (everthing default)

const _ = require('lodash')
const items = [1, [2, [3, [4]]]]
const newItem = _.flattenDeep(items)
console.log(newItem)





























