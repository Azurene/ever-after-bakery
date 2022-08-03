import React from 'react';

function Header(props){
    return (
        
        <header>
            <nav>
                <div> 
                    <ul>
                        <li> <span onClick={()=>{props.setCurrentPage('About')}} >About</span></li>
                        <li> <span onClick={()=>{props.setCurrentPage('Baked-Goods')}} >Baked Goods</span></li>
                        <li> <span onClick={()=>{props.setCurrentPage('Newsletter')}} >Newsletter</span></li>
                        <li> <span onClick={()=>{props.setCurrentPage('Contact')}} >Contact</span></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;