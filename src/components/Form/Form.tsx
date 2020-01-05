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

interface FormProps {
  //@todo Add proper types
  addFood: (values: any) => void;
  //@todo Check why it's needed
  children?: any;
  editFood: (values: any) => void;
  //@todo Check if it should be  required
  isEditable?: boolean;
  searchedFood?: string;
  //@todo Add proper types
  list: any;
}

const Form: React.FC = (props:FormProps) => {
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

  const getInitValues = () => {
    if (props.isEditable && props.searchedFood !== "") {
      return props.list[props.searchedFood];

    } else {
      return initialValues;
    }
  }

  return (
    <Formik
      enableReinitialize
      initialValues={getInitValues()}
      onSubmit={(values: Values, { resetForm }) => {
        const { addFood, editFood, isEditable } = props;
  
        resetForm(initialValues);

        isEditable ? editFood(values) : addFood(values);
      }}
      validate={handleValidation}
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
        const isDisabledWhileEditable = props.isEditable && props.searchedFood === "";

        return (
          <StyledForm onSubmit={handleSubmit}>
            {fields.map((field, index) => 
              <Input
                error={errors[field.name] && touched[field.name]}
                errorMessage={errors[field.name]}
                isDisabled={isDisabledWhileEditable}
                key={field.name + index}
                name={field.name}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder={field.name}
                type={field.type}
                value={values[field.name]}
              />
            )}
            <StyledButton type="submit" disabled={isDisabledWhileEditable || isDisabled}>
              Submit
            </StyledButton>
          </StyledForm>
        )
      }}
    </Formik>
  );
};

export default Form;
