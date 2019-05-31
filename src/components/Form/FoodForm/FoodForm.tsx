import * as React from "react";
import { ErrorMessage , Field, Form, Formik } from "formik";

import Button from "../../Button";

import { Container } from "./styles";

interface FoodForm {

}

const FoodForm: React.FC<FoodForm> = () => (
  <Container>
    <Formik
      initialValues={{}}
      onSubmit={(values, actions) => {
        console.log(actions);
        actions.setSubmitting(false);
        actions.setValues(values);
      }}
      render={({
        errors,
        isSubmitting,
      }) => (
        <Form>
            <Field type="text" name="foodName" placeholder="enter food name"/>
            <Field type="number" name="protein" />
            <Field type="number" name="fat" />
            <Field type="number" name="carbs" />
            <Button type="submit" disabled={isSubmitting}>
              O.K
            </Button>
        </Form>
      )}
    />
  </Container>
);

export default FoodForm;
