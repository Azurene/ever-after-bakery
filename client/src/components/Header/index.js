import React from 'react';

function Header(props){
    return (
        
        <header>
            <nav>
                <div> 
                    <ul>
                        <li>
                            <button className='dark'> <span onClick={()=>{props.setCurrentPage('About')}} >About</span> </button></li>
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