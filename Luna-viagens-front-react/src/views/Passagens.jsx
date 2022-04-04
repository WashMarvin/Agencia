import React from "react";


export default function Passagens() {
    return (
        <section className="screen_passagens">
            <main>
                <div className="sessao-texto">
                    <div className="sessao-cards">
                        <h1>Passagens promocionais</h1>
                        <div className="passagens">
                            <div className="card">
                                <div className="card-img-wrapper">
                                    <img src="./img/rio.png" alt="rio" />
                                </div>
                                <div className="card-info">
                                    <h3>Rio de Janeiro-RJ</h3>
                                    <p>Promoção para a cidade do Rio</p>
                                    <h4>R$ 124,00</h4>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-img-wrapper">
                                    <img src="./img/newyork.png" alt="new york" />
                                </div>
                                <div className="card-info">
                                    <h3>Nova York</h3>
                                    <p>Promoção para a cidade de Nova York - EUA</p>
                                    <h4>R$ 886,95</h4>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-img-wrapper">
                                    <img src="./img/buenosaires.png" alt="buenso aires" />
                                </div>
                                <div className="card-info">
                                    <h3>Buenos Aires</h3>
                                    <p>Promoção para a cidade de Buenos Aires na Argentina</p>
                                    <h4>R$ 234,00</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}