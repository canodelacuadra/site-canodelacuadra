import React from 'react';

const Button = ({ onClick, children, style, type = 'button' }) => {
    const defaultStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        ...style, // Permite sobreescribir estilos por medio de props
    };

    const handleHover = (e) => {
        e.target.style.backgroundColor = '#0056b3';
    };

    const handleMouseOut = (e) => {
        e.target.style.backgroundColor = '#007bff';
    };

    return (
        <button
            type={type}
            onClick={onClick}
            style={defaultStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseOut}
        >
            {children}
        </button>
    );
};

export default Button;
