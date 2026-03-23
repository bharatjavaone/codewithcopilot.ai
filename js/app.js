// ============================================================
//  app.js — codewithcopilot.ai
//  Handles: page routing, module rendering, quiz engine,
//           progress tracking (localStorage), sidebar nav
// ============================================================

// ── Progress Storage (localStorage) ─────────────────────────
// Stores: { "101": { completed: true, score: 6, total: 7, best: 6 }, ... }
const STORAGE_KEY = 'cwc_progress_v1';

const Progress = {
  get() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
    catch { return {}; }
  },
  save(data) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
    catch { /* storage unavailable — silently continue */ }
  },
  setModule(id, score, total) {
    const data = this.get();
    const best = data[id]?.best ?? 0;
    data[id] = {
      completed: true,
      score,
      total,
      best: Math.max(best, score)
    };
    this.save(data);
  },
  isCompleted(id) {
    return !!this.get()[id]?.completed;
  },
  getBest(id) {
    const entry = this.get()[id];
    if (!entry) return null;
    return { score: entry.best, total: entry.total };
  },
  countCompleted() {
    return Object.values(this.get()).filter(v => v.completed).length;
  }
};

// ── URL Param Helper ─────────────────────────────────────────
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

// ── Module Lookup ────────────────────────────────────────────
function getModule(id) {
  return MODULES.find(m => m.id === id) || null;
}
function getModuleIndex(id) {
  return MODULES.findIndex(m => m.id === id);
}

