import { Link } from 'react-router-dom';
import './Home_RecipeListing.css';

/* ─── Placeholder data ─── */
const summerRecipes = [
  { id: 1, title: 'Italian-style tomato salad', time: '14 minutes' },
  { id: 2, title: 'Spaghetti with vegetables and shrimp', time: '30 minutes' },
  { id: 3, title: 'Lotus delight salad', time: '20 minutes' },
  { id: 4, title: 'Snack cakes', time: '45 minutes' },
];

const videoRecipes = [
  { id: 1, title: 'Salad with cabbage and shrimp' },
  { id: 2, title: 'Salad of cove beans, shrimp and potatoes' },
  { id: 3, title: 'Sunny-side up fried eggs' },
  { id: 4, title: 'Lotus delight salad' },
];

const editorsPick = [
  { id: 1, title: 'Stuffed sticky rice ball', time: '34 mins', author: 'Jennifer King' },
  { id: 2, title: 'Strawberry smoothie', time: '40 mins', author: 'Matthew Martinez' },
  { id: 3, title: 'Latte Art', time: '19 mins', author: 'Sarah Hill' },
  { id: 4, title: 'Butter fried noodles', time: '15 mins', author: 'Julia Lopez' },
];

const footerLearnMore = ['Our Cooks', 'See Our Features', 'FAQ'];
const footerShop = ['Gift Subscription', 'Send Us Feedback'];
const footerRecipes = ['Pasta', 'Dinner', 'Healthy', 'Vegetarian', 'Vegan', 'Christmas'];

/* ─── Inline SVGs ─── */
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const BookmarkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#0B257E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

const ChefHatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0B257E" stroke="none">
    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
    <line x1="6" y1="17" x2="18" y2="17" stroke="white" strokeWidth="1.5" />
    <line x1="6" y1="13" x2="18" y2="13" stroke="white" strokeWidth="1.5" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="32" height="32">
    <circle cx="12" cy="12" r="12" fill="rgba(0,0,0,0.45)" />
    <polygon points="10,8 17,12 10,16" fill="white" />
  </svg>
);

