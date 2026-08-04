function generateReceipt(coustomerName, items, total){
if(!Array.isArray(items) || items.length === 0){
    return "Invalid";
}
return `Receipt for ${coustomerName}\n Items: ${items.join(", ")}\n Total: ৳ ${total} `
 
}
console.log(generateReceipt("Sadia", ["Milk"], 60))