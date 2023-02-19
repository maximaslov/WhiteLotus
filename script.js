const cardsMainContainer = document.querySelector('.nav_btn')

// Product Constructor
const frame = document.getElementById('card_container')

function generateCardsFlowers() {
    const cards = []
    for (let i = 0; i < 67; i++) {
        cards.push(`
            <div data-pid="${data[i].id}" class="card dataset">
                <div class="card_img_frame"><img class="card_img" src="${data[i].image}" alt="image"></div>
                <h4 class="card_name">${data[i].name}</h4>
                <p class="price">Вартість: ${data[i].price}грн</p>
                <button class="card_btn">Замовити</button>
            </div>
        `)
    }
    return cards
        
}
function generateCardsSweet() {
    const cards = []
    for (let i = 67; i < 134; i++) {
        cards.push(`
            <div data-pid="${data[i].id}" class="card dataset">
                <div class="card_img_frame"><img class="card_img" src="${data[i].image}" alt="image"></div>
                <h4 class="card_name">${data[i].name}</h4>
                <p class="price">Вартість: ${data[i].price}грн</p>
                <button class="card_btn">Замовити</button>
            </div>
        `)
    }
    return cards
}
function generateCardsBoxes() {
    const cards = []
    for (let i = 134; i < 195; i++) {
        cards.push(`
            <div data-pid="${data[i].id}" class="card dataset">
                <div class="card_img_frame"><img class="card_img" src="${data[i].image}" alt="image"></div>
                <h4 class="card_name">${data[i].name}</h4>
                <p class="price">Вартість: ${data[i].price}грн</p>
                <button class="card_btn">Замовити</button>
            </div>
        `)
    }
    return cards
}
function generateCardsMans() {
    const cards = []
    for (let i = 195; i < 285; i++) {
        cards.push(`
            <div data-pid="${data[i].id}" class="card dataset">
                <div class="card_img_frame"><img class="card_img" src="${data[i].image}" alt="image"></div>
                <h4 class="card_name">${data[i].name}</h4>
                <p class="price">Вартість: ${data[i].price}грн</p>
                <button class="card_btn">Замовити</button>
            </div>
        `)
    }
    return cards
}
function generateCardsFruitB() {
    const cards = []
    for (let i = 285; i < 350; i++) {
        cards.push(`
            <div data-pid="${data[i].id}" class="card dataset">
                <div class="card_img_frame"><img class="card_img" src="${data[i].image}" alt="image"></div>
                <h4 class="card_name">${data[i].name}</h4>
                <p class="price">Вартість: ${data[i].price}грн</p>
                <button class="card_btn">Замовити</button>
            </div>
        `)
    }
    return cards
}
function generateCardsFruitBasket() {
    const cards = []
    for (let i = 350; i < 404; i++) {
        cards.push(`
            <div data-pid="${data[i].id}" class="card dataset">
                <div class="card_img_frame"><img class="card_img" src="${data[i].image}" alt="image"></div>
                <h4 class="card_name">${data[i].name}</h4>
                <p class="price">Вартість: ${data[i].price}грн</p>
                <button class="card_btn">Замовити</button>
            </div>
        `)
    }
    return cards
}
function generateCardsGiftBasket() {
    const cards = []
    for (let i = 404; i < 454; i++) {
        cards.push(`
            <div data-pid="${data[i].id}" class="card dataset">
                <div class="card_img_frame"><img class="card_img" src="${data[i].image}" alt="image"></div>
                <h4 class="card_name">${data[i].name}</h4>
                <p class="price">Вартість: ${data[i].price}грн</p>
                <button class="card_btn">Замовити</button>
            </div>
        `)
    }
    return cards
}
function generateCardsSets() {
    const cards = []
    for (let i = 454; i < 477; i++) {
        cards.push(`
            <div data-pid="${data[i].id}" class="card dataset">
                <div class="card_img_frame"><img class="card_img" src="${data[i].image}" alt="image"></div>
                <h4 class="card_name">${data[i].name}</h4>
                <p class="price">Вартість: ${data[i].price}грн</p>
                <button class="card_btn">Замовити</button>
            </div>
        `)
    }
    return cards
}
function generateCardsGiftSweets() {
    const cards = []
    for (let i = 477; i < 518; i++) {
        cards.push(`
            <div data-pid="${data[i].id}" class="card dataset">
                <div class="card_img_frame"><img class="card_img" src="${data[i].image}" alt="image"></div>
                <h4 class="card_name">${data[i].name}</h4>
                <p class="price">Вартість: ${data[i].price}грн</p>
                <button class="card_btn">Замовити</button>
            </div>
        `)
    }
    return cards
}
// Event Listener 
window.onload = function() {
    document.addEventListener('click', documentActions)

    function documentActions(e) {
        const targetElement = e.target;
        const main = document.querySelector('.main')
        const cardContent = document.querySelector('.card_container')
        const footer = document.querySelector('.footer')
        const about = document.querySelector('.about')
        const payment = document.querySelector('.payment')
        const delivery = document.querySelector('.delivery')

        if(targetElement.classList.contains('card_btn')) { 
            const productId = targetElement.closest('.card').dataset.pid
            addToCart(targetElement, productId)
            e.preventDefault()
        }
        if(targetElement.classList.contains('button')) { 
            const productId = targetElement.closest('.dataset').dataset.pid
            addToCart(targetElement, productId)
            e.preventDefault()
        }
        if(targetElement.classList.contains('slider_img')) {
            const productId = targetElement.closest('.slider_item').dataset.pid
            openModal(targetElement, productId)
            e.preventDefault()
        }
        if(targetElement.classList.contains('card_img')) {
            const productId = targetElement.closest('.dataset').dataset.pid
            openModal(targetElement, productId)
            e.preventDefault()
        }
        if(targetElement.classList.contains('close') || targetElement.classList.contains('card_modal')) {
            const span = document.getElementsByClassName("close")[0]
            const modal = document.querySelector(".card_modal")
            modal.style.display = "none"
            modal.remove()
        }
        if(targetElement.classList.contains('cart_icon') && !targetElement.classList.contains('cart_opened')) {
            const cartList = document.querySelector('.cart_content')
            if(cartList) {
                openCart()
                main.style.display = "none"
            }
        }
        if(targetElement.classList.contains('logo') || targetElement.classList.contains('name') || targetElement.classList.contains('home')) {
            about.classList.add('none')
            payment.classList.add('none')
            delivery.classList.add('none')
            main.style.display = "grid"
            cardContent.style.display = "none"
            footer.style.display = "block"
        }
        if(targetElement.classList.contains('page')) {
            document.querySelector('.modal__show').classList.remove('modal__show')
            cardContent.style.display = "none"
            if(targetElement.classList.contains('about')) {
                footer.style.display = "none"
                main.style.display = "none"
                about.classList.remove('none')
                payment.classList.add('none')
                delivery.classList.add('none')
            }
            if(targetElement.classList.contains('payment')) {
                footer.style.display = "none"
                main.style.display = "none"
                payment.classList.remove('none')
                about.classList.add('none')
                delivery.classList.add('none')
            }
            if(targetElement.classList.contains('delivery')) {
                footer.style.display = "none"
                main.style.display = "none"
                delivery.classList.remove('none')
                about.classList.add('none')
                payment.classList.add('none')
            }
        }
        if(targetElement.classList.contains('cart_opened')) {
            const cartList = document.querySelector('.cart_list')
            const cartIcon = document.querySelector('.cart_icon')
            cartList.style.display = "none";
            footer.style.display = "block"
            cartIcon.classList.remove('cart_opened')
            cardContent.style.display = "none"
            main.style.display = "grid"
            about.classList.add('none')
            payment.classList.add('none')
            delivery.classList.add('none')
        }
        if(targetElement.classList.contains('trash_icon')) {
            const productId = targetElement.closest('.cart_content').dataset.cartPid
            updateCart(targetElement, productId, false)
            e.preventDefault()
        }
        if(targetElement.classList.contains('item_image')) {
            cardsMainContainer.classList.add('active');
            const main = document.querySelector('.main')
            const cardContainer = document.querySelector('.card_container')
            if(targetElement.classList.contains('flowers_b')) {
                main.style.display = "none"
                cardContainer.style.display = "grid"
                const cardsFlowArr = generateCardsFlowers()
                frame.innerHTML = cardsFlowArr.join('')
            }
            if(targetElement.classList.contains('sweet_b')) {
                main.style.display = "none"
                cardContainer.style.display = "grid"
                const cardsSweetArr = generateCardsSweet()
                frame.innerHTML = cardsSweetArr.join('')
            }
            if(targetElement.classList.contains('boxes')) {
                main.style.display = "none"
                cardContainer.style.display = "grid"
                const cardsBoxesArr = generateCardsBoxes()
                frame.innerHTML = cardsBoxesArr.join('')
            }
            if(targetElement.classList.contains('mans')) {
                main.style.display = "none"
                cardContainer.style.display = "grid"
                const cardsMansArr = generateCardsMans()
                frame.innerHTML = cardsMansArr.join('')
            }
            if(targetElement.classList.contains('fruit_b')) {
                main.style.display = "none"
                cardContainer.style.display = "grid"
                const cardsFruitBArr = generateCardsFruitB()
                frame.innerHTML = cardsFruitBArr.join('')
            } 
            if(targetElement.classList.contains('fruit_baskets')) {
                main.style.display = "none"
                cardContainer.style.display = "grid"
                const cardsFruitBasketArr = generateCardsFruitBasket()
                frame.innerHTML = cardsFruitBasketArr.join('')
            }
            if(targetElement.classList.contains('gift_baskets')) {
                main.style.display = "none"
                cardContainer.style.display = "grid"
                const cardsGiftBasketArr = generateCardsGiftBasket()
                frame.innerHTML = cardsGiftBasketArr.join('')
            }
            if(targetElement.classList.contains('sets')) {
                main.style.display = "none"
                cardContainer.style.display = "grid"
                const cardsSetsArr = generateCardsSets()
                frame.innerHTML = cardsSetsArr.join('')
            }
            if(targetElement.classList.contains('gifts_n_sweets')) {
                main.style.display = "none"
                cardContainer.style.display = "grid"
                const cardsGiftSweetArr = generateCardsGiftSweets()
                frame.innerHTML = cardsGiftSweetArr.join('')
            }
        }
    }


// Add To Cart
    function addToCart(productButton, productId) {
        if(!productButton.classList.contains("_hold")) {
            productButton.classList.add("_hold")
            productButton.classList.add("_fly")

            const cart = document.querySelector(".cart")
            const product = document.querySelector(`[data-pid="${productId}"]`)
            const productImage = product.querySelector(".card_img")

            const productImageFly = productImage.cloneNode(true)

            const productImageWidth = productImage.offsetWidth
            const productImageHeight = productImage.offsetHeight
            const productImageTop = productImage.getBoundingClientRect().top
            const productImageLeft = productImage.getBoundingClientRect().left

            productImageFly.setAttribute('class', '_flyImage _ibg')
            productImageFly.style.cssText = 
            `
            left: ${productImageLeft}px;
            top: ${productImageTop}px;
            width: ${productImageWidth}px;
            height: ${productImageHeight}px;
            `


            document.body.append(productImageFly)

            const cartFlyLeft = cart.getBoundingClientRect().left
            const cartFlyTop = cart.getBoundingClientRect().top

            productImageFly.style.cssText = 
            `
            left: ${cartFlyLeft}px;
            top: ${cartFlyTop}px;
            width: 0px;
            height: 0px; 
            opacity: 0;
            `

            productImageFly.addEventListener('transitionend', function() {
                if(productButton.classList.contains('_fly')) {
                    productImageFly.remove()
                    updateCart(productButton, productId)
                    productButton.classList.remove('_fly')
                }
            })

            
        }
    }

// Update Cart
    function updateCart(productButton, productId, productAdd = true) {
        const cart = document.querySelector('.cart')
        const cartBody = document.querySelector('.cart_body')
        const cartQuantity = cart.querySelector('span')
        const cartProduct = cartBody.querySelector(`[data-cart-pid="${productId}"]`)
        const cartList = document.querySelector('.cart_body')

        if (productAdd) {
            if (cartQuantity) {
                cartQuantity.innerHTML = ++cartQuantity.innerHTML
            } else {
                cart.insertAdjacentHTML('beforeend', `<span class="cart_counter">1</span>`)
            }
            if(!cartProduct) {
                const cartButton = document.querySelector('.cart_btn_buy')
                const sadEmoji = document.querySelector('.cart_empty')
                const cardId = productId - 1
                const createProduct = `
                    <div class="cart_content" data-cart-pid="${productId}">
                        <div class="cart_item" >
                            <div class="cart_img_frame"><img class="cart_img" src="${data[cardId].image}" alt=""></div>
                            <div class="cart_item_content">
                                <h4 class="cart_item_title">${data[cardId].name}</h4>
                                <p class="cart_quantity">Кількість: <span>1</span></p>
                                <p class="cart_price">Ціна: ${data[cardId].price}</p>
                            </div>
                            <div class="cart_icon_frame"><img class="trash_icon" src="assets/trash.png" alt="delete"></div>
                        </div>
                    </div>`
                    cartList.insertAdjacentHTML('afterbegin', createProduct)
                    cartButton.style.display = "block"
                    sadEmoji.style.display = "none"
                    updateStorage()
            } else {
                let productQuantity = cartProduct.querySelector('span')
                productQuantity.innerHTML = ++productQuantity.innerHTML
            }
            productButton.classList.remove('_hold')
        } else {
            const cartProductQuantity = cartProduct.querySelector('span')
            cartProductQuantity.innerHTML = --cartProductQuantity.innerHTML
            if(!parseInt(cartProductQuantity.innerHTML)) {
                cartProduct.remove()
            }
            const cartQuantityValue = --cartQuantity.innerHTML
            if(cartQuantityValue) {
                cartQuantity.innerHTML = cartQuantityValue
            } else {
                cartQuantity.remove()
            }
            const cartChild = document.querySelector('.cart_content')
            const cartButton = document.querySelector('.cart_btn_buy')
            const sadEmoji = document.querySelector('.cart_empty')
            if(!cartChild) {
                cartButton.style.display = "none"
                sadEmoji.style.display = "block"
            }
            updateStorage()
        }
    }

// Local Storage

    const updateStorage = () => {
        let parent = document.querySelector('.cart_body')
        let html = parent.innerHTML
        const cart = document.querySelector('.cart')
        const cartQuantity = cart.querySelector('span').innerHTML
        html = html.trim()
        if (html.length) {
            localStorage.setItem('products', html)
        } else {
            localStorage.removeItem('products')
        }
    }

    
    const initialState = () => {
        if (localStorage.getItem('products')) {
            const cart = document.querySelector('.cart')
            const cartQuantity = cart.querySelector('span')
            document.querySelector('.cart_body').innerHTML = localStorage.getItem('products')
            cartQuantity.innerHTML = localStorage.getItem('products')
            console.log(cartQuantity)
        }
    }

    initialState()
    

// Product Modal
    function openModal(productButton, productId) {
        cardId = productId - 1
        const productItem = document.querySelector(`[data-pid="${productId}"]`)
        const modal = document.querySelector(".card_modal");
        if(modal) {
            const createModalCard = `
                <div data-pid="${productId}" class="card card_modal_content">
                    <div class="modal_img_frame"><img class="modal_img card_img" src="${data[cardId].image}" alt="image"><span class="close">&times;</span></div>
                    <h4 class="modal_card_title">${data[cardId].name}</h4>
                    <p class="modal_description">${data[cardId].description}</p>
                    <div class="modal_card_footer">
                        <p class="modal_price">Вартість: ${data[cardId].price}грн</p>
                        <button class="card_btn modal_btn">Замовити</button>
                    </div>
                </div>`
            modal.insertAdjacentHTML('beforeend', createModalCard)
            modal.style.display = "block"

            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none"
                    }
                }
        } else {
            document.body.insertAdjacentHTML('beforeend', `<div class="card_modal"></div>`)
            cardId = productId - 1
            const productItem = document.querySelector(`[data-pid="${productId}"]`)
            const modal = document.querySelector(".card_modal")

            const createModalCard = `
                <div data-pid="${productId}" class="card card_modal_content">
                    <div class="modal_img_frame"><img class="modal_img" src="${data[cardId].image}" alt="image"><span class="close">&times;</span></div>
                    <h4 class="modal_card_title">${data[cardId].name}</h4>
                    <p class="modal_description">${data[cardId].description}</p>
                    <div class="modal_card_footer">
                        <p class="modal_price">Вартість: ${data[cardId].price}грн</p>
                        <button class="card_btn modal_btn">Замовити</button>
                    </div>
                </div>`
        modal.insertAdjacentHTML('beforeend', createModalCard)
        modal.style.display = "block"

       
        }
    }

