<template>
    <div class="join">
    <!-- Accordion -->
    <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        APPLICATION 
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                        <p>There is no application to participate in Neeley Complete; however, an online intent-to-participate form must be filled out. The intent-to-participate form may be completed at any time throughout the individual's enrollment at Neeley, but no later than 4 weeks prior to graduation. On this form, students identify the four engagement areas they intend to complete, and those areas may be completed at any point, but no later than 4 weeks prior to graduation.</p>
                        <div class="row">
                            <div class="col-sm-5">
                                <div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="https://accessibility.tcu.edu/wp-content/uploads/2018/01/TCU-mark.jpg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">JOIN US TODAY!</h5>
                                    <p class="card-text">You can join us by simply filling out the intent to participate form.</p>
                                    <a href="#" class="btn btn-primary">Intent to participate</a>
                                </div>
                                </div>
                            </div>
                            <div class="col-sm-5">
                                <div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="https://accessibility.tcu.edu/wp-content/uploads/2018/01/TCU-mark.jpg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">DEADLINES</h5>
                                    <p class="card-text">Stay upto date with synthesis reflection deadlines.</p>
                                    <a href="#" class="btn btn-primary">Deadline Page</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            MENTORSHIP
                        </button>
                    </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                        <p>Neeley Complete students are in control of their engagement, and will choose a staff member, faculty member, or Neeley Senior mentor who can help them process and reflect on how their experiences are shaping them as a future business leader. </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        SYNTHESIS REFLECTION
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body">
                        <p>Upon completion of the four areas of engagement, Neeley Complete students will present their synthesis and reflection with their mentor. The form of the presentation is encouraged to be done based on the individual's interests and skills: it may be done in the form of a reflection paper, a video journal, a picture collage, a TedTalk recording, an online portfolio or website, or any other medium that the student desires to express themselves and their experiences through.</p>
                        <p style="margin-top: 1rem; margin-bottom: 1rem; font-weight: bold;">If you have already completed your synthesis and reflection presentation, then you can upload it down below.</p>
                        <input ref="file" v-on:change="handleFileUpload()"  type="file">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--||||||||||||||||||||||||||-->
</div>
</template>

<script>
import { ref} from "vue"

export default{
    name:'Add',

    setup() {
        const file = ref(null)

        const handleFileUpload = async() => {
           // debugger;
            console.log("selected file",file.value.files)
            //Upload to server
        }

        return {
          handleFileUpload,
          file
       }
    }
}
</script>


<style scoped lang="scss">
.join{
    margin-left: 4rem;
    margin-right: 4rem;
}
.accordion-header, .accordion-header .btn {
    font-size: 1.313rem;
    font-family: futura-pt, Arial, Sans-Serif;
    font-weight: normal;
    text-decoration: none;
    text-transform: none;
    color: #4d4d4a;
    margin-bottom: 0.125rem;
    padding-left: 0;
}


  
.accordion-button{
  color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: large;
  border-block-color: purple;
  border-color: purple;
}



a.btn {
    text-decoration: none;
}
.component-top-margin a, .component-top-margin a:hover, .lead a, .body-text a, .body-text a:hover, .sidebar a, .sidebar a:hover {
    text-decoration: underline;
}
.btn {
    text-transform: uppercase;
    padding: 0.625rem 1.875rem;
}
.btn {
    font-weight: bold;
    text-decoration: none;
}
.btn {
    font-size: 0.875rem;
}
.btn-primary {
    color: #212529;
    background-color: #fed277;
    border-color: #fed277;
    box-shadow: inset 0 1px 0 rgb(255 255 255 / 15%), 0 1px 1px rgb(0 0 0 / 8%);
}
.btn {
    display: inline-block;
    font-weight: 400;
    color: #4d4d4a;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0;
    transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
}
a {
    color: #4d1979;
    /* text-decoration: underline; */
}
a, a:hover {
    color: #4d1979;
}
a {
    color: #fed277;
    text-decoration: none;
    background-color: transparent;
}
* {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
*, *::before, *::after {
    box-sizing: border-box;
}
user agent stylesheet
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}


.card-body{
    color: #212529;
    background-color: #fed277;
    border-color: #fed277;
    box-shadow: inset 0 1px 0 rgb(255 255 255 / 15%), 0 1px 1px rgb(0 0 0 / 8%);
}
</style>