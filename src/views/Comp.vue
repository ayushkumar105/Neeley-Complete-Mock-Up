<template>
  <div class="container">
      <div class="row justify-content-md-center">
        <div class="col">
          <nav style="--bs-breadcrumb-divider: '>';margin-left:2rem;" aria-label="breadcrumb" >
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#" style="text-decoration:none;color:#4c0c95;font-weight: bold;">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page" style="color:#4c0c95; font-weight: bold;">Engagement Areas</li>
              <li class="breadcrumb-item active" aria-current="page" style="color:#4c0c95; font-weight: bold;">Competitions and National Conferences</li>
            </ol>
          </nav>  
          <div style="margin-left:4rem;margin-right: 4rem;">
            <h1 >
                Competitions and National Conferences
            </h1>
            <p style="margin-top:1rem;color:#4d4d4a;font-size:large">
            </p>
            <p style="margin-top:1rem;color:#4d4d4a;font-size:large;">
            </p>
            <p style="margin-top:1rem;color:#4d4d4a;d4a;font-size:large">
            <ul style="list-style-type:circle;color:#4d4d4a;d4a;font-size:large">
              The goal of the Competitions and National Conferences initiative of Neeley Complete is to present students with various opportunities to explore and engage in areas beyond their field or interest. Through these experiences, students will have the ability to evolve professionally by networking, expanding their knowledge, presenting their ideas, and gaining new perspectives. 
              <!-- <li></li>
              <li></li>              
              <li></li>             -->
            </ul>
            </p>
            <div class="accordion accordion-flush" id="accordionFlushExample" style="margin-top:2rem;">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Minimum Requirements 
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <ul style="list-style-type:circle;color:#4d4d4a;d4a;font-size:large">
                    <li>Student must attend atleast 3 national conferences</li>
                    <li>Student must participate in atleast 5 competitions</li>
                  </ul>
                  <a href="#" style="color:#4c0c95;font-weight:bold;font-size: larger;font-style: italic;">RUBRIC FOR COMPETITIONS AND NATIONAL CONFERENCES</a>      
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Helpful Resources
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <ul style="list-style-type:circle;color:#4d4d4a;d4a;font-size:large">
                    <li>
                      <a href="#" style="color:#4c0c95;font-weight:bold">Link to TCU Competitions (Link doesn't work right now)</a>      
                    </li>                     
                  </ul>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div class="col-md-auto" style="background-color:#c7c6c3; margin-left: 0;">
      <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical" style="margin-top:2rem">
        <a class="nav-link " id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true" style="color:#4c0c95">
          <h6><router-link to="/home" style="color:#4c0c95; text-decoration: none;">Neeley Complete</router-link></h6>
        </a>
        <a class="nav-link active" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false" style="background-color:#c7c6c3; color:#4d4d4a">
          <h6><router-link to="/about" style="color:#4c0c95; text-decoration: none;">About Us</router-link></h6>
        </a>
        <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false" style="color:#4c0c95">
          <h6><router-link to="/engage" style="color:#4d4d4a; text-decoration: none;">Engagement Areas</router-link></h6>
        </a>
        <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false" style="color:#4c0c95">
          <h6><router-link to="/join" style="color:#4c0c95; text-decoration: none;">Join</router-link></h6>
        </a>
        <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false" style="color:#4c0c95">
          <h6><router-link to="/" style="color:#4c0c95; text-decoration: none;">Contact Us</router-link></h6>
        </a>
      </div>
      <div class="card" style="width: 18rem; margin-top: 4rem;background-color:#c7c6c3;border: none;">
        <h2 class="card-title" style="margin-bottom:2rem; color: #4d4d4a;">Career Counseling Appointment</h2>
        <img class="card-img-top" src="https://www.neeley.tcu.edu/NeeleyMedia/Media/Graphics/Card%20Images/AlconCareerCenter-student-list.jpg?ext=.jpg" alt="Card image cap">
        <div class="card-body" style="margin-top:1rem">
          
          <p class="card-text" style="font-size:large; color: #4d4d4a;">
            
              Need more guidance? We're here to help. Schedule an appointment with our peer advisers or career consultants through Handshake, TCU's online job platform.
            
          </p>
          <a href="https://careers.tcu.edu/wp-content/uploads/2019/07/How-to-Schedule-an-Appointment-in-Handshake.mp4?_ga=2.115380165.274597701.1657746731-17730506.1602910756" class="btn btn-primary" style="margin-top:1rem;background-color: goldenrod; color: black; text-decoration: none;">
            <h5>
              HOW TO SCHEDULE APPOINTMENT
            </h5>
          </a>
          <a href="https://tcu.joinhandshake.com/stu/appointments" class="btn btn-primary" style="margin-top:2rem;background-color: goldenrod; color: black; text-decoration: none;">
            <h5>
              SCHEDULE APPOINTMENT
            </h5>
          </a>

        </div>
      </div>

      <div class="card" style="width: 18rem; margin-top: 4rem;background-color:#c7c6c3;border: none;">
        <h2 class="card-title" style="margin-bottom:2rem; color: #4d4d4a;">Build Your Professional Skills</h2>
        <img class="card-img-top" src="https://www.neeley.tcu.edu/NeeleyMedia/Media/Graphics/Card%20Images/BBA-PDC-list.jpg?ext=.jpg" alt="Card image cap">
        <div class="card-body" style="margin-top:1rem">
          
          <p class="card-text" style="font-size:large; color: #4d4d4a;">
            The Neeley Professional Development Center will help you create a competitive résumé, present ideas with polish and expand your professional network.            
          </p>
          <a href="https://www.neeley.tcu.edu/Page/Professional-Development-Center/a413c5aa-2f88-4c36-b1aa-e1c5eb6ad759" class="btn btn-primary" style="margin-top:1rem;background-color: goldenrod; color: black; text-decoration: none;">
            <h5>
              LEARN MORE
            </h5>
          </a>
          

        </div>
      </div>
    </div>
      </div>
  </div>

    
    

</template>

<style scoped lang="scss">
ul {
  list-style-type: circle;
}
.accordion-button{
  color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: large;
  border-block-color: purple;
  border-color: purple;
}

</style>

<script lang="js">
    import AnimatedComponent from '@/components/AnimatedComponent.vue';

    export default {
    name: "Comp",
    components: {
        AnimatedComponent
    }
    }
</script>
