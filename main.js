
const cardData = [
    {
        name: 'Chase Sapphire Preferred',
        issuer: 'Chase',
        benefits: ['travel', 'points'],
        details: {
            points: '2x points on travel and dining',
            travel: 'Trip cancellation insurance',
        },
    },
    {
        name: 'Blue Cash Preferred',
        issuer: 'American Express',
        benefits: ['cashback'],
        details: {
            cashback: '6% cash back at U.S. supermarkets',
        },
    },
    {
        name: 'Capital One Venture Rewards',
        issuer: 'Capital One',
        benefits: ['travel', 'points'],
        details: {
            points: '2x miles on every purchase',
            travel: 'Global Entry or TSA PreCheck credit',
        },
    },
    {
        name: 'Chase Freedom Flex',
        issuer: 'Chase',
        benefits: ['cashback', 'points'],
        details: {
            cashback: '5% cash back on rotating categories',
            points: '5x points on travel purchased through Chase Ultimate Rewards',
        },
    },
    {
        name: 'Amex Gold Card',
        issuer: 'American Express',
        benefits: ['points', 'travel'],
        details: {
            points: '4x points on dining and at U.S. supermarkets',
            travel: '$120 dining credit',
        },
    },
    {
        name: 'Citi Double Cash Card',
        issuer: 'Citi',
        benefits: ['cashback'],
        details: {
            cashback: '2% cash back on all purchases (1% when you buy, 1% as you pay)',
        },
    },
    {
        name: 'Discover it Cash Back',
        issuer: 'Discover',
        benefits: ['cashback'],
        details: {
            cashback: '5% cash back on rotating categories',
        },
    },
    {
        name: 'Bank of America Customized Cash Rewards',
        issuer: 'Bank of America',
        benefits: ['cashback'],
        details: {
            cashback: '3% cash back in the category of your choice',
        },
    },
    {
        name: 'Wells Fargo Active Cash Card',
        issuer: 'Wells Fargo',
        benefits: ['cashback'],
        details: {
            cashback: '2% cash rewards on purchases',
        },
    },
    {
        name: 'U.S. Bank Altitude Go Visa Signature Card',
        issuer: 'U.S. Bank',
        benefits: ['points'],
        details: {
            points: '4x points on dining, takeout, and restaurant delivery',
        },
    },
    {
        name: 'Chase Sapphire Reserve',
        issuer: 'Chase',
        benefits: ['travel', 'points'],
        details: {
            points: '3x points on travel and dining',
            travel: '$300 annual travel credit',
        },
    },
    {
        name: 'The Platinum Card from American Express',
        issuer: 'American Express',
        benefits: ['travel', 'points'],
        details: {
            points: '5x points on flights booked directly with airlines or with American Express Travel',
            travel: 'Access to the Global Lounge Collection',
        },
    },
    {
        name: 'Capital One SavorOne Cash Rewards',
        issuer: 'Capital One',
        benefits: ['cashback'],
        details: {
            cashback: '3% cash back on dining, entertainment, and popular streaming services',
        },
    },
    {
        name: 'Citi Premier Card',
        issuer: 'Citi',
        benefits: ['points', 'travel'],
        details: {
            points: '3x points on restaurants, supermarkets, gas stations, air travel, and hotels',
            travel: '$100 annual hotel savings benefit',
        },
    },
    {
        name: 'Discover it Miles',
        issuer: 'Discover',
        benefits: ['travel', 'points'],
        details: {
            points: '1.5x miles on every dollar spent on all purchases',
            travel: 'Unlimited mile-for-mile match for all miles earned at the end of your first year',
        },
    }
];

class CreditCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const { name, issuer, benefits, details } = this.card;
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                h2 {
                    font-size: 1.2rem;
                    color: #1877f2;
                    margin-bottom: 10px;
                }
                p {
                    margin-bottom: 10px;
                }
                ul {
                    list-style-type: none;
                    padding-left: 0;
                }
                li {
                    margin-bottom: 5px;
                }
            </style>
            <h2>${name}</h2>
            <p><strong>Issuer:</strong> ${issuer}</p>
            <ul>
                ${benefits.map(benefit => `<li>${details[benefit] || ''}</li>`).join('')}
            </ul>
        `;
    }
}

customElements.define('credit-card', CreditCard);

const mainContent = document.getElementById('main-content');
const issuerContainer = document.getElementById('issuer-container');
const cardContainer = document.getElementById('card-container');
const backButton = document.getElementById('back-button');

function showIssuers() {
    issuerContainer.style.display = 'grid';
    cardContainer.style.display = 'none';
    backButton.style.display = 'none';

    const issuers = [...new Set(cardData.map(card => card.issuer))];
    issuerContainer.innerHTML = '';
    issuers.forEach(issuer => {
        const issuerCard = document.createElement('div');
        issuerCard.className = 'issuer-card';
        issuerCard.textContent = issuer;
        issuerCard.addEventListener('click', () => showCards(issuer));
        issuerContainer.appendChild(issuerCard);
    });
}

function showCards(issuer) {
    issuerContainer.style.display = 'none';
    cardContainer.style.display = 'grid';
    backButton.style.display = 'block';

    cardContainer.innerHTML = '';
    cardData
        .filter(card => card.issuer === issuer)
        .forEach(card => {
            const cardElement = document.createElement('credit-card');
            cardElement.card = card;
            cardContainer.appendChild(cardElement);
        });
}

backButton.addEventListener('click', showIssuers);

showIssuers();
