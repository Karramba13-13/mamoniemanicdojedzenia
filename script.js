
const recipes = [
  {
    id: "pasta-tomato",
    title: "Makaron z pomidorami i czosnkiem",
    emoji: "🍝",
    category: "Makaron",
    description: "Prosty, aromatyczny makaron z sosem pomidorowym. Idealny, gdy nie masz ochoty długo stać przy kuchence.",
    time: 20,
    cost: 9,
    servings: 2,
    vegetarian: true,
    meat: false,
    ingredients: [
      "200 g makaronu",
      "1 puszka krojonych pomidorów",
      "2 ząbki czosnku",
      "1 łyżka oliwy",
      "Sól, pieprz i oregano",
      "Opcjonalnie: tarty ser"
    ],
    steps: [
      "Ugotuj makaron zgodnie z instrukcją na opakowaniu.",
      "Posiekaj czosnek i podsmaż go na oliwie przez około minutę.",
      "Dodaj pomidory, oregano, sól i pieprz. Gotuj 8–10 minut.",
      "Wymieszaj sos z makaronem. Podawaj z tartym serem."
    ],
    tags: ["makaron", "pomidor", "czosnek", "ser", "wegetariańskie"],
    icon: "🍅"
  },
  {
    id: "egg-fried-rice",
    title: "Ryż smażony z jajkiem",
    emoji: "🍳",
    category: "Szybki obiad",
    description: "Sposób na wykorzystanie ryżu z poprzedniego dnia. Możesz dorzucić warzywa, które akurat masz.",
    time: 15,
    cost: 8,
    servings: 2,
    vegetarian: true,
    meat: false,
    ingredients: [
      "300 g ugotowanego ryżu",
      "2 jajka",
      "1 marchewka",
      "2 łyżki oleju",
      "2 łyżki sosu sojowego",
      "Opcjonalnie: szczypiorek lub groszek"
    ],
    steps: [
      "Pokrój marchewkę w drobną kostkę.",
      "Rozgrzej olej na patelni i smaż marchewkę przez 3–4 minuty.",
      "Przesuń warzywa na bok, wbij jajka i mieszaj, aż się zetną.",
      "Dodaj ryż oraz sos sojowy. Smaż przez kilka minut, mieszając."
    ],
    tags: ["ryż", "jajka", "marchewka", "szybkie", "wegetariańskie"],
    icon: "🥚"
  },
  {
    id: "potato-pancakes",
    title: "Chrupiące placki ziemniaczane",
    emoji: "🥔",
    category: "Domowe klasyki",
    description: "Złociste placki z ziemniaków. Podaj je ze śmietaną, jogurtem lub ulubionym sosem.",
    time: 30,
    cost: 8,
    servings: 2,
    vegetarian: true,
    meat: false,
    ingredients: [
      "500 g ziemniaków",
      "1 mała cebula",
      "1 jajko",
      "2 łyżki mąki",
      "Sól i pieprz",
      "Olej do smażenia"
    ],
    steps: [
      "Obierz ziemniaki i cebulę, a następnie zetrzyj je na tarce.",
      "Odciśnij nadmiar płynu i wymieszaj masę z jajkiem oraz mąką.",
      "Dopraw solą i pieprzem.",
      "Nakładaj cienkie porcje na rozgrzany olej i smaż z obu stron na złoto."
    ],
    tags: ["ziemniaki", "jajka", "cebula", "mąka", "wegetariańskie"],
    icon: "🥔"
  },
  {
    id: "chicken-wrap",
    title: "Wrap z kurczakiem i warzywami",
    emoji: "🌯",
    category: "Szybki obiad",
    description: "Tortilla wypełniona kurczakiem, chrupiącymi warzywami i prostym sosem jogurtowym.",
    time: 25,
    cost: 14,
    servings: 2,
    vegetarian: false,
    meat: true,
    ingredients: [
      "2 placki tortilli",
      "250 g piersi z kurczaka",
      "1 pomidor",
      "Garść sałaty",
      "3 łyżki jogurtu naturalnego",
      "Papryka słodka, sól i pieprz"
    ],
    steps: [
      "Pokrój kurczaka w paski i dopraw przyprawami.",
      "Usmaż mięso na patelni, aż będzie całkowicie gotowe w środku.",
      "Pokrój pomidora i przygotuj sałatę.",
      "Posmaruj tortille jogurtem, dodaj składniki i ciasno zawiń."
    ],
    tags: ["kurczak", "tortilla", "pomidor", "sałata", "mięso"],
    icon: "🍗"
  },
  {
    id: "tomato-soup",
    title: "Zupa pomidorowa z ryżem",
    emoji: "🍲",
    category: "Zupa",
    description: "Znana i lubiana zupa pomidorowa. Dobra na obiad dla całej rodziny.",
    time: 30,
    cost: 9,
    servings: 4,
    vegetarian: true,
    meat: false,
    ingredients: [
      "500 ml passaty pomidorowej",
      "750 ml bulionu warzywnego",
      "100 g ryżu",
      "1 marchewka",
      "2 łyżki śmietanki lub jogurtu",
      "Sól, pieprz i bazylia"
    ],
    steps: [
      "Zagotuj bulion i dodaj startą marchewkę.",
      "Wsyp ryż i gotuj zgodnie z czasem podanym na opakowaniu.",
      "Wlej passatę, dopraw i gotuj jeszcze około 10 minut.",
      "Dodaj śmietankę lub jogurt. W razie potrzeby dopraw do smaku."
    ],
    tags: ["pomidor", "ryż", "marchewka", "zupa", "wegetariańskie"],
    icon: "🍅"
  },
  {
    id: "omelette",
    title: "Omlet z serem i szczypiorkiem",
    emoji: "🍳",
    category: "Śniadanie lub kolacja",
    description: "Ciepły, puszysty omlet. Sprawdzi się również jako szybki obiad.",
    time: 10,
    cost: 7,
    servings: 1,
    vegetarian: true,
    meat: false,
    ingredients: [
      "3 jajka",
      "30 g żółtego sera",
      "1 łyżeczka masła",
      "Szczypiorek",
      "Sól i pieprz"
    ],
    steps: [
      "Roztrzep jajka z solą i pieprzem.",
      "Rozgrzej masło na patelni i wlej jajka.",
      "Gdy spód się zetnie, posyp omlet serem.",
      "Przykryj patelnię i smaż na małym ogniu do ścięcia jajek. Posyp szczypiorkiem."
    ],
    tags: ["jajka", "ser", "szczypiorek", "szybkie", "wegetariańskie"],
    icon: "🥚"
  },
  {
    id: "lentil-curry",
    title: "Curry z ciecierzycą",
    emoji: "🍛",
    category: "Roślinny obiad",
    description: "Rozgrzewające danie z ciecierzycą i pomidorami. Smakuje świetnie z ryżem.",
    time: 25,
    cost: 12,
    servings: 2,
    vegetarian: true,
    meat: false,
    ingredients: [
      "1 puszka ciecierzycy",
      "1 puszka krojonych pomidorów",
      "1 mała cebula",
      "150 ml mleczka kokosowego",
      "1 łyżeczka curry",
      "Ryż do podania"
    ],
    steps: [
      "Ugotuj ryż zgodnie z instrukcją na opakowaniu.",
      "Posiekaj cebulę i podsmaż ją na odrobinie oleju.",
      "Dodaj curry, pomidory, odsączoną ciecierzycę i mleczko kokosowe.",
      "Duś przez 12–15 minut i podawaj z ryżem."
    ],
    tags: ["ciecierzyca", "pomidor", "ryż", "curry", "wegetariańskie"],
    icon: "🥥"
  },
  {
    id: "pasta-pesto",
    title: "Makaron z pesto",
    emoji: "🌿",
    category: "Szybki obiad",
    description: "Minimum wysiłku, maksimum smaku. Wystarczy makaron, pesto i kilka dodatków.",
    time: 15,
    cost: 12,
    servings: 2,
    vegetarian: true,
    meat: false,
    ingredients: [
      "200 g makaronu",
      "3 łyżki pesto",
      "150 g pomidorków koktajlowych",
      "2 łyżki tartego sera",
      "Sól i pieprz"
    ],
    steps: [
      "Ugotuj makaron i zachowaj kilka łyżek wody z gotowania.",
      "Przekrój pomidorki na połówki.",
      "Wymieszaj gorący makaron z pesto i odrobiną wody z gotowania.",
      "Dodaj pomidorki, ser i pieprz."
    ],
    tags: ["makaron", "pesto", "pomidor", "ser", "szybkie", "wegetariańskie"],
    icon: "🌿"
  },
  {
    id: "sausage-potatoes",
    title: "Ziemniaki z kiełbasą z patelni",
    emoji: "🍳",
    category: "Domowe klasyki",
    description: "Syte, proste danie z jednej patelni. Dobry sposób na wykorzystanie ugotowanych ziemniaków.",
    time: 25,
    cost: 12,
    servings: 2,
    vegetarian: false,
    meat: true,
    ingredients: [
      "400 g ugotowanych ziemniaków",
      "200 g kiełbasy",
      "1 cebula",
      "1 łyżka oleju",
      "Majeranek, sól i pieprz"
    ],
    steps: [
      "Pokrój ziemniaki i kiełbasę w plastry, a cebulę w piórka.",
      "Podsmaż kiełbasę z cebulą na patelni.",
      "Dodaj ziemniaki i przyprawy.",
      "Smaż, mieszając od czasu do czasu, aż ziemniaki będą rumiane i gorące."
    ],
    tags: ["ziemniaki", "kiełbasa", "cebula", "mięso"],
    icon: "🥔"
  },
  {
    id: "pancakes",
    title: "Placuszki bananowe",
    emoji: "🥞",
    category: "Na słodko",
    description: "Słodkie placuszki z kilku składników. Na śniadanie, podwieczorek albo kolację.",
    time: 15,
    cost: 6,
    servings: 2,
    vegetarian: true,
    meat: false,
    ingredients: [
      "1 dojrzały banan",
      "2 jajka",
      "4 łyżki mąki",
      "1/2 łyżeczki proszku do pieczenia",
      "Odrobina oleju do smażenia"
    ],
    steps: [
      "Rozgnieć banana widelcem.",
      "Dodaj jajka, mąkę i proszek do pieczenia. Wymieszaj.",
      "Nakładaj małe porcje ciasta na lekko natłuszczoną patelnię.",
      "Smaż na średnim ogniu po około 2 minuty z każdej strony."
    ],
    tags: ["banan", "jajka", "mąka", "szybkie", "wegetariańskie"],
    icon: "🍌"
  },
  {
    id: "tuna-pasta",
    title: "Makaron z tuńczykiem",
    emoji: "🐟",
    category: "Szybki obiad",
    description: "Praktyczny przepis z produktów, które często czekają w kuchennej szafce.",
    time: 20,
    cost: 12,
    servings: 2,
    vegetarian: false,
    meat: false,
    ingredients: [
      "200 g makaronu",
      "1 puszka tuńczyka",
      "200 g krojonych pomidorów",
      "1 ząbek czosnku",
      "1 łyżka oliwy",
      "Sól, pieprz i oregano"
    ],
    steps: [
      "Ugotuj makaron i odcedź.",
      "Podsmaż posiekany czosnek na oliwie.",
      "Dodaj pomidory oraz odsączonego tuńczyka. Dopraw i podgrzewaj przez 5–7 minut.",
      "Wymieszaj sos z makaronem i podawaj."
    ],
    tags: ["makaron", "tuńczyk", "pomidor", "ryba", "szybkie"],
    icon: "🐟"
  },
  {
    id: "baked-vegetables",
    title: "Pieczone warzywa z fetą",
    emoji: "🥦",
    category: "Warzywny obiad",
    description: "Kolorowe warzywa z piekarnika z dodatkiem słonego sera. Prosto i bez wielu naczyń.",
    time: 40,
    cost: 14,
    servings: 2,
    vegetarian: true,
    meat: false,
    ingredients: [
      "1 cukinia",
      "1 papryka",
      "1 czerwona cebula",
      "150 g sera feta",
      "2 łyżki oliwy",
      "Oregano, sól i pieprz"
    ],
    steps: [
      "Rozgrzej piekarnik do 200°C.",
      "Pokrój warzywa na kawałki i przełóż na blachę.",
      "Dodaj oliwę oraz przyprawy i wymieszaj.",
      "Piecz około 25–30 minut. Pod koniec dodaj pokruszoną fetę."
    ],
    tags: ["cukinia", "papryka", "cebula", "feta", "wegetariańskie"],
    icon: "🫑"
  }
];

