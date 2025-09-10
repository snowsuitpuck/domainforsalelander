import { useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';

function App() {
  const location = useLocation();
  
  const isForSalePage = useMemo(() => {
    return location.pathname.startsWith('/forsale');
  }, [location.pathname]);

  // Determine the active host (parked domain pointing to this lander)
  const domain = useMemo(() => {
    return typeof window !== 'undefined' && window.location.host
      ? window.location.host
      : 'this domain';
  }, []);

  // Basic runtime SEO updates depending on route
  useEffect(() => {
    const title = isForSalePage
      ? 'The domain you are trying to reach is for sale.'
      : `${domain} is for sale`;
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

    const description = isForSalePage
      ? 'This domain is parked and available to acquire.'
      : `The domain ${domain} is for sale.`;
    setMeta('description', description);
    setOG('og:title', title);
    setOG('og:description', description);
    setOG('og:type', 'website');
    setOG('og:url', typeof window !== 'undefined' ? window.location.href : '');
    setOG('twitter:card', 'summary');
  }, [domain, isForSalePage]);

  const contactEmail = 'domains@blankhappens.com';
  const subject = encodeURIComponent(
    isForSalePage ? 'Domain inquiry' : `Inquiry about ${domain}`
  );
  const body = encodeURIComponent(
    isForSalePage
      ? `Hi, I'm interested in this domain.\n\nMy offer: $____`
      : `Hi, I'm interested in ${domain}.\n\nMy offer: $____`
  );
  const mailto = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

  const titleText = isForSalePage
    ? 'The domain you are trying to reach is for sale.'
    : domain;
  const subtitleText = isForSalePage
    ? 'This domain is parked and available to acquire.'
    : `You reached this page because ${domain} is parked and available to acquire.`;

  return (
    <div className="lander">
      <div className="card">
        <div className="pill">Domain for sale</div>
        <h1 className={`title${!isForSalePage ? ' domain' : ''}`}>{titleText}</h1>
        <p className="subtitle">{subtitleText}</p>
        <a className="cta" href={mailto}>Contact domains@blankhappens.com</a>
      </div>
      <div className="foot">© {new Date().getFullYear()} All rights reserved.</div>
    </div>
  );
}

export default App;