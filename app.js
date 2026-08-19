
    // ============================================
    // УТИЛИТЫ
    // ============================================
    const imgPath = name => name ? SITE.imagesPath + name : null;

    // ============================================
    // ОПТИМИЗАЦИЯ ИЗОБРАЖЕНИЙ
    // ============================================
    // Оригинальные картинки часто весят по несколько мегабайт (фото "как есть"),
    // из-за этого сайт грузится медленно, а на медленном интернете загрузка
    // может вообще не успевать завершиться (картинка "не грузится").
    //
    // Чтобы не трогать сами файлы, изображения прогоняются через бесплатный
    // CDN-прокси wsrv.nl: он сам скачивает оригинал с сайта, один раз сжимает,
    // конвертирует в современный формат WebP и дальше отдаёт уже готовую,
    // лёгкую версию из кэша — без потери видимого качества.
    // Если прокси недоступен — картинка автоматически подгрузится напрямую
    // с сайта, а если и это не получится — покажется эмодзи-заглушка.
    function optimizedSrc(originalSrc, width) {
      const absoluteUrl = new URL(originalSrc, window.location.href).href;
      return `https://wsrv.nl/?url=${encodeURIComponent(absoluteUrl)}&w=${width}&output=webp&q=82&af`;
    }

    function imgHTML(src, fallback, { width = 480, priority = false } = {}) {
      if (!src) return `<span class="img-fallback">${fallback}</span>`;
      const small = optimizedSrc(src, width);
      const large = optimizedSrc(src, width * 2);
      const loadingAttr = priority ? `loading="eager" fetchpriority="high"` : `loading="lazy"`;
      return `<img
          src="${small}"
          srcset="${small} 1x, ${large} 2x"
          alt=""
          ${loadingAttr}
          decoding="async"
          width="${width}" height="${width}"
          data-orig="${src}"
          onerror="if(!this.dataset.fallbackStage){this.dataset.fallbackStage='orig';this.removeAttribute('srcset');this.src=this.dataset.orig;}else{this.style.display='none';this.parentElement.querySelector('.img-fallback').style.display='flex';}"
        >` +
        `<span class="img-fallback" style="display:none">${fallback}</span>`;
    }

    // ============================================
    // МОБИЛЬНОЕ МЕНЮ
    // ============================================
    function toggleMobileMenu() {
      const nav = document.getElementById("mobileNav");
      const btn = document.getElementById("mobileMenuBtn");
      const isOpen = nav.classList.toggle("active");
      btn.textContent = isOpen ? "✕" : "☰";
    }

    // ============================================
    // РОУТЕР
    // ============================================
    const router = {
      navigate(path) {
        window.location.hash = path;
      },
      parse() {
        const hash = window.location.hash.replace("#", "").replace(/^\//, "");
        const [page, ...rest] = hash.split("/");
        return { page, params: rest };
      },
      render() {
        const { page, params } = this.parse();
        const app = document.getElementById("app");
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        document.getElementById("mobileNav").classList.remove("active"); document.getElementById("mobileMenuBtn").textContent = "☰";

        if (!page || page === "") {
          app.innerHTML = renderHome();
          initHome();
        } else if (page === "product" && params[0]) {
          const p = SITE.products.find(x => x.id === params[0]);
          if (p) { app.innerHTML = renderProductPage(p); initScrollEffects(); }
          else router.navigate("");
        } else if (page === "order") {
          app.innerHTML = renderOrderForm();
          initOrderForm();
        } else if (page === "success") {
          app.innerHTML = renderSuccess();
        } else {
          router.navigate("");
        }
      }
    };

    // ============================================
    // ГЛАВНАЯ СТРАНИЦА
    // ============================================
    function renderHome() {
      return `
        <section class="hero">
          <div class="hero-content">
            <div class="hero-badges">${SITE.hero.badges.map(b => `<span class="badge">${b}</span>`).join("")}</div>
            <h1>${SITE.hero.headline.replace("Европы и США", "<span>Европы и США</span>")}</h1>
            <p>${SITE.hero.subheadline}</p>
            <div class="hero-buttons">
              <span class="btn btn-primary" onclick="router.navigate('order')">Оставить заявку →</span>
              <span class="btn btn-secondary" onclick="scrollToSection('products')">Смотреть каталог</span>
            </div>
          </div>
        </section>

        <section class="section" id="why-us">
          <div class="section-header">
            <h2>Почему работают с нами</h2>
          </div>
          <div class="why-grid" id="whyGrid"></div>
        </section>

        <section class="section" id="products">
          <div class="section-header">
            <h2>Каталог</h2>
            <p>Позиции, доступные для оптовых поставок</p>
          </div>
          <div class="products-grid" id="productsGrid"></div>
        </section>

        <section class="section" id="how-it-works">
          <div class="section-header">
            <h2>Как мы работаем</h2>
          </div>
          <div class="steps-grid" id="stepsGrid"></div>
        </section>

        <section class="section" id="faq">
          <div class="section-header">
            <h2>Частые вопросы</h2>
            <p>Всё, что нужно знать перед заявкой</p>
          </div>
          <div class="faq-grid" id="faqGrid"></div>
        </section>

        <section class="cta-block">
          <h2>Готовы обсудить условия поставки?</h2>
          <p>Оставьте заявку — менеджер свяжется с вами и подготовит коммерческое предложение</p>
          <span class="btn btn-primary" onclick="router.navigate('order')">Оставить заявку →</span>
        </section>

        ${renderFooter()}
      `;
    }

    function initHome() {
      document.getElementById("whyGrid").innerHTML = SITE.whyUs.map(w =>
        `<div class="why-card"><div class="why-icon">${w.icon}</div><h3>${w.title}</h3><p>${w.desc}</p></div>`
      ).join("");

      document.getElementById("productsGrid").innerHTML = SITE.products.map((p, i) =>
        `<article class="product-card" onclick="router.navigate('product/${p.id}')">
          <div class="product-img">${imgHTML(imgPath(p.image), p.emoji, { width: 400, priority: i < 4 })}<span class="product-tag ${p.tagClass}">${p.tag}</span></div>
          <div class="product-info">
            <h3 class="product-name">${p.name}</h3>
            <p class="product-short">${p.shortDesc}</p>
            <span class="btn-details">Подробнее →</span>
          </div>
        </article>`
      ).join("");

      document.getElementById("stepsGrid").innerHTML = SITE.steps.map(s =>
        `<div class="step-card"><div class="step-num">${s.num}</div><h3>${s.title}</h3><p>${s.desc}</p></div>`
      ).join("");

      document.getElementById("faqGrid").innerHTML = SITE.faq.map((f, i) =>
        `<div class="faq-item" onclick="toggleFaq(${i})">
          <div class="faq-question">${f.question}</div>
          <div class="faq-answer" id="faq-answer-${i}">${f.answer}</div>
        </div>`
      ).join("");

      initScrollEffects();
    }

    // ============================================
    // FAQ
    // ============================================
    function toggleFaq(i) {
      const items = document.querySelectorAll('.faq-item');
      items.forEach((item, idx) => {
        if (idx === i) item.classList.toggle('active');
        else item.classList.remove('active');
      });
    }

    // ============================================
    // ПРОКРУТКА К СЕКЦИИ
    // ============================================
    function scrollToSection(id) {
      if (window.location.hash && window.location.hash !== "#") {
        router.navigate("");
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }

    // ============================================
    // СТРАНИЦА ТОВАРА
    // ============================================
    function renderProductPage(p) {
      const related = SITE.products.filter(x => x.id !== p.id);

      return `
        <div class="breadcrumbs">
          <span onclick="router.navigate('')">Главная</span><span>/</span>
          <span onclick="scrollToSection('products')">Каталог</span><span>/</span>
          <span class="current">${p.name}</span>
        </div>
        <main class="product-page">
          <div class="product-layout">
            <div class="product-main-img">${imgHTML(imgPath(p.image), p.emoji, { width: 700, priority: true })}</div>
            <div class="product-info-page">
              <span class="product-tag-page ${p.tagClass}">${p.tag}</span>
              <h1>${p.name}</h1>
              <p class="product-desc-page">${p.fullDesc}</p>
              <div class="product-actions">
                <span class="btn btn-primary btn-large" onclick="router.navigate('order')">Оставить заявку на поставку</span>
              </div>
              <div class="product-details">
                <h3>Характеристики</h3>
                ${p.details.map(d => `<div class="detail-row"><span>${d.label}</span><span>${d.value}</span></div>`).join("")}
              </div>
              <div class="product-features">
                <h3>Особенности</h3>
                <ul class="feature-list">${p.features.map(f => `<li>${f}</li>`).join("")}</ul>
              </div>
              <div class="product-comp">
                <h3>Состав</h3>
                <p class="comp-text">${p.composition}</p>
              </div>
            </div>
          </div>
        </main>
        <section class="related-section">
          <h2>Другие позиции каталога</h2>
          <div class="related-grid">
            ${related.map(r => `
              <article class="product-card" onclick="router.navigate('product/${r.id}')">
                <div class="product-img">${imgHTML(imgPath(r.image), r.emoji, { width: 400 })}<span class="product-tag ${r.tagClass}">${r.tag}</span></div>
                <div class="product-info">
                  <h3 class="product-name">${r.name}</h3>
                  <p class="product-short">${r.shortDesc}</p>
                  <span class="btn-details">Подробнее →</span>
                </div>
              </article>
            `).join("")}
          </div>
        </section>
        ${renderFooter()}
      `;
    }

    // ============================================
    // ФОРМА ЗАЯВКИ (Formspree)
    // ============================================
    function renderOrderForm() {
      const f = SITE.form;
      return `
        <div class="form-page">
          <div class="form-header">
            <h1>${f.title}</h1>
            <p>${f.subtitle}</p>
          </div>
          <form class="order-form" id="orderForm" action="https://formspree.io/f/${SITE.formspreeId}" method="POST" accept-charset="UTF-8">
            <input type="hidden" name="_subject" value="Новая заявка на оптовую поставку — Import Syndicate">

            <div class="form-row">
              <div class="form-group">
                <label>Имя <span class="required">*</span></label>
                <input type="text" name="name" placeholder="Иван Иванов" required>
              </div>
              <div class="form-group">
                <label>Компания</label>
                <input type="text" name="company" placeholder="ООО «Пример»">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Телефон <span class="required">*</span></label>
                <input type="tel" name="phone" placeholder="+7 (999) 000-00-00" required>
              </div>
              <div class="form-group">
                <label>Email <span class="required">*</span></label>
                <input type="email" name="email" placeholder="ivan@company.ru" required>
              </div>
            </div>

            <div class="form-group">
              <label>Интересующие позиции</label>
              <div class="checkbox-row">
                ${SITE.products.map(p => `
                  <label class="checkbox-pill">
                    <input type="checkbox" name="products" value="${p.name}">
                    ${p.name}
                  </label>
                `).join("")}
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Примерный объём</label>
                <input type="text" name="volume" placeholder="например, 100 шт.">
              </div>
              <div class="form-group">
                <label>Город / регион</label>
                <input type="text" name="region" placeholder="Москва">
              </div>
            </div>

            <div class="form-group">
              <label>Комментарий</label>
              <textarea name="comment" placeholder="Дополнительная информация о запросе"></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-large form-submit" id="submitBtn">${f.submitBtn}</button>
            <p class="form-privacy">${f.privacyNote}</p>
          </form>
        </div>
      `;
    }

    function initOrderForm() {
      const form = document.getElementById("orderForm");
      if (!form) return;

      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const btn = document.getElementById("submitBtn");
        btn.disabled = true;
        btn.textContent = "Отправка...";
        try {
          const res = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
          if (res.ok) {
            router.navigate("success");
            return;
          }
          // Formspree обычно возвращает JSON с описанием причины ошибки
          // (например, форма ещё не подтверждена владельцем по email) —
          // показываем его вместо общей фразы, чтобы было понятно, что чинить.
          let reason = "Ошибка отправки. Попробуйте ещё раз.";
          try {
            const data = await res.json();
            if (data && Array.isArray(data.errors) && data.errors.length) {
              reason = "Ошибка отправки: " + data.errors.map(er => er.message).join("; ");
            }
          } catch (_) { /* ответ не JSON — оставляем общую фразу */ }
          alert(reason);
          btn.disabled = false;
          btn.textContent = SITE.form.submitBtn;
        } catch (err) {
          alert("Ошибка сети. Проверьте интернет.");
          btn.disabled = false;
          btn.textContent = SITE.form.submitBtn;
        }
      });
    }

    // ============================================
    // УСПЕШНАЯ ЗАЯВКА
    // ============================================
    function renderSuccess() {
      const f = SITE.form;
      return `
        <div class="success-page">
          <div class="success-icon">✓</div>
          <h1>${f.successTitle}</h1>
          <p>${f.successSubtitle}</p>
          <span class="btn btn-primary" onclick="router.navigate('')">${f.successCta}</span>
        </div>
      `;
    }

    // ============================================
    // ФУТЕР
    // ============================================
    function renderFooter() {
      return `
        <footer class="footer" id="footer">
          <div class="footer-grid">
            <div class="footer-brand">
              <span class="logo">${SITE.brand}</span>
              <p>${SITE.tagline} с ${SITE.year.split("–")[0]} года. Прямой импорт, оптовые поставки по всей России.</p>
            </div>
            <div class="footer-col">
              <h4>Контакты</h4>
              <a href="${SITE.telegram}" target="_blank">Telegram: @importsyndicate</a>
              <a href="mailto:${SITE.sellerEmail}">${SITE.sellerEmail}</a>
            </div>
          </div>
          <div class="footer-bottom">© ${SITE.year} ${SITE.brand}. Все права защищены.</div>
        </footer>
      `;
    }

    // ============================================
    // НАВИГАЦИЯ
    // ============================================
    function renderNav() {
      const html = SITE.nav.map(n => `<span onclick="scrollToSection('${n.href.replace("#", "")}')">${n.text}</span>`).join("")
        + `<span onclick="router.navigate('order')">Заявка</span>`;
      document.getElementById("mainNav").innerHTML = html;
      document.getElementById("mobileNav").innerHTML = html;
    }

    // ============================================
    // ЭФФЕКТЫ ПРИ СКРОЛЛЕ
    // ============================================
    function initScrollEffects() {
      const header = document.getElementById("header");
      const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("animate-in"); });
      }, { threshold: 0.1 });
      document.querySelectorAll(".why-card,.product-card,.step-card,.faq-item").forEach(el => observer.observe(el));
      window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 20), { passive: true });
    }

    // ============================================
    // ИНИЦИАЛИЗАЦИЯ
    // ============================================
    document.addEventListener("DOMContentLoaded", () => {
      // Восстанавливаем путь после редиректа через 404.html (GitHub Pages хак)
      const redirect = sessionStorage.getItem('spa_redirect');
      if (redirect && redirect !== '/') {
        sessionStorage.removeItem('spa_redirect');
        window.history.replaceState({}, '', redirect);
      }
      renderNav();
      document.getElementById("mobileMenuBtn").addEventListener("click", toggleMobileMenu);
      document.addEventListener("keydown", e => {
        if (e.key === "Escape") { document.getElementById("mobileNav").classList.remove("active"); document.getElementById("mobileMenuBtn").textContent = "☰"; }
      });
      window.addEventListener("popstate", () => {
        router.render();
      });
      router.render();
    });
