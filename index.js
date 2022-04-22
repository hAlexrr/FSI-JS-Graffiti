
// Select some elements...
let header = document.querySelector('#page-header')
header.style.textAlign = 'left'

let dogImages = document.querySelectorAll('.dog-image')
for( let img of dogImages){
    img.style.borderRadius = '50px';
    img.style.transform = 'rotate(180deg)';
}

let dogNames = document.querySelectorAll('.dog-name')

for ( let name of dogNames ){
    name.style.textAlign = 'left';
}

let footer = document.querySelector('.footer')

footer.style.color = 'blue'