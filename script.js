/* ============================================================
   شاورما عرب - Premium Restaurant Website Script
   ============================================================ */

// ─── Menu Data ───
const menuItems = [
    // شاورما
    { id: 1, name: 'ساندويش شاورما عادي', category: 'shawarma', categoryName: 'شاورما', price: 2, shawarmaOptions: true },
    { id: 2, name: 'ساندويش شاورما سوبر', category: 'shawarma', categoryName: 'شاورما', price: 2, shawarmaOptions: true },
    { id: 3, name: 'ساندويش شاورما دبل', category: 'shawarma', categoryName: 'شاورما', price: 2, shawarmaOptions: true },
    { id: 4, name: 'وجبة شاورما عادي', category: 'shawarma', categoryName: 'شاورما', price: 2, shawarmaOptions: true },
    { id: 5, name: 'وجبة شاورما سوبر', category: 'shawarma', categoryName: 'شاورما', price: 2, shawarmaOptions: true },
    { id: 6, name: 'وجبة شاورما دبل', category: 'shawarma', categoryName: 'شاورما', price: 2, shawarmaOptions: true },
    { id: 7, name: 'وجبة شاورما ايطالي', category: 'shawarma', categoryName: 'شاورما', price: 2, shawarmaOptions: true },
    { id: 8, name: 'سدر شاورما خمس أشخاص', category: 'shawarma', categoryName: 'شاورما', price: 2 },
    { id: 9, name: 'سدر شاورما عشر أشخاص', category: 'shawarma', categoryName: 'شاورما', price: 2 },
    // بروستد
    { id: 10, name: 'وجبة بروستد', category: 'broasted', categoryName: 'بروستد', price: 2, hasOption: true },
    { id: 11, name: 'وجبة كرسبي', category: 'broasted', categoryName: 'بروستد', price: 2, hasOption: true },
    { id: 12, name: 'وجبة بروستد مع رز', category: 'broasted', categoryName: 'بروستد', price: 2, hasOption: true },
    // فروج
    { id: 13, name: 'جاجة فروج', category: 'froj', categoryName: 'فروج', price: 2 },
    { id: 14, name: 'نصف جاجة', category: 'froj', categoryName: 'فروج', price: 2 },
    { id: 15, name: 'جاجة فروج مع رز', category: 'froj', categoryName: 'فروج', price: 2 },
    // سناكات
    { id: 16, name: 'ساندويش زنجر', category: 'snacks', categoryName: 'سناكات', price: 2, hasOption: true },
    { id: 17, name: 'وجبة زنجر', category: 'snacks', categoryName: 'سناكات', price: 2, hasOption: true },
    { id: 18, name: 'مايتي زنجر', category: 'snacks', categoryName: 'سناكات', price: 2, hasOption: true },
    { id: 19, name: 'برغر لحمة', category: 'snacks', categoryName: 'سناكات', price: 2 },
    // سلطات
    { id: 20, name: 'كولسلو', category: 'salads', categoryName: 'سلطات', price: 2 },
    { id: 21, name: 'سلطة سيزر', category: 'salads', categoryName: 'سلطات', price: 2 },
    { id: 22, name: 'سلطة شمندر', category: 'salads', categoryName: 'سلطات', price: 2 },
    { id: 23, name: 'سلطة يونانية', category: 'salads', categoryName: 'سلطات', price: 2 },
    { id: 24, name: 'فتوش', category: 'salads', categoryName: 'سلطات', price: 2 },
    { id: 25, name: 'سلطة جرجير', category: 'salads', categoryName: 'سلطات', price: 2 },
    { id: 26, name: 'سلطة معكرونة', category: 'salads', categoryName: 'سلطات', price: 2 },
    // مقبلات وإضافات
    { id: 27, name: 'مايونيز حلو', category: 'sides', categoryName: 'مقبلات وإضافات', price: 2 },
    { id: 28, name: 'مايونيز حار', category: 'sides', categoryName: 'مقبلات وإضافات', price: 2 },
    { id: 29, name: 'جبنة', category: 'sides', categoryName: 'مقبلات وإضافات', price: 2 },
    { id: 30, name: 'رز', category: 'sides', categoryName: 'مقبلات وإضافات', price: 2 },
    { id: 31, name: 'مخلل', category: 'sides', categoryName: 'مقبلات وإضافات', price: 2 },
    // عصائر
    { id: 32, name: 'بيبسي', category: 'drinks', categoryName: 'عصائر', price: 2 },
    { id: 33, name: 'مياه', category: 'drinks', categoryName: 'عصائر', price: 2 },
    { id: 34, name: 'عصير', category: 'drinks', categoryName: 'عصائر', price: 2 },
];

