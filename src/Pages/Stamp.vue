<template>
  <div>
    <Header class="Header" />
    <div class="container mx-auto mt-5">
      <div class="flex justify-center">
        <div class="w-full max-w-lg">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <form @submit.prevent="handlePrint">
              <div class="mb-4">
                <label for="radicado" class="block text-gray-700 font-bold mb-2">Radicado</label>
                <input
                  type="text"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="radicado"
                  v-model="formData.radicado"
                  @input="handleInputChange"
                />
              </div>

              <div class="mb-4">
                <label for="name" class="block text-gray-700 font-bold mb-2">Empresa</label>
                <input
                  type="text"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  v-model="formData.name"
                  @input="handleInputChange"
                />
              </div>
              <div class="mb-4">
                <label for="fechaHora" class="block text-gray-700 font-bold mb-2">Fecha y Hora</label>
                <input
                  type="datetime-local"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="fechaHora"
                  v-model="formData.fechaHora"
                  @input="handleInputChange"
                />
              </div>
              <div class="mb-4">
                <label for="Folio" class="block text-gray-700 font-bold mb-2">Folio</label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Folio"
                  v-model="formData.Folio"
                  @input="handleInputChange"
                />
              </div>
              <div class="mb-4">
                <label for="Anexo" class="block text-gray-700 font-bold mb-2">Anexo</label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Anexo"
                  v-model="formData.Anexo"
                  @input="handleInputChange"
                />
              </div>
              <div class="mb-4">
                <label for="Dependencia" class="block text-gray-700 font-bold mb-2">Dependencia</label>
                <v-select
                  v-model="selectedOption"
                  :options="options"
                  label="label"
                  @input="handleSelectChange"
                  id="dependencia"
                  class="w-full"
                  searchable
                />
                <p class="mt-2 text-gray-600">Opción Seleccionada: {{ selectedOption ? selectedOption.label : 'Ninguno' }}</p>
              </div>

              <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Imprimir
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="print-template fixed top-10 right-10 border-2 border-black  max-w-full mx-auto mt-5 bg-white flex items-center justify-center">
      <div class="logo-container mr-3 p-3 h-full">
        <img
          class="LogoSuper w-35 h-16"
          src="../assets/LogoSuperb.png"
          alt="Logo"
        />
      </div>
      <div class="flex-1 overflow-hidden text-center">
        <h2 class="mb-2 text-3xl font-bold">{{ formData.radicado }}</h2>
        <p class="mb-1 text-sm font-bold">{{ formatFechaHora(formData.fechaHora) }}</p>
        <p class="mb-1 text-base font-bold">{{ formData.name }}</p>
        <p class="mb-1 text-base font-bold">{{ formData.user }}</p>
        <p class="mb-1 text-xs font-bold">Dep: {{ selectedOption ? selectedOption.label : 'Ninguno' }}</p>
        <p class="mb-1 text-xs font-bold">Folio: {{ formData.Folio }} Anexo: {{ formData.Anexo }}</p>
        <p class="mb-1 text-xs font-bold">Usuario: PRESENCIAL</p>
      </div>
    </div>
    <Footer class="Footer"/>
  </div>
</template>

<script>
import Header from '../components/Layout/Header.vue';
import Footer from '../components/Layout/Footer.vue';
import moment from 'moment-timezone';
import 'moment/locale/es';
import VSelect from 'vue3-select';
import 'vue3-select/dist/vue3-select.css';

