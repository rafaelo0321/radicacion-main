<template>
  <div>
    <Header/>
    <div class="container mx-auto mt-5 p-6 bg-white rounded-lg shadow-lg">
      <form @submit.prevent="handlePrint" class="bg-white-50 p-6 rounded-lg">
        <h4 class="font-bold mb-4 text-2xl text-white-800">Radicación Supervigilancia</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          
          <div class="mb-4">
            <label for="funcionario" class="block mb-1 text-sm font-semibold text-gray-700">Funcionario</label>
            <v-select
              :options="funcionariosR"
              v-model="selectedOptionF"
              label="label"
              @change="handleSelectChangeF"
              id="funcionario"
              class="w-full"
            />
            <p class="mt-2 text-gray-600">Opción Seleccionada: {{ selectedOptionF ? selectedOptionF.label : 'Ninguno' }}</p>
          </div>
          
          <div>
            <label for="radicado" class="block mb-1 text-sm font-semibold text-gray-700">Radicado</label>
            <input
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="radicado"
              v-model="formData.radicado"
              @input="toUpperCase($event)"
            />
          </div>
          
          <div>
            <label for="name" class="block mb-1 text-sm font-semibold text-gray-700">Empresa</label>
            <input
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="name"
              v-model="formData.name"
              @input="toUpperCase($event)"
            />
          </div>
          
          <div>
            <label for="user" class="block mb-1 text-sm font-semibold text-gray-700">Nombre de persona natural</label>
            <input
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="user"
              v-model="formData.user"
              @input="toUpperCase($event)"
            />
          </div>
          
          <div>
            <label for="asunto" class="block mb-1 text-sm font-semibold text-gray-700">Asunto</label>
            <input
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="asunto"
              v-model="formData.asunto"
              @input="toUpperCase($event)"
            />
          </div>
          
          <div>
            <label for="fechaHora" class="block mb-1 text-sm font-semibold text-gray-700">Fecha y Hora</label>
            <input
              type="datetime-local"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="fechaHora"
              v-model="formData.fechaHora"
            />
          </div>
          
          <div class="col-span-1 md:col-span-2 mb-6">
            <label for="descripcion" class="block mb-1 text-sm font-semibold text-gray-700">Descripcion</label>
            <textarea
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="descripcion"
              v-model="formData.descripcion"
              rows="4"
              @input="toUpperCase($event)"
            ></textarea>
          </div>
          
          <div>
            <label for="folio" class="block mb-1 text-sm font-semibold text-gray-700">Folio</label>
            <input
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="folio"
              v-model="formData.Folio"
              @input="toUpperCase($event)"
            />
          </div>
          
          <div>
            <label for="anexo" class="block mb-1 text-sm font-semibold text-gray-700">Anexo</label>
            <input
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="anexo"
              v-model="formData.Anexo"
              @input="toUpperCase($event)"
            />
          </div>
          
          <div class="col-span-1 md:col-span-2 mb-12 w-full">
            <label for="dependencia" class="block mb-1 text-sm font-semibold text-gray-700">Dependencia</label>
            <v-select
              v-model="selectedOption"
              :options="options"
              label="label"
              @change="handleSelectChange"
              id="dependencia"
              class="w-full"
              searchable
              key="value"
            />
            <p class="mt-2 text-gray-600">Opción Seleccionada: {{ selectedOption ? selectedOption.label : 'Ninguno' }}</p>
          </div>
          
        </div>
        <div class="flex space-x-2 mb-6">
          <button
            type="button"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            @click="handlePrint"
          >Imprimir</button>
          <button
            type="button"
            class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            @click="downloadExcel"
          >Descargar en Excel</button>
        </div>
      </form>
      <!-- Print Template -->
      <div
        class="print-template fixed top-10 right-10 p-4 border-4 border-gray-900 bg-white text-center shadow-lg"
        style="width: 400px; font-family: Arial, sans-serif"
      >
        <div class="flex flex-col items-center mb-2">
          <img src="../assets/logoSuperVigilancia.png" alt="Logo" class="mb-2" />
          <h2 class="font-bold text-3xl uppercase">{{ formData.radicado }}</h2>
        </div>
        <p class="mb-2 text-sm uppercase">{{ formatFechaHora(formData.fechaHora) }}</p>
        <p class="mb-1text-lg font-bold uppercase">{{ formData.name }}</p>
        <p class="mb-1 text-lg font-bold uppercase">{{ formData.user }}</p>

        <p class="mb-2 text-s font-bold">Dep: {{ selectedOption ? selectedOption.label : 'Ninguno' }}</p>
        <p class="mb-1 text-s uppercase">Folio: {{ formData.Folio }} Anexo: {{ formData.Anexo }}</p>
        <p class="mb-1 text-s uppercase">USUARIO: CONTACTENOS</p>
      </div>

       
      </div>
