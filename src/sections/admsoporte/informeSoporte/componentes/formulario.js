import { useContext } from 'react';
import { Button } from '@mui/material';
import { InformeSoporteContext } from '../contextos/informeSoporteContexto';

function FormularioInformeSoporte() {
  const { ping,ping2 } = useContext(InformeSoporteContext);
  return (
    <>
      <Button onClick={() => ping()}>dame click</Button>
      <Button onClick={() => ping2()}>dame click2</Button>
    </>
  );
}

export default FormularioInformeSoporte;
