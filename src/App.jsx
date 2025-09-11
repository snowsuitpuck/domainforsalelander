import { useMemo, useEffect } from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

function ForSalePage() {
  const location = useLocation();
  
  // Extract domain from URL parameters
  const domain = useMemo(() => {
    const urlParams = new URLSearchParams(location.search);
    const srcDomain = urlParams.get('src');
    return srcDomain || null;
  }, [location.search]);

  // Basic runtime SEO updates
  useEffect(() => {
    const title = 'Domain is for sale.';
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

    const description = 'This domain is parked and available to acquire.';
    setMeta('description', description);
    setOG('og:title', title);
    setOG('og:description', description);
    setOG('og:type', 'website');
    setOG('og:url', typeof window !== 'undefined' ? window.location.href : '');
    setOG('twitter:card', 'summary');
  }, []);

  const contactEmail = 'domains@blankhappens.com';
  const subject = encodeURIComponent('Domain inquiry');
  const body = encodeURIComponent(
    `Hi, I'm interested in this domain.\n\nMy offer: $____`
  );
  const mailto = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

  const titleText = domain || 'Domains for Sale';
  const subtitleText = domain ? `${domain} is parked and available to acquire.` : 'Premium domains for sale.';

  return (
    <div className="lander">
      <div className="card">
        <div className="pill">Domain for sale</div>
        <h1 className="title">{titleText}</h1>
        <p className="subtitle">{subtitleText}</p>
        <a className="cta" href={mailto}>Contact domains@blankhappens.com</a>
      </div>
      <div className="foot">© {new Date().getFullYear()} All rights reserved.</div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/forsale" replace />} />
      <Route path="/forsale" element={<ForSalePage />} />
    </Routes>
  );
}

export default App;