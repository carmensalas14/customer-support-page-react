import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import iconTileData from './data/data';
import Navigation from './components/Navigation/Navigation';
import IconTile from './components/IconTile/IconTile';

function App() {
  return (
    <Router>
      <section className="App">
        {/* Navigation Links */}
        <Navigation />
        <Switch>
          <Route exact path="/">
            {/* title, heading, sub-heading */}
            <header className="cs-header">
              <h1 className="primary-title">CUSTOMER SUPPORT</h1>
              <h2 className="primary-heading">How can we help you today?</h2>
              <h3 className="primary-subheading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                rutrum quam quis justo sodales, at aliquet dui maximus.
              </h3>
            </header>
            <main>
              {/* FAQ Grid (page-design-grid) */}
              <section className="cs-grid-section">
                {iconTileData.map((tile) => {
                  return <IconTile data={tile} />;
                })}
              </section>

              {/* FAQ title, heading, and FAQ full page link */}
              <section className="faq-section">
                <section className="faq-sec-1">
                  <h1 className="primary-title">FREQUENTLY ASKED QUESTIONS</h1>
                </section>

                <section className="faq-sec-2">
                  <h2 className="secondary-heading">
                    How can we help you today?
                  </h2>

                  <nav className="nav faq-nav">
                    <a className="nav-link" href="/faq">
                      View all FAQs
                    </a>
                  </nav>
                </section>
              </section>

              {/* FAQ title, heading */}
            </main>
          </Route>
          <Route path="/home"></Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App;