<!-- 
      <div class="mt-10 bg-white p-6 rounded-lg shadow-lg table-container">
        <table class="min-w-full bg-white border border-gray-300 rounded-lg shadow-md table">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">FUNCIONARIO</th>
              <th class="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">MES</th>
              <th class="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">FECHA DE RADICADO</th>
              <th class="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">FECHA DE LA SOLICITUD</th>
              <th class="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">N° RADICADO</th>
              <th class="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">NOMBRE QUIEN REALIZA SOLICITUD</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in tableData" :key="index">
              <td class="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">{{ row.FUNCIONARIO }}</td>
              <td class="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">{{ row.MES }}</td>
              <td class="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">{{ row['FECHA DE RADICADO'] }}</td>
              <td class="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">{{ row['FECHA DE LA SOLICITUD'] }}</td>
              <td class="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">{{ row['N° RADICADO'] }}</td>
              <td class="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">{{ row['NOMBRE QUIEN REALIZA SOLICITUD'] }}</td>
            </tr>
          </tbody>
        </table>
      </div> -->
    <Footer class="Footer"/>
    </div>
  </template>
  
  
  <script>
  import { ref } from 'vue';
  import { useForm } from 'vee-validate';
  import * as XLSX from 'xlsx';
  import moment from 'moment-timezone';
  import 'moment/locale/es';
  import { schema } from '../validations/validationPrint.js';
  import Footer from '../components/Layout/Footer.vue';
  import Header from '../components/Layout/Header.vue';
  import VSelect from 'vue3-select';
  import 'vue3-select/dist/vue3-select.css';

  export default {
  components: {
    Header,
    VSelect,
    Footer,
  },
  setup() {
    const { handleSubmit, errors, values: formData, resetForm } = useForm({
      validationSchema: schema,
      initialValues: {
        funcionario: '',
        radicado: '',
        name: '',
        user: '',
        Asunto: '',
        Descripcion: '',
        Folio: '',
        Anexo: '',
        dependencia: '',
        fechaHora: moment().tz('America/Bogota').format('YYYY-MM-DDTHH:mm'),
      },
    });

    const options = [
        { value: "DESPACHO SUPERINTENDENTE DE VIGILANCIA Y SEGURIDAD PRIVADA", label: "DESPACHO SUPERINTENDENTE DE VIGILANCIA Y SEGURIDAD PRIVADA" },
        { value: "OFICINA DE COMUNICACIONES", label: "  OFICINA DE COMUNICACIONES" },
        { value: "GRUPO DE ASESORIA Y CORDINACION INTERINSTITUCIONAL", label: "  GRUPO DE ASESORIA Y CORDINACION INTERINSTITUCIONAL" },
        { value: "OFICINA ASESORA DE PLANEACION", label: "  OFICINA ASESORA DE PLANEACION" },
        { value: "GRUPO DE ESQUEMAS DE AUTOPROTECCIÓN", label: "GRUPO DE ESQUEMAS DE AUTOPROTECCIÓN" },
        { value: "GRUPO DE MECI Y CALIDAD", label: "  GRUPO DE MECI Y CALIDAD" },
        { value: "OFICINA ASESORA JURÍDICA", label: "  OFICINA ASESORA JURÍDICA" },
        { value: "GRUPO DE COBRO COACTIVO", label: " GRUPO DE COBRO COACTIVO" },
        { value: "GRUPO DE RESPUESTA A DERECHOS DE PETICIÓN", label: "  GRUPO DE RESPUESTA A DERECHOS DE PETICIÓN" },
        { value: "OFICINA DE SISTEMAS", label: "  OFICINA DE SISTEMAS" },
        { value: "SUPERINTENDENCIA DELEGADA PARA LA OPERACIÓN", label: "SUPERINTENDENTE DELEGADA PARA LA OPERACIÓN" },
        { value: "GRUPO DE CONSULTORÍA CAPACITACIÓN", label: " GRUPO DE CONSULTORÍA CAPACITACIÓN" },
        { value: "GRUPO DE PERMISOS DE ESTADOS EMPRESARIALES", label: " GRUPO DE PERMISOS DE ESTADOS EMPRESARIALES" },
        { value: "DESPACHO SUPERINTENDENTE DELGADO PARA EL CONTROL", label: "  DESPACHO SUPERINTENDENTE DELGADO PARA EL CONTROL" },
        { value: "GRUPO DE QUEJAS", label: "  GRUPO DE QUEJAS" },
        { value: "GRUPO DE INSPECCIÓN", label: "  GRUPO DE INSPECCIÓN" },
        { value: "GRUPO DE SANCIONES", label: "  GRUPO DE SANCIONES" },
        { value: "SECRETARÍA GENERAL", label: "  SECRETARÍA GENERAL" },
        { value: "GRUPO DE ATENCIÓN AL USUARIO", label: "  GRUPO DE ATENCIÓN AL USUARIO" },
        { value: "GRUPO CONTROL INTERNO DISCIPLINARIO", label: "  GRUPO CONTROL INTERNO DISCIPLINARIO" },
        { value: "GRUPO DE GESTIÓN DOCUMENTAL ARCHIVO Y CORRESPONDENCIA", label: "  GRUPO DE GESTIÓN DOCUMENTAL ARCHIVO Y CORRESPONDENCIA" },
        { value: "GRUPO DE RECURSOS FINANCIEROS", label: "GRUPO DE RECURSOS FINANCIEROS" },
        { value: "GRUPO DE RECURSOS FÍSICOS Y ADQUISICIONES", label: "GRUPO DE RECURSOS FÍSICOS Y ADQUISICIONES" },
        { value: "GRUPO DE RECURSOS HUMANOS", label: "GRUPO DE RECURSOS HUMANOS" },
        { value: "GRUPO DE CONTRATOS", label: "GRUPO DE CONTRATOS" }

];



const funcionariosR = [
  {
    value: "YOYCE BALLESTEROS",
    label: "YOYCE BALLESTEROS",
    isCategory: true,
  },
  {
    value: "SILVIA CABALLERO",
    label: "SILVIA CABALLERO",
    category: "GRUPO A",
  },
  {
    value: "CRISTIAN QUINTERO",
    label: "CRISTIAN QUINTERO",
    category: "GRUPO A",
  },
  {
    value: "JHONATHAN ARBELAEZ",
    label: "JHONATHAN ARBELAEZ",
    category: "GRUPO A",
  },
  {
    value: "DERLY BRIGITTE JIMENEZ",
    label: "DERLY BRIGITTE JIMENEZ",
    category: "GRUPO A",
  },
  {
    value: "MIGUEL ÁNGEL SANTIAGO OLIVEROS",
    label: "MIGUEL ÁNGEL SANTIAGO OLIVEROS",
    category: "GRUPO A",
  },
];
    const currentDateTimeString = ref(moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss'));
    const selectedOption = ref(null);
    const selectedOptionF = ref(null);
    const tableData = ref([]);

    setInterval(() => {
      currentDateTimeString.value = moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss');
    }, 1000);

    const toUpperCase = (e) => {
      e.target.value = e.target.value.toUpperCase();
    };

    const formatFechaHora = (dateString) => {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: 'numeric', minute: 'numeric' };
      return new Date(dateString).toLocaleDateString('es-CO', options);
    };
    

    const handlePrint = handleSubmit(() => {
    const newRow = {
      FUNCIONARIO: formData.funcionario,
      MES: new Date(formData.fechaHora).toLocaleString('es-CO', { month: 'long' }).toUpperCase(),
      'FECHA DE RADICADO': formData.fechaHora,
      'FECHA DE LA SOLICITUD': formData.fechaHora,
      'N° RADICADO': formData.radicado,
      'NOMBRE QUIEN REALIZA SOLICITUD': formData.user,
    };

    tableData.value.push(newRow);
    resetForm(); 
  });

    const downloadExcel = () => {
      const ws = XLSX.utils.json_to_sheet(tableData.value);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet 1');
      XLSX.writeFile(wb, 'radicacion.xlsx');
    };
    const handleSelectChange = (value) => {
      formData.dependencia = value.label;
    };

    const handleSelectChangeF = (value) => {
      selectedOptionF.value = value;
      formData.funcionario = value.label;
    };
    return {
      formData,
      toUpperCase,
      formatFechaHora,
      handlePrint,
      downloadExcel,
      tableData,
      options,
      selectedOption,
      handleSelectChange,
      selectedOptionF,
      handleSelectChangeF,
      funcionariosR,
      errors,
      currentDateTimeString,

    };
  },
  methods: {
    loadFormData() {
      const storedFormData = localStorage.getItem('formData');
      if (storedFormData) {
        this.formData = JSON.parse(storedFormData);
      }
    },

    toUpperCase(event) {
      event.target.value = event.target.value.toUpperCase();
    },
    handleSubmit() {

      const newData = {
        ...this.formData,
        selectedOption: this.selectedOption,
      };
      const newDataF = {
        ...this.formData,
        selectedOptionF: this.selectedOptionF,
      };
      this.tableData.push(newData);
      this.tableData.push(newDataF);

      this.$nextTick(() => {
        window.print();
      });
    },

    formatFechaHora(fechaHora) {
      const date = new Date(fechaHora);
      return date.toLocaleString();
    },
    
    handlePrint() {
      this.handleSubmit();
    },
    
  },
};
</script>

  
<style scoped>
.container {
  max-width: 800px;
  margin-bottom: 3%;
  
}
input {
  text-transform: uppercase;
}
@media print {
  body * {
    visibility: hidden;
    margin-top: 60px;

  }
  .print-template {
    display: block;
    padding-top: 100px;
    margin-top: 200px;
    margin-right: 120px;
  }
  .table-container, .Footer {
    display: none;
  }
  form{
    padding-top: 95%;
    max-width: 1050px;
    height: 100px;
    box-shadow: none;
    border: none; 

  }
  .shadow-lg {
    --tw-shadow: none;
    box-shadow: none; 
  }
  button{
    display: none;
  }

  .LogoSuper {
    width: 7%; /* Reduce el tamaño del logo aquí */
    height: auto;
  }
  body * {
    visibility: hidden;
  }
  .print-template, .print-template * {
    visibility: visible;
  }

}

.LogoSuper {
  height: 120px;
  width: 220px;
}

.print-template {
  overflow: hidden;
}

.print-template {
  position: fixed;
  top: 90px;
  right: 20px;
  border: 2px solid black;
  padding: 20px;
  width: fit-content;
}

.print-template img {
  height: 120px;
  width: 220px;
}

.print-template p {
  font-size: 1em;
  text-transform: uppercase;
}

.print-template h2 {
  font-size: 2em;
  text-transform: uppercase;
}

.form-container {
  max-width: 500px;
  margin: 0 auto;
}

.select-container {
  position: relative;
  display: inline-block;
}

.select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  background-color: white;
  border: 1px solid #ccc;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.select-option {
  padding: 8px;
  cursor: pointer;
}

.select-option:hover {
  background-color: #f0f0f0;
}
</style>