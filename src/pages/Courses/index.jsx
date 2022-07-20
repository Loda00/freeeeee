import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import CardList from '../../components/CardList'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Store } from '../../utils/Store'

import './style.css'

const Courses = () => {

  const [dataCourses, setDataCourses ] = useState([])
  const [coursesSelected, setCoursesSelected] = useState([])

  const getDataCourses = async () => {
    const data = await fetch('http://localhost:4000/course')
    const json = await data.json()
    setDataCourses(json)
  }

  useEffect(() => {
    getDataCourses()
  }, [])

  const addCourse = (item) => {
    const data = Store.getData()

    if (data?.length === 0) {
      Store.setData([item])
      setCoursesSelected([item])
    } else {
      if (data) {
        const set = new Set([...data, item].map( JSON.stringify ))
        const newData = Array.from( set ).map( JSON.parse )
        Store.setData(newData)
        setCoursesSelected(newData)
      } else {
        Store.setData([item])
        setCoursesSelected([item])
      }
    }
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/courses">Cursos en venta</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
          {<p style={{ color: 'white' }}>
            <Link to="/resumen">
            <img style={{ width: '20px', cursor: 'pointer' }} src="https://images.emojiterra.com/google/android-11/512px/1f6d2.png" alt="" />  
            </Link>{coursesSelected.length}
          </p>}
        </Container>
      </Navbar>
      <div className="courses__wrapper">
        {dataCourses.length > 0 && 
        dataCourses.map((data, i) => (
          <CardList key={i} data={data} addCourse={addCourse} pay={false} />
        ))}
      </div>
    </>
  )
}

export default Courses