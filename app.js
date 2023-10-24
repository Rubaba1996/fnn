

let list = [...document.getElementsByTagName("li")];
list.map(b=>{
b.addEventListener("click",()=>{
if(document.getElementsByClassName("active").length>0){
document.getElementsByClassName("active")[0].classList.remove("active")
}
b.classList.add("active");
})
})



function showImage() {
  let inputText = document.getElementById("imageNameInput").value.toLowerCase();
  let imageContainer = document.getElementById("imageContainer");
  let images = imageContainer.getElementsByTagName("img");
  let h3Elements = imageContainer.getElementsByTagName("h3");

  for (let i = 0; i < images.length; i++) {
    let imageName = images[i].getAttribute("data-name").toLowerCase();
    let h3 = h3Elements[i];

    if (imageName === inputText) {
      images[i].style.display = "block";
      h3.style.display = "block";
      images[i].style.position = "absolute";
      images[i].style.left = "50%";
      images[i].style.transform = "translate(-50%, -50%)";
      h3.style.display="none";
    } else {
      images[i].style.display = "none";
      h3.style.display = "none";
    }
  }
}

let btn2 = document.querySelector('button');
btn2.addEventListener('click',showImage);

let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let images = document.getElementsByClassName('im1');
let a = 0;

next.addEventListener('click',()=>{
  a++;
  if(a > images.length-1){
    a = 0;
  }
  document.getElementsByClassName('show')[0].classList.remove('show');
  images[a].classList.add('show');
})

prev.addEventListener('click',()=>{
  a--;
  if(a < 0){
    a = images.length-1;
  }
  document.getElementsByClassName('show')[0].classList.remove('show');
  images[a].classList.add('show');
})



let list1 = document.getElementsByClassName('li1');
let imgs = document.getElementsByClassName('fll');

let listArray = [...list1];
let imgsArray = [...imgs];

listArray.forEach(lii => {
  lii.addEventListener('click', () => {
    listArray.forEach(li => {
      li.className = "";
    });
    lii.className = "act";
    let value = lii.innerText.toLowerCase(); 
    imgsArray.forEach(imm => {
      if (value === "all") {
        imm.style.display = "block"; 
      } else {
        imm.style.display = "none"; 
        if (imm.getAttribute('data-filter') == value) {
          imm.style.display = "block"; 
        }
      }
    });
  });
});



fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(data => {
  const productsDiv = document.getElementById('products');
  productsDiv.style.marginLeft='70px'
  

  data.slice(14,20).forEach(product => {
    let productDiv = document.createElement('div');
    productDiv.style.marginLeft='30px';
    productDiv.style.marginBottom='40px'

    let image = document.createElement('img');
    image.src = product.image;
    image.style.width='350px';
    image.style.height='350px';
    image.style.borderRadius="4px";
    productDiv.appendChild(image);
    

    let name = document.createElement('h5');
    name.textContent = `Name: ${product.title.slice(0,45)} `;
    productDiv.appendChild(name);
    name.style.marginTop="20px";
    name.style.fontFamily="Roboto1";
    

    const price = document.createElement('h4');
    price.textContent = `Price: $${product.price}`;
    price.style.marginTop="10px";
    price.style.fontFamily="Roboto1";
    price.style.color = "blueviolet";
    productDiv.appendChild(price);

    productsDiv.appendChild(productDiv);
  });
});

