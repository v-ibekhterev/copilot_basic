# Copy Instructions for v-ibekhterev/copilot_agile Repository

**Work Item Reference**: AB#11

## Overview
This document provides specific instructions for copying the Helicopter Landing Challenge game from the `v-ibekhterev/copilot_basic` repository to the `v-ibekhterev/copilot_agile` repository.

## Files to Copy (7 total files, ~22.2KB)

### Core Game Files (Required for functionality)
- ✅ `index.html` (987 bytes) - Main game interface
- ✅ `game.js` (8.9KB) - Complete game logic and physics
- ✅ `style.css` (1.7KB) - Styling and animations

### Documentation Files (Recommended)
- ✅ `README.md` (2.8KB) - Game documentation and setup
- ✅ `DEPLOYMENT.md` (3.2KB) - Deployment and hosting guide
- ✅ `FILE-LIST.md` (2.0KB) - Complete file inventory
- ✅ `verify-files.sh` (2.5KB) - Verification script

## Copy Process

### Option 1: Git Clone and Copy
```bash
# Clone the source repository
git clone https://github.com/v-ibekhterev/copilot_basic.git

# Navigate to your copilot_agile repository
cd /path/to/copilot_agile

# Copy all files
cp ../copilot_basic/index.html .
cp ../copilot_basic/game.js .
cp ../copilot_basic/style.css .
cp ../copilot_basic/README.md .
cp ../copilot_basic/DEPLOYMENT.md .
cp ../copilot_basic/FILE-LIST.md .
cp ../copilot_basic/verify-files.sh .
cp ../copilot_basic/COPY-TO-AGILE.md .

# Make verify script executable
chmod +x verify-files.sh

# Commit the changes
git add .
git commit -m "Add helicopter landing game from copilot_basic repository

AB#11 - Copy all game files and documentation to copilot_agile repository.

Includes:
- Complete helicopter landing game with physics and weather effects
- Comprehensive documentation and setup instructions
- Verification scripts and deployment guides
- All files verified and ready for hosting"

git push origin main
```

### Option 2: Download and Manual Copy
1. Download all files from the copilot_basic repository
2. Place them in the root directory of copilot_agile
3. Ensure all files are present and executable permissions are set for verify-files.sh

## Verification After Copy

Run these commands in the copilot_agile repository after copying:

```bash
# Verify all files are present and correct
./verify-files.sh

# Test the game locally
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Expected Directory Structure

```
copilot_agile/
├── index.html              # Main game interface
├── game.js                 # Game logic and physics
├── style.css               # Styling and animations
├── README.md               # Game documentation
├── DEPLOYMENT.md           # Deployment guide
├── FILE-LIST.md            # File inventory
├── verify-files.sh         # Verification script
└── COPY-TO-AGILE.md        # This guide
```

## Game Features

The copied game includes:
- **Realistic helicopter physics** with gravity and momentum
- **Dynamic weather system** (Clear, Snow, Rain) affecting controls
- **Fuel management** requiring strategic flying
- **Landing challenges** on mountain peaks
- **Scoring system** with progressive difficulty
- **Visual effects** and responsive UI

## Testing Checklist

After copying, verify:
- [ ] All 7-8 files are present
- [ ] Game loads without errors
- [ ] Start Game button works
- [ ] Helicopter responds to arrow keys
- [ ] Weather effects display correctly
- [ ] Landing mechanics function properly
- [ ] Score updates on successful landings

## Support

If you encounter issues after copying:
1. Run `./verify-files.sh` to check file integrity
2. Ensure JavaScript is enabled in your browser
3. Use HTTP server (not file://) for local testing
4. Check browser console for any error messages

---
**Reference**: Work Item AB#11  
**Source Repository**: https://github.com/v-ibekhterev/copilot_basic  
**Target Repository**: https://github.com/v-ibekhterev/copilot_agile