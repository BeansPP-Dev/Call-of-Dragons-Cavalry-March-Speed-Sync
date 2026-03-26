const MARCH_COUNT = 5;
const SKILL_COUNT = 4;
const SYNC_TOLERANCE = 0.0005;

const heroes = [
  {
    name: "Emrys",
    skills: [
      { name: "Penumbra", levels: [0.00, 0.00, 0.0, 0.0, 0.0] },
      { name: "Eclipse Raid", levels: [0, 0, 0.0, 0.0, 0.0] },
      { name: "Penumbra", levels: [.03, .045, .06, .08, .10] },
      { name: "Obsidian Advance", levels: [0, 0.00, 0.0, 0.0, 0.0] },
    ],
    awakenedSkill: {
      name: "Shadow Gallop",
      levels: [0.0],
    },
  },
  {
    name: "Bakshi",
    skills: [
      { name: "Skill 1", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 2", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 3", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 4", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
    ],
    awakenedSkill: {
      name: "Awakened",
      levels: [0.0],
    },
  },
  {
    name: "Forondil",
    skills: [
      { name: "Skill 1", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 2", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 3", levels: [0.1, 0.12, 0.14, 0.16, 0.2] },
      { name: "Skill 4", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
    ],
    awakenedSkill: {
      name: "Awakened",
      levels: [0.0],
    },
  },
  {
    name: "Theodore",
    skills: [
      { name: "Skill 1", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 2", levels: [0.04, 0.05, 0.06, 0.08, 0.1] },
      { name: "Skill 3", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 4", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
    ],
    awakenedSkill: {
      name: "Awakened",
      levels: [0.0],
    },
  },
  {
    name: "Morgo",
    skills: [
      { name: "Skill 1", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 2", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 3", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 4", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
    ],
    awakenedSkill: {
      name: "Awakened",
      levels: [0.0],
    },
  },
  {
    name: "Urag",
    skills: [
      { name: "Skill 1", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 2", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 3", levels: [0.04, 0.05, 0.06, 0.08, 0.1] },
      { name: "Skill 4", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
    ],
    awakenedSkill: {
      name: "Awakened",
      levels: [0.0],
    },
  },
  {
    name: "Bahorn",
    skills: [
      { name: "Skill 1", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 2", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 3", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 4", levels: [0.08, 0.11, 0.14, 0.17, 0.2] },
    ],
    awakenedSkill: {
      name: "Awakened",
      levels: [0.0],
    },
  },
  {
    name: "Lieh-Shan Yen",
    skills: [
      { name: "Skill 1", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 2", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 3", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 4", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
    ],
    awakenedSkill: {
      name: "Awakened",
      levels: [0.0],
    },
  },
  {
    name: "Mardok",
    skills: [
      { name: "Skill 1", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 2", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 3", levels: [0.04, 0.05, 0.06, 0.08, 0.1] },
      { name: "Skill 4", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
    ],
    awakenedSkill: {
      name: "Awakened",
      levels: [0.0],
    },
  },
  {
    name: "Alistair",
    skills: [
      { name: "Skill 1", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 2", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 3", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 4", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
    ],
    awakenedSkill: {
      name: "Awakened",
      levels: [0.0],
    },
  },
  {
    name: "Seluna",
    skills: [
      { name: "Skill 1", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 2", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 3", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 4", levels: [0.08, 0.1, 0.12, 0.16, 0.2] },
    ],
    awakenedSkill: {
      name: "Awakened",
      levels: [0.0],
    },
  },
  {
    name: "Tobin",
    skills: [
      { name: "Skill 1", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 2", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 3", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 4", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
    ],
    awakenedSkill: {
      name: "Awakened",
      levels: [0.0],
    },
  },
  {
    name: "Neya",
    skills: [
      { name: "Skill 1", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 2", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 3", levels: [0.04, 0.05, 0.06, 0.08, 0.1] },
      { name: "Skill 4", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
    ],
    awakenedSkill: {
      name: "Awakened",
      levels: [0.0],
    },
  },
  {
    name: "Agnar",
    skills: [
      { name: "Skill 1", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 2", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 3", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 4", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
    ],
    awakenedSkill: {
      name: "Awakened",
      levels: [0.0],
    },
  },
  {
    name: "Freya",
    skills: [
      { name: "Skill 1", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 2", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 3", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
      { name: "Skill 4", levels: [0.0, 0.0, 0.0, 0.0, 0.0] },
    ],
    awakenedSkill: {
      name: "Awakened",
      levels: [0.0],
    },
  },
];

const artifacts = [
  { name: "Sorland's Blade", levels: [.07, .12, .18, .18, .18] },
  { name: "Kingslayer", levels: [0, 0, 0, 0, 0] },
  { name: "Storm Arrows", levels: [0, 0, 0, 0, 0] },
  { name: "Wolf-Woman Of Haelor", levels: [0, 0, 0, 0, 0] },
  { name: "Springblades", levels: [0, 0, 0, 0, 0] },
  { name: "Oath of Stormpeak", levels: [0, 0, 0, 0, 0] },
  { name: "Wolf-Howl Horn", levels: [0, 0, 0, 0, 0] },
  { name: "Lunaris", levels: [0.2, 0.25, 0.3, 0.35, 0.4] },
  { name: "Winter's Edge", levels: [0, 0, 0, 0, 0] },
  { name: "Springbird Feather", levels: [0.24, 0.3, 0.36, 0.42, 0.48] }
];

const defaultState = Array.from({ length: MARCH_COUNT }, (_, index) => ({
  primaryHero: heroes[index % heroes.length].name,
  secondaryHero: heroes[(index + 1) % heroes.length].name,
  primarySkills: [5, 5, 5, 5],
  secondarySkills: [5, 5, 5, 5],
  primaryAwakened: true,
  secondaryAwakened: false,
  talentBonus: 0,
  artifact: artifacts[index % artifacts.length].name,
  artifactLevel: 5,
}));

const targetSpeedInput = document.getElementById("target-speed-input");
const marchGrid = document.getElementById("march-grid");
const resultsBody = document.getElementById("results-body");
const syncIndicator = document.getElementById("sync-indicator");
const statusCopy = document.getElementById("status-copy");

function createHeroOptions(selectedValue) {
  return heroes
    .map((hero) => `<option value="${hero.name}" ${hero.name === selectedValue ? "selected" : ""}>${hero.name}</option>`)
    .join("");
}

function createArtifactOptions(selectedValue) {
  return artifacts
    .map((artifact) => `<option value="${artifact.name}" ${artifact.name === selectedValue ? "selected" : ""}>${artifact.name}</option>`)
    .join("");
}

function createLevelOptions(selectedValue) {
  return [1, 2, 3, 4, 5]
    .map((level) => `<option value="${level}" ${level === selectedValue ? "selected" : ""}>${level}</option>`)
    .join("");
}

function renderSkillSelectors(prefix, selectedLevels) {
  return Array.from({ length: SKILL_COUNT }, (_, index) => `
    <label class="field">
      <span>Skill ${index + 1} Level</span>
      <select data-field="${prefix}Skills" data-skill-index="${index}">
        ${createLevelOptions(selectedLevels[index])}
      </select>
    </label>
  `).join("");
}

function renderMarchCards() {
  marchGrid.innerHTML = defaultState
    .map(
      (march, index) => `
        <article class="march-card" data-index="${index}">
          <div class="march-card__head">
            <div>
              <p class="march-kicker">March ${index + 1}</p>
              <h3>Speed Build</h3>
            </div>
            <div class="card-summary">Target ${formatPercent((Number.parseFloat(targetSpeedInput.value) || 0) / 100)}</div>
          </div>

          <div class="hero-block">
            <div class="block-head">
              <h4>Primary Hero</h4>
              <label class="toggle">
                <input type="checkbox" data-field="primaryAwakened" ${march.primaryAwakened ? "checked" : ""}>
                <span>Awakened</span>
              </label>
            </div>
            <label class="field field--wide">
              <span>Primary Hero</span>
              <select data-field="primaryHero">${createHeroOptions(march.primaryHero)}</select>
            </label>
            <div class="skills-grid">
              ${renderSkillSelectors("primary", march.primarySkills)}
            </div>
          </div>

          <div class="hero-block">
            <div class="block-head">
              <h4>Secondary Hero</h4>
              <label class="toggle">
                <input type="checkbox" data-field="secondaryAwakened" ${march.secondaryAwakened ? "checked" : ""}>
                <span>Awakened</span>
              </label>
            </div>
            <label class="field field--wide">
              <span>Secondary Hero</span>
              <select data-field="secondaryHero">${createHeroOptions(march.secondaryHero)}</select>
            </label>
            <div class="skills-grid">
              ${renderSkillSelectors("secondary", march.secondarySkills)}
            </div>
          </div>

          <div class="march-fields march-fields--footer">
            <label class="field">
              <span>Talent Speed %</span>
              <div class="input-wrap">
                <input type="number" data-field="talentBonus" min="0" step="0.1" value="${march.talentBonus}" inputmode="decimal">
                <span class="suffix">%</span>
              </div>
            </label>

            <label class="field">
              <span>Artifact</span>
              <select data-field="artifact">${createArtifactOptions(march.artifact)}</select>
            </label>

            <label class="field">
              <span>Artifact Level</span>
              <select data-field="artifactLevel">${createLevelOptions(march.artifactLevel)}</select>
            </label>
          </div>

          <div class="march-meta" id="march-meta-${index}"></div>
        </article>
      `
    )
    .join("");
}

function getHeroByName(name) {
  return heroes.find((hero) => hero.name === name);
}

function getArtifactByName(name) {
  return artifacts.find((artifact) => artifact.name === name);
}

function getSkillBonus(skill, level) {
  return skill?.levels[level - 1] || 0;
}

function getHeroSpeedBreakdown(hero, skillLevels, awakenedEnabled) {
  if (!hero) {
    return {
      skillBonus: 0,
    };
  }

  const skillBonus = hero.skills.reduce((sum, skill, index) => {
    return sum + getSkillBonus(skill, Number(skillLevels[index]));
  }, 0);

  return {
    skillBonus,
  };
}

function getArtifactBonus(artifact, level) {
  return artifact?.levels[level - 1] || 0;
}

function formatPercent(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function formatSignedPercent(value) {
  const percent = (value * 100).toFixed(1);
  return `${value > 0 ? "+" : ""}${percent}%`;
}

function calculateMarch(march) {
  const primaryHero = getHeroByName(march.primaryHero);
  const secondaryHero = getHeroByName(march.secondaryHero);
  const artifact = getArtifactByName(march.artifact);

  const primaryBreakdown = getHeroSpeedBreakdown(primaryHero, march.primarySkills, march.primaryAwakened);
  const secondaryBreakdown = getHeroSpeedBreakdown(secondaryHero, march.secondarySkills, march.secondaryAwakened);
  const talentBonus = (Number.parseFloat(march.talentBonus) || 0) / 100;
  const artifactBonus = getArtifactBonus(artifact, Number(march.artifactLevel));
  const totalSpeed =
    primaryBreakdown.skillBonus +
    secondaryBreakdown.skillBonus +
    talentBonus +
    artifactBonus;

  return {
    primaryBreakdown,
    secondaryBreakdown,
    talentBonus,
    artifactBonus,
    totalSpeed,
  };
}

function getIndicator(difference) {
  if (Math.abs(difference) <= SYNC_TOLERANCE) {
    return "Synced";
  }

  return difference > 0 ? "Too Fast" : "Too Slow";
}

function updateResults() {
  const targetSpeed = (Number.parseFloat(targetSpeedInput.value) || 0) / 100;
  const calculations = defaultState.map((march) => calculateMarch(march));
  const syncedCount = calculations.filter((calc) => Math.abs(calc.totalSpeed - targetSpeed) <= SYNC_TOLERANCE).length;

  resultsBody.innerHTML = calculations
    .map((result, index) => {
      const difference = result.totalSpeed - targetSpeed;
      const indicator = getIndicator(difference);
      const rowClass = indicator === "Synced" ? "is-synced" : difference > 0 ? "is-fast" : "is-slow";

      return `
        <tr class="${rowClass}">
          <td>March ${index + 1}</td>
          <td>${formatPercent(result.totalSpeed)}</td>
          <td>${formatSignedPercent(difference)}</td>
          <td>${indicator}</td>
        </tr>
      `;
    })
    .join("");

  calculations.forEach((result, index) => {
    const difference = result.totalSpeed - targetSpeed;
    const indicator = getIndicator(difference);
    const metaNode = document.getElementById(`march-meta-${index}`);

    metaNode.innerHTML = `
      <span class="meta-pill">Primary Skills ${formatPercent(result.primaryBreakdown.skillBonus)}</span>
      <span class="meta-pill">Secondary Skills ${formatPercent(result.secondaryBreakdown.skillBonus)}</span>
      <span class="meta-pill">Talent ${formatPercent(result.talentBonus)}</span>
      <span class="meta-pill">Artifact ${formatPercent(result.artifactBonus)}</span>
      <span class="meta-pill ${indicator === "Synced" ? "meta-pill--synced" : ""}">${indicator} ${formatSignedPercent(difference)}</span>
    `;
  });

  if (syncedCount === MARCH_COUNT) {
    syncIndicator.textContent = "Perfect Sync";
    syncIndicator.className = "status-pill status-pill--synced";
    statusCopy.textContent = "All five marches match the target speed percentage.";
    return;
  }

  if (syncedCount > 0) {
    syncIndicator.textContent = `${syncedCount}/${MARCH_COUNT} Synced`;
    syncIndicator.className = "status-pill";
    statusCopy.textContent = "Some marches are on target. Adjust the remaining builds until all five are synced.";
    return;
  }

  syncIndicator.textContent = "Sync Watch";
  syncIndicator.className = "status-pill status-pill--idle";
  statusCopy.textContent = "No march is currently on target. Use the difference column to tune each build.";
}

function handleFieldChange(event) {
  const card = event.target.closest(".march-card");
  if (!card) {
    return;
  }

  const index = Number(card.dataset.index);
  const field = event.target.dataset.field;
  if (!field) {
    return;
  }

  if (field === "primarySkills" || field === "secondarySkills") {
    const skillIndex = Number(event.target.dataset.skillIndex);
    defaultState[index][field][skillIndex] = Number(event.target.value);
  } else {
    defaultState[index][field] = event.target.type === "checkbox" ? event.target.checked : event.target.value;
  }

  updateResults();
}

renderMarchCards();
marchGrid.addEventListener("input", handleFieldChange);
marchGrid.addEventListener("change", handleFieldChange);
targetSpeedInput.addEventListener("input", () => {
  renderMarchCards();
  updateResults();
});
updateResults();
