import React from 'react'

export default function DailyContent({ daily }) {
  if (!daily) return null
  return (
    <section className="my-5">
      <h4 className="text-center mb-4">📚 Daily Content</h4>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card p-4 h-100">
            <div className="text-center mb-3">📖</div>
            <h5 className="text-center">Word of the Day</h5>
            <h6 className="text-center mt-2">{daily.word.word} <small className="text-muted"> {daily.word.pron}</small></h6>
            <p className="small mt-2">{daily.word.def}</p>
            <em className="small text-muted">Example: {daily.word.example}</em>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-4 h-100 text-center">
            <div className="mb-3">💭</div>
            <h5>Quote of the Day</h5>
            <blockquote className="blockquote">
              <p>"{daily.quote.text}"</p>
              <footer className="blockquote-footer">{daily.quote.author}</footer>
            </blockquote>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-4 h-100 text-center">
            <div className="mb-3">🧠</div>
            <h5>Fun Fact</h5>
            <p>{daily.fact.text}</p>
            <small className="text-muted">{daily.fact.more}</small>
          </div>
        </div>
      </div>
    </section>
  )
}
