import React, { useState, useEffect } from 'react';
import {CostumeTable} from "../../../components";
import {getAllStudents} from "../../../service/students.service";

export default function StudentsList(props) {
    const [students, setStudents] = useState([]);
    useEffect(getStudents, [])

    function getStudents() {
        getAllStudents().then((res) => { setStudents(res) })
    }

    const tableColumns = [
        {
            name: "_id",
            label: "Id",
            options: {
                filter: true,
                sort: false
            },
        },
        {
            name: "firstName",
            label: "student Name",
            options: {
                filter: true,
                sort: true
            },
        },
        {
            name: "age",
            label: "Rating",
            options: {
                filter: true,
                sort: true
            },
        },
        {
            name: "createdAt",
            label: "Created At",
            options: {
                filter: true,
                sort: true
            },
        },
        {
            name: "updatedAt",
            label: "Last Update",
            options: {
                filter: true,
                sort: true
            },
        }
    ]
    return (
        <div>
            home
            <CostumeTable data={students} columns={tableColumns} title={"students Data"} />
        </div>
    )
}
