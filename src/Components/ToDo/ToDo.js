import React from "react";
import './ToDo.css'
import {editTask} from "../../redux/task/reducer";
import {useDispatch} from "react-redux";

export const ToDo = ({todo})=>{
    const dispatch = useDispatch()
    return(
        <div className="modal-dialog position-relative tablo" >
            <div className="modal-content">
                <div className="modal-header border-bottom-0">
                    <h5 className="modal-title">{todo.title}</h5>
                </div>
                <div className="modal-body py-0">
                    <p>{todo.desc}</p>
                    <h5 className='priority'>{todo.priority}</h5>
                </div>
                <div className="modal-footer border-left-0">
                    <button type="button" onClick={() => dispatch(editTask(todo.id))} className="btn btn-sm save mx-2 mb-2">Edit</button>
                </div>
            </div>
        </div>
    )
}