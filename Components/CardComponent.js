class CardComponent {
    photo_banner = 'https://sklad-vlk.ru/d/cml_b29980cb_b3733bd1.jpg';
    constructor(id, author_id, title, text, location, status, image_src=null) {
        this.id = id;
        this.author_id = author_id;
        this.card_title = title;
        this.card_text = text;
        this.card_location = location;
        this.status = status
        this.card_image = image_src || this.photo_banner;
    }

    html() {
        let card = document.createElement('div')
        card.classList.add('card');
        card.setAttribute('data-id', this.id)
        card.setAttribute('data-author-id', this.author_id)
        let card_status_color;
        switch (this.status) {
            case 'active':
                card_status_color = 'text-bg-primary';
                break;
            case 'in_work':
                card_status_color = 'text-bg-success';
                break;
            case 'closed':
                card_status_color = 'text-bg-secondary';
                break;
        }
        card.innerHTML = `
            <a href="/ticket/${this.id}" class="stretched-link"></a>
            <img src="${this.card_image}" class="card-img-top" alt="ticket photo">
            <div class="card-body">
                <h5 class="card-title">${this.card_title}</h5>
                <div class="card-text">${this.card_text}</div>
            </div>
            <div class="card-footer">
                <div class="flex justify-content-between">
                    <div class="badge ${card_status_color}">${this.status}</div>
                    <div>${this.card_location}</div>
                </div>
            </div>
        `
        return card
    }
}

class CardsGrid {
    cardsArray = [];
    sortedCardsArray = [];
    constructor(cards) {
        for (let card of cards)
            this.cardsArray.push(card);
    }

    html() {
        let grid_wrapper = document.createElement('div');
        grid_wrapper.classList.add('grid-container')
        for (let card of this.cardsArray)
            grid_wrapper.append(card.html())
        return grid_wrapper
    }

    FilterByStatus (Status) {
        if (Array.isArray(Status))
            this.cardsArray = this.cardsArray.filter(card => Status.includes(card.status));
        else
            this.cardsArray = this.cardsArray.filter(card => card.status === Status);
    }
    FilterByUserId (UserId) {
        if (Array.isArray(UserId))
            this.cardsArray = this.cardsArray.filter(card => UserId.includes(card.author_id));
        else
            this.cardsArray = this.cardsArray.filter(card => card.author_id === UserId)
    }
}