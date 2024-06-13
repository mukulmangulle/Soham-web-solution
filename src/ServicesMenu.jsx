import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function ServicesMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div style={{ position: 'relative' }} ref={menuRef}>
            <div style={{ cursor: 'pointer' }} onClick={toggleMenu}>Services</div>
            {isOpen && (
                <div style={{ borderRadius: 20, position: 'absolute', top: '100%', left: '0', width: "280px", color: "#053480", background: "white", border: '1px solid #ccc' }}>
                    <ul style={{ display: "flex", flexDirection: "column", listStyleType: 'none', margin: 0, padding: 0, marginTop: 15, width: "280px", marginBottom: 15, marginLeft: 20 }} >
                    <Link to={`/${process.env.SLUG_URL}/services/php-development/`} style={{ padding: '12px', textDecoration: "none" }} onClick={closeMenu}>Php Development</Link>
                    <Link to={`/${process.env.SLUG_URL}/services/wordpress-development/`} style={{ padding: '12px', textDecoration: "none" }} onClick={closeMenu}>Wordpress Development</Link>
                    <Link to={`/${process.env.SLUG_URL}/services/shopify-development/`} style={{ padding: '12px', textDecoration: "none" }} onClick={closeMenu}>Shopify Development</Link>
                    <Link to={`/${process.env.SLUG_URL}/services/web-designing/`} style={{ padding: '12px', textDecoration: "none" }} onClick={closeMenu}>Web Designing</Link>
                    <Link to={`/${process.env.SLUG_URL}/services/graphic-designing/`} style={{ padding: '12px', textDecoration: "none" }} onClick={closeMenu}>Graphic Designing</Link>
                    <Link to={`/${process.env.SLUG_URL}/services/ecommerce-development/`} style={{ padding: '12px', textDecoration: "none" }} onClick={closeMenu}>Ecommerce Development</Link>

                    </ul>
                </div>
            )}
        </div>
    );
}

export default ServicesMenu;
