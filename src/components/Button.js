// src/components/Button.js
import React from 'react';
import './Button.css';

function Button({ label, onClick, type = 'button', styleClass = '', disabled = false, icon = null }) {
    return (
        <button className={styleClass} type={type} onClick={onClick} disabled={disabled}>
            {icon && <span className="button-icon">{icon}</span>}
            {label}
        </button>
    );
}

export default Button;
