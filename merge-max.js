function mergeInventory(array1, array2){
    if(!Array.isArray(array1, array2)){
        return "invalid"
        
    }
    return[...array1, ...array2]

}

function highestScore(scores){
        if(!Array.isArray(scores)){
            return "invalid"
        }
        return Math.max(...scores)
    }
console.log(mergeInventory([1,2],[3,4]))
console.log(mergeInventory("1,2,3,4,5"))

console.log(highestScore([3,7,2,9,4]))
console.log(highestScore("3,7,2"))