const WHATSAPP_NUMBER = '962788496859';
const WHATSAPP_DISPLAY = '0788496859';

// ─── State ───
let cart = JSON.parse(localStorage.getItem('shawarmaArabCart')) || [];
let currentFilter = 'shawarma';

// ─── DOM Ready ───
document.addEventListener('DOMContentLoaded', () => {
    initLoadingScreen();
    initNavbar();
    initMobileNav();
    initHeroParticles();
    renderMenu();
    initCategoryCards();
    initMenuTabs();
    initSearch();
    initFAQ();
    renderCart();
    initCheckout();
    initBackToTop();
    initScrollReveal();
    initStatsCounter();
});

// ─── Loading Screen ───
function initLoadingScreen() {
    const ls = document.getElementById('loading-screen');
    window.addEventListener('load', () => {
        setTimeout(() => { ls.classList.add('hidden'); }, 800);
    });
    setTimeout(() => { ls.classList.add('hidden'); }, 3000);
}

// ─── Navbar ───
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
        updateActiveNav(sections, links);
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('nav-menu').classList.remove('active');
            document.getElementById('nav-toggle').classList.remove('active');
        });
    });
}

function updateActiveNav(sections, links) {
    let current = '';
    sections.forEach(s => {
        const top = s.offsetTop - 120;
        if (window.scrollY >= top) current = s.getAttribute('id');
    });
    links.forEach(l => {
        l.classList.remove('active');
        if (l.getAttribute('href') === '#' + current) l.classList.add('active');
    });
}

// ─── Mobile Nav ───
function initMobileNav() {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
    });
    document.addEventListener('click', e => {
        if (!menu.contains(e.target) && !toggle.contains(e.target)) {
            toggle.classList.remove('active');
            menu.classList.remove('active');
        }
    });
}

// ─── Hero Particles ───
function initHeroParticles() {
    const container = document.getElementById('hero-particles');
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.classList.add('hero-particle');
        const size = Math.random() * 12 + 4;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (Math.random() * 10 + 8) + 's';
        p.style.animationDelay = (Math.random() * 10) + 's';
        container.appendChild(p);
    }
}

