// button toggling and section wise count

let interviewList = [];
let rejectedList = [];

let total = document.getElementById('total-count-1');
let total2 = document.getElementById('total-count-2');
let interviewCount = document.getElementById('interview-count');
// let interviewCount2 = document.getElementById('interview-count-2');
let rejectedCount = document.getElementById('rejected-count');

const allFilterBtn = document.getElementById('all-filter-button');
const interviewFilterBtn = document.getElementById('interview-filter-button');
const rejectedFilterBtn = document.getElementById('rejected-filter-button');

const allCardsSection = document.getElementById('all-cards');
const mainContainer = document.querySelector('main');
const filteredSection = document.getElementById('filtered-section');

function calculateCount(){
    total.innerText = allCardsSection.children.length;
    total2.innerText = allCardsSection.children.length;
    interviewCount.innerText = interviewList.length;
    // interviewCount2.innerText = `${interviewList.length, 'of'}`
    rejectedCount.innerText = rejectedList.length;
}

calculateCount();

function toggleStyle(id){

    allFilterBtn.classList.remove('bg-gradient-to-r' , 'from-blue-600' , 'to-blue-800', 'text-white');
    interviewFilterBtn.classList.remove('bg-gradient-to-r' , 'from-blue-600' , 'to-blue-800', 'text-white');
    rejectedFilterBtn.classList.remove('bg-gradient-to-r' , 'from-blue-600' , 'to-blue-800', 'text-white');

    const selected = document.getElementById(id);
    selected.classList.add('bg-gradient-to-r' , 'from-blue-600' , 'to-blue-800', 'text-white');

    if(id == 'interview-filter-button'){
        allCardsSection.classList.add('hidden');
        // selected.parentNode.classList.add('bg-green-500')
        // applicationStatus.classList.add('bg-gree-400');
        filteredSection.classList.remove('hidden');
        // section wise koyta job seta dekhanor code
        total2.innerText = `${interviewList.length} of ${allCardsSection.children.length}`
    }else if (id == 'all-filter-button'){
        allCardsSection.classList.remove('hidden');
        filteredSection.classList.add('hidden')
        total2.innerText = allCardsSection.children.length;
    }
    
}

// card transferring to the category

mainContainer.addEventListener('click', function(event){
    
    if(event.target.classList.contains('interview-green')){
        const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.company-name').innerText;
    const jobTitle = parentNode.querySelector('.job-title').innerText;
    const jobType = parentNode.querySelector('.job-type').innerText;
    const applicationStatus = parentNode.querySelector('.application-status').innerText;
    const jobDescription = parentNode.querySelector('.job-description').innerText;
    const interviewGreen = parentNode.querySelector('.interview-green').innerText;
    const rejectedRed = parentNode.querySelector('.rejected-red').innerText;
    parentNode.querySelector('.application-status').innerText = interviewGreen;
    // event.target.classList.parentNode.parentNode.add('bg-green-500');
    //nicher line diye application status button er color green hocche
    // parentNode.querySelector('.application-status').classList.add('bg-green-400');
    
    const cardInfo ={
        companyName,
        jobTitle,
        jobType,
        applicationStatus: 'Interview',
        jobDescription,
        interviewGreen,
        rejectedRed
    }

    const ExistingCompany = interviewList.find(item => item.companyName == cardInfo.companyName);
    
    
    if(!ExistingCompany){
       interviewList.push(cardInfo); 
    }
    calculateCount();
    
    renderInterview();
    }else if(event.target.classList.contains('rejected-red')){
        const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.company-name').innerText;
    const jobTitle = parentNode.querySelector('.job-title').innerText;
    const jobType = parentNode.querySelector('.job-type').innerText;
    const applicationStatus = parentNode.querySelector('.application-status').innerText;
    const jobDescription = parentNode.querySelector('.job-description').innerText;
    const interviewGreen = parentNode.querySelector('.interview-green').innerText;
    const rejectedRed = parentNode.querySelector('.rejected-red').innerText;
    parentNode.querySelector('.application-status').innerText = rejectedRed;
    // event.target.classList.parentNode.parentNode.add('bg-green-500');
    //nicher line diye application status button er color green hocche
    // parentNode.querySelector('.application-status').classList.add('bg-green-400');
    
    const cardInfo ={
        companyName,
        jobTitle,
        jobType,
        applicationStatus: 'Rejected',
        jobDescription,
        interviewGreen,
        rejectedRed
    }

    const ExistingCompany = rejectedList.find(item => item.companyName == cardInfo.companyName);
    
    
    if(!ExistingCompany){
       rejectedList.push(cardInfo); 
    }
    calculateCount();
    
    renderRejected();
    }

})

// renderInterview function
function renderInterview(){
    filteredSection.innerHTML = '';
    for(let interview of interviewList){
        // console.log(interview)

        let div = document.createElement('div');
        div.className = 'common-card flex justify-between bg-white rounded-lg';
        div.innerHTML = `
            <div class="left-div p-5">
           <h3 class="company-name text-2xl font-semibold mb-2 text-[#002C5C]">${interview.companyName}</h3>
           <h2 class="job-title text-xl font-medium text-gray-500 mb-4">${interview.jobTitle}</h2>
           <p class="job-type mb-4 text-gray-500">${interview.jobType}</p>
           <button class="application-status btn btn-soft mb-4 text-[#002C5C]">${interview.applicationStatus}</button>
           <p class="job-description mb-4">${interview.jobDescription}</p>
           <button class="interview-green btn btn-outline btn-success p-5">${interview.interviewGreen}</button>
           <button class="rejected-red btn btn-outline btn-error p-5 mx-3">${interview.rejectedRed}</button>
        </div>
        <div class="right-div p-5">
          <i class="fa-regular fa-trash-can text-gray-400 border border-gray-300 rounded-lg
          py-1"></i>
        </div>
        `

        filteredSection.appendChild(div);
    }
}
 
// renderRejected function

function renderRejected(){
    filteredSection.innerHTML = '';
    for(let rejected of rejectedList){
        // console.log(interview)

        let div = document.createElement('div');
        div.className = 'common-card flex justify-between bg-white rounded-lg';
        div.innerHTML = `
            <div class="left-div p-5">
           <h3 class="company-name text-2xl font-semibold mb-2 text-[#002C5C]">${rejected.companyName}</h3>
           <h2 class="job-title text-xl font-medium text-gray-500 mb-4">${rejected.jobTitle}</h2>
           <p class="job-type mb-4 text-gray-500">${rejected.jobType}</p>
           <button class="application-status btn btn-soft mb-4 text-[#002C5C]">${rejected.applicationStatus}</button>
           <p class="job-description mb-4">${rejected.jobDescription}</p>
           <button class="interview-green btn btn-outline btn-success p-5">${rejected.interviewGreen}</button>
           <button class="rejected-red btn btn-outline btn-error p-5 mx-3">${rejected.rejectedRed}</button>
        </div>
        <div class="right-div p-5">
          <i class="fa-regular fa-trash-can text-gray-400 border border-gray-300 rounded-lg
          py-1"></i>
        </div>
        `

        filteredSection.appendChild(div);
    }
}