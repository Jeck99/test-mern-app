import React, { useState, useEffect } from 'react';
import { getAllStudents } from "../../../service/students.service";
import {StudentCard} from "../../../components";
import './home.css';
export default function Home(props) {
    const [students, setStudents] = useState([]);
    useEffect(getStudents, [])

    function getStudents() {
        getAllStudents().then((res) => { setStudents(res) })
    }
    return (
        <div id={"homeDiv"}>
            home
            {students ? React.Children.toArray(students.map((item) => { return <StudentCard image={"pictures/loader.gif"} title={item.firstName} text={item.age} /> })) : ''}
        </div>
    )
}
