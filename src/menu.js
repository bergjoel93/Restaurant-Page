const menuContent = () =>{
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    menuContainer.innerHTML = `
    <h1>Menu</h1>
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

    content.appendChild(menuContainer);
}

export default menuContent;