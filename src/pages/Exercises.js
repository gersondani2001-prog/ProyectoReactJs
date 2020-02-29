//importar archivos
import React, { Fragment } from 'react'
import Welcome from '../components/Welcome'
import ExerciseList from '../components/ExerciseList'
import AddButtom from '../components/AddButton'
//declarar const function
//iprimimos desde un fragment html etiqueta
const Exercises = ({data}) => ( 
    <Fragment>
        <Welcome 
            username="Gerson"
        />
        <ExerciseList 
            exercises={data}
        />
        <AddButtom />
    </Fragment>
)

export default Exercises