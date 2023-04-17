const menuGmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamMobile = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carritoIconMenu = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productCartContainer = document.querySelector(".cards-container");
const productDetailAside = document.querySelector("#productDetail");
const productIconContainerX = document.querySelector(".product-detail-close"); 

menuGmail.addEventListener("click", toggleDesktopMenu);
menuHamMobile.addEventListener("click", toglleMobileMenu);
carritoIconMenu.addEventListener("click", toglleAsideCarrito);
productIconContainerX.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu (event) {
    const ifAsideCarritoClose = shoppingCartContainer.classList.contains("inactive")

    if(!ifAsideCarritoClose) {
        shoppingCartContainer.classList.add("inactive")
    }

    desktopMenu.classList.toggle("inactive")
}

function toglleMobileMenu () {
    const ifAsideCarritoClose = shoppingCartContainer.classList.contains("inactive")

    if(!ifAsideCarritoClose) {
        shoppingCartContainer.classList.add("inactive")
    }
    closeProductDetailAside()

    mobileMenu.classList.toggle("inactive")
}

function toglleAsideCarrito () {
    const ifMobileMenuClose = mobileMenu.classList.contains("inactive");
    const ifDesktopMenuClose = desktopMenu.classList.contains("inactive");
    
    if(!ifDesktopMenuClose) {
        desktopMenu.classList.add("inactive")
    }
    
    if(!ifMobileMenuClose) {
        mobileMenu.classList.add("inactive")
    }

    const ifProductDetailAsideClose = productDetailAside.classList.contains("inactive");

    if(!ifProductDetailAsideClose) {
        productDetailAside.classList.add("inactive")
    }

    shoppingCartContainer.classList.toggle("inactive")
}

function openProductDetailAside () {
    shoppingCartContainer.classList.add("inactive")
    productDetailAside.classList.remove("inactive")
}

function closeProductDetailAside () {
    productDetailAside.classList.add("inactive")
}  
 
const productList = [];
productList.push({
    name: "Montura de Acetato",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
})
productList.push({
    name: "Bicicleta",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
})
productList.push({
    name: "Televisor",
    price: 400,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
})

function arrayListProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card")
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside)
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        productCartContainer.appendChild(productCard);
    }
}

arrayListProducts(productList);