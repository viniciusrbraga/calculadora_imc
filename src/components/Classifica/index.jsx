// import styles from './Classifica.module.css'
import Exibe from "../Exibe"

const Classifica = ({ imc }) => {
    const classificaValor = () => {
        let it = 0;

        if (isNaN(imc) || imc === 0 || !isFinite(imc)) {
            return 'Informe os valores àcima'
        } else if (imc < 16) {
            // return 'menores que 16    - magreza grave'
            return 0
        } else if (imc >= 16 & imc < 16.9) {
            // return 'entre 16   e 16,9 - magreza moderada'
            return 1
        } else if (imc >= 17 & imc < 18.5) {
            // return 'entre 17   e 18,5 - magreza leve'
            return 2
        } else if (imc >= 18.5 & imc < 24.9) {
            // return 'entre 18,6 e 24,9 - peso ideal'
            return 3
        } else if (imc >= 25 & imc < 29.9) {
            // return 'entre 25   e 29,9 - sobrepeso'
            return 4
        } else if (imc >= 30 & imc < 34.9) {
            // return 'entre 30   e 34,9 - obesidade grau I'
            return 5
        } else if (imc >= 35 & imc < 39.9) {
            // return 'entre 35   e 39,9 - obesidade grau II ou severa'
            return 6
        } else {
            // return 'maiores do que 40 - obesidade grau III ou mórbida'
            return 7
        }
    }

    return (
        <header>
            <h3>
                <Exibe it={classificaValor()} />
            </h3>
        </header >
    )
}

export default Classifica;