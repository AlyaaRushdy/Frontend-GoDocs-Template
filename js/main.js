const dir = "./images/icons/";
const topics = document.getElementsByClassName("topics")[0];
const faq = document.querySelector(".faq");
const cardIcons = [
  "sliders.svg",
  "credit-card.svg",
  "box.svg",
  "screwdriver-wrench.svg",
];
const topicsHeadingsContent = [
  "Basic Startup",
  "Account Bill",
  "Our Features",
  "Theme Facility",
];
const topicsParagraphsContent = [
  "Cras at dolor eget urna varius faucibus tempus in elit dolor sit amet.",
  "Cras at dolor eget urna varius faucibus tempus in elit dolor sit amet.",
  "Cras at dolor eget urna varius faucibus tempus in elit dolor sit amet.",
  "Cras at dolor eget urna varius faucibus tempus in elit dolor sit amet.",
];
const faqHeadingContent = [
  "Will updates also be free?",
  "Discounts for students and Non Profit Organizations?",
  "What is a product key?",
  "Is there any documentation and support?",
  "Any refunds?",
  "I need something unique, Can you make it?",
];
const faqparagraphContent = [
  "Will updates also be free? link ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus. mollitia delectus ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus. mollitia delectus ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus link ut ab quibusdam.",
  "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus link ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum?",
];
const navMenu = document.getElementById("navMenu");
const navButton = document.getElementsByClassName("navbar__button")[0];
let allCards = "";

for (let i = 0; i < topicsHeadingsContent.length; i++) {
  let card = document.createElement("a");
  card.setAttribute("href", "#");
  card.classList.add("card");

  card.innerHTML += `<img src="${
    dir + cardIcons[i]
  }" alt="icon" class="card__icon" >`;
  card.innerHTML += `<h3 class="capitalize color-textBlack">${topicsHeadingsContent[i]}</h3>`;
  card.innerHTML += `<p class="color-textGrey"> ${topicsParagraphsContent[i]} </p>`;

  allCards += card.outerHTML;
}
topics.innerHTML = allCards;

allCards = "";
for (let i = 0; i < faqHeadingContent.length; i++) {
  let card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML += `<h3 class="capitalize color-textBlack">${faqHeadingContent[i]}</h3>`;
  card.innerHTML += `<p class="color-textGrey"> ${faqparagraphContent[i]} </p>`;

  allCards += card.outerHTML;
}
faq.innerHTML = allCards;

// menu toggler
if (window.visualViewport.width <= 991) {
  window.addEventListener("click", (event) => {
    if (event.target === navButton || event.target === navButton.children[0]) {
      navMenu.classList.toggle("verticle-menu");
    } else if (navMenu.classList.contains("verticle-menu")) {
      navMenu.classList.remove("verticle-menu");
    }
  });
}
