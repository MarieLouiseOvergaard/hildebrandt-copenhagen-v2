const ingredients = [
  {
    name: "Aloe Vera",
    latin: "Aloe Barbadensis Leaf Juice",
    description: "Aloe Vera er en naturlig fugtkilde, fyldt med enzymer, mineraler og vitaminer, der trænger ind i hårstrået og reparerer det indefra."
  },
  {
    name: "Gojibær",
    latin: "Lycium Barbarum",
    description: "Gojibær er rige på næringsstoffer, der styrker hårstrukturen og giver fleksibilitet til dine krøllede lokker."
  },
  {
    name: "Granatæble",
    latin: "Punica Granatum",
    description: "Lægger sig som en fin hinde omkring hårstrået og beskytter mod ydre påvirkninger, samtidig med at det tilfører fugt og glans."
  },
  {
    name: "Gurkemeje",
    latin: "Curcuma Longa",
    description: "Har antibakterielle og stimulerende egenskaber, der kan hjælpe mod skæl, forbedre cirkulationen i hovedbunden og forhindre hårtab."
  },
  {
    name: "Havre",
    latin: "Coco-Betaine, Avena Sativa Kernel Extract",
    description: "Modvirker statisk elektricitet og minimerer frizz, hvilket er ideelt til krøllet hår."
  },
  {
    name: "Ingefær",
    latin: "Zingiber",
    description: "Lindrer kløe og irritation i hovedbunden, samtidig med at den stimulerer hårvækst og balancerer pH-værdien."
  },
  {
    name: "Jojoba",
    latin: "Simmondsia Chinensis Seed Wax",
    description: "Fugtgivende og blødgørende olie, der forhindrer brud på hårstråene og kan forebygge spaltede spidser. Jojobaolie er en afgørende ingrediens i vores Shampoo Bars."
  },
  {
    name: "Kokosolie",
    latin: "Cocos Nucifera Oil",
    description: "Trænger dybt ind i håret og tilfører proteiner og vitaminer, der styrker hårstråene."
  },
  {
    name: "Matcha te",
    latin: "Matcha",
    description: "Rig på klorofyl og aminosyrer, der giver håret vigtige næringsstoffer og proteiner."
  },
  {
    name: "Mandelolie",
    latin: "Almond Oil Glycereth-8 Esters",
    description: "Efterlader håret sundt, blankt og blødt."
  },
  {
    name: "Passionsfrugtolie",
    latin: "Maracuja Oil",
    description: "Afbalancerer hovedbundens naturlige olier, styrker håret og giver naturlig glans."
  },
  {
    name: "Ricinusolie",
    latin: "Ricinus Communis Seed Oil",
    description: "Kendt for sine hårvækstfremmende egenskaber og rige indhold af fedtsyrer."
  },
  {
    name: "Rosmarin",
    latin: "Rosmarinus Officinalis Leaf/Stem Oil",
    description: "Stimulerer hårvækst, giver næring til hårsækkene og fugter uden at fedte."
  },
  {
    name: "Salt fra Det Døde Hav",
    latin: "Maris Sal",
    description: "Indeholder mineraler, der styrker håret og giver fylde - og virker samtidig varme- og solbeskyttende. Salt fra Det Døde Hav findes bl.a. i vores Rich Curl Spray."
  },
  {
    name: "Salvia",
    latin: "Salvia Officinalis Leaf Extract",
    description: "Modvirker hårtab og stimulerer hurtigere hårvækst. Findes bl.a. i vores Rich Deep Drink Conditioner."
  },
  {
    name: "Sencha te",
    latin: "Sencha",
    description: "Rig på antioxidanter, vitaminer og mineraler, der styrker håret."
  },
  {
    name: "Shea Butter",
    latin: "Butyrospermum Parkii Butter",
    description: "Beskytter mod UV-stråler, bevarer fugtbalancen og tilfører håret vigtige vitaminer."
  },
  {
    name: "Sød mandelolie",
    latin: "Prunus Amygdalus Dulcis Oil",
    description: "Blødgør håret og giver naturlig glans."
  },
  {
    name: "Tetræolie",
    latin: "Melaleuca Alternifolia Leaf Oil",
    description: "Har antibakterielle egenskaber, der bekæmper skæl og svamp i hovedbunden og kan stimulere hårsækkene."
  },
  {
    name: "Æbleekstrakt",
    latin: "Procyanidin B2",
    description: "Indeholder et naturligt stof, der kan fremme hårvækst og reducere hårtab."
  }
];

const ingredientsCarousel = document.querySelector("[data-ingredients-carousel]");

if (ingredientsCarousel) {
  ingredients.forEach(({ name, latin, description }) => {
    const card = document.createElement("article");
    const heading = document.createElement("h3");
    const latinName = document.createElement("p");
    const copy = document.createElement("p");

    card.className = "blogs-ingredient-card";
    heading.textContent = name;
    latinName.className = "blogs-ingredient-latin";
    latinName.textContent = latin;
    copy.className = "blogs-ingredient-description";
    copy.textContent = description;

    card.append(heading, latinName, copy);
    ingredientsCarousel.append(card);
  });

  let dragStartX = 0;
  let dragStartScroll = 0;

  ingredientsCarousel.addEventListener("pointerdown", (event) => {
    dragStartX = event.clientX;
    dragStartScroll = ingredientsCarousel.scrollLeft;
    ingredientsCarousel.classList.add("is-dragging");
    ingredientsCarousel.setPointerCapture(event.pointerId);
  });

  ingredientsCarousel.addEventListener("pointermove", (event) => {
    if (!ingredientsCarousel.classList.contains("is-dragging")) return;
    ingredientsCarousel.scrollLeft = dragStartScroll - (event.clientX - dragStartX);
  });

  const stopDragging = (event) => {
    ingredientsCarousel.classList.remove("is-dragging");
    if (ingredientsCarousel.hasPointerCapture(event.pointerId)) {
      ingredientsCarousel.releasePointerCapture(event.pointerId);
    }
  };

  ingredientsCarousel.addEventListener("pointerup", stopDragging);
  ingredientsCarousel.addEventListener("pointercancel", stopDragging);
}
