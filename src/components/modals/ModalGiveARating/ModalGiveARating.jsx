import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useSearchParams } from 'react-router-dom';
import * as Yup from 'yup';
 import { patchRating } from 'api';
import Rating from '@mui/material/Rating';
import svg from "images/sprite.svg";
import css from "./ModalGiveARating.module.css";
import { useState } from 'react';


const schema = Yup.object().shape({
  rate: Yup.number().required(),
  email: Yup.string().required().email(),
});

export const ModalGiveARating = () => {
  const [searchParams] = useSearchParams();

const recipeId = searchParams.get('id');
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);

  const handleChangeRating = (e, value) => {
    setValue(value !== null ? value : 0);
  }

  return (
    <div>
      <p className={css.text}>Rating</p>
     <Formik
        initialValues={{
          rate: 1,
          email: '',
        }}
        validationSchema={schema}
        onSubmit={async (values, actions) => {
          setValue(1);
          await patchRating(recipeId, values);
          actions.resetForm();
        }}
      >
        
     
      <Form>
        <div className={css.wrapper}>
          
            <Field className={css.rating} type='number' name='rate' value={hover !== -1 ? `${hover}.0` : `${value}.0`} ></Field>
           
          
          <Rating
            value={value}
            max={5}
            precision={1}
            className={css.ratingList}
            onChange={handleChangeRating}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}

           icon={
            <svg className={`${css.star} ${css.filled}`} width="24" height="24" >
              <use href={`${svg}#star`}></use>
            </svg>}
          emptyIcon={
            <svg className={`${css.star} ${css.noFilled}`} width="24" height="24">
              <use href={`${svg}#star`}></use>
            </svg>}
          />
        </div>
        <Field className={css.email} name="email" placeholder="Enter email"></Field>
        <button className={css.btn} type="submit">Send</button>
        </Form>
        </Formik>
    </div>
  )
}