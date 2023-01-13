import React from 'react';

type PropsTask= {
    task:PropsType[]
    children?:React.ReactNode
}

type PropsType = {
    id:number
    title:string;
    isDone:boolean
}

export const SuperTodolist:React.FC<PropsTask> = (props) => {
    const {task,children,...otherProps}=props
    return (
        <div>
           <ul>
               {task.map((el)=>{
                   return( <li key={el.id}>
                           <span>{el.id}</span>
                           <span>{el.title}</span>
                           <input type={'checkbox'} checked={el.isDone}/>
                       </li>

                   )
               })}
           </ul>
            {children}
        </div>
    );
};

