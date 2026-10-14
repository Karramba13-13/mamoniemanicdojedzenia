
"use strict";

const recipes = [
  {
    name: "Jajecznica na bogato",
    emoji: "🍳",
    time: 10,
    cost: 5,
    ingredients: ["jajka", "masło", "chleb"],
    description: "Klasyk, który ratuje poranek, obiad i późny powrót do domu.",
    tags: ["Szybko", "Tanio"]
  },
  {
    name: "Makaron z czosnkiem",
    emoji: "🍝",
    time: 15,
    cost: 7,
    ingredients: ["makaron", "czosnek", "oliwa"],
    description: "Minimum składników, maksimum włoskiego klimatu.",
    tags: ["15 minut", "Bez mięsa"]
  },
  {
    name: "Placki ziemniaczane",
    emoji: "🥔",
    time: 30,
    cost: 7,
    ingredients: ["ziemniaki", "jajka", "mąka"],
    description: "Chrupiące brzegi i pytanie, dlaczego nie robimy ich częściej.",
    tags: ["Domowe", "Tanio"]
  },
  {
    name: "Ryż smażony z jajkiem",
    emoji: "🍚",
    time: 15,
    cost: 8,
    ingredients: ["ryż", "jajka", "cebula"],
    description: "Wczorajszy ryż dostaje drugie życie. Zero dramatu.",
    tags: ["Szybko", "Na resztki"]
  },
  {
    name: "Tosty serowe",
    emoji: "🥪",
    time: 10,
    cost: 6,
    ingredients: ["chleb", "ser", "masło"],
    description: "Kiedy ambicje kulinarne kończą się na włączeniu tostera.",
    tags: ["10 minut", "Prosto"]
  },
  {
    name: "Makaron pomidorowy",
    emoji: "🍅",
    time: 20,
    cost: 9,
    ingredients: ["makaron", "pomidory", "czosnek"],
    description: "Prosty sos i obiad gotowy szybciej niż dostawa.",
    tags: ["Bez mięsa", "Szybko"]
  },
  {
    name: "Kurczak z ryżem",
    emoji: "🍗",
    time: 30,
    cost: 14,
    ingredients: ["kurczak", "ryż", "cebula"],
    description: "Konkretny obiad dla tych, którzy naprawdę zgłodnieli.",
    tags: ["Syci", "Klasyk"]
  },
  {
    name: "Naleśniki na słono",
    emoji: "🥞",
    time: 25,
    cost: 9,
    ingredients: ["mąka", "jajka", "mleko", "ser"],
    description: "Z serem, z warzywami albo z tym, co woła z lodówki.",
    tags: ["Rodzinne", "Uniwersalne"]
  },
  {
    name: "Sałatka lodówkowa",
    emoji: "🥗",
    time: 12,
    cost: 8,
    ingredients: ["pomidor", "ogórek", "ser"],
    description: "Wrzuć warzywa do miski i nazwij to planem żywieniowym.",
    tags: ["Lekko", "Szybko"]
  },
  {
    name: "Ziemniaki z twarożkiem",
    emoji: "🥔",
    time: 35,
    cost: 8,
    ingredients: ["ziemniaki", "twaróg", "śmietana"],
    description: "Skromnie, sycąco i bez konieczności brania kredytu.",
    tags: ["Tanio", "Domowe"]
  },
  {
    name: "Omlet z serem",
    emoji: "🧀",
    time: 12,
    cost: 7,
    ingredients: ["jajka", "ser", "mleko"],
    description: "Kilka jajek i gotowe. Nawet poniedziałek tego nie zepsuje.",
    tags: ["Szybko", "Prosto"]
  },
  {
    name: "Zupa warzywna",
    emoji: "🥣",
    time: 35,
    cost: 10,
    ingredients: ["marchew", "ziemniaki", "cebula"],
    description: "Garnek, warzywa i chwila spokoju od pytania o obiad.",
    tags: ["Rozgrzewająca", "Domowe"]
  }
];

const days = [
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek"
];

const elements = {
  ingredients: document.getElementById("ingredients"),
  time: document.getElementById("time"),
  budget: document.getElementById("budget"),
  results: document.getElementById("results"),
  resultCount: document.getElementById("result-count"),
  shoppingList: document.getElementById("shopping-list"),
  shoppingStatus: document.getElementById("shopping-status"),
  weeklyPlan: document.getElementById("weekly-plan")
};

