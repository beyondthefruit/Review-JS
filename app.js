// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

//Select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const butL = document.querySelector('.prev-btn');
const butR = document.querySelector('.next-btn');
const buttonRandom = document.querySelector('random-btn');

// Set starting review
let currentReview = 0;
console.log(reviews.length);

// create a function to update all review element
function showReview() {
  let review = reviews[currentReview];
  img.src = review.img;
  author.textContent = review.name;
  job.textContent = review.job;
  info.textContent = review.text;
}

// load a review when web page load.
window.addEventListener('DOMContentLoaded', function () {
  showReview();
});

// set next review
butR.addEventListener('click', function () {
  currentReview++;
  // if review 4 -> jump to review 0
  if (currentReview > reviews.length - 1) {
    currentReview = 0;
  }
  showReview(currentReview);
});

//left arrow button -> previous review
butL.addEventListener('click', function () {
  currentReview--;
  // if review 0 -> jump to review 4
  if (currentReview < 0) {
    currentReview = reviews.length - 1;
  }
  showReview(currentReview);
});

// surprise me button
buttonRandom.addEventListener('click', function () {
  currentReview = [Math.floor(3 * Math.random())];
  showReview(currentReview);
});
