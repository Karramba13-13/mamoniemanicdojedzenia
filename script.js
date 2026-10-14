
/* Mamo, nie ma nic do jedzenia!
   Generator działa lokalnie. Nie korzysta z AI ani z zewnętrznego API.
*/

const $ = (selector) => document.querySelector(selector);

const ingredientGroups = {
  "🥕 Warzywa": [
    "ziemniaki", "bataty", "marchew", "cebula", "czosnek",
    "czerwona cebula", "por", "brokuł", "kalafior", "cukinia",
    "bakłażan", "papryka", "pomidor", "pomidorki koktajlowe",
    "ogórek", "ogórek kiszony", "sałata", "szpinak", "jarmuż",
    "kapusta", "kapusta kiszona", "brukselka", "buraki",
    "rzodkiewka", "seler", "pietruszka korzeń", "natka pietruszki",
    "szczypiorek", "kukurydza", "groszek", "fasolka szparagowa",
    "pieczarki", "grzyby", "dynia", "rzepa", "szparagi"
  ],
  "🍎 Owoce": [
    "jabłko", "gruszka", "banan", "truskawki", "maliny",
    "borówki", "wiśnie", "śliwki", "brzoskwinia", "ananas",
    "mango", "awokado", "cytryna", "limonka", "pomarańcza",
    "mandarynka", "grejpfrut", "winogrona", "daktyle", "rodzynki"
  ],
  "🥩 Mięso i ryby": [
    "pierś z kurczaka", "udka z kurczaka", "mięso mielone",
    "wołowina", "wieprzowina", "schab", "boczek", "kiełbasa",
    "szynka", "indyk", "krewetki", "łosoś", "tuńczyk",
    "dorsz", "makrela", "sardynki", "filet rybny", "wędzony łosoś"
  ],
  "🥛 Nabiał i jajka": [
    "jajka", "mleko", "masło", "śmietana", "jogurt naturalny",
    "jogurt grecki", "twaróg", "serek śmietankowy", "mozzarella",
    "feta", "parmezan", "ser żółty", "ser pleśniowy", "ricotta",
    "mascarpone", "kefir", "maślanka", "mleko kokosowe"
  ],
  "🍞 Pieczywo i produkty zbożowe": [
    "makaron", "spaghetti", "ryż", "ryż brązowy", "kasza gryczana",
    "kasza jaglana", "kasza jęczmienna", "kuskus", "bulgur",
    "płatki owsiane", "mąka pszenna", "mąka pełnoziarnista",
    "tortilla", "chleb", "bułki", "bułka tarta", "pita",
    "makaron ryżowy", "makaron pełnoziarnisty", "płatki kukurydziane"
  ],
  "🥫 Produkty w puszkach i strączki": [
    "ciecierzyca", "czerwona fasola", "biała fasola", "soczewica",
    "groszek konserwowy", "kukurydza konserwowa", "pomidory w puszce",
    "passata pomidorowa", "koncentrat pomidorowy", "oliwki",
    "ogórki konserwowe", "kapary", "tofu", "tempeh"
  ],
  "🥜 Orzechy i dodatki": [
    "orzechy włoskie", "migdały", "orzechy nerkowca", "orzeszki ziemne",
    "pestki dyni", "słonecznik", "sezam", "siemię lniane",
    "nasiona chia", "wiórki kokosowe", "miód", "masło orzechowe",
    "dżem", "czekolada gorzka", "kakao", "cukier", "cukier puder"
  ],
  "🧂 Przyprawy, sosy i pozostałe": [
    "oliwa", "olej", "ocet", "sos sojowy", "musztarda",
    "majonez", "ketchup", "pesto", "curry", "papryka słodka",
    "papryka ostra", "oregano", "bazylia", "tymianek", "rozmaryn",
    "majeranek", "cynamon", "imbir", "chili", "pieprz",
    "sól", "bulion warzywny", "bulion drobiowy", "drożdże",
    "proszek do pieczenia", "wanilia"
  ]
};