// ─── Render Menu ───
function renderMenu(filter = 'shawarma') {
    const grid = document.getElementById('menu-grid');
    const items = filter === 'all' ? menuItems : menuItems.filter(i => i.category === filter);

    grid.innerHTML = '';
    items.forEach((item, idx) => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.style.animationDelay = (idx * 0.05) + 's';
        card.setAttribute('data-category', item.category);

        let optionsHTML = '';
        if (item.hasOption) {
            optionsHTML = `
                <div class="product-options broasted-options" data-item-id="${item.id}">
                    <div class="option-chip required selected" data-option="حلو">حلو</div>
                    <div class="option-chip required" data-option="حار">حار</div>
                </div>`;
        }
        if (item.shawarmaOptions) {
            optionsHTML = `
                <div class="product-options shawarma-options" data-item-id="${item.id}">
                    <div class="option-chip" data-option="اضافة دبس رمان">دبس رمان</div>
                    <div class="option-chip" data-option="اضافة جبنة">جبنة</div>
                </div>`;
        }

        card.innerHTML = `
            <div class="product-card-image">
                <img src="assets/logo.png" alt="${item.name}" loading="lazy">
                <span class="product-badge">${item.categoryName}</span>
            </div>
            <div class="product-card-body">
                <h3 class="product-card-name">${item.name}</h3>
                <p class="product-card-category">${item.categoryName}</p>
                <p class="product-card-price">${item.price} د.أ</p>
                ${optionsHTML}
                <div class="product-qty-row">
                    <span class="qty-label">الكمية:</span>
                    <div class="qty-controls">
                        <button class="qty-btn qty-minus" data-id="${item.id}">-</button>
                        <span class="qty-value" id="qty-${item.id}">1</span>
                        <button class="qty-btn qty-plus" data-id="${item.id}">+</button>
                    </div>
                </div>
                <div class="product-card-actions">
                    <button class="btn-whatsapp-order" data-id="${item.id}" title="اطلب عبر واتساب">
                        <i class="fab fa-whatsapp"></i>
                        اطلب
                    </button>
                    <button class="btn-add-cart" data-id="${item.id}">
                        <i class="fas fa-cart-plus"></i>
                        أضف للسلة
                    </button>
                </div>
            </div>`;
        grid.appendChild(card);
    });

    // Bind events
    grid.querySelectorAll('.qty-minus').forEach(b => b.addEventListener('click', () => changeQty(b.dataset.id, -1)));
    grid.querySelectorAll('.qty-plus').forEach(b => b.addEventListener('click', () => changeQty(b.dataset.id, 1)));
    grid.querySelectorAll('.btn-add-cart').forEach(b => b.addEventListener('click', () => addToCart(b.dataset.id)));
    grid.querySelectorAll('.btn-whatsapp-order').forEach(b => b.addEventListener('click', () => whatsappSingleOrder(b.dataset.id)));

    // Option radios - toggle behavior
    grid.querySelectorAll('.option-radio').forEach(label => {
        label.addEventListener('click', () => {
            const id = label.dataset.itemId;
            if (label.classList.contains('selected')) {
                label.classList.remove('selected');
                label.querySelector('input').checked = false;
            } else {
                grid.querySelectorAll(`.option-radio[data-item-id="${id}"]`).forEach(l => {
                    l.classList.remove('selected');
                    l.querySelector('input').checked = false;
                });
                label.classList.add('selected');
                label.querySelector('input').checked = true;
            }
        });
    });

    // Option chips - toggle behavior
    grid.querySelectorAll('.option-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const container = chip.parentElement;
            if (chip.classList.contains('required')) {
                // Required chips (broasted/zinger): can't deselect, only switch
                if (!chip.classList.contains('selected')) {
                    container.querySelectorAll('.option-chip').forEach(c => c.classList.remove('selected'));
                    chip.classList.add('selected');
                }
            } else {
                // Optional chips (shawarma): can toggle on/off
                chip.classList.toggle('selected');
            }
        });
    });
}

function getSelectedOption(itemId) {
    // Check radio options (legacy)
    const radio = document.querySelector(`.option-radio.selected[data-item-id="${itemId}"]`);
    if (radio) return radio.dataset.option;

    // Check chip options (broasted required + shawarma optional)
    const container = document.querySelector(`.product-options[data-item-id="${itemId}"]`);
    if (container) {
        const selected = container.querySelectorAll('.option-chip.selected');
        if (selected.length === 0) return null;
        return Array.from(selected).map(c => c.dataset.option).join(' + ');
    }

    return null;
}

// ─── Quantity Controls ───
function changeQty(itemId, delta) {
    const el = document.getElementById('qty-' + itemId);
    let val = parseInt(el.textContent) + delta;
    if (val < 1) val = 1;
    if (val > 99) val = 99;
    el.textContent = val;
}

function getQty(itemId) {
    const el = document.getElementById('qty-' + itemId);
    return el ? parseInt(el.textContent) : 1;
}

// ─── Category Cards ───
function initCategoryCards() {
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const cat = card.dataset.category;
            currentFilter = cat;
            document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            renderMenu(cat);
            // Update tabs
            document.querySelectorAll('.menu-tab').forEach(t => {
                t.classList.toggle('active', t.dataset.filter === cat);
            });
            document.getElementById('menu').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

// ─── Menu Tabs ───
function initMenuTabs() {
    document.querySelectorAll('.menu-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const filter = tab.dataset.filter;
            currentFilter = filter;
            document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderMenu(filter);
            // Update category cards
            document.querySelectorAll('.category-card').forEach(c => {
                c.classList.toggle('active', c.dataset.category === filter);
            });
        });
    });
}

