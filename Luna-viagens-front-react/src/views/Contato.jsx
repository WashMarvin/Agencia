import React from "react";

export default function Contato() {
    return (
        <section className="screen_contato">
            <main>
                <div className="sessao-texto">
                    <h3>Contato</h3>
                    <div className="formulario">
                        <form>
                            <div className="form-label">
                                <label for="nome">Nome</label>
                            </div>
                            <div className="form-input">
                                <input type="text" name="nome" id="nome" placeholder="Nome completo" />
                            </div>
                            <div className="form-label">
                                <label for="email">E-mail</label>
                            </div>
                            <div className="form-input">
                                <input type="email" name="email" id="email" placeholder="Seu e-mail aqui" />
                            </div>
                            <div className="text-area">
                                <div className="form-label">
                                    <label for="txt">Seu texto aqui</label>
                                </div>
                                <textarea name="txt" id="txt" cols="46" rows="10"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </section>
    )
}