// Każdy szablon ma 10 wariantów, co daje 100 gotowych przepisów.
// Warianty są osobnymi daniami, a nie losowymi nazwami bez receptury.
const recipeTemplates = [
  {
    prefix: "Makaron z",
    category: "Makaron",
    meal: "lunch",
    cuisine: "italian",
    time: 20,
    base: ["200 g makaronu", "1 łyżka oliwy", "1 ząbek czosnku", "sól i pieprz"],
    variants: [
      ["pomidorami", "2 pomidory", "bazylia", "italian", "vegetarian"],
      ["pieczarkami", "200 g pieczarek", "2 łyżki śmietany", "italian", "vegetarian"],
      ["szpinakiem i fetą", "2 garście szpinaku", "80 g fety", "mediterranean", "vegetarian"],
      ["kurczakiem", "200 g kurczaka", "100 ml śmietany", "italian", "meat"],
      ["tuńczykiem", "1 puszka tuńczyka", "200 g pomidorów w puszce", "mediterranean", "fish"],
      ["cukinią", "1 mała cukinia", "30 g parmezanu", "italian", "vegetarian"],
      ["brokułem", "1 mały brokuł", "50 g sera żółtego", "international", "vegetarian"],
      ["pesto", "2 łyżki pesto", "100 g pomidorków koktajlowych", "italian", "vegetarian"],
      ["krewetkami", "150 g krewetek", "1/2 cytryny", "mediterranean", "fish"],
      ["soczewicą", "150 g ugotowanej soczewicy", "200 g passaty", "international", "vegan"]
    ],
    steps: [
      "Ugotuj makaron zgodnie z instrukcją na opakowaniu. Zachowaj kilka łyżek wody z gotowania.",
      "Przygotuj główny dodatek i podsmaż go na oliwie z czosnkiem. Jeśli używasz mięsa lub owoców morza, smaż do pełnego ugotowania.",
      "Dodaj pozostałe składniki wariantu i dopraw solą oraz pieprzem.",
      "Wymieszaj z makaronem. W razie potrzeby dodaj odrobinę wody z gotowania i podawaj na gorąco."
    ]
  },
  {
    prefix: "Ryż z",
    category: "Danie z ryżem",
    meal: "lunch",
    cuisine: "asian",
    time: 25,
    base: ["150 g ryżu", "1 łyżka oleju", "1 mała cebula", "sól i pieprz"],
    variants: [
      ["warzywami", "1 marchewka", "1/2 papryki", "asian", "vegan"],
      ["kurczakiem", "200 g kurczaka", "2 łyżki sosu sojowego", "asian", "meat"],
      ["jajkiem", "2 jajka", "100 g groszku", "asian", "vegetarian"],
      ["ciecierzycą", "150 g ciecierzycy", "1 łyżeczka curry", "international", "vegan"],
      ["łososiem", "150 g łososia", "1/2 cytryny", "asian", "fish"],
      ["pieczarkami", "200 g pieczarek", "1 łyżka sosu sojowego", "asian", "vegan"],
      ["tofu", "180 g tofu", "2 łyżki sosu sojowego", "asian", "vegan"],
      ["wołowiną", "180 g wołowiny", "1/2 papryki", "asian", "meat"],
      ["krewetkami", "150 g krewetek", "1 ząbek czosnku", "asian", "fish"],
      ["fasolą i pomidorami", "150 g czerwonej fasoli", "150 g pomidorów", "international", "vegan"]
    ],
    steps: [
      "Ugotuj ryż zgodnie z instrukcją na opakowaniu.",
      "Pokrój dodatek na niewielkie kawałki. Na patelni rozgrzej olej i podsmaż cebulę.",
      "Dodaj składnik główny i smaż do miękkości. Mięso i ryby muszą być całkowicie ugotowane.",
      "Dodaj ryż, przyprawy i pozostałe składniki. Wymieszaj i podgrzewaj przez 2–3 minuty."
    ]
  },
  {
    prefix: "Sałatka z",
    category: "Sałatka",
    meal: "dinner",
    cuisine: "mediterranean",
    time: 15,
    base: ["2 garście sałaty", "1 łyżka oliwy", "1 łyżeczka soku z cytryny", "sól i pieprz"],
    variants: [
      ["pomidorami i ogórkiem", "1 pomidor", "1/2 ogórka", "mediterranean", "vegan"],
      ["fetą i oliwkami", "80 g fety", "8 oliwek", "mediterranean", "vegetarian"],
      ["kurczakiem", "150 g usmażonego kurczaka", "1 pomidor", "international", "meat"],
      ["tuńczykiem", "1 puszka tuńczyka", "1/2 czerwonej cebuli", "mediterranean", "fish"],
      ["ciecierzycą", "150 g ciecierzycy", "1/2 papryki", "mediterranean", "vegan"],
      ["jajkiem", "2 jajka ugotowane na twardo", "1/2 ogórka", "international", "vegetarian"],
      ["awokado", "1 awokado", "1 pomidor", "international", "vegan"],
      ["gruszką i orzechami", "1 gruszka", "30 g orzechów włoskich", "international", "vegan"],
      ["mozzarellą", "100 g mozzarelli", "150 g pomidorków", "italian", "vegetarian"],
      ["łososiem", "120 g pieczonego łososia", "1/2 ogórka", "mediterranean", "fish"]
    ],
    steps: [
      "Umyj i osusz sałatę oraz wszystkie warzywa i owoce.",
      "Pokrój składniki na kawałki. Jeśli wariant zawiera jajka, mięso lub rybę, przygotuj je wcześniej.",
      "Wymieszaj oliwę z sokiem z cytryny, solą i pieprzem.",
      "Połącz składniki w misce i polej dressingiem tuż przed podaniem."
    ]
  },
  {
    prefix: "Zupa z",
    category: "Zupa",
    meal: "soup",
    cuisine: "polish",
    time: 35,
    base: ["750 ml bulionu warzywnego", "1 mała cebula", "1 łyżka oliwy", "sól i pieprz"],
    variants: [
      ["pomidorów", "300 g passaty", "1 marchewka", "polish", "vegan"],
      ["brokułów", "1 brokuł", "1 ziemniak", "international", "vegan"],
      ["dyni", "400 g dyni", "100 ml mleka kokosowego", "international", "vegan"],
      ["pieczarek", "250 g pieczarek", "100 ml śmietany", "polish", "vegetarian"],
      ["soczewicy", "150 g czerwonej soczewicy", "1 łyżeczka curry", "international", "vegan"],
      ["ziemniaków", "3 ziemniaki", "1 marchewka", "polish", "vegan"],
      ["kalafiora", "1/2 kalafiora", "1 ziemniak", "polish", "vegan"],
      ["warzyw", "1 marchewka", "150 g mieszanki warzyw", "polish", "vegan"],
      ["ciecierzycy", "150 g ciecierzycy", "200 g pomidorów", "mediterranean", "vegan"],
      ["kukurydzy", "250 g kukurydzy", "100 ml mleka kokosowego", "international", "vegetarian"]
    ],
    steps: [
      "Pokrój cebulę i warzywa. Podsmaż cebulę przez 2–3 minuty w garnku.",
      "Dodaj główny składnik i bulion. Doprowadź do wrzenia.",
      "Gotuj na małym ogniu, aż warzywa będą miękkie, zwykle 15–25 minut.",
      "Dopraw do smaku. Możesz zostawić zupę z kawałkami warzyw lub zmiksować ją na krem."
    ]
  },
  {
    prefix: "Tortilla z",
    category: "Wrap",
    meal: "lunch",
    cuisine: "mexican",
    time: 20,
    base: ["2 placki tortilli", "2 łyżki jogurtu naturalnego lub sosu", "garść sałaty", "pieprz"],
    variants: [
      ["kurczakiem", "150 g kurczaka", "1/2 papryki", "mexican", "meat"],
      ["fasolą i kukurydzą", "100 g czerwonej fasoli", "80 g kukurydzy", "mexican", "vegan"],
      ["jajecznicą", "2 jajka", "30 g sera", "international", "vegetarian"],
      ["tuńczykiem", "1/2 puszki tuńczyka", "1/2 ogórka", "international", "fish"],
      ["pieczarkami", "150 g pieczarek", "40 g sera", "international", "vegetarian"],
      ["tofu", "150 g tofu", "1/2 papryki", "asian", "vegan"],
      ["awokado", "1 awokado", "1 pomidor", "mexican", "vegan"],
      ["wołowiną", "150 g wołowiny", "80 g czerwonej fasoli", "mexican", "meat"],
      ["fetą i warzywami", "60 g fety", "1 pomidor", "mediterranean", "vegetarian"],
      ["ciecierzycą", "150 g ciecierzycy", "1/2 papryki", "mediterranean", "vegan"]
    ],
    steps: [
      "Przygotuj wybrany farsz: pokrój składniki, a mięso lub jajka usmaż do pełnego przygotowania.",
      "Dopraw farsz solą, pieprzem i ulubionymi przyprawami.",
      "Podgrzej tortille przez kilkanaście sekund na suchej patelni.",
      "Nałóż sałatę, farsz i sos. Zawiń boki, a następnie zwiń tortillę w rulon."
    ]
  },
  {
    prefix: "Pieczone warzywa z",
    category: "Danie z piekarnika",
    meal: "lunch",
    cuisine: "mediterranean",
    time: 40,
    base: ["1 cukinia", "1 papryka", "1 cebula", "1 łyżka oliwy", "oregano, sól i pieprz"],
    variants: [
      ["fetą", "100 g fety", "mediterranean", "vegetarian"],
      ["ciecierzycą", "150 g ciecierzycy", "mediterranean", "vegan"],
      ["kurczakiem", "200 g kurczaka", "international", "meat"],
      ["mozzarellą", "100 g mozzarelli", "italian", "vegetarian"],
      ["tofu", "180 g tofu", "international", "vegan"],
      ["ziemniakami", "2 ziemniaki", "polish", "vegan"],
      ["bakłażanem", "1 mały bakłażan", "mediterranean", "vegan"],
      ["pieczarkami", "200 g pieczarek", "international", "vegan"],
      ["łososiem", "150 g łososia", "mediterranean", "fish"],
      ["białą fasolą", "150 g białej fasoli", "international", "vegan"]
    ],
    steps: [
      "Rozgrzej piekarnik do 200°C. Przygotuj blachę wyłożoną papierem do pieczenia.",
      "Pokrój warzywa i składnik dodatkowy na podobnej wielkości kawałki.",
      "Wymieszaj wszystko z oliwą, oregano, solą i pieprzem.",
      "Piecz około 25–35 minut, aż warzywa zmiękną i lekko się zarumienią. Mięso i ryby muszą być całkowicie upieczone."
    ]
  },
  {
    prefix: "Omlet z",
    category: "Śniadanie",
    meal: "breakfast",
    cuisine: "international",
    time: 12,
    base: ["3 jajka", "1 łyżeczka masła lub oleju", "sól i pieprz"],
    variants: [
      ["serem", "40 g sera żółtego", "international", "vegetarian"],
      ["pomidorami", "1 pomidor", "international", "vegetarian"],
      ["szpinakiem", "1 garść szpinaku", "international", "vegetarian"],
      ["pieczarkami", "100 g pieczarek", "polish", "vegetarian"],
      ["szynką", "50 g szynki", "polish", "meat"],
      ["fetą", "50 g fety", "mediterranean", "vegetarian"],
      ["papryką", "1/2 papryki", "international", "vegetarian"],
      ["brokułem", "100 g ugotowanego brokułu", "international", "vegetarian"],
      ["łososiem", "50 g wędzonego łososia", "mediterranean", "fish"],
      ["cebulą i szczypiorkiem", "1/2 cebuli", "polish", "vegetarian"]
    ],
    steps: [
      "Przygotuj i drobno pokrój wybrany dodatek.",
      "Roztrzep jajka z solą i pieprzem. Rozgrzej masło lub olej na patelni.",
      "Jeśli dodatek wymaga smażenia, podsmaż go krótko, a następnie wlej jajka.",
      "Smaż na małym ogniu, aż masa się zetnie. Złóż omlet na pół i podawaj od razu."
    ]
  },
  {
    prefix: "Curry z",
    category: "Danie jednogarnkowe",
    meal: "lunch",
    cuisine: "asian",
    time: 30,
    base: ["200 ml mleka kokosowego", "200 g pomidorów w puszce", "1 łyżeczka curry", "1 mała cebula"],
    variants: [
      ["ciecierzycą", "150 g ciecierzycy", "asian", "vegan"],
      ["kurczakiem", "200 g kurczaka", "asian", "meat"],
      ["soczewicą", "150 g czerwonej soczewicy", "asian", "vegan"],
      ["kalafiorem", "250 g kalafiora", "asian", "vegan"],
      ["tofu", "180 g tofu", "asian", "vegan"],
      ["krewetkami", "150 g krewetek", "asian", "fish"],
      ["batatami", "1 duży batat", "international", "vegan"],
      ["szpinakiem i groszkiem", "100 g szpinaku", "asian", "vegan"],
      ["wołowiną", "180 g wołowiny", "asian", "meat"],
      ["warzywami", "250 g mieszanki warzyw", "international", "vegan"]
    ],
    steps: [
      "Posiekaj cebulę i pokrój główny składnik na niewielkie kawałki.",
      "Podsmaż cebulę w garnku, dodaj curry i wymieszaj.",
      "Dodaj główny składnik, pomidory oraz mleko kokosowe. Gotuj do miękkości; mięso i ryby muszą być całkowicie ugotowane.",
      "Dopraw do smaku i podawaj samodzielnie lub z ryżem."
    ]
  },
  {
    prefix: "Kanapki z",
    category: "Kanapka",
    meal: "dinner",
    cuisine: "international",
    time: 10,
    base: ["2–4 kromki chleba", "garść sałaty", "pieprz"],
    variants: [
      ["jajkiem", "2 jajka ugotowane na twardo", "international", "vegetarian"],
      ["awokado", "1 awokado", "international", "vegan"],
      ["twarożkiem", "100 g twarogu", "polish", "vegetarian"],
      ["tuńczykiem", "1/2 puszki tuńczyka", "international", "fish"],
      ["szynką i serem", "2 plastry szynki", "polish", "meat"],
      ["hummusem i warzywami", "3 łyżki hummusu", "mediterranean", "vegan"],
      ["łososiem", "60 g wędzonego łososia", "mediterranean", "fish"],
      ["mozzarellą i pomidorem", "60 g mozzarelli", "italian", "vegetarian"],
      ["masłem orzechowym i bananem", "1 łyżka masła orzechowego", "international", "vegan"],
      ["pastą z fasoli", "100 g białej fasoli", "international", "vegan"]
    ],
    steps: [
      "Przygotuj pieczywo. Możesz je lekko podpiec na suchej patelni.",
      "Umyj i pokrój dodatki. Jeśli przepis zawiera jajka, ugotuj je wcześniej.",
      "Rozsmaruj pastę lub ułóż składniki na pieczywie.",
      "Dopraw pieprzem i podawaj od razu. Słodkie warianty możesz uzupełnić owocami."
    ]
  },
  {
    prefix: "Placuszki",
    category: "Na słodko",
    meal: "sweet",
    cuisine: "international",
    time: 20,
    base: ["1 jajko", "4 łyżki mąki", "3 łyżki mleka lub napoju roślinnego", "1/2 łyżeczki proszku do pieczenia"],
    variants: [
      ["bananowe", "1 dojrzały banan", "international", "vegetarian"],
      ["jabłkowe", "1 jabłko", "polish", "vegetarian"],
      ["jogurtowe", "100 g jogurtu naturalnego", "international", "vegetarian"],
      ["owsiane", "40 g płatków owsianych", "international", "vegetarian"],
      ["dyniowe", "100 g puree z dyni", "international", "vegetarian"],
      ["z borówkami", "80 g borówek", "international", "vegetarian"],
      ["kokosowe", "30 g wiórków kokosowych", "international", "vegetarian"],
      ["z kakao", "1 łyżka kakao", "international", "vegetarian"],
      ["z twarogiem", "100 g twarogu", "polish", "vegetarian"],
      ["marchewkowe", "1 mała starta marchewka", "international", "vegetarian"]
    ],
    steps: [
      "Przygotuj składnik, od którego pochodzi nazwa placuszków: zetrzyj owoc lub rozgnieć go widelcem.",
      "Wymieszaj jajko, mąkę, mleko i proszek do pieczenia. Dodaj wybrany składnik.",
      "Rozgrzej lekko natłuszczoną patelnię. Nakładaj małe porcje ciasta.",
      "Smaż na średnio małym ogniu po około 2 minuty z każdej strony. Podawaj po lekkim przestudzeniu."
    ]
  }
];

