const waking = () => 'Acordando!!' 
const coffeeCall = () => 'Bora tomar café!!'
const sleep = () => 'Partiu dormir!!'
const doingThings = (callback) => callback()
console.log(doingThings(waking))
