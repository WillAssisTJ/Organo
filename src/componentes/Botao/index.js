import './Botao.css'

export const Botao = (props) => {
    return (<button className='botao'>
        {props.children}
    </button>)//usando children podemos colocar depois, por exemplo, imagens dentro de um botão
}