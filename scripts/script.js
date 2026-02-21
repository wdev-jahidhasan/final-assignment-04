// total count
let total = document.getElementById('total-count-1');
let total2 = document.getElementById('total-count-2');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

const allCardsSection = document.getElementById('all-cards');

function calculateCount(){
    total.innerText = allCardsSection.children.length;
    total2.innerText = allCardsSection.children.length;
}

calculateCount();