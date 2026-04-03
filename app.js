// =========================================================
//  NEET Quiz App – Full Feature Implementation
// =========================================================

// ── State ──────────────────────────────────────────────
const state = {
    currentPage: 0,
    questionsPerPage: 10,
    filteredQuestions: [],
    activeTopic: "All",
    answers: {},         // { questionId: selectedIndex }
    bookmarks: new Set(),
    examMode: false,
    showExplanations: true,
    timerInterval: null,
    elapsedSeconds: 0,
    reviewWrongOnly: false,
    reviewBookmarkedOnly: false,
    searchKeyword: "",
};

// ── Init ───────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    if (!allQuestions || !allQuestions.length) {
        document.getElementById("questionsContainer").innerHTML =
            "<p style='color:#ff5252;text-align:center;padding:40px'>Failed to load questions.</p>";
        return;
    }

    // Update total count
    document.getElementById("totalQ").innerText = allQuestions.length;

    buildTopicFilters();
    buildNavGrid();
    applyFilter();
    startTimer();

    // Mode toggles
    document.getElementById("examMode").addEventListener("change", function () {
        state.examMode = this.checked;
        renderCurrentPage();
    });
    document.getElementById("autoExplain").addEventListener("change", function () {
        state.showExplanations = this.checked;
        renderCurrentPage();
    });
});

// ── Timer ──────────────────────────────────────────────
function startTimer() {
    state.timerInterval = setInterval(() => {
        state.elapsedSeconds++;
        const h = String(Math.floor(state.elapsedSeconds / 3600)).padStart(2, "0");
        const m = String(Math.floor((state.elapsedSeconds % 3600) / 60)).padStart(2, "0");
        const s = String(state.elapsedSeconds % 60).padStart(2, "0");
        document.getElementById("timerDisplay").innerText = `${h}:${m}:${s}`;
    }, 1000);
}

// ── Topic Filter ───────────────────────────────────────
function buildTopicFilters() {
    const topics = ["All", ...new Set(allQuestions.map((q) => q.topic))];
    const container = document.getElementById("filterButtons");
    container.innerHTML = "";
    topics.forEach((topic) => {
        const btn = document.createElement("button");
        btn.className = "filter-btn" + (topic === state.activeTopic ? " active" : "");
        btn.textContent = topic;
        btn.onclick = () => {
            state.activeTopic = topic;
            state.reviewWrongOnly = false;
            state.reviewBookmarkedOnly = false;
            state.searchKeyword = "";
            document.getElementById("searchBox").value = "";
            state.currentPage = 0;
            document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            applyFilter();
        };
        container.appendChild(btn);
    });
}

// ── Question Navigator Grid ─────────────────────────────
function buildNavGrid() {
    const grid = document.getElementById("qNavGrid");
    grid.innerHTML = "";
    allQuestions.forEach((q, i) => {
        const btn = document.createElement("button");
        btn.className = "q-nav-btn";
        btn.id = `navBtn-${q.id}`;
        btn.textContent = q.id;
        btn.title = q.topic;
        btn.onclick = () => jumpToQuestion(q.id);
        grid.appendChild(btn);
    });
    updateNavGrid();
}

function updateNavGrid() {
    allQuestions.forEach((q) => {
        const btn = document.getElementById(`navBtn-${q.id}`);
        if (!btn) return;
        btn.className = "q-nav-btn";
        if (q.id in state.answers) {
            const correct = state.answers[q.id] === q.correct;
            btn.classList.add(correct ? "correct-nav" : "wrong-nav");
        }
        if (state.bookmarks.has(q.id)) btn.classList.add("bookmarked-nav");
    });
}

