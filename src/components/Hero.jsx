import React from 'react'

export default function Hero({ active, setActive }) {
  return (
    <section className="hero-section text-center text-white">
      <div className="container py-5">
        <h1 className="display-6">🌟 Word of the Day 🌟</h1>
        <p className="lead">Stay Updated with the Latest News</p>
        <p>Discover breaking news, insights, and stories...</p>

        <div className="d-flex justify-content-center gap-2 mt-4 flex-wrap">
          <button className={`btn btn-sm ${active==='phishing' ? 'btn-light' : 'btn-outline-light'}`} onClick={()=>setActive('phishing')}>Phishing detective</button>
          <button className={`btn btn-sm ${active==='vulnerability' ? 'btn-light' : 'btn-outline-light'}`} onClick={()=>setActive('vulnerability')}>Vulnerability scanner</button>
          <button className={`btn btn-sm ${active==='password' ? 'btn-light' : 'btn-outline-light'}`} onClick={()=>setActive('password')}>Password Strength</button>
          <button className={`btn btn-sm ${active==='articles' ? 'btn-light' : 'btn-outline-light'}`} onClick={()=>setActive('articles')}>Cybersecurity article</button>
        </div>
      </div>
    </section>
  )
}
