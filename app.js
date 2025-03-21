const height = document.querySelector("#height")
const weight = document.querySelector("#weight")
const age = document.querySelector("#age")
const genderMale = document.querySelector("#male")
const genderFemale = document.querySelector("#female")
const result = document.querySelector("#result")
const calculateButton = document.querySelector("#calculate")
const clear = document.querySelector("#clear")

calculateButton.addEventListener("click", ()=>{
    const bmi = Number(weight.value)/(Number(height.value)/100)**2
    const roundeBmi = Math.round(bmi*100)/100
    console.log(roundeBmi)

    let feedback=""
    if (roundeBmi<18.5) {
        feedback = `Under Weight: BMI ${roundeBmi}  🟩`
    } else if (roundeBmi>=18.5 && roundeBmi<=24.9) {
        feedback =`Normal Weight: BMI ${roundeBmi} 🟢`
    } else if (roundeBmi>=25 && roundeBmi<=29.9) {
        feedback =`Over Weight: BMI ${roundeBmi} 🟠`
    } else if (roundeBmi>=30) {
        feedback =`Obese: BMI ${roundeBmi} 🔴`
    } else {
        feedback ="Invalid data, plese check your Height & Weight"
    }
    result.innerHTML = feedback
})

clear.addEventListener("click",()=>{
    genderFemale.checked=false
    genderMale.checked=true
    age.value=18
    height.value=180
    weight.value=65
    result.innerHTML="Result:"
})