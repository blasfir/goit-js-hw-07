const ulCategories = document.querySelector('#categories');
const liItems = ulCategories.querySelectorAll('.item');
console.log("Number of categories: " + liItems.length);
liItems.forEach(liItem => {
    const title = liItem.querySelector('h2').textContent;
    console.log("Category: " + title);
    const list = liItem.querySelector('ul');
    const liElements = list.querySelectorAll('li'); 
    console.log("Elements: " + liElements.length);
});


