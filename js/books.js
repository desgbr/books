// books pages 
let booksPg = document.querySelector("#pg-books");
let booksCover = [
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
"../images/bookcover/A (15).jpg",
"../images/bookcover/A (16).jpg",
"../images/bookcover/A (17).jpg",
"../images/bookcover/A (18).jpg",
"../images/bookcover/A (19).jpg",
"../images/bookcover/A (20).jpg",
"../images/bookcover/A (21).jpg",
"../images/bookcover/A (22).jpg",
"../images/bookcover/A (23).jpg",
"../images/bookcover/A (24).jpg",
"../images/bookcover/A (25).jpg",
"../images/bookcover/A (26).jpg",
"../images/bookcover/A (27).jpg",
"../images/bookcover/A (28).jpg",
"../images/bookcover/A (29).jpg",
"../images/bookcover/A (30).jpg",
"../images/bookcover/A (31).jpg",
"../images/bookcover/A (32).jpg",
"../images/bookcover/A (33).jpg",
"../images/bookcover/A (34).jpg",
"../images/bookcover/A (35).jpg",
"../images/bookcover/A (36).jpg",
"../images/bookcover/A (37).jpg",
"../images/bookcover/A (38).jpg",
"../images/bookcover/A (39).jpg",
"../images/bookcover/A (40).jpg",
"../images/bookcover/A (41).jpg",
"../images/bookcover/A (42).jpg",
"../images/bookcover/A (43).jpg",
"../images/bookcover/A (44).jpg",
"../images/bookcover/A (45).jpg",
"../images/bookcover/A (46).jpg",
"../images/bookcover/A (47).jpg",
"../images/bookcover/A (48).jpg",
"../images/bookcover/A (49).jpg",
"../images/bookcover/A (50).jpg",
"../images/bookcover/A (51).jpg",
"../images/bookcover/A (52).jpg",
"../images/bookcover/A (53).jpg",
"../images/bookcover/A (54).jpg",
"../images/bookcover/A (55).jpg",
"../images/bookcover/A (56).jpg",
"../images/bookcover/A (57).jpg",
"../images/bookcover/A (58).jpg",
"../images/bookcover/A (59).jpg",
"../images/bookcover/A (60).jpg",
"../images/bookcover/A (61).jpg",
"../images/bookcover/A (62).jpg",
"../images/bookcover/A (63).jpg",
"../images/bookcover/A (64).jpg",
"../images/bookcover/A (65).jpg",
"../images/bookcover/A (66).jpg",
"../images/bookcover/A (67).jpg",
"../images/bookcover/A (68).jpg",
"../images/bookcover/A (69).jpg",
"../images/bookcover/A (70).jpg",
"../images/bookcover/A (71).jpg",
"../images/bookcover/A (72).jpg",
"../images/bookcover/A (73).jpg",
"../images/bookcover/A (74).jpg",
"../images/bookcover/A (75).jpg",
"../images/bookcover/A (76).jpg",
"../images/bookcover/B (1).jpg",
"../images/bookcover/B (2).jpg",
"../images/bookcover/B (3).jpg",
"../images/bookcover/B (4).jpg",
"../images/bookcover/B (5).jpg",
"../images/bookcover/B (6).jpg",
"../images/bookcover/B (7).jpg",
"../images/bookcover/B (8).jpg",
"../images/bookcover/B (9).jpg",
"../images/bookcover/B (10).jpg",
"../images/bookcover/B (11).jpg",
"../images/bookcover/B (12).jpg",
"../images/bookcover/B (13).jpg",
"../images/bookcover/B (14).jpg",
"../images/bookcover/B (15).jpg",
"../images/bookcover/B (16).jpg",
"../images/bookcover/B (17).jpg",
"../images/bookcover/B (18).jpg",
"../images/bookcover/B (19).jpg",
"../images/bookcover/B (20).jpg",
"../images/bookcover/B (21).jpg",
"../images/bookcover/B (22).jpg",
"../images/bookcover/B (23).jpg",
"../images/bookcover/B (24).jpg",
"../images/bookcover/B (25).jpg",
];
let booksTitles2 = [
  "?????? ??????",
  "???????? ??????????????",
  "???????? ????????????",
  "???????? ?????????? ????????????",
  "Everless",
  "Everything is Fu*king",
  "???? ?????????? ????????????",
  "?????? ????????????",
  "Good to great",
  "????????????????",
  "?????? ?????? ??????????",
  "???? ???????? ????????????",
  "Looking for Alaska",
  "???????????????? ???????????? ????????",
  "My first book of time",
  "The Hobbit",
  "?????? ????????",
  "?????? ?????????? ???????????? ???????? ?????????????? ?????? ??????????",
  "???????????? ?????? ????????",
  "?????????? ????????????",
  "??????????????",
  "??????????????????",
  "???????? ?????????????? ??????????????",
  "?????????? ???????????? ????????????",
  "?????????????? ???????????? ????????????",
  "???????????? ????????????????",
  "???????????? ?????????? ???????????? ??????????????",
  "???????? ????????????",
  "????????????",
  "?????? ?????????? ??????",
  "?????????? ???????? ?????????? ???????? ???????? ????????????????",
  "???????? ??????????",
  "???????? ????????????",
  "?????? ?????????? ????????????",
  "?????????????? ???????????? ?????????? ????????????",
  "???????????? ???????????? ?????????? ????????????",
  "?????????? ?????????????? ??????????????",
  "???????????? ??????????????",
  "???????? ????????????",
  "???????? ??????????",
  "????????????????",
  "?????????? ??????????????",
  "?????????? ????????",
  "???? ?????? ??????????????",
  "????????????????",
  "?????????? ?????? ?????????? ???? ?????????? ???????????? ????????????",
  "?????????????? ?????????????? ???????????? ???? ?????????? ????????????",
  " ?????????????? ?????????????? ?????????????? ?????????????? ???? ?????????? ????????????",
  "?????????? ?????????? ????????????????",
  "???????????? ???? ?????????????? ????????????",
  "?????????? ?????????????? ????????????",
  "???????????? ???????? ????????",
  "???????????? ????????????",
  "?????? ?????? ????????",
  "?????????? ???????? ?????????? ????????",
  "???? ???????????? ???????????? ??????????",
  "?????????????? ???????? ???????????? ??????????????",
  "???????????? ?????? ?????????????? ?????????????? ?????????????????? ????????????????",
  "?????????????? ???????? ????????????",
  "?????????? ????????",
  "???????????? ???? ?????????? ????????????",
  "?????????????? ????????????????",
  "???????????????????? ???????????????? ???? ?????????? ????????????????",
  "?????????? ?????????? ????????????????",
  "?????????? ??????????????",
  "?????????? ??????????????",
  "???????????? ?????????? ???????????? ????????????",
  "???? ???????? ??????????????",
  "?????? ??????????",
  "???????????? ???? ??????????????",
  "???????? ????????????",
  "???????????? ??????????????",
  "???????? ?????? ????????",
  "???????? ????????????",
  "???????? ????????",
  "???????? ???????????? ?????????? ????????????",
  "???????????? ???????????? ??????????",
  "?????? ??????????",
  "?????????????? ?????????????? ??????????????",
  "?????????? ??????????????",
  "?????????????? ??????????????????",
  "???????????? ???? ??????????",
  "???????????? ?????????? ??????????????????????",
  "??????????????",
  "?????????? ??????????",
  "???????? ???????????? ??????????????",
  "?????? ???????????? ?????????????? ???????????? ?????? ?????????? ????????",
  "?????????? ?????? ????????????",
  "????????",
  "????????",
  "???????? ??????????????",
  "???????????? ???? ????????????",
  "?????????? ?????????????? ?????????????????? ??????????????",
  "?????????? ??????????",
  "???? ?????????? ???? ??????",
  "??????????",
  "???????? ??????",
  "???????? ???????? ????????",
  "???????? ??????",
  "???????? ????????????",
  "?????????? ??????????"
]
let booksAuthors2 = [
  "???????? ??????????",
  "???????? ????????????????",
  "?????? ??????????",
  "?????? ??????????",
  "Sara Holland",
  "Mark Manson",
  "?????????? ????????????????",
  "???????? ??????????",
  "Jim Collins",
  "???????? ????????",
  "?????? ??????????",
  "?????? ??????????",
  "John Green",
  "?????????? ???????? ????????",
  "?????? ??????????",
  "J.R.R Tolkien",
  "???????? ????????",
  "?????? ?????? ??????????????",
  "?????????????? ??????????????",
  "?????????????? ??????????????",
  "?????????????? ??????????????",
  "?????????????? ??????????????",
  "?????????????? ??????????????",
  "?????????????? ??????????????",
  "?????????????? ??????????????",
  "?????????????? ??????????????",
  "?????????????? ??????????????",
  "?????????????? ??????????????",
  "???????? ???????? ??????????",
  "???????? ???????? ??????????",
  "???????? ???????? ??????????",
  "???????? ???????? ??????????",
  "???????? ???????? ??????????",
  "???????? ???????? ??????????",
  "???????? ???????? ??????????",
  "???????? ???????? ??????????",
  "?????????????? ??????????????",
  "?????????????? ??????????????",
  "?????????????? ??????????????",
  "?????????????? ??????????????",
  "?????????????? ??????????????",
  "?????????????? ??????????????",
  "?????????????? ??????????????",
  "?????????????? ??????????????",
  "?????????????? ??????????????",
  "?????????????? ??????????????",
  "?????????? ??????????????",
  "?????????? ??????????????",
  "?????????? ??????????????",
  "?????????? ??????????????",
  "?????????? ??????????????",
  "???????? ??????????",
  "???????? ??????????",
  "???????? ??????????",
  "???????? ??????????",
  "???????? ??????????",
  "???????? ??????????",
  "???????? ??????????",
  "?????? ???? ???????? ??????????????",
  "?????? ???? ???????? ??????????????",
  "?????? ???? ???????? ??????????????",
  "?????? ???? ???????? ??????????????",
  "?????????????? ????????????",
  "?????????????? ????????????",
  "?????????????? ????????????",
  "?????????????? ????????????",
  "?????????????? ??????????????",
  "?????????????? ??????????????",
  "?????????????????? ??????????????",
  "???????? ??????????????",
  "???????? ??????????????",
  "???????? ??????????????",
  "???????? ??????????????",
  "?????? ??????????????",
  "?????? ??????????????",
  "?????? ??????????????",
  "?????? ??????????",
  "?????? ??????????",
  "?????????????? ??????????",
  "?????? ??????????",
  "?????? ??????????",
  "???????? ??????",
  "???????? ??????????????",
  "?????? ????????????????",
  "???????? ??????",
  "???????? ?????? ????????",
  "???????? ????????",
  "?????? ????????????",
  "?????? ??????",
  "?????? ??????",
  "?????? ??????",
  "?????????? ??????",
  "???????? ????????",
  "?????????? ??????????",
  "?????? ??????????",
  "???????? ??????????",
  "???????? ????????",
  "???????? ???????? ??????????",
  "???????? ????????",
  "???????? ??????",
  " ???????? ???????? ????????",
]
for (let i = 0 ; i < booksCover.length ; i++){

    booksPg.innerHTML += `
    <div class="book">
                <div class="book-cover">
                  <img src="${booksCover[i]}", alt="book cover" />
    
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
                      ${booksAuthors2[i]}
                    </div>
                    <div class="book-tag">
                      <i class="fas fa-tag"></i>
                      ????????????
                    </div>
                    <div class="book-btn">
                      <a href="#">
                        <i class="fas fa-download"></i>
                        ?????????????? ???? ??????????????
                      </a>
                    </div>
                  </div>
                </div>
                <h3 class="book-title">
                  <a href="#" title="${booksTitles2[i]}">${booksTitles2[i]}</a>
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