// Opcjonalna integracja z własnym backendem AI.
// Zostaw puste, jeśli nie masz jeszcze endpointu.
const AI_ENDPOINT = "";

const $ = (selector) => document.querySelector(selector);

const elements = {
  form: $("#generator-form"),
  ingredients: $("#ingredients"),
  time: $("#time"),
  budget: $("#budget"),
  diet: $("#diet"),
  empty: $("#empty-result"),
  result: $("#recipe-result"),
  title: $("#result-title"),
  description: $("#result-description"),
  category: $("#result-category"),
  timeResult: $("#result-time"),
  costResult: $("#result-cost"),
  servings: $("#result-servings"),
  ingredientsList: $("#result-ingredients"),
  stepsList: $("#result-steps"),
  message: $("#result-message"),
  search: $("#recipe-search"),
  grid: $("#recipe-grid"),
  noRecipes: $("#no-recipes"),
  plan: $("#meal-plan"),
  shoppingForm: $("#shopping-form"),
  shoppingInput: $("#shopping-input"),
  shoppingList: $("#shopping-list"),
  shoppingEmpty: $("#shopping-empty"),
  toast: $("#toast")
};

let currentRecipe = null;
let toastTimeout;

function normalize(value) {
  return String(value ?? "")
    .toLocaleLowerCase("pl")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    showToast("Nie udało się zapisać danych w przeglądarce.");
  }
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 2600);
}

