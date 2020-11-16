import React, { useContext } from "react"
import { Button, TextField } from "@material-ui/core"
import { useState } from "react"
import Validacao from "../../context/validacoes"

const DadosUsuario = ({ aoEnviar }) => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const [erros, setErros] = useState({ senha: { valido: true, texto: "" } })
    const validacoes = useContext(Validacao)
    const validarCampos = (event) => {
      const { name, value } = event.target
      const novoEstado = { ...erros }
      novoEstado[name] = validacoes[name](value)
      setErros(novoEstado)
  
    }

    const possoEnviar = () => {
        for(let campo in erros){
            if(!erros[campo].valido){
                return false
            }
        }
        return true;
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({ email, senha })
            }
        }}>
            <TextField id="email"
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value)
                }}
                label="email"
                type="email"
                required
                variant="outlined"
                margin="normal"
                fullWidth />
            <TextField id="senha"
                value={senha}
                onChange={(event) => {
                    setSenha(event.target.value)
                }}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                label="senha"
                type="password"
                name="senha"
                required
                variant="outlined"
                margin="normal"
                fullWidth />
            <Button type="submit"
                variant="contained"
                color="primary">Proximo</Button>
        </form>
    )
}

export default DadosUsuario