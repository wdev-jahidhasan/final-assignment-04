// button toggling and section wise count

let interviewList = [];
let rejectedList = [];

let total = document.getElementById('total-count-1');
let total2 = document.getElementById('total-count-2');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

const allFilterBtn = document.getElementById('all-filter-button');
const interviewFilterBtn = document.getElementById('interview-filter-button');
const rejectedFilterBtn = document.getElementById('rejected-filter-button');

const allCardsSection = document.getElementById('all-cards');
const mainContainer = document.querySelector('main');

function calculateCount(){
    total.innerText = allCardsSection.children.length;
    total2.innerText = allCardsSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

calculateCount();

function toggleStyle(id){
    allFilterBtn.classList.remove('bg-gradient-to-r' , 'from-blue-600' , 'to-blue-800', 'text-white');
    interviewFilterBtn.classList.remove('bg-gradient-to-r' , 'from-blue-600' , 'to-blue-800', 'text-white');
    rejectedFilterBtn.classList.remove('bg-gradient-to-r' , 'from-blue-600' , 'to-blue-800', 'text-white');

    allFilterBtn.classList.add('bg-gray-200', 'text-black');
    interviewFilterBtn.classList.add('bg-gray-200', 'text-black');
    rejectedFilterBtn.classList.add('bg-gray-200', 'text-black');

    const selected = document.getElementById(id);
    selected.classList.add('bg-gradient-to-r' , 'from-blue-600' , 'to-blue-800', 'text-white');
}

// card transferring to the category

mainContainer.addEventListener('click', function(event){
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.company-name').innerText;
    const jobTitle = parentNode.querySelector('.job-title').innerText;
    const jobType = parentNode.querySelector('.job-type').innerText;
    const applicationStatus = parentNode.querySelector('.application-status').innerText;
    const jobDescription = parentNode.querySelector('.job-description').innerText;
    const interviewGreen = parentNode.querySelector('.interview-green').innerText;
    const rejectedRed = parentNode.querySelector('.rejected-red').innerText;
    
    const cardInfo ={
        companyName,
        jobTitle,
        jobType,
        applicationStatus,
        jobDescription,
        interviewGreen,
        rejectedRed
    }
    
})