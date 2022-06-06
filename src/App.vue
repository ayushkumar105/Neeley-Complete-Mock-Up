<template>

<!-- Carousel -->
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://www.neeley.tcu.edu/getattachment/05850c88-4f74-4966-acd1-6e339038112a/home-head.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://neeley.tcu.edu/NeeleyMedia/Media/Graphics/Headers/BBA_frogfountain_head.jpg?ext=.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://neeley.tcu.edu/NeeleyMedia/Media/Graphics/Headers/Alumni-frogfountain-head.jpg?ext=.jpg" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
<!--|||||||||||||||-->




<!--Navbar-->
  <ul class="nav justify-content-center">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true" href="/">
          <router-link to="/about">About Us</router-link>
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
          <router-link to="/engage">Engagement Areas</router-link>
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
          <router-link to="/join">Join</router-link>
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
          <router-link to="/">Contact Us</router-link>
        </button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" ></div>
      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
      <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
    </div>
  </ul>
<!--||||||||||||||-->

<router-view></router-view>

</template>

<script>

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #6a13cd;
}
img{
  height: 50%;
}



.nav-link {
            color: #4c0c95;
            font-weight: bold;
        }

.nav nav-tabs {
  background-color: grey;
}

// $navbar-light-brand-color:                $navbar-light-active-color;
// $navbar-light-brand-hover-color:          $navbar-light-active-color;
// $navbar-dark-brand-color:                 $navbar-dark-active-color;
// $navbar-dark-brand-hover-color:           $navbar-dark-active-color;


</style>
