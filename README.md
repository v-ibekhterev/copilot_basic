# Helicopter Landing Challenge Game

A browser-based helicopter landing game built with vanilla JavaScript, HTML5 Canvas, and CSS3.

## Game Description

Navigate a helicopter through various weather conditions and land safely on mountain landing zones. The game features realistic physics, fuel management, and dynamic weather effects including snow and rain.

## Features

- **Realistic Physics**: Gravity, air resistance, and momentum-based helicopter movement
- **Weather System**: Dynamic weather conditions (Clear, Snow, Rain) that affect helicopter control
- **Fuel Management**: Limited fuel requires strategic flying
- **Landing Challenges**: Precise landing required on designated mountain zones
- **Scoring System**: Points awarded for successful landings
- **Visual Effects**: Animated weather particles and responsive UI

## Game Controls

- **Arrow Up**: Thrust upward (consumes fuel)
- **Arrow Left**: Move left (consumes fuel)
- **Arrow Right**: Move right (consumes fuel)
- **Start Game**: Begin a new game session
- **Reset**: Reset the current game

## Files Structure

- `index.html` - Main game interface and HTML structure
- `game.js` - Core game logic, physics, and mechanics (8.9KB)
- `style.css` - Game styling, animations, and visual effects (1.7KB)
- `README.md` - This documentation file

## Setup Instructions

1. Clone or copy all files to your web server directory
2. Ensure all files are in the same directory:
   - index.html
   - game.js  
   - style.css
3. Open `index.html` in a web browser or serve via HTTP server
4. For local testing: `python3 -m http.server 8000` then visit `http://localhost:8000`

## Game Mechanics

### Helicopter Physics
- Gravity constantly pulls the helicopter down
- Thrust can counteract gravity but consumes fuel
- Air resistance gradually slows movement
- Landing speed must be controlled for safe landings

### Weather Effects
- **Clear**: Normal flying conditions
- **Snow**: Reduced control precision, visual snow effects
- **Rain**: Increased air resistance, visual rain effects

### Landing System
- Green landing zones on mountain peaks
- Safe landing requires slow descent speed
- Successful landings generate new terrain and weather
- Crashes end the game

## Technical Requirements

- Modern web browser with HTML5 Canvas support
- JavaScript enabled
- No external dependencies or frameworks required

## Browser Compatibility

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

All modern browsers with ES6+ support should work correctly.

## Development Notes

- Pure vanilla JavaScript implementation
- No build process required
- Responsive design for different screen sizes
- Modular code structure for easy modification

Ready for deployment to any web server or static hosting platform.