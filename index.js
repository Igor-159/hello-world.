const profilButtonNode = document.querySelector('.vector-pen__profil');
const popupNode = document.querySelector('.popup');
const popupProfilNode = document.querySelector('.popup-profil');
const popupCardNode = document.querySelector('.popup-card')
const popupCloseButtonProfilNode = document.querySelector('.button-close-popup-profil');
const popupCloseButtonCardNode = document.querySelector('.button-close-popup-card')
const profilTitleNode = document.querySelector('.profil__title')
const profilSubtitleNode = document.querySelector ('.profil__subtitle')
const formProfilNode = document.querySelector('.form')
const profilNameNode = document.querySelector('.form__input-name')
const profilProfessionNode = document.querySelector('.form__input-profession')
const popupSubmitNode = document.querySelector('.form__button')
const cardButtonNode = document.querySelector('.button-open-add_card')
const listCard = document.querySelector('.grid-cards')
const templateElement = document.querySelector('.template')
const inputTitleCard = document.querySelector('.input-title-card')
const inputURLCard = document.querySelector('.input-URL-card')

const cardImgElement = document.querySelector('.grid-card__img')






const CARD_LIST = [
    {title:'Карачаевск',
     URL:'images/kirill-pershin-1088404-unsplash.png'},
    {title:'Эльбрус',
    URL:'images/kirill-pershin-1556355-unsplash.png'},
    {title:'Карачаевск',
    URL:'images/kirill-pershin-1404681-unsplash.png'},
    {title:'Ахтарск',
    URL:'images/kirill-pershin-1556355-unsplash.png'},
    {title:'Саратов',
    URL:'images/kirill-pershin-1404681-unsplash.png'},
    {title:'Астрахань',
    URL:'images/kirill-pershin-1088404-unsplash.png'}   
]

function renderList(){
    const listItems = CARD_LIST.map(composeItem);
    listCard.append(...listItems)
}




function composeItem(item){
    const newItem = templateElement.content.cloneNode(true);
    const cardImg = newItem.querySelector('.grid-card__img');
    cardImg.src = item.URL;
    cardImg.addEventListener('click',handleImgOpenPopup)
    const likeButton = newItem.querySelector('.button_like')
    likeButton.addEventListener('click',handleButtonTogleLike)
    const removeButton = newItem.querySelector('.grid-card__button-remove');
    removeButton.addEventListener('click',removeItem);
    const titleItem = newItem.querySelector('.grid-card__title');
    titleItem.textContent = item.title;
    return newItem
}

function handleImgOpenPopup(event){
    event.target.classList.toggle('grid-card__img-active')
}



function handleButtonTogleLike(event){
    event.target.classList.toggle('button_like-active')
}




function removeItem(event){
    const targetElement = event.target;
    const targetItem = targetElement.closest('.grid-card')
    targetItem.remove()
}

/*profilButtonNode.addEventListener('click',handleButtonPopupClick);
popupCloseButtonProfilNode.addEventListener('click',handleButtonPopupClick);
popupCloseButtonCardNode.addEventListener('click',handleButtonPopupClick)
cardButtonNode.addEventListener('click',handleButtonPopupClick);



/*function handleButtonPopupClick(event){
    const popupOpen = event.target
    if( popupOpen === profilButtonNode){
        popupProfilNode.classList.add('popup__visible')
    };
    if(popupOpen === popupCloseButtonProfilNode){
        popupProfilNode.classList.remove('popup__visible')
    };
    if(popupOpen === cardButtonNode){
        popupCardNode.classList.add('popup__visible')
    };
    if(popupOpen === popupCloseButtonCardNode){
        popupCardNode.classList.remove('popup__visible') 
    };
} 
*/






profilButtonNode.addEventListener('click',handleButtonPopupProfilOpen);
popupCloseButtonProfilNode.addEventListener('click',handleCloseButtonPopupProfil);
popupCloseButtonCardNode.addEventListener('click',handleCloseButtonPopupCard)
cardButtonNode.addEventListener('click',handleButtonPopupCardOpen);


function handleButtonPopupProfilOpen(){
    popupOpen(popupProfilNode)

} 

function handleButtonPopupCardOpen(){
    popupOpen(popupCardNode)
}

function popupOpen(transmitted){
    transmitted.classList.add('popup__visible')
}

function handleCloseButtonPopupProfil(){
    popupClose(popupProfilNode)

} 

function handleCloseButtonPopupCard(){
    popupClose(popupCardNode)

}


function popupClose(transmitted){
    
    transmitted.classList.remove('popup__visible')

}

 











formProfilNode.addEventListener('submit',handleFormSubmit);


function handleFormSubmit(event){
    
event.preventDefault();
const profilNameNode = event. currentTarget.querySelector('.form__input-name');
profilTitleNode.textContent = profilNameNode.value;

event.preventDefault();
const profilProfessionNode = event.currentTarget.querySelector('.form__input-profession')
profilSubtitleNode.textContent = profilProfessionNode.value;

popupProfilNode.classList.remove('popup__visible')
}


function bindAddItemListener(){
    const addButtonElementCard = document.querySelector('.button-add-card')
    addButtonElementCard.addEventListener('click',addNewItem)

}

function addNewItem (){
    const inputURL = inputURLCard.value
   
    const inputText = inputTitleCard.value
    const newCard = composeItem ({title:inputText, URL:inputURL})
    listCard.prepend(newCard)
    inputTitleCard.value = ""
    inputURLCard.value = ""
}








renderList()
bindAddItemListener()
