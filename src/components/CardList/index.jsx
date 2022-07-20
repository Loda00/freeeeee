import React, { Fragment } from 'react'

import Button from '../Button'

import './style.css'

const CardList = ({ data = {}, addCourse, pay = true, deleteCourse }) => {
  return (
    <div className="card-list__wrapper">
      <div className="card-list__image">
        <img src={data.imagen} alt="" srcset="" />
      </div>
      <div  className="card-list__info">
        <p>{data.titulo}</p>
        <span>{data.descripcion}</span> <br />
        <span>{data.tutor}</span> <br />
        <span>{data.numeroHoras} - {data.numeroClases}</span> <br />
      </div>
      <div className="card-list__pay">
        {
          pay ? 
          (
            <>
              <p style={{ cursor: 'pointer' }} onClick={() => deleteCourse(data)}>Eliminar</p>
              <p>S/. {data.precio.toFixed(2)}</p>
            </>
          )
          : (
            <>
              <p>S/. {data.precio.toFixed(2)}</p>
              <Button onClick={() => addCourse(data)} name="Añadir a la cesta" />
            </>
          )
        }
      </div>
    </div>
  )
}

export default CardList