// --- Data for Articles ---
const articles = [
    {
        title: '5 Tips for More Engaging Thumbnails',
        snippet: 'Discover the secrets to creating thumbnails that grab attention and increase your click-through rate.',
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '#'
    },
    {
        title: 'The Secret to a Viral Video',
        snippet: 'What do viral videos have in common? We break down the key ingredients for creating shareable content.',
        image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '#'
    },
    {
        title: 'Mastering SEO for Your Blog',
        snippet: 'Climb the search rankings with these essential SEO strategies for bloggers and content creators in 2024.',
        image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '#'
    },
    {
        title: 'How to Build a Content Calendar',
        snippet: 'Stay organized and consistent with a content calendar that works for you. Here’s how to build one from scratch.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '#'
    },
    {
        title: 'Top 5 Monetization Strategies',
        snippet: 'Explore different ways to monetize your content, from ads and sponsorships to digital products.',
        image: 'https://images.unsplash.com/photo-1583521214693-7de57a4c4436?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '#'
    },
    {
        title: 'Engaging Your Audience on Social Media',
        snippet: 'Learn how to build a community and keep your followers engaged across different social media platforms.',
        image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '#'
    }
];

// --- Web Component: SiteHeader ---
class SiteHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .header-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--primary-color, #2a76c6);
                }
                nav a {
                    margin-left: 1.5rem;
                    font-weight: 600;
                    color: var(--text-color, #333);
                    text-decoration: none;
                }
                nav a:hover {
                    color: var(--accent-color, #ff7f50);
                }
            </style>
            <div class="header-container">
                <div class="logo">CCTIPS</div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>
            </div>
        `;
    }
}
customElements.define('site-header', SiteHeader);


// --- Web Component: SiteFooter ---
class SiteFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .footer-container {
                    font-size: 0.9rem;
                }
                .footer-container a {
                    color: #fff;
                    margin: 0 0.5rem;
                    text-decoration: underline;
                }
            </style>
            <div class="footer-container">
                <p>&copy; ${new Date().getFullYear()} CCTIPS. All rights reserved.</p>
                <p>
                    <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
                </p>
            </div>
        `;
    }
}
customElements.define('site-footer', SiteFooter);


// --- Web Component: ArticleCard ---
class ArticleCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    set article(article) {
        this.shadowRoot.innerHTML = `
            <style>
                .card-link {
                    text-decoration: none;
                    color: inherit;
                    display: block;
                    height: 100%;
                }
                .card-image {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }
                .card-content {
                    padding: 1rem 1.5rem;
                }
                h3 {
                    margin-bottom: 0.5rem;
                    font-size: 1.25rem;
                }
                p {
                    font-size: 0.95rem;
                    line-height: 1.5;
                }
            </style>
            <a href="${article.link}" class="card-link">
                <img src="${article.image}" alt="${article.title}" class="card-image">
                <div class="card-content">
                    <h3>${article.title}</h3>
                    <p>${article.snippet}</p>
                </div>
            </a>
        `;
    }
}
customElements.define('article-card', ArticleCard);


// --- Initialize Page ---
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    articles.forEach(articleData => {
        const card = document.createElement('article-card');
        card.article = articleData;
        mainContent.appendChild(card);
    });
});