function getPlan() {
  const value = readStorage("mamo-meal-plan-v1", []);
  return Array.isArray(value) ? value : [];
}

function savePlan(plan) {
  writeStorage("mamo-meal-plan-v1", plan);
  renderPlan();
}

function getShopping() {
  const value = readStorage("mamo-shopping-list-v1", []);
  return Array.isArray(value) ? value : [];
}

function saveShopping(items) {
  writeStorage("mamo-shopping-list-v1", items);
  renderShopping();
}

function renderRecipe(recipe) {
  currentRecipe = recipe;

  elements.empty.hidden = true;
  elements.result.hidden = false;

  elements.title.textContent = recipe.title;
  elements.description.textContent = recipe.description;
  elements.category.textContent = recipe.category || "Pomysł na posiłek";
  elements.timeResult.textContent = `${recipe.time} min`;
  elements.costResult.textContent = `ok. ${recipe.cost} zł`;
  elements.servings.textContent = `${recipe.servings} porc.`;

  elements.ingredientsList.replaceChildren();
  recipe.ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    elements.ingredientsList.appendChild(li);
  });

  elements.stepsList.replaceChildren();
  recipe.steps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    elements.stepsList.appendChild(li);
  });

  elements.message.textContent = "";
}

function findRecipes() {
  const ingredientText = normalize(elements.ingredients.value);
  const wantedIngredients = ingredientText
    .split(/[,;\n]+/)
    .map((item) => item.trim())
    .filter(Boolean);

  const maxTime = elements.time.value === "any"
    ? Infinity
    : Number(elements.time.value);

  const maxCost = elements.budget.value === "any"
    ? Infinity
    : Number(elements.budget.value);

  const diet = elements.diet.value;

  return recipes.filter((recipe) => {
    if (recipe.time > maxTime || recipe.cost > maxCost) return false;

    if (diet === "vegetarian" && !recipe.vegetarian) return false;
    if (diet === "meat" && !recipe.meat) return false;
    if (diet === "quick" && recipe.time > 20) return false;

    if (wantedIngredients.length) {
      const searchable = normalize([
        recipe.title,
        recipe.description,
        ...recipe.ingredients,
        ...recipe.tags
      ].join(" "));

      const matchingIngredients = wantedIngredients.filter((ingredient) =>
        searchable.includes(normalize(ingredient))
      );

      // Jeśli użytkownik podał składniki, preferuj przepisy,
      // które zawierają przynajmniej jeden z nich.
      if (matchingIngredients.length === 0) return false;
    }

    return true;
  });
}

