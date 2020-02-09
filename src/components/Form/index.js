import React from 'react';
import { Button, Form as RsForm, FormGroup, Label, Input } from 'reactstrap';

const Form = () => {
  return (
    <RsForm className="form">
      <div>
        <h2 className="form__title">Contacto</h2>
        <FormGroup>
          <Label for="exampleEmail">Nombre</Label>
          <Input type="text" name="name" id="name" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">E-mail</Label>
          <Input type="email" name="email" id="email" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Mensaje</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>

        <Button>Enviar</Button>
      </div>
    </RsForm>
  );
};

export default Form;
