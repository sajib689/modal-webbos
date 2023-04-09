const cardButtons = document.querySelectorAll('.btn')
const modalOuter = document.querySelector('.modal-outer')
const modalInner = document.querySelector('.modal-inner')
function handleCardButtonClick (event) {
    event.preventDefault()
    const button = event.currentTarget;
    const card = button.closest('.card');
//    Grab the image src
    const imgSrc = card.querySelector('img').src;
    const desc = card.querySelector('.title').textContent;
    console.log(desc);
    modalInner.innerHTML= `
        <img width='200' height='300' src="${imgSrc.replace('200', '300')}" alt="${desc}" />
        <h2>${desc}</h2>
    `;
    // Show the modal
    modalOuter.classList.add('open');
}

cardButtons.forEach(button => 
    button.addEventListener('click', 
    handleCardButtonClick)
    )

    function closeModal () {
        modalOuter.classList.remove('open');
    }
    modalOuter.addEventListener('click', function (event) {
        const isOutside = !event.target.closest('.modal-inner');
        if(isOutside === true) {
            closeModal () 
        }
    })

    window.addEventListener('keydown', event => {
        if(event.key === 'Escape'){
            closeModal () 
        }
    })