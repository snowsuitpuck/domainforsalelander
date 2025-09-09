import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Fade in content
        setTimeout(() => setIsVisible(true), 100);

        // Load JotForm script
        const script = document.createElement('script');
        script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
        script.onload = () => {
            if (window.jotformEmbedHandler) {
                window.jotformEmbedHandler(
                    "iframe[id='JotFormIFrame-250896548324164']",
                    "https://form.jotform.com/"
                );
            }
        };
        document.body.appendChild(script);

        return () => {
            if (script.parentNode) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className={`page-wrapper ${isVisible ? 'fade-in' : ''}`}>
            <div className="app-container">
                <header className="header">
                    <div className="header-content">
                        <h1 className="logo">BrokeHappens.com</h1>
                        <p className="tagline">A Referral and Resource Platform for Individuals Facing Financial Hardship</p>
                    </div>
                </header>

                <div className="hero-section">
                    <div className="hero-content">
                        <h2 className="hero-title">Being broke is just a temporary situation</h2>
                        <p className="hero-description">Our mission is to connect you with trusted financial services to help navigate life's toughest financial moments</p>
                    </div>
                </div>

                <main className="main">
                    <div className="left-column">
                        <div className="welcome-section">
                            <h2>We're Here To Help</h2>
                            <p className="intro-text">
                                Whether you're looking to consolidate debt, improve your credit, or apply for a personal loan, we're here to guide you forward.
                            </p>

                            <div className="services-list">
                                <h3>Our Services Include:</h3>
                                <div className="benefits-list">
                                    <div className="benefit-item">
                                        <div className="benefit-icon">✓</div>
                                        <div className="benefit-text">Debt relief & settlement</div>
                                    </div>
                                    <div className="benefit-item">
                                        <div className="benefit-icon">✓</div>
                                        <div className="benefit-text">Credit repair & monitoring</div>
                                    </div>
                                    <div className="benefit-item">
                                        <div className="benefit-icon">✓</div>
                                        <div className="benefit-text">Personal & emergency loans</div>
                                    </div>
                                    <div className="benefit-item">
                                        <div className="benefit-icon">✓</div>
                                        <div className="benefit-text">Low-cost health & auto insurance</div>
                                    </div>
                                    <div className="benefit-item">
                                        <div className="benefit-icon">✓</div>
                                        <div className="benefit-text">Budgeting tips & savings resources</div>
                                    </div>
                                    <div className="benefit-item">
                                        <div className="benefit-icon">✓</div>
                                        <div className="benefit-text">Affordable housing options</div>
                                    </div>
                                    <div className="benefit-item">
                                        <div className="benefit-icon">✓</div>
                                        <div className="benefit-text">Legal claim evaluations & resources</div>
                                    </div>
                                    <div className="benefit-item">
                                        <div className="benefit-icon">✓</div>
                                        <div className="benefit-text">Pre-settlement funding options</div>
                                    </div>
                                </div>
                            </div>

                            <div className="trust-indicators">
                                <div className="testimonial">
                                    <p className="quote">"I was drowning in debt until I found BrokeHappens. Now I'm back on track and saving $450 every month!"</p>
                                    <p className="author">— Sarah T., Phoenix</p>
                                </div>

                                <div className="stats">
                                    <div className="stat-item">
                                        <div className="stat-number">5,000+</div>
                                        <div className="stat-label">People helped</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">$15M+</div>
                                        <div className="stat-label">Debt reduced</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right-column">
                        <div className="form-container">
                            <div className="form-header">
                                <h3>Take Our Financial Health Check</h3>
                                <p>Answer a few questions to get matched with services that can help</p>
                            </div>

                            <iframe
                                id="JotFormIFrame-250896548324164"
                                title="BrokeHappens Form A"
                                allow="geolocation; microphone; camera; fullscreen"
                                allowTransparency="true"
                                src="https://form.jotform.com/250896548324164"
                                frameBorder="0"
                                style={{
                                    minWidth: '100%',
                                    maxWidth: '100%',
                                    height: '690px',
                                    border: 'none'
                                }}
                                scrolling="no"
                            ></iframe>

                            <div className="privacy-note">
                                Your information is secure and will never be shared with third parties.
                                <br />
                                <small>By submitting, you agree to receive communications from BrokeHappens™ and its partners. Consent is not required to use the service.</small>
                            </div>
                        </div>
                    </div>
                </main>

                <section className="how-it-works">
                    <h2 className="section-title">How It Works</h2>
                    <div className="steps-container">
                        <div className="step">
                            <div className="step-number">1</div>
                            <h3>Take Our Financial Health Check</h3>
                            <p>Answer a few short questions to help us understand your financial situation.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">2</div>
                            <h3>Get Matched with Services</h3>
                            <p>Based on your needs, we refer you to trusted providers who can help.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">3</div>
                            <h3>Take Action Today</h3>
                            <p>Get personalized referrals and tools that help you get back on track.</p>
                        </div>
                    </div>
                </section>

                <section className="full-intro">
                    <div className="intro-container">
                        <h2>About BrokeHappens</h2>
                        <p className="full-intro-text">
                            Are you struggling to pay your bills? Feeling overwhelmed by debt? You're not alone—BrokeHappens.
                            At BrokeHappens.com, we believe being broke is just a temporary situation. Our mission is to connect
                            individuals with trusted financial service providers who can help navigate life's toughest financial
                            moments. Whether you're looking to consolidate debt, improve your credit, or apply for a personal loan,
                            we're here to guide you forward.
                        </p>
                    </div>
                </section>

                <footer className="footer">
                    <div className="footer-content">
                        <div className="footer-legal">
                            <p>© 2025 BrokeHappens.com. All rights reserved.</p>
                            <p className="ownership">BrokeHappens.com is owned and operated by Winston Wolfe Holdings LLC</p>
                            <p className="trademark">BrokeHappens™ is a trademark of Winston Wolfe Holdings LLC.</p>
                            <div className="footer-links">
                                <a href="/privacy-policy.html">Privacy Policy</a>
                                <a href="/terms-of-service.html">Terms of Service</a>
                                <a href="/contact-us.html">Contact Us</a>
                            </div>
                            <p className="address">Winston Wolfe Holdings LLC<br />1835 East Hallandale Beach Blvd, Suite 437<br />Hallandale, FL 33009</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;