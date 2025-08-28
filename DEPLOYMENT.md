# Deployment Guide for Helicopter Landing Game

## Copying to Another Repository

This guide provides instructions for copying all files from this repository to the `v-ibekhterev/copilot_agile` repository.

## Files to Copy

Ensure all the following files are copied to maintain full functionality:

### Core Game Files (Required)
- `index.html` - Main game page (987 bytes)
- `game.js` - Game logic and mechanics (8.9KB)
- `style.css` - Styling and animations (1.7KB)

### Documentation Files (Recommended)
- `README.md` - Comprehensive game documentation
- `DEPLOYMENT.md` - This deployment guide

## Copy Process

### Method 1: Manual File Copy
1. Download or clone this repository
2. Copy all files listed above to the target repository
3. Maintain the same directory structure (all files in root)
4. Commit and push to the target repository

### Method 2: Git-based Transfer
```bash
# Clone source repository
git clone https://github.com/v-ibekhterev/copilot_basic.git

# Navigate to target repository
cd path/to/copilot_agile

# Copy files (maintaining structure)
cp ../copilot_basic/index.html .
cp ../copilot_basic/game.js .
cp ../copilot_basic/style.css .
cp ../copilot_basic/README.md .
cp ../copilot_basic/DEPLOYMENT.md .

# Add and commit
git add .
git commit -m "Add helicopter landing game from copilot_basic repository"
git push origin main
```

## Post-Copy Verification

After copying, verify the game works correctly:

1. Open `index.html` in a web browser
2. Click "Start Game" button
3. Test helicopter controls with arrow keys
4. Verify game canvas displays properly
5. Check that weather effects appear
6. Test landing mechanics

## Directory Structure After Copy

```
copilot_agile/
├── index.html          # Game interface
├── game.js             # Game logic
├── style.css           # Styling
├── README.md           # Documentation
└── DEPLOYMENT.md       # This guide
```

## Hosting Options

The game can be hosted on any platform supporting static files:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Traditional web servers

No server-side processing or databases required.

## Troubleshooting

### Common Issues After Copy

1. **Blank Screen**: Ensure all three core files (HTML, JS, CSS) are present
2. **No Styling**: Check that `style.css` is in the same directory as `index.html`
3. **Game Not Loading**: Verify `game.js` is accessible and JavaScript is enabled
4. **CORS Errors**: Serve files via HTTP server, not file:// protocol

### Testing Commands

```bash
# Serve locally for testing
python3 -m http.server 8000
# or
npx serve .
# or
php -S localhost:8000
```

Then visit `http://localhost:8000` to test the game.

## File Integrity Check

Verify file sizes match expected values:
- `index.html`: ~987 bytes
- `game.js`: ~8.9KB  
- `style.css`: ~1.7KB

All files should be text-based and readable in any text editor.