const recipes = [];

recipeTemplates.forEach((template, templateIndex) => {
  template.variants.forEach((variant, variantIndex) => {
    const isLongVariant = variant.length === 5;
    const [name, extraIngredient, third, fourth, fifth] = variant;

    const cuisine = isLongVariant ? fourth : third;
    const diet = isLongVariant ? fifth : fourth;
    const ingredients = [...template.base];

    ingredients.push(extraIngredient);

    if (isLongVariant) {
      ingredients.push(third);
    } else if (templateIndex === 5) {
      ingredients.push("200 g ziemniaków lub ryżu do podania");
    } else if (templateIndex === 7) {
      ingredients.push("ryż do podania (opcjonalnie)");
    } else if (templateIndex === 8) {
      ingredients.push("opcjonalnie: pomidor lub ogórek");
    } else if (templateIndex === 9) {
      ingredients.push("olej do smażenia", "opcjonalnie: owoce do podania");
    }

    const title = templateIndex === 9
      ? `${template.prefix} ${name}`
      : `${template.prefix} ${name}`;

    recipes.push({
      id: `recipe-${templateIndex}-${variantIndex}`,
      title: title.charAt(0).toLocaleUpperCase("pl") + title.slice(1),
      emoji: ["🍝", "🍚", "🥗", "🍲", "🌯", "🥘", "🍳", "🍛", "🥪", "🥞"][templateIndex],
      category: template.category,
      meal: template.meal,
      cuisine,
      diet,
      time: template.time + (variantIndex % 3) * 3,
      servings: 2,
      cost: null,
      ingredients,
      steps: [...template.steps],
      description: `Prosty przepis na ${title.toLocaleLowerCase("pl")}. Sprawdź składniki i przygotuj smaczny posiłek bez długiego planowania.`,
      tags: [name, extraIngredient, template.category].map((x) => String(x).toLocaleLowerCase("pl"))
    });
  });
});