function jumpToQuestion(qId) {
    // Find which page this question is on in the current filteredQuestions
    const idx = state.filteredQuestions.findIndex((q) => q.id === qId);
    if (idx === -1) {
        // Switch to All Topics first
        state.activeTopic = "All";
        state.reviewWrongOnly = false;
        state.reviewBookmarkedOnly = false;
        applyFilter();
        const idx2 = state.filteredQuestions.findIndex((q) => q.id === qId);
        if (idx2 === -1) return;
        state.currentPage = Math.floor(idx2 / state.questionsPerPage);
    } else {
        state.currentPage = Math.floor(idx / state.questionsPerPage);
    }
    renderCurrentPage();
    // Close navigator
    document.getElementById("qNavigator").classList.remove("show");
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ── Filter / Search ─────────────────────────────────────
function applyFilter() {
    let questions = allQuestions;

    if (state.activeTopic !== "All") {
        questions = questions.filter((q) => q.topic === state.activeTopic);
    }
    if (state.reviewWrongOnly) {
        questions = questions.filter(
            (q) => q.id in state.answers && state.answers[q.id] !== q.correct
        );
    }
    if (state.reviewBookmarkedOnly) {
        questions = questions.filter((q) => state.bookmarks.has(q.id));
    }
    if (state.searchKeyword) {
        const kw = state.searchKeyword.toLowerCase();
        questions = questions.filter(
            (q) =>
                q.q.toLowerCase().includes(kw) ||
                q.topic.toLowerCase().includes(kw) ||
                q.options.some((o) => o.toLowerCase().includes(kw))
        );
    }

    state.filteredQuestions = questions;
    state.currentPage = 0;
    renderCurrentPage();
}

function searchQuestions() {
    state.searchKeyword = document.getElementById("searchBox").value.trim();
    state.currentPage = 0;
    applyFilter();
}

// ── Render ──────────────────────────────────────────────
function renderCurrentPage() {
    const container = document.getElementById("questionsContainer");
    container.innerHTML = "";

    const total = state.filteredQuestions.length;
    const totalPages = Math.max(1, Math.ceil(total / state.questionsPerPage));
    state.currentPage = Math.min(state.currentPage, totalPages - 1);

    const start = state.currentPage * state.questionsPerPage;
    const end = Math.min(start + state.questionsPerPage, total);
    const pageQuestions = state.filteredQuestions.slice(start, end);

    if (total === 0) {
        container.innerHTML =
            "<p style='color:#888;text-align:center;padding:40px'>No questions match the current filter.</p>";
    } else {
        pageQuestions.forEach((q) => renderCard(q, container));
    }

    // Progress bar
    const answered = Object.keys(state.answers).length;
    const pct = allQuestions.length ? (answered / allQuestions.length) * 100 : 0;
    document.getElementById("progressBar").style.width = pct + "%";
    document.getElementById("progressText").textContent =
        `Page ${state.currentPage + 1} of ${totalPages} ${total < allQuestions.length ? `(${total} filtered)` : `(${allQuestions.length} total)`}`;

    // Page info & buttons
    document.getElementById("pageInfo").textContent =
        `Page ${state.currentPage + 1} / ${totalPages}`;
    document.getElementById("prevBtn").disabled = state.currentPage === 0;
    document.getElementById("nextBtn").disabled = state.currentPage >= totalPages - 1;

    updateDashboard();
    updateNavGrid();

    // Scroll to top of questions
    container.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderCard(q, container) {
    const isAnswered = q.id in state.answers;
    const selectedIdx = state.answers[q.id];
    const isCorrect = isAnswered && selectedIdx === q.correct;

    const card = document.createElement("div");
    card.className = "question-card";
    card.id = `card-${q.id}`;
    if (isAnswered) card.classList.add(isCorrect ? "answered-correct" : "answered-wrong");


    // Options HTML
    let optionsHtml = "";
    q.options.forEach((opt, i) => {
        let cls = "option";
        if (isAnswered) {
            cls += " disabled";
            if (i === q.correct) cls += " correct";
            else if (i === selectedIdx && !isCorrect) cls += " wrong";
        }
        const clickAttr = isAnswered ? "" : `onclick="selectAnswer(${q.id}, ${i})"`;
        optionsHtml += `
            <div class="${cls}" ${clickAttr} id="opt-${q.id}-${i}">
                <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                <span>${opt}</span>
            </div>`;
    });

    // Correct answer badge (shown after answering)
    const answerBadge = isAnswered
        ? `<div style="margin:12px 0 8px;font-size:13px;color:${isCorrect ? "#00e676" : "#ff5252"}">
                ${isCorrect ? "✅ Correct!" : `❌ Wrong — Correct answer: <strong>${String.fromCharCode(65 + q.correct)}. ${q.options[q.correct]}</strong>`}
           </div>`
        : "";

    // Show Answer button (only for unanswered questions in practice mode)
    const showAnswerBtn = (!isAnswered && !state.examMode)
        ? `<button class="show-answer-btn" onclick="revealAnswer(${q.id})">👁 Show Answer</button>`
        : "";

    // Explanation
    const showExp = isAnswered && (state.showExplanations || !state.examMode);
    const explHtml = `
        <div class="explanation ${showExp ? "show" : ""}" id="exp-${q.id}">
            <h4>💡 Explanation</h4>
            <p>${q.explanation}</p>
        </div>`;

    // Bookmark button
    const isBookmarked = state.bookmarks.has(q.id);
    const bookmarkBtn = `<button class="bookmark-btn ${isBookmarked ? "bookmarked" : ""}"
        onclick="toggleBookmark(${q.id})" id="bm-${q.id}" title="Bookmark">
        ${isBookmarked ? "⭐" : "☆"}
    </button>`;

    card.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
            <div>
                <span class="question-number">Q${q.id}</span>
                <span class="topic-tag">${q.topic}</span>
            </div>
            ${bookmarkBtn}
        </div>
        <div class="question-text">${q.q}</div>
        <div class="options">${optionsHtml}</div>
        ${answerBadge}
        ${showAnswerBtn}
        ${explHtml}
    `;

    container.appendChild(card);
}

// ── Reveal Answer (without penalizing) ─────────────────
function revealAnswer(qId) {
    const q = allQuestions.find((x) => x.id === qId);
    if (!q) return;

    // Highlight correct option only, don't record as answered
    q.options.forEach((_, i) => {
        const optEl = document.getElementById(`opt-${qId}-${i}`);
        if (!optEl) return;
        optEl.classList.add("disabled");
        optEl.onclick = null;
        if (i === q.correct) optEl.classList.add("correct");
    });

    // Show explanation
    const exp = document.getElementById(`exp-${qId}`);
    if (exp) exp.classList.add("show");

    // Remove the show answer button
    const btn = document.querySelector(`#card-${qId} .show-answer-btn`);
    if (btn) btn.remove();

    // Add badge showing this was revealed
    const badge = document.createElement("div");
    badge.style.cssText = "margin:12px 0 8px;font-size:13px;color:#ffab40";
    badge.innerHTML = `👁 Answer revealed: <strong>${String.fromCharCode(65 + q.correct)}. ${q.options[q.correct]}</strong>`;
    const optionsDiv = document.querySelector(`#card-${qId} .options`);
    if (optionsDiv) optionsDiv.insertAdjacentElement("afterend", badge);
}

// ── Answer Selection ────────────────────────────────────
function selectAnswer(qId, selectedIdx) {
    if (qId in state.answers) return; // already answered

    const q = allQuestions.find((x) => x.id === qId);
    if (!q) return;

    state.answers[qId] = selectedIdx;
    updateDashboard();
    updateNavGrid();

    const card = document.getElementById(`card-${qId}`);
    if (!card) return;

    const isCorrect = selectedIdx === q.correct;
    card.classList.add(isCorrect ? "answered-correct" : "answered-wrong");

    // Disable all options & highlight
    q.options.forEach((_, i) => {
        const optEl = document.getElementById(`opt-${qId}-${i}`);
        if (!optEl) return;
        optEl.classList.add("disabled");
        optEl.onclick = null;
        if (i === q.correct) optEl.classList.add("correct");
        else if (i === selectedIdx) optEl.classList.add("wrong");
    });

    // Show answer badge
    const badge = document.createElement("div");
    badge.style.cssText = "margin:12px 0 8px;font-size:13px;color:" + (isCorrect ? "#00e676" : "#ff5252");
    badge.innerHTML = isCorrect
        ? "✅ Correct!"
        : `❌ Wrong — Correct answer: <strong>${String.fromCharCode(65 + q.correct)}. ${q.options[q.correct]}</strong>`;

    const optionsDiv = card.querySelector(".options");
    optionsDiv.insertAdjacentElement("afterend", badge);

    // Show explanation
    if (state.showExplanations) {
        const exp = document.getElementById(`exp-${qId}`);
        if (exp) exp.classList.add("show");
    }
}

// ── Dashboard ──────────────────────────────────────────
function updateDashboard() {
    const answered = Object.keys(state.answers).length;
    const correct = Object.entries(state.answers).filter(
        ([id, sel]) => allQuestions.find((q) => q.id == id)?.correct === sel
    ).length;
    const wrong = answered - correct;
    const acc = answered > 0 ? Math.round((correct / answered) * 100) : 0;

    document.getElementById("attempted").innerText = answered;
    document.getElementById("correctCount").innerText = correct;
    document.getElementById("wrongCount").innerText = wrong;
    document.getElementById("accuracy").innerText = acc + "%";

    // Progress bar (overall)
    const pct = allQuestions.length ? (answered / allQuestions.length) * 100 : 0;
    document.getElementById("progressBar").style.width = pct + "%";
}

// ── Bookmark ───────────────────────────────────────────
function toggleBookmark(qId) {
    if (state.bookmarks.has(qId)) {
        state.bookmarks.delete(qId);
    } else {
        state.bookmarks.add(qId);
    }
    const btn = document.getElementById(`bm-${qId}`);
    if (btn) {
        btn.classList.toggle("bookmarked", state.bookmarks.has(qId));
        btn.textContent = state.bookmarks.has(qId) ? "⭐" : "☆";
    }
    updateNavGrid();
}

// ── Navigation ─────────────────────────────────────────
function navigateQ(dir) {
    const totalPages = Math.ceil(state.filteredQuestions.length / state.questionsPerPage);
    state.currentPage = Math.max(0, Math.min(state.currentPage + dir, totalPages - 1));
    renderCurrentPage();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleNavigator() {
    document.getElementById("qNavigator").classList.toggle("show");
}

// ── Bookmarked / Wrong Review ──────────────────────────
function showBookmarked() {
    if (state.bookmarks.size === 0) {
        alert("No bookmarks yet! Click the ☆ on any question to bookmark it.");
        return;
    }
    state.reviewBookmarkedOnly = true;
    state.reviewWrongOnly = false;
    state.activeTopic = "All";
    state.currentPage = 0;
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    applyFilter();
}

function showWrongOnly() {
    const wrongIds = Object.entries(state.answers)
        .filter(([id, sel]) => allQuestions.find((q) => q.id == id)?.correct !== sel);
    if (wrongIds.length === 0) {
        alert("No wrong answers yet! Answer some questions first.");
        return;
    }
    state.reviewWrongOnly = true;
    state.reviewBookmarkedOnly = false;
    state.activeTopic = "All";
    state.currentPage = 0;
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    applyFilter();
}

// ── Results Modal ──────────────────────────────────────
function showResults() {
    const answered = Object.keys(state.answers).length;
    const correct = Object.entries(state.answers).filter(
        ([id, sel]) => allQuestions.find((q) => q.id == id)?.correct === sel
    ).length;
    const wrong = answered - correct;
    const acc = answered > 0 ? Math.round((correct / answered) * 100) : 0;

    // Score colour
    const circle = document.getElementById("scoreCircle");
    if (acc >= 70) { circle.style.borderColor = "#00e676"; circle.style.color = "#00e676"; }
    else if (acc >= 40) { circle.style.borderColor = "#ffab40"; circle.style.color = "#ffab40"; }
    else { circle.style.borderColor = "#ff5252"; circle.style.color = "#ff5252"; }

    document.getElementById("scorePercent").textContent = acc + "%";

    // Topic breakdown
    const topicStats = {};
    Object.entries(state.answers).forEach(([id, sel]) => {
        const q = allQuestions.find((x) => x.id == id);
        if (!q) return;
        if (!topicStats[q.topic]) topicStats[q.topic] = { correct: 0, total: 0 };
        topicStats[q.topic].total++;
        if (sel === q.correct) topicStats[q.topic].correct++;
    });

    const h = String(Math.floor(state.elapsedSeconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((state.elapsedSeconds % 3600) / 60)).padStart(2, "0");
    const s = String(state.elapsedSeconds % 60).padStart(2, "0");

    let detailsHtml = `
        <div class="result-row"><span class="label">Total Questions</span><span class="value">${allQuestions.length}</span></div>
        <div class="result-row"><span class="label">Attempted</span><span class="value">${answered}</span></div>
        <div class="result-row"><span class="label" style="color:#00e676">✓ Correct</span><span class="value" style="color:#00e676">${correct}</span></div>
        <div class="result-row"><span class="label" style="color:#ff5252">✗ Wrong</span><span class="value" style="color:#ff5252">${wrong}</span></div>
        <div class="result-row"><span class="label">Not Attempted</span><span class="value">${allQuestions.length - answered}</span></div>
        <div class="result-row"><span class="label">Time Taken</span><span class="value">${h}:${m}:${s}</span></div>`;

    if (Object.keys(topicStats).length) {
        detailsHtml += `<div style="margin-top:16px;font-weight:600;color:#00d4ff;font-size:13px">📊 Topic Breakdown</div>`;
        Object.entries(topicStats).forEach(([topic, stat]) => {
            const tAcc = Math.round((stat.correct / stat.total) * 100);
            detailsHtml += `
                <div class="result-row">
                    <span class="label" style="font-size:12px">${topic}</span>
                    <span class="value" style="font-size:12px;color:${tAcc >= 70 ? "#00e676" : tAcc >= 40 ? "#ffab40" : "#ff5252"}">${stat.correct}/${stat.total} (${tAcc}%)</span>
                </div>`;
        });
    }

    document.getElementById("resultDetails").innerHTML = detailsHtml;
    document.getElementById("resultsModal").style.display = "flex";
    document.getElementById("resultsModal").classList.add("show");
}

function closeModal() {
    document.getElementById("resultsModal").classList.remove("show");
    document.getElementById("resultsModal").style.display = "none";
}

function resetQuiz() {
    if (!confirm("Reset all answers and start over?")) return;
    location.reload();
}

// ── Download Report ─────────────────────────────────────
function downloadResults() {
    const answered = Object.keys(state.answers).length;
    const correct = Object.entries(state.answers).filter(
        ([id, sel]) => allQuestions.find((q) => q.id == id)?.correct === sel
    ).length;
    const acc = answered > 0 ? Math.round((correct / answered) * 100) : 0;

    let txt = `NEET Quiz Report – Molecular Basis of Inheritance\n`;
    txt += `Date: ${new Date().toLocaleString()}\n`;
    txt += `Accuracy: ${acc}% | Correct: ${correct} | Wrong: ${answered - correct} | Attempted: ${answered}/${allQuestions.length}\n\n`;

    Object.entries(state.answers).forEach(([id, sel]) => {
        const q = allQuestions.find((x) => x.id == id);
        if (!q) return;
        const status = sel === q.correct ? "CORRECT" : "WRONG";
        txt += `Q${q.id} [${q.topic}] [${status}]\n`;
        txt += `${q.q.replace(/<[^>]*>/g, "")}\n`;
        txt += `Your Answer: ${String.fromCharCode(65 + sel)}. ${q.options[sel]}\n`;
        if (sel !== q.correct) txt += `Correct Answer: ${String.fromCharCode(65 + q.correct)}. ${q.options[q.correct]}\n`;
        txt += `Explanation: ${q.explanation}\n\n`;
    });

    const blob = new Blob([txt], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "neet_quiz_report.txt";
    a.click();
}
