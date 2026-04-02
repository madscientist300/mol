document.addEventListener("DOMContentLoaded", () => {
    // Basic setup to show that the questions have loaded
    document.getElementById("totalQ").innerText = allQuestions ? allQuestions.length : 0;
    
    // Fallback if allQuestions failed to load
    if (!allQuestions) return;

    const container = document.getElementById("questionsContainer");
    
    // Render first 5 questions for display to avoid lag
    const renderQuestions = allQuestions.slice(0, 5);
    renderQuestions.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        let optionsHtml = '';
        q.options.forEach((opt, i) => {
            optionsHtml += `<div class="option" onclick="this.parentElement.querySelectorAll('.option').forEach(o=>o.classList.remove('selected')); this.classList.add('selected')">
                                <span class="option-letter">${String.fromCharCode(65 + i)}</span> ${opt}
                            </div>`;
        });
        
        card.innerHTML = `
            <div class="question-number">Question ${q.id}</div>
            <div class="topic-tag">${q.topic}</div>
            <div class="question-text">${q.q}</div>
            <div class="options">
                ${optionsHtml}
            </div>
            <div class="explanation show">
                <h4>Explanation</h4>
                <p>${q.explanation}</p>
            </div>
        `;
        container.appendChild(card);
    });
});

function toggleNavigator() { document.getElementById("qNavigator").classList.toggle("show"); }
function showBookmarked() { alert("Bookmark feature coming soon!"); }
function showWrongOnly() { alert("Review Wrong feature coming soon!"); }
function showResults() { 
    document.getElementById("resultsModal").classList.add("show");
    // Show a modal overlay
    document.getElementById("resultsModal").style.display = "flex";
}
function closeModal() { 
    document.getElementById("resultsModal").classList.remove("show");
    document.getElementById("resultsModal").style.display = "none";
}
function resetQuiz() { location.reload(); }
function navigateQ(dir) { alert("Pagination coming soon!"); }
