/* ==========================================================================
   MEHEDI HASAN (MEhe132) — INTERACTIVE TERMINAL, CYBER CANVAS, CMD+K PALETTE,
   LIVE GITHUB API TELEMETRY, 3D CARD TILT & SCROLL REVEAL ENGINE (v2.0)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // --------------------------------------------------------------------------
  // 1. Dynamic Typing Effect in Hero
  // --------------------------------------------------------------------------
  const roles = [
    "Python / Automation & Full-Stack Tooling Developer",
    "Undergraduate Research Assistant @ FEC CSE Research Lab",
    "Systems Builder: Web Apps, Win32 Overlays & Browser Extensions",
    "B.Sc. in Computer Science & Engineering @ FEC"
  ];
  const typingTarget = document.getElementById("hero-typing-text");
  let roleIdx = 0;
  let charIdx = 0;
  let deleting = false;

  function tickRole() {
    if (!typingTarget) return;
    const current = roles[roleIdx];
    if (!deleting) {
      typingTarget.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(tickRole, 2200);
        return;
      }
      setTimeout(tickRole, 42);
    } else {
      typingTarget.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        setTimeout(tickRole, 350);
        return;
      }
      setTimeout(tickRole, 22);
    }
  }
  tickRole();

  // --------------------------------------------------------------------------
  // 2. Interactive Terminal Emulator
  // --------------------------------------------------------------------------
  const termOutput = document.getElementById("terminal-output");
  const termInput = document.getElementById("terminal-input");
  const cmdChips = document.querySelectorAll("[data-cmd]");

  const COMMAND_HANDLERS = {
    help: () => `
<div class="term-line">Available terminal commands:</div>
<div class="term-line">  <span class="term-key">whoami</span>     — Display developer &amp; researcher system profile</div>
<div class="term-line">  <span class="term-key">projects</span>   — List featured engineering projects &amp; live links</div>
<div class="term-line">  <span class="term-key">research</span>   — Inspect FEC CSE Research Lab status</div>
<div class="term-line">  <span class="term-key">skills</span>     — Print core programming languages &amp; frameworks</div>
<div class="term-line">  <span class="term-key">resume</span>     — Open / download Mehedi_Hasan_Resume.pdf</div>
<div class="term-line">  <span class="term-key">contact</span>    — Show direct communication channels</div>
<div class="term-line">  <span class="term-key">cmdk</span>       — Launch the VS Code / Linear Command Palette (Ctrl+K)</div>
<div class="term-line">  <span class="term-key">clear</span>      — Clear terminal buffer</div>`,

    whoami: () => `
<div class="term-line"><span class="term-key">developer:</span></div>
<div class="term-line">  <span class="term-key">name:</span> <span class="term-string">"Mehedi Hasan"</span></div>
<div class="term-line">  <span class="term-key">handle:</span> <span class="term-string">"@MEhe132"</span></div>
<div class="term-line">  <span class="term-key">role:</span> <span class="term-string">"Python, Automation &amp; Full-Stack Tooling Developer"</span></div>
<div class="term-line">  <span class="term-key">education:</span> <span class="term-string">"B.Sc. in CSE @ Faridpur Engineering College (FEC)"</span></div>
<div class="term-line">  <span class="term-key">research_lab:</span> <span class="term-string">"Undergraduate Research Assistant @ FEC CSE Research Lab"</span></div>
<div class="term-line">  <span class="term-key">availability:</span> <span class="term-string">"Open to SWE Internships, Research, Freelance &amp; Full-Time"</span></div>`,

    projects: () => `
<div class="term-line"><span class="term-key">[1] Fix_my_city</span> — Bangladesh Civic Infrastructure GIS &amp; Issue Tracker</div>
<div class="term-line">    ↳ Live: <a class="term-link" href="https://fix-my-city-rouge-three.vercel.app/" target="_blank" rel="noopener">fix-my-city-rouge-three.vercel.app</a> | <a class="term-link" href="https://github.com/MEhe132/Fix_my_city" target="_blank" rel="noopener">GitHub</a></div>
<div class="term-line"><span class="term-key">[2] Meal_management_web_app (Plate &amp; Spoon)</span> — Real-Time Hostel Meal &amp; Auditing</div>
<div class="term-line">    ↳ Live: <a class="term-link" href="https://fix-my-city-jotq.vercel.app/menu" target="_blank" rel="noopener">fix-my-city-jotq.vercel.app/menu</a> | <a class="term-link" href="https://github.com/MEhe132/Meal_management_web_app" target="_blank" rel="noopener">GitHub</a></div>
<div class="term-line"><span class="term-key">[3] Convert_php_to_usdt</span> — Win32 Desktop PHP ⇄ USDT &amp; OCR Calculator Overlay</div>
<div class="term-line">    ↳ Release: <a class="term-link" href="https://github.com/MEhe132/Convert_php_to_usdt/releases/tag/v4.0.0" target="_blank" rel="noopener">v4.0.0 Release</a> | <a class="term-link" href="https://github.com/MEhe132/Convert_php_to_usdt" target="_blank" rel="noopener">GitHub</a></div>
<div class="term-line"><span class="term-key">[4] Safe-Seller-Keep-Alive</span> — Stealth Manifest V3 Marketplace Session Manager</div>
<div class="term-line">    ↳ Release: <a class="term-link" href="https://github.com/MEhe132/Safe-Seller-Keep-Alive/releases/tag/v1.3.0" target="_blank" rel="noopener">v1.3.0 Release</a> | <a class="term-link" href="https://github.com/MEhe132/Safe-Seller-Keep-Alive" target="_blank" rel="noopener">GitHub</a></div>`,

    ls: () => COMMAND_HANDLERS.projects(),
    "ls -la": () => COMMAND_HANDLERS.projects(),

    research: () => `
<div class="term-line"><span class="term-key">institution:</span> <span class="term-string">"Faridpur Engineering College (FEC)"</span></div>
<div class="term-line"><span class="term-key">affiliation:</span> <span class="term-string">"FEC CSE Research Lab"</span></div>
<div class="term-line"><span class="term-key">designation:</span> <span class="term-string">"Undergraduate Research Assistant"</span></div>
<div class="term-line"><span class="term-key">status:</span> <span class="term-string">"Actively conducting CSE research; manuscripts in progress (upcoming)"</span></div>`,

    skills: () => `
<div class="term-line"><span class="term-key">languages:</span> [Python, C, C++, Java, JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3]</div>
<div class="term-line"><span class="term-key">frameworks:</span> [Django, Flask, SQLAlchemy, Tkinter, Tailwind CSS, Node.js, Leaflet.js]</div>
<div class="term-line"><span class="term-key">systems:</span> [Windows Win32 API (ctypes), Manifest V3 Extensions, SSE, ReportLab, Pillow, Git/CI]</div>`,

    contact: () => `
<div class="term-line">📧 Email:    <a class="term-link" href="mailto:mhbhuiyan2004@gmail.com">mhbhuiyan2004@gmail.com</a></div>
<div class="term-line">💼 LinkedIn: <a class="term-link" href="https://www.linkedin.com/in/mehedi-hasan-a8bb362a1/" target="_blank" rel="noopener">linkedin.com/in/mehedi-hasan-a8bb362a1</a></div>
<div class="term-line">✈️ Telegram: <a class="term-link" href="https://t.me/Mh_13585" target="_blank" rel="noopener">@Mh_13585</a></div>
<div class="term-line">🎮 Discord:  <span class="term-string">mh_13585</span></div>`,

    resume: () => {
      window.open("assets/Mehedi_Hasan_Resume.pdf", "_blank", "noopener");
      return `<div class="term-line"><span class="term-string">✔ Opening Mehedi_Hasan_Resume.pdf in a new tab...</span> (<a class="term-link" href="assets/Mehedi_Hasan_Resume.pdf" download>Click here to download directly</a>)</div>`;
    },

    cmdk: () => {
      openCommandPalette();
      return `<div class="term-line"><span class="term-string">✔ Opened Command Palette (Ctrl + K)</span></div>`;
    }
  };

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[c]));
  }

  function runTerminalCommand(rawCmd) {
    if (!termOutput) return;
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear" || cmd === "cls") {
      termOutput.innerHTML = "";
      return;
    }

    const echoLine = document.createElement("div");
    echoLine.className = "term-line";
    echoLine.innerHTML = `<span class="term-prompt">mehedi@MEhe132</span>:<span class="term-path">~/portfolio</span>$ ${escapeHtml(rawCmd)}`;
    termOutput.appendChild(echoLine);

    const responseBlock = document.createElement("div");
    responseBlock.style.marginBottom = "0.85rem";
    if (COMMAND_HANDLERS[cmd]) {
      responseBlock.innerHTML = COMMAND_HANDLERS[cmd]();
    } else {
      responseBlock.innerHTML = `<div class="term-line">Command not found: <span class="term-key">${escapeHtml(rawCmd)}</span>. Type <span class="term-string">help</span> for available commands.</div>`;
    }
    termOutput.appendChild(responseBlock);
    termOutput.scrollTop = termOutput.scrollHeight;
  }

  if (termInput) {
    termInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const val = termInput.value;
        termInput.value = "";
        runTerminalCommand(val);
      }
    });
  }

  cmdChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const cmd = chip.getAttribute("data-cmd");
      if (cmd) runTerminalCommand(cmd);
    });
  });

  // --------------------------------------------------------------------------
  // 3. Native <dialog> Modals + Modern Web Guidance Light-Dismiss Fallback
  // --------------------------------------------------------------------------
  const modalTriggers = document.querySelectorAll("[data-modal-target]");
  modalTriggers.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-modal-target");
      const dialog = document.getElementById(targetId);
      if (dialog && typeof dialog.showModal === "function") {
        dialog.showModal();
      }
    });
  });

  document.querySelectorAll("dialog.arch-dialog").forEach((dialog) => {
    const closeBtn = dialog.querySelector(".modal-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => dialog.close());
    }

    // Fallback for browsers without native <dialog closedby="any"> support
    if (!("closedBy" in HTMLDialogElement.prototype)) {
      dialog.addEventListener("click", (event) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;
        if (isDialogContent) return;
        dialog.close();
      });
    }
  });

  // --------------------------------------------------------------------------
  // 4. Direct Contact Form Handler
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById("portfolio-contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("cf-name").value.trim();
      const email = document.getElementById("cf-email").value.trim();
      const subject = document.getElementById("cf-subject").value.trim() || "Portfolio Inquiry";
      const message = document.getElementById("cf-message").value.trim();

      const body = `Hi Mehedi,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`;
      const mailtoUrl = `mailto:mhbhuiyan2004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;

      const statusEl = document.getElementById("cf-status");
      if (statusEl) {
        statusEl.textContent = "✔ Opening your email client with the pre-filled message to mhbhuiyan2004@gmail.com!";
        statusEl.style.display = "block";
      }
    });
  }

  // --------------------------------------------------------------------------
  // 5. SPECIAL FEATURE 1: Interactive Cyber-Network Constellation Canvas
  // --------------------------------------------------------------------------
  const canvas = document.getElementById("cyber-network-canvas");
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let particles = [];
    const mouse = { x: -9999, y: -9999 };

    function resizeCanvas() {
      const heroEl = canvas.parentElement;
      width = canvas.width = heroEl ? heroEl.clientWidth : window.innerWidth;
      height = canvas.height = heroEl ? heroEl.clientHeight : 560;
      const count = Math.min(55, Math.max(24, Math.floor((width * height) / 16000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 1.6 + 1
      }));
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const heroSection = canvas.parentElement;
    if (heroSection) {
      heroSection.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      });
      heroSection.addEventListener("mouseleave", () => {
        mouse.x = -9999;
        mouse.y = -9999;
      });
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function renderNetwork() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 247, 255, 0.55)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 125) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 247, 255, ${(1 - dist / 125) * 0.16})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mdist = Math.hypot(mdx, mdy);
        if (mdist < 160) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0, 247, 255, ${(1 - mdist / 160) * 0.38})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }
      if (!prefersReducedMotion) {
        requestAnimationFrame(renderNetwork);
      }
    }
    renderNetwork();
  }

  // --------------------------------------------------------------------------
  // 6. SPECIAL FEATURE 2: VS Code / Linear Style Command Palette (Ctrl + K)
  // --------------------------------------------------------------------------
  const cmdkDialog = document.getElementById("cmdk-dialog");
  const cmdkInput = document.getElementById("cmdk-input");
  const cmdkList = document.getElementById("cmdk-list");
  const floatingCmdkBtn = document.getElementById("floating-cmdk-trigger");
  const heroCmdkBtn = document.getElementById("hero-cmdk-btn");

  const PALETTE_ACTIONS = [
    {
      title: "Download CV / Resume (Reverse-Chronological PDF)",
      tag: "PDF / CV",
      icon: "📄",
      keywords: "resume cv pdf download education experience",
      run: () => window.open("assets/Mehedi_Hasan_Resume.pdf", "_blank", "noopener")
    },
    {
      title: "Launch Fix_my_city — Live Civic GIS Platform",
      tag: "Live Demo",
      icon: "🏙️",
      keywords: "fix my city civic gis django leaflet reportlab vercel",
      run: () => window.open("https://fix-my-city-rouge-three.vercel.app/", "_blank", "noopener")
    },
    {
      title: "Launch Plate & Spoon (Meal_management_web_app)",
      tag: "Live App",
      icon: "🍽️",
      keywords: "meal management plate spoon flask sse sql vercel",
      run: () => window.open("https://fix-my-city-jotq.vercel.app/menu", "_blank", "noopener")
    },
    {
      title: "View Convert_php_to_usdt Release v4.0.0",
      tag: "Release v4.0.0",
      icon: "🧮",
      keywords: "convert php usdt calculator overlay win32 ocr tkinter",
      run: () => window.open("https://github.com/MEhe132/Convert_php_to_usdt/releases/tag/v4.0.0", "_blank", "noopener")
    },
    {
      title: "View Safe-Seller-Keep-Alive Release v1.3.0",
      tag: "Release v1.3.0",
      icon: "🛡️",
      keywords: "safe seller keep alive extension manifest v3 g2g u7buy",
      run: () => window.open("https://github.com/MEhe132/Safe-Seller-Keep-Alive/releases/tag/v1.3.0", "_blank", "noopener")
    },
    {
      title: "Jump to FEC CSE Research Lab & Academic Timeline",
      tag: "Section",
      icon: "🔬",
      keywords: "research lab fec cse faridpur engineering college",
      run: () => {
        document.getElementById("research")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      title: "Jump to Languages, Frameworks & Tech Stack",
      tag: "Section",
      icon: "⚙️",
      keywords: "skills tech stack python django flask node typescript",
      run: () => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      title: "Copy Email Address (mhbhuiyan2004@gmail.com)",
      tag: "Clipboard",
      icon: "📋",
      keywords: "copy email gmail contact mhbhuiyan2004",
      run: () => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText("mhbhuiyan2004@gmail.com");
        }
        runTerminalCommand("contact");
      }
    },
    {
      title: "Open GitHub Profile (@MEhe132)",
      tag: "Social",
      icon: "🐙",
      keywords: "github profile mehe132 repos",
      run: () => window.open("https://github.com/MEhe132", "_blank", "noopener")
    },
    {
      title: "Open LinkedIn Profile (Mehedi Hasan)",
      tag: "Social",
      icon: "💼",
      keywords: "linkedin profile connect",
      run: () => window.open("https://www.linkedin.com/in/mehedi-hasan-a8bb362a1/", "_blank", "noopener")
    }
  ];

  let activeCmdIdx = 0;
  let filteredActions = [...PALETTE_ACTIONS];

  function renderPaletteList(query = "") {
    if (!cmdkList) return;
    const q = query.trim().toLowerCase();
    filteredActions = PALETTE_ACTIONS.filter(
      (item) =>
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q) ||
        item.keywords.includes(q)
    );
    activeCmdIdx = 0;

    if (filteredActions.length === 0) {
      cmdkList.innerHTML = `<div style="padding: 1rem; font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-muted); text-align: center;">No matching commands found.</div>`;
      return;
    }

    cmdkList.innerHTML = filteredActions
      .map(
        (item, idx) => `
      <button type="button" class="cmdk-item ${idx === activeCmdIdx ? "active" : ""}" data-cmdk-idx="${idx}" role="option" aria-selected="${idx === activeCmdIdx}">
        <span class="cmdk-item-left">
          <span>${item.icon}</span>
          <span>${item.title}</span>
        </span>
        <span class="cmdk-item-tag">${item.tag}</span>
      </button>`
      )
      .join("");

    cmdkList.querySelectorAll(".cmdk-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        const i = Number(btn.getAttribute("data-cmdk-idx"));
        executePaletteAction(i);
      });
    });
  }

  function updateActiveHighlight() {
    if (!cmdkList) return;
    const items = cmdkList.querySelectorAll(".cmdk-item");
    items.forEach((el, idx) => {
      el.classList.toggle("active", idx === activeCmdIdx);
      el.setAttribute("aria-selected", String(idx === activeCmdIdx));
      if (idx === activeCmdIdx) {
        el.scrollIntoView({ block: "nearest" });
      }
    });
  }

  function executePaletteAction(idx) {
    const item = filteredActions[idx];
    if (!item) return;
    if (cmdkDialog && cmdkDialog.open) {
      cmdkDialog.close();
    }
    item.run();
  }

  function openCommandPalette() {
    if (!cmdkDialog || typeof cmdkDialog.showModal !== "function") return;
    if (!cmdkDialog.open) {
      renderPaletteList("");
      if (cmdkInput) cmdkInput.value = "";
      cmdkDialog.showModal();
      setTimeout(() => cmdkInput?.focus(), 20);
    }
  }

  if (floatingCmdkBtn) {
    floatingCmdkBtn.addEventListener("click", openCommandPalette);
  }
  if (heroCmdkBtn) {
    heroCmdkBtn.addEventListener("click", openCommandPalette);
  }

  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (cmdkDialog && cmdkDialog.open) {
        cmdkDialog.close();
      } else {
        openCommandPalette();
      }
    }
  });

  if (cmdkInput) {
    cmdkInput.addEventListener("input", () => {
      renderPaletteList(cmdkInput.value);
    });
    cmdkInput.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (filteredActions.length > 0) {
          activeCmdIdx = (activeCmdIdx + 1) % filteredActions.length;
          updateActiveHighlight();
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (filteredActions.length > 0) {
          activeCmdIdx = (activeCmdIdx - 1 + filteredActions.length) % filteredActions.length;
          updateActiveHighlight();
        }
      } else if (e.key === "Enter") {
        e.preventDefault();
        executePaletteAction(activeCmdIdx);
      }
    });
  }

  // --------------------------------------------------------------------------
  // 7. SPECIAL FEATURE 3: Live GitHub Repository Telemetry Fetcher
  // --------------------------------------------------------------------------
  const FALLBACK_REPO_META = {
    Fix_my_city: { lang: "Python", stars: 1, forks: 0, updated: "Active 2026", sizeKb: 420 },
    Meal_management_web_app: { lang: "Python", stars: 1, forks: 0, updated: "Active 2026", sizeKb: 380 },
    Convert_php_to_usdt: { lang: "Python", stars: 1, forks: 0, updated: "Release v4.0.0", sizeKb: 145 },
    "Safe-Seller-Keep-Alive": { lang: "JavaScript", stars: 1, forks: 0, updated: "Release v1.3.0", sizeKb: 85 }
  };

  function renderRepoBadge(repoName, data) {
    const slot = document.querySelector(`[data-repo-meta="${repoName}"]`);
    if (!slot) return;
    slot.innerHTML = `
      <span class="repo-stat">● <strong>${data.lang}</strong></span>
      <span class="repo-stat">★ <strong>${data.stars}</strong></span>
      <span class="repo-stat">⑂ <strong>${data.forks}</strong></span>
      <span class="repo-stat">🕒Sync: <strong>${data.updated}</strong></span>
    `;
  }

  async function hydrateGitHubTelemetry() {
    // Render instant defaults first so there's zero layout flicker
    Object.entries(FALLBACK_REPO_META).forEach(([name, meta]) => renderRepoBadge(name, meta));
    try {
      const res = await fetch("https://api.github.com/users/MEhe132/repos?per_page=100", {
        headers: { Accept: "application/vnd.github+json" }
      });
      if (!res.ok) return;
      const repos = await res.json();
      if (!Array.isArray(repos)) return;

      repos.forEach((r) => {
        if (!r || !r.name) return;
        const pushedDate = r.pushed_at
          ? new Date(r.pushed_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
          : "Active";
        renderRepoBadge(r.name, {
          lang: r.language || FALLBACK_REPO_META[r.name]?.lang || "Code",
          stars: typeof r.stargazers_count === "number" ? r.stargazers_count : 1,
          forks: typeof r.forks_count === "number" ? r.forks_count : 0,
          updated: pushedDate
        });
      });
    } catch {
      // Silently keep fallback telemetry if offline or rate-limited
    }
  }
  hydrateGitHubTelemetry();

  // --------------------------------------------------------------------------
  // 8. SPECIAL FEATURE 4: 3D Interactive Card Tilt + Scroll Reveal Fallback
  // --------------------------------------------------------------------------
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (canHover && !reducedMotion) {
    document.querySelectorAll(".project-card[data-tilt]").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -3.2;
        const rotateY = ((x - centerX) / centerX) * 3.2;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
        card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  // Fallback for browsers that do not support CSS Scroll-Driven View Timelines
  if (
    !reducedMotion &&
    typeof CSS !== "undefined" &&
    !CSS.supports("(animation-timeline: view()) and (animation-range: entry)") &&
    "IntersectionObserver" in window
  ) {
    const revealEls = document.querySelectorAll(".scroll-reveal");
    revealEls.forEach((el) => el.classList.add("io-hidden"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("io-hidden");
            entry.target.classList.add("io-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => io.observe(el));
  }
});
