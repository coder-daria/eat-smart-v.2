import * as React from "react";
import { Formik } from "formik";

import Button from "../Button";
import Input from "../Input";

import { StyledForm } from "./styles";

interface Values {
  carbs: string;
  fat: string;
  name: string;
  protein: string;
}

const initialValues = {
  carbs: "0",
  fat: "0",
  name: "",
  protein: "0",
}

const Form: React.FC = () => {
  const handleValidation = (values: any) => {
    let errors:any = {};
    const errorMessage = "This field is required.";

    if (!values.name) {
      errors.name = errorMessage;
    }

    if (!values.carbs) {
      errors.carbs = errorMessage;
    }
  
    if (!values.protein) {
      errors.protein = errorMessage;
    }

    if (!values.fat) {
      errors.fat = errorMessage;
    }

    return errors;
  };
  const fields = [
    {
      name: "name",
      type: "string"
    },
    {
      name: "carbs",
      type: "number"
    },
    {
      name: "protein",
      type: "number"
    },
    {
      name: "fat",
      type: "number"
    },
  ];

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: Values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <StyledForm onSubmit={handleSubmit}>
          {fields.map((field, index) => 
            <Input 
              key={field.name + index}
              type={field.type}
              name={field.name}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[field.name]}
              error={errors[field.name] && touched[field.name]}
            />
          )}
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default Form;
