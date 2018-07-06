import {EMPLOYEE_CREATE, EMPLOYEE_SAVE_SUCCESS, EMPLOYEE_UPDATE} from "../actions/types";

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''// we can set default value here OR EmployeeCreate.js -> onButtonPress() here we can set default value
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {

        case EMPLOYEE_UPDATE:
            //action.payload === {prop: 'name',value:'virendra'}
            // we are doing key interpolation, and key will be determined at runtime
            return {...state, [action.payload.prop]: action.payload.value};
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
}