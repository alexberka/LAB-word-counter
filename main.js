console.log("Connected!")
// YOU WILL MODIFY THIS FUNCTION TO GET THE PROGRAM TO WORK
const wordCounter = (value) => {
  // Type into the input and press submit, you will see the value you entered in your console
  console.log(value);

  if (value) {
    // COMPLETE THE LOGIC 
    // Divide input string into array, division point is a space character followed by a word character
    let words = value.split(/\s\S/);
    // Output length of array (= number of words in string)
    wordCount.innerHTML = `Word Count: ${words.length}`; 
  } else {
    // if the value is empty, set the error message value to "Please input text"
    error.innerHTML = "Please input text"; // UPDATE THIS
  }
}

// OPTIONAL CHALLENGE
const toggleMode = (btnText) => {
  const header = document.querySelector("h1");
  const dark = "#101010"
  const light = "#ffffff"
  if (btnText === "Dark Mode") {
    toggleButton.innerHTML = "Light Mode"
    toggleButton.classList.add("btn-outline-light");
    toggleButton.classList.remove("btn-outline-dark");
    document.body.style.background = dark;
    header.style.color = light; 
    wordCount.style.color = light;
    textarea.style.background = dark;
    textarea.style.color = light;
  } else {
    toggleButton.innerHTML = "Dark Mode"
    toggleButton.classList.add("btn-outline-dark");
    toggleButton.classList.remove("btn-outline-light");
    // document.body.style.removeProperty("background");
    document.body.style.background = light;
    header.style.removeProperty("color");
    wordCount.style.color = dark;
    textarea.style.background = light;
    textarea.style.color = dark;
  }
  // complete the function
}

// ************************************************ //
// **** DO NOT MODIFY THE CODE BELOW THIS LINE **** //
// ************************************************ //

// These are query selectors. We will focus on them later in the course
const textarea = document.querySelector("textarea");
const form = document.querySelector("form");
const error = document.querySelector("#error");
const wordCount = document.querySelector("#word-count");
const toggleButton = document.querySelector("#bg-switch");

// These are event listeners. We will focus on them later in the course
form.addEventListener("submit", (event) => {
  event.preventDefault(); // the default behavior of a form is to reload the page, we do not want that so we want to prevent that behavior
  error.innerHTML = ""; // clear out the innerHTML on submit
  wordCount.innerHTML = ""; // clear out the innerHTML on submit
  const value = textarea.value; // grab the value of the text area on submit
  wordCounter(value); // call the function and pass it the value
});

form.addEventListener("reset", () => {
  error.innerHTML = ""; // on reset, clear the innderHTML
  wordCount.innerHTML = ""; // on reset, clear the innderHTML
});

toggleButton.addEventListener("click", (event) => {
  toggleMode(event.target.innerHTML);
});
