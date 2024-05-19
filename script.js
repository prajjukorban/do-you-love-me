document.getElementById('no').addEventListener('click', function() {
    const button = document.getElementById('no');
    const container = document.querySelector('.btn-container');
    
    // Generate random position within the container
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    const randomX = Math.floor(Math.random() * (containerWidth - button.offsetWidth));
    const randomY = Math.floor(Math.random() * (containerHeight - button.offsetHeight));
    
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});


