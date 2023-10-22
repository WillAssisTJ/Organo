import './Banner.css'

export function Banner() {
    //JSX - a forma como o react trabalha o visual
    return (
        <header className="banner"> 
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo" />
        </header>//como aqui é JS e não HTML, tenho que usar className para importar algo do CSS
    )
}

