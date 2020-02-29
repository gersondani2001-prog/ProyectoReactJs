//exportamos los archivos necesarios
import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'

//funcion constante con parametros form onchange y onsubmit desde el formulario
const ExerciseNew = ({form, onChange, onSubmit}) => (
    //imprimimos
    //claramos car aqui para poner imprimir desde un sistema de enrutamiento
    //llamamos funciones desde un modulo de state
    <div className="ExerciseNew_Lateral_Spaces row">
        <div className="col-sm ExerciseNew_Card_Space">
            <Card 
                {...form}
            />
        </div>
        <div className="col-sm ExerciseNew_Form_Space">
            <ExerciseForm
                onChange={onChange}
                onSubmit={onSubmit}
                form={form}
            />            
        </div>
    </div>
)

export default ExerciseNew