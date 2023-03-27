const sliderContainer = document.querySelector('.sliderContainer');
const slideRight = document.querySelector('.rightSlide');
const slideLeft = document.querySelector('.leftSlide');
const upButton = document.querySelector('.upButton');
const downButton = document.querySelector('.downButton');

const slidesLength = slideLeft.querySelectorAll('div').length;

let activeSlideIndex = 0;


slideLeft.style.top = `${(slidesLength - 1)*100}vh`;
const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if(direction === 'up')
    {
        activeSlideIndex++;
    
    if(activeSlideIndex > slidesLength-1)
    {
        activeSlideIndex = 0;
    }
}
  else if(direction === 'down')
{
    activeSlideIndex--;
    console.log("hello");
    if(activeSlideIndex < 0)
    {
        activeSlideIndex = slidesLength-1;
    }
}
slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
slideLeft.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
}
upButton.addEventListener('click', ()=>
{
    changeSlide('up');
});
downButton.addEventListener('click', ()=>
{
    changeSlide('down');
});

//downButton.addEventListener('click' , () => changeSlide('down'));
