import React from 'react';
import s from './SuperButton.module.css'

type PropsType = {
    callback:()=>void
    color?:string
    children?:React.ReactNode
    disabled?:boolean
}

export const SuperButton:React.FC<PropsType> = (props) => {
const {callback,color,children,disabled,...otherProps} =props
    const onclickHandler = ()=> {
callback()
    }
    // const finalClassName = s.button
    //     // + (disabled
    //     //         ? ...
    //     //         : xType === 'red'
    //     //             ? ...
    //     + (className ? ' ' + className : '')

    const finalClassName=`${s.button} ${color==='red' ? s.red: color==='secondary'? s.secondary: s.default } ${disabled ? s.disabled :''} `
    return (
       <button  className={finalClassName}  onClick={onclickHandler}>{children}</button>
    );
};


// -----------------------------------------------------------------------------------------------------------------
// import React from 'react';
//
// type PropsType = {
//     callback:()=>void
//     color:string
//     children?:React.ReactNode
// }
//
// export const SuperButton:React.FC<PropsType> = ({callback,color,children,...props}) => {
//
//     const onclickHandler = ()=> {
//         callback()
//     }
//
//     return (
//         <button onClick={onclickHandler}>{children}</button>
//     );
// };