// Open Cart
    function openCart() {
        const cardContainer = document.querySelector('.card_container')
        const cartList = document.querySelector('.cart_list')
        const cartIcon = document.querySelector('.cart_icon')
        const footer = document.querySelector('.footer')
        cartList.addEventListener('animationend', function() {
            cartIcon.classList.add('cart_opened')
        })
        footer.style.display = "none"
        cardContainer.style.display = "none"
        cartList.style.display = "block"
    }
}

// Card Seacher 
const domElements = {
    results: document.getElementById('card_container'),
    search: {
        input: document.querySelector('.search'),
        button: document.querySelector('.search_btn')
    }
}
// Filtered Card Generator
function generateCards(data) {
    const cards = []
    for (let i = 0; i < data.length; i++) {
        cards.push(`
            <div data-pid="${data[i].id}" class="card dataset">
                <div class="card_img_frame"><img class="card_img" src="${data[i].image}" alt="image"></div>
                <h4 class="card_name">${data[i].name}</h4>
                <p class="price">Вартість: ${data[i].price}грн</p>
                <button class="card_btn">Замовити</button>
            </div>
        `)
    }
    return cards
}

const main = document.querySelector('.main')
const cardsArr = generateCards(data)
const cardContainer = document.querySelector('.card_container')
const input = document.querySelector('.search')



