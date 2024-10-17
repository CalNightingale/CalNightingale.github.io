document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const width = card.offsetWidth;
        const height = card.offsetHeight;
        const perimeter = 2 * (width + height);
        const totalDuration = 0.4; // Total animation duration in seconds
        
        const topBottomDuration = (width / perimeter) * totalDuration;
        const leftRightDuration = (height / perimeter) * totalDuration;
        
        card.style.setProperty('--top-bottom-duration', `${topBottomDuration}s`);
        card.style.setProperty('--left-right-duration', `${leftRightDuration}s`);
        card.style.setProperty('--right-delay', `${topBottomDuration}s`);
        card.style.setProperty('--bottom-delay', `${topBottomDuration + leftRightDuration}s`);
        card.style.setProperty('--left-delay', `${topBottomDuration + leftRightDuration + topBottomDuration}s`);
    });
});
