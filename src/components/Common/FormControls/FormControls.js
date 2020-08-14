import React from 'react'
import s from './FormControls.module.css'

export const Textarea = ({ input, meta, ...props }) => {

   const hasError = meta.touched && meta.error

   return (
      <div className={s.formControls + ' ' + (hasError && s.error)}>
         <div>
            <textarea className={s.textarea} {...input} {...props}></textarea>
         </div>
         {hasError && <span>{meta.error}</span>}
      </div>
   )
}

export const Input = ({ input, meta, ...props }) => {

   const hasError = meta.touched && meta.error

   return (
      <div className={s.formControls + ' ' + (hasError && s.error)}>
         <div>
            <input className={s.textarea} {...input} {...props} />
         </div>
         {hasError && <span>{meta.error}</span>}
      </div>
   )
}