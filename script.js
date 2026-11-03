/* ==========================================================================
   MEHEDI HASAN (MEhe132) — INTERACTIVE TERMINAL, CYBER CANVAS, CMD+K PALETTE,
   LIVE GITHUB API TELEMETRY, 3D CARD TILT & SCROLL REVEAL ENGINE (v2.0)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // --------------------------------------------------------------------------
  // 1. Dynamic Typing Effect in Hero
  // --------------------------------------------------------------------------
  const roles = [
    "Python, Automation & Full-Stack Tooling Developer",
    "Research Assistant @ FEC CSE Research Lab",
    "Systems Builder: Web Apps, Win32 & Extensions",
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
<div class="term-line">  <span class="term-key">white</span>      — Switch to White Mode (Clean Light Theme)</div>
<div class="term-line">  <span class="term-key">negative</span>   — Switch to Negative Mode (Inverted Cyber Theme)</div>
<div class="term-line">  <span class="term-key">dark</span>       — Switch to Default Cyber Dark Mode</div>
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
    },

    white: () => {
      applyPortfolioTheme("white");
      return `<div class="term-line"><span class="term-string">☀️ Switched to White Mode (Clean Light Theme)</span></div>`;
    },

    negative: () => {
      applyPortfolioTheme("negative");
      return `<div class="term-line"><span class="term-string">🌗 Switched to Negative Mode (Inverted Cyber Theme)</span></div>`;
    },

    dark: () => {
      applyPortfolioTheme("dark");
      return `<div class="term-line"><span class="term-string">🌙 Switched to Default Cyber Dark Mode</span></div>`;
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
  // 4. SPECIAL FEATURE 1: 3D Interactive Cyber Particle / Neural Network (Three.js WebGL + 2D Fallback)
  // --------------------------------------------------------------------------
  const canvas = document.getElementById("cyber-network-canvas");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const speedScale = prefersReducedMotion ? 0.35 : 1.0;

  function initCyberNetwork() {
    if (!canvas) return;

    if (typeof window.THREE !== "undefined") {
      const THREE = window.THREE;
      const heroEl = canvas.parentElement;
      let width = heroEl ? heroEl.clientWidth : window.innerWidth;
      let height = heroEl ? heroEl.clientHeight : 600;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
      camera.position.z = 240;

      let renderer;
      try {
        renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      } catch {
        renderer = null;
      }

      if (renderer) {
        const group = new THREE.Group();
        scene.add(group);

        // 1. 3D Wireframe Cyber Icosahedron Core
        const icoGeo = new THREE.IcosahedronGeometry(95, 1);
        const icoMat = new THREE.MeshBasicMaterial({
          color: 0x00f7ff,
          wireframe: true,
          transparent: true,
          opacity: 0.14
        });
        const icoMesh = new THREE.Mesh(icoGeo, icoMat);
        group.add(icoMesh);

        // 2. 3D Neural Particle Cloud & Synaptic Connecting Lines
        const nodeCount = 72;
        const positions = new Float32Array(nodeCount * 3);
        const velocities = [];
        const spread = 380;

        for (let i = 0; i < nodeCount; i++) {
          positions[i * 3] = (Math.random() - 0.5) * spread * 1.4;
          positions[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.85;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 180;
          velocities.push({
            vx: (Math.random() - 0.5) * 0.28 * speedScale,
            vy: (Math.random() - 0.5) * 0.28 * speedScale,
            vz: (Math.random() - 0.5) * 0.22 * speedScale
          });
        }

        const nodesGeo = new THREE.BufferGeometry();
        nodesGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

        const nodesMat = new THREE.PointsMaterial({
          color: 0x00f7ff,
          size: 3.8,
          transparent: true,
          opacity: 0.85
        });
        const pointsMesh = new THREE.Points(nodesGeo, nodesMat);
        group.add(pointsMesh);

        const lineMat = new THREE.LineBasicMaterial({
          color: 0x00f7ff,
          transparent: true,
          opacity: 0.22
        });
        const maxSegments = nodeCount * nodeCount;
        const linePositions = new Float32Array(maxSegments * 6);
        const lineGeo = new THREE.BufferGeometry();
        lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
        const linesMesh = new THREE.LineSegments(lineGeo, lineMat);
        group.add(linesMesh);

        let targetRotX = 0;
        let targetRotY = 0;

        if (heroEl) {
          heroEl.addEventListener("mousemove", (e) => {
            const rect = heroEl.getBoundingClientRect();
            const normX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
            const normY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
            targetRotY = normX * 0.55;
            targetRotX = normY * 0.35;
          });
          heroEl.addEventListener("mouseleave", () => {
            targetRotX = 0;
            targetRotY = 0;
          });
        }

        window.addEventListener("resize", () => {
          if (!heroEl) return;
          width = heroEl.clientWidth;
          height = heroEl.clientHeight;
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
        });

        function animateThree() {
          icoMesh.rotation.x += 0.0022 * speedScale;
          icoMesh.rotation.y += 0.0035 * speedScale;

          group.rotation.y += (targetRotY - group.rotation.y) * 0.06;
          group.rotation.x += (targetRotX - group.rotation.x) * 0.06;

          const posAttr = nodesGeo.attributes.position.array;
          let segIdx = 0;

          for (let i = 0; i < nodeCount; i++) {
            const ix = i * 3;
            posAttr[ix] += velocities[i].vx;
            posAttr[ix + 1] += velocities[i].vy;
            posAttr[ix + 2] += velocities[i].vz;

            if (Math.abs(posAttr[ix]) > spread * 0.7) velocities[i].vx *= -1;
            if (Math.abs(posAttr[ix + 1]) > spread * 0.45) velocities[i].vy *= -1;
            if (Math.abs(posAttr[ix + 2]) > 95) velocities[i].vz *= -1;

            for (let j = i + 1; j < nodeCount; j++) {
              const jx = j * 3;
              const dx = posAttr[ix] - posAttr[jx];
              const dy = posAttr[ix + 1] - posAttr[jx + 1];
              const dz = posAttr[ix + 2] - posAttr[jx + 2];
              const distSq = dx * dx + dy * dy + dz * dz;
              if (distSq < 88 * 88) {
                linePositions[segIdx++] = posAttr[ix];
                linePositions[segIdx++] = posAttr[ix + 1];
                linePositions[segIdx++] = posAttr[ix + 2];
                linePositions[segIdx++] = posAttr[jx];
                linePositions[segIdx++] = posAttr[jx + 1];
                linePositions[segIdx++] = posAttr[jx + 2];
              }
            }
          }
          nodesGeo.attributes.position.needsUpdate = true;
          lineGeo.setDrawRange(0, segIdx / 3);
          lineGeo.attributes.position.needsUpdate = true;

          renderer.render(scene, camera);
          requestAnimationFrame(animateThree);
        }
        animateThree();
        return;
      }
    }

    // 2D Canvas Fallback if WebGL is unavailable on older/power-saving laptop browsers
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
      let height = (canvas.height = canvas.parentElement?.clientHeight || 560);
      const mouse = { x: -9999, y: -9999 };

      const particles = Array.from({ length: 48 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5 * speedScale,
        vy: (Math.random() - 0.5) * 0.5 * speedScale,
        r: 1.8
      }));

      canvas.parentElement?.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      });
      canvas.parentElement?.addEventListener("mouseleave", () => {
        mouse.x = -9999;
        mouse.y = -9999;
      });

      window.addEventListener("resize", () => {
        width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
        height = canvas.height = canvas.parentElement?.clientHeight || 560;
      });

      function drawFallback() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0, 247, 255, 0.65)";
          ctx.fill();

          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (dist < 110) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(0, 247, 255, ${(1 - dist / 110) * 0.18})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }

          const mdist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (mdist < 140) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(0, 247, 255, ${(1 - mdist / 140) * 0.35})`;
            ctx.stroke();
          }
        }
        requestAnimationFrame(drawFallback);
      }
      drawFallback();
    }
  }

  // Allow Three.js to finish loading if needed
  if (typeof window.THREE !== "undefined") {
    initCyberNetwork();
  } else {
    window.addEventListener("load", initCyberNetwork);
  }

  // --------------------------------------------------------------------------
  // 6. SPECIAL FEATURE 2: VS Code / Linear Style Command Palette (Ctrl + K) + Theme Engine
  // --------------------------------------------------------------------------
  const cmdkDialog = document.getElementById("cmdk-dialog");
  const cmdkInput = document.getElementById("cmdk-input");
  const cmdkList = document.getElementById("cmdk-list");
  const floatingCmdkBtn = document.getElementById("floating-cmdk-trigger");
  const heroCmdkBtn = document.getElementById("hero-cmdk-btn");

  function applyPortfolioTheme(mode) {
    if (mode === "white" || mode === "negative") {
      document.documentElement.setAttribute("data-theme", mode);
      try {
        localStorage.setItem("mehe132_theme", mode);
      } catch {}
    } else {
      document.documentElement.removeAttribute("data-theme");
      try {
        localStorage.removeItem("mehe132_theme");
      } catch {}
    }
  }

  // Restore saved theme if user selected one previously
  try {
    const savedTheme = localStorage.getItem("mehe132_theme");
    if (savedTheme === "white" || savedTheme === "negative") {
      applyPortfolioTheme(savedTheme);
    }
  } catch {}

  const PALETTE_ACTIONS = [
    {
      title: "Switch to White Mode (Clean Light Theme)",
      tag: "Theme",
      icon: "☀️",
      keywords: "white mode light theme bright day",
      run: () => applyPortfolioTheme("white")
    },
    {
      title: "Switch to Negative Mode (Inverted Cyber Theme)",
      tag: "Theme",
      icon: "🌗",
      keywords: "negative mode invert high contrast theme",
      run: () => applyPortfolioTheme("negative")
    },
    {
      title: "Switch to Cyber Dark Mode (Default Theme)",
      tag: "Theme",
      icon: "🌙",
      keywords: "dark mode default cyber tokyo night reset theme",
      run: () => applyPortfolioTheme("dark")
    },
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
  // 7. SPECIAL FEATURE 3: Live GitHub API Repository Fetcher (Cards + Live Feed Grid)
  // --------------------------------------------------------------------------
  const FALLBACK_REPO_META = {
    Fix_my_city: {
      lang: "Python",
      stars: 1,
      forks: 0,
      updated: "Active 2026",
      sizeKb: 420,
      desc: "Bangladesh Civic Infrastructure Issue Tracker & GIS Platform with EXIF/AI verification and ReportLab PDF petitions.",
      url: "https://github.com/MEhe132/Fix_my_city"
    },
    Meal_management_web_app: {
      lang: "Python",
      stars: 1,
      forks: 0,
      updated: "Active 2026",
      sizeKb: 380,
      desc: "Real-Time Hostel Meal & Financial Auditing System (Plate & Spoon) powered by Flask, SQLAlchemy & SSE.",
      url: "https://github.com/MEhe132/Meal_management_web_app"
    },
    Convert_php_to_usdt: {
      lang: "Python",
      stars: 1,
      forks: 0,
      updated: "Release v4.0.0",
      sizeKb: 145,
      desc: "Frameless Win32 Desktop PHP ⇄ USDT Currency & Google Lens OCR Calculator Overlay.",
      url: "https://github.com/MEhe132/Convert_php_to_usdt"
    },
    "Safe-Seller-Keep-Alive": {
      lang: "JavaScript",
      stars: 1,
      forks: 0,
      updated: "Release v1.3.0",
      sizeKb: 85,
      desc: "Stealth Session Keep-Alive Browser Extension (Manifest V3) for G2G & U7BUY with wake-lock & Cloudflare guard.",
      url: "https://github.com/MEhe132/Safe-Seller-Keep-Alive"
    },
    "MEhe132.github.io": {
      lang: "HTML/CSS/JS",
      stars: 1,
      forks: 0,
      updated: "Live Pages",
      sizeKb: 120,
      desc: "Personal Developer & CSE Research Portfolio of Mehedi Hasan (@MEhe132) — Live at https://mehe132.github.io",
      url: "https://github.com/MEhe132/MEhe132.github.io"
    }
  };

  function renderRepoBadge(repoName, data) {
    const slot = document.querySelector(`[data-repo-meta="${repoName}"]`);
    if (!slot) return;
    slot.innerHTML = `
      <span class="repo-stat">● <strong>${escapeHtml(String(data.lang))}</strong></span>
      <span class="repo-stat">★ <strong>${escapeHtml(String(data.stars))}</strong></span>
      <span class="repo-stat">⑂ <strong>${escapeHtml(String(data.forks))}</strong></span>
      <span class="repo-stat">🕒 Pushed: <strong>${escapeHtml(String(data.updated))}</strong></span>
    `;
  }

  function renderLiveFeedGrid(repoList, isLiveApi = false) {
    const gridEl = document.getElementById("gh-live-repos-grid");
    const statusEl = document.getElementById("gh-api-status-text");
    if (!gridEl) return;

    if (statusEl) {
      const nowStr = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
      statusEl.textContent = isLiveApi
        ? `✔ Connected to api.github.com/users/MEhe132/repos · Showing ${repoList.length} public repositories (Synced at ${nowStr})`
        : `⚡ Displaying cached repository snapshot (${repoList.length} repositories)`;
    }

    gridEl.innerHTML = repoList
      .map(
        (r) => `
      <a href="${escapeHtml(r.url)}" target="_blank" rel="noopener" class="live-repo-card">
        <div>
          <div class="live-repo-name">
            <span>📦 ${escapeHtml(r.name)}</span>
            <span style="font-size: 0.75rem; color: var(--text-muted);">↗</span>
          </div>
          <p class="live-repo-desc">${escapeHtml(r.desc || "Public engineering repository by @MEhe132.")}</p>
        </div>
        <div class="live-repo-meta">
          <span>● <strong style="color: var(--cyan);">${escapeHtml(String(r.lang))}</strong></span>
          <span>★ <strong>${escapeHtml(String(r.stars))}</strong></span>
          <span>⑂ <strong>${escapeHtml(String(r.forks))}</strong></span>
          <span>🕒 ${escapeHtml(String(r.updated))}</span>
        </div>
      </a>`
      )
      .join("");
  }

  async function hydrateGitHubTelemetry() {
    // 1. Render instant defaults first so there's zero layout flicker
    Object.entries(FALLBACK_REPO_META).forEach(([name, meta]) => renderRepoBadge(name, meta));
    renderLiveFeedGrid(
      Object.entries(FALLBACK_REPO_META).map(([name, meta]) => ({ name, ...meta })),
      false
    );

    // 2. Fetch live from GitHub REST API
    try {
      const res = await fetch("https://api.github.com/users/MEhe132/repos?sort=pushed&per_page=12", {
        headers: { Accept: "application/vnd.github+json" }
      });
      if (!res.ok) return;
      const repos = await res.json();
      if (!Array.isArray(repos) || repos.length === 0) return;

      const normalized = [];
      let totalStars = 0;
      let totalForks = 0;
      const langWeights = {};

      repos.forEach((r) => {
        if (!r || !r.name) return;
        const stars = typeof r.stargazers_count === "number" ? r.stargazers_count : 0;
        const forks = typeof r.forks_count === "number" ? r.forks_count : 0;
        totalStars += stars;
        totalForks += forks;
        if (r.language) {
          langWeights[r.language] = (langWeights[r.language] || 0) + Math.max(r.size || 50, 25);
        }

        const pushedDate = r.pushed_at
          ? new Date(r.pushed_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
          : "Active";
        const item = {
          name: r.name,
          lang: r.language || FALLBACK_REPO_META[r.name]?.lang || "Code",
          stars,
          forks,
          updated: pushedDate,
          desc: r.description || FALLBACK_REPO_META[r.name]?.desc || "Open-source project by Mehedi Hasan (@MEhe132).",
          url: r.html_url || `https://github.com/MEhe132/${r.name}`
        };
        normalized.push(item);
        renderRepoBadge(r.name, item);
      });

      // Update Native GitHub Stats Card
      const elRepos = document.getElementById("stat-public-repos");
      const elStars = document.getElementById("stat-total-stars");
      const elForks = document.getElementById("stat-total-forks");
      if (elRepos) elRepos.textContent = String(repos.length);
      if (elStars) elStars.textContent = String(totalStars);
      if (elForks) elForks.textContent = String(totalForks);

      // Also fetch user profile for followers/public_repos accuracy
      fetch("https://api.github.com/users/MEhe132", { headers: { Accept: "application/vnd.github+json" } })
        .then((uRes) => (uRes.ok ? uRes.json() : null))
        .then((uData) => {
          if (!uData) return;
          if (elRepos && typeof uData.public_repos === "number") {
            elRepos.textContent = String(uData.public_repos);
          }
          const elFollowers = document.getElementById("stat-followers");
          if (elFollowers && typeof uData.followers === "number") {
            elFollowers.textContent = `${uData.followers} / ${uData.following || 0}`;
          }
        })
        .catch(() => {});

      if (normalized.length > 0) {
        renderLiveFeedGrid(normalized.slice(0, 6), true);
      }
    } catch {
      // Silently keep fallback telemetry if offline or rate-limited
    }
  }
  hydrateGitHubTelemetry();

  const refreshBtn = document.getElementById("gh-api-refresh-btn");
  if (refreshBtn) {
    refreshBtn.addEventListener("click", () => {
      refreshBtn.textContent = "⏳ Syncing...";
      hydrateGitHubTelemetry().finally(() => {
        setTimeout(() => {
          refreshBtn.textContent = "🔄 Refresh API Now";
        }, 400);
      });
    });
  }

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
