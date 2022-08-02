import React from 'react';

function Header(props){
    return (
        
        <header>
            <nav>
                <div> 
                    <ul>
                        <li> <span onClick={()=>{props.setCurrentPage('About')}} >About</span></li>
                        
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;