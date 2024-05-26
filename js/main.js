const dir = "./images/icons/";
const topics = document.getElementsByClassName("topics")[0];
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
let allCards = "";

for (let i = 0; i < 4; i++) {
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
