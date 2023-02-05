import React,{useState} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';
function change(name,age){
    return {type: 'CHANGE', name:name, age:age}
}
const initialState={
    name:'',
    age:''
}
function reducer(state= initialState, action){
    switch(action.type){
        case 'CHANGE':
            return {name: action.name, age: action.age}
        default:
            return state;
    }
}
function Update(state){
    return{
        name: state.name,
        age: state.age
    }
}
const action = {
    change
}
function Counter(props){
    const [person,setPerson] = useState('')
    const [age, setAge] = useState('');
    const [toDoEdit, setToDoEdit] = useState(null);
    function handleClick(){
        props.change(person,age)
    }
    function handleChangeName(e){
        setPerson(e.target.value);
    }
    function handleChangeAge(e){
        if(e.target.value > 0){
            setAge(e.target.value);
        }else{
            setAge('Invalid Age');
        }
        
    }
    return <div className='all'>
        <h1>Your Profile</h1>
    <div className='name'>
        <p>Your Name:{props.name}</p>
        <button onClick={()=>{setToDoEdit(0)}}>Edit</button>
        {toDoEdit === 0 ? (
            <div>
            <input type='text' onChange={handleChangeName} placeholder='Edit' />
            <button onClick={handleClick}>Update</button>
            </div>
        ):(
            console.log('Invalid')
        )}
    </div>
    <div className='age'>
    <p>Your age{props.age}</p>
        <button onClick={()=>{setToDoEdit(1)}}>Edit</button>
        {toDoEdit === 1 ? (
            <div>
            <input type='text' onChange={handleChangeAge} placeholder='Edit' />
            <button onClick={handleClick}>Update</button>
            </div>
        ):(
            console.log('Invalid')
        )}
    </div>
    <div className='save'>
        <button onClick={()=>{setToDoEdit(2)}}>Save</button>
    </div>
    </div>
}
const store = createStore(reducer);
const Count = connect(Update,action)(Counter);
function App(){
    return <Provider store={store}>
        <Count />
    </Provider>
}
export default App;