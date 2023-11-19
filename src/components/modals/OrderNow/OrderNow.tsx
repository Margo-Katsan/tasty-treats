import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addOrder } from 'api';
import { useNotify } from "hooks/useNotify";
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
  const { notifySuccess, notifyError } = useNotify();
  
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
          try {
            const status = await addOrder(values);
            if (status === 201) {
              notifySuccess("Your order has been sent successfully")
              actions.resetForm();
            }
            
          }
          catch (error) {
            notifyError("Oops... Something went wrong. Please try again.")
          }
        }}
     >
        <Form className={css.form}>
          <div className={css.wrapper}>
            <label className={css.label}>
            <span className={css.title}>Name<span className={css.star}>&nbsp;*</span></span>
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
            <span className={css.title}>Phone number<span className={css.star}>&nbsp;*</span></span>
            <Field
              className={css.input}
              type="tel"
              name="phone"
              pattern="\+[0-9]{12}"
              title="Phone number must start with a plus sign and have 12 digits. For example, +123456789012"
              required
            />
            <ErrorMessage className={css.error} name="phone" component="p"/>
          </label>
          <label className={css.label}>
            <span className={css.title}>Email<span className={css.star}>&nbsp;*</span></span>
            <Field
              className={css.input}
              type="email"
              name="email"
              pattern="/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/"
              title="Please enter a valid email address."
              required
            />
            <ErrorMessage className={css.error} name="email" component="p"/>
          </label><label className={css.label}>
            <span className={css.title}>Comment</span>
            <Field
              className={`${css.input} ${css.textarea}`}
              as="textarea"
              type="text"
              name="comment"
            />
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