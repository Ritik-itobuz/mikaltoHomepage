const sliderContainer = document.querySelector(".sliderContainer");
const slideRight = document.querySelector(".rightSlide");
const slideLeft = document.querySelector(".leftSlide");
const upButton = document.querySelector(".upButton");
const downButton = document.querySelector(".downButton");

const slidesLength = slideLeft.querySelectorAll("div").length;

let activeSlideIndex = 0;

let res;

slideLeft.style.top = `${(slidesLength - 1) * 70}vh`;
const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;

    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    console.log("hello");
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }
  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
};
upButton.addEventListener("click", () => {
  changeSlide("up");
});
downButton.addEventListener("click", () => {
  changeSlide("down");
});

//downButton.addEventListener('click' , () => changeSlide('down'));

async function getImages() {
  res = await fetch(`http://localhost:8000`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      alert(err);
    });

  if (!res.error) {
    console.log(res);
  } else {
    console(res.error.message);
  }
  document.getElementById(
    "activity"
  ).style.backgroundImage = `url(${res.Activities.image})`;
  document.getElementById(
    "reconnect"
  ).style.backgroundImage = `url(${res.Activities.imagex})`;
  document.getElementById(
    "heroSection"
  ).style.backgroundImage = `url(${res.Hero.image})`;
  document.getElementById(
    "luxuryImageSection1"
  ).style.backgroundImage = `url(${res.Luxury.image1})`;
  document.getElementById(
    "luxuryImageSection2"
  ).style.backgroundImage = `url(${res.Luxury.image2})`;
  document.getElementById(
    "luxuryImageSection3"
  ).style.backgroundImage = `url(${res.Luxury.image3})`;
  document.getElementById(
    "rightSlide1"
  ).style.backgroundImage = `url(${res.Slider.image1})`;
  document.getElementById(
    "rightSlide2"
  ).style.backgroundImage = `url(${res.Slider.image2})`;
  document.getElementById(
    "rightSlide3"
  ).style.backgroundImage = `url(${res.Slider.image3})`;
  document.getElementById(
    "card1"
  ).style.backgroundImage = `url(${res.Card.image1})`;
  document.getElementById(
    "card2"
  ).style.backgroundImage = `url(${res.Card.image2})`;
  document.getElementById(
    "card3"
  ).style.backgroundImage = `url(${res.Card.image3})`;
  document.getElementById(
    "card4"
  ).style.backgroundImage = `url(${res.Card.image4})`;
  document.getElementById(
    "new"
  ).style.backgroundImage = `url(${res.New.image})`;
}

getImages();

function handleFormSubmit(event) {
  event.preventDefault();
  let formData = {
    checkIn: document.getElementById("checkIn").value,
    checkOut: document.getElementById("checkOut").value,
    adults: document.getElementById("adults").value,
    childrens: document.getElementById("childrens").value,
  };
  console.log(formData);
  fetch("http://localhost:8000/", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(formData),
  }).then(() => {
    alert("Form submitted!");
    document.getElementById("checkIn").value = null;
    document.getElementById("checkOut").value = null;
    document.getElementById("adults").value = "0";
    document.getElementById("childrens").value = "0";
  });
}

function handleTitle(event) {
  event.preventDefault();
  console.log("hello")
  const title = document.getElementById("mainTitle");
  if(title)
  {
    title.innerHTML = "Hotels and Resorts"
  }
}