let htmlElem = document.children[0];
htmlElem.setAttribute('lang', 'en');

let headElem = document.querySelector('head');

let metaElem = document.createElement('meta');
metaElem.setAttribute('charset', 'UTF-8');

let titleElem = document.createElement('title');
titleElem.innerText = 'My Document';

let styleElem = document.createElement('style');

headElem.append(metaElem, titleElem, styleElem);

let bodyElem = document.body;

let servicesElem = document.createElement('div');
servicesElem.classList.add('services');

let h2Elem = document.createElement('h2');
h2Elem.classList.add('services__title');
h2Elem.innerHTML = 'Choose Your option';

let descElem = document.createElement('p');
descElem.classList.add('services__desc');
descElem.innerHTML = 'Choose Your optionLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nam doloremque. Magni quam nulla distinctio!';

let listElem = document.createElement('ul');
listElem.classList.add('services__list');

let liElem = document.createElement('li');
liElem.classList.add('services__item');

let h3ItemElem = document.createElement('h3');
h3ItemElem.classList.add('services__item_suptitle');
h3ItemElem.innerHTML = 'Freelancer';

let h2ItemElem = document.createElement('h2');
h2ItemElem.classList.add('services__item_title');
h2ItemElem.innerHTML = 'Initially designed to hold business cards ';

let descItemElem = document.createElement('p');
descItemElem.classList.add('services__item_desc');
descItemElem.innerHTML = 'Amet consectetur adipisicing elit. Ipsum, nam doloremque.';

let buttonItemElem = document.createElement('button');
buttonItemElem.classList.add('services__item_btn');
buttonItemElem.innerText = 'Start here';

liElem.append(h3ItemElem, h2ItemElem, descItemElem, buttonItemElem);
let liElem2 = liElem.cloneNode(true);

let h3Item2Elem = liElem2.querySelector('.services__item_suptitle');
h3Item2Elem.innerHTML = 'Studio';

let h2ItemElem2 = liElem2.querySelector('.services__item_title');
h2ItemElem2.innerHTML = 'The mobile payment service is running';

listElem.append(liElem, liElem2);


servicesElem.append(h2Elem, descElem, listElem);
bodyElem.append(servicesElem);


styleElem.innerHTML = `
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: "Roboto Slab", serif;
        box-size: border-box;
        background-image: url(image/background.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center; 
    }

    .services {
        width: 70%;
        max-width: 800px;
        margin: 0 auto;
        margin-top: 50px
    }

    .services__title {
        font-size: 48px;
        font-weight: 400;
        line-height: 32px;
        color: #FFFFFF;
        text-align: center;
        margin-bottom: 30px;
    }
    
    .services__item_title {
        font-size: 35px;
        font-weight: 400;

        margin-bottom: 30px;
    }

    .services__desc {
        font-size: 18px;
        font-weight: 300;
        line-height: 26px;
        color: #FFFFFF;
        text-align: center;
        
        margin-bottom: 50px;
    }

    .services__item_suptitle {
        font-size: 12px;
        }

    .services__list {
        list-style: none;
        display: flex;
        border-radius: 10px;
        overflow: hidden;
        background-color: #FFFFFF;
    }

    .services__item {
        padding: 60px;
        flex: 1 1;

        text-align: center;
    }

    .services__item_btn {
        padding: 15px 20px;
        border: 3px solid #FFC80A;
        border-radius: 30px;
        background-color: #FFFFFF;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 2px;
        cursor: pointer;
    }

    .services__item_btn:hover {
        padding: 15px 20px;
        border: 3px solid #FFC80A;
        border-radius: 30px;
        background-color: #FFC80A;
        text-transform: uppercase;
        color: #FFFFFF;
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 2px;
        cursor: pointer;
    }

    .services__item_suptitle {
        color: #999;
        font-size: 12px;
        text-transform: uppercase;
    }

    .services__item_desc {
        font-size: 12px;
        letter-spacing: 2px;
        line-height: 28px;
        color: #ccc;
        margin-bottom: 60px;
    }
`;
