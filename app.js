const iconMap = {
    "Anatomy of Flowering Plants": "Anatomy of flowering plants.png",
    "Biological Classification": "Biological Classification.png",
    "Cell Cycle and Cell Division": "Cell cycle cell division.png",
    "Cell: The Unit of Life": "Cell The unit of life.png",
    "Molecular Basis of Inheritance": "Molecular basis of Inheritance.png",
    "Morphology of Flowering Plants": "Morphology of flowering plants.png",
    "Photosynthesis in Higher Plants": "Photosynthesis.png",
    "Plant Growth and Development": "Plant Growth and Development.png",
    "Plant Kingdom": "Plant kingdom.png",
    "Respiration in Plants": "Respiration in plants.png",
    "The Living World": "The living world.png",
    "Sexual Reproduction in Flowering Plants": "Sexual Reproduction in flowering plants.png",
    "Principles of Inheritance and Variation": "Principles of Inheritance and Variation.png",
    "Microbes in Human Welfare": "Microbes in Human Welfare.png",
    "Organisms and Populations": "Organisms and Populations.png",
    "Ecosystem": "Ecosystem.png",
    "Biodiversity and Conservation": "Biodiversity and Conservation.png"
};

document.addEventListener('DOMContentLoaded', () => {
    initCommonUI();
    
    if (document.getElementById('chapter-grid-11th') || document.getElementById('chapter-grid-12th') || document.getElementById('chapter-grid-container')) {
        initDashboard();
    } else if (document.getElementById('quiz-container')) {
        initQuiz();
    }
});

function initCommonUI() {
    // 1. Mouse Follow Glow
    const glow = document.createElement('div');
    glow.classList.add('cursor-glow');
    document.body.appendChild(glow);

    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });

    // 2. Ambient Particles
    const particlesContainer = document.createElement('div');
    particlesContainer.classList.add('particles');
    document.body.appendChild(particlesContainer);

    const createParticle = () => {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 4 + 2;
        const x = Math.random() * window.innerWidth;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = x + 'px';
        particle.style.bottom = '-10px';
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = delay + 's';
        particlesContainer.appendChild(particle);
        setTimeout(() => { particle.remove(); }, (duration + delay) * 1000);
    };
    setInterval(createParticle, 500);

    // Sidebar Toggle Logic
    const sidebarToggle = document.getElementById("sidebar-toggle");
    const sidebar = document.querySelector(".sidebar");
    
    if (sidebarToggle && sidebar) {
        let overlay = document.querySelector(".sidebar-overlay");
        if (!overlay) {
            overlay = document.createElement("div");
            overlay.className = "sidebar-overlay";
            document.body.appendChild(overlay);
        }

        sidebarToggle.addEventListener("click", () => {
            if (window.innerWidth <= 992) {
                sidebar.classList.toggle("open");
                overlay.classList.toggle("show");
            } else {
                sidebar.classList.toggle("hidden");
            }
        });

        overlay.addEventListener("click", () => {
            sidebar.classList.remove("open");
            overlay.classList.remove("show");
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 992) {
                sidebar.classList.remove("open");
                overlay.classList.remove("show");
            } else {
                sidebar.classList.remove("hidden");
            }
        });
    }

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });
}

let selectedChapterForQuiz = null;
let selectedTopicsForQuiz = [];

