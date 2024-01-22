const form = document.getElementById('form')
const imageContainer = document.getElementById('img-container')
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
    console.log(data.results[0].urls.raw)

    let img = document.createElement('img')
    img.src = data.results[0].urls.raw
    imageContainer.appendChild(img)
}
