let dollar = 43.7

let balance = 210000
let amount_1 = 60000
let amount_2 = 2600 * (dollar + 1)
let amount_3 = 1700 * (dollar + 2)
let total_income = amount_1 + amount_2 + amount_3

let netflix = 9.99 * dollar + 9.99 * (dollar + 1) + 9.99 * (dollar + 2)
let vytraty = netflix + (3500 * 3) + (4000 * 3)
let taxes = 4500 + (0.05 * total_income)
let end_balance = balance + total_income - vytraty - taxes

console.log(`В цьому кварталі Максим витратив ${vytraty} грн`)
console.log(`Загальний дохід Максима за квартал становить ${total_income} грн`)
console.log(`Загальна сума податків становить ${taxes} грн`)
console.log(`Наприкінці кварталу залишок на рахунку Максима становить ${end_balance} грн`)
