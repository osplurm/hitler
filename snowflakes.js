document.addEventListener('DOMContentLoaded', () => {
    const snowflakesContainer = document.querySelector('.snowflakes');
    const numberOfSnowflakes = 50;

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        const size = Math.random() * 12 + 2 + 'px';
        snowflake.style.width = size;
        snowflake.style.height = size;
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 20 + 2 + 's';

        snowflakesContainer.appendChild(snowflake);
    }
});