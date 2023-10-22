import { Colaborador } from '../Colaborador'
import './Time.css'

export const Time = (props) => {
    return (
        //poderia ser criada uma constante: const css = {backgroundColor: props.corSecundaria} e dentro da tag style: {css} ------ embaixo ta uma renderização condicional
        props.colaboradores.length > 0 && <section className='time' style={{backgroundColor: props.corSecundaria}} > 
            <h3 style={{borderColor:props.corPrimaria}} >{props.nome}</h3>
            <div className='colaboradores'>
                 {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)} 
            </div>
        </section>
    )
}