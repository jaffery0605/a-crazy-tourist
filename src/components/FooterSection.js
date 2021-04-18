import React from 'react';
import { Link } from 'react-router-dom';
import "./FooterSection.css";

function FooterSection() {
    return (
        <div className = "footer-container">
            <div className = "footer-link">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Quick Links</h2>
                        <Link to='/'> How it works </Link>
                        <Link to='/'> How it works </Link>
                        <Link to='/'> How it works </Link>
                        <Link to='/'> How it works </Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/'> How it works </Link>
                        <Link to='/'> How it works </Link>
                        <Link to='/'> How it works </Link>
                        <Link to='/'> How it works </Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/'> How it works </Link>
                        <Link to='/'> How it works </Link>
                        <Link to='/'> How it works </Link>
                        <Link to='/'> How it works </Link>
                    </div>
                </div>
            </div>
            <section className = "social-media">
                <div className = "social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo">
                            A Crazy Tourist
                        </Link>
                    </div>
                    <small className="website-rights">
                        A Crazy Tourist © 2021
                    </small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                        to="/"
                        target="_blank"
                        aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram"
                        to="/"
                        target="_blank"
                        aria-label="Inatagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link twitter"
                        to="/"
                        target="_blank"
                        aria-label="Twitter"
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="social-icon-link linkedin"
                        to="/"
                        target="_blank"
                        aria-label="Linkedin"
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FooterSection;
