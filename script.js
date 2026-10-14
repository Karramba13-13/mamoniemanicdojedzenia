```javascript
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector) => document.querySelector(selector);

  const ingredientGroups = {
    "Warzywa": [
      "ziemniaki", "bataty", "marchew", "cebula", "czosnek",
      "pomidory", "pomidory koktajlowe", "ogórek", "papryka",
      "cukinia", "bakłażan", "brokuł", "kalafior", "szpinak",
      "jarmuż", "sałata", "rukola", "kapusta", "kapusta kiszona",
      "buraki", "rzodkiewka", "seler", "por", "dynia",
      "pieczarki", "grzyby", "groszek", "kukurydza", "fasolka szparagowa",
      "szparagi", "awokado", "oliwki", "szczypiorek", "natka pietruszki"
    ],
    "Owoce": [
      "jabłka", "gruszki", "banany", "truskawki", "maliny",
      "borówki", "jagody", "wiśnie", "śliwki", "brzoskwinie",
      "pomarańcze", "cytryny", "limonki", "mango", "ananas",
      "winogrona", "kiwi", "awokado", "daktyle"
    ],
    "Mięso i ryby": [
      "pierś z kurczaka", "udka z kurczaka", "indyk", "wołowina",
      "wieprzowina", "mięso mielone", "boczek", "szynka",
      "kiełbasa", "łosoś", "tuńczyk", "dorsz", "makrela",
      "krewetki", "sardynki"
    ],
    "Nabiał i jajka": [
      "jajka", "mleko", "masło", "śmietana", "jogurt naturalny",
      "jogurt grecki", "twaróg", "serek wiejski", "mozzarella",
      "parmezan", "feta", "ser żółty", "ricotta", "mascarpone",
      "kefir", "śmietanka kokosowa"
    ],
    "Produkty zbożowe": [
      "makaron", "spaghetti", "ryż", "kasza gryczana", "kasza jaglana",
      "kasza bulgur", "kuskus", "płatki owsiane", "mąka pszenna",
      "mąka pełnoziarnista", "chleb", "bułki", "tortille", "pita",
      "pieczywo tostowe", "bułka tarta", "panko", "płatki kukurydziane"
    ],
    "Rośliny strączkowe i tofu": [
      "ciecierzyca", "soczewica", "czerwona soczewica", "fasola biała",
      "fasola czerwona", "fasola czarna", "groch", "tofu",
      "tempeh", "edamame", "hummus"
    ],
    "Spiżarnia i dodatki": [
      "passata pomidorowa", "koncentrat pomidorowy", "mleko kokosowe",
      "bulion warzywny", "bulion drobiowy", "miód", "cukier",
      "syrop klonowy", "oliwa", "olej", "ocet", "sos sojowy",
      "musztarda", "majonez", "ketchup", "masło orzechowe",
      "tahini", "pesto", "orzechy włoskie", "migdały", "orzechy nerkowca",
      "pestki dyni", "siemię lniane", "sezam", "rodzynki"
    ],
    "Przyprawy i zioła": [
      "sól", "pieprz", "papryka słodka", "papryka ostra",
      "curry", "kurkuma", "cynamon", "oregano", "bazylia",
      "tymianek", "rozmaryn", "kumin", "imbir", "chili",
      "koperek", "mięta", "kolendra", "gałka muszkatołowa"
    ]
  };

  const baseRecipes = [
    {
      name: "Makaron z sosem pomidorowym",
      meal: "lunch",
      cuisine: "włoska",
      diet: "vegan",
      time: 25,
      base: ["makaron", "passata pomidorowa", "cebula", "czosnek", "oliwa"],
      extras: [
        "cukinia", "pieczarki", "szpinak", "oliwki", "papryka",
        "bakłażan", "brokuł", "ciecierzyca", "tofu", "pomidory koktajlowe"
      ],
      steps: [
        "Ugotuj makaron zgodnie z instrukcją na opakowaniu.",
        "Posiekaj cebulę i czosnek. Podsmaż na oliwie.",
        "Dodaj wybrany dodatek i smaż przez kilka minut.",
        "Wlej passatę, dopraw solą, pieprzem i oregano, a następnie duś przez 8–10 minut.",
        "Połącz sos z makaronem i podawaj."
      ]
    },
    {
      name: "Ryż z warzywami",
      meal: "lunch",
      cuisine: "azjatycka",
      diet: "vegan",
      time: 30,
      base: ["ryż", "marchew", "papryka", "cebula", "sos sojowy", "olej"],
      extras: [
        "brokuł", "groszek", "kukurydza", "tofu", "pieczarki",
        "ciecierzyca", "szpinak", "cukinia", "edamame", "fasola czarna"
      ],
      steps: [
        "Ugotuj ryż zgodnie z instrukcją na opakowaniu.",
        "Pokrój warzywa na małe kawałki.",
        "Rozgrzej olej na dużej patelni i podsmaż cebulę z warzywami.",
        "Dodaj sos sojowy i, jeśli trzeba, odrobinę wody.",
        "Wymieszaj z ryżem i podawaj na ciepło."
      ]
    },
    {
      name: "Pieczone ziemniaki z dodatkami",
      meal: "dinner",
      cuisine: "polska",
      diet: "vegan",
      time: 45,
      base: ["ziemniaki", "oliwa", "czosnek", "papryka słodka", "sól"],
      extras: [
        "brokuł", "marchew", "cebula", "pieczarki", "cukinia",
        "ciecierzyca", "fasola czerwona", "tofu", "papryka", "bataty"
      ],
      steps: [
        "Rozgrzej piekarnik do 200°C.",
        "Umyj ziemniaki i pokrój na kawałki.",
        "Wymieszaj z oliwą, czosnkiem i przyprawami.",
        "Dodaj wybrane warzywo lub strączki i rozłóż wszystko na blasze.",
        "Piecz około 30–40 minut, aż ziemniaki będą miękkie i rumiane."
      ]
    },
    {
      name: "Jajecznica z dodatkami",
      meal: "breakfast",
      cuisine: "polska",
      diet: "vege",
      time: 15,
      base: ["jajka", "masło", "sól", "pieprz"],
      extras: [
        "szczypiorek", "pomidory", "pieczarki", "szpinak", "ser żółty",
        "feta", "cebula", "papryka", "rukola", "awokado"
      ],
      steps: [
        "Przygotuj i pokrój wybrany dodatek.",
        "Rozgrzej masło na patelni i podsmaż dodatek, jeśli tego wymaga.",
        "Roztrzep jajka z solą i pieprzem.",
        "Wlej jajka na patelnię i mieszaj na małym ogniu do uzyskania ulubionej konsystencji.",
        "Podawaj od razu, najlepiej ze świeżym pieczywem."
      ]
    },
    {
      name: "Sałatka z prostym dressingiem",
      meal: "lunch",
      cuisine: "międzynarodowa",
      diet: "vegan",
      time: 15,
      base: ["sałata", "ogórek", "pomidory", "oliwa", "cytryny", "sól"],
      extras: [
        "ciecierzyca", "awokado", "oliwki", "kukurydza", "fasola czerwona",
        "rukola", "marchew", "tofu", "pestki dyni", "orzechy włoskie"
      ],
      steps: [
        "Umyj i osusz warzywa.",
        "Pokrój składniki na kawałki i przełóż do miski.",
        "Dodaj wybrany dodatek.",
        "Wymieszaj oliwę z sokiem z cytryny, solą i pieprzem.",
        "Polej sałatkę dressingiem tuż przed podaniem."
      ]
    },
    {
      name: "Zupa warzywna",
      meal: "lunch",
      cuisine: "polska",
      diet: "vegan",
      time: 45,
      base: ["marchew", "ziemniaki", "cebula", "czosnek", "bulion warzywny"],
      extras: [
        "kalafior", "brokuł", "dynia", "groszek", "fasola biała",
        "czerwona soczewica", "cukinia", "por", "kapusta", "ciecierzyca"
      ],
      steps: [
        "Pokrój cebulę, czosnek i warzywa.",
        "Podsmaż cebulę w garnku na odrobinie oliwy.",
        "Dodaj pozostałe składniki i zalej bulionem.",
        "Gotuj do miękkości warzyw, zwykle 20–30 minut.",
        "Dopraw do smaku. Zupę możesz pozostawić z kawałkami warzyw lub częściowo zblendować."
      ]
    },
    {
      name: "Tortilla z nadzieniem",
      meal: "dinner",
      cuisine: "meksykańska",
      diet: "vegan",
      time: 20,
      base: ["tortille", "papryka", "cebula", "kukurydza", "oliwa"],
      extras: [
        "fasola czerwona", "fasola czarna", "awokado", "tofu", "ciecierzyca",
        "szpinak", "pieczarki", "ryż", "pomidor", "sałata"
      ],
      steps: [
        "Pokrój warzywa i rozgrzej oliwę na patelni.",
        "Podsmaż cebulę, paprykę oraz wybrany dodatek.",
        "Dodaj kukurydzę i dopraw pieprzem oraz papryką.",
        "Podgrzej tortille na suchej patelni.",
        "Nałóż farsz, dodaj świeże składniki i zawiń."
      ]
    },
    {
      name: "Owsianka na słodko",
      meal: "breakfast",
      cuisine: "międzynarodowa",
      diet: "vegan",
      time: 15,
      base: ["płatki owsiane", "mleko", "cynamon"],
      extras: [
        "banany", "jabłka", "gruszki", "truskawki", "borówki",
        "masło orzechowe", "migdały", "orzechy włoskie", "rodzynki", "daktyle"
      ],
      steps: [
        "Wsyp płatki do garnka i zalej mlekiem lub wodą.",
        "Dodaj cynamon i gotuj na małym ogniu, mieszając.",
        "Jeśli owsianka jest zbyt gęsta, dolej odrobinę płynu.",
        "Przełóż do miski i dodaj wybrane owoce lub orzechy.",
        "Podawaj na ciepło."
      ]
    },
    {
      name: "Tofu z warzywami",
      meal: "dinner",
      cuisine: "azjatycka",
      diet: "vegan",
      time: 30,
      base: ["tofu", "sos sojowy", "czosnek", "imbir", "olej"],
      extras: [
        "brokuł", "marchew", "papryka", "pieczarki", "cukinia",
        "szpinak", "edamame", "groszek", "kukurydza", "cebula"
      ],
      steps: [
        "Osusz tofu i pokrój w kostkę.",
        "Rozgrzej olej i smaż tofu, aż lekko się zarumieni.",
        "Dodaj pokrojone warzywa, czosnek i odrobinę imbiru.",
        "Wlej sos sojowy i smaż do miękkości warzyw.",
        "Podawaj samodzielnie lub z ugotowanym ryżem."
      ]
    },
    {
      name: "Jogurtowa miska z owocami",
      meal: "snack",
      cuisine: "międzynarodowa",
      diet: "vege",
      time: 10,
      base: ["jogurt naturalny", "płatki owsiane"],
      extras: [
        "banany", "jabłka", "truskawki", "maliny", "borówki",
        "migdały", "orzechy włoskie", "daktyle", "siemię lniane", "miód"
      ],
      steps: [
        "Przełóż jogurt do miski.",
        "Umyj i pokrój owoce, jeśli to konieczne.",
        "Dodaj płatki owsiane i wybrany dodatek.",
        "Wymieszaj lub ułóż składniki warstwami.",
        "Podawaj od razu."
      ]
    }
  ];

  const variantNames = [
    "klasyczne", "z warzywami", "z chrupiącym dodatkiem",
    "z aromatycznymi ziołami", "z dodatkiem sezonowym",
    "w wersji ekspresowej", "z nutą czosnku", "z kolorowymi dodatkami",
    "domowe", "na dobry początek"
  ];

  const recipes = [];

  baseRecipes.forEach((base, baseIndex) => {
    base.extras.forEach((extra, variantIndex) => {
      const ingredients = [...base.base, extra];

      if (base.name === "Makaron z sosem pomidorowym") {
        ingredients.push("oregano");
      }

      if (base.name === "Ryż z warzywami") {
        ingredients.push("pieprz");
      }

      if (base.name === "Sałatka z prostym dressingiem") {
        ingredients.push("pieprz");
      }

      if (base.name === "Zupa warzywna") {
        ingredients.push("sól", "pieprz");
      }

      if (base.name === "Tortilla z nadzieniem") {
        ingredients.push("papryka słodka");
      }

      if (base.name === "Tofu z warzywami") {
        ingredients.push("ryż");
      }

      recipes.push({
        id: baseIndex * 10 + variantIndex + 1,
        title: variantIndex === 0
          ? base.name
          : `${base.name} ${variantNames[variantIndex]}`,
        meal: base.meal,
        cuisine: base.cuisine,
        diet: base.diet,
        time: base.time,
        ingredients: [...new Set(ingredients)],
        steps: [...base.steps],
        description: `Prosty przepis ${variantNames[variantIndex]}. Możesz dostosować przyprawy do własnego smaku.`,
        servings: 2
      });
    });
  });

  const state = {
    selectedIngredients: new Set(),
    currentRecipe: null,
    plan: [null, null, null, null, null],
    shopping: []
  };

  const storageKey = "mamo-nie-ma-nic-do-jedzenia-v1";

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");

      if (Array.isArray(saved.plan) && saved.plan.length === 5) {
        state.plan = saved.plan.map((id) =>
          recipes.find((recipe) => recipe.id === id) || null
        );
      }

      if (Array.isArray(saved.shopping)) {
        state.shopping = saved.shopping
          .filter((item) => item && typeof item.name === "string")
          .map((item) => ({
            name: item.name,
            checked: Boolean(item.checked)
          }));
      }
    } catch (error) {
      console.warn("Nie udało się odczytać zapisanych danych.", error);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(storageKey, JSON.stringify({
        plan: state.plan.map((recipe) => recipe ? recipe.id : null),
        shopping: state.shopping
      }));
    } catch (error) {
      console.warn("Nie udało się zapisać danych w przeglądarce.", error);
    }
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }

  function mealLabel(meal) {
    return ({
      breakfast: "Śniadanie",
      lunch: "Obiad",
      dinner: "Kolacja",
      snack: "Przekąska"
    })[meal] || "Posiłek";
  }

  function dietLabel(diet) {
    return ({
      vegan: "Wegańskie",
      vege: "Wegetariańskie",
      meat: "Mięsne"
    })[diet] || "";
  }

  function renderIngredientCategories() {
    const container = $("#ingredient-categories");
    container.innerHTML = "";

    Object.entries(ingredientGroups).forEach(([group, items], index) => {
      const details = document.createElement("details");
      details.className = "ingredient-category";
      details.open = index === 0;

      const summary = document.createElement("summary");
      summary.textContent = `${group} (${items.length})`;
      details.appendChild(summary);

      const options = document.createElement("div");
      options.className = "ingredient-options";

      items.forEach((ingredient) => {
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

      details.appendChild(options);
      container.appendChild(details);
    });

    filterIngredientOptions();
  }

  function filterIngredientOptions() {
    const query = $("#ingredient-search").value.trim().toLocaleLowerCase("pl");

    document.querySelectorAll(".ingredient-category").forEach((category) => {
      let visibleCount = 0;

      category.querySelectorAll(".ingredient-option").forEach((option) => {
        const matches = option.textContent.toLocaleLowerCase("pl").includes(query);
        option.hidden = !matches;
        if (matches) visibleCount++;
      });

      category.hidden = visibleCount === 0;

      if (query && visibleCount > 0) {
        category.open = true;
      }
    });
  }

  function renderSelectedIngredients() {
    const container = $("#selected-ingredients");
    container.innerHTML = "";

    if (state.selectedIngredients.size === 0) {
      const message = document.createElement("span");
      message.className = "muted";
      message.textContent = "Nie wybrano jeszcze składników.";
      container.appendChild(message);
      return;
    }

    state.selectedIngredients.forEach((ingredient) => {
      const chip = document.createElement("span");
      chip.className = "ingredient-chip";

      const name = document.createElement("span");
      name.textContent = ingredient;

      const remove = document.createElement("button");
      remove.type = "button";
      remove.textContent = "×";
      remove.setAttribute("aria-label", `Usuń składnik: ${ingredient}`);
      remove.addEventListener("click", () => {
        state.selectedIngredients.delete(ingredient);
        const checkbox = [...document.querySelectorAll("#ingredient-categories input")]
          .find((input) => input.value === ingredient);
        if (checkbox) checkbox.checked = false;
        renderSelectedIngredients();
      });

      chip.append(name, remove);
      container.appendChild(chip);
    });
  }

  function getMatchingRecipes() {
    const meal = $("#meal-type").value;
    const cuisine = $("#cuisine").value;
    const diet = $("#diet").value;
    const maxTime = $("#time").value;
    const selected = [...state.selectedIngredients];

    return recipes.filter((recipe) => {
      if (meal !== "all" && recipe.meal !== meal) return false;
      if (cuisine !== "all" && recipe.cuisine !== cuisine) return false;
      if (diet === "vegan" && recipe.diet !== "vegan") return false;
      if (diet === "vege" && !["vegan", "vege"].includes(recipe.diet)) return false;
      if (maxTime !== "all" && recipe.time > Number(maxTime)) return false;

      if (selected.length) {
        const recipeIngredients = recipe.ingredients.map((item) =>
          item.toLocaleLowerCase("pl")
        );

        const hasMatch = selected.some((ingredient) =>
          recipeIngredients.some((item) =>
            item.includes(ingredient.toLocaleLowerCase("pl")) ||
            ingredient.toLocaleLowerCase("pl").includes(item)
          )
        );

        if (!hasMatch) return false;
      }

      return true;
    });
  }

  function showRecipe(recipe) {
    if (!recipe) return;

    state.currentRecipe = recipe;

    $("#result-title").textContent = recipe.title;
    $("#result-description").textContent = recipe.description;
    $("#result-servings").textContent = recipe.servings;

    $("#result-meta").innerHTML = [
      `<span class="meta-pill">🍽️ ${escapeHTML(mealLabel(recipe.meal))}</span>`,
      `<span class="meta-pill">⏱️ ${recipe.time} min</span>`,
      `<span class="meta-pill">🌍 ${escapeHTML(recipe.cuisine)}</span>`,
      `<span class="meta-pill">${escapeHTML(dietLabel(recipe.diet))}</span>`
    ].join("");

    const ingredientsList = $("#result-ingredients");
    ingredientsList.innerHTML = "";

    recipe.ingredients.forEach((ingredient) => {
      const item = document.createElement("li");
      item.textContent = ingredient;
      ingredientsList.appendChild(item);
    });

    const stepsList = $("#result-steps");
    stepsList.innerHTML = "";

    recipe.steps.forEach((step) => {
      const item = document.createElement("li");
      item.textContent = step;
      stepsList.appendChild(item);
    });

    $("#result-message").hidden = true;
    $("#recipe-result").hidden = false;
    $("#empty-result").hidden = true;
    $("#recipe-result").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function chooseRecipe() {
    const matches = getMatchingRecipes();

    if (!matches.length) {
      $("#recipe-result").hidden = true;
      $("#empty-result").hidden = false;
      $("#empty-result").textContent =
        "Nie znaleziono pasującego dania. Zmień filtry lub zaznacz inne składniki.";
      return;
    }

    const selected = [...state.selectedIngredients];

    // Preferuj przepisy pasujące do największej liczby wybranych składników.
    const ranked = matches.map((recipe) => {
      const score = selected.filter((ingredient) =>
        recipe.ingredients.some((item) =>
          item.toLocaleLowerCase("pl").includes(ingredient.toLocaleLowerCase("pl")) ||
          ingredient.toLocaleLowerCase("pl").includes(item.toLocaleLowerCase("pl"))
        )
      ).length;

      return { recipe, score };
    });

    const bestScore = Math.max(...ranked.map((entry) => entry.score));
    const best = ranked
      .filter((entry) => entry.score === bestScore)
      .map((entry) => entry.recipe);

    const previousId = state.currentRecipe?.id;
    let candidates = best;

    if (best.length > 1 && previousId) {
      const withoutPrevious = best.filter((recipe) => recipe.id !== previousId);
      if (withoutPrevious.length) candidates = withoutPrevious;
    }

    const recipe = candidates[Math.floor(Math.random() * candidates.length)];
    showRecipe(recipe);
  }

  function renderRecipeCards() {
    const query = $("#recipe-search").value.trim().toLocaleLowerCase("pl");
    const container = $("#recipe-grid");

    const matches = recipes.filter((recipe) => {
      const searchable = [
        recipe.title,
        recipe.description,
        ...recipe.ingredients
      ].join(" ").toLocaleLowerCase("pl");

      return searchable.includes(query);
    });

    $("#recipe-count").textContent = `Liczba przepisów: ${matches.length}`;
    $("#no-recipes").hidden = matches.length !== 0;
    container.innerHTML = "";

    matches.forEach((recipe) => {
      const card = document.createElement("article");
      card.className = "recipe-card";

      const title = document.createElement("h3");
      title.textContent = recipe.title;

      const description = document.createElement("p");
      description.textContent = recipe.description;

      const meta = document.createElement("div");
      meta.className = "meta-row";
      meta.innerHTML = `
        <span class="meta-pill">${escapeHTML(mealLabel(recipe.meal))}</span>
        <span class="meta-pill">${recipe.time} min</span>
      `;

      const button = document.createElement("button");
      button.type = "button";
      button.textContent = "Zobacz przepis";
      button.addEventListener("click", () => showRecipe(recipe));

      card.append(title, description, meta, button);
      container.appendChild(card);
    });
  }

  function renderPlan() {
    const container = $("#meal-plan");
    container.innerHTML = "";

    const days = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"];

    days.forEach((day, index) => {
      const card = document.createElement("article");
      card.className = "plan-day";

      const title = document.createElement("h3");
      title.textContent = day;
      card.appendChild(title);

      const recipe = state.plan[index];

      if (recipe) {
        const name = document.createElement("p");
        name.textContent = recipe.title;
        card.appendChild(name);

        const openButton = document.createElement("button");
        openButton.type = "button";
        openButton.textContent = "Pokaż przepis";
        openButton.addEventListener("click", () => showRecipe(recipe));
        card.appendChild(openButton);

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "button-secondary";
        removeButton.style.marginTop = "8px";
        removeButton.textContent = "Usuń";
        removeButton.addEventListener("click", () => {
          state.plan[index] = null;
          saveState();
          renderPlan();
        });
        card.appendChild(removeButton);
      } else {
        const empty = document.createElement("p");
        empty.className = "muted";
        empty.textContent = "Brak zaplanowanego dania.";
        card.appendChild(empty);
      }

      container.appendChild(card);
    });
  }

  function addCurrentRecipeToPlan() {
    if (!state.currentRecipe) return;

    let index = state.plan.findIndex((recipe) => recipe === null);

    if (index === -1) {
      index = 0;
      state.plan[index] = state.currentRecipe;
    } else {
      state.plan[index] = state.currentRecipe;
    }

    saveState();
    renderPlan();

    $("#result-message").textContent =
      `Dodano „${state.currentRecipe.title}” do planu na ${["poniedziałek", "wtorek", "środę", "czwartek", "piątek"][index]}.`;
    $("#result-message").hidden = false;
  }

  function addShoppingItem(name) {
    const cleaned = name.trim();
    if (!cleaned) return;

    const exists = state.shopping.some((item) =>
      item.name.toLocaleLowerCase("pl") === cleaned.toLocaleLowerCase("pl")
    );

    if (!exists) {
      state.shopping.push({ name: cleaned, checked: false });
      saveState();
      renderShoppingList();
    }
  }

  function addRecipeIngredientsToShopping() {
    if (!state.currentRecipe) return;

    state.currentRecipe.ingredients.forEach(addShoppingItem);

    $("#result-message").textContent =
      "Składniki przepisu dodano do listy zakupów. Duplikaty pominięto.";
    $("#result-message").hidden = false;
  }

  function renderShoppingList() {
    const list = $("#shopping-list");
    list.innerHTML = "";

    state.shopping.forEach((item, index) => {
      const li = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = item.checked;
      checkbox.id = `shopping-item-${index}`;
      checkbox.addEventListener("change", () => {
        state.shopping[index].checked = checkbox.checked;
        saveState();
        renderShoppingList();
      });

      const label = document.createElement("label");
      label.htmlFor = checkbox.id;
      label.textContent = item.name;

      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "button-secondary";
      remove.textContent = "Usuń";
      remove.style.marginLeft = "auto";
      remove.style.padding = "5px 10px";
      remove.style.minHeight = "34px";
      remove.addEventListener("click", () => {
        state.shopping.splice(index, 1);
        saveState();
        renderShoppingList();
      });

      li.append(checkbox, label, remove);
      list.appendChild(li);
    });

    $("#shopping-empty").hidden = state.shopping.length > 0;
    $("#shopping-list").hidden = state.shopping.length === 0;
  }

  $("#ingredient-search").addEventListener("input", filterIngredientOptions);

  $("#clear-ingredients").addEventListener("click", () => {
    state.selectedIngredients.clear();
    document.querySelectorAll("#ingredient-categories input[type='checkbox']")
      .forEach((checkbox) => {
        checkbox.checked = false;
      });
    renderSelectedIngredients();
  });

  $("#generator-form").addEventListener("submit", (event) => {
    event.preventDefault();
    chooseRecipe();
  });

  $("#another-recipe").addEventListener("click", chooseRecipe);

  $("#add-shopping").addEventListener("click", addRecipeIngredientsToShopping);
  $("#add-plan").addEventListener("click", addCurrentRecipeToPlan);

  $("#recipe-search").addEventListener("input", renderRecipeCards);

  $("#clear-plan").addEventListener("click", () => {
    state.plan = [null, null, null, null, null];
    saveState();
    renderPlan();
  });

  $("#shopping-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = $("#shopping-input");
    addShoppingItem(input.value);
    input.value = "";
    input.focus();
  });

  $("#clear-shopping").addEventListener("click", () => {
    state.shopping = [];
    saveState();
    renderShoppingList();
  });

  $("#copy-shopping").addEventListener("click", async () => {
    const text = state.shopping
      .map((item) => `${item.checked ? "[x]" : "[ ]"} ${item.name}`)
      .join("\n");

    if (!text) {
      alert("Lista zakupów jest pusta.");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      alert("Lista zakupów została skopiowana.");
    } catch (error) {
      window.prompt("Skopiuj listę zakupów:", text);
    }
  });

  loadState();
  renderIngredientCategories();
  renderSelectedIngredients();
  renderRecipeCards();
  renderPlan();
  renderShoppingList();
});
```
