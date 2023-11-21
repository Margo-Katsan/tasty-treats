import { useState, FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Rating from '@mui/material/Rating';
import { patchRating } from 'api';
import { useNotify } from 'hooks/useNotify';
import svg from "images/sprite.svg";
import css from "./ModalGiveARating.module.css";

interface IModalGiveARatingProps {
  handleCloseModal: () => void;
}

const schema = Yup.object().shape({
  rate: Yup.number().required(),
  email: Yup.string().required().email(),
});

export const ModalGiveARating: FC<IModalGiveARatingProps> = ({handleCloseModal}) => {
  const [searchParams] = useSearchParams();
  const recipeId = searchParams.get('id');
  const { notifySuccess, notifyError } = useNotify();
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);

  const handleChangeRating = (e: any, value: any) => {
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
          try {
            const respStatus = await patchRating(recipeId as string, values);
            if (respStatus === 200) {
              notifySuccess("Thank you for sharing your rating with us!")
              handleCloseModal();
            }
          }
          catch (error: any) {
            if (error.response.status === 409) {
              notifyError("You have already submitted a rating from this email.");
            }
            else {
              notifyError("Oops... Something went wrong. Please try again.")
            }
          }
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