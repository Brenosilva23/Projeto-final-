import React from "react";

function login(){
    return(
        <>
           <section className="log" >
            <div className="l1">
                <h1>
                    Veja momentos do dia a dia dos seus amigos próximos.
                    <img src="https://static.cdninstagram.com/rsrc.php/yR/r/92ZsVHNkyvf.webp" height={200} alt="" />
                </h1>
            </div>
            <div className="l2">
                <h3>
                    Entrar no Instagram
                </h3>
                <input type="text" placeholder="Número de celular, nome de usúario ou email"/>
                <input type="password" name="senha" id="1" placeholder="Senha" />
                <button type="button" class="btn-solid theme-primary">Entrar</button>
                <a type="button" class="btn-outline theme-secondary" href="https://www.instagram.com/accounts/password/reset/">Esqueceu a senha ?</a>
                <a type="button" class="nova" href="https://www.instagram.com/accounts/emailsignup/">Criar nova Conta</a>
            </div>
           </section>
        </>
    );
}

export default login;