/* ─── Placeholder image component ─── */
const PlaceholderImg = ({ width, height, className, rounded, style = {} }) => (
  <div
    className={className}
    style={{
      width,
      height,
      background: 'linear-gradient(135deg, #BCC1CA 0%, #DEE1E6 100%)',
      borderRadius: rounded ? '50%' : '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#9095A0',
      fontSize: '12px',
      flexShrink: 0,
      ...style,
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9095A0" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  </div>
);

/* ══════════════════════════════════════════
   Navbar
══════════════════════════════════════════ */
const Navbar = () => (
  <header className="rl-navbar">
    {/* Logo */}
    <Link to="/" className="rl-navbar__logo">
      <span className="rl-navbar__logo-icon"><ChefHatIcon /></span>
      <span className="rl-navbar__logo-text">Chefify</span>
    </Link>

    {/* Search */}
    <div className="rl-navbar__search">
      <span className="rl-navbar__search-icon"><SearchIcon /></span>
      <input type="text" placeholder="What would you like to cook?" />
    </div>

    {/* Nav links */}
    <nav className="rl-navbar__menu">
      {['What to cook', 'Recipes', 'Ingredients', 'Occasions', 'About Us'].map((item) => (
        <Link key={item} to="/" className="rl-navbar__menu-item">{item}</Link>
      ))}
    </nav>

    {/* Auth buttons */}
    <div className="rl-navbar__actions">
      <Link to="/" className="rl-btn rl-btn--ghost">Login</Link>
      <Link to="/" className="rl-btn rl-btn--primary">Subscribe</Link>
    </div>
  </header>
);

/* ══════════════════════════════════════════
   Hero Banner
══════════════════════════════════════════ */
const HeroBanner = () => (
  <section className="rl-hero">
    {/* Full-width background placeholder */}
    <div className="rl-hero__bg">
      <PlaceholderImg width="100%" height="100%" style={{ borderRadius: 0 }} />
      <div className="rl-hero__overlay" />
    </div>

    {/* Recipe of the Day card */}
    <div className="rl-hero__card">
      <span className="rl-hero__badge">Recipe of the day</span>
      <h2 className="rl-hero__card-title">Salad Caprese</h2>
      <p className="rl-hero__card-desc">
        Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and
        balsamic vinegar create a refreshing dish for lunch or appetizer.
      </p>

      {/* Author row */}
      <div className="rl-hero__author">
        <PlaceholderImg width={36} height={36} rounded />
        <span className="rl-hero__author-name">Salad Caprese</span>
      </div>

      {/* CTA */}
      <Link to="/" className="rl-btn rl-btn--primary rl-hero__cta">
        View now <ArrowRightIcon />
      </Link>
    </div>
  </section>
);

/* ══════════════════════════════════════════
   Summer Recipes Section
══════════════════════════════════════════ */
const SummerRecipesSection = () => (
  <section className="rl-section">
    <div className="rl-section__header">
      <h2 className="rl-section__title">This Summer Recipes</h2>
      <p className="rl-section__subtitle">We have all your Independence Day sweets covered.</p>
    </div>

    <div className="rl-cards-row">
      {summerRecipes.map((recipe) => (
        <div key={recipe.id} className="rl-summer-card">
          <PlaceholderImg width={176} height={176} rounded className="rl-summer-card__img" />
          <h3 className="rl-summer-card__title">{recipe.title}</h3>
          <div className="rl-summer-card__footer">
            <button className="rl-icon-btn" aria-label="Bookmark">
              <BookmarkIcon />
            </button>
            <span className="rl-summer-card__time">
              <ClockIcon /> {recipe.time}
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

/* ══════════════════════════════════════════
   Recipes With Videos Section
══════════════════════════════════════════ */
const VideosSection = () => (
  <section className="rl-section rl-section--tinted">
    <div className="rl-section__header">
      <h2 className="rl-section__title">Recipes With Videos</h2>
      <p className="rl-section__subtitle">Cooking Up Culinary Creations with Step-by-Step Videos.</p>
    </div>

    <div className="rl-cards-row">
      {videoRecipes.map((recipe) => (
        <div key={recipe.id} className="rl-video-card">
          <div className="rl-video-card__thumb">
            <PlaceholderImg width="100%" height="100%" style={{ borderRadius: '8px 8px 0 0' }} />
            <span className="rl-video-card__play"><PlayIcon /></span>
          </div>
          <div className="rl-video-card__body">
            <h3 className="rl-video-card__title">{recipe.title}</h3>
            <button className="rl-icon-btn" aria-label="Bookmark">
              <BookmarkIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

/* ══════════════════════════════════════════
   Editor's Pick Section
══════════════════════════════════════════ */
const EditorsPick = () => (
  <section className="rl-section">
    <div className="rl-section__header">
      <h2 className="rl-section__title">Editor's pick</h2>
      <p className="rl-section__subtitle">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
    </div>

    <div className="rl-editors-grid">
      {editorsPick.map((recipe) => (
        <div key={recipe.id} className="rl-editor-card">
          <PlaceholderImg width={207} height={218} className="rl-editor-card__img" style={{ borderRadius: '8px', flexShrink: 0 }} />
          <div className="rl-editor-card__info">
            <div className="rl-editor-card__toprow">
              <h3 className="rl-editor-card__title">{recipe.title}</h3>
              <button className="rl-icon-btn" aria-label="Bookmark">
                <BookmarkIcon />
              </button>
            </div>
            <p className="rl-editor-card__meta">
              <ClockIcon /> {recipe.time}
            </p>
            <div className="rl-editor-card__author">
              <PlaceholderImg width={44} height={44} rounded />
              <span className="rl-editor-card__author-name">{recipe.author}</span>
            </div>
            <p className="rl-editor-card__desc">
              A delicious recipe with fresh, quality ingredients carefully selected to deliver
              an unforgettable culinary experience.
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

/* ══════════════════════════════════════════
   Footer
══════════════════════════════════════════ */
const Footer = () => (
  <footer className="rl-footer">
    <div className="rl-footer__inner">

      {/* About / Newsletter */}
      <div className="rl-footer__col rl-footer__col--wide">
        <div className="rl-footer__logo">
          <span className="rl-footer__logo-icon"><ChefHatIcon /></span>
          <span className="rl-footer__logo-text">Chefify</span>
        </div>
        <p className="rl-footer__about">
          We want to make cooking fun and accessible to everyone. Our mission is to bring
          you delightful recipes that are easy and enjoyable to prepare.
        </p>
        <div className="rl-footer__newsletter">
          <input type="email" placeholder="Your email address" className="rl-footer__email-input" />
          <button className="rl-btn rl-btn--primary rl-footer__send-btn">Send</button>
        </div>
      </div>

      {/* Learn More */}
      <div className="rl-footer__col">
        <h4 className="rl-footer__col-title">Learn More</h4>
        {footerLearnMore.map((link) => (
          <Link key={link} to="/" className="rl-footer__link">{link}</Link>
        ))}
      </div>

      {/* Shop */}
      <div className="rl-footer__col">
        <h4 className="rl-footer__col-title">Shop</h4>
        {footerShop.map((link) => (
          <Link key={link} to="/" className="rl-footer__link">{link}</Link>
        ))}
      </div>

      {/* Recipes */}
      <div className="rl-footer__col">
        <h4 className="rl-footer__col-title">Recipes</h4>
        {footerRecipes.map((link) => (
          <Link key={link} to="/" className="rl-footer__link">{link}</Link>
        ))}
      </div>

    </div>

    {/* Bottom bar */}
    <div className="rl-footer__bottom">
      <div className="rl-footer__bottom-logo">
        <span className="rl-footer__logo-icon rl-footer__logo-icon--sm"><ChefHatIcon /></span>
        <span>Chefify</span>
      </div>
      <p className="rl-footer__copyright">© 2023 Chefify Company</p>
      <div className="rl-footer__legal">
        <Link to="/" className="rl-footer__link">Terms of Service</Link>
        <Link to="/" className="rl-footer__link">Privacy Policy</Link>
      </div>
    </div>
  </footer>
);

/* ══════════════════════════════════════════
   Main component
══════════════════════════════════════════ */
export default function Home_RecipeListing() {
  return (
    <div className="rl-page">
      <Navbar />
      <HeroBanner />
      <SummerRecipesSection />
      <VideosSection />
      <EditorsPick />
      <Footer />
    </div>
  );
}
