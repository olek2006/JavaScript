let score = prompt("Введіть кількість балів")
let homeworkDone = prompt("Всі домашні завдання виконані? (true/false)") === "true"
let finalTestPassed = prompt("Фінальний тест пройдено? (true/false)") === "true"

let resultMessage;

if (score >= 70 && homeworkDone === true && finalTestPassed === true){
    resultMessage = "Сертифікат успішно отримано";
}
else{
    resultMessage = "Умови для отримання сертифіката не виконані";
}
console.log(resultMessage);
alert(resultMessage);