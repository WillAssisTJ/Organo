import { useState } from 'react'
import './CampoTexto.css'

// let valor = ''




export const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label> {props.label} </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>//onChange como que "ouve" o que está sendo escrito e podemos atribuir a uma variável
    ) // pode ser qualquer coisa, não necessariamente props, mas é padrão
}

