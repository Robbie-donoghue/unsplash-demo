const form = document.getElementById('form')
const imageContainer = document.getElementById('img-container')

const announcer = document.getElementById('announcer')
let randomButton = document.getElementById(`randomize-button`)
let images = []
let currentImgIndex = 0
form.addEventListener('submit' , function(event)
{
    event.preventDefault()
    console.log(event)
    let query = event.target.input.value
    search(query)
})

 async function search(queryParam)
{
    let response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${queryParam}&client_id=AZ_4LsnWx6O5xRBgmv8rFnJUhMkfloyNuuyAVp3OBM8`)
    console.log(response)
    let data = await response.json()
    images = data.results
    createImages(images[currentImgIndex])
    // imageContainer.appendChild(img)
}

function createImages(image)
{
    imageContainer.innerHTML= ''
    let imgTag= document.createElement('img')
    imgTag.src = image.urls.raw
    imgTag.alt = image.alt_description // sets alt tahg for screen readers
    imageContainer.appendChild(imgTag)
    announceAltText(image.alt_description)
}

function announceAltText(altText)
{
    announcer.textContent = `New image displayed: ${altText}`
}

randomButton.addEventListener(`click` ,  function()
{
 if(images.length > 0)
 {
    currentImgIndex= Math.floor(Math.random() * images.length)
    createImages(images[currentImgIndex])  
 }   
})
