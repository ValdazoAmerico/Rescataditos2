const img = document.getElementById('img')
const hamburger = document.querySelector('.bar-icon')
const logo = document.querySelector('.logo')
const stars = document.getElementById('particles-js')

const TL = new TimelineMax({paused: true})
const animSpeed = 2
const animEaseIn = Expo.easIn

TL.to(stars, 2, {
    scale: 1
}).to(logo, animSpeed, {
    y: 0,
}, 0).to(hamburger, animSpeed, {
    y: 0,
},0).to(img, animSpeed, {
    scale: 1
}, 0).to(stars, animSpeed, {
    scale: 1
})
TL.play()