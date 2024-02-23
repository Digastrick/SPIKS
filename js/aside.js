let aside = document.querySelector('aside');
let visionList = document.querySelectorAll('aside__list');
let listArray = [
    {
        title: 'Classification',
        items: ['100% Indica', '100% Sativa', '>50% Indica', '>50% Sativa']
    },
    {
        title: 'Production Method',
        items: ['Indoor', 'Outdoor', 'Greenhouse', 'Light Deprivation', 'Mixed Light', 'Other']
    },
    {
        title: 'Size',
        items: ['Flower', 'Pre-Roll Flower', 'Pre-Roll Infused', 'Pre-Roll Leaf', 'Shake', 'Smalls', 'Trim', 'Shake', 'Keef', 'Fresh Frozen']
    }
];

listArray.forEach((el) => {
    let newList = document.createElement('ul');
    newList.classList.add('aside__list')
    let listItemTitle = document.createElement('div');
    let listTitle = document.createElement('h3');
    listItemTitle.classList.add('list-title');
    listItemTitle.classList.add('arrow-list');
    listTitle.textContent = el.title;
    listTitle.addEventListener('click', () => {
        newList.classList.toggle('open');
        listItemTitle.classList.toggle('arrow-list');
        listTitle.classList.toggle('rotateArrow');
    });
    
    el.items.forEach((item, index) => {
        let listItem = document.createElement('li');
        listItem.classList.add('aside__list-item');
        
        let checkbox = document.createElement('input');
        checkbox.classList.add('aside__list-checkbox')
        checkbox.type = 'checkbox';
        checkbox.id = `checkbox-${index}`;
        listItem.appendChild(checkbox);
    
        let label = document.createElement('label');
        label.textContent = item;
        label.addEventListener('click', (event) => {
            event.preventDefault();
            checkbox.click();
        });
        listItem.appendChild(label);
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                label.classList.add('checked');
            } else {
                label.classList.remove('checked');
            }
        });
    
        newList.appendChild(listItem);
    });
    
    listItemTitle.appendChild(listTitle);
    listItemTitle.appendChild(newList);
    aside.appendChild(listItemTitle);
});
