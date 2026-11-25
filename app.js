(function () {
  let currentLang = "ru";
  let currentSportFilter = "all";
  let currentHistoryYear = "2026";
  let currentGalleryIdx = 0;
  let lastFormStatus = null; // null | "success" | "error"
  let lastModalTrigger = null;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function detectInitialRoute() {
    const h = (window.location.hash || "").toLowerCase();
    if (h.startsWith("#/en") || h === "#en") {
      currentLang = "en";
    } else if (h.startsWith("#/ru") || h === "#ru") {
      currentLang = "ru";
    }
  }

  function updateHashRoute(slug) {
    const clean = slug ? `${currentLang}/${slug}` : currentLang;
    try {
      history.replaceState(null, "", `#/${clean}`);
    } catch (_) {}
  }

  function renderAll() {
    const d = SITE_DATA[currentLang];
    document.documentElement.lang = currentLang;
    if (d.pageTitle) document.title = d.pageTitle;
    const metaDesc = document.getElementById("meta-desc");
    if (metaDesc && d.metaDesc) metaDesc.setAttribute("content", d.metaDesc);

    // Accessibility & Header Controls
    document.getElementById("skip-link").textContent = d.skipLink;
    document.getElementById("utility-org").textContent = d.utilityOrg;
    document.getElementById("brand-title").textContent = d.brandTitle;
    document.getElementById("brand-sub").textContent = d.brandSub;
    document.getElementById("btn-a11y-label").textContent = d.a11yBtn;
    document.getElementById("btn-a11y").setAttribute("aria-label", d.a11yAria);
    document.getElementById("btn-cms-label").textContent = d.cmsBtn;
    document.getElementById("btn-cms").setAttribute("aria-label", d.cmsAria);
    document.getElementById("mobile-toggle").setAttribute("aria-label", d.menuAria);
    document.getElementById("modal-close").setAttribute("aria-label", d.modalCloseLabel);
    document.getElementById("concierge-close").setAttribute("aria-label", d.conciergeCloseLabel);
    document.getElementById("foot-top-btn").textContent = d.footTopBtn;

    const isRu = currentLang === "ru";
    const btnRu = document.getElementById("lang-ru");
    const btnEn = document.getElementById("lang-en");
    btnRu.classList.toggle("active", isRu);
    btnRu.setAttribute("aria-pressed", String(isRu));
    btnEn.classList.toggle("active", !isRu);
    btnEn.setAttribute("aria-pressed", String(!isRu));

    document.getElementById("main-nav").innerHTML = d.nav
      .map((item) => `<a href="#${item.id}" data-slug="${item.slug}">${item.label}</a>`)
      .join("");

    // Hero
    document.getElementById("hero-badge-txt").textContent = d.hero.badge;
    document.getElementById("hero-venue").textContent = d.hero.venue;
    document.getElementById("hero-title-top").textContent = d.hero.titleTop;
    document.getElementById("hero-title-grad").textContent = d.hero.titleGrad;
    document.getElementById("hero-subtitle").textContent = d.hero.subtitle;
    document.getElementById("cta-ru-txt").textContent = d.hero.ctaRu;
    document.getElementById("cta-int-txt").textContent = d.hero.ctaInt;
    document.getElementById("emblem-tag-left").textContent = d.hero.emblemTagLeft;
    document.getElementById("emblem-tag-right").textContent = d.hero.emblemTagRight;

    document.getElementById("hero-checks").innerHTML = d.hero.checks
      .map(
        (c) => `
      <div class="hero-check-item">
        <span class="check-icon" aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </span>
        <span>${c}</span>
      </div>`
      )
      .join("");

    document.getElementById("cd-u-d").textContent = d.hero.cdUnits[0];
    document.getElementById("cd-u-h").textContent = d.hero.cdUnits[1];
    document.getElementById("cd-u-m").textContent = d.hero.cdUnits[2];
    document.getElementById("cd-u-s").textContent = d.hero.cdUnits[3];
    document.getElementById("cd-side").textContent = d.hero.cdSide;

    // Marquee
    const mItems = [...d.marquee, ...d.marquee]
      .map((c) => `<span class="marquee-item"><span class="marquee-sep" aria-hidden="true"></span>${c}</span>`)
      .join("");
    document.getElementById("marquee-track").innerHTML = mItems;

    // Stats Bento
    document.getElementById("stats-bento").innerHTML = d.stats
      .map(
        (s) => `
      <div class="stat-box reveal-up">
        <div class="stat-number"><span class="count-num" data-target="${s.num}">${s.num.toLocaleString(isRu ? "ru-RU" : "en-US")}</span>${s.suffix}</div>
        <div class="stat-caption">${s.label}</div>
      </div>`
      )
      .join("");

    // About & Mission (with language-matched poster!)
    document.getElementById("about-eyebrow").textContent = d.about.eyebrow;
    document.getElementById("about-title").textContent = d.about.title;
    document.getElementById("about-p1").textContent = d.about.p1;
    document.getElementById("about-p2").textContent = d.about.p2;
    document.getElementById("about-quote").textContent = d.about.quote;
    const posterImg = document.getElementById("about-poster-img");
    posterImg.src = d.about.poster;
    posterImg.alt = d.about.posterAlt;
    document.getElementById("venues-title").textContent = d.about.venuesTitle;
    document.getElementById("venues-strip").innerHTML = d.about.venues
      .map((v) => `<div class="venue-card"><span class="venue-dot" aria-hidden="true"></span><span>${v}</span></div>`)
      .join("");

    // Program & Divisions
    document.getElementById("prog-eyebrow").textContent = d.program.eyebrow;
    document.getElementById("prog-title").textContent = d.program.title;
    document.getElementById("prog-desc").textContent = d.program.desc;
    document.getElementById("divisions-wrap").innerHTML = d.program.divisions
      .map(
        (div) => `
      <article class="division-card ${div.type} reveal-up">
        <span class="div-tag">${div.tag}</span>
        <h3>${div.title}</h3>
        <p>${div.text}</p>
        <ul class="div-bullets">
          ${div.bullets
            .map(
              (b) => `<li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:var(--cyan);flex-shrink:0" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${b}</span>
          </li>`
            )
            .join("")}
        </ul>
      </article>`
      )
      .join("");

    document.getElementById("sports-catalog-title").textContent = d.program.catalogTitle;
    document.getElementById("sports-cms-badge").textContent = d.program.cmsBadge;
    renderSports();

    // What Awaits in 2027
    document.getElementById("awaits-eyebrow").textContent = d.awaits.eyebrow;
    document.getElementById("awaits-title").textContent = d.awaits.title;
    document.getElementById("awaits-desc").textContent = d.awaits.desc;
    document.getElementById("awaits-grid").innerHTML = d.awaits.cards
      .map(
        (c) => `
      <article class="await-card reveal-up">
        <div>
          <div class="await-num">${c.num}</div>
          <h3>${c.title}</h3>
          <p>${c.text}</p>
        </div>
      </article>`
      )
      .join("");

    // Expo
    document.getElementById("expo-eyebrow").textContent = d.expo.eyebrow;
    document.getElementById("expo-title").textContent = d.expo.title;
    document.getElementById("expo-text").textContent = d.expo.text;
    document.getElementById("expo-cta").textContent = d.expo.cta;
    document.getElementById("expo-sectors").innerHTML = d.expo.sectors
      .map(
        (s) => `
      <div class="expo-sector-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" stroke-width="2.4" style="flex-shrink:0;margin-top:2px" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/></svg>
        <span>${s}</span>
      </div>`
      )
      .join("");

    // News
    document.getElementById("news-eyebrow").textContent = d.news.eyebrow;
    document.getElementById("news-title").textContent = d.news.title;
    document.getElementById("news-desc").textContent = d.news.desc;
    document.getElementById("news-grid").innerHTML = d.news.items
      .map(
        (n) => `
      <article class="news-card reveal-up">
        <div class="news-thumb">
          <img src="${n.img}" alt="${n.title}" loading="lazy">
          <span class="news-date">${n.date}</span>
        </div>
        <div class="news-body">
          <h3>${n.title}</h3>
          <p>${n.excerpt}</p>
          <button type="button" class="news-read-btn" data-news-id="${n.id}">
            <span>${d.news.readMore}</span>
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </article>`
      )
      .join("");

    // History
    document.getElementById("hist-eyebrow").textContent = d.history.eyebrow;
    document.getElementById("hist-title").textContent = d.history.title;
    document.getElementById("hist-desc").textContent = d.history.desc;
    renderHistory();

    // Partners (eager load logos so white cards never appear empty!)
    document.getElementById("part-eyebrow").textContent = d.partners.eyebrow;
    document.getElementById("part-title").textContent = d.partners.title;
    document.getElementById("part-desc").textContent = d.partners.desc;
    document.getElementById("sponsor-tier-badge").textContent = d.partners.tierBadge;
    document.getElementById("sponsor-title").textContent = d.partners.sponsorTitle;
    document.getElementById("sponsor-sub").textContent = d.partners.sponsorSub;
    document.getElementById("sponsor-cta").textContent = d.partners.sponsorCta;
    document.getElementById("partners-grid").innerHTML = d.partners.list
      .map(
        (p) => `
      <div class="partner-tile reveal-up">
        <div class="partner-logo-box">
          <img src="${p.img}" alt="${p.name}">
        </div>
        <div>
          <div class="partner-role">${p.role}</div>
          <div class="partner-name">${p.name}</div>
        </div>
      </div>`
      )
      .join("");

    // Docs & Form
    document.getElementById("docs-eyebrow").textContent = d.docs.eyebrow;
    document.getElementById("docs-title").textContent = d.docs.title;
    document.getElementById("doc-list").innerHTML = d.docs.items
      .map(
        (doc) => `
      <div class="doc-item">
        <div class="doc-meta">
          <strong>${doc.title}</strong>
          <span>${doc.meta}</span>
        </div>
        <a class="doc-dl" href="${doc.href}" ${doc.href.endsWith(".pdf") ? 'target="_blank" rel="noopener"' : ""}>${doc.btn}</a>
      </div>`
      )
      .join("");

    document.getElementById("apply-cta-ru").textContent = d.hero.ctaRu;
    document.getElementById("apply-cta-int").textContent = d.hero.ctaInt;
    document.getElementById("form-title").textContent = d.docs.formTitle;
    document.getElementById("form-sub").textContent = d.docs.formSub;
    document.getElementById("lbl-name").textContent = d.docs.fName;
    document.getElementById("lbl-email").textContent = d.docs.fEmail;
    document.getElementById("lbl-role").textContent = d.docs.fRole;
    document.getElementById("inp-role").innerHTML = d.docs.fRoles.map((r) => `<option>${r}</option>`).join("");
    document.getElementById("lbl-msg").textContent = d.docs.fMsg;
    document.getElementById("lbl-spam").textContent = d.docs.fSpam;
    document.getElementById("btn-submit").textContent = d.docs.fSubmit;

    // Keep form toast translated if already visible!
    const toast = document.getElementById("form-toast");
    if (lastFormStatus === "success") {
      toast.textContent = d.docs.fSuccess;
    } else if (lastFormStatus === "error") {
      toast.textContent = d.docs.fError;
    }

    // Footer
    document.getElementById("foot-mission").textContent = d.footer.mission;
    document.getElementById("foot-nav-title").textContent = d.footer.navTitle;
    document.getElementById("foot-links").innerHTML = d.nav
      .map((item) => `<li><a href="#${item.id}" data-slug="${item.slug}">${item.label}</a></li>`)
      .join("");
    document.getElementById("foot-contact-title").textContent = d.footer.contactTitle;
    document.getElementById("foot-address").textContent = d.footer.address;
    document.getElementById("foot-rights").textContent = d.footer.rights;

    // Concierge
    document.getElementById("concierge-fab-txt").textContent = d.concierge.fab;
    document.getElementById("concierge-title").textContent = d.concierge.title;
    document.getElementById("concierge-sub").textContent = d.concierge.sub;
    document.getElementById("concierge-ans").textContent = d.concierge.defaultAns;
    document.getElementById("concierge-chips").innerHTML = d.concierge.qna
      .map((item, idx) => `<button type="button" class="c-chip" data-qidx="${idx}">${item.q}</button>`)
      .join("");

    bindDynamicEvents();
    runScrollAnimations();
  }

  function renderSports() {
    const d = SITE_DATA[currentLang];
    document.getElementById("sports-filters").innerHTML = d.program.filters
      .map(
        (f) =>
          `<button type="button" role="tab" aria-selected="${currentSportFilter === f.key}" class="filter-tab ${currentSportFilter === f.key ? "active" : ""}" data-sfilter="${f.key}">${f.label}</button>`
      )
      .join("");

    const filtered = d.program.sports.filter(
      (s) => currentSportFilter === "all" || s.cat === currentSportFilter || s.cat === "all"
    );
    document.getElementById("sports-grid").innerHTML = filtered
      .map(
        (s) => `
      <div class="sport-chip">
        <span class="sport-chip-name">${s.name}</span>
        <span class="sport-chip-cat">${s.tag}</span>
      </div>`
      )
      .join("");

    document.querySelectorAll("[data-sfilter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentSportFilter = btn.getAttribute("data-sfilter");
        renderSports();
        if (window.gsap && !reducedMotion && !document.body.classList.contains("a11y-mode")) {
          gsap.fromTo(
            "#sports-grid .sport-chip",
            { opacity: 0, y: 12, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 0.32, stagger: 0.025, ease: "power2.out" }
          );
        }
      });
    });
  }

  function renderHistory() {
    const d = SITE_DATA[currentLang];
    const years = ["2026", "2025", "2024"];
    document.getElementById("history-tabs").innerHTML = years
      .map(
        (y) =>
          `<button type="button" role="tab" aria-selected="${currentHistoryYear === y}" class="year-tab ${currentHistoryYear === y ? "active" : ""}" data-hyear="${y}">${y}</button>`
      )
      .join("");

    const hy = d.history.years[currentHistoryYear];
    if (currentGalleryIdx >= hy.gallery.length) currentGalleryIdx = 0;
    const activePhoto = hy.gallery[currentGalleryIdx];

    document.getElementById("history-stage").innerHTML = `
      <div>
        <span class="badge-pill" style="margin-bottom:14px">${hy.badge}</span>
        <h3 class="history-title">${hy.title}</h3>
        <p class="history-text">${hy.text}</p>
        <div class="history-kpis">
          ${hy.kpis.map((k) => `<div class="hkpi"><strong>${k.v}</strong><span>${k.l}</span></div>`).join("")}
        </div>
      </div>
      <div class="hist-gallery">
        <button type="button" class="hist-main-btn" id="hist-lightbox-btn" aria-label="${activePhoto.cap}">
          <img id="hist-main-img" src="${activePhoto.src}" alt="${activePhoto.cap}" loading="lazy">
          <span class="hist-zoom-pill">⤢ Zoom</span>
        </button>
        <div class="hist-caption" id="hist-caption">${activePhoto.cap}</div>
        <div class="hist-thumbs">
          ${hy.gallery
            .map(
              (g, idx) => `
            <button type="button" class="hist-thumb-btn ${idx === currentGalleryIdx ? "active" : ""}" data-gidx="${idx}" aria-label="${g.cap}">
              <img src="${g.src}" alt="" loading="lazy">
            </button>`
            )
            .join("")}
        </div>
      </div>
    `;

    document.querySelectorAll("[data-hyear]").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentHistoryYear = btn.getAttribute("data-hyear");
        currentGalleryIdx = 0;
        renderHistory();
        updateHashRoute(`history/${currentHistoryYear}`);
        if (window.gsap && !reducedMotion && !document.body.classList.contains("a11y-mode")) {
          gsap.fromTo("#history-stage", { opacity: 0.35, y: 12 }, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" });
        }
      });
    });

    document.querySelectorAll("[data-gidx]").forEach((tbtn) => {
      tbtn.addEventListener("click", () => {
        currentGalleryIdx = Number(tbtn.getAttribute("data-gidx"));
        const p = hy.gallery[currentGalleryIdx];
        const mainImg = document.getElementById("hist-main-img");
        const capEl = document.getElementById("hist-caption");
        document.querySelectorAll(".hist-thumb-btn").forEach((b, i) => b.classList.toggle("active", i === currentGalleryIdx));
        mainImg.src = p.src;
        mainImg.alt = p.cap;
        capEl.textContent = p.cap;
        if (window.gsap && !reducedMotion && !document.body.classList.contains("a11y-mode")) {
          gsap.fromTo(mainImg, { opacity: 0.4, scale: 0.985 }, { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" });
        }
      });
    });

    const lbBtn = document.getElementById("hist-lightbox-btn");
    if (lbBtn) {
      lbBtn.addEventListener("click", () => {
        const p = hy.gallery[currentGalleryIdx];
        openModal(
          `
          <span class="badge-pill" style="margin-bottom:14px">${hy.badge}</span>
          <h3 id="modal-title-ref" style="font-family:var(--font-display);font-size:1.25rem;margin-bottom:14px">${hy.title}</h3>
          <img src="${p.src}" alt="${p.cap}" style="width:100%;max-height:62vh;object-fit:contain;background:#050311;border-radius:16px;margin-bottom:14px;border:1px solid var(--border-glass)">
          <p style="color:#E2E8F0;font-size:0.95rem">${p.cap}</p>
          `,
          lbBtn
        );
      });
    }
  }

  function openModal(html, triggerEl) {
    lastModalTrigger = triggerEl || document.activeElement;
    const modal = document.getElementById("info-modal");
    document.getElementById("modal-body").innerHTML = html;
    modal.hidden = false;
    document.getElementById("modal-close").focus();
  }

  function closeModal() {
    const modal = document.getElementById("info-modal");
    if (!modal.hidden) {
      modal.hidden = true;
      if (lastModalTrigger && typeof lastModalTrigger.focus === "function") {
        lastModalTrigger.focus();
      }
    }
  }

  function toggleConcierge(forceState) {
    const panel = document.getElementById("concierge-panel");
    const fab = document.getElementById("concierge-fab");
    const willOpen = typeof forceState === "boolean" ? forceState : panel.hidden;
    panel.hidden = !willOpen;
    fab.setAttribute("aria-expanded", String(willOpen));
  }

  function closeMobileNav() {
    const nav = document.getElementById("main-nav");
    const toggle = document.getElementById("mobile-toggle");
    nav.classList.remove("mobile-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function bindDynamicEvents() {
    const d = SITE_DATA[currentLang];

    // Smooth section links + hash route preview
    document.querySelectorAll("#main-nav a, #foot-links a").forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href").replace("#", "");
        const slug = link.getAttribute("data-slug") || targetId;
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          closeMobileNav();
          targetEl.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
          updateHashRoute(slug);
        }
      });
    });

    // News modal open
    document.querySelectorAll("[data-news-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.getAttribute("data-news-id"));
        const item = d.news.items.find((x) => x.id === id);
        if (!item) return;
        updateHashRoute(`news/${item.id}`);
        openModal(
          `
          <span class="badge-pill" style="margin-bottom:14px">${item.date}</span>
          <h3 id="modal-title-ref" style="font-family:var(--font-display);font-size:1.4rem;margin-bottom:16px">${item.title}</h3>
          <img src="${item.img}" alt="${item.title}" style="width:100%;max-height:260px;object-fit:cover;border-radius:16px;margin-bottom:18px;border:1px solid var(--border-glass)">
          <p style="color:#E2E8F0;line-height:1.75;font-size:1rem">${item.full}</p>
          `,
          btn
        );
      });
    });

    // Concierge Q&A
    document.querySelectorAll("[data-qidx]").forEach((chip) => {
      chip.addEventListener("click", () => {
        const idx = Number(chip.getAttribute("data-qidx"));
        const ans = d.concierge.qna[idx]?.a || "";
        const box = document.getElementById("concierge-ans");
        box.textContent = ans;
        if (window.gsap && !reducedMotion && !document.body.classList.contains("a11y-mode")) {
          gsap.fromTo(box, { opacity: 0.35, y: 6 }, { opacity: 1, y: 0, duration: 0.25 });
        }
      });
    });
  }

  // Countdown to June 11, 2027 10:00 MSK
  function tickCountdown() {
    const target = new Date("2027-06-11T10:00:00+03:00").getTime();
    const diff = Math.max(0, target - Date.now());
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);

    document.getElementById("cd-d").textContent = String(days);
    document.getElementById("cd-h").textContent = String(hours).padStart(2, "0");
    document.getElementById("cd-m").textContent = String(mins).padStart(2, "0");
    document.getElementById("cd-s").textContent = String(secs).padStart(2, "0");
  }

  // Hero Torch Energy Canvas
  function initTorchCanvas() {
    const canvas = document.getElementById("torch-canvas");
    if (!canvas || reducedMotion) return;
    const ctx = canvas.getContext("2d");
    let w = 0, h = 0;
    const colors = ["#FC226A", "#8C52FF", "#00E5FF", "#10B981", "#F59E0B"];
    const particles = [];

    function resize() {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    for (let i = 0; i < 42; i++) {
      particles.push({
        x: Math.random() * (w || 1200),
        y: Math.random() * (h || 800),
        r: Math.random() * 2.5 + 1,
        vx: (Math.random() - 0.5) * 0.42,
        vy: -Math.random() * 0.65 - 0.2,
        c: colors[i % colors.length],
        a: Math.random() * 0.5 + 0.2
      });
    }

    function draw() {
      if (!document.body.classList.contains("a11y-mode")) {
        ctx.clearRect(0, 0, w, h);
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.y < -10) {
            p.y = h + 10;
            p.x = Math.random() * w;
          }
          if (p.x < -10) p.x = w + 10;
          if (p.x > w + 10) p.x = -10;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = p.c;
          ctx.globalAlpha = p.a;
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      }
      requestAnimationFrame(draw);
    }
    draw();
  }

  // GSAP Choreography
  function initHeroEntrance() {
    if (!window.gsap || reducedMotion) return;
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.from(".eyebrow-row", { opacity: 0, y: 18, duration: 0.55 })
      .from(".hero-title", { opacity: 0, y: 26, duration: 0.7 }, "-=0.38")
      .from(".hero-subtitle", { opacity: 0, y: 18, duration: 0.55 }, "-=0.42")
      .from(".cta-group .btn", { opacity: 0, y: 14, stagger: 0.1, duration: 0.48 }, "-=0.32")
      .from(".hero-checks", { opacity: 0, y: 12, duration: 0.45 }, "-=0.28")
      .from(".emblem-stage", { opacity: 0, scale: 0.93, y: 22, duration: 0.75 }, "-=0.6")
      .from(".countdown-dock", { opacity: 0, y: 20, duration: 0.6 }, "-=0.45");

    gsap.to(".emblem-card", {
      y: -7,
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    document.querySelectorAll(".magnetic-btn").forEach((el) => {
      const xTo = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3.out" });
      el.addEventListener("pointermove", (e) => {
        if (window.innerWidth < 768 || document.body.classList.contains("a11y-mode")) return;
        const r = el.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * 0.2);
        yTo((e.clientY - r.top - r.height / 2) * 0.2);
      });
      el.addEventListener("pointerleave", () => {
        xTo(0);
        yTo(0);
      });
    });
  }

  function runScrollAnimations() {
    if (!window.gsap || !window.ScrollTrigger || reducedMotion || document.body.classList.contains("a11y-mode")) return;
    ScrollTrigger.getAll().forEach((t) => t.kill());

    gsap.utils.toArray(".reveal-up").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 89%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    gsap.utils.toArray(".count-num").forEach((counter) => {
      const target = Number(counter.getAttribute("data-target"));
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 1.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: counter,
          start: "top 92%",
          once: true
        },
        onUpdate: () => {
          const v = Math.round(obj.val);
          counter.textContent = v >= 1000 ? v.toLocaleString(currentLang === "ru" ? "ru-RU" : "en-US") : String(v);
        }
      });
    });
  }

  function syncMobileConciergeVisibility() {
    const fab = document.getElementById("concierge-fab");
    const panel = document.getElementById("concierge-panel");
    if (window.innerWidth <= 680) {
      const nearTop = window.scrollY < 260;
      const menuOpen = document.getElementById("main-nav").classList.contains("mobile-open");
      if ((nearTop || menuOpen) && panel.hidden) {
        fab.classList.add("mobile-hidden-top");
      } else {
        fab.classList.remove("mobile-hidden-top");
      }
    } else {
      fab.classList.remove("mobile-hidden-top");
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    detectInitialRoute();
    renderAll();
    updateHashRoute("");
    tickCountdown();
    setInterval(tickCountdown, 1000);
    initTorchCanvas();
    initHeroEntrance();
    syncMobileConciergeVisibility();

    // Scroll progress bar & mobile FAB clearance
    window.addEventListener("scroll", () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) * 100;
      document.getElementById("scroll-progress").style.width = pct + "%";
      syncMobileConciergeVisibility();
    }, { passive: true });

    window.addEventListener("resize", syncMobileConciergeVisibility);

    // Language switch
    document.getElementById("lang-ru").addEventListener("click", () => {
      if (currentLang !== "ru") {
        currentLang = "ru";
        renderAll();
        updateHashRoute("");
      }
    });
    document.getElementById("lang-en").addEventListener("click", () => {
      if (currentLang !== "en") {
        currentLang = "en";
        renderAll();
        updateHashRoute("");
      }
    });

    // High-contrast A11y toggle
    const a11yBtn = document.getElementById("btn-a11y");
    a11yBtn.addEventListener("click", () => {
      const active = document.body.classList.toggle("a11y-mode");
      a11yBtn.classList.toggle("active", active);
      a11yBtn.setAttribute("aria-pressed", String(active));
    });

    // CMS / SEO Architecture Preview modal
    const cmsBtn = document.getElementById("btn-cms");
    cmsBtn.addEventListener("click", () => {
      const cm = SITE_DATA[currentLang].cmsModal;
      openModal(
        `
        <span class="badge-pill" style="margin-bottom:14px">Tilda / WordPress + Polylang</span>
        <h3 id="modal-title-ref" style="font-family:var(--font-display);font-size:1.35rem;margin-bottom:12px">${cm.title}</h3>
        <p style="color:#DCE5F2;margin-bottom:18px">${cm.lead}</p>
        <div style="display:grid;gap:12px">
          ${cm.points
            .map(
              (pt) => `<div style="background:rgba(255,255,255,0.05);border:1px solid var(--border-glass);border-radius:14px;padding:14px 16px;font-size:0.92rem;color:#F8FAFC">${pt}</div>`
            )
            .join("")}
        </div>
        `,
        cmsBtn
      );
    });

    // Modal close events
    document.getElementById("modal-close").addEventListener("click", closeModal);
    document.getElementById("info-modal").addEventListener("click", (e) => {
      if (e.target.id === "info-modal") closeModal();
    });

    // Mobile menu toggle
    const mobToggle = document.getElementById("mobile-toggle");
    mobToggle.addEventListener("click", () => {
      const nav = document.getElementById("main-nav");
      const open = nav.classList.toggle("mobile-open");
      mobToggle.setAttribute("aria-expanded", String(open));
      syncMobileConciergeVisibility();
    });

    // Concierge drawer
    document.getElementById("concierge-fab").addEventListener("click", () => toggleConcierge());
    document.getElementById("concierge-close").addEventListener("click", () => {
      toggleConcierge(false);
      document.getElementById("concierge-fab").focus();
    });

    // Global Escape key handler for Accessibility!
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeModal();
        toggleConcierge(false);
        closeMobileNav();
      }
    });

    // Feedback Form submit
    document.getElementById("contact-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const d = SITE_DATA[currentLang].docs;
      const spamVal = document.getElementById("inp-spam").value.trim();
      const toast = document.getElementById("form-toast");
      toast.style.display = "block";
      if (spamVal === "5") {
        lastFormStatus = "success";
        toast.style.background = "rgba(16, 185, 129, 0.18)";
        toast.style.borderColor = "rgba(16, 185, 129, 0.55)";
        toast.style.color = "#6EE7B7";
        toast.textContent = d.fSuccess;
        e.target.reset();
      } else {
        lastFormStatus = "error";
        toast.style.background = "rgba(252, 34, 106, 0.18)";
        toast.style.borderColor = "rgba(252, 34, 106, 0.55)";
        toast.style.color = "#fda4af";
        toast.textContent = d.fError;
      }
    });
  });
})();