function initDashboard() {
    const grid11 = document.getElementById('chapter-grid-11th');
    const grid12 = document.getElementById('chapter-grid-12th');
    const oldGrid = document.getElementById('chapter-grid-container'); // Fallback
    
    const topicModal = document.getElementById('topic-modal');
    const closeTopicModalBtn = document.getElementById('close-topic-modal-btn');
    const topicListContainer = document.getElementById('topic-list-container');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const modalTitle = document.getElementById('topic-modal-title');
    
    if (typeof CHAPTERS === 'undefined') return;
    
    const totalChaptersElem = document.getElementById('stat-total-chapters');
    const totalMcqsElem = document.getElementById('stat-total-mcqs');
    
    if (totalChaptersElem || totalMcqsElem) {
        const availableChapters = CHAPTERS.filter(c => c.status === 'available');
        if (totalChaptersElem) totalChaptersElem.textContent = availableChapters.length;
        if (totalMcqsElem) {
            const totalMcqs = availableChapters.reduce((sum, c) => sum + (c.questionCount || 0), 0);
            totalMcqsElem.textContent = totalMcqs.toLocaleString();
        }
    }
    
    if (grid11) grid11.innerHTML = '';
    if (grid12) grid12.innerHTML = '';
    if (oldGrid) oldGrid.innerHTML = '';
    
    CHAPTERS.forEach(chapter => {
        if (chapter.status !== 'available') return;
        
        const card = document.createElement('div');
        card.className = 'chapter-card glass';
        
        // Random progress for demo purposes
        const progress = Math.floor(Math.random() * 60) + 20; 
        const dashoffset = 100 - progress;
        
        const iconFilename = iconMap[chapter.name] || (chapter.name + ".png");
        
        card.innerHTML = `
          <div class="chapter-header">
            <img src="images/icons/${iconFilename}" alt="${chapter.name}" class="chapter-icon" onerror="this.src='https://cdn-icons-png.flaticon.com/512/2921/2921935.png'; this.style.filter='invert(1) drop-shadow(0 0 10px #00D4FF)'">
            <div class="chapter-number-badge ${chapter.class === '11th' ? 'badge-cyan' : 'badge-purple'}">Ch ${chapter.chNumber || '-'}</div>
          </div>
          <h3 class="chapter-title">${chapter.name}</h3>
          <div class="chapter-meta">
            <span><i class="fa-solid fa-layer-group"></i> ${chapter.questionCount || 0} MCQs</span>
          </div>
          <div class="topic-pills">
            ${chapter.topics.slice(0, 2).map(t => `<span class="pill">${t}</span>`).join('')}
            ${chapter.topics.length > 2 ? `<span class="pill">+${chapter.topics.length - 2}</span>` : ''}
          </div>
        `;
        
        card.addEventListener('click', () => {
            selectedChapterForQuiz = chapter;
            modalTitle.textContent = chapter.name + " (Loading...)";
            topicListContainer.innerHTML = '<div style="text-align:center; padding: 20px;">Loading question data...</div>';
            topicModal.classList.add('show');
            
            // Function to update the Start Practice button text
            const updateStartBtnText = (count) => {
                startQuizBtn.innerHTML = `Start Practice (${count} MCQs)`;
            };
            startQuizBtn.innerHTML = `Start Practice (0 MCQs)`;
            
            // Load the script
            const script = document.createElement('script');
            script.src = chapter.file;
            script.onload = () => {
                if (typeof allQuestions === 'undefined') {
                    topicListContainer.innerHTML = '<div style="text-align:center; color: var(--error-red);">Error loading data.</div>';
                    return;
                }
                
                modalTitle.textContent = chapter.name;
                topicListContainer.innerHTML = '';
                
                // Sort chapter.topics so "Summary" is at the end
                const sortedTopics = [...chapter.topics].sort((a, b) => {
                    if (a.toLowerCase().includes('summary')) return 1;
                    if (b.toLowerCase().includes('summary')) return -1;
                    return 0;
                });

                const getMatchingQuestions = (selectedTopics) => {
                    if (selectedTopics.length === 0) return [];
                    return allQuestions.filter(q => {
                        return selectedTopics.some(t => {
                            if (t === 'HOTs' && q.hots) return true;
                            return q.topic === t || q.topic.startsWith(t);
                        });
                    });
                };

                const topicCounts = {};
                sortedTopics.forEach(t => {
                    topicCounts[t] = getMatchingQuestions([t]).length;
                });
                
                const allSelectedQs = getMatchingQuestions(sortedTopics);

                // Select All
                const selectAllDiv = document.createElement('label');
                selectAllDiv.className = 'topic-item';
                selectAllDiv.innerHTML = `<input type="checkbox" id="select-all-topics" checked> <span>All Topics <span style="color: var(--text-secondary); font-size: 12px;">(${allSelectedQs.length})</span></span>`;
                topicListContainer.appendChild(selectAllDiv);
                
                const selectAllCheckbox = selectAllDiv.querySelector('input');
                const topicCheckboxes = [];
                let currentSelectedCount = allSelectedQs.length;
                updateStartBtnText(currentSelectedCount);
                
                const recalcCount = () => {
                    const checkedValues = topicCheckboxes.filter(cb => cb.checked).map(cb => cb.value);
                    const matchingQs = getMatchingQuestions(checkedValues);
                    updateStartBtnText(matchingQs.length);
                };
                
                sortedTopics.forEach((topic) => {
                    const count = topicCounts[topic] || 0;
                    if (count === 0 && topic !== 'HOTs') return;
                    
                    const label = document.createElement('label');
                    label.className = 'topic-item';
                    label.innerHTML = `<input type="checkbox" value="${topic}" class="topic-cb" checked> <span>${topic} <span style="color: var(--text-secondary); font-size: 12px;">(${count})</span></span>`;
                    topicListContainer.appendChild(label);
                    
                    const cb = label.querySelector('input');
                    topicCheckboxes.push(cb);
                    
                    cb.addEventListener('change', () => {
                        const allChecked = topicCheckboxes.every(c => c.checked);
                        selectAllCheckbox.checked = allChecked;
                        recalcCount();
                    });
                });
                
                selectAllCheckbox.addEventListener('change', (e) => {
                    const isChecked = e.target.checked;
                    topicCheckboxes.forEach(cb => cb.checked = isChecked);
                    recalcCount();
                });
            };
            script.onerror = () => {
                topicListContainer.innerHTML = '<div style="text-align:center; color: var(--error-red);">Failed to load questions file.</div>';
            };
            
            const oldScript = document.getElementById('temp-question-script');
            if (oldScript) oldScript.remove();
            script.id = 'temp-question-script';
            document.body.appendChild(script);
        });
        
        if (chapter.class === "11th" && grid11) {
            grid11.appendChild(card);
        } else if (chapter.class === "12th" && grid12) {
            grid12.appendChild(card);
        } else if (oldGrid) {
            oldGrid.appendChild(card);
        }
    });
    
    closeTopicModalBtn.addEventListener('click', () => {
        topicModal.classList.remove('show');
    });
    window.addEventListener("click", (e) => {
      if (e.target === topicModal) {
        topicModal.classList.remove("show");
      }
    });
    
    startQuizBtn.addEventListener('click', () => {
        const checkboxes = topicListContainer.querySelectorAll('.topic-cb:checked');
        selectedTopicsForQuiz = Array.from(checkboxes).map(cb => cb.value);
        
        if (selectedTopicsForQuiz.length === 0) {
            alert("Please select at least one topic.");
            return;
        }
        
        localStorage.setItem('activeQuizConfig', JSON.stringify({
            chapterId: selectedChapterForQuiz.id,
            chapterName: selectedChapterForQuiz.name,
            topics: selectedTopicsForQuiz,
            file: selectedChapterForQuiz.file
        }));
        
        window.location.href = 'quiz.html';
    });
}

