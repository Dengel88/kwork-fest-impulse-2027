(function () {
  let currentLang = "ru";
  let currentSportFilter = "all";
  let currentHistoryYear = "2026";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function renderAll() {
    const d = SITE_DATA[currentLang];
    document.documentElement.lang = currentLang;
    if (d.pageTitle) document.title = d.pageTitle;

    // Route & Header
    document.getElementById("route-indicator").textContent = d.routePrefix + "home";
    document.getElementById("brand-title").textContent = d.brandTitle;
    document.getElementById("brand-sub").textContent = d.brandSub;
    document.getElementById("btn-a11y-label").textContent = d.a11yBtn;
    document.getElementById("btn-cms-label").textContent = d.cmsBtn;
    document.getElementById("lang-ru").classList.toggle("active", currentLang === "ru");
    document.getElementById("lang-en").classList.toggle("active", currentLang === "en");

    const navHtml = d.nav
      .map((item) => `<a href="#${item.id}" data-slug="${item.slug}">${item.label}</a>`)
      .join("");
    document.getElementById("main-nav").innerHTML = navHtml;

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

    // Marquee (duplicated for seamless loop)
    const mItems = [...d.marquee, ...d.marquee]
      .map((c) => `<span class="marquee-item"><span class="marquee-sep"></span>${c}</span>`)
      .join("");
    document.getElementById("marquee-track").innerHTML = mItems;

    // Stats Bento
    document.getElementById("stats-bento").innerHTML = d.stats
      .map(
        (s) => `
      <div class="stat-box reveal-up">
        <div class="stat-number"><span class="count-num" data-target="${s.num}">${s.num}</span>${s.suffix}</div>
        <div class="stat-caption">${s.label}</div>
      </div>`
      )
      .join("");

    // About & Mission
    document.getElementById("about-eyebrow").textContent = d.about.eyebrow;
    document.getElementById("about-title").textContent = d.about.title;
    document.getElementById("about-p1").textContent = d.about.p1;
    document.getElementById("about-p2").textContent = d.about.p2;
    document.getElementById("about-quote").textContent = d.about.quote;
    document.getElementById("venues-title").textContent = d.about.venuesTitle;
    document.getElementById("venues-strip").innerHTML = d.about.venues
      .map((v) => `<div class="venue-card"><span class="venue-dot"></span><span>${v}</span></div>`)
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:var(--cyan);flex-shrink:0"><polyline points="20 6 9 17 4 12"/></svg>
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
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" stroke-width="2.4" style="flex-shrink:0;margin-top:2px"><circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/></svg>
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

    // Partners
    document.getElementById("part-eyebrow").textContent = d.partners.eyebrow;
    document.getElementById("part-title").textContent = d.partners.title;
    document.getElementById("part-desc").textContent = d.partners.desc;
    document.getElementById("sponsor-title").textContent = d.partners.sponsorTitle;
    document.getElementById("sponsor-sub").textContent = d.partners.sponsorSub;
    document.getElementById("sponsor-cta").textContent = d.partners.sponsorCta;
    document.getElementById("partners-grid").innerHTML = d.partners.list
      .map(
        (p) => `
      <div class="partner-tile reveal-up">
        <div class="partner-logo-box">
          <img src="${p.img}" alt="${p.name}" loading="lazy">
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

    // Footer
    document.getElementById("foot-mission").textContent = d.footer.mission;
    document.getElementById("foot-nav-title").textContent = d.footer.navTitle;
    document.getElementById("foot-links").innerHTML = d.nav
      .map((item) => `<li><a href="#${item.id}">${item.label}</a></li>`)
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
          `<button type="button" class="filter-tab ${currentSportFilter === f.key ? "active" : ""}" data-sfilter="${f.key}">${f.label}</button>`
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
        if (window.gsap && !reducedMotion) {
          gsap.fromTo(
            "#sports-grid .sport-chip",
            { opacity: 0, y: 12, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.03, ease: "power2.out" }
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
          `<button type="button" class="year-tab ${currentHistoryYear === y ? "active" : ""}" data-hyear="${y}">${y}</button>`
      )
      .join("");

    const hy = d.history.years[currentHistoryYear];
    document.getElementById("history-stage").innerHTML = `
      <div>
        <span class="badge-pill" style="margin-bottom:14px">${hy.badge}</span>
        <h3 style="font-family:var(--font-display);font-size:1.5rem;margin-bottom:14px">${hy.title}</h3>
        <p style="color:#CBD5E1;font-size:0.98rem">${hy.text}</p>
        <div class="history-kpis">
          ${hy.kpis.map((k) => `<div class="hkpi"><strong>${k.v}</strong><span>${k.l}</span></div>`).join("")}
        </div>
      </div>
      <div>
        <img class="history-img" src="${hy.img}" alt="${hy.title}" loading="lazy">
      </div>
    `;

    document.querySelectorAll("[data-hyear]").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentHistoryYear = btn.getAttribute("data-hyear");
        renderHistory();
        if (window.gsap && !reducedMotion) {
          gsap.fromTo("#history-stage", { opacity: 0.3, y: 14 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
        }
      });
    });
  }

  function bindDynamicEvents() {
    const d = SITE_DATA[currentLang];

    // Nav route preview
    document.querySelectorAll("#main-nav a").forEach((link) => {
      link.addEventListener("click", () => {
        const slug = link.getAttribute("data-slug");
        document.getElementById("route-indicator").textContent = d.routePrefix + slug;
        document.getElementById("main-nav").classList.remove("mobile-open");
      });
    });

    // News modal open
    document.querySelectorAll("[data-news-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.getAttribute("data-news-id"));
        const item = d.news.items.find((x) => x.id === id);
        if (!item) return;
        document.getElementById("route-indicator").textContent = `${d.routePrefix}news/${item.id}`;
        document.getElementById("modal-body").innerHTML = `
          <span class="badge-pill" style="margin-bottom:14px">${item.date}</span>
          <h3 style="font-family:var(--font-display);font-size:1.45rem;margin-bottom:16px">${item.title}</h3>
          <img src="${item.img}" alt="${item.title}" style="width:100%;max-height:260px;object-fit:cover;border-radius:16px;margin-bottom:18px;border:1px solid var(--border-glass)">
          <p style="color:#E2E8F0;line-height:1.75;font-size:1rem">${item.full}</p>
        `;
        document.getElementById("info-modal").classList.add("open");
      });
    });

    // Concierge Q&A
    document.querySelectorAll("[data-qidx]").forEach((chip) => {
      chip.addEventListener("click", () => {
        const idx = Number(chip.getAttribute("data-qidx"));
        const ans = d.concierge.qna[idx]?.a || "";
        const box = document.getElementById("concierge-ans");
        box.textContent = ans;
        if (window.gsap && !reducedMotion) {
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

    for (let i = 0; i < 46; i++) {
      particles.push({
        x: Math.random() * (w || 1200),
        y: Math.random() * (h || 800),
        r: Math.random() * 2.6 + 1,
        vx: (Math.random() - 0.5) * 0.45,
        vy: -Math.random() * 0.7 - 0.2,
        c: colors[i % colors.length],
        a: Math.random() * 0.55 + 0.2
      });
    }

    function draw() {
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
      requestAnimationFrame(draw);
    }
    draw();
  }

  // GSAP Choreography
  function initHeroEntrance() {
    if (!window.gsap || reducedMotion) return;
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.from(".eyebrow-row", { opacity: 0, y: 18, duration: 0.6 })
      .from(".hero-title", { opacity: 0, y: 28, duration: 0.75 }, "-=0.4")
      .from(".hero-subtitle", { opacity: 0, y: 20, duration: 0.6 }, "-=0.45")
      .from(".cta-group .btn", { opacity: 0, y: 16, stagger: 0.1, duration: 0.5 }, "-=0.35")
      .from(".hero-checks", { opacity: 0, y: 12, duration: 0.5 }, "-=0.3")
      .from(".emblem-card", { opacity: 0, scale: 0.92, y: 24, duration: 0.8 }, "-=0.65")
      .from(".countdown-dock", { opacity: 0, y: 22, duration: 0.65 }, "-=0.5");

    // Subtle floating motion on emblem
    gsap.to(".emblem-card", {
      y: -8,
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Magnetic primary CTAs
    document.querySelectorAll(".magnetic-btn").forEach((el) => {
      const xTo = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3.out" });
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * 0.22);
        yTo((e.clientY - r.top - r.height / 2) * 0.22);
      });
      el.addEventListener("pointerleave", () => {
        xTo(0);
        yTo(0);
      });
    });
  }

  function runScrollAnimations() {
    if (!window.gsap || !window.ScrollTrigger || reducedMotion) return;
    ScrollTrigger.getAll().forEach((t) => t.kill());

    gsap.utils.toArray(".reveal-up").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
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
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: counter,
          start: "top 90%",
          once: true
        },
        onUpdate: () => {
          const v = Math.round(obj.val);
          counter.textContent = v >= 1000 ? v.toLocaleString(currentLang === "ru" ? "ru-RU" : "en-US") : String(v);
        }
      });
    });
  }

  // Static Event Listeners
  document.addEventListener("DOMContentLoaded", () => {
    renderAll();
    tickCountdown();
    setInterval(tickCountdown, 1000);
    initTorchCanvas();
    initHeroEntrance();

    // Scroll progress bar
    window.addEventListener("scroll", () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) * 100;
      document.getElementById("scroll-progress").style.width = pct + "%";
    });

    // Language switch
    document.getElementById("lang-ru").addEventListener("click", () => {
      if (currentLang !== "ru") {
        currentLang = "ru";
        renderAll();
      }
    });
    document.getElementById("lang-en").addEventListener("click", () => {
      if (currentLang !== "en") {
        currentLang = "en";
        renderAll();
      }
    });

    // A11y toggle
    document.getElementById("btn-a11y").addEventListener("click", () => {
      document.body.classList.toggle("a11y-mode");
    });

    // CMS Preview modal
    document.getElementById("btn-cms").addEventListener("click", () => {
      const cm = SITE_DATA[currentLang].cmsModal;
      document.getElementById("modal-body").innerHTML = `
        <span class="badge-pill" style="margin-bottom:14px">Tilda / WordPress + Polylang</span>
        <h3 style="font-family:var(--font-display);font-size:1.4rem;margin-bottom:12px">${cm.title}</h3>
        <p style="color:#CBD5E1;margin-bottom:18px">${cm.lead}</p>
        <div style="display:grid;gap:12px">
          ${cm.points
            .map(
              (pt) => `<div style="background:rgba(255,255,255,0.05);border:1px solid var(--border-glass);border-radius:14px;padding:14px 16px;font-size:0.92rem;color:#F8FAFC">${pt}</div>`
            )
            .join("")}
        </div>
      `;
      document.getElementById("info-modal").classList.add("open");
    });

    // Modal close
    document.getElementById("modal-close").addEventListener("click", () => {
      document.getElementById("info-modal").classList.remove("open");
    });
    document.getElementById("info-modal").addEventListener("click", (e) => {
      if (e.target.id === "info-modal") {
        document.getElementById("info-modal").classList.remove("open");
      }
    });

    // Mobile menu
    document.getElementById("mobile-toggle").addEventListener("click", () => {
      document.getElementById("main-nav").classList.toggle("mobile-open");
    });

    // Concierge drawer
    document.getElementById("concierge-fab").addEventListener("click", () => {
      document.getElementById("concierge-panel").classList.toggle("open");
    });

    // Feedback Form submit
    document.getElementById("contact-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const d = SITE_DATA[currentLang].docs;
      const spamVal = document.getElementById("inp-spam").value.trim();
      const toast = document.getElementById("form-toast");
      toast.style.display = "block";
      if (spamVal === "5") {
        toast.style.background = "rgba(16, 185, 129, 0.16)";
        toast.style.borderColor = "rgba(16, 185, 129, 0.45)";
        toast.style.color = "#6EE7B7";
        toast.textContent = d.fSuccess;
        e.target.reset();
      } else {
        toast.style.background = "rgba(252, 34, 106, 0.16)";
        toast.style.borderColor = "rgba(252, 34, 106, 0.5)";
        toast.style.color = "#fda4af";
        toast.textContent = d.fError;
      }
    });
  });
})();
