import React, { useEffect, useState } from 'react'

export default function Articles(){
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('/data/articles.json')
      .then(r=>r.json())
      .then(setArticles)
      .catch(err => console.warn('articles load', err))
  },[])

  return (
    <section>
      <h3 className="text-center mb-4">📰 Cybersecurity article</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {articles.map(a => (
          <div className="col" key={a.id}>
            <div className="card h-100">
              <img src={a.image} className="card-img-top" alt={a.title} style={{height:150, objectFit:'cover'}}/>
              <div className="card-body">
                <small className="badge bg-primary mb-2">{a.badge}</small>
                <h5 className="card-title">{a.title}</h5>
                <p className="card-text">{a.desc}</p>
              </div>
              <div className="card-footer text-muted d-flex justify-content-between">
                <small>{a.author}</small>
                <small>{a.time}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
