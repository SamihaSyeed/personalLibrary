let myLibrary = [];
let container = document.querySelector(".container")
let bookContainer = document.querySelector(".book-container")
let addBtn = document.querySelector("#add-btn");
let entryForm = document.querySelector("#new-entry");
let submitBtn = document.querySelector('#submit-btn');
let titleEl = document.querySelector('#title');
let authorEl = document.querySelector('#author');
let pagesEl = document.querySelector('#pages');
let checkbox = document.querySelector("#checkbox")

function Book(title, author, pages, hasRead){
  this.title = title
  this.author = author
  this.pages = pages
  this.hasRead = hasRead
}
function addBook(){
    let title = document.getElementById("title").value;;
    let author = authorEl.value;
    let pages = pagesEl.value;
    let hasRead = checkbox.checked
    let newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);

    //localStorage.setItem("book", myLibrary)
    console.log(myLibrary)
    let bookCard = document.createElement("div"),
     bookTitle = document.createElement("h2"),
     bookAuthor = document.createElement("p"),
     bookPages = document.createElement("p");
    let cbDiv = document.createElement("div"),
     cbLabel = document.createElement("label"),
     readCheck = document.createElement("input");
    let deleteBtn = document.createElement("button");
    bookCard.id = 'book-card'
    bookAuthor.id = 'author-text'
    bookPages.id = 'pages-text'
    readCheck.type = "checkbox";
    readCheck.id = "read-check"
    cbLabel.setAttribute("for", "read-check");
    cbLabel.innerHTML = "Read"
    cbDiv.append(readCheck, cbLabel)
    if(hasRead){
      readCheck.checked = true
    }
    bookContainer.appendChild(bookCard)
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(cbDiv);
    bookCard.appendChild(deleteBtn);

    bookTitle.textContent = newBook.title
    bookAuthor.textContent = "By " + newBook.author
    bookPages.textContent = newBook.pages + " pages"
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener("click", function(){
      bookCard.remove()
      myLibrary.splice(myLibrary.indexOf(newBook),1)
      console.log(myLibrary)
    })
}

submitBtn.addEventListener('click', function(){
  addBook()
  titleEl.value = ''
  authorEl.value = ''
  pagesEl.value = ''
  checkbox.checked = false
  entryForm.style.display = 'none'
  bookContainer.style.display = 'flex'
})

//entryForm.style.display = 'none'
addBtn.addEventListener('click', function(){
  entryForm.style.display = 'block'
  //bookContainer.style.display = 'none'
})

let closeBtn = document.querySelector("#close-btn")
closeBtn.addEventListener('click', function(){
  entryForm.style.display = 'none'
  bookContainer.style.display = 'flex'
})