{
    let searchValue = input.value
    domElements.search.input.oninput = () => {
    searchValue = input.value
        
    }
    // let searchValue = ''
    // domElements.search.input.oninput = (event) => {
    // searchValue = event.target.value
        
    // }

    input.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
          filterSearch();
          main.style.display = "none";
          cardContainer.style.display = "grid";
        }
      });
    // domElements.search.input.addEventListener('keypress', function(event) {
    //     if (event.keyCode === 13) {
    //       filterSearch();
    //       main.style.display = "none";
    //       cardContainer.style.display = "grid";
    //     }
    //   });

    domElements.search.button.addEventListener("click", () => {
        filterSearch()
        main.style.display = "none"
        cardContainer.style.display = "grid"
    })

    // domElements.search.button.addEventListener("keydown", (event) => {
    //     if (event.key === "Enter") {
    //         filterSearch()
    //         main.style.display = "none"
    //         cardContainer.style.display = "grid"
    //     }
    // })

    function filterSearch() {
        const rgx = new RegExp(searchValue, 'i')
        let filteredCardsData = data.filter(card => {
            if(rgx.test(card.name) || rgx.test(card.description)) {
                return true
                
            } else {
                return false
            }
        })
        input.value=''
        domElements.results.innerHTML = generateCards(filteredCardsData).join('')
    }
}
