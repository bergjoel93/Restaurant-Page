// import burger from './img/burger.jpg';
// import burger1 from './img/burger1.png';

const homeContent = () =>{
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const mainImage = document.createElement('div');
    mainImage.classList.add('main-img');
    mainImage.innerHTML = `
    <div class="main-text-box">
        <h1>Gourmet Fast Food</h1>
        <div class="main-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </div>
        <button id="order-now">Order Now!</button>
    </div>
    <div class="photo-cred-box">Photo Credit: Valeria Boltneva from <a href="https://www.pexels.com/photo/close-up-photo-of-burger-1639562/">Pexels.com</a></div>
    `;

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    menuContainer.innerHTML = `
    <h1>Most Popular Burgers</h1>
    <div class="button-filter">
        <button>Burgers</button><button>Sammies</button><button>Salads</button><button>Sides</button><button>Drinks</button>
    </div>
    <div class="menu-cards-box">
        <div class="card">
            <div class="card-title">Whiskey River Burger</div>
            <div class="card-img">

            </div>
            <div class="card-info">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div class="card-price">

            </div>
            <div class="order-now-button">
                <button>Add to Bag</button>
            </div>
        </div>
        <div class="card">
            <div class="card-title">Whiskey River Burger</div>
            <div class="card-img">

            </div>
            <div class="card-info">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div class="card-price">

            </div>
            <div class="order-now-button">
                <button>Add to Bag</button>
            </div>
        </div>
        <div class="card">
            <div class="card-title">Whiskey River Burger</div>
            <div class="card-img">

            </div>
            <div class="card-info">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div class="card-price">

            </div>
            <div class="order-now-button">
                <button>Add to Bag</button>
            </div>
        </div>
        <div class="card">
            <div class="card-title">Whiskey River Burger</div>
            <div class="card-img">

            </div>
            <div class="card-info">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div class="card-price">

            </div>
            <div class="order-now-button">
                <button>Add to Bag</button>
            </div>
        </div>
        <div class="card">
            <div class="card-title">Whiskey River Burger</div>
            <div class="card-img">

            </div>
            <div class="card-info">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div class="card-price">

            </div>
            <div class="order-now-button">
                <button>Add to Bag</button>
            </div>
        </div>
        <div class="card">
            <div class="card-title">Whiskey River Burger</div>
            <div class="card-img">

            </div>
            <div class="card-info">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div class="card-price">

            </div>
            <div class="order-now-button">
                <button>Add to Bag</button>
            </div>
        </div>
    </div>
    `;

    content.appendChild(mainImage);
    content.appendChild(menuContainer);
}

export default homeContent;