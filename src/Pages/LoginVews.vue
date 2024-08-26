<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <h2 class="text-center text-dark mt-5">Formulario de Inico de sección</h2>
                <div class="text-center mb-5 text-dark">Favor ingrese los datos de inicio</div>
                <div class="card my-5">

                    <form class="card-body cardbody-color p-lg-5" @submit.prevent="handleLogin">

                        <div class="text-center">
                            <img src="../assets/user.png"
                                class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3" width="200px"
                                alt="profile">
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="nombre" aria-describedby="emailHelp"
                                placeholder="User Name" v-model="credentials.nombre" required>
                        </div>
                        <div class="mb-3">
                            <input type="password" v-model="credentials.clave" required class="form-control"
                                id="password" placeholder="password">
                        </div>
                        <div class="text-center"><button type="submit" class="btn btn-color px-5 mb-5 w-100">Iniciar
                                Sesión</button></div>
                        <div id="emailHelp" class="form-text text-center mb-5 text-dark">¿Olvidó su contraseña? <a
                                href="#" class="text-dark fw-bold"> Clic Aquí</a>
                        </div>
                    </form>
                </div>
                <p class="alert alert-danger" role="alert" v-if="errorMessage">{{ errorMessage }}</p>
            </div>
        </div>
    </div>
    <Footer/>
</template>

<script>
import axios from 'axios';
import Header from '../components/Layout/Header.vue';
import Footer from '../components/Layout/Footer.vue';
export default {
    components: {
        Footer,
        Header,
    },
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
                    localStorage.setItem('authToken', response.data.jwt);
                    const token = localStorage.getItem('authToken')
                    console.log(token);
                    if (token !=null) {
                        this.$router.push("/home");
                    }
                } else {
                    throw new Error('Error desconocido');
                }
            } catch (error) {
                localStorage.removeItem('authToken');
                this.errorMessage = 'Error en el inicio de sesión. Verifique sus credenciales.';
            }
        },
    },
};
</script>

<style scoped>
.btn-color {
    background-color: #0e1c36;
    color: #fff;

}

.profile-image-pic {
    height: 200px;
    width: 200px;
    object-fit: cover;
}

.cardbody-color {
    background-color: #ebf2fa;
}

a {
    text-decoration: none;
}
</style>