// validations.js
import * as yup from 'yup';

export const schema = yup.object({
  funcionario: yup.string().required('El nombre del funcionario es requerido'),
  radicado: yup.string().required('El radicado es requerido'),
  name: yup.string().required('El nombre de la empresa o persona es requerido'),
  asunto: yup.string().required('El asunto es requerido'),
  fechaHora: yup.date().required('La fecha y hora son requeridas'),
  descripcion: yup.string().required('La descripción es requerida'),
  folio: yup.number().required('El folio es requerido').positive('El folio debe ser un número positivo').integer('El folio debe ser un número entero'),
  anexo: yup.string().required('El anexo es requerido'),
  dependencia: yup.string().required('La dependencia es requerida')
});
