import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav
            className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
            style={{
                background: props.mode === 'dark' ? 'linear-gradient(90deg, #0d1117, #161b22)' : 'linear-gradient(90deg, #007bff, #6610f2)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
        >
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    {props.title}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            onClick={props.toggleMode}
                            id="darkModeSwitch"
                        />
                        <label className="form-check-label" htmlFor="darkModeSwitch">
                            {props.mode === 'dark' ? 'Disable Dark Mode' : 'Enable Dark Mode'}
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
    title: 'TextUtils',
    aboutText: 'About',
};
