#!/bin/bash

# Helicopter Game File Verification Script
# Use this script to verify all required files are present and correctly sized

echo "=== Helicopter Landing Game - File Verification ==="
echo

# Check if we're in the right directory
if [[ ! -f "index.html" ]]; then
    echo "❌ Error: index.html not found. Make sure you're in the correct directory."
    exit 1
fi

# Define expected files and approximate sizes
declare -A expected_files=(
    ["index.html"]="987"
    ["game.js"]="8800"
    ["style.css"]="1700"
    ["README.md"]="2800"
    ["DEPLOYMENT.md"]="2900"
)

echo "Checking required files:"
echo

all_good=true

for file in "${!expected_files[@]}"; do
    if [[ -f "$file" ]]; then
        size=$(stat -c%s "$file" 2>/dev/null || stat -f%z "$file" 2>/dev/null)
        expected=${expected_files[$file]}
        
        # Allow 20% variance in file size
        min_size=$((expected * 80 / 100))
        max_size=$((expected * 120 / 100))
        
        if [[ $size -ge $min_size && $size -le $max_size ]]; then
            echo "✅ $file ($size bytes) - OK"
        else
            echo "⚠️  $file ($size bytes) - Size unexpected (expected ~$expected bytes)"
        fi
    else
        echo "❌ $file - MISSING"
        all_good=false
    fi
done

echo

# Check file content basics
if [[ -f "index.html" ]]; then
    if grep -q "Helicopter Landing Challenge" "index.html"; then
        echo "✅ index.html contains expected game title"
    else
        echo "⚠️  index.html may be corrupted or incorrect"
    fi
fi

if [[ -f "game.js" ]]; then
    if grep -q "function updateHelicopter" "game.js"; then
        echo "✅ game.js contains expected game functions"
    else
        echo "⚠️  game.js may be corrupted or incorrect"
    fi
fi

if [[ -f "style.css" ]]; then
    if grep -q "helicopter" "style.css" || grep -q "game-container" "style.css"; then
        echo "✅ style.css contains expected game styles"
    else
        echo "⚠️  style.css may be corrupted or incorrect"
    fi
fi

echo

if [[ "$all_good" == true ]]; then
    echo "🎉 All files verified! The helicopter game should work correctly."
    echo
    echo "To test the game:"
    echo "  1. Start a local server: python3 -m http.server 8000"
    echo "  2. Open browser to: http://localhost:8000"
    echo "  3. Click 'Start Game' and test with arrow keys"
else
    echo "⚠️  Some files are missing or unexpected. Please verify the copy process."
fi

echo
echo "=== Verification Complete ==="