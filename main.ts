
//listing element
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();
    


    let profilepictureinput = document.getElementById('profilepicture') as HTMLInputElement
    //type assertion
    let nameElement = document.getElementById("name") as HTMLInputElement;
    let emailElement = document.getElementById("email") as HTMLInputElement;
    let phoneElement = document.getElementById("phone") as HTMLInputElement;
    
    let educationElement = document.getElementById("education") as HTMLInputElement;
    
    let jobTitleElement = document.getElementById("jobTitle") as HTMLInputElement;
    let companyNameElement = document.getElementById("companyName") as HTMLInputElement;
    let workDurationElement = document.getElementById("workDuration") as HTMLInputElement;
    
    let skillsElement = document.getElementById("skills") as HTMLInputElement;

///////
let usernameElement = document.getElementById("username") as HTMLInputElement;



    
    if (profilepictureinput && nameElement && emailElement && phoneElement && educationElement &&jobTitleElement && companyNameElement && workDurationElement && skillsElement && usernameElement ){
    
    let name = nameElement.value
    let email = emailElement.value
    let phone = phoneElement.value
    let education = educationElement.value
    let job = jobTitleElement.value
    let company = companyNameElement.value
    let workDuration = workDurationElement.value
    let skills = skillsElement.value

    let username = usernameElement.value;
    let uniquePath = `resume/${username.replace(/\s+/g,'_')}_cv.html`
    
    //picture element
let profilepicturefile = profilepictureinput.files?.[0]
let profilepictureURL = profilepicturefile ? URL.createObjectURL(profilepicturefile) : '';
    
    //creconstate resume output
    let resumeOutput= `
    <h2> resume</h2>
    ${profilepictureURL ? `<img src="${profilepictureURL}" alt="Profile Picture" class="profilePicture">` :'' }
    <p><strong>Name:</strong><SPAN id="edit-name" class="editable" ${name} </SPAN></p>
    <p><strong>Email:</strong><SPAN id="email" class="editable"${email} </SPAN></p>
    <p><strong>Phone number:</strong><SPAN id="edit-phone" class="editable" ${phone} </SPAN></p>
     
    <h3>Education</h3>
    <p id="education" class="editable">${education}</p>
    
    <h3>job</h3>
    <p id="job" class="editable">${job}</p>
    
    <h3>company</h3>
    <p id="company" class="editable">${company}</p>
    
    <h3>workDuration</h3>
    <p id="workDuration" class="editable">${workDuration}</p>
    
    <h3>skills</h3>
    <p id="skills" class="editable">${skills}</p>          
    
    `;

let downloadLink = document.createElement('a')
downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)

downloadLink.download = uniquePath
downloadLink.textContent = 'Download your 2024 Resume';
//display the resume in the output container
    let resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.classList.remove("hidden");
//create container for buttons
let buttonscontainer = document.createElement("div");
buttonscontainer.id ="buttonscontainer";
 resumeOutputElement.appendChild(buttonscontainer)
        resumeOutputElement.style.display = "block";
//add dowmload pdf button
let downloadButton = document.createElement("button");
downloadButton.textContent ="Download as pdf";
downloadButton.addEventListener("click",()=>{
    window.print();
});
buttonscontainer.appendChild(downloadButton);

//add shareable link button
let sharelinkButton = document.createElement("button");
sharelinkButton.textContent = "copy shareable link";
sharelinkButton.addEventListener("click", async()=>{
    try{
// create a unique shareable link (simulate it in this case)
let shareablelink =`https://yourdomain.com/resume/${name.replace(
    /\s+/g,"_"
)}_cv.html`;

//use clipboard api to copy thr sharable link
await navigator.clipboard.writeText(shareablelink);
alert("shareable link copied to clipboard!. please try again.");
}catch(err){
    console.error("failed to copy link:",err);
    alert("failed to copy link to clipboard!. please try again.");
}
});
buttonscontainer.appendChild(sharelinkButton);
     }else{
        console.error("Resume output container not found");
    }
}else{
    console.error("form elements are missing");
}
});

   

                   