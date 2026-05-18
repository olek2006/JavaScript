let temperature = prompt("Введіть температуру в кімнаті")
let sensorError = prompt("Чи є помилка датчика? (true/false)") === "true"
let systemStatus

if (sensorError){
    systemStatus = "Помилка датчика температури"
}
else{

    if (temperature < 18){
        systemStatus = "Увімкнути обігрів";
    } else if (temperature >= 18 && temperature <= 25){
        systemStatus = "Температура комфортна";
    } else if (temperature > 25){
        systemStatus = "Увімкнути кондиціонер";
    }
}


console.log(systemStatus);
alert(systemStatus);