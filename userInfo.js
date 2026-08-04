function extractUserInfo(userObj) {
    if (!userObj.user?.name) {
        return "Invalid";
    }

    const {
        user: {
            name: userName,
            age: userAge
        },
        hobbies
    } = userObj;

    const [firstHobby = "nothing yet"] = hobbies;

    return `${userName} (${userAge}) likes ${firstHobby}`;
}

console.log(
    extractUserInfo({
        user: { name: "Asif", age: 21 },
        hobbies: ["Coding", "Listening Music"]
    })
);