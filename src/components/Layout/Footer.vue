<template>
    <div>
        <footer class="Footer text-white py-8 relative">
            <div class="container mx-auto px-4 lg:px-8">
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
            <!-- Columna 1 -->
            <div class="flex flex-col  lg:items-center lg:border-r lg:border-white lg:pr-6">
                <a href="https://www.gov.co/">
                  <img src="../../assets/logo-gov-co.png" alt="Logo" class="h-12 w-auto mb-4">
                </a>
                <a href="https://www.gov.co/">
                  <img src="../../assets/logo-colombia-co.png" alt="Logo Colombia" class="h-20 w-auto mb-4">
                </a>
              </div>
              
            <!-- Columna 2 -->
            <div class="flex flex-col lg:items-start lg:border-r lg:border-white lg:px-6">
              <p class="font-bold mb-4 text-sm lg:text-base">Superintendencia de Vigilancia y Seguridad Privada</p>
              <p class="mb-4 text-sm lg:text-base"><i class="fas fa-map-marker-alt"></i> <strong>Sede Principal:</strong> Calle 24A No. 59-42 Torre 4 Piso 3 Centro Empresarial Sarmiento Angulo</p>
              <p class="text-sm lg:text-base"><i class="fas fa-map-marker-alt"></i> <strong>Sede Administrativa:</strong> Avenida Calle 26 # 57-41 Torre 8, piso 11 Centro Empresarial Sarmiento Angulo</p>
              <p class="font-bold mb-4 text-sm lg:text-base"><i class="fas fa-clock"></i> Horario de Atención</p>
              <p class="mb-4 text-sm lg:text-base">Lunes a Viernes de 8:00 a.m. a 5:00 p.m.</p>
              <ul class="mb-4">
                <li><a href="https://supervigilancia.gov.co/publicaciones/492/politica-de-privacidad-y-condiciones-de-uso/" class="text-gray-300 hover:text-gray-100 text-sm lg:text-base">Política de Privacidad</a></li>
                <li><a href="https://supervigilancia.gov.co/mapa-del-sitio" class="text-gray-300 hover:text-gray-100 text-sm lg:text-base"> Mapa del Sitio</a></li>
                <li><a href="https://supervigilancia.gov.co/publicaciones/10594/politica-de-derechos-de-autor-yo-autorizacion-de-uso-de-los-contenidos/" class="text-gray-300 hover:text-gray-100 text-sm lg:text-base">Política de Derechos de Autor</a></li>
                <li><a href="https://supervigilancia.gov.co/publicaciones/10595/terminos-y-condiciones-de-uso/" class="text-gray-300 hover:text-gray-100 text-sm lg:text-base">Términos y condiciones de uso</a></li>
              </ul>
              <div class="flex lg:items-center justify-center mt-8 space-x-4">
                <a href="https://www.facebook.com/supervigilancia/" class="text-white hover:text-gray-100"><i class="fab fa-facebook"></i></a>
                <a href="https://x.com/SuperVigilancia" class="text-white hover:text-gray-100"><i class="fab fa-twitter"></i></a>
                <a href="https://www.youtube.com/@SupervigilanciaColombia/videos" class="text-white hover:text-gray-100"><i class="fab fa-youtube"></i></a>
                <a href="" class="text-white hover:text-gray-100"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>
            <!-- Columna 3 -->
            <div class="flex flex-col lg:items-start lg:pl-6"> 
              <p class="font-bold mb-4 text-sm lg:text-base">Contacto</p>
              <p class="mb-4 text-sm lg:text-base"><i class="fas fa-phone"></i> Conmutador: (+601) 307 8038</p>
              <p class="mb-4 text-sm lg:text-base"><i class="fas fa-phone-volume"></i> Línea gratuita: 01 8000 119703</p>
              <p class="mb-4 text-sm lg:text-base"><i class="fas fa-envelope"></i> Correo institucional: contactenos@supervigilancia.gov.co</p>
              <p class="font-bold mb-4 text-sm lg:text-base"><i class="fas fa-map-marker-alt"></i> Dirección Postal</p>
              <p class="mb-4 text-sm lg:text-base">Código Postal: 111321</p>
              <p class="font-bold mb-4 text-sm lg:text-base"><i class="fas fa-envelope-open"></i> Notificaciones Judiciales</p>
              <p class="mb-4 text-sm lg:text-base">notificacionesjudiciales@supervigilancia.gov.co</p>
              <p class="font-bold mb-4 text-sm lg:text-base"><i class="fas fa-building"></i> NIT</p>
              <p class="mb-4 text-sm lg:text-base">800217123-2</p>
              <a href="https://supervigilancia.gov.co/formularios/updInfo/171805857855320/" class="text-center text-xs mt-8">AYÚDANOS A MEJORAR</a>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 right-0 mr-4 mb-4 flex items-center">
            <span class="text-xs mr-2">Powered by</span>
            <a href="https://www.linkedin.com/in/diana-marcela-solarte-moreno-691492141/">
              <img src="../../assets/solartenaDev.svg" alt="Powered by" class="h-10 w-auto">
            </a>
          </div>
      </footer>
    </div>
  </template>
  
  <style scoped>
  .Footer {
    background-color: #36c;
  }
  
  .Footer a i {
    font-size: 24px;
  }
  
  .Footer p {
    margin-bottom: 0.5rem;
  }
  
  .Footer .container {
    max-width: 1200px;
  }
  
  .lg\\:border-r {
    border-right-width: 1px;
  }
  
  .lg\\:border-white {
    border-color: white;
  }
  
  img.h-20 {
    height: 80px; 
  }
  
  .flex-col.items-center {
    justify-content: center;
    align-items: center;
  }
  
  ul.center {
    text-align: center;
  }
  
  </style>