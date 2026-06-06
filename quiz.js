"use script"
let score = 0;
let wrong = "";

let answer;

answer = prompt("1. Столиця України?");
if (answer.toLowerCase() === "київ") score++;
else wrong += "1. Столиця України — Київ\n";

answer = prompt("2. Столиця Франції?");
if (answer.toLowerCase() === "париж") score++;
else wrong += "2. Столиця Франції — Париж\n";

answer = prompt("3. Столиця Німеччини?");
if (answer.toLowerCase() === "берлін") score++;
else wrong += "3. Столиця Німеччини — Берлін\n";

answer = prompt("4. Столиця Італії?");
if (answer.toLowerCase() === "рим") score++;
else wrong += "4. Столиця Італії — Рим\n";

answer = prompt("5. Столиця Іспанії?");
if (answer.toLowerCase() === "мадрид") score++;
else wrong += "5. Столиця Іспанії — Мадрид\n";

answer = prompt("6. Столиця Польщі?");
if (answer.toLowerCase() === "варшава") score++;
else wrong += "6. Столиця Польщі — Варшава\n";

answer = prompt("7. Столиця Великої Британії?");
if (answer.toLowerCase() === "лондон") score++;
else wrong += "7. Столиця Великої Британії — Лондон\n";

answer = prompt("8. Столиця Японії?");
if (answer.toLowerCase() === "токіо") score++;
else wrong += "8. Столиця Японії — Токіо\n";

answer = prompt("9. Столиця Канади?");
if (answer.toLowerCase() === "оттава") score++;
else wrong += "9. Столиця Канади — Оттава\n";

answer = prompt("10. Столиця США?");
if (answer.toLowerCase() === "вашингтон") score++;
else wrong += "10. Столиця США — Вашингтон\n";

alert(
    "Вікторину завершено!\n\n" +
    "Набрано балів: " + score + " із 10\n\n" +
    "Неправильні відповіді:\n" +
    (wrong === "" ? "Немає" : wrong)
);