import { Step, Stepper, Typography, StepLabel } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import DadosEntraga from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadosColetados, setDados] = useState({})
  useEffect(() => {
    if(etapaAtual === formularios.length -1){
      aoEnviar(dadosColetados)
    }
  })

  const coletarDados = (dados) => {
    setDados({...dadosColetados, ...dados});
    console.log(dadosColetados)
    proximo();
  }
  const proximo = () => (setEtapaAtual(etapaAtual + 1))
  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntraga aoEnviar={coletarDados} />,
    <Typography variant="h5">Cadastro efetuado com sucesso</Typography>
  ]
  


  return (
    <>
    <Stepper activeStep={etapaAtual}>
      <Step><StepLabel>Login</StepLabel></Step>
      <Step><StepLabel>Pessoal</StepLabel></Step>
      <Step><StepLabel>Entrega</StepLabel></Step>
      <Step><StepLabel>Finalização</StepLabel></Step>
    </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
