import { useMemo, useEffect } from 'react';
import './App.css';

function App() {
  // Determine domain and optional price from querystring (?price=)
  const { domain, price } = useMemo(() => {
    const host = typeof window !== 'undefined' ? window.location.host : '';
    const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    const priceParam = params.get('price');
    return { domain: host || 'This Domain', price: priceParam };
  }, []);

  // Basic runtime SEO updates using detected domain
  useEffect(() => {
    const title = `${domain} is for sale`;
    document.title = title;

    const setMeta = (name, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setOG = (property, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const description = `Premium domain ${domain} is for sale. Acquire it today to elevate your brand and credibility.`;
    setMeta('description', description);
    setOG('og:title', title);
    setOG('og:description', description);
    setOG('og:type', 'website');
    setOG('og:url', typeof window !== 'undefined' ? window.location.href : '');
    setOG('twitter:card', 'summary_large_image');
  }, [domain]);

  // Obfuscate email to limit scraping; you can change this to your buyer inbox
  const emailUser = 'sales';
  const emailDomain = 'example.com';
  const contactEmail = `${emailUser}@${emailDomain}`;

  const subject = encodeURIComponent(`Inquiry about ${domain}`);
  const defaultBody = `Hi, I am interested in purchasing ${domain}.${price ? `\n\nAdvertised price: ${price}` : ''}\n\nMy offer: $____\nTimeline to close: ____ days\nPreferred contact method: ____`;
  const body = encodeURIComponent(defaultBody);
  const mailto = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

  return (
    <div className="dfsl-page">
      <header className="dfsl-header">
        <div className="dfsl-wrap">
          <div className="dfsl-badge">Domain For Sale</div>
          <h1 className="dfsl-domain">{domain}</h1>
          <p className="dfsl-sub">Own this premium domain and elevate your brand.</p>
          {price && (
            <div className="dfsl-price">Asking price: <strong>{price}</strong></div>
          )}
          <div className="dfsl-cta-row">
            <a className="dfsl-btn dfsl-btn-primary" href={mailto}>
              Inquire Now
            </a>
            <a className="dfsl-btn dfsl-btn-outline" href="/contact-us.html">
              Make an Offer
            </a>
          </div>
          <p className="dfsl-note">Serious buyers only. Escrow and fast transfer available.</p>
        </div>
      </header>

      <main className="dfsl-main dfsl-wrap">
        <section className="dfsl-grid">
          <div className="dfsl-card">
            <h2>Why acquire {domain}?</h2>
            <ul className="dfsl-list">
              <li>Instant credibility and memorability</li>
              <li>Better SEO and direct type-in traffic</li>
              <li>Protect your brand and marketing spend</li>
              <li>Flexible payment and escrow options</li>
            </ul>
          </div>
          <div className="dfsl-card">
            <h2>Included with purchase</h2>
            <ul className="dfsl-list">
              <li>Quick push/transfer at major registrars</li>
              <li>Free 30-day DNS hosting</li>
              <li>Sales agreement and invoice</li>
              <li>Support through closing</li>
            </ul>
          </div>
        </section>

        <section className="dfsl-offer">
          <h2>Ready to buy {domain}?</h2>
          <p>Contact us to negotiate or complete the purchase.</p>
          <a className="dfsl-btn dfsl-btn-primary" href={mailto}>Contact Sales</a>
        </section>
      </main>

      <footer className="dfsl-footer">
        <div className="dfsl-wrap dfsl-footer-inner">
          <nav className="dfsl-links">
            <a href="/privacy-policy.html">Privacy Policy</a>
            <a href="/terms-of-service.html">Terms of Service</a>
            <a href="/contact-us.html">Contact Us</a>
          </nav>
          <div className="dfsl-copy">© {new Date().getFullYear()} Domain For Sale Landing. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;