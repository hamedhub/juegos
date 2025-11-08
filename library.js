// Games Library Database
const gamesDatabase = [
    // Action Games
    {
        id: 1,
        title: "Slither.io",
        category: "io",
        icon: "🐍",
        description: "El clásico juego de serpiente multijugador online",
        url: "https://slither.io",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        id: 2,
        title: "Agar.io",
        category: "io",
        icon: "⚫",
        description: "Crece comiendo células más pequeñas y evita las grandes",
        url: "https://agar.io",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
        id: 3,
        title: "Diep.io",
        category: "io",
        icon: "🔫",
        description: "Juego de tanques multijugador con mejoras",
        url: "https://diep.io",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
        id: 4,
        title: "Krunker.io",
        category: "io",
        icon: "🎯",
        description: "FPS multijugador en el navegador",
        url: "https://krunker.io",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },

    // Racing Games
    {
        id: 5,
        title: "3D Car Driver",
        category: "racing",
        icon: "🏎️",
        description: "Carreras 3D con gráficos realistas",
        url: "https://html5.gamedistribution.com/ccd7a902d8dc4e03820e8b462d6a19e1/?gd_sdk_referrer_url=https://gamedistribution.com/games/3d-car-driver",
        gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)"
    },
    {
        id: 6,
        title: "Moto X3M",
        category: "racing",
        icon: "🏍️",
        description: "Acrobacias extremas en moto",
        url: "https://html5.gamedistribution.com/rvvASMiM/067651a8c1ec469d8afc4c8ad8f78f36/?gd_sdk_referrer_url=https://gamedistribution.com/games/moto-x3m",
        gradient: "linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)"
    },

    // Puzzle Games
    {
        id: 7,
        title: "2048",
        category: "puzzle",
        icon: "🔢",
        description: "Combina números hasta llegar a 2048",
        url: "games/2048.html",
        gradient: "linear-gradient(135deg, #ebbba7 0%, #cfc7f8 100%)"
    },
    {
        id: 8,
        title: "Tetris",
        category: "puzzle",
        icon: "🟦",
        description: "El legendario juego de bloques",
        url: "games/tetris.html",
        gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
        id: 9,
        title: "Sudoku",
        category: "puzzle",
        icon: "🧩",
        description: "El clásico puzzle de lógica",
        url: "https://html5.gamedistribution.com/f1f8e0a8a37d4ac5bd7d54e3c1c7b3f3/?gd_sdk_referrer_url=https://gamedistribution.com/games/sudoku",
        gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    },
    {
        id: 10,
        title: "Cut the Rope",
        category: "puzzle",
        icon: "🍬",
        description: "Alimenta al monstruo cortando las cuerdas",
        url: "https://html5.gamedistribution.com/512e4ff4e4184d0ea08c9eb0cfda524e/?gd_sdk_referrer_url=https://gamedistribution.com/games/cut-the-rope",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    },

    // Sports Games
    {
        id: 11,
        title: "Basketball Stars",
        category: "sports",
        icon: "🏀",
        description: "Juego de baloncesto 1v1 multijugador",
        url: "https://html5.gamedistribution.com/e5a36f88ddba40fb8f5e3f3f7f3e5b3e/?gd_sdk_referrer_url=https://gamedistribution.com/games/basketball-stars",
        gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)"
    },
    {
        id: 12,
        title: "Soccer Skills",
        category: "sports",
        icon: "⚽",
        description: "Demuestra tus habilidades futbolísticas",
        url: "https://html5.gamedistribution.com/a1b2c3d4e5f6/?gd_sdk_referrer_url=https://gamedistribution.com/games/soccer-skills",
        gradient: "linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)"
    },
    {
        id: 13,
        title: "8 Ball Pool",
        category: "sports",
        icon: "🎱",
        description: "Billar en línea multijugador",
        url: "https://html5.gamedistribution.com/8ball/?gd_sdk_referrer_url=https://gamedistribution.com/games/8-ball-pool",
        gradient: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)"
    },

    // Classic Games
    {
        id: 14,
        title: "Pac-Man",
        category: "classic",
        icon: "👾",
        description: "El icónico juego de arcade",
        url: "https://pacman.now.sh",
        gradient: "linear-gradient(135deg, #ffd89b 0%, #19547b 100%)"
    },
    {
        id: 15,
        title: "Snake",
        category: "classic",
        icon: "🐍",
        description: "La clásica serpiente de Nokia",
        url: "games/snake.html",
        gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
        id: 16,
        title: "Space Invaders",
        category: "classic",
        icon: "👽",
        description: "Defiende la Tierra de invasores alienígenas",
        url: "https://html5.gamedistribution.com/spaceinvaders/?gd_sdk_referrer_url=https://gamedistribution.com/games/space-invaders",
        gradient: "linear-gradient(135deg, #0f0c29 0%, #302b63 100%, #24243e 100%)"
    },
    {
        id: 17,
        title: "Breakout",
        category: "classic",
        icon: "🧱",
        description: "Rompe todos los bloques con la pelota",
        url: "games/breakout.html",
        gradient: "linear-gradient(135deg, #eb3349 0%, #f45c43 100%)"
    },

    // Action & Adventure
    {
        id: 18,
        title: "Zombs Royale",
        category: "action",
        icon: "💀",
        description: "Battle Royale en 2D multijugador",
        url: "https://zombsroyale.io",
        gradient: "linear-gradient(135deg, #c21500 0%, #ffc500 100%)"
    },
    {
        id: 19,
        title: "Shell Shockers",
        category: "action",
        icon: "🥚",
        description: "FPS con huevos armados",
        url: "https://shellshock.io",
        gradient: "linear-gradient(135deg, #fcff9e 0%, #c67700 100%)"
    },
    {
        id: 20,
        title: "Venge.io",
        category: "action",
        icon: "🔫",
        description: "FPS multijugador con mapas únicos",
        url: "https://venge.io",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        id: 21,
        title: "1v1.LOL",
        category: "action",
        icon: "🏗️",
        description: "Construcción y combate estilo Fortnite",
        url: "https://1v1.lol",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
        id: 22,
        title: "Subway Surfers",
        category: "action",
        icon: "🏃",
        description: "Corre y salta por las vías del metro",
        url: "https://poki.com/en/g/subway-surfers",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },

    // More Puzzle Games
    {
        id: 23,
        title: "Candy Crush",
        category: "puzzle",
        icon: "🍭",
        description: "Combina dulces en este puzzle adictivo",
        url: "https://html5.gamedistribution.com/candycrush/?gd_sdk_referrer_url=https://gamedistribution.com/games/candy-crush",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
        id: 24,
        title: "Bubble Shooter",
        category: "puzzle",
        icon: "⚪",
        description: "Dispara burbujas para hacerlas estallar",
        url: "https://html5.gamedistribution.com/bubbleshooter/?gd_sdk_referrer_url=https://gamedistribution.com/games/bubble-shooter",
        gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
        id: 25,
        title: "Mahjong",
        category: "puzzle",
        icon: "🀄",
        description: "El clásico juego de fichas chino",
        url: "https://html5.gamedistribution.com/mahjong/?gd_sdk_referrer_url=https://gamedistribution.com/games/mahjong",
        gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    },

    // More IO Games
    {
        id: 26,
        title: "Paper.io 2",
        category: "io",
        icon: "📄",
        description: "Conquista territorio pintando el mapa",
        url: "https://paper-io.com",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    },
    {
        id: 27,
        title: "Surviv.io",
        category: "io",
        icon: "🎯",
        description: "Battle Royale 2D en tiempo real",
        url: "https://surviv.io",
        gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)"
    },
    {
        id: 28,
        title: "Wings.io",
        category: "io",
        icon: "✈️",
        description: "Combate aéreo multijugador",
        url: "https://wings.io",
        gradient: "linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)"
    },

    // Card & Board Games
    {
        id: 29,
        title: "Solitaire",
        category: "classic",
        icon: "🃏",
        description: "El clásico solitario de cartas",
        url: "https://html5.gamedistribution.com/solitaire/?gd_sdk_referrer_url=https://gamedistribution.com/games/solitaire",
        gradient: "linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)"
    },
    {
        id: 30,
        title: "Chess",
        category: "classic",
        icon: "♟️",
        description: "Ajedrez contra la computadora",
        url: "https://www.chess.com/play/computer",
        gradient: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)"
    },

    // Retro Games (Con EmulatorJS)
    {
        id: 31,
        title: "Super Castlevania IV",
        category: "retro",
        icon: "🧛",
        description: "Clásico de acción de SNES - Castillo de Drácula",
        url: "games/super-castlevania-iv.html",
        gradient: "linear-gradient(135deg, #434343 0%, #000000 100%)"
    },
    {
        id: 32,
        title: "Super Metroid",
        category: "retro",
        icon: "🚀",
        description: "Aventura épica de exploración en el planeta Zebes",
        url: "games/super-metroid.html",
        gradient: "linear-gradient(135deg, #4b79a1 0%, #283e51 100%)"
    },
    {
        id: 33,
        title: "Dr. Robotnik's Mean Bean Machine",
        category: "retro",
        icon: "🤖",
        description: "Puzzle adictivo estilo Puyo Puyo de Sega Genesis",
        url: "games/dr-robotnik-mean-bean.html",
        gradient: "linear-gradient(135deg, #eb3349 0%, #f45c43 100%)"
    }
];

