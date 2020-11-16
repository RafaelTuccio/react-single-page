import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';
import { validarCPF, validarSenha } from './models/cadastro'
import Validacao from './context/validacoes'
import { Container, Typography } from "@material-ui/core"

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
        <Validacao.Provider value={{ cpf: validarCPF, senha: validarSenha }}>
          <FormularioCadastro aoEnviar={aoEnviar} />
        </Validacao.Provider>
      </Container>
    );
  }
}

function aoEnviar(dados) {
  console.log(dados);
}



export default App;
