/**
 * ==========================================================================
 * AGROECO INOVAÇÃO - LÓGICA E INTERATIVIDADE (script.js)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. CONTROLO DO MENU RESPONSIVO (HAMBÚRGUER) ---
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fecha o menu ao clicar em qualquer item de navegação
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // --- 2. LÓGICA DA CALCULADORA ECO-AGRÍCOLA (PEGADA DE CARBONO) ---
    const calcForm = document.getElementById('ecoCalcForm');
    const resultsBox = document.getElementById('calcResults');
    const emissionsResult = document.getElementById('emissionsResult');
    const recommendationsResult = document.getElementById('recommendationsResult');

    if (calcForm) {
        calcForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Obtenção de valores tratados
            const area = parseFloat(document.getElementById('propArea').value) || 0;
            const diesel = parseFloat(document.getElementById('fuelConsump').value) || 0;
            const cropType = document.getElementById('cropType').value;

            // Constante técnica: 1L de Diesel comum emite ~2.68 kg de CO2
            const totalCO2Kg = diesel * 2.68;
            const totalCO2Toneladas = (totalCO2Kg / 1000).toFixed(2);

            // Cálculo de compensação: 1 árvore nativa da Mata Atlântica absorve ~22kg de CO2/ano
            const treesNeeded = Math.ceil(totalCO2Kg / 22);

            // Estruturação das Recomendações Baseadas no Tipo de Cultura
            let strategicAdvice = "";
            switch (cropType) {
                case 'graos':
                    strategicAdvice = "<strong>Recomendação de Manejo:</strong> Implemente o Sistema de Plantio Direto (SPD) e adubação verde estival. Isto aumenta a matéria orgânica estrutural do solo, fixando carbono diretamente na terra e diminuindo o uso de tratores pesados.";
                    break;
                case 'hortifruti':
                    strategicAdvice = "<strong>Recomendação de Manejo:</strong> Adote o uso de coberturas vegetais vivas ou mulching orgânico nas entrelinhas. Reduz a evapotranspiração da água e diminui significativamente as horas/máquina necessárias para controlo de infestantes.";
                    break;
                case 'perenes':
                    strategicAdvice = "<strong>Recomendação de Manejo:</strong> Consorcie o seu cultivo (café/frutas) com espécies arbóreas nativas ou leguminosas fixadoras de Nitrogénio (Sistemas Agroflorestais). Melhora o microclima e mitiga as emissões operacionais de forma direta.";
                    break;
                default:
                    strategicAdvice = "Adote práticas de rotação de culturas e monitorização preditiva do solo.";
            }

            // Manipulação e atualização do DOM com os resultados
            emissionsResult.innerHTML = `A atividade mecânica mensal estimada resulta na emissão de <strong>${totalCO2Toneladas} toneladas de CO2</strong> equivalente.`;
            recommendationsResult.innerHTML = `🌳 <strong>Ação Compensatória:</strong> Recomenda-se a plantação e preservação de <strong>${treesNeeded} árvores nativas</strong> por ano para neutralizar esta pegada operacional.<br><br>${strategicAdvice}`;

            // Exibição visual com animação
            resultsBox.style.display = 'block';
            resultsBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }

    // --- 3. RECURSO INOVADOR: SISTEMA DE QUIZ DE CONHECIMENTO VERDE ---
    // Base de dados das perguntas do Quiz estruturada em JSON
    const quizData = [
        {
            question: "Qual das seguintes práticas ajuda a reter o Carbono no solo agrícola?",
            options: [
                "Queima controlada de restos de palhada",
                "Sistema de Plantio Direto (manter o solo coberto)",
                "Arar profundamente o solo várias vezes por ano",
                "Uso intensivo de fertilizantes sintéticos azotados"
            ],
            correct: 1
        },
        {
            question: "A irrigação por gotejamento automatizada traz qual principal benefício ecológico?",
            options: [
                "Aumento da salinização da água subterrânea",
                "Aplicação precisa de recursos hídricos com redução do desperdício",
                "Aceleração da erosão superficial do terreno",
                "Necessidade de maior pressão hidráulica contínua"
            ],
            correct: 1
        },
        {
            question: "O que caracteriza essencialmente um Sistema Agroflorestal (SAF)?",
            options: [
                "A plantação exclusiva de uma única espécie de árvore exótica",
                "A integração harmónica de culturas agrícolas com árvores e biodiversidade",
                "A remoção total da mata nativa para dar lugar ao cultivo mecanizado",
                "O cultivo realizado apenas em estufas fechadas de vidro de base tecnológica"
            ],
            correct: 1
        }
    ];

    let currentQuestionIndex = 0;
    let userScore = 0;

    const startQuizBtn = document.getElementById('startQuizBtn');
    const welcomeScreen = document.getElementById('quizWelcome');
    const playScreen = document.getElementById('quizPlay');
    const endScreen = document.getElementById('quizEnd');
    const questionText = document.getElementById('quizQuestionText');
    const optionsBox = document.getElementById('quizOptionsBox');
    const progressBar = document.getElementById('quizProgressBar');
    const quizScoreText = document.getElementById('quizScoreText');
    const restartQuizBtn = document.getElementById('restartQuizBtn');

    if (startQuizBtn && welcomeScreen && playScreen) {
        startQuizBtn.addEventListener('click', () => {
            welcomeScreen.classList.remove('active');
            playScreen.classList.add('active');
            loadQuestion();
        });
    }

    function loadQuestion() {
        if (currentQuestionIndex >= quizData.length) {
            showResults();
            return;
        }

        // Atualização da barra de progresso
        const progressPercent = (currentQuestionIndex / quizData.length) * 100;
        progressBar.style.width = `${progressPercent}%`;

        // Renderização da pergunta ativa
        const currentQuiz = quizData[currentQuestionIndex];
        questionText.textContent = `${currentQuestionIndex + 1}. ${currentQuiz.question}`;
        
        // Limpeza e reconstrução dos botões de opções
        optionsBox.innerHTML = '';
        currentQuiz.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.classList.add('option-btn');
            button.textContent = option;
            button.addEventListener('click', () => selectOption(index));
            optionsBox.appendChild(button);
        });
    }

    function selectOption(selectedIndex) {
        const currentQuiz = quizData[currentQuestionIndex];
        if (selectedIndex === currentQuiz.correct) {
            userScore++;
        }
        currentQuestionIndex++;
        loadQuestion();
    }

    function showResults() {
        playScreen.classList.remove('active');
        endScreen.classList.add('active');
        progressBar.style.width = '100%';
        
        quizScoreText.innerHTML = `Acertou em <strong>${userScore} de ${quizData.length}</strong> perguntas!<br>`;
        
        // Atribuição de insígnias de gamificação baseada no mérito
        if (userScore === quizData.length) {
            quizScoreText.innerHTML += `<div class="badge-box">
                <div class="badge-icon">🏅</div>
                <strong>Insígnia Desbloqueada: Especialista Agro Verde</strong><br>
                Parabéns! O seu conhecimento sobre sustentabilidade no campo é de nível avançado.
            </div>`;
        } else if (userScore > 0) {
            quizScoreText.innerHTML += `<div class="badge-box">
                <div class="badge-icon">🌱</div>
                <strong>Insígnia Desbloqueada: Produtor Consciente</strong><br>
                Excelente início! Continue a aprender e a aplicar práticas sustentáveis.
            </div>`;
        } else {
            quizScoreText.innerHTML += `<br>Continue a estudar os nossos Manuais de Práticas Verdes para melhorar a sua pontuação!`;
        }
    }

    if (restartQuizBtn) {
        restartQuizBtn.addEventListener('click', () => {
            currentQuestionIndex = 0;
            userScore = 0;
            endScreen.classList.remove('active');
            welcomeScreen.classList.add('active');
            progressBar.style.width = '0%';
        });
    }
});