// Global variables
let currentCategory = 'all';
let searchTerm = '';
let allGames = gamesDatabase;

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderGames();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');

    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        filterGames();
    });

    searchBtn.addEventListener('click', () => {
        searchTerm = searchInput.value.toLowerCase();
        filterGames();
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchTerm = e.target.value.toLowerCase();
            filterGames();
        }
    });

    // Category buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            filterGames();
        });
    });

    // Close modal on background click
    const modal = document.getElementById('gameModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeGame();
        }
    });

    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeGame();
        }
    });
}

// Filter games based on category and search
function filterGames() {
    let filtered = allGames;

    // Filter by category
    if (currentCategory !== 'all') {
        filtered = filtered.filter(game => game.category === currentCategory);
    }

    // Filter by search term
    if (searchTerm) {
        filtered = filtered.filter(game =>
            game.title.toLowerCase().includes(searchTerm) ||
            game.description.toLowerCase().includes(searchTerm) ||
            game.category.toLowerCase().includes(searchTerm)
        );
    }

    renderGames(filtered);
}

// Render games to the grid
function renderGames(games = allGames) {
    const gamesGrid = document.getElementById('gamesGrid');
    const noResults = document.getElementById('noResults');

    if (games.length === 0) {
        gamesGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';

    gamesGrid.innerHTML = games.map(game => `
        <div class="game-item" onclick="openGame('${game.url}', '${game.title}')">
            <div class="game-thumbnail" style="background: ${game.gradient}">
                <span>${game.icon}</span>
            </div>
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <span class="game-category">${getCategoryName(game.category)}</span>
                <p class="game-description">${game.description}</p>
            </div>
        </div>
    `).join('');
}

// Get category display name
function getCategoryName(category) {
    const categories = {
        'action': 'Acción',
        'puzzle': 'Puzzle',
        'sports': 'Deportes',
        'racing': 'Carreras',
        'io': 'IO Games',
        'classic': 'Clásico',
        'retro': 'Retro'
    };
    return categories[category] || category;
}

// Open game in modal
function openGame(url, title) {
    const modal = document.getElementById('gameModal');
    const gameFrame = document.getElementById('gameFrame');
    const modalTitle = document.getElementById('modalTitle');

    modalTitle.textContent = title;
    gameFrame.src = url;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close game modal
function closeGame() {
    const modal = document.getElementById('gameModal');
    const gameFrame = document.getElementById('gameFrame');

    modal.classList.remove('active');
    gameFrame.src = '';
    document.body.style.overflow = 'auto';
}

// Fullscreen game
function fullscreenGame() {
    const gameFrame = document.getElementById('gameFrame');

    if (gameFrame.requestFullscreen) {
        gameFrame.requestFullscreen();
    } else if (gameFrame.webkitRequestFullscreen) {
        gameFrame.webkitRequestFullscreen();
    } else if (gameFrame.msRequestFullscreen) {
        gameFrame.msRequestFullscreen();
    }
}

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
