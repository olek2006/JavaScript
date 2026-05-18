let day = prompt("В який день ви хочете відвідати кінотеатр"),title;

switch(day) {
    case "понеділок":
    case "вівторок":
    case "середа":
        title = "Вартість квитка складає 150 грн";
        break;
    case "четвер":
    case "п'ятниця":
        title = "Вартість квитка складає 200 грн";
        break;
    case "Субота":
    case "Неділя":
        title = "Вартість квитка складає 250 грн"
        break;
    default:
        title = "Помилка введення дня тижня"
        break;
}
console.log(title);
alert(title)