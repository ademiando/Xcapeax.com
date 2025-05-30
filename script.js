const mountainData = [
  {
    name: "Everest",
    region: "Nepal / Tibet",
    status: "Closed",
    elevation: "8,848 m",
    weather: "-35°C Windy",
    image: "mountain-image/everest.jpg",
    link: "everest"
  },
  {
    name: "K2",
    region: "Pakistan / China",
    status: "Closed",
    elevation: "8,611 m",
    weather: "-40°C Snow",
    image: "mountain-image/k2.jpg",
    link: "k2"
  },
  {
    name: "Kangchenjunga",
    region: "Nepal / India",
    status: "Closed",
    elevation: "8,586 m",
    weather: "-30°C Cloudy",
    image: "mountain-image/kangchenjunga.jpg",
    link: "kangchenjunga"
  },
  {
    name: "Lhotse",
    region: "Nepal / Tibet",
    status: "Open",
    elevation: "8,516 m",
    weather: "-28°C Sunny",
    image: "mountain-image/lhotse.jpg",
    link: "lhotse"
  },
  {
    name: "Makalu",
    region: "Nepal / Tibet",
    status: "Closed",
    elevation: "8,485 m",
    weather: "-31°C Foggy",
    image: "mountain-image/makalu.jpg",
    link: "makalu"
  },
  {
    name: "Cho Oyu",
    region: "Nepal / Tibet",
    status: "Open",
    elevation: "8,188 m",
    weather: "-25°C Clear",
    image: "mountain-image/cho-oyu.jpg",
    link: "cho-oyu"
  },
  {
    name: "Dhaulagiri I",
    region: "Nepal",
    status: "Open",
    elevation: "8,167 m",
    weather: "-23°C Sunny",
    image: "mountain-image/dhaulagiri.jpg",
    link: "dhaulagiri"
  },
  {
    name: "Manaslu",
    region: "Nepal",
    status: "Closed",
    elevation: "8,163 m",
    weather: "-26°C Snow",
    image: "mountain-image/manaslu.jpg",
    link: "manaslu"
  },
  {
    name: "Nanga Parbat",
    region: "Pakistan",
    status: "Open",
    elevation: "8,126 m",
    weather: "-22°C Cloudy",
    image: "mountain-image/nanga-parbat.jpg",
    link: "nanga-parbat"
  },
  {
    name: "Annapurna I",
    region: "Nepal",
    status: "Closed",
    elevation: "8,091 m",
    weather: "-29°C Windy",
    image: "mountain-image/annapurna.jpg",
    link: "annapurna"
  }
];

let loaded = 0;
const batch = 4;

function renderMountains() {
  const container = document.getElementById("mountainContainer");
  const slice = mountainData.slice(loaded, loaded + batch);

  slice.forEach((m) => {
    const card = document.createElement("div");
    card.className = "mountain-card";
    card.onclick = () => window.location.href = `https://montamap.com/${m.link}`;
    card.innerHTML = `
      <img src="${m.image}" alt="${m.name}" class="mountain-image" />
      <div class="gradient-overlay"></div>
      <div class="mountain-info">
        <div class="mountain-name">${m.name}</div>
        <div class="mountain-details">
          ${m.region}<br />
          <span class="${m.status === 'Open' ? 'status-open' : 'status-closed'}">Status: ${m.status}</span><br />
          Elevation: ${m.elevation}<br />
          Weather: ${m.weather}
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  loaded += batch;

  if (loaded >= mountainData.length) {
    document.getElementById("loadMoreBtn").style.display = "none";
  }
}

document.getElementById("loadMoreBtn").addEventListener("click", renderMountains);

// Initial load
renderMountains();