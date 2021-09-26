// nav list responsive mode open
// let bars = document.querySelector(".nav-bars");
// let navLinks = document.querySelector(".nav-links");

// bars.addEventListener("click", function(){
//   bars.classList.toggle("fa-times");
//   navLinks.classList.toggle("show");
// },)

// nav scroll fixed

// search window close
let searchClose = document.querySelector(".search-close");
let searchIcon = document.querySelector(".search-icon");
let searchBox = document.querySelector(".search");
searchIcon.addEventListener("click", function(){
  searchBox.classList.toggle("show");
  searchClose.addEventListener("click", function (e) {
    searchBox.classList.remove("show")
    })
  
},)

document.addEventListener("keydown", function(e){
  if(e.Key == "Escape"){
    document.querySelector('.search').classList.remove("show")
  }
  console.log(e.key);
})





// owl carousel new added books data
let owlNewAddedCarousel = document.querySelector(".new-added");
let newAddedTitles = [
"ابن اوي",
"الدم والحليب",
" أطلس العالم",
"أطلس تاريخ العالم",
"Everless",
"Every thing is Fu*ked",
]
let newAddedAuthors = [
"احمد عثمان",
"محمد الجيزاوي",
"غير معروف",
"غير معروف",
"Sara Holland",
"Mark Manson",
"Everything is Fu*ked"
]
for (i= 0; i < newAddedTitles.length; i++){
  owlNewAddedCarousel.innerHTML += `
  <div class="item book">
  <div class="book-cover">
    <img src="images/bookcover/A (${i+1}).jpg" alt="${newAddedTitles[i]}" />

    <div class="book-text">
      <div class="book-rate">
        <i class="fas fa-star-half"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <div class="book-author">
        <i class="fas fa-user-circle"></i>
        ${newAddedAuthors[i]}
      </div>
      <div class="book-tag">
        <i class="fas fa-tag"></i>
        روايات
      </div>
      <div class="book-btn">
        <a href="#">
          <i class="fas fa-download"></i>
          القراءة أو التحميل
        </a>
      </div>
    </div>
  </div>
  <h3 class="book-title">
    <a href="#">${newAddedTitles[i]}</a>
  </h3>
</div>
<!-- book 001 -->
  `
}


// main owl carousel 
$('.owl-qoutes').owlCarousel({
    rtl:true,
    stagePadding: 0,
    items: 1,
    autoplay:true,
    loop:true,
    margin:0,
    singleItem:true,
    nav:false,
    dots:false
})
// main owl carousel 
$('.owl-authors').owlCarousel({
  rtl:true,
  loop:true,
  margin:10,
  nav:false,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      425:{
          items:2
      },
      768:{
        items:3
    },
      1000:{
          items:5
      }
  }
})

// main owl carousel 
$('.owl-carousel').owlCarousel({
  rtl:true,
  loop:true,
  margin:10,
  nav:false,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      375:{
          items:2
      },
      768:{
        items:3
    },
      1000:{
          items:5
      }
  }
})


// //////////////////////////////////
// books pages 
let booksLatestAdd = document.querySelector("#booksIndexPage");
let booksCovers = [
  "../images/bookcover/A (1).jpg",
"../images/bookcover/A (2).jpg",
"../images/bookcover/A (3).jpg",
"../images/bookcover/A (4).jpg",
"../images/bookcover/A (5).jpg",
"../images/bookcover/A (6).jpg",
"../images/bookcover/A (7).jpg",
"../images/bookcover/A (8).jpg",
"../images/bookcover/A (9).jpg",
"../images/bookcover/A (10).jpg",
"../images/bookcover/A (11).jpg",
"../images/bookcover/A (12).jpg",
"../images/bookcover/A (13).jpg",
"../images/bookcover/A (14).jpg",
"../images/bookcover/A (15).jpg"
];
let booksTitles = [
  "ابن آوى",
  "الدم والحليب",
  "أطلس العالم",
  "أطلس تاريخ العالم",
  "Everless",
  "Everything is Fu*king",
  "فن العيش الحكيم",
  "غزل البنات",
  "Good to great",
  "المحروسة",
  "قصص وقت النوم",
  "لا تأكل بمفردك",
  "Looking for Alaska",
  "الثعابين مازالت سامة",
  "My first book of time",
  "The Hobbit"
]
let booksAuthors = [
  "حلمي مهران",
  "محمد الجيزاوي",
  "غير معروف",
  "غير معروف",
  "Sara Holland",
  "Mark Manson",
  "أرتور شوبنهاور",
  "حنان لاشين",
  "Jim Collins",
  "نبيل القط",
  "غير معروف",
  "غير معروف",
  "John Green",
  "اليكس فيلا جيرا",
  "غير معروف",
  "J.R.R Tolkien",
  "مارك توين"
]
for (let i = 0 ; i < booksCovers.length ; i++){

  booksLatestAdd.innerHTML += `
    <div class="book">
                <div class="book-cover">
                  <img src="${booksCovers[i]}", alt="book cover" />
    
                  <div class="book-text">
                    <div class="book-rate">
                      <i class="fas fa-star-half"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <div class="book-author">
                      <i class="fas fa-user-circle"></i>
                      ${booksAuthors[i]}
                    </div>
                    <div class="book-tag">
                      <i class="fas fa-tag"></i>
                      روايات
                    </div>
                    <div class="book-btn">
                      <a href="#">
                        <i class="fas fa-download"></i>
                        القراءة أو التحميل
                      </a>
                    </div>
                  </div>
                </div>
                <h3 class="book-title">
                  <a href="#" title="${booksTitles[i]}">${booksTitles[i]}</a>
                </h3>
              </div>
    `
  }

// search books page
let inputBox = document.getElementById("bookFilter")
let booksBlock = document.querySelectorAll(".book");
let bookTitle = document.querySelectorAll(".book-title a");
let bookAuthors = document.querySelectorAll(".book-author");
inputBox.addEventListener("keyup", function () {
    for (i = 0; i < booksBlock.length; i++){
        bookTitle[i].innerHTML.toLowerCase().indexOf(inputBox.value.toLowerCase()) > -1 || bookAuthors[i].innerHTML.toLowerCase().indexOf(inputBox.value.toLowerCase()) > -1 ? booksBlock[i].style.display = "block": booksBlock[i].style.display = "none";
    }
 })


//  latest add books section in home page after owl carousel
let booksLatest = document.querySelector("#booksIndexPage")
for (let x = 0 ; x <= 8 ; x++){
    booksLatest.innerHTML += `
    <div class="book">
                <div class="book-cover">
                  <img src="${booksCover[x]}", alt="book cover" />
    
                  <div class="book-text">
                    <div class="book-rate">
                      <i class="fas fa-star-half"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <div class="book-author">
                      <i class="fas fa-user-circle"></i>
                      ${booksAuthors[x]}
                    </div>
                    <div class="book-tag">
                      <i class="fas fa-tag"></i>
                      روايات
                    </div>
                    <div class="book-btn">
                      <a href="#">
                        <i class="fas fa-download"></i>
                        القراءة أو التحميل
                      </a>
                    </div>
                  </div>
                </div>
                <h3 class="book-title">
                  <a href="#" title="${booksTitles[x]}">${booksTitles[x]}</a>
                </h3>
              </div>
    `
  }