import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav id="navbar">
            <header>JS Documentation</header>
            <ul>
                <li><a className="nav-link" href="#Introduction">Introduction</a></li>
                <li><a className="nav-link" href="#What_you_should_already_know">What you should already know</a></li>
                <li><a className="nav-link" href="#JavaScript_and_Java">JavaScript and Java</a></li>
                <li><a className="nav-link" href="#Hello_world">Hello world</a></li>
                <li><a className="nav-link" href="#Variables">Variables</a></li>
                <li><a className="nav-link" href="#Declaring_variables">Declaring variables</a></li>
                <li><a className="nav-link" href="#Variable_scope">Variable scope</a></li>
                <li><a className="nav-link" href="#Global_variables">Global variables</a></li>
                <li><a className="nav-link" href="#Constants">Constants</a></li>
                <li><a className="nav-link" href="#Data_types">Data types</a></li>
                <li><a className="nav-link" href="#if...else_statement">if...else statement</a></li>
                <li><a className="nav-link" href="#while_statement">while statement</a></li>
                <li><a className="nav-link" href="#Function_declarations">Function declarations</a></li>
                <li><a className="nav-link" href="#Reference">Reference</a></li>
            </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
