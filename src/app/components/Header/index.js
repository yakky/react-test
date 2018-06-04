import React from 'react';

export const Header = (props) => {
  return (
    <nav className="navbar navbar-expan navbar-dark bg-dark">
        <div className="container">
          <div className="navbar-header">
            <h3>{props.title}</h3>
            <ul className="nav navbar-nav">
              {props.items.map((item) => <li key={item.key} className="nav-item active"><a className="nav-link" href="{item.link}">{item.title}</a></li>)}
            </ul>
          </div>
        </div>
      </nav>
  );
};