const state = {
  selectedIngredients: new Set(),
  currentRecipe: null
};

function normalize(value) {
  return String(value ?? "")
    .toLocaleLowerCase("pl")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function safeText(value) {
  return String(value ?? "");
}

function readStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    showToast("Nie udało się zapisać danych w tej przeglądarce.");
  }
}

let toastTimer;

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function renderIngredientCategories(search = "") {
  const root = $("#ingredient-categories");
  if (!root) return;

  root.replaceChildren();
  const query = normalize(search);
  let visibleCount = 0;

  Object.entries(ingredientGroups).forEach(([category, ingredients], index) => {
    const visible = ingredients.filter((ingredient) =>
      normalize(ingredient).includes(query)
    );

    if (!visible.length) return;
    visibleCount += visible.length;

    const details = document.createElement("details");
    details.className = "ingredient-category";
    details.open = Boolean(query) || index === 0;

    const summary = document.createElement("summary");
    summary.textContent = `${category} (${visible.length})`;

    const options = document.createElement("div");
    options.className = "ingredient-options";

    visible.forEach((ingredient) => {
      const label = document.createElement("label");
      label.className = "ingredient-option";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = ingredient;
      checkbox.checked = state.selectedIngredients.has(ingredient);

      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          state.selectedIngredients.add(ingredient);
        } else {
          state.selectedIngredients.delete(ingredient);
        }
        renderSelectedIngredients();
      });

      const text = document.createElement("span");
      text.textContent = ingredient;

      label.append(checkbox, text);
      options.appendChild(label);
    });

    details.append(summary, options);
    root.appendChild(details);
  });

  if (!visibleCount) {
    const message = document.createElement("p");
    message.className = "ingredient-empty";
    message.textContent = "Nie znaleziono składnika.";
    root.appendChild(message);
  }
}

