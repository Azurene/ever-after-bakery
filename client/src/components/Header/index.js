import React from 'react';

function Header(props) {
    return (

        <header className='container'>
            <nav className="navbar navbar-expand-lg">
                {/* <a className="navbar-brand" href="/"></a> */}
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        {/* home */}
                        <li className="nav-item active">
                            <button type='button' class='btn btn-black text-white'  onClick={() => {
                            props.setCurrentPage("About")}} >Home</button> <span  className="sr-only"> </span>
                        </li>
                        {/* about */}
                        <li className="nav-item active">
                            <button type='button' class='btn btn-white text-white' onClick={() => {
                                props.setCurrentPage('About')}}>About</button><span className='sr-only'></span>
                            
                                    </li>
                        {/* baked goods */}
                        <li className="nav-item active">
                            <button type='button' class='btn btn-white text-white' onClick={() => {
                                props.setCurrentPage('Baked-Goods')}}>Baked Goods</button><span  className='sr-only'></span>
                        </li>
                        {/* newsletter */}
                        <li className="nav-item active">
                            <button type='button' class='btn btn-white text-white' onClick={() => { 
                            props.setCurrentPage('Newsletter')}}>Newsletter</button><span  className='sr-only'></span>
                        </li>
                        {/* contact */}
                        <li className="nav-item active">
                           <button type='button' class='btn btn-white text-white' onClick={()  => {
                                props.setCurrentPage('Contact')}}>Contact</button><span className='sr-only'></span>
                        </li>
                    </ul>
                    <span className="navbar-text text-white ">
                        
                            <div className="logo-image">
                                <img 
                                src={require(`../../assets/images/logo/logo.JPEG`)} 
                                alt='logo' 
                                className="img-fluid">

                                </img>
                            </div>
                        
                    </span>
                </div>
            </nav>
        </header>
    )
}

export default Header;