export default {
  components: {
    Header,
    VSelect,
    Footer
  },
  data() {
    return {
      formData: {
        funcionario: '',
        radicado: '',
        user: '',
        name: '',
        Asunto: '',
        Descripcion: '',
        Folio: '',
        Anexo: '',
        dependencia: '',
        fechaHora: '',
        tipoUsuario: '',
      },
      tableData: [],
      selectedOption: null,
      currentDateTimeString: '',
      options : [
        { value: "DESPACHO SUPERINTENDENTE DE VIGILANCIA Y SEGURIDAD PRIVADA", label: "DESPACHO SUPERINTENDENTE DE VIGILANCIA Y SEGURIDAD PRIVADA" },
        { value: "OFICINA DE COMUNICACIONES", label: "OFICINA DE COMUNICACIONES" },
        { value: "GRUPO DE ASESORIA Y CORDINACION INTERINSTITUCIONAL", label: "GRUPO DE ASESORIA Y CORDINACION INTERINSTITUCIONAL" },
        { value: "OFICINA ASESORA DE PLANEACION", label: "OFICINA ASESORA DE PLANEACION" },
        { value: "GRUPO DE ESQUEMAS DE AUTOPROTECCIÓN", label: "GRUPO DE ESQUEMAS DE AUTOPROTECCIÓN" },
        { value: "GRUPO DE MECI Y CALIDAD", label: "GRUPO DE MECI Y CALIDAD" },
        { value: "OFICINA ASESORA JURÍDICA", label: "OFICINA ASESORA JURÍDICA" },
        { value: "GRUPO DE COBRO COACTIVO", label: "GRUPO DE COBRO COACTIVO" },
        { value: "GRUPO DE RESPUESTA A DERECHOS DE PETICIÓN", label: "GRUPO DE RESPUESTA A DERECHOS DE PETICIÓN" },
        { value: "OFICINA DE SISTEMAS", label: "OFICINA DE SISTEMAS" },
        { value: "SUPERINTENDENCIA DELEGADA PARA LA OPERACIÓN", label: "SUPERINTENDENCIA DELEGADA PARA LA OPERACIÓN" },
        { value: "GRUPO DE CONSULTORÍA CAPACITACIÓN", label: "GRUPO DE CONSULTORÍA CAPACITACIÓN" },
        { value: "GRUPO DE PERMISOS DE ESTADOS EMPRESARIALES", label: "GRUPO DE PERMISOS DE ESTADOS EMPRESARIALES" },
        { value: "DESPACHO SUPERINTENDENTE DELGADO PARA EL CONTROL", label: "DESPACHO SUPERINTENDENTE DELGADO PARA EL CONTROL" },
        { value: "GRUPO DE QUEJAS", label: "GRUPO DE QUEJAS" },
        { value: "GRUPO DE INSPECCIÓN", label: "GRUPO DE INSPECCIÓN" },
        { value: "GRUPO DE SANCIONES", label: "GRUPO DE SANCIONES" },
        { value: "SECRETARÍA GENERAL", label: "SECRETARÍA GENERAL" },
        { value: "GRUPO DE ATENCIÓN AL USUARIO", label: "GRUPO DE ATENCIÓN AL USUARIO" },
        { value: "GRUPO CONTROL INTERNO DISCIPLINARIO", label: "GRUPO CONTROL INTERNO DISCIPLINARIO" },
        { value: "GRUPO CONTROL INTERNO", label: "  GRUPO CONTROL INTERNO" },
        { value: "GRUPO DE GESTIÓN DOCUMENTAL ARCHIVO Y CORRESPONDENCIA", label: "GRUPO DE GESTIÓN DOCUMENTAL ARCHIVO Y CORRESPONDENCIA" },
        { value: "GRUPO DE RECURSOS FINANCIEROS", label: "GRUPO DE RECURSOS FINANCIEROS" },
        { value: "GRUPO DE RECURSOS FÍSICOS Y ADQUISICIONES", label: "GRUPO DE RECURSOS FÍSICOS Y ADQUISICIONES" },
        { value: "GRUPO DE RECURSOS HUMANOS", label: "GRUPO DE RECURSOS HUMANOS" },
        { value: "GRUPO DE CONTRATOS", label: "GRUPO DE CONTRATOS" }
      ],
    };
  },
  mounted() {
    this.getCurrentDateTimeString();
    this.loadFormData();
  },
  methods: {
    loadFormData() {
      const storedFormData = localStorage.getItem('formData');
      if (storedFormData) {
        this.formData = JSON.parse(storedFormData);
      }
    },
    getCurrentDateTimeString() {
      this.currentDateTimeString = moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss');
      setInterval(() => {
        this.currentDateTimeString = moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss');
      }, 1000);
    },
    handleInputChange(event) {
      const { id, value } = event.target;
      this.formData[id] = value.toUpperCase();
      localStorage.setItem('formData', JSON.stringify(this.formData));
    },
    formatFechaHora(fechaHora) {
      const date = new Date(fechaHora);
      return date.toLocaleString();
    },
    handleSelectChange(selectedOption) {
      this.selectedOption = selectedOption;
    },
    handlePrint() {
      window.print();
      this.resetForm();
    },
    resetForm() {
      this.formData = {
        funcionario: '',
        radicado: '',
        user: '',
        name: '',
        Asunto: '',
        Descripcion: '',
        Folio: '',
        Anexo: '',
        dependencia: '',
        fechaHora: '',
        tipoUsuario: '',
      };
      this.selectedOption = null;
      localStorage.removeItem('formData');
    }
  },
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.logoSuper {
  width: 60%;
  margin: 2%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.card {
  margin-bottom: 30px;
}

.form-label {
  font-weight: bold;
}

.form-control {
  margin-bottom: 15px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}
.h-16 {
  height: 8rem;
}

@media print {
  body {
    margin: 0;
  }
  .print-template {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex !important;
    align-items: center;
    justify-content: center;
    border: none;
    margin: 0;
    padding: 0;
  }
  .container, .Header, .Footer {
    display: none !important;
  }
  .LogoSuper {
    width: 250px;
    height: 160px;
  }
  .print-template {
    @apply ml-4; /* Ajusta el margen izquierdo aquí */
  }
}
</style>