import DadosUsuario from "./DadosUsuario"

import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { useState } from "react"

const DadosEntraga = ({aoEnviar}) => {
    const [cep, setCep] = useState("")
    const [endereco, setEndereco] = useState("")
    const [numero, setNumero] = useState("")
    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            aoEnviar({ cep, endereco, numero, estado, cidade })
        }} 
        >
            <TextField id="cep"
                value={cep}
                onChange={(event) => {
                    setCep(event.target.value)
                }}
                label="cep"
                type="number"
                variant="outlined"
                margin="normal"
            />
            <TextField id="endereco"
                value={endereco}
                onChange={(event) => {
                    setEndereco(event.target.value)
                }}
                label="endereço"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth />
            <TextField id="numero"
                value={numero}
                onChange={(event) => {
                    setNumero(event.target.value)
                }}
                label="numero"
                type="number"
                variant="outlined"
                margin="normal"
            />
            <TextField id="estado"
                value={estado}
                onChange={(event) => {
                    setEstado(event.target.value)
                }}
                label="estado"
                type="text"
                variant="outlined"
                margin="normal"
            />
            <TextField id="cidade"
                value={cidade}
                onChange={(event) => {
                    setCidade(event.target.value)
                }}
                label="cidade"
                type="text"
                variant="outlined"
                margin="normal"
            />
            <Button type="submit"
                variant="contained"
                color="primary"
                fullWidth>Finalizar Cadastro</Button>
        </form>
    )
}
export default DadosEntraga