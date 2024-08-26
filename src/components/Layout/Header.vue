<template>
    <div>
        <body>
            <div class="navbar d-flex justify-content-between">
                <div>
                    <RouterLink to="/home">
                        <img src='../../assets/logo-gov-co.png' alt="Logo Principal" class="navbar-logo">
                    </RouterLink>
                    
                </div>
                <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Logout />
                  </div>
            </div>               

        </body>
    </div>  
</template>
<script>
import Logout from './Logout.vue';
  
  export default {
    components: {
      Logout,
    },
  name: 'Header',

};
</script>
<style scoped >
.navbar {
    background-color: #36c;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar-logo {
    height: 40px;
    width: auto;
    margin-right: auto;
}


</style>