function renderSelectedIngredients() {
  const root = $("#selected-ingredients");
  if (!root) return;

  root.replaceChildren();

  if (!state.selectedIngredients.size) {
    const empty = document.createElement("span");
    empty.className = "muted";
    empty.textContent = "Nie wybrano jeszcze składników.";
    root.appendChild(empty);
    return;
  }

  state.selectedIngredients.forEach((ingredient) => {
    const tag = document.createElement("span");
    tag.className = "selected-tag";

    const text = document.createElement("span");
    text.textContent = ingredient;

    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "×";
    remove.setAttribute("aria-label", `Usuń składnik ${ingredient}`);

    remove.addEventListener("click", () => {
      state.selectedIngredients.delete(ingredient);
      renderIngredientCategories($("#ingredient-search").value);
      renderSelectedIngredients();
    });

    tag.append(text, remove);
    root.appendChild(tag);
  });
}

function selectedDietMatches(recipe, diet) {
  if (diet === "all") return true;
  if (diet === "vegetarian") return ["vegetarian", "vegan"].includes(recipe.diet);
  if (diet === "vegan") return recipe.diet === "vegan";
  if (diet === "meat") return recipe.diet === "meat";
  if (diet === "fish") return recipe.diet === "fish";
  return true;
}

function getMatchingRecipes() {
  const meal = $("#meal-type").value;
  const cuisine = $("#cuisine").value;
  const diet = $("#diet").value;
  const timeValue = $("#time").value;
  const maxTime = timeValue === "any" ? Infinity : Number(timeValue);
  const selected = [...state.selectedIngredients].map(normalize);

  return recipes.filter((recipe) => {
    if (meal !== "all" && recipe.meal !== meal) return false;
    if (cuisine !== "all" && cuisine !== "international" && recipe.cuisine !== cuisine) return false;
    if (cuisine === "international" && recipe.cuisine === "polish") {
      // Kuchnia świata obejmuje również przepisy międzynarodowe.
      return false;
    }
    if (!selectedDietMatches(recipe, diet)) return false;
    if (recipe.time > maxTime) return false;

    if (selected.length) {
      const recipeText = normalize([
        recipe.title,
        ...recipe.ingredients,
        ...recipe.tags
      ].join(" "));

      // Przepis musi pasować do co najmniej jednego zaznaczonego składnika.
      const matches = selected.some((ingredient) => recipeText.includes(ingredient));
      if (!matches) return false;
    }

    return true;
  });
}

