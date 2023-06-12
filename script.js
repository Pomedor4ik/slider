const description = {
  name: document.querySelector('#name_active'),
  price: document.querySelector('#price_active')
};
const imgActive = document.querySelector('#img_active');
const sliderList = document.querySelector('#slider_list');
const sliderBottom = document.querySelector('#sliderBottom');
const products = [
  {
    id: 1,
    name: "Chair-ultra",
    price: 11000,
    img: "Furniture.png"
  },
  {
    id: 2,
    name: "Sofa-Comfort",
    price: 5000,
    img: "sofa.jpg"
  },
  {
    id: 3,
    name: "Office chair",
    price: 2000,
    img: "Office-Chair-PNG-Transparent-Image.png"
  },
  {
    id: 4,
    name: "Bed",
    price: 12000,
    img: "bed.jpeg"
  },
];

const renderSlider = (idCandidate = 1) => {
  let indexActive = null;
  products.forEach((product, index) => {
    if (product.id === idCandidate) {
      indexActive = index;
    }
  });
  description.name.innerHTML = products[indexActive].name;
  description.price.innerHTML = `${products[indexActive].price} грн`;
  imgActive.classList.remove('active'); // Remove 'active' class from the image
  setTimeout(() => {
    imgActive.src = `./img/${products[indexActive].img}`;
    imgActive.classList.add('active'); // Add 'active' class to the image after the source has been updated
  }, 300);
  sliderList.innerHTML = '';
  sliderBottom.innerHTML = '';
  products.forEach((product, index) => {
    if (index != indexActive) {
      sliderList.innerHTML += `
      <div id="sliderElement" class="small_block" slider-item="${product.id}">
        <img class="small_block_img" src="./img/${product.img}">
        <p class="small_block_title">${product.name}</p>
        <p class="small_block_price">${product.price} грн</p>
      </div>
      `;
    }
    sliderBottom.innerHTML += index !== indexActive ? `<div id="sliderElement" slider-item="${product.id}" class="slider_item"></div>` : `<div slider-item="${product.id}" class="slider_item_active"></div>`;
  });
  let sliderElements = document.querySelectorAll('#sliderElement');
  sliderElements.forEach(sliderItem => {
    sliderItem.addEventListener('click', () => {
      let idSlider = parseInt(sliderItem.getAttribute('slider-item'));
      renderSlider(idSlider);
    });
  });
};

renderSlider();
