// ВІДЕО ТЕОРІЯ

// for(var i = 100; i > 10; i/=2){
//     console.log(i);
// }
//
// let i = 0;
// while(i < 25){
//     console.log(i);
//     i += 2
// }
//
// let x = 100;
// do{
//     console.log(x)
// } while(x<10);
//
// for(let a = 10; a > 0; a--){
//     if (a == 2) break;
//      if(a % 2 == 0) continue;
//     console.log(a)
// }
//
// nums = [1,2,3,4,5,6];
// for( let i = 0; i < nums.length; i++ ) {
//     console.log("Element is:" + nums[i]);
// }


// ПРАКТИЧНЕ ЗАВДАННЯ
//1
// for(i=0; i<=10; i++){
//     console.log(i);
// }
//2
// let n = prompt("Число дай: ")
// for (i=0; i<n; i++) {
//     if(i % 2 === 0){
//         console.log(i)
//         alert(i)
//     }
// }
//3
// let n = prompt("Введіть число: ")
// let sum = 0
//
// for( let i = 1; i <= n; i++ ) {
//     sum += i;
// }
// console.log(sum)
// alert(sum)
//4
// let n = prompt("Число: ")
// for (let i = n; i >= 1; i--) {
//     console.log(i)
//     alert(i)
// }
//5
// let n = prompt("число: ");
// for (let i = 1; i <= 10; i++) {
//     console.log(n + " * "+ i +" = "+(n * i));
// }
//6
// let pass
// do {
//     pass = prompt("Пароль");
//
//     if (pass !== "admin123") {
//         alert("Пароль неправильний")
//     }
// } while (pass !== "admin123")
// alert("Пароль правильний")
//7
// let prpass = "admin123"
// for( let i = 1; i <= 3; i++){
//     let pass = prompt("Пароль дай: ")
//     if (prpass === pass){
//         alert("Доступ дозволено");
//         break
//     }
//     if(i===3){
//         alert("Доступ заблоковано")
//     }
// }
//8
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }
//9
// let n = prompt("Число дай")
// console.log("Кількість цифр =", n.length)
//10
let secret = 7;
let vgaday;
while (vgaday !== secret) {
    vgaday = prompt("Вгадайте число")
    if (vgaday < secret) {
        alert("Більше")
    }
    else if (vgaday > secret) {
        alert("Менше")
    }
    else if (vgaday === secret) {
        alert("Вгадав")
    }
}
