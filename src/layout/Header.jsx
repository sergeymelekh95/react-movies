function Header() {
    return (
        <nav className="green darken-1">
            <div className="nav-wrapper">
            <a href="#" className="brand-logo">React movies</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#">repo</a></li>
            </ul>
            </div>
        </nav>
    )
    
}

export {Header}