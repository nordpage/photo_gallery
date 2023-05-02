const photos = document.querySelectorAll('.photo');

photos.forEach(photo => {
    const min = -25;
    const max = 25;
    const angle = (Math.floor(Math.random() * (max - min) + min)) + "deg";
    const zIndex = (Math.floor(Math.random() * (5 - 1) + 1)).toString();
    photo.style.transform = "rotate(" + angle + ")";
    photo.style.zIndex = zIndex;
    photo.setAttribute('data-index', zIndex);
    photo.setAttribute('data-angle', angle);

    const title = photo.querySelector('.title');
    photo.addEventListener('click', function (){
        setDefaults();
        const clicked = photo.dataset.clicked;
        if (clicked === "false") {
            photo.style.transform = "rotate(0) scale(1.1,1.1)";
            photo.style.zIndex = "6";
            title.classList.add('selected');
        } else {
            setDefaults()
        }
        photo.setAttribute('data-clicked', clicked === 'false' ? 'true' : 'false')

    })
})

function setDefaults() {
    photos.forEach(photo => {
        const title = photo.querySelector('.title');
        title.classList.remove('selected');
        const angle = photo.dataset.angle;
        const zIndex = photo.dataset.index;
        photo.style.transform = "rotate(" + angle + ") scale(1,1)";
        photo.style.zIndex = zIndex;
    })
}

