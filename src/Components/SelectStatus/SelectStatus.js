import React from "react";
import './SelectStatus.css'
import {ToDo} from "../ToDo";
import {useSelector} from "react-redux";

export const SelectStatus = ()=>{

    const todos = useSelector((state)=>{
        return state.tasks.itemsInColumns;
    });

    const todo = ()=>{
        if (todos.length) {
            return (
                todos.map(item => {
                    if (item.status === 'To Do') {
                        return (
                            <ToDo todo={item} key={item.id}/>
                        )
                    }
                })
            )
        }
    }
    const doing = ()=>{
        if (todos.length) {
            return (
                todos.map(item => {
                    if (item.status === 'Doing') {
                        return (
                            <ToDo todo={item} key={item.id}/>
                        )
                    }
                })
            )
        }
    }
    const done = ()=>{
        if (todos.length) {
            return (
                todos.map(item => {
                    if (item.status === 'Done') {
                        return (
                            <ToDo todo={item} key={item.id}/>
                        )
                    }
                })
            )
        }
    }

    return (
        <>
            <div className='ToDo'>
                <h3 className='name'>To Do</h3>
                {todo()}
            </div>
            <div className='Doing'>
                <h3 className='name'>Doing</h3>
                {doing()}
            </div>
            <div className='Done'>
                <h3 className='name'>Done</h3>
                {done()}
            </div>
        </>

    )

}