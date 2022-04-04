import React from "react";

export default function Pacotes() {
    return (
        <section className="screen_pacotes">
            <main>
                <div className="sessao-texto">
                    <div className="sessao-cards">
                        <h1>Nossos pacotes</h1>
                        <div className="passagens">
                            <div className="card">
                                <div className="card-img-wrapper">
                                    <img src="./img/salvador.png" alt="salvador" />
                                </div>
                                <div className="card-info">
                                    <h3>Salvador - BA</h3>
                                    <p>Conheça este pacote para a cidade de Salvador na Bahia</p>
                                    <h4>R$ 124,00</h4>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-img-wrapper">
                                    <img src="./img/saopaulo.png" alt="sao paulo" />
                                </div>
                                <div className="card-info">
                                    <h3>São Paulo</h3>
                                    <p>Conheça nossos pacotes para a cidade de São Paulo</p>
                                    <h4>R$ 450,00</h4>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-img-wrapper">
                                    <img src="./img/curitiba.png" alt="curitiba" />
                                </div>
                                <div className="card-info">
                                    <h3>Curitiba-PR</h3>
                                    <p>Temos um pacote magnífico para a cidade de Curitiba</p>
                                    <h4>R$ 198,00</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}