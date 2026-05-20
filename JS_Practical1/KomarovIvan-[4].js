let d1 = 100000, d2 = 200000, d3 = 300000, d4 = 150000
let e_kurs = 51.2
let d_kurs = 43.7;
let vsesum = d1 + d2 + d3 + d4
let nalog = 0.05 * vsesum
let chystyi = vsesum - 18000 - nalog
let d_pzh = chystyi * 0.1
let d_dity = chystyi * 0.05
let zal_donat = chystyi - d_pzh - d_dity
let zal_vitrat = zal_donat - 100000
let v_euro = 2500 * e_kurs
let v_doll = 3000 * d_kurs
let v_sum = v_euro + v_doll
let rez = zal_vitrat - v_sum

console.log(`За рік Максим заробив ${vsesum}. Єдиний податок 5% складає ${nalog}. Відрахування у фонди "Повернись живим" та "Діти Героїв" складає ${d_pzh} та ${d_dity} відповідно. На валютну карту сумарно відкладено ще ${v_sum}. Залишок на рахунку Максима складає ${rez}`)
