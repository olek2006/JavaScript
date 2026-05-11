// if (вираз){
//     [інструкція];
//     [інструкція];
// }

// Усі можливі значення false:
// false
// 0
// 0n
// ""
// null
// undefined
// NaN


// Оператори порівняння
// let a = 2, b = 3, c = "3";
// console.log(a == b);
// console.log(a != b);
// console.log(a > b); //< >= <=
// console.log(b == c);

// let a = 2, b = 3, c;
//
// if (a > b){
//     c = 'a > b'
// } else{
//     c = 'a < b'
// }
// console.log(c)

// if(a > b){
//     c = "a > b"
// } else{
//     if(a < b){
//         c = "a < b"
//     }
//     else{
//         c = "a === b"
//     }
// }
// console.log(c);

// if (a > b){
//     c = "a > b"
// } else if (a < b){
//     c = "a < b"
// } else{
//     c = "a === b"
// }
//
// console.log(c)

// if(a > b)c = "a > b";
// else if(a < b)c = "a < b";
// else c = "a === b";
// console.log(c);


// switch

// let course, title;
// course = prompt("What is the name of the course you want to learn?");
// switch(course) {
//     case "javascript":
//         title = "Мова програмування java script";
//         break;
//     case "Figma":
//         title = "Основи Figma";
//         break;
//     case "Frontend Development":
//     case "HTML":
//     case "CSS":
//         title = "HTML/CSS"
//         break;
//     default:
//         title = "я не знаю що ти хочеш"
//         break;
// }
// alert(title)
//
//
// // чого не через іф тоді ? в чому від світч різниця
// if(course = "javascript")title = "JS";
// console.log(title);

// ЛОГІЧНІ ОПЕРАТОРИ

// Логічне НЕ
// let c = false;
// console.log(!c);
// let b = 'text';
// console.log(!!b);

// Логічне І
// let a = true, b = true, c = false
// console.log(a && b);
// console.log(a && c);

// Логічне АБО
// let a = true, b = true, c = false
// console.log(a && b);
// console.log(a && c);
//
// console.log(a || c);

// Задачка

// let age = prompt("Скільки тобі років?"), info;
// if (age >= 18 && age <= 35){
//     info = "Користувачу від 18 до 35 років"
// }
// else if (age > 35){
//     info = "Користувачу більше 35 років"
// }
// else{
//     info = "Шо"
// }
// alert(info);
