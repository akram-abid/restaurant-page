export const contact = document.createElement("div");

const contactSection = document.createElement('div');

const contactHeadline = document.createElement('h1');
contactHeadline.textContent = 'Contact Us';
contactSection.appendChild(contactHeadline);

const address = document.createElement('p');
address.textContent = 'Address: 123 Gourmet Lane, Flavor Town, USA';
contactSection.appendChild(address);

const phone = document.createElement('p');
phone.textContent = 'Phone: (123) 456-7890';
contactSection.appendChild(phone);

const email = document.createElement('p');
email.textContent = 'Email: contact@gourmethaven.com';
contactSection.appendChild(email);

const form = document.createElement('form');

const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.placeholder = 'Your Name';
nameInput.name = 'name';
form.appendChild(nameInput);

const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.placeholder = 'Your Email';
emailInput.name = 'email';
form.appendChild(emailInput);

const messageInput = document.createElement('textarea');
messageInput.placeholder = 'Your Message';
messageInput.name = 'message';
form.appendChild(messageInput);

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Send Message';
form.appendChild(submitButton);

contactSection.appendChild(form);

contact.appendChild(contactSection);

contactSection.style.textAlign = 'center';
contactSection.style.marginTop = '20px';
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.gap = '10px';
form.style.alignItems = 'center';
form.style.marginTop = '20px';
nameInput.style.padding = emailInput.style.padding = messageInput.style.padding = '10px';
submitButton.style.padding = '10px 20px';
submitButton.style.cursor = 'pointer';
