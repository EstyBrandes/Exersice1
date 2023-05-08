

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
/**NASA */
let select = s => document.querySelector(s),
    selectAll = s => document.querySelectorAll(s),
    mainSVG = select('#mainSVG')

gsap.set('svg', {
    visibility: 'visible'
})

CustomEase.create("logo1", "M0,0 C0.285,0.028 0.099,0.924 1,1")

let tl1 = gsap.timeline({
    defaults: {
        ease: 'logo1',
        duration: 1.5 * 2
    }
});
tl1.add("N")
    .from('.maskA1', {
        drawSVG: '0% 0%'
    }, "N")
    .from('.maskS', {
        drawSVG: '0% 0%'
    }, "N")
    .from('.maskN', {
        drawSVG: '0% 0%'
    }, "N")
    .from('.maskA2', {
        drawSVG: '100% 100%'
    }, "N")

let tl2 = gsap.timeline({
    defaults: {
        ease: 'logo1',
        duration: 1.25 * 2
    }
});
tl2.add("N")
    .from('.maskA1_2', {
        drawSVG: '0% 0%'
    }, "N")
    .from('.maskS_2', {
        drawSVG: '0% 0%'
    }, "N")
    .from('.maskN_2', {
        drawSVG: '0% 0%'
    }, "N")
    .from('.maskA2_2', {
        drawSVG: '100% 100%'
    }, "N")

let tl3 = gsap.timeline({
    defaults: {
        ease: 'logo1',
        duration: 1 * 2
    }
});
tl3.add("N")
    .from('.maskA1_3', {
        drawSVG: '0% 0%'
    }, "N")
    .from('.maskS_3', {
        drawSVG: '0% 0%'
    }, "N")
    .from('.maskN_3', {
        drawSVG: '0% 0%'
    }, "N")
    .from('.maskA2_3', {
        drawSVG: '100% 100%'
    }, "N")

const mainTl = gsap.timeline({
    repeat: -1
});
mainTl.add(tl1)
    .add(tl2, 0.58)
    .add(tl3, 1.2)
    .to('.whole', {
        opacity: 0
    }, '+=2')
