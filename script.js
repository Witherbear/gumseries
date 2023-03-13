// Smooth scroll to anchor links
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

// Toggle mobile menu
$('.mobile-menu-icon').on('click', function() {
    $('.mobile-menu').slideToggle();
});

// Carousel
$('.carousel').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    pauseOnHover: false
});

// Game details modal
$('.game a').on('click', function(event) {
    event.preventDefault();
    var gameTitle = $(this).siblings('h3').text();
    var gameDescription = $(this).siblings('p').text();
    var gameImage = $(this).siblings('img').attr('src');
    var gameModal = `
        <div class="game-modal">
            <div class="game-modal-content">
                <span class="game-modal-close">&times;</span>
                <img src="${gameImage}" alt="${gameTitle}">
                <h2>${gameTitle}</h2>
                <p>${gameDescription}</p>
            </div>
        </div>
    `;
    $('body').append(gameModal);
});

// Close game details modal
$(document).on('click', '.game-modal-close', function() {
    $('.game-modal').remove();
});
