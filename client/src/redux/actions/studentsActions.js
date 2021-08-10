import { ADD_STUDENT,SHOW_STUDENTS,DELETE_STUDENT } from "./types";

/**
 * add student action 
 * @param {Student} studentItem 
 * @payload studentItem
 * @type ADD_STUDENT
 */
export const addStudent = (studentItem) => {
    return { type: ADD_STUDENT, payload: studentItem }
}

/**
 * show all students action 
 * @param {Student} studentItem 
 * @type SHOW_STUDENTS
 */
export const showStudent = () => {
    return { type: SHOW_STUDENTS }
}
/**
 * delete student action 
 * @param {Student} studentId 
 * @type SHOW_STUDENTS
 */
export const deleteStudent = (studentId) =>{
    return {type:DELETE_STUDENT , payload:studentId}
}