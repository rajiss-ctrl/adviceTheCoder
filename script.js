 let formctrl = document.querySelector('#Data');
 let fullName = document.getElementById('fullName');
 let subject = document.getElementById('subject');
 let subjectBody = document.getElementById('sub-body');
 let commentList = document.querySelector('.output-container')


 function template(data){

commentList.insertAdjacentHTML('beforeend',`
             <fieldset>
             <legend>Name</legend>
            <h3> ${data.fullName}</h3>
             </fieldset>
             <fieldset>
             <legend>subject/topic</legend>
         <h3> ${data.subject}</h3>
             </fieldset>

             <fieldset>
           <legend>The push</legend>
             <p>${data.subjectBody}</p>
            </fieldset>
            

            `)
 }

 function appendComment(e){
    //  prevent form from submitting
     e.preventDefault();
//  define dynamic data to add
     const data ={
         fullName: fullName.value,
         subject: subject.value,
         subjectBody:subjectBody.value
     }

    // if the fields are empty, it will not submit
     if(subject.value.length < 1 || subjectBody.value.length < 1) return;
   
     // append comments
     template(data)
    
     //  reset the fields
      formctrl.value ="";
      fullName.value="";
      subject.value ="";
      subjectBody.value="";

    //   save the advice to localstorage ( textContent make it display text not html tags when yuo use innerHTML in LocalStorage)
    localStorage.setItem('comments', commentList.innerHTML);
 }

 formctrl.addEventListener('submit', appendComment, false);

// retain the input data on the ui
const saved = localStorage.getItem('comments');

if(saved){
    commentList.innerHTML=saved;
}
// this will clear the localstorage right from the browser
function clear(){
   localStorage.clear();
    location.reload();
}


// I LEARNED WHY I SHOULD NOT DO IT THIS WAY
// function doFirst(){
//     let formctrl = document.querySelector('#Data');
//             // let fullName = document.getElementById('fullName');
//             // let subject = document.getElementById('subject');
//             // let subjectBody = document.getElementById('sub-body');
//         formctrl.addEventListener('submit', addForm,false);
//         displayData()
//         }
        
//         //  console.log(localStorage.getItem('formData'));
//         function addForm(e){
//             e.preventDefault();
            
//             let formctrl = document.querySelector('#Data');
//             let fullName = document.getElementById('fullName');
//             let subject = document.getElementById('subject');
//             let subjectBody = document.getElementById('sub-body');

//             let formData = {
//                 fullName: fullName.value,
//                 subject:subject.value,
//                 subjectBody:subjectBody.value
//               }
//             localStorage.setItem('formData',JSON.stringify(formData));
//             displayData();
//             formctrl="";
//             fullName="";
//             subject="";

//         }

//         function displayData(){
//             if(localStorage.getItem('formData')){
           
//             // console.log(JSON.parse(localStorage.getItem('formData')));
//             // destructure of the object
//             let {fullName,subject,subjectBody}=JSON.parse(localStorage.getItem('formData'));
//             let output = document.querySelector('.output-container');
//             output.innerHTML=`
//             <fieldset>
//             <legend>Name</legend>
//            <h3> ${fullName}</h3>
//             </fieldset>
//             <fieldset>
//             <legend>subject/topic</legend>
//            <h3> ${subject}</h3>
//             </fieldset>

//             <fieldset>
//             <legend>The push</legend>
//             <p>${subjectBody}</p>
//             </fieldset>
            

//             `;
        
            
           
// }
//         }
    

// function clear(){
//     localStorage.clear();
//     location.reload();
// }
//         window.addEventListener('load',doFirst,false);