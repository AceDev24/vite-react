import React from 'react'

const Header = () => {
  return (
    <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
        <a href="index.html" className="navbar-brand ml-lg-3">
            <h1 className="m-0 display-5">Portfolio</h1>
        </a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
            <div className="navbar-nav m-auto py-0">
                <a href="#" className="nav-item nav-link active">Home</a>
                <a href="#about" className="nav-item nav-link">About</a>
                <a href="#skills" className="nav-item nav-link">Skill</a>
                <a href="#certificates" className="nav-item nav-link">Certificates</a>
                <a href="#projects" className="nav-item nav-link">Projects</a>
                <a href="#experiences" className="nav-item nav-link">Experiences</a>
                <a href="#entries" className="nav-item nav-link">Entries</a>
            </div>
        </div>
    </nav>
  )
}

export default Header