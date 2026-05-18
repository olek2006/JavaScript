let genre = prompt("Введіть назву музичного жанру (rock, pop, jazz, classical):"), title

switch (genre) {
    case "rock":
        title = "Увімкнено рок-плейлист";
        break;
    case "pop":
        title = "Увімкнено поп-плейлист";
        break;
    case "jazz":
        title = "Увімкнено джаз-плейлист";
        break;
    case "classical":
        title = "Увімкнено класичну музику";
        break;
    default:
        title = "Жанр не знайдено";
}

console.log(title);
alert(title);