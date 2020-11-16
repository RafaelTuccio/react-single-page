const validarCPF = (cpf) => {
    if (cpf.length !== 11) {
        return { valido: false, texto: "CPF deve ter 11 digitos." }
    } else {
        return { valido: true, texto: "" }
    }
}

const validarSenha = (senha) => {
    if (senha.length < 4 || senha.length > 72) {
        return { valido: false, texto: "senha deve ter entre 4 e 72 digitos" }
    } else {
        return { valido: true, texto: "" }
    }
} 

export {validarCPF, validarSenha}