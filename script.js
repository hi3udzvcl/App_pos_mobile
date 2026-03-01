/* POS Container */
.pos-container {
    padding: 10px;
    background: #f8f9fa;
    min-height: calc(100vh - 125px); /* Trừ header và nav */
}

/* Categories - Cuộn ngang */
.categories {
    display: flex;
    overflow-x: auto;
    gap: 10px;
    padding-bottom: 15px;
    scrollbar-width: none; /* Ẩn scrollbar */
}
.categories::-webkit-scrollbar { display: none; }

.cat-item {
    white-space: nowrap;
    padding: 8px 20px;
    background: #fff;
    border-radius: 20px;
    font-size: 14px;
    border: 1px solid #ddd;
}
.cat-item.active {
    background: #2ecc71;
    color: white;
    border-color: #2ecc71;
}

/* Product Grid - 2 cột trên mobile */
.product-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
}

.product-card {
    background: white;
    border-radius: 15px;
    padding: 15px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0,0,0,0.02);
    transition: transform 0.1s;
}
.product-card:active { transform: scale(0.95); }

.img-placeholder {
    font-size: 40px;
    margin-bottom: 10px;
}
.p-name { display: block; font-weight: 600; font-size: 15px; }
.p-price { color: #2ecc71; font-weight: bold; }

/* Checkout Bar */
.checkout-bar {
    position: fixed;
    bottom: 75px; /* Nằm trên bottom-nav */
    left: 15px;
    right: 15px;
    background: #333;
    color: white;
    padding: 15px 20px;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.btn-pay {
    background: #2ecc71;
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    font-weight: bold;
}
