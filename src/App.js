import React from "react";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">Frederico Fernandes</h1>
        <p className="header__subtitle">Web Developer and Combat Sports Enthusiast</p>
      </header>

      <main className="main">
        <section className="section section--intro">
          <h2 className="section__title">About Me</h2>
          <p className="section__text">
            Insert your bio here. Talk about your background, your skills, and your passions.
          </p>
        </section>

        <section className="section section--portfolio">
          <h2 className="section__title">Portfolio</h2>
          <ul className="portfolio-list">
            <li className="portfolio-item">
              <a href="/" className="portfolio-link">
                <h3 className="portfolio-title">Project 1</h3>
                <p className="portfolio-description">
                  Insert a brief description of the project here.
                </p>
              </a>
            </li>
            <li className="portfolio-item">
              <a href="/" className="portfolio-link">
                <h3 className="portfolio-title">Project 2</h3>
                <p className="portfolio-description">
                  Insert a brief description of the project here.
                </p>
              </a>
            </li>
            <li className="portfolio-item">
              <a href="/" className="portfolio-link">
                <h3 className="portfolio-title">Project 3</h3>
                <p className="portfolio-description">
                  Insert a brief description of the project here.
                </p>
              </a>
            </li>
          </ul>
        </section>

        <section className="section section--contact">
          <h2 className="section__title">Contact Me</h2>
          <ul className="contact-list">
            <li className="contact-item">
              <a href="mailto:you@example.com" className="contact-link">
                <i className="contact-icon fa-regular fa-envelope"></i>
                <span className="contact-text">you@example.com</span>
              </a>
            </li>
            <li className="contact-item">
              <a href="https://www.linkedin.com/in/your-profile/" className="contact-link">
                <i className="contact-icon fa-brands fa-linkedin"></i>
                <span className="contact-text">LinkedIn</span>
              </a>
            </li>
            <li className="contact-item">
              <a href="https://github.com/your-profile" className="contact-link">
                <i className="contact-icon fa-brands fa-github"></i>
                <span className="contact-text">GitHub</span>
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__text">
          &copy; {new Date().getFullYear()} Frederico Fernandes. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
