// 1. Selecteer de button waarmee ik de artikelen op datum sorteer
let sorteerButton = document.querySelector('.sort-button');

// 2. Wacht tot iemand op die button klikt
sorteerButton.addEventListener('click', function () {
    // 3. Sorteer de artikelen op datum (nieuwste eerst) met datetime attribute
    document.querySelector('.news-cards').classList.toggle('sorted-on-date');
    sorteerButton.classList.toggle('sorted');
});
