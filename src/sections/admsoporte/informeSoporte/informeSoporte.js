import { InformeSoporteProvider } from './contextos/informeSoporteContexto';
import FormularioInformeSoporte from './componentes/formulario';

function InformeSoporte() {
  return (
    <InformeSoporteProvider>
      <FormularioInformeSoporte />
    </InformeSoporteProvider>
  );
}

export default InformeSoporte;
