import React from "react";


function Footer()
{
    const currentdate=new Date().getFullYear();
    return <footer>
        <p>
        Copyright@ {currentdate}
    </p>
    </footer> 
    ;
}


export default Footer;
