window.onload = function() {


    const fullName = document.getElementById('fullName');
fullName.addEventListener('input', (e) => {
    const errorBox = document.getElementsByClassName('error-msg')[0]
    const input = fullName.value

    if (!(/\s/g.test(fullName.value))) {

        fullName
            .classList
            .add('is-invalid')
        errorBox.innerHTML = "name must contain two words"
    } else {
        fullName
            .classList
            .remove('is-invalid')
        errorBox.innerHTML = ""
    }

});

const stars = document.querySelectorAll('[id*="Star"]');
console.log(stars)

for (let i = 0; i < stars.length; i += 2) {
    stars[i].style.transform = 'scale(1)';

    // Animate the element
    stars[i].animate([
        {
            transform: 'scale(1)'
        }, {
            transform: 'scale(1.01)'
        }, {
            transform: 'scale(1)'
        }
    ], {
        duration: 4000,
        iterations: Infinity
    });

}
for (let i = 1; i < stars.length; i += 2) {
    stars[i].style.transform = 'scale(0)';

    // Animate the element
    stars[i].animate([
        {
            transform: 'scale(1)'
        }, {
            transform: 'scale(1.001)'
        },
        {
            transform: 'scale(1.002)'
        },
        {
            transform: 'scale(1.003)'
        },
        {
            transform: 'scale(1.002)'
        },
        {
            transform: 'scale(1.001)'
        }, {
            transform: 'scale(1)'
        }

    ], {
        duration: 6000,
        iterations: Infinity
    });

}



const form = document.getElementById('from');
const range = document.getElementById('temper');
const output = document.getElementById('theage');

output.innerHTML = range.value;

range.addEventListener('input', function () {
    output.innerHTML = this.value;
});

function shineHeader() {
    const header = document.getElementById('shining-header');
    header.classList.add('shine');
    setTimeout(() => {
        header.classList.remove('shine');
    }, 1000);
}

shineHeader();






}