let quizQuestions = [];
let currentQIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let startTime = 0;
let timerInterval;

function initQuiz() {
    const configStr = localStorage.getItem('activeQuizConfig');
    if (!configStr) {
        window.location.href = 'index.html';
        return;
    }
    const config = JSON.parse(configStr);
    
    document.getElementById('quiz-chapter-title').textContent = config.chapterName;
    const imgEl = document.getElementById('explanation-icon');
    if (imgEl) {
        const iconFilename = iconMap[config.chapterName] || (config.chapterName + ".png");
        imgEl.src = `images/icons/${iconFilename}`;
        imgEl.onerror = () => { imgEl.src = 'https://cdn-icons-png.flaticon.com/512/2921/2921935.png'; };
    }
    
    // Dynamically load the script
    const script = document.createElement('script');
    script.src = config.file;
    script.onload = () => {
        if (typeof allQuestions !== 'undefined') {
            quizQuestions = allQuestions.filter(q => {
                return config.topics.some(t => {
                    if (t === 'HOTs' && q.hots) return true;
                    return q.topic === t || q.topic.startsWith(t);
                });
            });
            if (quizQuestions.length === 0) {
                // fallback if topics don't match exactly due to string differences
                quizQuestions = allQuestions; 
            }
            startQuizSession();
        } else {
            alert("Error loading questions.");
        }
    };
    script.onerror = () => { alert("Error loading question file."); };
    document.body.appendChild(script);
}

