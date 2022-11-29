<template>
    <div class="about">
    
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col" style="padding:0;">
    
        <nav style="--bs-breadcrumb-divider: '>';margin-left:2rem;" aria-label="breadcrumb" >
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#" style="text-decoration:none;color:#4c0c95;font-weight: bold;">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page" style="color:#4c0c95; font-weight: bold;">Synthesis Reflection</li>
        </ol>
      </nav>  
          
        <div class="intro" style="margin-left:2rem;margin-right: 1rem;">
          <p style="color:#4c0c95;margin-top:1rem">
            <h3 style="color:#4c0c95;margin-top:1rem">Synthesis Reflection Requirement</h3>
          </p>
          <p style="color:#6c757d">
            <h5 style="color:#6c757d">
                Neeley Complete honors and recognizes students who engage intentionally within the Neeley, TCU, and Fort Worth communities. To confirm intentional engagement in 4 of the 6 qualifying Engagement Areas, participants must submit a Synthesis Reflection to showcase how they have grown personally and professionally through their engagements.            </h5>
          </p>
          <p style="color:#4c0c95;margin-top:1rem">
            <h3 style="color:#4c0c95;margin-top:1rem">What is a Synthesis Reflection?</h3>
          </p>
          <p style="color:#6c757d">
            <h5 style="color:#6c757d">
                “We do not learn from experience. We learn from reflecting on experience.” - John Dewey 
                Engagement in new experiences exposes us to new ways of thinking. However, it is difficult to retain all of these new learnings without intentional reflection. Reflection after experiences helps build new perspective and understanding of a topic and of the world. Written reflection, and creative projects, help document learnings tangibly as well as cognitively so that new understandings and insights can impact future decisions in positive and generative ways.
                By responding to guided reflective questions and representing your experiences and new perspectives in a creative visual medium, Neeley Complete participants can obtain a deeper appreciation and understanding of how their engagements have shaped them in personal and professional ways. Below are the components for the Neeley Complete Synthesis Reflection.
            </h5>
          </p>
          <p style="color:#4c0c95;margin-top:1rem">
            <h3 style="color:#4c0c95;margin-top:1rem">Synthesis Reflection Components</h3>
          </p>
          <p style="color:#6c757d">
            <h5 style="color:#6c757d">
                The Neeley Complete Synthesis Reflection must contain the following elements:
                <ol class="tab">
                    <li>
                        WRITE: Provide a 350-400-word description for each of your Engagement Areas, responding to each of these questions:
                        <ol class="tab" type="a">
                            <li>Name of Engagement Area</li>
                            <li>In a matter-of-fact way, describe what you did to complete the Engagement Area. Provide details on who you engaged with (organization, people, etc.), where you were located, and the content you focused on.</li>
                            <li>How did this experience help you grow on a personal level?</li>
                            <li>How did this experience help you grow on a professional level?</li>
                            <li>In a few sentences, thank or recognize any programs or mentors that were particularly helpful as you navigated your Engagement Areas.</li>
                        </ol>
                    </li>
                    <li>
                      CREATE: Represent your learnings in a medium which resonates with you and will help you capture your growth from this experience. Choose from the options below, or develop your own method of delivery based on your interests:
                        <ol type="a" style="display: inline-block; margin-left: 1px;">
                            <li>Deliver a 'Frog Talk' or TedTalk</li>
                            <li>Create a documentary</li>
                            <li>Write a song, poem, or essay</li>
                            <li>Develop a corporate presentation</li>
                            <li>Create a photo collection, art installation, or collage </li>
                            <li>Prototype a children's book</li>
                            <li>Build your own time capsule</li>
                        </ol>
                    </li>
                    <li>
                      SUBMIT: Upload your completed Synthesis Reflection (written component + creative component) to Stephanie Waite: stephanie.waite@tcu.edu. Once you submit your Synthesis Reflection, you'll receive a confirmation email withing 2-3 business days. The Neeley Complete Synthesis Reflection Review Committee will evaluate and score your project within 2-3 weeks of receiving it. See details below on evaluation criteria.
                    </li>
                </ol>           
            </h5>
          </p>
          
          <p style="color:#6c757d; margin-top: 3rem;">
            <h3 style="color:#4c0c95;margin-top:1rem">How your Synthesis Reflection will be Evaluated </h3>
            <p style="color:#6c757d">
              <h5 style="color:#6c757d">
                To fulfill the Neeley Complete Synthesis Reflection requirement, you must earn 8 points from the Synthesis Reflection Review Committee. Points are earned in the following ways:
              </h5>
            </p>  
              <ul class="tab" style="font-size:large; color:#6c757d">
                <h5>
                  <li>Description of each Engagement Area is clear and robust - 3 pts</li>
                  <li>Accompanying content/material supports the written portions of the reflection in generative ways - 3 pts</li>
                  <li>Editing - the written portions meet basic college-level writing standards - 2 pts</li>
                  <li>Committee's Reaction to the quality and thoughtfulness of the Synthesis Reflection - 2 pts</li>
                </h5>
                
              </ul>
          </p>
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
              <h6><router-link to="/engage" style="color:#4c0c95; text-decoration: none;">Engagement Areas</router-link></h6>
            </a>
            <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false" style="color:#4c0c95">
              <h6><router-link to="/syn" style="color:#4d4d4a; text-decoration: none;">Synthesis Reflection</router-link></h6>
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
            <img class="card-img-top" src="https://magazine.tcu.edu/wp-content/uploads/2020/05/TCU_ReeseBrown_06-500x333.jpg" alt="Card image cap">
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
    
    </div>
    
    
    
    </template>
    
    
    <script lang="js">
    
    
    
    import AnimatedComponent from '@/components/AnimatedComponent.vue';
    export default {
      name: "Syn",
      components: {
        AnimatedComponent
      },
      mounted() {
    
        window.scrollTo(650, 650) // I'm text inside the component.
    
      }
      
      
    }
    </script>
    
    
    
    
    
    <style scoped lang="scss">
    .tab {
            display: inline-block;
            margin-left: 40px;
        }
    .about{
      margin-left: 4rem;
      margin-right: 4rem;
    }
    
    .demo {
      max-width: 600px;
      border: 2px solid #2c3e50;
      padding: 2rem;
      margin: 2rem auto;
      background-color: #42b983;
    }
    
    
    .accordion-button{
      color: rgb(0, 0, 0);
      background-color: rgb(255, 255, 255);
      font-weight: bold;
      font-size: large;
      border-block-color: purple;
      border-color: purple;
    }
    
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
      .container {
        width: 80%;
        min-width: 450px;
        margin: 0 auto;
      }
    
      .fade-in {
        background-color: #2ecc71;
        height: 500px;
        margin-bottom: 50px;
        opacity: 0;
        transition: 0.3s all ease-out;
        transform: scale(0.8);
        box-sizing: border-box;
        padding: 20px;
        display: inline-block;
      }
      .full-width{
        width: 100%;
      }
    
      .half-width {
        width: 47.5%;
      }
    
      .half-width:nth-of-type(2n + 1) {
        margin-right: 2.5%;
      }
    
      .half-width:nth-of-type(2n) {
        margin-left: 2.5%;
      }
    
      .description {
        position: relative;
        width: 100%;
        min-height: 100vh;
        p {
          font-size: 1.2rem;
          padding: 10px 20px;
        }
      }
      /*
        This classes are for the directive. 
        For each element observed by our directive, the before-enter class is added.
      */
      .before-enter {
        opacity: 0;
        transform: translateY(100px);
        transition: all 2s ease-out;
      }
      /* 
        If the element intersects with the viewport, the before-enter class is added.
      */
      .enter {
        opacity: 1;
        transform: translateY(0px);
      }
    
      #side_nav{
        background: black;
        margin-left: auto; 
        margin-right: 0;
      }
      .content{
        min-height: 100vh;
        width: 100%;
      }
    
      .row justify-content-md-center{
        border: none;
      }
      
     
    
    
    </style> 