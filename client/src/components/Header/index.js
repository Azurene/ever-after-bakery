import React from 'react';

function Header(props) {
    return (

        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                {/* <a className="navbar-brand" href="/"></a> */}
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        {/* home */}
                        <li className="nav-item active">
                            <a className="nav-link" onClick={() => {
                            props.setCurrentPage("Header")}} >Home <span className="sr-only"> </span></a>
                        </li>
                        {/* about */}
                        <li className="nav-item">
                            
                            <button onClick={() => {
                                props.setCurrentPage("About")}}>
                                    About Me</button> 
                                    
                        </li>
                        {/* baked goods */}
                        <li className="nav-item">
                            <a className="nav-link" href="/Baked-Goods">Baked Goods</a>
                        </li>
                        {/* newsletter */}
                        <li className="nav-item">
                            <a className="nav-link" href="/Newsletter">Newsletter</a>
                        </li>
                        {/* contact */}
                        <li className="nav-item">
                            <a className="nav-link" href="/Contact">Contact</a>
                        </li>
                    </ul>
                    <span className="navbar-text text-white ">
                        <a className="navbar" href="/">
                            <div className="logo-image">
                                <img 
                                src={require(`../../assets/images/logo/logo.JPEG`)} 
                                alt='logo' 
                                className="img-fluid">

                                </img>
                            </div>
                         </a>
                    </span>
                </div>
            </nav>
        </header>
    )
}

export default Header;