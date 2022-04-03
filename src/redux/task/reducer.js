import {createSlice} from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name:'Task',
    initialState:{
        itemsInColumns:[],
        showModal:false,
        createButton: true,
        modalData: {
            id: Math.random(),
            title: '',
            desc:'',
            status:'To Do',
            priority:'Low'
        },
    },
    reducers:{
        setTask: (state,action)=>{
            state.itemsInColumns.push(action.payload)
            state.showModal = false
        },
        editTask:(state,action)=>{
            state.showModal = true
            state.createButton = false
            let { itemsInColumns } = state;
            state.modalData = itemsInColumns.find((item) => item.id === action.payload);
        },
        updateTask:(state,action)=>{
            state.showModal = false
            let { itemsInColumns } = state;
            const index = itemsInColumns.findIndex((item) => item.id === action.payload.id);
            state.itemsInColumns[index] = action.payload
        },
        modalOpenClose:(state,action)=>{
            state.modalData = {
                id: Math.random(),
                title: '',
                desc:'',
                status:'To Do',
                priority:'Low'
            }
            state.createButton = true
            state.showModal = action.payload
        }
    }
});

export const {setTask, editTask, modalOpenClose, updateTask} = taskSlice.actions
export default taskSlice.reducer