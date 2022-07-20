import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

import CardList from '../../components/CardList'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Store } from '../../utils/Store'

import './style.css'

const Resume = () => {
  const [show, setShow] = useState(false);
  const [dataCourse, setDataCourse] = useState(Store.getData())
  console.log('Store.getData(): ', Store.getData(), dataCourse)
  const deleteCourse = (data) => {

    const newData = Store.getData().filter((item) => item.id !== data.id)

    Store.setData(newData)
    setDataCourse(newData)
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getPriceTotal = useMemo(() => {
    let total = 0
    if (dataCourse?.length > 0) {
      dataCourse.forEach((item) => {
        total += item.precio
      })
    }
    return total
  }, [dataCourse])

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/courses">Cursos en venta</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
          {<p style={{ color: 'white' }}> <img style={{ width: '20px', cursor: 'pointer' }} src="https://images.emojiterra.com/google/android-11/512px/1f6d2.png" alt="" />{dataCourse?.length}</p>}
        </Container>
      </Navbar>
      <div className="resume__wrapper">
        <h3>Cesta</h3>
        {
          dataCourse?.length > 0 &&
          dataCourse?.map((data, i) => (
            <CardList key={i} data={data} deleteCourse={deleteCourse} />
          ))
        }
        {dataCourse?.length === 0 && <p>No hay items en la cesta.</p>}
        <br />
        <Button variant="primary" disabled={dataCourse?.length === 0 || !dataCourse} onClick={handleShow}>
          Pagar
        </Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <span style={{ fontSize: '20px' }}>S/. {getPriceTotal.toFixed(2)}</span>
        
        <Modal show={show} onHide={() => {
          handleClose()
          setDataCourse()
          Store.cleanData()
        }}>
        <Modal.Header closeButton>
          <Modal.Title>Notificación de pago</Modal.Title>
        </Modal.Header>
        <Modal.Body>El monto correspondiente a S/. {getPriceTotal.toFixed(2)} ha sido procesado con éxito</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => {
          handleClose()
          setDataCourse()
          Store.cleanData()
        }}>
            Aceptar
          </Button>
        </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default Resume