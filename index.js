const ROBLOX_DEEP_LINK = "roblox://placeId=126884695634066&launchData=%7B%22roomId%22%3A%202%7D";
const ROBLOX_WEB_FALLBACK_LINK = "https://www.roblox.com/games/126884695634066/";
const BOT_INVITE_LINK = "https://discord.com/oauth2/authorize?client_id=1364847027674021938&permissions=412854242512&scope=bot+applications.commands";

document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const mainHeadingElement = document.getElementById('main-heading');
    const redirectMessageElement = document.getElementById('redirect-message');
    const launchBtn = document.getElementById('launch-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const launchAgainBtn = document.getElementById('launch-again-btn');
    const goToWebsiteBtn = document.getElementById('go-to-website-btn'); 
    const addBotHeaderBtn = document.getElementById('add-bot-header-btn');

    let timeLeft = 5;
    let countdownInterval = null;

    const launchGame = () => {
        clearInterval(countdownInterval);
        
        mainHeadingElement.textContent = 'Launch Initiated';
        redirectMessageElement.innerHTML = `If the game doesn't open, you can try again or visit the official website.`;
        
        launchBtn.classList.add('hidden');
        cancelBtn.classList.add('hidden');

        launchAgainBtn.classList.remove('hidden');
        goToWebsiteBtn.classList.remove('hidden');

        window.location.href = ROBLOX_DEEP_LINK;

    };

    const cancelRedirect = () => {
        clearInterval(countdownInterval);
        mainHeadingElement.textContent = 'Redirect Canceled';
        redirectMessageElement.textContent = 'You can launch the game or visit the website directly.';
        
        launchBtn.classList.add('hidden');
        cancelBtn.classList.add('hidden');
        
        launchAgainBtn.classList.remove('hidden');
        goToWebsiteBtn.classList.remove('hidden');
    };

    const goToWebsite = () => {
        mainHeadingElement.textContent = 'Redirecting...';
        redirectMessageElement.textContent = 'Taking you to the Roblox website.';
        window.location.href = ROBLOX_WEB_FALLBACK_LINK;
    };
    
    const addBotToDiscord = () => {
        window.open(BOT_INVITE_LINK, '_blank');
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
    goToWebsiteBtn.addEventListener('click', goToWebsite);
    addBotHeaderBtn.addEventListener('click', addBotToDiscord);

    startCountdown();
});