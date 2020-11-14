import AddTodo from '../Components/AddTodo';
import {connect} from 'react-redux';
import {addTodo} from '../Actions/index';

const mapDispatchToProps = (dispatch) => {
    return {
        //questo addTodo rappresenta la props che si aspetta il componente AddTodo Non la Action
        addTodo : (todo)=>{
            dispatch(addTodo(todo));
        }
    }
}
export default connect(null,mapDispatchToProps)(AddTodo);