// ── Escape HTML ──────────────────────────────────────────────
function esc(str) {
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

// ════════════════════════════════════════════════════════════
//  LEARN PAGE  (learn.html)
// ════════════════════════════════════════════════════════════

function initLearnPage() {
  renderProgressBanner();
  renderModuleGrid();
}

function renderProgressBanner() {
  const done  = Progress.countCompleted();
  const total = MODULES.length;
  const pct   = Math.round((done / total) * 100);

  document.getElementById('progress-subtitle').textContent =
    done === 0 ? 'Start your first lesson below ↓'
    : done === total ? '🎉 You\'ve completed all lessons!'
    : `${total - done} lesson${total - done !== 1 ? 's' : ''} remaining`;

  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('progress-label').textContent =
    `${done} of ${total} completed · ${pct}%`;
}

function renderModuleGrid() {
  const container = document.getElementById('modules-container');
  if (!container) return;

  // Group modules by series
  const seriesMap = {};
  MODULES.forEach(mod => {
    const s = mod.series || 'Other';
    if (!seriesMap[s]) seriesMap[s] = [];
    seriesMap[s].push(mod);
  });

  let html = '';
  Object.entries(seriesMap).forEach(([series, mods]) => {
    html += `<section class="series-section">
      <div class="series-title">${esc(series)}</div>
      <div class="modules-grid">`;

    mods.forEach(mod => {
      const best    = Progress.getBest(mod.id);
      const done    = Progress.isCompleted(mod.id);
      const scoreHtml = best
        ? `<span class="quiz-score">Best: ${best.score}/${best.total}</span>`
        : `<span class="badge badge-gray">Not started</span>`;

      html += `
        <a href="lesson.html?id=${esc(mod.id)}" class="module-card ${done ? 'completed' : ''}">
          <div class="module-card-header">
            <h3>${esc(mod.title)}</h3>
            <span class="module-status-icon ${done ? 'status-done' : 'status-todo'}">
              ${done ? '✓' : ''}
            </span>
          </div>
          <div class="module-card-footer">
            <div style="display:flex;gap:8px;align-items:center;">
              <span class="badge badge-level">${esc(mod.level)}</span>
              <span class="module-duration">⏱ ${esc(mod.duration)}</span>
            </div>
            ${scoreHtml}
          </div>
        </a>`;
    });

    html += `</div></section>`;
  });

  container.innerHTML = html;
}

// ════════════════════════════════════════════════════════════
//  LESSON PAGE  (lesson.html)
// ════════════════════════════════════════════════════════════

function initLessonPage() {
  const id = getParam('id');

  if (!id || !getModule(id)) {
    // Redirect to learn page if no valid module id
    window.location.href = 'learn.html';
    return;
  }

  // Update browser tab title
  const mod = getModule(id);
  document.title = `${mod.level}: ${mod.title} — codewithcopilot.ai`;

  renderSidebar(id);
  renderLesson(id);
}

// ── Sidebar ──────────────────────────────────────────────────

function renderSidebar(activeId) {
  const done  = Progress.countCompleted();
  const total = MODULES.length;
  const pct   = Math.round((done / total) * 100);

  document.getElementById('sidebar-progress-text').textContent =
    `${done} of ${total} lessons completed`;
  document.getElementById('sidebar-progress-fill').style.width = pct + '%';

  // Group by series
  const seriesMap = {};
  MODULES.forEach(mod => {
    const s = mod.series || 'Other';
    if (!seriesMap[s]) seriesMap[s] = [];
    seriesMap[s].push(mod);
  });

  let html = '';
  Object.entries(seriesMap).forEach(([series, mods]) => {
    html += `<div class="sidebar-series-label">${esc(series)}</div>`;
    mods.forEach(mod => {
      const isDone   = Progress.isCompleted(mod.id);
      const isActive = mod.id === activeId;
      html += `
        <a href="lesson.html?id=${esc(mod.id)}"
           class="sidebar-item ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}"
           title="${esc(mod.title)}">
          <span class="sidebar-item-indicator">${isDone ? '✓' : ''}</span>
          <span class="sidebar-item-text">
            <span class="sidebar-item-level">${esc(mod.level)}</span>
            <span class="sidebar-item-title">${esc(mod.title)}</span>
          </span>
        </a>`;
    });
  });

  document.getElementById('sidebar-nav').innerHTML = html;

  // Scroll active item into view
  setTimeout(() => {
    const activeEl = document.querySelector('.sidebar-item.active');
    if (activeEl) activeEl.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }, 100);
}

// ── Lesson Content ───────────────────────────────────────────

function renderLesson(id) {
  const mod = getModule(id);
  const idx = getModuleIndex(id);
  const prevMod = idx > 0 ? MODULES[idx - 1] : null;
  const nextMod = idx < MODULES.length - 1 ? MODULES[idx + 1] : null;

  const objectivesHtml = mod.objectives
    .map(o => `<li>${esc(o)}</li>`).join('');

  const takeawaysHtml = mod.takeaways
    .map(t => `<li>${esc(t)}</li>`).join('');

  const resourcesHtml = mod.resources
    .map(r => `<li><a href="${esc(r.url)}" target="_blank" rel="noopener">↗ ${esc(r.title)}</a></li>`)
    .join('');

  // Video: show real embed or placeholder
  const isPlaceholder = !mod.videoId || mod.videoId.startsWith('REPLACE_');
  const videoHtml = isPlaceholder
    ? `<div class="video-placeholder">
         <div class="video-placeholder-icon">🎬</div>
         <strong>Video not yet configured</strong>
         <span>Open <code>js/modules.js</code>, find <code>id: '${esc(mod.id)}'</code>,<br>
         and replace <code>videoId: '${esc(mod.videoId)}'</code> with the YouTube video ID.</span>
       </div>`
    : `<iframe
         src="https://www.youtube.com/embed/${esc(mod.videoId)}?rel=0&modestbranding=1"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen
         title="${esc(mod.title)}"
       ></iframe>`;

  // Best score display
  const best = Progress.getBest(id);
  const bestHtml = best
    ? `<span style="color:var(--success);font-weight:700;">Best: ${best.score}/${best.total}</span>`
    : '';

  // Prev/next nav
  const prevHtml = prevMod
    ? `<a href="lesson.html?id=${esc(prevMod.id)}" class="lesson-nav-link">
         <span class="lesson-nav-label">← Previous</span>
         <span class="lesson-nav-title">${esc(prevMod.level)}: ${esc(prevMod.title)}</span>
       </a>`
    : `<span class="lesson-nav-empty"></span>`;

  const nextHtml = nextMod
    ? `<a href="lesson.html?id=${esc(nextMod.id)}" class="lesson-nav-link next">
         <span class="lesson-nav-label">Next →</span>
         <span class="lesson-nav-title">${esc(nextMod.level)}: ${esc(nextMod.title)}</span>
       </a>`
    : `<span class="lesson-nav-empty"></span>`;

  const html = `
    <div class="lesson-content">

      <!-- Breadcrumb -->
      <nav class="breadcrumb">
        <a href="learn.html">Academy</a>
        <span class="breadcrumb-sep">›</span>
        <span>${esc(mod.series)}</span>
        <span class="breadcrumb-sep">›</span>
        <span>${esc(mod.level)}</span>
      </nav>

      <!-- Header -->
      <header class="lesson-header">
        <div class="lesson-meta">
          <span class="badge badge-level">${esc(mod.level)}</span>
          <span class="badge badge-blue">${esc(mod.series)}</span>
          ${bestHtml}
        </div>
        <h1>${esc(mod.title)}</h1>
        <div class="lesson-duration">⏱ ${esc(mod.duration)} · Video lesson + quiz</div>
      </header>

      <!-- Video -->
      <div class="video-wrapper">${videoHtml}</div>

      <!-- Learning Objectives -->
      <div class="content-block">
        <h3>📋 Learning Objectives</h3>
        <ul>${objectivesHtml}</ul>
      </div>

      <!-- Key Takeaways -->
      <div class="content-block takeaways">
        <h3>💡 Key Takeaways</h3>
        <ul>${takeawaysHtml}</ul>
      </div>

      <!-- Resources -->
      <div class="content-block resources">
        <h3>🔗 Recommended Reading</h3>
        <ul>${resourcesHtml}</ul>
      </div>

      <!-- Quiz CTA -->
      <div class="take-quiz-btn-wrap">
        <p>Watched the lesson? Test your understanding below.</p>
        <button class="btn btn-primary btn-lg" onclick="scrollToQuiz()">
          📝 Take the Quiz
        </button>
      </div>

      <!-- Quiz Section -->
      <div class="quiz-section" id="quiz-section">
        <div class="quiz-header">
          <h2>📝 Knowledge Check — ${esc(mod.level)}</h2>
          <div class="quiz-score-display" id="quiz-score-display">
            ${best ? `Best score: <strong>${best.score}/${best.total}</strong>` : `${mod.quiz.length} questions`}
          </div>
        </div>
        <div class="quiz-body" id="quiz-body">
          ${renderQuizQuestions(mod)}
        </div>
        <div class="quiz-footer">
          <span class="quiz-result-msg" id="quiz-result-msg"></span>
          <div style="display:flex;gap:10px;">
            <button class="btn btn-ghost btn-sm" onclick="resetQuiz('${esc(id)}')">↺ Reset</button>
            <a href="learn.html" class="btn btn-ghost btn-sm">← Back to Academy</a>
            <button class="btn btn-primary" id="submit-btn" onclick="submitQuiz('${esc(id)}')">
              Submit Quiz
            </button>
          </div>
        </div>
      </div>

      <!-- Lesson Navigation -->
      <nav class="lesson-nav">
        ${prevHtml}
        ${nextHtml}
      </nav>

    </div>`;

  document.getElementById('lesson-main').innerHTML = html;
}

// ── Quiz Engine ──────────────────────────────────────────────

function renderQuizQuestions(mod) {
  return mod.quiz.map((q, i) => {
    const isMulti  = q.type === 'multi';
    const inputType = isMulti ? 'checkbox' : 'radio';
    const typehint  = isMulti
      ? '<div class="question-type-hint">Select all that apply</div>'
      : '';

    const optionsHtml = q.options.map((opt, j) => `
      <label class="option-label" id="label-${i}-${j}">
        <input type="${inputType}" name="q${i}" value="${j}" id="opt-${i}-${j}">
        ${esc(opt)}
      </label>`).join('');

    return `
      <div class="question-block" id="question-${i}">
        <div class="question-number">Question ${i + 1} of ${mod.quiz.length}</div>
        <div class="question-text">${esc(q.question)}</div>
        ${typehint}
        <div class="options-list">${optionsHtml}</div>
      </div>`;
  }).join('');
}

function scrollToQuiz() {
  const el = document.getElementById('quiz-section');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function submitQuiz(moduleId) {
  const mod = getModule(moduleId);
  if (!mod) return;

  // ── Pass 1: check all questions have been answered ──────
  let allAnswered = true;
  mod.quiz.forEach((q, i) => {
    const hasSelection = document.querySelector(`input[name="q${i}"]:checked`);
    if (!hasSelection) allAnswered = false;
  });

  if (!allAnswered) {
    const msg = document.getElementById('quiz-result-msg');
    msg.textContent = '⚠️ Please answer all questions before submitting.';
    msg.className = 'quiz-result-msg fail';
    msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  // ── Pass 2: grade and highlight ─────────────────────────
  let score = 0;

  mod.quiz.forEach((q, i) => {
    const isMulti = q.type === 'multi';

    if (isMulti) {
      const checked = Array.from(
        document.querySelectorAll(`input[name="q${i}"]:checked`)
      ).map(el => parseInt(el.value));

      const correct = q.answers.slice().sort().toString() === checked.slice().sort().toString();
      if (correct) score++;

      q.options.forEach((_, j) => {
        const label    = document.getElementById(`label-${i}-${j}`);
        const isAnswer  = q.answers.includes(j);
        const isChecked = checked.includes(j);
        if (isAnswer && isChecked)       label.classList.add('correct');
        else if (!isAnswer && isChecked) label.classList.add('incorrect');
        else if (isAnswer && !isChecked) label.classList.add('missed');
      });

    } else {
      const selected    = document.querySelector(`input[name="q${i}"]:checked`);
      const selectedVal = selected ? parseInt(selected.value) : -1;
      if (selectedVal === q.answer) score++;

      q.options.forEach((_, j) => {
        const label = document.getElementById(`label-${i}-${j}`);
        if (j === q.answer)         label.classList.add('correct');
        else if (j === selectedVal) label.classList.add('incorrect');
      });
    }

    // Lock inputs after grading
    document.querySelectorAll(`input[name="q${i}"]`).forEach(inp => {
      inp.disabled = true;
    });
  });

  // Save progress
  Progress.setModule(moduleId, score, mod.quiz.length);

  // Update score display
  const pct = Math.round((score / mod.quiz.length) * 100);
  document.getElementById('quiz-score-display').innerHTML =
    `Score: <strong>${score}/${mod.quiz.length}</strong> · Best saved ✓`;

  // Result message
  const msg = document.getElementById('quiz-result-msg');
  if (pct >= 80) {
    msg.textContent = `🎉 Great work! You scored ${score}/${mod.quiz.length} (${pct}%)`;
    msg.className = 'quiz-result-msg pass';
  } else if (pct >= 50) {
    msg.textContent = `👍 You scored ${score}/${mod.quiz.length} (${pct}%) — review and try again!`;
    msg.className = 'quiz-result-msg fail';
  } else {
    msg.textContent = `📖 You scored ${score}/${mod.quiz.length} (${pct}%) — re-watch the lesson and retry.`;
    msg.className = 'quiz-result-msg fail';
  }

  // Swap submit button to "Next Lesson" if there is one
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.textContent = '✓ Submitted';
  submitBtn.disabled = true;
  submitBtn.style.opacity = '.6';

  // Refresh sidebar to show completion
  renderSidebar(moduleId);

  // Scroll to result
  msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function resetQuiz(moduleId) {
  // Re-render the lesson to get a fresh quiz
  renderLesson(moduleId);
  scrollToQuiz();
}

// ════════════════════════════════════════════════════════════
//  BOOTSTRAP — run the right page init based on data-page
// ════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  if (page === 'learn')  initLearnPage();
  if (page === 'lesson') initLessonPage();
});
