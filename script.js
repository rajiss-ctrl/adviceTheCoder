





document.addEventListener('DOMContentLoaded', ()=>{
    let formctrl = document.querySelector('#Data');
 let fullName = document.getElementById('fullName');
 let subject = document.getElementById('subject');
 let subjectBody = document.getElementById('sub-body');
 let commentList = document.querySelector('.output-container')
const landingpage = document.querySelector('#thanks-remark');
    

function template(data){
    

    let containerDiv = document.createElement('div');
    containerDiv.innerHTML=`  <div>
            
            <h3>Author's Name: <small>${data.fullName}</small></h3>
             </div>
             <div>

         <h3>Title: <small>${data.subject}</small></h3>
             </div>

             <div>
             <h4>ARTICLE</h4>
             <p>${data.subjectBody}</p>
            </div>
            <hr>`;




commentList.appendChild(containerDiv);

// commentList.insertAdjacentHTML('beforeend',`
//              <fieldset>
//              <legend>Name</legend>
//             <h3> ${data.fullName}</h3>
//              </fieldset>
//              <fieldset>
//              <legend>subject/topic</legend>
//          <h3> ${data.subject}</h3>
//              </fieldset>

//              <fieldset>
//            <legend>The push</legend>
//              <p>${data.subjectBody}</p>
//             </fieldset>
            

//             `)
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

      
      commentList.style.width='100%';

    //   save the advice to localstorage ( textContent make it display text not html tags when yuo use innerHTML in LocalStorage)
    localStorage.setItem('comments', commentList.innerHTML);
 }

 formctrl.addEventListener('submit', appendComment, false);

// retain the input data on the ui
const saved = localStorage.getItem('comments');

if(saved){
    commentList.innerHTML=saved;
}



    document.querySelector('.advicebtn').addEventListener('click', (e)=>{
        e.preventDefault();
landingpage.classList.add('form-hiden');
formctrl.classList.remove('form-hiden');
    })

        document.querySelector('.backbtn').addEventListener('click', (e)=>{
            e.preventDefault();
landingpage.classList.remove('form-hiden');
formctrl.classList.add('form-hiden');
    })
})
 // this will clear the localstorage right from the browser
function clear(){
   localStorage.clear();
    location.reload();
}