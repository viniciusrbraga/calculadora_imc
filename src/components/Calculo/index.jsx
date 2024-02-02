import Classifica from "../Classifica"

const Calculo = ({ peso, altura }) => {
    const imc = 0;

    return (
        <header>
            <div className="resposta">
                <Classifica imc={peso / (altura * altura)} />
            </div>
        </header >
    )
}

export default Calculo;