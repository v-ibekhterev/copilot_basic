// Game variables
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const fuelDisplay = document.getElementById('fuel');
const weatherDisplay = document.getElementById('weather');
const scoreDisplay = document.getElementById('score');
const weatherEffects = document.getElementById('weatherEffects');

// Game state
let gameRunning = false;
let animationId;

// Helicopter object
const helicopter = {
    x: 50,
    y: 30,
    width: 40,
    height: 20,
    vx: 0,
    vy: 0,
    fuel: 100,
    landed: false
};

// Mountains array
let mountains = [];

// Weather system
const weatherTypes = ['clear', 'wind', 'snow', 'rain'];
let currentWeather = 'clear';
let weatherStrength = 0;

// Game variables
let score = 0;
let keys = {};

// Initialize game
function init() {
    generateMountains();
    setRandomWeather();
    resetHelicopter();
    updateDisplay();
}

// Generate random mountains
function generateMountains() {
    mountains = [];
    const numMountains = 4 + Math.floor(Math.random() * 2);
    
    for (let i = 0; i < numMountains; i++) {
        // Ensure first mountain starts at least 200px from the left edge
        const baseX = 200 + (i * (canvas.width - 200) / numMountains);
        const x = baseX + (Math.random() - 0.5) * 50;
        const height = 80 + Math.random() * 150;
        const width = 60 + Math.random() * 40;
        
        mountains.push({
            x: x - width / 2,
            y: canvas.height - height,
            width: width,
            height: height,
            landingZone: {
                x: x - 25,
                y: canvas.height - height,
                width: 50,
                height: 5
            }
        });
    }
}

// Set random weather
function setRandomWeather() {
    currentWeather = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
    weatherStrength = Math.random() * 2 + 0.5;
    weatherDisplay.textContent = currentWeather.charAt(0).toUpperCase() + currentWeather.slice(1);
    
    // Update visual weather effects
    updateWeatherEffects();
}

// Update weather effects
function updateWeatherEffects() {
    weatherEffects.innerHTML = '';
    
    if (currentWeather === 'snow') {
        for (let i = 0; i < 20; i++) {
            createWeatherParticle('❄', 'snow');
        }
    } else if (currentWeather === 'rain') {
        for (let i = 0; i < 30; i++) {
            createWeatherParticle('|', 'rain');
        }
    }
}

// Create weather particle
function createWeatherParticle(symbol, className) {
    const particle = document.createElement('div');
    particle.textContent = symbol;
    particle.className = className;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 3 + 's';
    particle.style.animationDuration = (2 + Math.random() * 3) + 's';
    weatherEffects.appendChild(particle);
}

// Reset helicopter
function resetHelicopter() {
    helicopter.x = 50;
    helicopter.y = 30;
    helicopter.vx = 0;
    helicopter.vy = 0;
    helicopter.fuel = 100;
    helicopter.landed = false;
}

// Update display
function updateDisplay() {
    fuelDisplay.textContent = Math.max(0, Math.floor(helicopter.fuel));
    scoreDisplay.textContent = score;
}

// Handle input
document.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});

document.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

// Update helicopter physics
function updateHelicopter() {
    if (!gameRunning) return;
    
    // Gravity
    helicopter.vy += 0.1;
    
    // Controls (only if fuel available)
    if (helicopter.fuel > 0) {
        if (keys['ArrowUp']) {
            helicopter.vy -= 0.4;
            helicopter.fuel -= 0.3;
        }
        if (keys['ArrowLeft']) {
            helicopter.vx -= 0.2;
            helicopter.fuel -= 0.1;
        }
        if (keys['ArrowRight']) {
            helicopter.vx += 0.2;
            helicopter.fuel -= 0.1;
        }
    }
    
    // Weather effects
    applyWeatherEffects();
    
    // Air resistance
    helicopter.vx *= 0.98;
    helicopter.vy *= 0.99;
    
    // Update position
    helicopter.x += helicopter.vx;
    helicopter.y += helicopter.vy;
    
    // Boundary checks
    if (helicopter.x < 0) helicopter.x = 0;
    if (helicopter.x > canvas.width - helicopter.width) helicopter.x = canvas.width - helicopter.width;
    if (helicopter.y < 0) helicopter.y = 0;
    
    // Ground collision
    if (helicopter.y > canvas.height - helicopter.height) {
        helicopter.y = canvas.height - helicopter.height;
        helicopter.vy = 0;
    }
    
    // Check mountain collisions and landing
    checkMountainCollisions();
}

