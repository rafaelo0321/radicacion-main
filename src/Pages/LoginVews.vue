<template>
    <div class="login-container">
        <form @submit.prevent="handleLogin">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" v-model="credentials.nombre" required />

            <label for="clave">Clave:</label>
            <input type="password" id="clave" v-model="credentials.clave" required />

            <button type="submit">Iniciar Sesión</button>
        </form>
        <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Login',
    data() {
        return {
            credentials: {
                nombre: '',
                clave: '',
            },
            errorMessage: '',
        };
    },
    methods: {
        async handleLogin() {
            let uri = import.meta.env.VITE_URL_BASE
            try {
                const response = await axios.post(uri + 'autenticacion/login', this.credentials,
                    {
                        headers: { 'content-type': 'application/json' }
                    });
                if (response.status === 202) {
                    // Guardar el token JWT en localStorage "Bearer " +
                    localStorage.setItem('authToken',  response.data.jwt);
                    const token = localStorage.getItem('authToken')
                    console.log(token);
                    const role = getRoleFromToken(token);

                    // Redirige basado en el rol
                    if (role === 'ADMIN') {
                    this.router.push('Dashboard');
                    } else if (role === 'USER') {
                    router.push("/");
                    } else {
                    this.$router.push("/");
                    }
                } else {
                    throw new Error('Error desconocido');
                }
            } catch (error) {
                localStorage.removeItem('authToken');
                this.errorMessage = 'Error en el inicio de sesión. Verifique sus credenciales.';
            }
        },
        
         getRoleFromToken(token) {
            const jwt = require('jsonwebtoken');
                try {
                    const decodedToken = jwt.decode(token);
                    return decodedToken.role;
                } catch (error) {
                    console.error('Error decoding token:', error);
                    return null;
                }
                }
        ,
    },
};
</script>

<style scoped>
.login-container {
    width: 300px;
    margin: auto;
}
</style>