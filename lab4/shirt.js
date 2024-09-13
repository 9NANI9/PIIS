

const title = document.createElement("p")

const shirt = JSON.parse(localStorage.getItem('index'));
document.getElementById("name").textContent=shirt.name
const buttons=[]
const colorKeys = Object.keys(shirt.colors);
let colorClicked = colorKeys[0]; 
let viewClicked="front"


//Containers
const mainContainer= document.createElement("div")
mainContainer.className="mainContainer"
const content=document.createElement("div")
content.className="content"
const imageContainer=document.createElement("div")
imageContainer.className="imageContainer"
const titleContainer=document.createElement("div")
titleContainer.className="titleContainer"
const buttonsContainer=document.createElement("div")
buttonsContainer.className="buttonsContainers"
const upperContainer=document.createElement("div")
upperContainer.className="upperLower"
const lowerContainer=document.createElement("div")
lowerContainer.className="upperLower"
//-------------------------------------------

//TEXT
const price= document.createElement("p")
price.textContent=shirt.price
price.id="price"
const description= document.createElement("p")
description.textContent=shirt.description
description.id="description"
const sideText= document.createElement("p")
sideText.textContent="Side:"
sideText.className="annotation"
const colorText= document.createElement("p")
colorText.textContent="Color:"
colorText.className="annotation"
//-------------------------------------------


//IMAGE
const img = document.createElement("img");
img.className="img"
img.src = "shirt_images/beepboop-red-front.png"; 
//-------------------------------------------

//BUTTONS
const frontButton=document.createElement("button")
frontButton.textContent="Front"
frontButton.className="button"
frontButton.style.color="white"
frontButton.style.backgroundColor="#0d0640"

frontButton.addEventListener("click", () => {
    viewClicked="front"
    img.src = shirt.colors[colorClicked].front; 
 
});




const backButton=document.createElement("button")
backButton.textContent="Back"
backButton.className="button"
backButton.style.color="white"
backButton.style.backgroundColor="#0d0640"
backButton.addEventListener("click", () => {
    viewClicked="back"
    img.src = shirt.colors[colorClicked].back; // Замените на нужный путь к изображению
});


const whiteButton=document.createElement("button")
whiteButton.textContent="White"
whiteButton.className="button"
whiteButton.style.backgroundColor=whiteButton.textContent.toLowerCase()
buttons.push(whiteButton)
const greenButton=document.createElement("button")
greenButton.textContent="Green"
greenButton.className="button"
greenButton.style.backgroundColor=greenButton.textContent.toLowerCase()
buttons.push(greenButton)
const blueButton=document.createElement("button")
blueButton.textContent="Blue"
blueButton.className="button"
blueButton.style.color="white"
blueButton.style.backgroundColor=blueButton.textContent.toLowerCase()
buttons.push(blueButton)
const yellowButton=document.createElement("button")
yellowButton.textContent="Yellow"
yellowButton.className="button"
yellowButton.style.backgroundColor=yellowButton.textContent.toLowerCase()
buttons.push(yellowButton)
const pinkButton=document.createElement("button")
pinkButton.textContent="Pink"
pinkButton.className="button"
pinkButton.style.backgroundColor=pinkButton.textContent.toLowerCase()
buttons.push(pinkButton)
//-------------------------------------------


//PACKING
upperContainer.appendChild(sideText)
upperContainer.appendChild(frontButton)
upperContainer.appendChild(backButton)

lowerContainer.appendChild(colorText)
buttons.forEach(element => {
    element.addEventListener("click", () => {
        colorClicked=element.textContent.toLowerCase()
        img.src=shirt.colors[element.textContent.toLowerCase()][viewClicked]
     });
    if (colorKeys.includes(element.textContent.toLowerCase())) {
        lowerContainer.appendChild(element);
    }
});

buttonsContainer.appendChild(upperContainer)
buttonsContainer.appendChild(lowerContainer)

titleContainer.appendChild(price)
titleContainer.appendChild(description)

imageContainer.appendChild(img)

content.appendChild(titleContainer)
content.appendChild(upperContainer)
content.appendChild(lowerContainer)
//-------------------------------------------

title.textContent=shirt.name
mainContainer.appendChild(imageContainer)
mainContainer.appendChild(content)

document.body.appendChild(mainContainer)