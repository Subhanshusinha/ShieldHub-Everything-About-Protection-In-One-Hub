import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Phishing from './components/Phishing'
import Vulnerability from './components/Vulnerability'
import PasswordStrength from './components/PasswordStrength'
import Articles from './components/Articles'
import DailyContent from './components/DailyContent'
import Footer from './components/Footer'
import './App.css'


export default function App() {
  const [active, setActive] = useState('phishing')
  const [daily, setDaily] = useState(null)

  useEffect(() => {
    fetch('/data/daily.json')
      .then(res => res.json())
      .then(setDaily)
      .catch(err => console.warn('Could not load daily content', err))
  }, [])

  return (
    <>
      <Header />
      {/* space to offset fixed header */}
      <div className="pt-5" />
      <Hero active={active} setActive={setActive} />
      <main className="container my-5">
        {active === 'phishing' && <Phishing />}
        {active === 'vulnerability' && <Vulnerability />}
        {active === 'password' && <PasswordStrength />}
        {active === 'articles' && <Articles />}
        <hr />
        <DailyContent daily={daily} />
      </main>
      <Footer />
    </>
  )
}
