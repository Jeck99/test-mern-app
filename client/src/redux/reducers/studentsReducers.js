import { ADD_STUDENT, SHOW_STUDENTS, DELETE_STUDENT } from "../actions/types";

export default function studentsReducer(state = { students: [] }, action) {
    switch (action.type) {
        case ADD_STUDENT:
            return { students: [...state.students, action.payload] };
        case SHOW_STUDENTS:
            return {...state.students }
        case DELETE_STUDENT:
            return {...state.students, students: state.students.filter(student => student._id !== action.payload) }
        default:
            return state;
    }
}
