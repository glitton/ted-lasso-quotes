// Ted Lasso API from https://tedlassoquotes.com/

const url = "https://tedlassoquotes.com/v1/quote";

const btn = document.querySelector(".btn");
const quoteResult = document.querySelector(".quote-result");
const quoteAuthor = document.querySelector(".quote-author");
const img = document.querySelector(".author-img");

btn.addEventListener("click", () => {
  fetchTedLassoQuote();
});

const fetchTedLassoQuote = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  quoteResult.textContent = data.quote;
  quoteAuthor.textContent = data.author;
  img.src = data.profile_img;
};
