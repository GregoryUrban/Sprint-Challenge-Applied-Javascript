class Carousel {
    constructor(carouselElement){
    this.carouselElement = carouselElement;
    this.left = document.querySelector(`.carousel[left-button']`);
    this.right = document.querySelector(`.carousel[right-button']`);
    this.imgagez = document.querySelectorAll(`.carousel`);
    }
}

let carousel = document.querySelector(".carousel").forEach(element => {
    
});;

// let carousel = document.querySelectorAll('.left-button').forEach( carouselElement => new Carousel(carouselElement));
let tabs = document.querySelectorAll('.tab').forEach( tab => new Carousel(tab));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/