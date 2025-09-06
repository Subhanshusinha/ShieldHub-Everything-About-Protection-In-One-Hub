import React, { useState } from 'react'
import { FaShieldAlt } from 'react-icons/fa'

export default function Phishing() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)

  const analyze = () => {
    if (!input) {
      setResult({ status: 'error', msg: 'Please enter text or URL.' })
      return
    }
    // very simple demo logic
    const suspiciousWords = ['login', 'verify', 'bank', 'password', 'update', 'click']
    const isSuspicious = suspiciousWords.some(w => input.toLowerCase().includes(w))

    if (isSuspicious || input.includes('http://')) {
      setResult({ status: 'danger', msg: '⚠️ Suspicious! This may be a phishing attempt.' })
    } else {
      setResult({ status: 'safe', msg: '✅ Looks safe. No phishing signs detected.' })
    }
  }

  return (
    <section>
      <h3 className="text-center mb-3"><FaShieldAlt className="me-2" />Phishing Detective</h3>
      <p className="text-center text-muted">Analyze suspicious emails and URLs to detect phishing attempts.</p>
      
      <div className="card p-4 shadow-sm">
        <h5>Enter an email or URL to analyze</h5>
        <div className="input-group mt-3">
          <input 
            className="form-control" 
            placeholder="Paste email text or URL here..." 
            value={input} 
            onChange={(e)=>setInput(e.target.value)} 
          />
          <button className="btn btn-primary" onClick={analyze}>Analyze</button>
        </div>
        {result && (
          <div className={`alert mt-3 ${result.status==='danger' ? 'alert-danger' : result.status==='safe' ? 'alert-success' : 'alert-warning'}`}>
            {result.msg}
          </div>
        )}
      </div>
    </section>
  )
}