function startQuizSession() {
    currentQIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    startTime = Date.now();
    
    timerInterval = setInterval(updateTimer, 1000);
    
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentQIndex > 0) {
                currentQIndex--;
                renderQuestion();
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentQIndex < quizQuestions.length - 1) {
                currentQIndex++;
                renderQuestion();
            } else {
                showResultsModal();
            }
        });
    }

    const gridBtn = document.getElementById('grid-btn');
    const navigatorModal = document.getElementById('navigator-modal');
    const closeNavigatorBtn = document.getElementById('close-navigator-btn');
    
    if (gridBtn && navigatorModal) {
        gridBtn.addEventListener('click', () => {
            renderQuestionNavigator();
            navigatorModal.classList.add('show');
        });
        closeNavigatorBtn.addEventListener('click', () => {
            navigatorModal.classList.remove('show');
        });
        window.addEventListener('click', (e) => {
            if (e.target === navigatorModal) {
                navigatorModal.classList.remove('show');
            }
        });
    }
    
    renderQuestion();
}

function renderQuestionNavigator() {
    const grid = document.getElementById('navigator-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    quizQuestions.forEach((q, index) => {
        const btn = document.createElement('div');
        btn.className = 'nav-btn';
        btn.textContent = index + 1;
        
        if (q.userStatus === 'correct') {
            btn.classList.add('correct');
        } else if (q.userStatus === 'wrong') {
            btn.classList.add('wrong');
        }
        
        if (index === currentQIndex) {
            btn.classList.add('current');
        }
        
        btn.addEventListener('click', () => {
            currentQIndex = index;
            renderQuestion();
            document.getElementById('navigator-modal').classList.remove('show');
        });
        
        grid.appendChild(btn);
    });
}

function showResultsModal() {
    clearInterval(timerInterval); // Stop timer
    
    const resultsModal = document.getElementById('results-modal');
    if (!resultsModal) return;
    
    const totalQuestions = quizQuestions.length;
    const unanswered = totalQuestions - (correctCount + wrongCount);
    const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    
    document.getElementById('result-correct').textContent = correctCount;
    document.getElementById('result-wrong').textContent = wrongCount;
    
    const elUnanswered = document.getElementById('result-unanswered');
    if (elUnanswered) elUnanswered.textContent = unanswered;
    
    document.getElementById('result-accuracy').textContent = accuracy + "%";
    
    const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
    const m = Math.floor(elapsedSeconds / 60).toString().padStart(2, '0');
    const s = (elapsedSeconds % 60).toString().padStart(2, '0');
    document.getElementById('result-time').textContent = `${m}:${s}`;
    
    const avgSeconds = totalQuestions > 0 ? Math.round(elapsedSeconds / totalQuestions) : 0;
    const elAvgTime = document.getElementById('result-avg-time');
    if (elAvgTime) elAvgTime.textContent = avgSeconds + "s";
    
    // Add click handlers for review
    const cardCorrect = document.getElementById('result-card-correct');
    const cardWrong = document.getElementById('result-card-wrong');
    const cardUnanswered = document.getElementById('result-card-unanswered');
    
    if (cardCorrect) cardCorrect.onclick = () => reviewQuestions('correct');
    if (cardWrong) cardWrong.onclick = () => reviewQuestions('wrong');
    if (cardUnanswered) cardUnanswered.onclick = () => reviewQuestions('unanswered');
    
    resultsModal.classList.add('show');
}

function reviewQuestions(type) {
    let targetIndex = -1;
    for (let i = 0; i < quizQuestions.length; i++) {
        const q = quizQuestions[i];
        if (type === 'unanswered' && !q.userStatus) {
            targetIndex = i;
            break;
        } else if (q.userStatus === type) {
            targetIndex = i;
            break;
        }
    }
    
    if (targetIndex !== -1) {
        document.getElementById('results-modal').classList.remove('show');
        currentQIndex = targetIndex;
        renderQuestion();
        
        // Open navigator to show which ones to review
        renderQuestionNavigator();
        const navModal = document.getElementById('navigator-modal');
        if (navModal) navModal.classList.add('show');
    } else {
        alert(`You have no ${type} questions.`);
    }
}

function updateTimer() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const m = Math.floor(elapsed / 60).toString().padStart(2, '0');
    const s = (elapsed % 60).toString().padStart(2, '0');
    const timerEl = document.getElementById('elapsed-timer');
    if (timerEl) {
        timerEl.innerHTML = `<i class="fa-solid fa-clock"></i> ${m}:${s}`;
    }
}

