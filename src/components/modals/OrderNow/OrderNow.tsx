import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
// @ts-expect-error TS(2307): Cannot find module 'api' or its corresponding type... Remove this comment to see the full error message
import { addOrder } from 'api';
// @ts-expect-error TS(2307): Cannot find module './OrderNow.module.css' or its ... Remove this comment to see the full error message
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
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={css.content}>
     {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
     <p className={css.mainTitle}>Order now</p>
     {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Form className={css.form}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className={css.wrapper}>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <label className={css.label}>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <span className={css.title}>Name<span className={css.star}>&nbsp;*</span></span>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Field
              className={css.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <ErrorMessage className={css.error} name="name" component="p"/>
          </label>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <label className={css.label}>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <span className={css.title}>Phone number<span className={css.star}>&nbsp;*</span></span>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Field
              className={css.input}
              type="tel"
              name="phone"
              pattern="\+[0-9]{10,15}"
              title="Phone number must start with a plus sign and have 10 to 15 digits. For example, +123456789012"
              required
            />
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <ErrorMessage className={css.error} name="phone" component="p"/>
          </label>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <label className={css.label}>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <span className={css.title}>Email<span className={css.star}>&nbsp;*</span></span>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Field
              className={css.input}
              type="email"
              name="email"
              pattern="/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/"
              title="Please enter a valid email address."
              required
            />
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <ErrorMessage className={css.error} name="email" component="p"/>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          </label><label className={css.label}>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <span className={css.title}>Comment</span>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Field
              className={`${css.input} ${css.textarea}`}
              as="textarea"
              type="text"
              name="comment"
            />
          </label>
          </div>
          
          
           
           {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
           <button type="submit" className={css.btn}>
             Send
           </button>
         </Form>
     
     </Formik>
   </div>
  )

}