function myFunction() {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklnopqrstuvwxyz0123456789@#$%^&*"
    let password = ""

    for(i = 0; i < 10; i++) {
        let generate = letters[Math.floor(Math.random() * 62)];
        
        password += generate;
    }

    let result = document.getElementById("result").innerHTML = password;
}