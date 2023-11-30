import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Form,
  Btn,
  BtnLabel,
  Input,
  ErrorMsg,
  Logo,
  Icon,
} from './Searchbar.styled';

const searchbarSchema = Yup.object().shape({
  text: Yup.string()
    .min(2, 'Text too short!')
    .max(30, 'Text too long!')
    .required('Required'),
});

export const Logotype = ({ title }) => {
  return (
    <Logo>
      {title} <Icon />
    </Logo>
  );
};

export const Searchbar = props => {
  return (
    <Formik
      initialValues={{ text: '' }}
      validationSchema={searchbarSchema}
      onSubmit={(values, actions) => {
        props.onSubmit(values);
        actions.resetForm();
      }}
    >
      <Form autoComplete="off">
        <Btn type="submit">
          <BtnLabel size="36px" />
        </Btn>
        <Input
          name="text"
          type="text"
          autoFocus
          placeholder="Search images and photos"
        />

        <ErrorMsg name="text" component="span" />
      </Form>
    </Formik>
  );
};
