import odinRes from "./images/luca-bravo-8x_fFNrmeDk-unsplash.jpg"

export const home = document.createElement("div");

const headline = document.createElement('h1');
headline.textContent = 'Welcome to Gourmet Haven!';
home.appendChild(headline);

const image = document.createElement('img');
image.src = odinRes ;
image.alt = 'Delicious dishes';
home.appendChild(image);

const description1 = document.createElement('p');
description1.textContent =
    'At Gourmet Haven, we pride ourselves on serving delicious, freshly prepared meals that will tantalize your taste buds. From our signature dishes to our cozy ambiance, we ensure an unforgettable dining experience for you and your loved ones.';
    home.appendChild(description1);

const description2 = document.createElement('p');
description2.textContent =
    'Visit us today and indulge in the flavors of our hand-crafted cuisine. Bon Appétit!';
    home.appendChild(description2);

document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.lineHeight = '1.6';
home.style.textAlign = 'center';
image.style.maxWidth = '100%';
image.style.height = 'auto';
image.style.margin = '1rem 0';
