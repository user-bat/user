document.addEventListener('DOMContentLoaded', function () {
    // Получаем текущее значение счетчика из localStorage
    let count = localStorage.getItem('visitCount');

    // Если значение не существует, устанавливаем счетчик в 0
    if (count === null) {
        count = 0;
    }

    // Увеличиваем счетчик на 1
    count++;

    // Обновляем значение счетчика в localStorage
    localStorage.setItem('visitCount', count);

    // Выводим значение счетчика на страницу
    document.getElementById('counter').innerText = count;
});