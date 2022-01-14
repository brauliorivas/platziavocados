import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <div className="footer-info-item">
                    <h4>Nosotros</h4>
                    <Link href="/about">
                        <a>
                            <p className="mas">Conoce más</p>
                        </a>
                    </Link>
                </div>
                <div className="footer-info-item">
                    <h4>Servicios</h4>
                    <p><a href="#top">Todos los productos</a></p>
                </div>
                <div className="footer-info-item">
                    <h4>Hecho para</h4>
                    <p><a href="https://platzi.com/home" target="_blank">Platzi y su curso de Next.js</a><span> de Platzi dictador por</span> <a href="https://twitter.com/jonalvarezz" target="_blank">@jonalvarezz</a></p>
                    <div className="footer-info-item-social">
                        <div className="red">
                            <i className="fab fa-twitter"></i>
                            <p><a href="https://twitter.com/brolio04">Twitter</a></p>
                        </div>
                        <div className="red">
                            <i className="fab fa-github"></i>
                            <p><a href="https://github.com/brauliorivas">Github</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-credits">
                <p>Icons made by <a href="https://www.freepik.es/" target="_blank">Freepik</a> from <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a></p>
                <p>Avocado images taken from <a href="https://californiaavocado.com/avocado101/avocado-varieties/" target="_blank">Avocado 101</a> at <a href="https://californiaavocado.com/" target="_blank">California Avocado</a></p>
            </div>
            <style jsx>{`
                .footer {
                    width: 100%;
                    padding-left: 20px;
                    padding-top: 56px;
                    padding-bottom: 56px;
                    border-top: 1px solid rgb(242 242 242);
                    margin-top: 40px;
                    font-family: Lato,Helvetica Neue,Arial,Helvetica,sans-serif;
                }
                .footer a {
                    text-decoration: none;
                    color: rgb(0 174 236);
                }
                .footer-info {
                    display: flex;
                    flex-direction: column;
                }      
                .footer-info-item {
                    margin-top: 14px;
                    margin-bottom: 14px;
                }
                .footer-info-item h4 {
                    font-size: 1.5rem;
                    margin-top: 0;
                    margin-bottom: 14px;
                }   
                .footer-info-item p {
                    font-size: 1.6rem;
                    color: #d4d4d5;
                    margin: 0;
                }
                .footer-info-item p span {
                    color: black;
                }
                .footer-info-item-social {
                    display: flex;
                    flex-direction: row;
                    font-size: 1.4rem;
                    margin-top: 16px;
                }
                .footer-info-item-social p {
                    color: #d4d4d5;
                }
                .red {
                    display: flex;
                    flex-direction: row;
                }
                .red i {
                    margin-right: 10px;
                }
                .red p {
                    margin-right: 10px;
                }
                .footer-credits {
                    text-align: center;
                    margin-top: 44px;
                }
                .footer-credits p {
                    font-size: 1.1rem;
                    padding-right: 20px;
                }
                .mas {
                    color: rgb(0 174 236) !important;
                }
                @media (min-width: 768px) {
                    .footer-info {
                        flex-direction: row;
                        justify-content: space-evenly;
                    }
                    .footer-info-item {
                        width: 25%;
                    }
                }
        `}</style>
        </footer>
    );
}

export default Footer;