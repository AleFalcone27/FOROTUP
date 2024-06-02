const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="icon-container">
                <a href="" className="profile-icon-container">
                    <img src="../profile.png" alt="profile" />
                </a>
                <a href="" className="setting-icon-container">
                    <img src="../settings.png" alt="settings" />
                </a>
            </div>
            <dev className="search_container">

                <input type="text" placeholder='Search' />
            </dev>
        </nav>
    )
}
export default Navbar;