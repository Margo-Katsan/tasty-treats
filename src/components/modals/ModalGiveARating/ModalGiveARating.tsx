import { Formik, Field, Form} from 'formik';
import { useSearchParams } from 'react-router-dom';
import * as Yup from 'yup';
 // @ts-expect-error TS(2307): Cannot find module 'api' or its corresponding type... Remove this comment to see the full error message
 import { patchRating } from 'api';
import Rating from '@mui/material/Rating';
// @ts-expect-error TS(2307): Cannot find module 'images/sprite.svg' or its corr... Remove this comment to see the full error message
import svg from "images/sprite.svg";
// @ts-expect-error TS(2307): Cannot find module './ModalGiveARating.module.css'... Remove this comment to see the full error message
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

  const handleChangeRating = (e: any, value: any) => {
    setValue(value !== null ? value : 0);
  }

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <p className={css.text}>Rating</p>
     {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        
     
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Form>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className={css.wrapper}>
          
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Field className={css.rating} type='number' name='rate' value={hover !== -1 ? `${hover}.0` : `${value}.0`} ></Field>
           
          
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <svg className={`${css.star} ${css.filled}`} width="24" height="24" >
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <use href={`${svg}#star`}></use>
            </svg>}
          emptyIcon={
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <svg className={`${css.star} ${css.noFilled}`} width="24" height="24">
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <use href={`${svg}#star`}></use>
            </svg>}
          />
        </div>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Field className={css.email} name="email" placeholder="Enter email"></Field>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <button className={css.btn} type="submit">Send</button>
        </Form>
        </Formik>
    </div>
  )
}