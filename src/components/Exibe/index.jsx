// import styles from './Exibe.module.css'

const Exibe = ({ it }) => {

    const tabela = [
        'menores que 16      - magreza grave',
        'entre 16    e 16, 9 - magreza moderada',
        'entre 17    e 18, 5 - magreza leve',
        'entre 18, 6 e 24, 9 - peso ideal',
        'entre 25    e 29, 9 - sobrepeso',
        'entre 30    e 34, 9 - obesidade grau I',
        'entre 35    e 39, 9 - obesidade grau II ou severa',
        'maiores do que 40 - obesidade grau III ou mórbida']

    const exibeClassificacao = () => {
        return (
            tabela[it]
            // <ul>
            //     {tabela.map((item) => <li key={item}>{item}</li>)}
            // </ul>
        )
    }

return (
    <header>
        {exibeClassificacao()}
    </header >
)
}

export default Exibe;