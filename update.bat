@echo off
echo =======================================
echo     Auto-updating GitHub Repository
echo =======================================

echo.
echo [1/3] Staging all changes...
git add .

echo.
echo [2/3] Committing changes...
:: Use the current date and time as the commit message
git commit -m "Auto update: %date% %time%"

echo.
echo [3/3] Pushing to GitHub...
git push origin main

echo.
echo =======================================
echo          Update Complete!
echo =======================================
pause
