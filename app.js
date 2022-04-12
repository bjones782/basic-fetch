const dogUrl = "https://dog.ceo/api/breeds/image/random"

const bookUrl = "https://anapioficeandfire.com/api/books"


fetch(dogUrl)
    .then(response => response.json())
    .then(taco => showImage(taco))

function showImage(data) {
    console.log(data.message)
    const dogImage = document.getElementById('dogimage')
    dogImage.src = data.message
    console.log(dogImage)
}

fetch(bookUrl)
    .then(response => response.json())
    .then(data => console.log(data[0].authors))