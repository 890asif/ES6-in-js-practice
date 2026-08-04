const calculateBMI = (weight, height)=>{
    if(weight <= 0 || height <= 0){
        return "Invalid";
    } 
let BMI = weight / (height * height)

return Number(BMI.toFixed(2));
}
console.log(calculateBMI(81, 1.68))