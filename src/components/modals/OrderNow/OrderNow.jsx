import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
import { addOrder } from 'api';
import css from './OrderNow.module.css';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Too Short!')
    .max(30, 'Too Long!').required(),
  phone: Yup.number().required(),
  email: Yup.string().required().email(),
  comment: Yup.string()
});

export const OrderNow = () => {
  
  return (
    <div className={css.content}>
     <p className={css.mainTitle}>Order now</p>
     <Formik
        initialValues={{
          name: '',
          phone: '',
          email: '',
          comment: ''
        }}
        validationSchema={schema}
        onSubmit={async (values, actions) => {
          await addOrder(values);
          actions.resetForm();
        }}
     >
        <Form className={css.form}>
          <div className={css.wrapper}>
            <label className={css.label}>
            <span className={css.title}>Name</span>
            <Field
              className={css.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage className={css.error} name="name" component="p"/>
          </label>
          <label className={css.label}>
            <span className={css.title}>Phone number</span>
            <Field
              className={css.input}
              type="tel"
              name="phone"
              pattern="\+[0-9]{12}"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage className={css.error} name="name" component="p"/>
          </label>
          <label className={css.label}>
            <span className={css.title}>Email</span>
            <Field
              className={css.input}
              type="email"
              name="email"
              pattern="/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage className={css.error} name="name" component="p"/>
          </label><label className={css.label}>
            <span className={css.title}>Comment</span>
            <Field
              className={`${css.input} ${css.textarea}`}
              as="textarea"
              type="text"
              name="comment"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <ErrorMessage className={css.error} name="name" component="p"/>
          </label>
          </div>
          
          
           
           <button type="submit" className={css.btn}>
             Send
           </button>
         </Form>
     
     </Formik>
   </div>
  )

}