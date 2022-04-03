import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setTask, updateTask} from "../../redux/task/reducer";
import {useState} from "react";
import './AddTaskModal.css'
import {modalOpenClose} from '../../redux/task/reducer'

export const AddTaskModal = ()=>{
    const modalData = useSelector((state)=>{
        return state.tasks.modalData;
    });

    const createButton = useSelector((state)=>{
        return state.tasks.createButton;
    });

    const dispatch = useDispatch()
    const [id, setId] = useState(modalData.id);
    const [title, setTitle] = useState(modalData.title);
    const [desc, setDesc] = useState(modalData.desc);
    const [status, setStatus] = useState(modalData.status)
    const [priority, setPriority] = useState(modalData.priority)

    const submit = () =>{
        if(title.trim().length === 0){
            alert("Enter a task before adding !!");
            setTitle("");
            return;
        }
        if (createButton) {
            dispatch(
                setTask({
                    id:id,
                    title: title,
                    desc:desc,
                    status:status,
                    priority:priority
                }),
            );
            setTitle("");
            setDesc("");
            setStatus("To Do");
            setPriority("Low")
        } else {
            dispatch(
                updateTask({
                    id:id,
                    title: title,
                    desc:desc,
                    status:status,
                    priority:priority
                }),
            );
        }
    };

    return(
            <div className='back'>
                <div className="modal-dialog popup" role="document" >
                    <div className="modal-content rounded-6 shadow-lg">
                        <div className="modal-header border-bottom-0">
                            <h5 className="modal-title">Add Task</h5>
                            <h3 className='close' onClick={() => dispatch(modalOpenClose(false))}>X</h3>
                        </div>
                        <div className="modal-body py-0" id={id}>

                            <input className="form-control mb-3"  name='title' value={title} type="text" placeholder="Title" onChange={
                                (event) => setTitle(event.target.value)}/>

                            <input className="form-control mb-3" name='desc' value={desc} type="text" placeholder="Description" onChange={
                                (event) => setDesc(event.target.value)}/>

                            Status
                            <select className="form-control mb-3" onChange={
                                (event) =>
                                    setStatus(event.target.value)
                            } value={status}>
                                <option value='To Do'>To do</option>
                                <option value='Doing'>Doing</option>
                                <option value='Done'>Done</option>
                            </select>
                            Priority
                            <select className="form-control" onChange={
                                (event) =>
                                    setPriority(event.target.value)
                            } value={priority}>
                                <option value='Low'>Low</option>
                                <option value='Normal'>Normal</option>
                                <option value='High'>High</option>
                            </select>
                        </div>
                        <div className="modal-footer flex-column border-top-0">
                            <button type="button" className="btn save mx-0 mb-2" onClick={submit}>{createButton?'Add Task':'Save'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}