function renderQuestion() {
    if (quizQuestions.length === 0) return;
    
    const q = quizQuestions[currentQIndex];
    document.getElementById('q-text').innerHTML = q.q;
    document.getElementById('q-topic').textContent = "Topic: " + (q.topic || 'General');
    
    const imgContainer = document.getElementById('q-image-container');
    const imgEl = document.getElementById('q-image');
    if (imgContainer && imgEl) {
        if (q.image) {
            imgEl.src = q.image;
            imgContainer.style.display = 'block';
        } else {
            imgContainer.style.display = 'none';
            imgEl.src = '';
        }
    }
    
    const optionsContainer = document.getElementById('q-options');
    optionsContainer.innerHTML = '';
    
    const expCard = document.getElementById('explanation-card');
    if (expCard) expCard.classList.remove('show');
    
    const labels = ['A', 'B', 'C', 'D'];
    q.options.forEach((optText, index) => {
        const optDiv = document.createElement('div');
        optDiv.className = 'option';
        optDiv.innerHTML = `
            <div class="option-label">${labels[index]}</div>
            <div class="option-text">${optText}</div>
        `;
        
        // Restore state if already answered
        if (q.userStatus) {
            optionsContainer.classList.add('answered');
            if (index === q.correct) {
                optDiv.classList.add('correct');
            } else if (index === q.userAnswer) {
                optDiv.classList.add('wrong');
            }
            if (index === q.userAnswer || index === q.correct) {
                 showExplanation(q.userStatus === 'correct', q, labels[q.correct]);
            }
        }
        
        optDiv.addEventListener('click', () => {
            if (optionsContainer.classList.contains('answered')) return;
            optionsContainer.classList.add('answered');
            q.userAnswer = index;
            
            if (index === q.correct) {
                q.userStatus = 'correct';
                optDiv.classList.add('correct');
                correctCount++;
                document.getElementById('stat-correct').textContent = correctCount;
                showExplanation(true, q, labels[q.correct]);
            } else {
                q.userStatus = 'wrong';
                optDiv.classList.add('wrong');
                wrongCount++;
                document.getElementById('stat-wrong').textContent = wrongCount;
                
                // highlight correct one
                if (optionsContainer.children[q.correct]) {
                    optionsContainer.children[q.correct].classList.add('correct');
                }
                showExplanation(false, q, labels[q.correct]);
            }
        });
        
        optionsContainer.appendChild(optDiv);
    });
    
    if (!q.userStatus) {
        optionsContainer.classList.remove('answered');
    }
    
    // Update progress
    document.getElementById('progress-label').textContent = `Question ${currentQIndex + 1} of ${quizQuestions.length}`;
    const percent = Math.round(((currentQIndex + 1) / quizQuestions.length) * 100);
    document.getElementById('progress-percent').textContent = `${percent}% Completed`;
    document.getElementById('progress-bar-fill').style.width = `${percent}%`;

    // Change Next button to Finish on last question
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        if (currentQIndex === quizQuestions.length - 1) {
            nextBtn.innerHTML = 'Finish <i class="fa-solid fa-flag-checkered"></i>';
            nextBtn.style.background = 'linear-gradient(135deg, var(--success-green), #00b359)';
            nextBtn.style.color = '#fff';
        } else {
            nextBtn.innerHTML = 'Save & Next <i class="fa-solid fa-chevron-right"></i>';
            nextBtn.style.background = '';
            nextBtn.style.color = '';
        }
    }
    
    document.getElementById('prev-btn').disabled = currentQIndex === 0;
}

function showExplanation(isCorrect, q, correctLabel) {
    const card = document.getElementById('explanation-card');
    const badge = document.getElementById('explanation-badge');
    const text = document.getElementById('explanation-text');
    
    if (!card) return;
    card.classList.add('show');
    
    if (isCorrect) {
        badge.innerHTML = `<i class="fa-solid fa-check-circle"></i> Correct Answer: ${correctLabel}`;
        badge.style.color = 'var(--success-green)';
        badge.style.background = 'rgba(0, 230, 118, 0.1)';
    } else {
        badge.innerHTML = `<i class="fa-solid fa-xmark-circle"></i> Correct Answer was: ${correctLabel}`;
        badge.style.color = 'var(--error-red)';
        badge.style.background = 'rgba(255, 61, 113, 0.1)';
    }
    
    text.innerHTML = q.explanation || "No explanation provided.";
}
