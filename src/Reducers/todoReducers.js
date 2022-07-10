const initialData = {
    list:[],
};

const todoReducers=(state=initialData,action)=>{
    switch (action.type){
        case "ADD_TODO":
            console.log(action,'action to add')
            const {data,id} = action.payload;
            return {
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }

            

            case "DELETE_TODO":
                console.timeLog(action.id,'id action')
            const filterDeleteTodo = state.list.filter((elem)=>elem.id !== action.id);
            console.log(filterDeleteTodo,'filterDeleteTodo')
            return{
                ...state,
                list:filterDeleteTodo
            }



            case "REMOVE_TODO":
            return{
                ...state,
                list:[]
            }

            case "UPDATE_TODO":
                const {updateData,updateId} = action.payload;
                console.log(action,'action to add ++',updateData,updateId)
                let finalData = {...state}
                let filterData = finalData.list.filter((data)=>data.id !== updateId)
                // data.filter(list => (list.userid === userId));
                console.log(finalData,'finalData',filterData)
                return {
                    ...state,
                    list:[
                        ...filterData, 
                        {
                            id:updateId,
                            data:updateData
                        }
                    ]
                }



            default:
                return state;


    }
}
export default todoReducers;