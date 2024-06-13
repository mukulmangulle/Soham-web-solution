import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function CompanyMenu() {
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
            <div style={{ cursor: 'pointer' }} onClick={toggleMenu}>Company</div>
            {isOpen && (
                <div style={{ borderRadius: 20, position: 'absolute', top: '100%', left: '0', width: "280px", color: "#053480", background: "white", border: '1px solid #ccc' }}>
                    <ul style={{ display: "flex", flexDirection: "column", listStyleType: 'none', margin: 0, padding: 0, marginTop: 15, width: "280px", marginBottom: 15, marginLeft: 20 }} >
                        <Link to={`/${process.env.SLUG_URL}/about/`} style={{ padding: '12px', textDecoration: "none" }} onClick={closeMenu}>About us</Link>
                        <Link to={`/${process.env.SLUG_URL}/career/`} style={{ padding: '12px', textDecoration: "none" }} onClick={closeMenu}>Career</Link>
                        <Link to={`/${process.env.SLUG_URL}/services/`} style={{ padding: '12px', textDecoration: "none" }} onClick={closeMenu}>Service</Link>
                        <Link to={`/${process.env.SLUG_URL}/blogs/`} style={{ padding: '12px', textDecoration: "none" }} onClick={closeMenu}>Blogs</Link>
                        <Link to={`/${process.env.SLUG_URL}/contact-us/`} style={{ padding: '12px', textDecoration: "none" }} onClick={closeMenu}>Contact us</Link>
                        <Link to={`/${process.env.SLUG_URL}/bloges`} style={{ padding: '12px', textDecoration: "none" }} onClick={closeMenu}> blog</Link>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default CompanyMenu;
