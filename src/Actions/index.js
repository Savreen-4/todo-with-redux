export const addTodo =(data)=>{
    console.log(data,'add data')
    return{
        type:"ADD_TODO",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const deleteTodo =(id)=>{
    console.log(id,'id')
    return{
        type:"DELETE_TODO",
        id
    }
}

export const removeTodo=()=>{
    return{
        type:"REMOVE_TODO"
    }
}

export const updateTodo=(id,data)=>{
    console.log(id,data)
    return{
        type:"UPDATE_TODO",
        payload:{
            id: id,
            data:data
        }
    }
}