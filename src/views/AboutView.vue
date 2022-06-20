<template>
<div class="about">
  <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        WHAT IS NEELEY COMPLETE? 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        Neeley Complete is a program designed to encourage and guide students to a well-rounded and experiential Neeley education. Neeley Complete includes six areas of potential engagement: Research, Intercultural Education, Leadership, Service, Competitions and National Conferences, and Employer-Based Work. When students complete 4 of the 6 areas of engagement with a culminating reflection, they will have the opportunity to receive a sash or cord of recognition to wear during graduation, as well as an invitation to a graduation social and networking event with other Neeley Complete students.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        OUR GOAL
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        To ensure that all Neeley students have the opportunities and resources to build a portfolio of meaningful experiences within, and beyond, the Neeley community before graduating from TCU Neeley School of Business and embarking on a professional career as a well-rounded business leader.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        ELIGIBILITY
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        This program is open to any Neeley Sophomore, Junior, or Senior; no GPA requirement; anyone can be recognized who chooses to complete the requirements that elevates their status as future business leaders.      </div>
    </div>
  </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="panelsStayOpen-headingFour">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
          PROCESS
        </button>
      </h2>
      <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
        <div class="accordion-body">
          There is no application to participate in Neeley Complete; however, an online intent-to-participate form must be filled out. The intent-to-participate form may be completed at any time throughout the individual's enrollment at Neeley, but no later than 4 weeks prior to graduation. On this form, students identify the four engagement areas they intend to complete, and those areas may be completed at any point, but no later than 4 weeks prior to graduation. 
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="panelsStayOpen-headingFive">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
          OPPORTUNITIES FOR ENGAGEMENT 
        </button>
      </h2>
      <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
        <div class="accordion-body">
          Neeley Complete will have a website that includes opportunities that may be used to complete the six areas of engagement. These will consist of links to internship job postings, research needs from professors, on-campus events led by student organizations, intercultural events, study abroad information, and more. Additionally, Neeley Student Organization representatives will provide avenues by which interested students can engage in club-related events and leadership positions that align with Neeley Complete engagement areas. Students will use these Neeley-provided resources and increase engagement for on-campus clubs, organizations, TCU offices and centers.        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="panelsStayOpen-headingSix">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
          DISTINCTION & GROWTH
        </button>
      </h2>
      <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
        <div class="accordion-body">
          The purpose of these experiential learning opportunities is to create a community and foster camaraderie within a group of highly-motivated individuals looking for enriched supplemental experiences; recognition of these steps fosters an environment for Neeley students to push for higher achievement. Students may choose to complete all six areas of engagement and receive further distinction.        </div>
        </div>
      </div>
    </div>



</div>

</template>


<script lang="js">
import AnimatedComponent from '@/components/AnimatedComponent.vue';
export default {
  name: "About",
  components: {
    AnimatedComponent
  }
}
</script>





<style scoped lang="scss">
  
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


</style> 