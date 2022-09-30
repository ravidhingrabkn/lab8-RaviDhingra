import React from "react";
import './Header.css';

class Header extends React.Component {
  render() {
    return(
      <header id="header">
        <div className="container">
            <div>
                <h2 id="site-name"><a href="/">Trivia</a></h2>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </nav>
        </div>
      </header>
       
    );
  }
}
export default Header;