import React from 'react';

export default function Footer() {
  return (
    <footer className="container">
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <div>
            <h4>Sobre a empresa</h4>
            <p>Rua das antas</p>
          </div>
        </div>
        <div className="col-lg-8 col-sm-12">
          <div>
            <h4>Redes sociais</h4>
            <p>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </p>
            <p>Facebook</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