async function generateRecipe() {
  const candidates = findRecipes();

  if (!candidates.length) {
    showToast("Brak pasującego przepisu. Zmień filtry lub usuń część składników.");
    return;
  }

  const recipe = candidates[Math.floor(Math.random() * candidates.length)];
  renderRecipe(recipe);

  $("#losuj").scrollIntoView({ behavior: "smooth", block: "start" });

  // Jeśli masz backend AI, możesz spróbować uzyskać przepis wygenerowany
  // na podstawie podanych składników. Gdy backend nie odpowie,
  // na stronie nadal pozostanie działający przepis lokalny.
  if (AI_ENDPOINT.trim()) {
    try {
      const response = await fetch(AI_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ingredients: elements.ingredients.value,
          maxTime: elements.time.value,
          budget: elements.budget.value,
          diet: elements.diet.value
        })
      });

      if (!response.ok) throw new Error("Nie udało się uzyskać przepisu AI.");

      const data = await response.json();

      if (
        data &&
        typeof data.title === "string" &&
        Array.isArray(data.ingredients) &&
        Array.isArray(data.steps) &&
        data.ingredients.length &&
        data.steps.length
      ) {
        const aiRecipe = {
          id: `ai-${Date.now()}`,
          title: data.title,
          emoji: "✨",
          category: data.category || "Pomysł AI",
          description: data.description || "Propozycja przygotowana na podstawie Twoich składników.",
          time: Number(data.time) || 30,
          cost: Number(data.cost) || 15,
          servings: Number(data.servings) || 2,
          vegetarian: data.vegetarian === true,
          meat: data.meat === true,
          ingredients: data.ingredients.map(String),
          steps: data.steps.map(String),
          tags: [],
          icon: "✨"
        };

        renderRecipe(aiRecipe);
        showToast("Gotowe — przepis został przygotowany przez AI.");
      }
    } catch (error) {
      console.error(error);
      showToast("Pokazuję przepis z lokalnej bazy. Generator AI jest chwilowo niedostępny.");
    }
  }
}

