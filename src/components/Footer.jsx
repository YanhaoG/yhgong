import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return <footer className="footer-section" id="contact">
        <h6 className="copyright">Copyright© {currentYear} Jarvis Gong.</h6>
    </footer>

}

export default Footer;