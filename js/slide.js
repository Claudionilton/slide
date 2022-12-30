export default class Slide {
    constructor(slide, wrapper){
        this.slide = document.querySelector(slide)
        this.wrapper = document.querySelector(wrapper)
    }

    onStart(event){
        event.preventDefault();
        console.log('mousedown')
        this.wrapper.addEventListener('mousemove', this.onMove);
    }

    onMove(event){
        console.log('moveu')
    }

    addSlideEvents() {
        this.wrapper.addEventListener('mousedown' , this.onStart)
    }

    bindEvents() {
        this.onStart = this.onStart(this)
    }

    init() {
        this.addSlideEvents();
        this.bindEvents();
        return this;
    }
}