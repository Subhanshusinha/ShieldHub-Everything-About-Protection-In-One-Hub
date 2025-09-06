import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h6>Article</h6>
            <p>Security News & Tools. Stay informed and protected with our latest updates.</p>
          </div>
          <div className="col-md-3">
            <h6>Categories</h6>
            <ul className="list-unstyled">
              <li>Phishing detective</li>
              <li>Vulnerability scanner</li>
              <li>Password Strength</li>
              <li>Cybersecurity article</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6>Daily Content</h6>
            <ul className="list-unstyled">
              <li>Word of Day</li>
              <li>Quote of Day</li>
              <li>Fun Facts</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6>Company</h6>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
        <hr className="bg-secondary" />
        <div className="d-flex justify-content-between small">
          <div>© 2024 All rights reserved.</div>
          <div>📅 Updated daily</div>
        </div>
      </div>
    </footer>
  )
}