function renderCards(query = "") {
  const term = normalize(query);

  const filtered = recipes.filter((recipe) => {
    const content = normalize([
      recipe.title,
      recipe.description,
      recipe.category,
      ...recipe.tags,
      ...recipe.ingredients
    ].join(" "));

    return content.includes(term);
  });

  elements.grid.replaceChildren();
  elements.noRecipes.hidden = filtered.length > 0;

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

    const cost = document.createElement("span");
    cost.className = "card-cost";
    cost.textContent = `Około ${recipe.cost} zł / porcję`;

    const open = document.createElement("button");
    open.type = "button";
    open.className = "card-open";
    open.textContent = "Zobacz przepis →";
    open.addEventListener("click", () => {
      renderRecipe(recipe);
      $("#losuj").scrollIntoView({ behavior: "smooth" });
    });

    bottom.append(cost, open);
    card.append(top, title, description, bottom);
    elements.grid.appendChild(card);
  });
}

function renderPlan() {
  const plan = getPlan();
  const days = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"];

  elements.plan.replaceChildren();

  days.forEach((day, index) => {
    const entry = plan[index];

    const row = document.createElement("div");
    row.className = "meal-day";

    const dayLabel = document.createElement("span");
    dayLabel.className = "day-label";
    dayLabel.textContent = day;

    const meal = document.createElement("span");
    meal.className = "day-meal";
    meal.textContent = entry ? entry.title : "Jeszcze nic nie zaplanowano";

    const action = document.createElement("button");
    action.className = "day-remove";
    action.type = "button";
    action.setAttribute("aria-label", entry ? `Usuń posiłek: ${day}` : `Wybierz posiłek: ${day}`);
    action.textContent = entry ? "×" : "+";

    action.addEventListener("click", () => {
      const updated = getPlan();

      if (updated[index]) {
        updated.splice(index, 1);
        savePlan(updated);
        showToast("Usunięto posiłek z planu.");
      } else if (currentRecipe) {
        addRecipeToPlan(index);
      } else {
        showToast("Najpierw wylosuj lub otwórz przepis.");
      }
    });

    row.append(dayLabel, meal, action);
    elements.plan.appendChild(row);
  });
}

