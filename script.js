/* ==========================================================================
   MEHEDI HASAN (MEhe132) — INTERACTIVE TERMINAL, TYPING & ARCHITECTURE LOGIC
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Dynamic Typing Effect in Hero
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

  // 2. Interactive Terminal Emulator
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

    "ls": () => COMMAND_HANDLERS.projects(),
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
    }
  };

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

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[c]));
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

  // 3. Native <dialog> Architecture Modals with Backdrop Light-Dismiss
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
    // Close button inside modal
    const closeBtn = dialog.querySelector(".modal-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => dialog.close());
    }
    // Click outside backdrop to close
    dialog.addEventListener("click", (e) => {
      const rect = dialog.getBoundingClientRect();
      const clickedInDialog =
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width;
      if (!clickedInDialog) {
        dialog.close();
      }
    });
  });

  // 4. Direct Contact Form Handler (Opens pre-filled mailto or copies message)
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
});
