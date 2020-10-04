import {UPDATE_ASSIGNMENT_SUCCESS} from './assignmentConst';
export const updateSuccess = (newAssignments) => ({type:UPDATE_ASSIGNMENT_SUCCESS,payload:newAssignments}); 
export const updateAssignment = (dispatch,newAssignments) => {
    dispatch(updateSuccess(newAssignments));
}