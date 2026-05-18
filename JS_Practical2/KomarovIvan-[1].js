let isAuthorized = prompt('Is user authorized (true/false)?') === "true"
let internetSpeed = prompt('How fast is users internet?')
let isBanned = prompt('Is user banned (true/false)?') === "true";

if (isAuthorized === true && internetSpeed >= 20 && isBanned === false){
    console.log("Дані перевірено. Доступ надано");
    alert("Дані перевірено. Доступ надано")
}
else{
    console.log("Дані перевірено. Доступ не надано")
    alert("Дані перевірено. Доступ не надано")
}