function bookTicket(movie, seats = 1, pricePerseat = 300){
    if(typeof movie !== "string" && seats || pricePerseat < 0){
        return "Invalid"
    }
    const total = seats * pricePerseat;

return `${movie}: ${seats} seat(s), Total ৳${total}`;

}
console.log(bookTicket("KGF"))