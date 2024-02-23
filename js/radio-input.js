let columns = document.querySelectorAll('.column')
let clickedIndex = -1;
columns.forEach((el,id) => {
    el.addEventListener('click', () => {
        clickedIndex = id;
        columns.forEach((col, i) => {
            if (i <= clickedIndex) {
                col.classList.add('active-column');
            } else {
                col.classList.remove('active-column');
            }
        })
})
})