function renderRecipe(recipe) {
  state.currentRecipe = recipe;

  $("#empty-result").hidden = true;
  $("#recipe-result").hidden = false;

  $("#result-title").textContent = recipe.title;
  $("#result-description").textContent = recipe.description;
  $("#result-category").textContent = recipe.category;
  $("#result-time").textContent = `${recipe.time} min`;
  $("#result-cost").textContent = "Zwykłe składniki";
  $("#result-servings").textContent = `${recipe.servings} porc.`;
  $("#result-message").textContent = "";

  const ingredients = $("#result-ingredients");
  ingredients.replaceChildren();

  recipe.ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    ingredients.appendChild(li);
  });

  const steps = $("#result-steps");
  steps.replaceChildren();

  recipe.steps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    steps.appendChild(li);
  });

  $("#losuj").scrollIntoView({ behavior: "smooth", block: "start" });
}

function generateRecipe() {
  const matching = getMatchingRecipes();

  if (!matching.length) {
    showToast("Nie znaleziono pasującego dania. Zmień preferencje lub wybierz inne składniki.");
    return;
  }

  let choices = matching;

  // Jeśli są wybrane składniki, najpierw promujemy przepisy pasujące
  // do największej liczby z nich.
  if (state.selectedIngredients.size) {
    const selected = [...state.selectedIngredients].map(normalize);

    const score = (recipe) => {
      const text = normalize([
        recipe.title,
        ...recipe.ingredients,
        ...recipe.tags
      ].join(" "));
      return selected.filter((item) => text.includes(item)).length;
    };

    const highest = Math.max(...matching.map(score));
    choices = matching.filter((recipe) => score(recipe) === highest);
  }

  const recipe = choices[Math.floor(Math.random() * choices.length)];
  renderRecipe(recipe);
}

