<template>
  <div class="bg-white">
    <Header />
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
      </div>
      <div class="max-w-6xl mx-auto sm:py-16">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div class="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
          <div class="text-center lg:text-left lg:w-3/5">
            <h1 class="text-3xl font-bold text-gray-600 sm:text-5xl">
              Gestiona tus radicados de manera fácil y rápida
            </h1>
            <p class="mt-6 text-lg text-gray-600">
              Con nuestra aplicación, podrás radicar y gestionar tus documentos de manera eficiente.
              Simplifica tus procesos y ahorra tiempo.
            </p>
            <div class="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
              <RouterLink to="/print" 
                class="rounded-md bg-blue-600 px-5 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Empezar a Radicar</RouterLink>

               <RouterLink to="/stamp" class="text-lg font-semibold leading-6text-gray-900"
                >Generar Sello <span aria-hidden="true">→</span></RouterLink>
            </div>
          </div>
          <div class="lg:w-2/5 lg:ml-10 mt-8 lg:mt-0">
            <img
              src="../assets/radHome.svg"
              alt="Rad"
              class="vector animate-float w-1200  lg:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Header from '../components/Layout/Header.vue';
import Footer from '../components/Layout/Footer.vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  components: {
    Header,
    Footer
  },
  
});
</script>

<style scoped>
.vector.animate-float {
  max-width: 1000px;
  width: 650px;
  height: auto;
  margin-bottom: 32px;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-10px);
  }
  100% {
    transform: translatey(0px);
  }
}
</style>
