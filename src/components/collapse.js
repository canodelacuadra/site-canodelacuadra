import React, { useState } from 'react';
import Button from './button';

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={{ border: '1px solid #ddd', borderRadius: '6px', margin: '2px 0' }}>
            <Button
                onClick={toggleCollapse}
            >
                {title}
            </Button>
            {isOpen && (
                <div style={{
                    padding: '2px',
                    borderTop: '1px solid #ddd',
                    backgroundColor: '#f7f7f7'

                }}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default Collapse;
