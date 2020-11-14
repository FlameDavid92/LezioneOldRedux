import TodoList from '../Components/TodoList';
import {connect} from 'react-redux';
import {removeTodo} from '../Actions/index';
//la connect serve a connettere il componente allo store

//la prima funzione della connect si occupa di prendere le proprietà dello store e di passarle al componente
//di solito questa prima funzione prende il nome di MapStateToProps

//la seconda funzione che accetta la connect si preoccupa di prendere i metodi
//che andranno a fare la dispatch verso lo store
//di solito questa seconda funzione prende il nome di MapDispatchToProps

const mapStateToProps = (state) => {
    return {
        todos : [...state.todos]
    }
}
export default connect(mapStateToProps,{removeTodo})(TodoList);
/*
const myConnect = connect(mapStateToProps)

const MyTODOLIST = myConnect(TodoList);

export default MyTODOLIST;
*/