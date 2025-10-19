<template>
    <nav class="navbar" role="navigation" aria-label="Main">
      <img class="navbar__photo" src="/public/images/mainphoto.png" alt="Foto principal" />
      <h2 class="navbar__title">Programador Fullstack</h2>
  
      <router-link to="/" class="navbar__btn" active-class="is-active" exact>
        About me
      </router-link>
  
      <router-link to="/experience" class="navbar__btn" active-class="is-active">
        Experience
      </router-link>
    </nav>
  </template>
  
  <script>
  export default { name: 'NavBar' };
  </script>
  