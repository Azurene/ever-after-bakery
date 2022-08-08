import React from 'react';

function Header(props) {
    return (

        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                {/* <a className="navbar-brand" href="/"></a> */}
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        {/* home */}
                        <li className="nav-item active">
                            <a className="nav-link  "><button type='button' class='btn btn-black text-white'  onClick={() => {
                            props.setCurrentPage("Header")}} >Home</button> <span  className="sr-only"> </span></a>
                        </li>
                        {/* about */}
                        <li className="nav-item active">
                            <a className='nav-link'><button type='button' class='btn btn-black text-white' onClick={() => {
                                props.setCurrentPage('About')}}>About</button><span className='sr-only'></span> </a>
                            
                                    </li>
                        {/* baked goods */}
                        <li className="nav-item active">
                            <a className="nav-link"><button type='button' class='btn btn-black text-white' onClick={() => {
                                props.setCurrentPage('Baked-Goods')}}>Baked Goods</button><span  className='sr-only'></span></a>
                        </li>
                        {/* newsletter */}
                        <li className="nav-item active">
                            <a className="nav-link"><button type='button' class='btn btn-black text-white' onClick={() => { 
                            props.setCurrentPage('Newsletter')}}>Newsletter</button><span  className='sr-only'></span></a>
                        </li>
                        {/* contact */}
                        <li className="nav-item active">
                            <a className="nav-link"><button type='button' class='btn btn-black text-white' onClick={()  => {
                                props.setCurrentPage('Contact')}}>Contact</button><span className='sr-only'></span></a>
                        </li>
                    </ul>
                    <span className="navbar-text text-white ">
                        <a className="navbar" href="/">
                            <div className="logo-image">
                                <img 
                                src={require(`../../Assets/images/logo/logo.jpeg`)} 
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