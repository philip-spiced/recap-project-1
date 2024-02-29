// current page

// create a js map with the pages
const pages = new Map()
pages.set("home", "./components/main")
pages.set("bookmark", "./components/bookmark")
pages.set("profile", "./components/profile")

const defaultPage = "home"

// create a function that removes the active class from all buttons and sets the active class to the button that was clicked
const setActiveButton = (buttonEl) => {
  homeButtonEl.classList.remove("active")
  bookmarkButtonEl.classList.remove("active")
  profileButtonEl.classList.remove("active")
  buttonEl.classList.add("active")
}

const mainBodyFrameEl = document.querySelector('[data-js="main-body-frame"]')

const homeButtonEl = document.querySelector('[data-js="home-button"]')
const bookmarkButtonEl = document.querySelector('[data-js="bookmark-button"]')
const profileButtonEl = document.querySelector('[data-js="profile-button"]')

homeButtonEl.addEventListener("click", () => {
  mainBodyFrameEl.src = pages.get("home")
  setActiveButton(homeButtonEl)
})

bookmarkButtonEl.addEventListener("click", () => {
  mainBodyFrameEl.src = pages.get("bookmark")
  setActiveButton(bookmarkButtonEl)
})

profileButtonEl.addEventListener("click", () => {
  mainBodyFrameEl.src = pages.get("profile")
  setActiveButton(profileButtonEl)
})

const qsAndAs = [
  {
    question: "What is the name of the school that Harry Potter attends?",
    answer: "Hogwarts School of Witchcraft and Wizardry",
    tags: ["#harrypotter", "#hogwarts"],
    isBookmarked: false
  },
  {
    question: "Who is Harry Potter's best friend throughout the series?",
    answer: "Ron Weasley",
    tags: ["#harrypotter", "#ronweasley"],
    isBookmarked: false
  },
  {
    question: "What is the name of the lightning bolt-shaped scar on Harry Potter's forehead?",
    answer: "The Dark Mark",
    tags: ["#harrypotter", "#ronweasley"],
    isBookmarked: false
  },
  {
    question: "Which magical creature guards the entrance to the Gryffindor common room?",
    answer: "The Fat Lady (portrait)",
    tags: ["#harrypotter", "#ronweasley"],
    isBookmarked: false
  },
  {
    question: "What is the name of the game played on flying broomsticks in the wizarding world?",
    answer: "Quidditch",
    tags: ["#harrypotter", "#ronweasley"],
    isBookmarked: false
  },
  {
    question: "What is the name of the three-headed dog that guards the Sorcerer's Stone?",
    answer: "Fluffy",
    tags: ["#harrypotter", "#ronweasley"],
    isBookmarked: false
  },
  {
    question: "Which professor is the head of Slytherin House at Hogwarts?",
    answer: "Severus Snape",
    tags: ["#harrypotter", "#ronweasley"],
    isBookmarked: false
  },
  {
    question: "What is the name of the dark wizard who killed Harry Potter's parents and tried to kill him as a baby?",
    answer: "Lord Voldemort (Tom Riddle)",
    tags: ["#harrypotter", "#ronweasley"],
    isBookmarked: false
  },
  {
    question: "What type of creature is Dobby?",
    answer: "House Elf",
    tags: ["#harrypotter", "#ronweasley"],
    isBookmarked: false
  },
  {
    question:
      "What magical object allows the Marauders to create a map of Hogwarts that shows its layout and the location of people within it?",
    answer: "The Marauder's Map",
    tags: ["#harrypotter", "#ronweasley"],
    isBookmarked: false
  }
]

if (!localStorage.getItem("qsAndAs")) {
  localStorage.setItem("qsAndAs", JSON.stringify(qsAndAs))
}