function renderCards(query = "") {
  const grid = $("#recipe-grid");
  if (!grid) return;

  const term = normalize(query);
  const filtered = recipes.filter((recipe) =>
    normalize([
      recipe.title,
      recipe.description,
      recipe.category,
      ...recipe.ingredients
    ].join(" ")).includes(term)
  );

  grid.replaceChildren();
  $("#no-recipes").hidden = filtered.length > 0;

  filtered.forEach((recipe) => {
    const card = document.createElement("article");
    card.className = "recipe-card";

    const top = document.createElement("div");
    top.className = "card-top";

    const emoji = document.createElement("span");
    emoji.className = "card-emoji";
    emoji.textContent = recipe.emoji;

    const time = document.createElement("span");
    time.className = "card-time";
    time.textContent = `⏱ ${recipe.time} min`;
    top.append(emoji, time);

    const title = document.createElement("h3");
    title.textContent = recipe.title;

    const description = document.createElement("p");
    description.textContent = recipe.description;

    const bottom = document.createElement("div");
    bottom.className = "card-bottom";

    const category = document.createElement("span");
    category.className = "card-cost";
    category.textContent = recipe.category;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "card-open";
    button.textContent = "Zobacz przepis →";
    button.addEventListener("click", () => renderRecipe(recipe));

    bottom.append(category, button);
    card.append(top, title, description, bottom);
    grid.appendChild(card);
  });
}

function getPlan() {
  const value = readStorage("mamo-meal-plan-v2", []);
  return Array.isArray(value) ? value : [];
}

function savePlan(plan) {
  writeStorage("mamo-meal-plan-v2", plan);
  renderPlan();
}

function renderPlan() {
  const root = $("#meal-plan");
  if (!root) return;

  const plan = getPlan();
  const days = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"];
  root.replaceChildren();

  days.forEach((day, index) => {
    const entry = plan[index];

    const row = document.createElement("div");
    row.className = "meal-day";

    const label = document.createElement("span");
    label.className = "day-label";
    label.textContent = day;

    const title = document.createElement("span");
    title.className = "day-meal";
    title.textContent = entry ? entry.title : "Jeszcze nic nie zaplanowano";

    const action = document.createElement("button");
    action.type = "button";
    action.className = "day-remove";
    action.textContent = entry ? "×" : "+";
    action.setAttribute("aria-label", entry ? `Usuń posiłek: ${day}` : `Dodaj posiłek: ${day}`);

    action.addEventListener("click", () => {
      const updated = getPlan();

      if (updated[index]) {
        updated[index] = null;
        savePlan(updated);
        showToast("Usunięto danie z planu.");
      } else if (state.currentRecipe) {
        updated[index] = {
          id: state.currentRecipe.id,
          title: state.currentRecipe.title
        };
        savePlan(updated);
        showToast("Dodano danie do planu.");
      } else {
        showToast("Najpierw otwórz przepis.");
      }
    });

    row.append(label, title, action);
    root.appendChild(row);
  });
}

function addCurrentRecipeToPlan() {
  if (!state.currentRecipe) {
    showToast("Najpierw wybierz danie.");
    return;
  }

  const plan = getPlan();
  const index = plan.findIndex((entry) => !entry);

  if (index === -1 && plan.length >= 5) {
    showToast("Plan jest pełny. Usuń danie, aby zrobić miejsce.");
    return;
  }

  const target = index === -1 ? plan.length : index;
  plan[target] = {
    id: state.currentRecipe.id,
    title: state.currentRecipe.title
  };

  savePlan(plan);
  showToast("Dodano danie do planu na 5 dni.");
}

