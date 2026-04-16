// ikke noe nytt her

import { Link } from "react-router";
import { useState } from "react";

import "../css/Header.css"

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const logIn = () => setIsLoggedIn(true)

    return (
        <section className="header-body">
            <header className="main-header">
                <nav className="account-header">
                    <Link className="logo" to="/">
                        <h1>OddJ*bs</h1>
                    </Link>

                    {isLoggedIn ? (
                        <section className="account-info">
                            <Link className="nav-btn green" onClick={logIn}>
                                Publish J*b
                            </Link>
                            <Link className="nav-btn" onClick={logIn}>
                                Profile
                            </Link>
                        </section>
                    ) : (
                        <section className="account-info">
                            <Link className="nav-btn" onClick={logIn}>
                                Sign up
                            </Link>
                            <Link className="nav-btn green" onClick={logIn}>
                                Log in
                            </Link>
                        </section>
                    )}
                    
                </nav>
            </header>
        </section> 
    );
}

export default Header