let shoppingItems = [];
let currentRecipes = [];

function normalize(value) {
  return value
    .toLocaleLowerCase("pl-PL")
    .trim()
    .replace(/\s+/g, " ");
}

function getUserIngredients() {
  return elements.ingredients.value
    .split(",")
    .map(normalize)
    .filter(Boolean);
}

function ingredientMatches(recipeIngredient, userIngredient) {
  return recipeIngredient === userIngredient ||
    recipeIngredient.includes(userIngredient) ||
    userIngredient.includes(recipeIngredient);
}

function getFilteredRecipes() {
  const ingredients = getUserIngredients();
  const maxTime = Number(elements.time.value);
  const maxCost = Number(elements.budget.value);

  let matches = recipes
    .map((recipe, index) => {
      const matchedIngredients = recipe.ingredients.filter(item =>
        ingredients.some(userItem =>
          ingredientMatches(item, userItem)
        )
      );

      return {
        ...recipe,
        index,
        matchedCount: matchedIngredients.length
      };
    })
    .filter(recipe =>
      recipe.time <= maxTime && recipe.cost <= maxCost
    );

  if (ingredients.length > 0) {
    matches = matches
      .filter(recipe => recipe.matchedCount > 0)
      .sort((a, b) => b.matchedCount - a.matchedCount);
  }

  return matches;
}

function renderRecipes(list) {
  elements.resultCount.textContent =
    `${list.length} ${getRecipeWord(list.length)}`;

  if (list.length === 0) {
    elements.results.innerHTML = `
      <div class="empty-results">
        <h3>Chyba mamy kulinarną zagadkę! 🤔</h3>
        <p>
          Nie znaleźliśmy pasującego przepisu.
          Wpisz inne składniki, zwiększ budżet albo daj sobie
          kilka dodatkowych minut.
        </p>
        <button class="button button-secondary" id="show-all-recipes" type="button">
          Pokaż wszystkie pasujące do filtrów
        </button>
      </div>
    `;

    document.getElementById("show-all-recipes").addEventListener("click", () => {
      elements.ingredients.value = "";
      currentRecipes = getFilteredRecipes();
      renderRecipes(currentRecipes);
    });

    return;
  }

  elements.results.innerHTML = list.map(recipe => `
    <article class="recipe-card">
      <div class="recipe-emoji" aria-hidden="true">${recipe.emoji}</div>
      <div class="recipe-meta">
        ⏱ ${recipe.time} min &nbsp;·&nbsp; ok. ${recipe.cost} zł / porcję
      </div>
      <h3>${recipe.name}</h3>
      <p class="recipe-description">${recipe.description}</p>
      <div class="recipe-tags">
        ${recipe.tags.map(tag => `<span class="recipe-tag">${tag}</span>`).join("")}
      </div>
      <p class="recipe-ingredients">
        <strong>Potrzebujesz:</strong><br>
        ${recipe.ingredients.join(", ")}
      </p>
      <button
        class="button button-secondary add-shopping"
        type="button"
        data-index="${recipe.index}"
      >
        + Dodaj braki do listy
      </button>
    </article>
  `).join("");

  elements.results.querySelectorAll(".add-shopping").forEach(button => {
    button.addEventListener("click", () => {
      addShopping(Number(button.dataset.index));
    });
  });
}

function getRecipeWord(count) {
  if (count === 1) return "pomysł";
  if (count % 10 >= 2 && count % 10 <= 4 &&
      !(count % 100 >= 12 && count % 100 <= 14)) {
    return "pomysły";
  }
  return "pomysłów";
}

