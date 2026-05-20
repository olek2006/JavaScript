let dollar = 43.7;
let amount_1 = 68000, amount_2 = 2600 * dollar, amount_3 = 1900 * dollar;
let amount = amount_1 + amount_2 + amount_3;
let amount_tax = 4500 + (0.05 * amount);
console.log(`Загальна сума доходу Максима складає ${amount}. В кінці кварталу Максиму необхідно сплатити ${amount_tax}`)
