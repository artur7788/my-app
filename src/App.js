import './App.css';
import {AddTaskModal} from "./Components/AddTaskModal";
import {SelectStatus} from "./Components/SelectStatus";
import {useDispatch, useSelector} from "react-redux";
import {modalOpenClose, setTask} from './redux/task/reducer'

function App() {
    const dispatch = useDispatch()


    const show = useSelector((state)=>{
        return state.tasks.showModal
    });

  return (
      <>
          <div className="App">
              <h5 className='text'>TASK MANAGEMENT PLATFORM</h5>
              <div className='header'>
                  <button type="button" className="btn btn-light addTask" onClick={() => dispatch(modalOpenClose(true))}>
                      Add task
                  </button>
              </div>
              <div className='parent'>
                  <SelectStatus/>
              </div>
          </div>
          {show && <AddTaskModal/>}
      </>
  );
}

export default App;


