
function doFirst(){
    let formctrl = document.querySelector('#Data');
            // let fullName = document.getElementById('fullName');
            // let subject = document.getElementById('subject');
            // let subjectBody = document.getElementById('sub-body');
        formctrl.addEventListener('submit', addForm,false);
        displayData()
        }
        
        //  console.log(localStorage.getItem('formData'));
        function addForm(e){
            e.preventDefault();
            
            let formctrl = document.querySelector('#Data');
            let fullName = document.getElementById('fullName');
            let subject = document.getElementById('subject');
            let subjectBody = document.getElementById('sub-body');

            let formData = {
                fullName: fullName.value,
                subject:subject.value,
                subjectBody:subjectBody.value
              }
            localStorage.setItem('formData',JSON.stringify(formData));
            displayData();
            formctrl="";
            fullName="";
            subject="";

        }

        function displayData(){
            if(localStorage.getItem('formData')){
           
            // console.log(JSON.parse(localStorage.getItem('formData')));
            // destructure of the object
            let {fullName,subject,subjectBody}=JSON.parse(localStorage.getItem('formData'));
            let output = document.querySelector('.output-container');
            output.innerHTML=`
            <fieldset>
            <legend>Name</legend>
           <h3> ${fullName}</h3>
            </fieldset>
            <fieldset>
            <legend>subject/topic</legend>
           <h3> ${subject}</h3>
            </fieldset>

            <fieldset>
            <legend>The push</legend>
            <p>${subjectBody}</p>
            </fieldset>
            

            `;
        
            
           
}
        }
    

function clear(){
    localStorage.clear();
    location.reload();
}
        window.addEventListener('load',doFirst,false);