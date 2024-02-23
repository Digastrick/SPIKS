let activeCheckboxes = [];
let check;
// Функция для обновления списка активных чекбоксов и отрисовки активных label
function updateActiveCheckboxes() {
    activeCheckboxes = Array.from(document.querySelectorAll('.aside__list-checkbox:checked'));
    check = document.querySelector('label.checked')
    // Очищаем предыдущие отрисованные label
    document.querySelector('.active-labels').innerHTML = '';

    // Отрисовываем активные label
    activeCheckboxes.forEach(checkbox => {
        let labelContainer = document.createElement('div');
        labelContainer.classList.add('label-container');
        const closeButton = document.createElement('span');
        closeButton.classList.add('close-button');
       
        const label = checkbox.parentElement.querySelector('label').textContent;
        const labelElement = document.createElement('p');
        closeButton.addEventListener('click', () => {
            checkbox.checked = false;
            check.classList.remove('checked')
            updateActiveCheckboxes();
        });
        labelElement.classList.add('active-labels__item')
        labelElement.textContent = label;
        labelContainer.appendChild(labelElement)
        labelContainer.appendChild(closeButton)
        document.querySelector('.active-labels').appendChild(labelContainer);
    });
}

document.querySelectorAll('.aside__list-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        updateActiveCheckboxes();
    });
});