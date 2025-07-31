const ROBLOX_DEEP_LINK = "roblox://placeId=126884695634066&launchData=%7B%22roomId%22%3A%202%7D";
const ROBLOX_WEB_FALLBACK_LINK = "https://www.roblox.com/games/126884695634066/";

document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const mainHeadingElement = document.getElementById('main-heading');
    const redirectMessageElement = document.getElementById('redirect-message');
    const launchBtn = document.getElementById('launch-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const launchAgainBtn = document.getElementById('launch-again-btn');

    let timeLeft = 5;
    let countdownInterval = null;

    const launchGame = () => {
        clearInterval(countdownInterval);
        mainHeadingElement.textContent = 'Launching...';
        redirectMessageElement.innerHTML = `Opening Roblox now. If nothing happens, you may need to install Roblox or <a href="${ROBLOX_WEB_FALLBACK_LINK}">join via the website</a>.`;
        launchBtn.classList.add('hidden');
        cancelBtn.classList.add('hidden');
        launchAgainBtn.classList.add('hidden');
        window.location.href = ROBLOX_DEEP_LINK;
        setTimeout(() => {
            window.location.href = ROBLOX_WEB_FALLBACK_LINK;
        }, 3000);
    };

    const cancelRedirect = () => {
        clearInterval(countdownInterval);
        mainHeadingElement.textContent = 'Redirect Canceled';
        redirectMessageElement.textContent = 'You can try launching the game again if you wish.';
        launchBtn.classList.add('hidden');
        cancelBtn.classList.add('hidden');
        launchAgainBtn.classList.remove('hidden');
    };

    const startCountdown = () => {
        countdownInterval = setInterval(() => {
            timeLeft--;
            countdownElement.textContent = timeLeft;
            if (timeLeft <= 0) {
                launchGame();
            }
        }, 1000);
    };

    launchBtn.addEventListener('click', launchGame);
    cancelBtn.addEventListener('click', cancelRedirect);
    launchAgainBtn.addEventListener('click', launchGame);

    startCountdown();
});