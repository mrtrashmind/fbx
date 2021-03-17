const cards = document.querySelector('.kitekat__cards'),
    card = document.querySelectorAll('.kitekat__card'),
    round = document.querySelectorAll('.kitekat__round');

let color = document.querySelectorAll('.svg-color');

function toggle(i) {
    if(color[i].classList.contains('active-svg') && round[i].classList.contains('active-round')) {
        color[i].classList.remove('active-svg');
        round[i].classList.remove('active-round');
    } else {
        color[i].classList.add('active-svg');
        round[i].classList.add('active-round');
    }
}

function hover(i) {
    // if(color[i].classList.contains('def-border-hover') && round[i].classList.contains('def-round-hover')) {
    //     color[i].classList.remove('def-border-hover');
    //     round[i].classList.remove('def-round-hover');
    // } else {
    //     color[i].classList.add('def-border-hover');
    //     round[i].classList.add('def-round-hover');
    // }
    if(!color[i].classList.contains('active-svg')) {
        if(!color[i].classList.contains('def-border-hover') && !round[i].classList.contains('def-round-hover')) {
            color[i].classList.add('def-border-hover');
            round[i].classList.add('def-round-hover');
        }
    }

}

card.forEach((item, i) => {
    item.addEventListener('click', () => {
        toggle(i);
    });

    item.addEventListener('mouseover', (e) => {
        hover(i);
        // setTimeout(hover(i), 11000);
    });

    item.addEventListener('mouseout', () => {
        color[i].classList.remove('def-border-hover');
        round[i].classList.remove('def-round-hover');
    });
});
