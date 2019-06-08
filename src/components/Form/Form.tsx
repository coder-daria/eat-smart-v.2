import * as React from "react";
import { Formik } from "formik";

import Input from "../Input";

import { StyledButton, StyledForm } from "./styles";

interface Values {
  carbs: string;
  fat: string;
  name: string;
  protein: string;
}

const Form: React.FC = (props:any) => {
  const initialValues = {
    carbs: "",
    fat: "",
    name: "",
    protein: "",
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
  let areEmptyValues = true;

  const handleValidation = (values: any) => {
    let errors:any = {};
    const errorMessage = "Incorrect value";

    Object.values(values).map(value => {
      if(value !== undefined){
        areEmptyValues = false;
      }
    });
  
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
  
  return (
    <Formik
      initialValues={initialValues}
      validate={handleValidation}
      onSubmit={(values: Values, { resetForm }) => {
        props.addFood(values);
        resetForm(initialValues);
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        touched,
        values,
      }) => {
        const isDisabled = areEmptyValues || Object.entries(errors).length !== 0;

        return (
          <StyledForm onSubmit={handleSubmit}>
            {fields.map((field, index) => 
              <Input
                error={errors[field.name] && touched[field.name]}
                errorMessage={errors[field.name]}
                key={field.name + index}
                name={field.name}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder={field.name}
                type={field.type}
                value={values[field.name]}
              />
            )}
            <StyledButton type="submit" disabled={isDisabled}>
              Submit
            </StyledButton>
          </StyledForm>
        )
      }}
    </Formik>
  );
};

export default Form;
