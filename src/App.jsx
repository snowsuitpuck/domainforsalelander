import { useMemo, useEffect } from 'react';
import './App.css';

function App() {
  // Determine the active host (parked domain pointing to this lander)
  const domain = useMemo(() => {
    return typeof window !== 'undefined' && window.location.host
      ? window.location.host
      : 'this domain';
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

    const description = `The domain ${domain} is for sale.`;
    setMeta('description', description);
    setOG('og:title', title);
    setOG('og:description', description);
    setOG('og:type', 'website');
    setOG('og:url', typeof window !== 'undefined' ? window.location.href : '');
    setOG('twitter:card', 'summary');
  }, [domain]);

  const contactEmail = 'domains@blankhappens.com';
  const subject = encodeURIComponent(`Inquiry about ${domain}`);
  const body = encodeURIComponent(`Hi, I'm interested in ${domain}.\n\nMy offer: $____`);
  const mailto = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

  return (
    <div className="lander">
      <div className="card">
        <div className="pill">Domain for sale</div>
        <h1 className="title">{domain}</h1>
        <p className="subtitle">You reached this page because {domain} is parked and available to acquire.</p>
        <a className="cta" href={mailto}>Contact domains@blankhappens.com</a>
      </div>
      <div className="foot">© {new Date().getFullYear()} All rights reserved.</div>
    </div>
  );
}

export default App;