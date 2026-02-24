let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

let total = document.getElementById('total-count-1');
let total2 = document.getElementById('total-count-2');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

const allFilterBtn = document.getElementById('all-filter-button');
const interviewFilterBtn = document.getElementById('interview-filter-button');
const rejectedFilterBtn = document.getElementById('rejected-filter-button');

const allCardsSection = document.getElementById('all-cards');
const mainContainer = document.querySelector('main');
const filteredSection = document.getElementById('filtered-section');

// calculateCount() function

function calculateCount() {
    const totalJobs = allCardsSection.children.length;

    total.innerText = totalJobs;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

    if (currentStatus === 'interview-filter-button') {
        total2.innerText = `${interviewList.length} of ${totalJobs} Jobs`;
    }
    else if (currentStatus === 'rejected-filter-button') {
        total2.innerText = `${rejectedList.length} of ${totalJobs} Jobs`;
    }
    else {
        total2.innerText = `${totalJobs} Jobs`;
    }
}
calculateCount();

// toggleStyle() function

function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-gradient-to-r', 'from-blue-600', 'to-blue-800', 'text-white');
    interviewFilterBtn.classList.remove('bg-gradient-to-r', 'from-blue-600', 'to-blue-800', 'text-white');
    rejectedFilterBtn.classList.remove('bg-gradient-to-r', 'from-blue-600', 'to-blue-800', 'text-white');

    const selected = document.getElementById(id);
    currentStatus = id;
    selected.classList.add('bg-gradient-to-r', 'from-blue-600', 'to-blue-800', 'text-white');
    if (id == 'interview-filter-button') {
        allCardsSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        total2.innerText = `${interviewList.length} of ${allCardsSection.children.length} Jobs`;
        renderInterview();
    } else if (id == 'all-filter-button') {
        allCardsSection.classList.remove('hidden');
        filteredSection.classList.add('hidden')
        total2.innerText = `${allCardsSection.children.length} Jobs`;
    } else if (id == 'rejected-filter-button') {
        allCardsSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        total2.innerText = `${rejectedList.length} of ${allCardsSection.children.length} Jobs`;
        renderRejected();
    }
}

// card transferring to the category

mainContainer.addEventListener('click', function (event) {

    if (event.target.classList.contains('interview-green')) {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.company-name').innerText;
        const jobTitle = parentNode.querySelector('.job-title').innerText;
        const jobType = parentNode.querySelector('.job-type').innerText;
        const applicationStatus = parentNode.querySelector('.application-status').innerText;
        const jobDescription = parentNode.querySelector('.job-description').innerText;
        const interviewGreen = parentNode.querySelector('.interview-green').innerText;
        const rejectedRed = parentNode.querySelector('.rejected-red').innerText;
        parentNode.querySelector('.application-status').innerText = interviewGreen;


        const cardInfo = {
            companyName,
            jobTitle,
            jobType,
            applicationStatus: interviewGreen,
            jobDescription,
            interviewGreen,
            rejectedRed
        }

        const existingCompany = interviewList.find(item => item.companyName == cardInfo.companyName);
        if (!existingCompany) {
            interviewList.push(cardInfo);
        }

        rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName);
        calculateCount();

        if (currentStatus === 'rejected-filter-button') {
            renderRejected();
        }

    } else if (event.target.classList.contains('rejected-red')) {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.company-name').innerText;
        const jobTitle = parentNode.querySelector('.job-title').innerText;
        const jobType = parentNode.querySelector('.job-type').innerText;
        const applicationStatus = parentNode.querySelector('.application-status').innerText;
        const jobDescription = parentNode.querySelector('.job-description').innerText;
        const interviewGreen = parentNode.querySelector('.interview-green').innerText;
        const rejectedRed = parentNode.querySelector('.rejected-red').innerText;
        parentNode.querySelector('.application-status').innerText = rejectedRed;

        const cardInfo = {
            companyName,
            jobTitle,
            jobType,
            applicationStatus: rejectedRed,
            jobDescription,
            interviewGreen,
            rejectedRed
        }

        const existingCompany = rejectedList.find(item => item.companyName == cardInfo.companyName);
        if (!existingCompany) {
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName);
        if (currentStatus === 'interview-filter-button') {
            renderInterview();
        }
        calculateCount();

    // code for enabling delete icons 

    } 
    else if(event.target.classList.contains('fa-trash-can')){

        const card = event.target.closest('.common-card');
        const companyName = card.querySelector('.company-name').innerText;

        card.remove();

        interviewList = interviewList.filter(item => item.companyName !== companyName);
        rejectedList = rejectedList.filter(item => item.companyName !== companyName);

        calculateCount();

        if(currentStatus === 'interview-filter-button'){
            renderInterview();
        }else if(currentStatus === 'rejected-filter-button'){
            renderRejected();
        }

        const allCards = allCardsSection.querySelectorAll('.common-card');
        allCards.forEach(item => {
            const name = item.querySelector('.company-name').innerText;
            if(name === companyName){
                const statusBtn = item.querySelector('.application-status');
                statusBtn.innerText = 'Not Applied';
            }
        });

    }
})

// renderInterview function

function renderInterview() {
    filteredSection.innerHTML = '';
    for (let interview of interviewList) {
        let div = document.createElement('div');
        div.className = 'common-card flex justify-between bg-gradient-to-b from-green-100 to-blue-100 rounded-lg';
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

    if (filteredSection.innerHTML == '') {
        filteredSection.innerHTML = `
            <div class="p-10 mx-3 my-10 bg-gradient-to-br from-slate-400 to-red-200 rounded-md">
                <img class="w-36 h-36 mx-auto" src="./images/box.png" alt="">
                <h1 class="text-3xl text-center text-gray-700 font-semibold my-3">No jobs available</h1>
                <p class="text-center font-medium">Check back soon for new job opportunities</p>
         </div>
        `
    }
}

// renderRejected function

function renderRejected() {
    filteredSection.innerHTML = '';
    for (let rejected of rejectedList) {
        let div = document.createElement('div');
        div.className = 'common-card flex justify-between bg-gradient-to-b from-green-100 to-blue-100 rounded-lg';
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

    if (filteredSection.innerHTML == '') {
        filteredSection.innerHTML = `
            <div class="p-10 mx-3 my-10 bg-gradient-to-br from-slate-400 to-red-200 rounded-md">
                <img class="w-36 h-36 mx-auto" src="./images/box.png" alt="">
                <h1 class="text-3xl text-center text-gray-700 font-semibold my-3">No jobs available</h1>
                <p class="text-center font-medium">Check back soon for new job opportunities</p>
         </div>
        `
    }
}