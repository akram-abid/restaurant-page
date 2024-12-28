export const menu = document.createElement("div");

const menuSection = document.createElement('div');

const menuHeadline = document.createElement('h1');
menuHeadline.textContent = 'Our Menu';
menuSection.appendChild(menuHeadline);

const menuItems = [
    { name: 'Grilled Salmon', price: '$25', description: 'Freshly grilled salmon served with lemon butter sauce.' },
    { name: 'Classic Cheeseburger', price: '$15', description: 'Juicy beef patty with melted cheese, lettuce, and tomato.' },
    { name: 'Margherita Pizza', price: '$20', description: 'Authentic Italian pizza with fresh tomatoes, mozzarella, and basil.' },
    { name: 'Caesar Salad', price: '$12', description: 'Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.' },
    { name: 'Chocolate Lava Cake', price: '$10', description: 'Rich chocolate cake with a gooey molten center.' }
];

const menuList = document.createElement('ul');
menuItems.forEach((item) => {
    const menuItem = document.createElement('li');
    menuItem.style.marginBottom = '20px';

    const itemName = document.createElement('h2');
    itemName.textContent = `${item.name} - ${item.price}`;
    itemName.style.marginBottom = '5px';

    const itemDescription = document.createElement('p');
    itemDescription.textContent = item.description;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);
    menuList.appendChild(menuItem);
});

menuSection.appendChild(menuList);

menu.appendChild(menuSection);

menuSection.style.textAlign = 'center';
menuSection.style.marginTop = '20px';
menuList.style.listStyleType = 'none';
menuList.style.padding = '0';
menuList.style.maxWidth = '600px';
menuList.style.margin = '0 auto';
