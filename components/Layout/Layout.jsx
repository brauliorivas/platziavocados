import React from "react";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";

const Layout = ( { children }) => {
    return (
        <div className="container">
            <a id="top"></a>
            <Navbar />
            {children}
            <Footer />
            <style jsx>{`
                .container {
                    width: 100%;
                }
            `}</style>
        </div>
    );
}

export default Layout;