// Apply weather effects
function applyWeatherEffects() {
    switch (currentWeather) {
        case 'wind':
            helicopter.vx += (Math.random() - 0.5) * weatherStrength * 0.5;
            break;
        case 'snow':
            helicopter.vy += weatherStrength * 0.1;
            helicopter.vx += (Math.random() - 0.5) * weatherStrength * 0.3;
            break;
        case 'rain':
            helicopter.vy += weatherStrength * 0.15;
            break;
    }
}

// Check mountain collisions
function checkMountainCollisions() {
    for (let mountain of mountains) {
        // Check if helicopter is in landing zone
        const landingZone = mountain.landingZone;
        if (helicopter.x + helicopter.width > landingZone.x &&
            helicopter.x < landingZone.x + landingZone.width &&
            helicopter.y + helicopter.height >= landingZone.y &&
            helicopter.y + helicopter.height <= landingZone.y + 10) {
            
            // Check landing speed
            if (Math.abs(helicopter.vx) < 2 && Math.abs(helicopter.vy) < 3) {
                // Successful landing
                helicopter.landed = true;
                helicopter.vy = 0;
                helicopter.vx = 0;
                score += 100;
                
                // Generate new mountains and weather after landing
                setTimeout(() => {
                    generateMountains();
                    setRandomWeather();
                    resetHelicopter();
                    helicopter.landed = false;
                }, 1500);
            } else {
                // Crash landing
                gameOver('Crashed! Landing too fast!');
            }
        }
        
        // Check mountain collision (not landing zone)
        if (helicopter.x + helicopter.width > mountain.x &&
            helicopter.x < mountain.x + mountain.width &&
            helicopter.y + helicopter.height > mountain.y + 5) {
            
            gameOver('Crashed into mountain!');
        }
    }
}

// Game over
function gameOver(reason) {
    gameRunning = false;
    alert(reason + ' Final Score: ' + score);
    resetGame();
}

// Draw everything
function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw mountains
    ctx.fillStyle = '#8B4513';
    for (let mountain of mountains) {
        ctx.fillRect(mountain.x, mountain.y, mountain.width, mountain.height);
        
        // Draw landing zone
        ctx.fillStyle = '#32CD32';
        const lz = mountain.landingZone;
        ctx.fillRect(lz.x, lz.y, lz.width, lz.height);
        ctx.fillStyle = '#8B4513';
    }
    
    // Draw helicopter
    ctx.fillStyle = helicopter.landed ? '#32CD32' : '#FF6B6B';
    ctx.fillRect(helicopter.x, helicopter.y, helicopter.width, helicopter.height);
    
    // Draw rotor
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(helicopter.x - 5, helicopter.y + 5);
    ctx.lineTo(helicopter.x + helicopter.width + 5, helicopter.y + 5);
    ctx.stroke();
    
    // Draw fuel bar
    const fuelBarWidth = (helicopter.fuel / 100) * helicopter.width;
    ctx.fillStyle = helicopter.fuel > 30 ? '#32CD32' : '#FF6B6B';
    ctx.fillRect(helicopter.x, helicopter.y - 10, fuelBarWidth, 5);
    
    // Draw game over if out of fuel
    if (helicopter.fuel <= 0 && gameRunning) {
        gameOver('Out of fuel!');
    }
}

// Game loop
function gameLoop() {
    updateHelicopter();
    draw();
    updateDisplay();
    
    if (gameRunning) {
        animationId = requestAnimationFrame(gameLoop);
    }
}

// Start game
function startGame() {
    if (!gameRunning) {
        gameRunning = true;
        startBtn.disabled = true;
        resetBtn.disabled = false;
        gameLoop();
    }
}

// Reset game
function resetGame() {
    gameRunning = false;
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
    score = 0;
    init();
    startBtn.disabled = false;
    resetBtn.disabled = true;
}

// Event listeners
startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);

// Initialize game on load
init();