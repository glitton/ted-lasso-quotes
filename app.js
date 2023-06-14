// Ted Lasso API from https://tedlassoquotes.com

const url = "https://tedlassoquotes.com/v1/quote";

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const author = document.querySelector(".author");
const img = document.querySelector(".author-img");

btn.addEventListener("click", () => {
  fetchTedLassoQuote();
});

const fetchTedLassoQuote = async () => {
  result.textContent = "Loading ...";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("there was an error");
    }
    const data = await response.json();
    // console.log(data);
    result.textContent = data.quote;
    author.textContent = data.author;
    img.src = data.profile_img;
  } catch (error) {
    result.textContent = "There was an error loading the quote.";
  }
};

fetchTedLassoQuote();
