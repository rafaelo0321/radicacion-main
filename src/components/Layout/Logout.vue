<template>
    <div>
      <button @click="handleLogout">Cerrar Sesión</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Logout',
    methods: {
        async handleLogout() {
      try {

        localStorage.removeItem('authToken');
        const response = await axios.post('http://localhost:8080/api/v1/logout');
        this.$router.push("/");

        alert('Sesión cerrada con éxito');
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
        alert('Error al cerrar sesión. Por favor, inténtelo nuevamente.');
      }
    }
    },
  };
  </script>
  
  