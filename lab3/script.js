import shirts from "./shirts.js"




const cartContainer = document.createElement('div')
    cartContainer.id="cartContainer"

shirts.forEach((element ,index) => {

    console.log(index)
    

    
    const cart = document.createElement('div')
    cart.className='cart'
    const  tshirt =document.createElement("div")
    tshirt.className="tshirt"
    const  info =document.createElement("div")
    info.className="info"
    const  title =document.createElement("div")
    title.className="title"
    const  buttons =document.createElement("div")
    buttons.className="buttons"
    
    
    
    
    
    const img = document.createElement("img");
    img.className="img"
    img.src = element.colors.white.front; 
    console.log(element.default.front)
    
    tshirt.appendChild(img)
    
    
        cart.appendChild(tshirt)
        const title1= document.createElement("label")
        title1.className="name"
        title1.textContent = element.name; // Устанавливаем текст
        
        const subtitle= document.createElement("label")
        subtitle.className="subtitle"
        const colors=element.colors
        subtitle.textContent = "Avaible in "+Object.keys(colors).length +" colors"; // Устанавливаем текст
        
        title.appendChild(title1)
        title.appendChild(subtitle)
        info.appendChild(title)
        info.appendChild(buttons)
        cart.appendChild(info)
        


        const viewButton=document.createElement("button")
        viewButton.className="button"
        viewButton.textContent="Quick View"
        viewButton.id=index
        viewButton.addEventListener("click", () => openQuickView(index));
    
        const seeButton=document.createElement("button")
        seeButton.className="button"
        seeButton.textContent="See page"
        
        
        buttons.appendChild(viewButton)
        buttons.appendChild(seeButton)
        
        
        
        cartContainer.appendChild(cart);
    

});

function openQuickView(num) {
    const id=Number(num)
    const modal = document.getElementById("quickViewModal");
    const title = document.getElementById("quickViewTitle");
    const description = document.getElementById("quickViewDescription");
    const imageFront = document.getElementById("quickViewImageFront");
    const imageBack = document.getElementById("quickViewImageBack");

    title.textContent = shirts[id].name;
    description.textContent = shirts[id].price;
    imageFront.src = shirts[id].colors[Object.keys(shirts[id].colors)[0]].front; // Отображаем первую доступную цветовую картинку
    imageBack.src = shirts[id].colors[Object.keys(shirts[id].colors)[0]].back
    modal.style.display = "block"; // Показываем модальное окно
}

// Закрытие модального окна при нажатии на крестик
const closeModal = document.getElementsByClassName("close")[0];
console.log(closeModal.textContent)
closeModal.onclick = function() {
    console.log("JOPA")
    const modal = document.getElementById("quickViewModal");
    modal.style.display = "none"; // Скрываем модальное окно
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById("quickViewModal");
    if (event.target == modal) {
        modal.style.display = "none"; // Скрываем модальное окно
    }
}







document.body.appendChild(cartContainer);




