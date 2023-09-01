function MainPage () {
    /*
    request to get cards
     */
    const example_cards = () => {
        let cs = [];
        for(let i = 0; i < 25; i++) {
            cs.push(random_card(i));
        }
        return cs;
    }

    let page_wrapper =  document.createElement('div');
    page_wrapper.classList.add('cards_grid_block');

    const grid = new CardsGrid(example_cards());

    const tabs = document.createElement('div')
    tabs.classList.add('nav', 'nav-tabs', 'nav-fill')

    const tab_wrapper = document.createElement('li')
    tab_wrapper.classList.add('nav-item');
    const tab_wrapper_2 = tab_wrapper.cloneNode();

    const all_tickets_tab = document.createElement('a');
    all_tickets_tab.classList.add('nav-link');
    all_tickets_tab.innerHTML = `
        Все карточки <span class="badge text-bg-secondary">25</span>
    `

    const my_tickets_tab = document.createElement('a');
    my_tickets_tab.classList.add('nav-link');
    my_tickets_tab.innerHTML = `
        Мои карточки <span class="badge text-bg-secondary">5</span>
    `
    tab_wrapper.append(all_tickets_tab)
    tab_wrapper_2.append(my_tickets_tab);

    tabs.append(tab_wrapper, tab_wrapper_2)

    page_wrapper.append(tabs)


    grid.FilterByUserId(3)
    page_wrapper.append(grid.html());
    return page_wrapper
}

function random_card(id) {
    let image = 'https://thatsfixable.com/wp-content/uploads/2022/03/furniture-repair-canton-mi-1536x864.jpg'
    let status = ['active', 'in_work', 'closed'][rndInt(3)];
    let location = `${rndInt(5)*100+rndInt(11)} kab.`;
    let text = rndStr(40);
    let title = rndStr(10);
    let author_id = rndInt(5);
    return new CardComponent(id, author_id, title, text, location, status, image);
}

function rndInt(up) {
    return Math.floor(Math.random() * up);
}

function rndStr(length) {
    return Array.from({length}, () => {
        const char = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        const includeSpace = Math.random() < 0.2; // 50% chance of including a space
        return includeSpace ? `${char} ` : char;
    }).join('')
}