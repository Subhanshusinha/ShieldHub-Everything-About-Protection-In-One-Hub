import React, { useState } from 'react'
import { FaLock, FaEye, FaEyeSlash, FaRandom } from 'react-icons/fa'

export default function PasswordStrength() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [strength, setStrength] = useState(null)

  // Check password strength
  const checkStrength = (pwd) => {
    let score = 0
    if (pwd.length >= 8) score++
    if (/[A-Z]/.test(pwd)) score++
    if (/[a-z]/.test(pwd)) score++
    if (/[0-9]/.test(pwd)) score++
    if (/[^A-Za-z0-9]/.test(pwd)) score++

    if (score <= 2) return { level: 'Weak ❌', color: 'danger' }
    if (score === 3) return { level: 'Medium ⚠️', color: 'warning' }
    if (score >= 4) return { level: 'Strong ✅', color: 'success' }
  }

  const handleChange = (e) => {
    const val = e.target.value
    setPassword(val)
    if (val) setStrength(checkStrength(val))
    else setStrength(null)
  }

  // Generate strong random password
  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?"
    let newPwd = ""
    for (let i = 0; i < 16; i++) {
      newPwd += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setPassword(newPwd)
    setStrength(checkStrength(newPwd))
  }

  return (
    <section>
      <h3 className="text-center mb-3"><FaLock className="me-2" />Password Strength Checker</h3>
      <p className="text-center text-muted">Check if your password is strong and generate secure ones.</p>

      <div className="card p-4 shadow-sm">
        <div className="input-group mb-3">
          <input 
            type={showPassword ? "text" : "password"} 
            className="form-control"
            placeholder="Enter password..."
            value={password}
            onChange={handleChange}
          />
          <button 
            className="btn btn-outline-secondary" 
            onClick={()=>setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {strength && (
          <div className={`alert alert-${strength.color}`}>
            Strength: <b>{strength.level}</b>
          </div>
        )}

        <button className="btn btn-primary mt-2" onClick={generatePassword}>
          <FaRandom className="me-2" />Generate Strong Password
        </button>
      </div>
    </section>
  )
}