function findRecipes() {
  currentRecipes = getFilteredRecipes();
  renderRecipes(currentRecipes);

  document.getElementById("przepisy").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function surpriseMe() {
  const options = getFilteredRecipes();

  if (options.length === 0) {
    renderRecipes([]);
    return;
  }

  const selected = options[
    Math.floor(Math.random() * options.length)
  ];

  currentRecipes = [selected];
  renderRecipes(currentRecipes);

  elements.resultCount.textContent = "Losowanie 🎲";

  document.getElementById("przepisy").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function shuffle(items) {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function makePlan() {
  const options = getFilteredRecipes();

  if (options.length === 0) {
    elements.weeklyPlan.innerHTML =
      '<li class="empty-state">Brak przepisów dla wybranych filtrów. Zmień czas lub budżet.</li>';
    return;
  }

  let orderedRecipes = shuffle(options);

  // Gdy jest mało przepisów, plan nadal wypełnia pięć dni.
  const plan = days.map((day, index) => ({
    day,
    recipe: orderedRecipes[index % orderedRecipes.length]
  }));

  elements.weeklyPlan.innerHTML = plan.map(item => `
    <li>
      <strong>${item.day}:</strong>
      ${item.recipe.emoji} ${item.recipe.name}
      <span class="recipe-meta"> · ok. ${item.recipe.cost} zł</span>
    </li>
  `).join("");
}

function addShopping(index) {
  const recipe = recipes[index];

  if (!recipe) return;

  const availableIngredients = getUserIngredients();

  const missing = recipe.ingredients.filter(item =>
    !availableIngredients.some(userItem =>
      ingredientMatches(item, userItem)
    )
  );

  const existing = new Set(shoppingItems.map(normalize));
  let added = 0;

  missing.forEach(item => {
    if (!existing.has(normalize(item))) {
      shoppingItems.push(item);
      existing.add(normalize(item));
      added++;
    }
  });

  renderShopping();

  elements.shoppingStatus.textContent = added > 0
    ? `Dodano ${added} ${added === 1 ? "składnik" : "składniki"} do listy.`
    : "Brak nowych składników do dodania.";

}

function renderShopping() {
  if (shoppingItems.length === 0) {
    elements.shoppingList.innerHTML =
      '<li class="empty-state">Twoja lista jest jeszcze pusta.</li>';
    return;
  }

  elements.shoppingList.innerHTML = shoppingItems.map((item, index) => `
    <li class="shopping-item">
      <input
        type="checkbox"
        id="shopping-item-${index}"
        aria-label="Oznacz ${item} jako kupione"
      >
      <label class="shopping-name" for="shopping-item-${index}">${item}</label>
    </li>
  `).join("");

  elements.shoppingList.querySelectorAll('input[type="checkbox"]').forEach(input => {
    input.addEventListener("change", () => {
      input.closest(".shopping-item").classList.toggle(
        "is-checked",
        input.checked
      );
    });
  });
}

async function copyShopping() {
  if (shoppingItems.length === 0) {
    elements.shoppingStatus.textContent = "Najpierw dodaj składniki do listy.";
    return;
  }

  const checkedItems = [
    ...elements.shoppingList.querySelectorAll("input:checked")
  ].map(input => Number(input.id.replace("shopping-item-", "")));

  const remainingItems = shoppingItems.filter((item, index) =>
    !checkedItems.includes(index)
  );

  const text = "LISTA ZAKUPÓW\n" +
    remainingItems.map(item => `- ${item}`).join("\n");

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const temporary = document.createElement("textarea");
      temporary.value = text;
      temporary.style.position = "fixed";
      temporary.style.opacity = "0";
      document.body.appendChild(temporary);
      temporary.select();

      const copied = document.execCommand("copy");
      temporary.remove();

      if (!copied) {
        window.prompt("Skopiuj listę zakupów:", text);
        return;
      }
    }

    elements.shoppingStatus.textContent = "Lista skopiowana!";
  } catch {
    window.prompt("Skopiuj listę zakupów:", text);
  }
}

function clearShopping() {
  shoppingItems = [];
  renderShopping();
  elements.shoppingStatus.textContent = "Lista została wyczyszczona.";
}

function clearPlan() {
  elements.weeklyPlan.innerHTML =
    '<li class="empty-state">Kliknij „Plan na 5 dni”, żeby ułożyć menu.</li>';
}

// Przyciski
document.getElementById("find-button").addEventListener("click", findRecipes);
document.getElementById("surprise-button").addEventListener("click", surpriseMe);
document.getElementById("plan-button").addEventListener("click", makePlan);
document.getElementById("copy-shopping").addEventListener("click", copyShopping);
document.getElementById("clear-shopping").addEventListener("click", clearShopping);
document.getElementById("clear-plan").addEventListener("click", clearPlan);

// Enter w polu składników uruchamia wyszukiwanie.
elements.ingredients.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    event.preventDefault();
    findRecipes();
  }
});

// Pierwsze wyświetlenie przepisów po otwarciu strony.
currentRecipes = getFilteredRecipes();
renderRecipes(currentRecipes);
renderShopping();