// ─── Add to Cart ───
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === parseInt(itemId));
    if (!item) return;

    const qty = getQty(itemId);
    const option = getSelectedOption(itemId);
    const key = itemId + (option ? '-' + option : '');

    const existing = cart.find(c => c.key === key);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({
            key: key,
            id: item.id,
            name: item.name,
            price: item.price,
            category: item.categoryName,
            option: option,
            qty: qty
        });
    }

    saveCart();
    renderCart();
    updateCartCount();

    // Button animation
    const btn = document.querySelector(`.btn-add-cart[data-id="${itemId}"]`);
    if (btn) {
        btn.classList.add('added');
        btn.innerHTML = '<i class="fas fa-check"></i> تمت الإضافة';
        setTimeout(() => {
            btn.classList.remove('added');
            btn.innerHTML = '<i class="fas fa-cart-plus"></i> أضف للسلة';
        }, 1500);
    }

    // Reset quantity
    const qtyEl = document.getElementById('qty-' + itemId);
    if (qtyEl) qtyEl.textContent = '1';

    // Reset option chips (shawarma + broasted)
    const optContainer = document.querySelector(`.product-options[data-item-id="${itemId}"]`);
    if (optContainer) {
        optContainer.querySelectorAll('.option-chip').forEach(c => c.classList.remove('selected'));
        // Re-select default for required (broasted) chips
        const defaultChip = optContainer.querySelector('.option-chip.required');
        if (defaultChip) defaultChip.classList.add('selected');
    }
}

// ─── Cart ───
function saveCart() {
    localStorage.setItem('shawarmaArabCart', JSON.stringify(cart));
}

function renderCart() {
    const container = document.getElementById('cart-items');
    const summary = document.getElementById('cart-summary');

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-cart"></i>
                <p>سلتك فارغة</p>
                <a href="#menu" class="btn-primary">أضف منتجات</a>
            </div>`;
        summary.style.display = 'none';
        return;
    }

    summary.style.display = 'block';

    let html = '';
    cart.forEach((item, idx) => {
        const optionText = item.option ? `<div class="cart-item-option">${item.option}</div>` : '';
        html += `
            <div class="cart-item" style="animation-delay: ${idx * 0.05}s">
                <img src="assets/logo.png" alt="${item.name}" class="cart-item-image" loading="lazy">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    ${optionText}
                    <div class="cart-item-price">${item.price} د.أ × ${item.qty} = ${item.price * item.qty} د.أ</div>
                </div>
                <div class="cart-item-qty">
                    <button class="qty-btn cart-qty-minus" data-key="${item.key}">-</button>
                    <span class="qty-value">${item.qty}</span>
                    <button class="qty-btn cart-qty-plus" data-key="${item.key}">+</button>
                </div>
                <button class="cart-item-remove" data-key="${item.key}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>`;
    });
    container.innerHTML = html;

    // Totals
    const total = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    document.getElementById('cart-subtotal').textContent = total + ' د.أ';
    document.getElementById('cart-total').textContent = total + ' د.أ';

    updateCartCount();

    // Bind events
    container.querySelectorAll('.cart-qty-minus').forEach(b => b.addEventListener('click', () => cartChangeQty(b.dataset.key, -1)));
    container.querySelectorAll('.cart-qty-plus').forEach(b => b.addEventListener('click', () => cartChangeQty(b.dataset.key, 1)));
    container.querySelectorAll('.cart-item-remove').forEach(b => b.addEventListener('click', () => removeFromCart(b.dataset.key)));
}

function cartChangeQty(key, delta) {
    const item = cart.find(c => c.key === key);
    if (!item) return;
    item.qty += delta;
    if (item.qty < 1) item.qty = 1;
    saveCart();
    renderCart();
}

function removeFromCart(key) {
    cart = cart.filter(c => c.key !== key);
    saveCart();
    renderCart();
}

function updateCartCount() {
    const count = cart.reduce((sum, i) => sum + i.qty, 0);
    document.getElementById('nav-cart-count').textContent = count;
    document.getElementById('nav-cart-count-2').textContent = count;
}

