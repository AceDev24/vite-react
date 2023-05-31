import React from 'react'

const Header = () => {
  return (
    <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light p-3 py-4 py-lg-0 px-lg-5 px-4">
        <a href="index.html" className="navbar-brand ml-lg-3">
            <img src="./HarshLogo.png" alt="website logo" width="60" height="60" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav m-auto py-0">
                <a href="#" className="nav-item nav-link active">Home</a>
                <a href="#about" className="nav-item nav-link">About Me</a>
                <a href="#projects" className="nav-item nav-link">Projects</a>
                <a href="#skills" className="nav-item nav-link">Skill</a>
                <a href="#experiences" className="nav-item nav-link">Experiences</a>
                <a href="#certificates" className="nav-item nav-link">Certificates</a>
                <a href="#entries" className="nav-item nav-link">Blog</a>
                <a href="#contact" className="nav-item nav-link">Contact</a>
            </div>
        </div>
    </nav>
  )
}

export default Header