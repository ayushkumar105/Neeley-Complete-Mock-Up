<template>
  <div class="container">
      <div class="row justify-content-md-center">
        <div class="col">

          <!-- Breadcrum -->
          <nav style="--bs-breadcrumb-divider: '>';margin-left:2rem;" aria-label="breadcrumb" >
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#/home" style="text-decoration:none;color:#4c0c95;font-weight: bold;">Home</a></li>
              <li class="breadcrumb-item active" ><a href="#/engage" style="text-decoration:none;color:#4c0c95;font-weight: bold;">Engagement Areas</a></li>
              <li class="breadcrumb-item active" aria-current="page" style="color:#4c0c95; font-weight: bold;">Leadership</li>
            </ol>
          </nav>
          
          <!-- Content -->
          <div style="margin-left:4rem;margin-right: 4rem;">

            <!-- Title -->
            <h1 >
              Leadership
            </h1>

            <!-- Description -->
            <p style="margin-top:1rem;color:#4d4d4a;font-size:large">
              Leadership is an important skill to succeed in the business world, and a forefront focus at TCU Neeley School of Business. However, leadership can be potentially ambiguous regarding impacts and success. While leadership can take place strictly on an individual level, for Neeley Complete, students must be in a position to lead others.             
            </p>
            <p style="margin-top:1rem;color:#4d4d4a;font-size:large;">
              Through approved Neeley Complete leadership experiences, students will demonstrate the ability to:             
            </p>
            <p style="margin-top:1rem;color:#4d4d4a;d4a;font-size:large">
            <ul style="list-style-type:circle;color:#4d4d4a;d4a;font-size:large">
              <li>Articulate the essential practices of effective leadership</li>
              <li>Display respect for multiple perspectives</li>
              <li>Build collaborative working relationships with others</li>
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
                    <li>Student must hold an informal or formal leadership position where they have influenced at least two of their peers</li>
                    <li>Student must bi weekly, record how their experience with their leadership has evolved, and opportunities for improvement to enhance their leadership abilities.</li>
                  </ul>
                  <p style="color:#4d4d4a;d4a;font-size:large; font-style: italic;">
                    Rubric: In addition to the bi-weekly reports, the student must discuss with someone their position of leadership influenced and receive feedback on what the leader did successfully, and where there is opportunity for growth. Feedback is meant to be constructive and possibly difficult to hear, however, learning to successfully receive feedback is essential in the development of leaders.
                  </p>
                </div>
              </div>
            </div>

            <!-- Accordion -->
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
                      <a href="https://hbr.org/2004/01/understanding-leadership" style="color:#4c0c95;font-weight:bold">Understanding leadership</a>
                    </li>
                    <li>
                      <a href="https://www.forbes.com/sites/kevinkruse/2013/05/12/what-is-authentic-leadership/" style="color:#4c0c95;font-weight:bold">What is authentic leadership?</a>
                    </li>
                    <li>
                      <a href="https://hbr.org/2022/06/the-right-way-to-process-feedback" style="color:#4c0c95;font-weight:bold">How to process feedback</a>
                    </li>
                    <li>
                      <a href="https://www.neeley.tcu.edu/Page/BNSF-Neeley-Leadership-Program/f482296d-aa35-4408-aa00-16bfe5eac3f3" style="color:#4c0c95;font-weight:bold">BNSF Neeley Leadership Program</a>
                    </li>
                                       
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <!-- Sidebar -->
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
            <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false" style="color:#4c0c95">
              <h6><router-link to="/syn" style="color:#4c0c95; text-decoration: none;">Synthesis Reflection</router-link></h6>
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
            The Neeley Professional Development Center will help you create a competitive r??sum??, present ideas with polish and expand your professional network.            
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
    name: "Lead",
    components: {
        AnimatedComponent
    },
    mounted() {

      window.scrollTo(650, 650) // I'm text inside the component.

    }
}

</script>