// ─── WhatsApp Single Order ───
function whatsappSingleOrder(itemId) {
    const item = menuItems.find(i => i.id === parseInt(itemId));
    if (!item) return;
    const qty = getQty(itemId);
    const option = getSelectedOption(itemId);
    const optionStr = option ? ` (${option})` : '';

    const msg = encodeURIComponent(
        `الاسم:\n______________\n\n` +
        `الموقع:\n______________\n\n` +
        `الطلب:\n${item.name}${optionStr}\n\n` +
        `الكمية: ${qty}\n\n` +
        `السعر: ${item.price * qty} د.أ`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
}

// ─── Search ───
function initSearch() {
    const input = document.getElementById('search-input');
    const results = document.getElementById('search-results');
    const clearBtn = document.getElementById('search-clear');

    input.addEventListener('input', () => {
        const q = input.value.trim().toLowerCase();
        clearBtn.style.display = q.length > 0 ? 'flex' : 'none';

        if (q.length < 1) {
            results.classList.remove('active');
            results.innerHTML = '';
            return;
        }

        const found = menuItems.filter(i =>
            i.name.toLowerCase().includes(q) ||
            i.categoryName.includes(q)
        );

        if (found.length === 0) {
            results.innerHTML = '<div class="search-no-results">لا توجد نتائج</div>';
        } else {
            results.innerHTML = found.map(i => `
                <div class="search-result-item" data-id="${i.id}">
                    <img src="assets/logo.png" alt="${i.name}" loading="lazy">
                    <div class="search-result-info">
                        <h4>${i.name}</h4>
                        <span>${i.price} د.أ - ${i.categoryName}</span>
                    </div>
                </div>
            `).join('');

            results.querySelectorAll('.search-result-item').forEach(el => {
                el.addEventListener('click', () => {
                    const cat = menuItems.find(i => i.id === parseInt(el.dataset.id)).category;
                    currentFilter = cat;
                    renderMenu(cat);
                    document.querySelectorAll('.menu-tab').forEach(t => {
                        t.classList.toggle('active', t.dataset.filter === cat);
                    });
                    document.getElementById('menu').scrollIntoView({ behavior: 'smooth', block: 'start' });
                    input.value = '';
                    results.classList.remove('active');
                    clearBtn.style.display = 'none';
                });
            });
        }
        results.classList.add('active');
    });

    clearBtn.addEventListener('click', () => {
        input.value = '';
        results.classList.remove('active');
        results.innerHTML = '';
        clearBtn.style.display = 'none';
    });
}

// ─── Checkout ───
function initCheckout() {
    const modal = document.getElementById('checkout-modal');
    const form = document.getElementById('checkout-form');
    const btnCheckout = document.getElementById('btn-checkout');
    const btnClear = document.getElementById('btn-clear-cart');
    const btnClose = document.getElementById('modal-close');

    btnCheckout.addEventListener('click', () => {
        if (cart.length === 0) return;
        updateCheckoutSummary();
        modal.classList.add('active');
    });

    btnClear.addEventListener('click', () => {
        if (confirm('هل أنت متأكد من تفريغ السلة؟')) {
            cart = [];
            saveCart();
            renderCart();
        }
    });

    btnClose.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('active'); });

    form.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('customer-name').value.trim();
        const phone = document.getElementById('customer-phone').value.trim();
        const location = document.getElementById('customer-location').value.trim();

        if (!name || !phone || !location) {
            alert('يرجى ملء جميع الحقول');
            return;
        }

        const total = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
        let itemsStr = '';
        cart.forEach(i => {
            const opt = i.option ? ` (${i.option})` : '';
            itemsStr += `${i.name}${opt} - الكمية: ${i.qty} - السعر: ${i.price * i.qty} د.أ\n`;
        });

        const msg = encodeURIComponent(
            `الاسم: ${name}\n` +
            `رقم الهاتف: ${phone}\n` +
            `الموقع: ${location}\n\n` +
            `----------------------\n` +
            `الطلبات:\n` +
            itemsStr +
            `----------------------\n` +
            `المجموع الكلي: ${total} د.أ`
        );

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
        modal.classList.remove('active');
        cart = [];
        saveCart();
        renderCart();
        form.reset();
    });
}

function updateCheckoutSummary() {
    const container = document.getElementById('checkout-order-summary');
    const total = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    let html = '<div class="checkout-items-list">';
    cart.forEach(i => {
        const opt = i.option ? ` (${i.option})` : '';
        html += `<div class="checkout-item-row">
            <span>${i.name}${opt} × ${i.qty}</span>
            <span>${i.price * i.qty} د.أ</span>
        </div>`;
    });
    html += `<div class="checkout-item-row checkout-total-row">
        <span>المجموع الكلي</span>
        <span>${total} د.أ</span>
    </div></div>`;
    container.innerHTML = html;
}

// ─── FAQ ───
function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
}

// ─── Back to Top ───
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ─── Scroll Reveal ───
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    const revealEls = document.querySelectorAll(
        '.section-title, .section-subtitle, .category-card, .feature-card, .review-card, .faq-item, .contact-card, .about-grid, .features-stats, .stat-card'
    );
    revealEls.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// ─── Stats Counter ───
function initStatsCounter() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                animateCounter(el, target);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));
}

function animateCounter(el, target) {
    const duration = 2000;
    const start = performance.now();
    const update = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target).toLocaleString('ar-EG');
        if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
}
