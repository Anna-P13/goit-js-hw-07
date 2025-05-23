const categoriesList = document.querySelector('#categories');

const categories = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const itemsCount = category.querySelectorAll('ul li').length;

    console.log(`Category: ${title}`);
    console.log(`Element: ${itemsCount}`);
});