function addRecipeToPlan(preferredIndex = -1) {
  if (!currentRecipe) {
    showToast("Najpierw wybierz przepis.");
    return;
  }

  const plan = getPlan();

  if (preferredIndex >= 0 && preferredIndex < 5) {
    while (plan.length <= preferredIndex) plan.push(null);
    plan[preferredIndex] = {
      id: currentRecipe.id,
      title: currentRecipe.title
    };
    savePlan(plan);
    showToast("Dodano danie do planu.");
    return;
  }

  const emptyIndex = [0, 1, 2, 3, 4].find((index) => !plan[index]);

  if (emptyIndex === undefined) {
    showToast("Plan jest pełny. Usuń jeden posiłek, aby dodać kolejny.");
    return;
  }

  while (plan.length <= emptyIndex) plan.push(null);
  plan[emptyIndex] = {
    id: currentRecipe.id,
    title: currentRecipe.title
  };

  savePlan(plan);
  showToast("Dodano danie do planu na 5 dni.");
}

function addShoppingItem(name) {
  const text = String(name ?? "").trim();

  if (!text) return;

  const items = getShopping();
  const exists = items.some((item) => normalize(item.name) === normalize(text));

  if (exists) {
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
  if (!currentRecipe) {
    showToast("Najpierw wybierz przepis.");
    return;
  }

  const items = getShopping();
  let added = 0;

  currentRecipe.ingredients.forEach((ingredient) => {
    const exists = items.some((item) =>
      normalize(item.name) === normalize(ingredient)
    );

    if (!exists) {
      items.push({
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${added}`,
        name: ingredient,
        checked: false
      });
      added++;
    }
  });

  saveShopping(items);

  showToast(added
    ? `Dodano ${added} składników do listy zakupów.`
    : "Składniki z tego przepisu są już na liście.");
}

function renderShopping() {
  const items = getShopping();
  elements.shoppingList.replaceChildren();
  elements.shoppingEmpty.hidden = items.length > 0;

  items.forEach((item) => {
    const li = document.createElement("li");
    if (item.checked) li.classList.add("checked");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = Boolean(item.checked);
    checkbox.id = `shopping-${item.id}`;
    checkbox.setAttribute("aria-label", `Oznacz: ${item.name}`);

    checkbox.addEventListener("change", () => {
      const updated = getShopping().map((entry) =>
        entry.id === item.id
          ? { ...entry, checked: checkbox.checked }
          : entry
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
    remove.setAttribute("aria-label", `Usuń produkt: ${item.name}`);

    remove.addEventListener("click", () => {
      saveShopping(getShopping().filter((entry) => entry.id !== item.id));
    });

    li.append(checkbox, label, remove);
    elements.shoppingList.appendChild(li);
  });
}

// Obsługa generatora
elements.form.addEventListener("submit", (event) => {
  event.preventDefault();
  generateRecipe();
});

$("#another-recipe").addEventListener("click", generateRecipe);

$("#add-shopping").addEventListener("click", addRecipeIngredientsToShopping);

$("#add-plan").addEventListener("click", () => addRecipeToPlan());

// Wyszukiwarka
elements.search.addEventListener("input", () => {
  renderCards(elements.search.value);
});

// Ręczne dodawanie produktów
elements.shoppingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = elements.shoppingInput;
  const value = input.value.trim();

  if (!value) return;

  addShoppingItem(value);
  input.value = "";
  input.focus();
});

// Czyszczenie planu
$("#clear-plan").addEventListener("click", () => {
  savePlan([]);
  showToast("Wyczyszczono plan posiłków.");
});

// Czyszczenie listy zakupów
$("#clear-shopping").addEventListener("click", () => {
  saveShopping([]);
  showToast("Wyczyszczono listę zakupów.");
});

// Kopiowanie listy zakupów
$("#copy-shopping").addEventListener("click", async () => {
  const items = getShopping();

  if (!items.length) {
    showToast("Lista zakupów jest pusta.");
    return;
  }

  const text = items.map((item) =>
    `${item.checked ? "[x]" : "[ ]"} ${item.name}`
  ).join("\n");

  try {
    await navigator.clipboard.writeText(text);
    showToast("Lista zakupów skopiowana.");
  } catch {
    // Zapasowe rozwiązanie dla przeglądarek bez dostępu do schowka.
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();

    const success = document.execCommand("copy");
    textarea.remove();

    showToast(success
      ? "Lista zakupów skopiowana."
      : "Nie udało się skopiować listy. Zaznacz ją ręcznie.");
  }
});

// Inicjalizacja
renderCards();
renderPlan();
renderShopping();
