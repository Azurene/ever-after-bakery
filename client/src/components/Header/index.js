import React from 'react';

function Header(props){
    return (
        
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link " href="/">Home <span class="sr-only"> </span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/About">About Me</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Baked-Goods">Baked Goods</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Newsletter">Newsletter</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Contact">Contact</a>
      </li>
    </ul>
    <span class="navbar-text text-white ">
              <a class="navbar" href="/">
                <div class="logo-image">
                    <img src='logo.JPEG' alt='logo' class="img-fluid"></img>
                </div>
              </a>
    </span>
  </div>
</nav> 
        </header>
    )
}

export default Header;