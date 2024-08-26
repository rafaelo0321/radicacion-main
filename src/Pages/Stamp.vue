<template>
  <div>
    <Header class="Header" />
    <div class="container mx-auto mt-5">
      <div class="flex justify-center">
        <div class="w-full max-w-lg">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <form @submit.prevent="handlePrint">
              <div class="mb-4">
                <label for="nombreEmpresa" class="block text-gray-700 font-bold mb-2">Empresa</label>
                <input
                  type="text"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nombreEmpresa"
                  v-model="formData.nombreEmpresa"
                  @input="handleInputChange"
                  placeholder="Nombre de la empresa"
                />
              </div>

              <div class="mb-4">
                <label for="folio" class="block text-gray-700 font-bold mb-2">folio</label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="folio"
                  v-model="formData.folio"
                  @input="handleInputChange"
                  placeholder="0"
                />
              </div>
              <div class="mb-4">
                <label for="anexo" class="block text-gray-700 font-bold mb-2">Anexo</label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="anexo"
                  v-model="formData.anexo"
                  @input="handleInputChange"
                  placeholder="0"
                />
              </div>
              <div class="mb-4">
                <label for="Dependencia" class="block text-gray-700 font-bold mb-2">Dependencia</label>
                <v-select
                  v-model="formData.dependencia"
                  :options="options"
                  label="label"
                  @input="handleSelectChange"
                  id="dependencia"
                  class="w-full"
                  searchable
                />
                
                <p class="mt-2 text-gray-600">Opción Seleccionada: {{ formData.dependencia }}</p>
              </div>
              <div class="d-flex justify-content-between">
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Imprimir
              </button>
              <button>
                <RouterLink
              to="/home"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Regresar</RouterLink>
              </button>
              
              </div>
              
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
        <p class="mb-1 text-sm font-bold">{{ formatFechaHora() }}</p>
        <p class="mb-1 text-base font-bold">{{ formData.nombreEmpresa }}</p>
        <p class="mb-1 text-base font-bold">{{ formData.user }}</p>
        <p class="mb-1 text-xs font-bold texto-corto">Dep: {{ formData.dependencia.toLowerCase() }}</p>
        <p class="mb-1 text-xs font-bold">Folio: {{ formData.folio }} Anexo: {{ formData.anexo }}</p>
        <p class="mb-1 text-xs font-bold">Usuario: PRESENCIAL</p>
      </div>
    </div>
    <div>
      
      {{ formData }}
    </div>
    <Footer class="Footer"/>
  </div>
</template>

<script>
import Header from '../components/Layout/Header.vue';
import Footer from '../components/Layout/Footer.vue';
import axios from 'axios';
import moment from 'moment-timezone';
import 'moment/locale/es';
import VSelect from 'vue3-select';
import 'vue3-select/dist/vue3-select.css';
import { RouterLink } from 'vue-router';

export default {
  components: {
    Header,
    VSelect,
    Footer,
  },
  data() {
    return {
      formData: {
        user: '',
        nombreEmpresa: '',
        folio: 0,
        anexo: 0,
        dependencia: '',
      },
      tableData: [],
      selectedOption: null,
      currentDateTimeString: '',
      options : [],
    };
  },
  mounted() {
    this.getCurrentDateTimeString();
    this.loadFormData();
    this.fetchDependencias();
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
    formatFechaHora() {
      const date = new Date();
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
        nombreEmpresa: '',
        folio: '',
        anexo: '',
        dependencia: '',
      };
      this.selectedOption = null;
      localStorage.removeItem('formData');
    },
    regresar(){
      return this.$router.push("/")
    },
    async fetchDependencias() {
      let uri = import.meta.env.VITE_URL_BASE;
        try {
          const response = await axios.get(uri+'dependencia/todos');
          const d = response.data;
          this.options = d.map(e=>{
            return e.nombre
          });
          console.log(this.options);
        } catch (error) {
          console.error("Error fetching dependencies:", error);
        }
      },
      async generarSelloRadicado(formData,token){
        let uri = import.meta.env.VITE_URL_BASE;
        const d = await axios.get(uri+"generar/pdf")
      }
  }
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
.p-2{
  margin-left: 56%;
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
.texto-corto{
    font-size: 0.5rem !important;
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
    @apply ml-4;
  }
  
}

</style>