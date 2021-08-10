// const PORT = process.env.PORT || 8080;
const API =process.env.NODE_ENV === 'production'? `https://test-meern-app.herokuapp.com/api`:'http://localhost:8080/api';
/**
 * async function that updating the students state
 * and returns the students
 * * @returns {data:students array,success:bool}
 */
export async function getAllStudents() {
    try {
        return await fetch(`${API}/students`)
            .then((res) => { return res.json() })
            .then(results => { return results.data })
    } catch (error) {
        console.log(error);
    }
}
/**
 * async function that add a new student
 * and returns the student 
 * * @returns {data:students array,success:bool}
 */
export async function saveStudent(studentToSave) {
    const options = {
        method: "POST",
        body:JSON.stringify({ student: studentToSave }),
        headers:{'Content-Type': 'application/json'}
    }
    try {
        return await fetch(`${API}/students`,options)
            .then((res) => { return res.json() })
    } catch (error) {
        console.log(error);
    }
}
/**
 * async function that add a new student
 * and returns the student 
 * * @returns {data:students array,success:bool}
 */
 export async function removeStudent(studentId) {
    const options = {
        method: "DELETE",
        headers:{'Content-Type': 'application/json'}
    }
    try {
        return await fetch(`${API}/students/${studentId}`,options)
            .then((res) => { return res.json() })
    } catch (error) {
        console.log(error);
    }
}