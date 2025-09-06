import React, { useState } from "react";

export default function Header({ setActive }) {
  const [query, setQuery] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!suggestion) return;
    setActive(suggestion);
    setQuery("");
    setSuggestion("");
  };

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (value.startsWith("ph")) {
      setSuggestion("phishing");
    } else if (value.startsWith("vu")) {
      setSuggestion("vulnerability");
    } else if (value.startsWith("pa")) {
      setSuggestion("password");
    } else if (value.startsWith("ar")) {
      setSuggestion("articles");
    } else {
      setSuggestion("");
    }
  };

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <span style={{ fontSize: 18, marginRight: 8 }}>🗞️</span>
          <strong>ShieldHub – Everything about protection in one hub</strong>
        </a>
        <div className="d-flex align-items-center">
          <a className="nav-link text-light me-3" href="#">Home</a>
          <a className="nav-link text-light me-3" href="#">About</a>

          <form className="d-flex position-relative" onSubmit={handleSearch}>
            <input
              className="form-control form-control-sm me-2"
              type="search"
              placeholder="Search"
              value={query}
              onChange={handleChange}
            />
            <button className="btn btn-sm btn-outline-light" type="submit">🔍</button>

            {suggestion && (
              <div className="position-absolute bg-white shadow rounded mt-1" style={{ top: "100%", left: 0, right: 0, zIndex: 1000 }}>
                <div
                  className="dropdown-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setActive(suggestion);
                    setQuery("");
                    setSuggestion("");
                  }}
                >
                  {suggestion === "phishing" && "Phishing Detective"}
                  {suggestion === "vulnerability" && "Vulnerability Scanner"}
                  {suggestion === "password" && "Password Strength"}
                  {suggestion === "articles" && "Cybersecurity Articles"}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
}
