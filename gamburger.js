
class ListHamburgerTopping {
    constructor(title, price, cal) {
        this.title = title;
        this.price = price;
        this.cal = cal;
    }
    render() {
        return `<div class='newgamburger'><p class='view'>${this.title}</p><p class='view'>${this.price} рублей</p><p class='view'>${this.cal} каллорий</p></div>`;

    }
}

class Hamburger {
    constructor() {
        this.gamburger = [];
        this.topping = [];
    }
    fetchHamburger() {
        this.gamburger = [
            { title: 'big', price: '100', cal: '40' },
            { title: 'small', price: '50', cal: '20' },
        ];
    }
    fetchTopping() {
        this.topping = [
            { title: 'cheese', price: '10', cal: '20' },
            { title: 'salad', price: '20', cal: '5' },
            { title: 'potate', price: '15', cal: '10' },
            { title: 'relish', price: '15', cal: '0' },
            { title: 'souse', price: '20', cal: '5' },
        ];
    }

    renderHamburger() {
        let listHtml = '';
        this.gamburger.forEach(s => {
            const sizeItem = new ListHamburgerTopping(s.title, s.price, s.cal);
            listHtml += sizeItem.render();
        });
        document.getElementsByClassName('gamburger')[0].innerHTML = listHtml;
    }
    renderTopping() {
        let listHtml = '';
        this.topping.forEach(s => {
            const sizeItem = new ListHamburgerTopping(s.title, s.price, s.cal);
            listHtml += sizeItem.render();
        });
        document.getElementsByClassName('topping')[0].innerHTML = listHtml;
    }
}

const gamb = { title: 'big', price: '100', cal: '40' };
const topping = { title: 'relish', price: '15', cal: '0' };

const createItem = ({ title, price, cal }) => {
    return `<div class='choose'><p class='view'>${gamb.title}[]</p><p class='view'>${gamb.price} рублей</p><p class='view'>${gamb.cal} каллорий</p></div>`;
};

const addItem = (list = items) => {
    let itemsList = list.map(
        item => createItem(item)
    ).join(' ');
    document.querySelector('.chooseGamb').insertAdjacentHTML('beforeend', itemsList);
}

addItem();



class Choose extends ListHamburgerTopping {
    constructor() {
        super(title, price, cal);
    }
    fetchChoose() {

    }
    renderChooseGamb() {

        document.getElementsByClassName('chooseGamb')[0].innerHTML = listHtml;
    };
    renderChooseTop() {
        return `<div class='choose'><p class='view'>${topping.title}[]</p><p class='view'>${topping.price} рублей</p><p class='view'>${topping.cal} каллорий</p></div>`;
        document.getElementsByClassName('chooseTop')[0].innerHTML = listHtml;
    };

}
renderChooseGamb();
renderChooseTop();





// calculatePrice() { // Узнать цену 
//     const finishPrice = this.size.price + this.topping.price;

// }
// renderCalculatePrice() {
//     return `<div class=''finishCost>${finishPrice}</div>`;
// }
// calculateCalories() { // Узнать калорийность 
//     const finishCal = this.size.cal + this.topping.cal;

// }
// renderCalculateCalories() {
//     return `<div class=''finishCal>${finishCal}</div>`;
// }

const list = new Hamburger();
list.fetchHamburger();
list.fetchTopping();
list.renderHamburger();
list.renderTopping();
list.renderCalculatePrice();
list.renderCalculateCalories()



