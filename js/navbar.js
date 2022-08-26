const myName = ['Khrystine Icah Masiglat 😀.', 'currently training at Kodego.', 'a Lady Biker.', 'a Driver.', 'a Blackpink fan girl.', 'a Pet Lover.', 'an Online Gamer.', 'an Arcade Gamer.'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function typing() {
    if(count === myName.length) {
        count = 0;
    }
    currentText = myName[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typewriter').textContent = letter;
    if(letter.length === currentText.length) {
        count++;
        index = 0;
    }

    setTimeout(typing, 250);
} () );

const parallax = document.getElementById('parallax');

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
});