function getShopping() {
  const value = readStorage("mamo-shopping-list-v2", []);
  return Array.isArray(value) ? value : [];
}

function saveShopping(items) {
  writeStorage("mamo-shopping-list-v2", items);
  renderShopping();
}

function addShoppingItem(name) {
  const text = String(name ?? "").trim();
  if (!text) return;

  const items = getShopping();

  if (items.some((item) => normalize(item.name) === normalize(text))) {
    showToast("Ten produkt jest już na liście.");
    return;
  }

  items.push({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name: text,
    checked: false
  });

  saveShopping(items);
}

function addRecipeIngredientsToShopping() {
  const recipe = state.currentRecipe;
  if (!recipe) {
    showToast("Najpierw wybierz danie.");
    return;
  }

  const items = getShopping();
  let added = 0;

  recipe.ingredients.forEach((ingredient) => {
    if (!items.some((item) => normalize(item.name) === normalize(ingredient))) {
      items.push({
        id: `${Date.now()}-${added}-${Math.random().toString(36).slice(2, 6)}`,
        name: ingredient,
        checked: false
      });
      added++;
    }
  });

  saveShopping(items);
  showToast(added ? `Dodano ${added} składników do zakupów.` : "Te składniki są już na liście.");
}

function renderShopping() {
  const root = $("#shopping-list");
  if (!root) return;

  const items = getShopping();
  root.replaceChildren();
  $("#shopping-empty").hidden = items.length > 0;

  items.forEach((item) => {
    const li = document.createElement("li");
    if (item.checked) li.classList.add("checked");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = Boolean(item.checked);
    checkbox.id = `shop-${item.id}`;

    checkbox.addEventListener("change", () => {
      const updated = getShopping().map((entry) =>
        entry.id === item.id ? { ...entry, checked: checkbox.checked } : entry
      );
      saveShopping(updated);
    });

    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.textContent = item.name;

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-item";
    remove.textContent = "×";
    remove.setAttribute("aria-label", `Usuń ${item.name}`);

    remove.addEventListener("click", () => {
      saveShopping(getShopping().filter((entry) => entry.id !== item.id));
    });

    li.append(checkbox, label, remove);
    root.appendChild(li);
  });
}

// Zdarzenia formularza i przycisków
$("#generator-form").addEventListener("submit", (event) => {
  event.preventDefault();
  generateRecipe();
});

$("#ingredient-search").addEventListener("input", (event) => {
  renderIngredientCategories(event.target.value);
});

$("#clear-ingredients").addEventListener("click", () => {
  state.selectedIngredients.clear();
  renderIngredientCategories($("#ingredient-search").value);
  renderSelectedIngredients();
});

$("#another-recipe").addEventListener("click", generateRecipe);
$("#add-shopping").addEventListener("click", addRecipeIngredientsToShopping);
$("#add-plan").addEventListener("click", addCurrentRecipeToPlan);

$("#recipe-search").addEventListener("input", (event) => {
  renderCards(event.target.value);
});

$("#shopping-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const input = $("#shopping-input");
  if (!input.value.trim()) return;

  addShoppingItem(input.value);
  input.value = "";
  input.focus();
});

$("#clear-plan").addEventListener("click", () => {
  savePlan([]);
  showToast("Wyczyszczono plan posiłków.");
});

$("#clear-shopping").addEventListener("click", () => {
  saveShopping([]);
  showToast("Wyczyszczono listę zakupów.");
});

$("#copy-shopping").addEventListener("click", async () => {
  const items = getShopping();

  if (!items.length) {
    showToast("Lista zakupów jest pusta.");
    return;
  }

  const text = items
    .map((item) => `${item.checked ? "[x]" : "[ ]"} ${item.name}`)
    .join("\n");

  try {
    await navigator.clipboard.writeText(text);
    showToast("Skopiowano listę zakupów.");
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();

    const success = document.execCommand("copy");
    textarea.remove();

    showToast(success ? "Skopiowano listę zakupów." : "Nie udało się skopiować listy.");
  }
});

// Uruchomienie strony
renderIngredientCategories();
renderSelectedIngredients();
renderCards();
renderPlan();
renderShopping();

// Kontrola liczby przepisów i składników w konsoli przeglądarki.
console.info(`Załadowano ${recipes.length} przepisów.`);
console.info(
  `Załadowano ${Object.values(ingredientGroups).flat().length} składników.`
);
