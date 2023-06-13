// Ted Lasso API from https://tedlassoquotes.com

const url = "https://tedlassoquotes.com/v1/quote";

const btn = document.querySelector(".btn");
const quoteResult = document.querySelector(".quote-result");
const quoteAuthor = document.querySelector(".quote-author");
const img = document.querySelector(".author-img");

btn.addEventListener("click", () => {
  fetchTedLassoQuote();
});

const fetchTedLassoQuote = async () => {
  quoteResult.textContent = "Loading ...";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("there was an error");
    }
    const data = await response.json();
    // console.log(data);
    quoteResult.textContent = data.quote;
    quoteAuthor.textContent = data.author;
    img.src = data.profile_img;
  } catch (error) {
    quoteResult.textContent = "There was an error loading the quote.";
  }
};

fetchTedLassoQuote();
