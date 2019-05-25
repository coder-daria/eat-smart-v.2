import * as React from "react";
import { Formik } from "formik";

import Button from "../Button";
import ErrorMessage from "../ErrorMessage";

import { StyledForm } from "./styles";


const initialValues = {
  carbs: 0,
  fat: 0,
  name: '',
  protein: 0,
}

const Form: React.FC = () => (
  <Formik
    initialValues={initialValues}
    validate={(values:any) => {
      let errors:any = {};

      if (!values.name) {
        errors.name = "Required";
      }

      if (!values.carbs) {
        errors.carbs = "Required";
      }
    
      if (!values.protein) {
        errors.protein = "Required";
      }

      if (!values.fat) {
        errors.fat = "Required";
      }

      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      /* and other goodies */
    }) => (
      <StyledForm onSubmit={handleSubmit}>
        <input
          type="name"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
        {errors.name && touched.name && (
          <ErrorMessage>This field is required.</ErrorMessage>
        )}
        <input
          type="carbs"
          name="carbs"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.carbs}
        />
        {errors.carbs && touched.carbs && errors.carbs}
        <input
          type="fat"
          name="fat"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.fat}
        />
        {errors.fat && touched.fat && errors.fat}
        <input
          type="protein"
          name="protein"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.carbs}
        />
        {errors.protein && touched.protein && errors.protein}
        <Button type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </StyledForm>
    )}
  </Formik>
);

export default Form;
