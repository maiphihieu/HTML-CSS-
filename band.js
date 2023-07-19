const buyBtns = document.querySelectorAll('.js-buy-tickets');
const modal = document.querySelector('.js-modal');
const modalclose = document.querySelector('.js-modal-close');
const modalcontainer = document.querySelector('.js-modal-container');
// hàm hiển thị modal mua vé (thêm class open vào modal)
function showBuyTickets() {
    modal.classList.add('open')
};
//hàm ẩn modal mua vé (gỡ bỏ class opem vào modal)
function hideBuytickets() {
    modal.classList.remove('open')
};

// lặp qua từng thẻ button và nghe click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
};

//nghe hành vi click vào button close
modalclose.addEventListener('click', hideBuytickets);
modal.addEventListener('click', hideBuytickets);
modalcontainer.addEventListener('click', function (event) {
    event.stopPropagation();
});
