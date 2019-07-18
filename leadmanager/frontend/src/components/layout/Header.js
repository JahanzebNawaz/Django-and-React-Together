import React from 'react';

const Header = () =>  {
        return (
            <header>
                 <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    {/* <!-- Brand --> */}
                    <a className="navbar-brand" href="#">Lead Manager</a>

                    {/* <!-- Toggler/collapsibe Button --> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* <!-- Navbar links --> */}
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        </ul>
                    </div>
                    </nav> 
            </header>

        );
}

export default Header;