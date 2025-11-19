/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterInFeet = 3.2808
const literInGallon = 0.2642
const kiloInPound = 2.2046

let initialValue = 1

let input = document.querySelector("#number")
const convertBtn = document.querySelector("#convert-btn")
let lengthEl = document.querySelector("#length-el")
let volumeEl = document.querySelector("#volume-el")
let massEl = document.querySelector("#mass-el")

console.log("convertBtn")

convertBtn.addEventListener("click", function() {
    convert(input.value)
    input.value = ""
})

function convert(value) {
    console.log(value)
    let inFeet = value * meterInFeet
    let inMeter = value / meterInFeet
    
    let inLiter = value * literInGallon
    let inGallon = value / literInGallon
    
    let inKilo = value * kiloInPound
    let inPound = value / kiloInPound
    
    let lengthStr = createStr("meters", "feet", value, inFeet, inMeter)
    let volumeStr = createStr("liters", "gallons", value, inLiter, inGallon)
    let massStr = createStr("kilos", "pounds", value, inKilo, inPound)
    
    render(lengthStr, volumeStr, massStr)
}

function createStr(type1, type2, value, convertedValue1, convertedValue2) {
    return `${value} ${type1} = ${convertedValue1.toFixed(3)} ${type2} | ${value} ${type2} = ${convertedValue2.toFixed(3)} ${type1}`
}

function render(length, volume, mass) {
    lengthEl.textContent = length
    volumeEl.textContent = volume
    massEl.textContent = mass
}

convert(initialValue)
