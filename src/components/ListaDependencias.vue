<template>
    <div>
      <ul>
        <li v-for="dependencia in dependencias" :key="dependencia.id">
          {{ dependencia.numeroDependencia }} - {{ dependencia.nombre }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "ListaDependencias",
    uri:"",
    data() {
      return {
        dependencias: [],
      };
    },
    methods: {
      async fetchDependencias() {
        this.uri = import.meta.env.VITE_URL_BASE
        try {
          const response = await axios.get(uri+'/todos', { params: { id: 1 } });
          console.log(uri);
          
          this.dependencias = response.data;
        } catch (error) {
          console.error("Error fetching dependencies:", error);
        }
      },
    },
    mounted() {
      this.fetchDependencias();
    },
  };
  </script>