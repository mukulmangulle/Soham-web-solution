import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Down from "./assets/down-arow.svg"


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
            <div style={{ cursor: 'pointer' }} className='navbar-ul' onClick={toggleMenu}>
                <img className='down-arrow' src={Down} alt="" />
            </div>
            {isOpen && (
                <div style={{ borderRadius: 5, position: 'absolute', top: '100%', left: '0', width: "250px", color: "#053480", background: "white", border: '1px solid #ccc' }}>
                    <ul style={{ display: "flex", flexDirection: "column", listStyleType: 'none', margin: 0, padding: 0, marginTop: 15, width: "280px", marginBottom: 15, marginLeft: 10 }} >
                        {/*                       
                        <Link style={{ padding: '10px', textDecoration: "none" }}>Website Development</Link>
                        <Link style={{ padding: '10px', textDecoration: "none" }}>Ecommerce Development</Link>
                        <Link style={{ padding: '10px', textDecoration: "none" }} >Website Designing</Link>
                        <Link style={{ padding: '10px', textDecoration: "none" }} >Mobile App Development</Link>

 */}

                        <Link to={`/${process.env.SLUG_URL}/services/php-development/`} style={{ padding: '10px', textDecoration: "none" }} onClick={closeMenu}>PHP Development</Link>
                        <Link to={`/${process.env.SLUG_URL}/services/wordpress-development/`} style={{ padding: '10px', textDecoration: "none" }} onClick={closeMenu}>Wordpress Development</Link>
                        <Link to={`/${process.env.SLUG_URL}/services/shopify-development/`} style={{ padding: '10px', textDecoration: "none" }} onClick={closeMenu}>Shopify Development</Link>
                        <Link to={`/${process.env.SLUG_URL}/services/web-designing/`} style={{ padding: '10px', textDecoration: "none" }} onClick={closeMenu}>Website Designing</Link>
                        <Link to={`/${process.env.SLUG_URL}/services/graphic-designing/`} style={{ padding: '10px', textDecoration: "none" }} onClick={closeMenu}>Graphic Designing</Link>
                        <Link to={`/${process.env.SLUG_URL}/services/ecommerce-development/`} style={{ padding: '10px', textDecoration: "none" }} onClick={closeMenu}>E-commerce Development</Link>

                        <Link to={`/${process.env.SLUG_URL}/services/laraval-development/`} style={{ padding: '10px', textDecoration: "none" }} onClick={closeMenu}>Laravel Development</Link>

                        <Link to={`/${process.env.SLUG_URL}/services/Codeigniter_development/`} style={{ padding: '10px', textDecoration: "none" }} onClick={closeMenu}>CodeIgniter Development</Link>

                        <Link to={`/${process.env.SLUG_URL}/react-native-development/`} style={{ padding: '10px', textDecoration: "none" }} onClick={closeMenu}>React Native Development</Link>


                    </ul>
                </div>
            )}
        </div>
    );
}

export default ServicesMenu;



