// Hiệu ứng khi nhấn vào các mục menu dưới
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

// Xử lý sự kiện rung nhẹ khi chạm (nếu trình duyệt hỗ trợ)
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (navigator.vibrate) {
            navigator.vibrate(10); // Rung 10ms cảm giác như bấm nút thật
        }
    });
});