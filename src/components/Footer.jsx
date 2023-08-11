import React from 'react';

function Footer() {

    const date = new Date();
    const currentYear = date.getFullYear();

    return (<footer> <p>copy right © {currentYear} Anne Chaiyato</p></footer>);

}

export default Footer;