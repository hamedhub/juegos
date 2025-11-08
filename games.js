// ========== SNAKE GAME ==========
let snakeCanvas, snakeCtx;
let snake, food, dx, dy, score, snakeGameLoop;

function startSnake() {
    if (snakeGameLoop) clearInterval(snakeGameLoop);

    snakeCanvas = document.getElementById('snakeGame');
    snakeCtx = snakeCanvas.getContext('2d');

    const gridSize = 20;
    snake = [{x: 200, y: 200}];
    food = {x: 0, y: 0};
    dx = gridSize;
    dy = 0;
    score = 0;

    placeFood();
    document.getElementById('snakeScore').textContent = score;

    document.addEventListener('keydown', changeSnakeDirection);
    snakeGameLoop = setInterval(updateSnake, 100);
}

function placeFood() {
    const gridSize = 20;
    food.x = Math.floor(Math.random() * (snakeCanvas.width / gridSize)) * gridSize;
    food.y = Math.floor(Math.random() * (snakeCanvas.height / gridSize)) * gridSize;
}

function changeSnakeDirection(e) {
    const LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
    const gridSize = 20;

    if (e.keyCode === LEFT && dx === 0) { dx = -gridSize; dy = 0; }
    if (e.keyCode === UP && dy === 0) { dx = 0; dy = -gridSize; }
    if (e.keyCode === RIGHT && dx === 0) { dx = gridSize; dy = 0; }
    if (e.keyCode === DOWN && dy === 0) { dx = 0; dy = gridSize; }
}

function updateSnake() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};

    // Check collision with walls
    if (head.x < 0 || head.x >= snakeCanvas.width || head.y < 0 || head.y >= snakeCanvas.height) {
        clearInterval(snakeGameLoop);
        alert('Game Over! Puntuación: ' + score);
        return;
    }

    // Check collision with self
    for (let segment of snake) {
        if (head.x === segment.x && head.y === segment.y) {
            clearInterval(snakeGameLoop);
            alert('Game Over! Puntuación: ' + score);
            return;
        }
    }

    snake.unshift(head);

    // Check if food eaten
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        document.getElementById('snakeScore').textContent = score;
        placeFood();
    } else {
        snake.pop();
    }

    drawSnake();
}

function drawSnake() {
    snakeCtx.fillStyle = '#000';
    snakeCtx.fillRect(0, 0, snakeCanvas.width, snakeCanvas.height);

    // Draw snake
    snakeCtx.fillStyle = '#0f0';
    snake.forEach(segment => {
        snakeCtx.fillRect(segment.x, segment.y, 18, 18);
    });

    // Draw food
    snakeCtx.fillStyle = '#f00';
    snakeCtx.fillRect(food.x, food.y, 18, 18);
}

// ========== MEMORY GAME ==========
let memoryCards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;

function startMemory() {
    const symbols = ['🎮', '🎯', '🎲', '🎪', '🎨', '🎭', '🎸', '🎺'];
    memoryCards = [...symbols, ...symbols];
    memoryCards.sort(() => Math.random() - 0.5);

    flippedCards = [];
    matchedPairs = 0;
    moves = 0;
    document.getElementById('memoryMoves').textContent = moves;

    const grid = document.getElementById('memoryGame');
    grid.innerHTML = '';

    memoryCards.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.index = index;
        card.dataset.symbol = symbol;
        card.addEventListener('click', flipMemoryCard);
        grid.appendChild(card);
    });
}

function flipMemoryCard(e) {
    const card = e.target;

    if (card.classList.contains('flipped') || card.classList.contains('matched')) return;
    if (flippedCards.length >= 2) return;

    card.classList.add('flipped');
    card.textContent = card.dataset.symbol;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        moves++;
        document.getElementById('memoryMoves').textContent = moves;

        setTimeout(() => {
            if (flippedCards[0].dataset.symbol === flippedCards[1].dataset.symbol) {
                flippedCards[0].classList.add('matched');
                flippedCards[1].classList.add('matched');
                matchedPairs++;

                if (matchedPairs === 8) {
                    setTimeout(() => alert('¡Ganaste! Movimientos: ' + moves), 300);
                }
            } else {
                flippedCards[0].classList.remove('flipped');
                flippedCards[1].classList.remove('flipped');
                flippedCards[0].textContent = '';
                flippedCards[1].textContent = '';
            }
            flippedCards = [];
        }, 1000);
    }
}

// ========== TIC TAC TOE ==========
let board = [];
let currentPlayer = 'X';
let gameActive = true;

function startTicTacToe() {
    board = Array(9).fill('');
    currentPlayer = 'X';
    gameActive = true;
    document.getElementById('tictactoeStatus').textContent = 'Turno: X';

    const grid = document.getElementById('ticTacToe');
    grid.innerHTML = '';

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.className = 'tictactoe-cell';
        cell.dataset.index = i;
        cell.addEventListener('click', handleTicTacToeClick);
        grid.appendChild(cell);
    }
}

function handleTicTacToeClick(e) {
    const cell = e.target;
    const index = cell.dataset.index;

    if (board[index] !== '' || !gameActive) return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer.toLowerCase());

    if (checkWinner()) {
        document.getElementById('tictactoeStatus').textContent = '¡Ganó ' + currentPlayer + '!';
        gameActive = false;
        return;
    }

    if (board.every(cell => cell !== '')) {
        document.getElementById('tictactoeStatus').textContent = '¡Empate!';
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('tictactoeStatus').textContent = 'Turno: ' + currentPlayer;
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

// ========== BREAKOUT GAME ==========
let breakoutCanvas, breakoutCtx;
let ball, paddle, bricks, breakoutScore, breakoutGameLoop;

function startBreakout() {
    if (breakoutGameLoop) cancelAnimationFrame(breakoutGameLoop);

    breakoutCanvas = document.getElementById('breakoutGame');
    breakoutCtx = breakoutCanvas.getContext('2d');

    ball = {x: 200, y: 300, dx: 3, dy: -3, radius: 8};
    paddle = {x: 160, y: 380, width: 80, height: 10, speed: 7};
    breakoutScore = 0;

    // Create bricks
    bricks = [];
    const brickRowCount = 5;
    const brickColumnCount = 8;
    const brickWidth = 45;
    const brickHeight = 15;
    const brickPadding = 5;
    const brickOffsetTop = 30;
    const brickOffsetLeft = 10;

    for (let c = 0; c < brickColumnCount; c++) {
        bricks[c] = [];
        for (let r = 0; r < brickRowCount; r++) {
            bricks[c][r] = {x: 0, y: 0, status: 1};
        }
    }

    document.getElementById('breakoutScore').textContent = breakoutScore;

    breakoutCanvas.addEventListener('mousemove', (e) => {
        const rect = breakoutCanvas.getBoundingClientRect();
        paddle.x = e.clientX - rect.left - paddle.width / 2;
        if (paddle.x < 0) paddle.x = 0;
        if (paddle.x + paddle.width > breakoutCanvas.width) {
            paddle.x = breakoutCanvas.width - paddle.width;
        }
    });

    updateBreakout();
}

function updateBreakout() {
    breakoutCtx.fillStyle = '#000';
    breakoutCtx.fillRect(0, 0, breakoutCanvas.width, breakoutCanvas.height);

    // Draw bricks
    const brickWidth = 45;
    const brickHeight = 15;
    const brickPadding = 5;
    const brickOffsetTop = 30;
    const brickOffsetLeft = 10;

    for (let c = 0; c < bricks.length; c++) {
        for (let r = 0; r < bricks[c].length; r++) {
            if (bricks[c][r].status === 1) {
                const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
                const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;

                breakoutCtx.fillStyle = '#667eea';
                breakoutCtx.fillRect(brickX, brickY, brickWidth, brickHeight);
            }
        }
    }

    // Draw ball
    breakoutCtx.fillStyle = '#fff';
    breakoutCtx.beginPath();
    breakoutCtx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    breakoutCtx.fill();

    // Draw paddle
    breakoutCtx.fillStyle = '#0f0';
    breakoutCtx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

    // Ball collision with walls
    if (ball.x + ball.dx > breakoutCanvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
        ball.dx = -ball.dx;
    }
    if (ball.y + ball.dy < ball.radius) {
        ball.dy = -ball.dy;
    }

    // Ball collision with paddle
    if (ball.y + ball.dy > paddle.y - ball.radius) {
        if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
            ball.dy = -ball.dy;
        }
    }

    // Ball falls off screen
    if (ball.y + ball.dy > breakoutCanvas.height - ball.radius) {
        alert('Game Over! Puntuación: ' + breakoutScore);
        return;
    }

    // Brick collision
    for (let c = 0; c < bricks.length; c++) {
        for (let r = 0; r < bricks[c].length; r++) {
            const b = bricks[c][r];
            if (b.status === 1) {
                if (ball.x > b.x && ball.x < b.x + brickWidth &&
                    ball.y > b.y && ball.y < b.y + brickHeight) {
                    ball.dy = -ball.dy;
                    b.status = 0;
                    breakoutScore += 10;
                    document.getElementById('breakoutScore').textContent = breakoutScore;
                }
            }
        }
    }

    ball.x += ball.dx;
    ball.y += ball.dy;

    breakoutGameLoop = requestAnimationFrame(updateBreakout);
}

// ========== 2048 GAME ==========
let grid2048 = [];
let score2048 = 0;

function start2048() {
    grid2048 = Array(4).fill().map(() => Array(4).fill(0));
    score2048 = 0;
    document.getElementById('score2048').textContent = score2048;

    addRandomTile();
    addRandomTile();
    render2048();

    document.addEventListener('keydown', handle2048KeyPress);
}

function addRandomTile() {
    const emptyCells = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid2048[i][j] === 0) emptyCells.push({i, j});
        }
    }

    if (emptyCells.length > 0) {
        const {i, j} = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        grid2048[i][j] = Math.random() < 0.9 ? 2 : 4;
    }
}

function handle2048KeyPress(e) {
    const key = e.key;
    let moved = false;

    if (key === 'ArrowUp') moved = move2048Up();
    else if (key === 'ArrowDown') moved = move2048Down();
    else if (key === 'ArrowLeft') moved = move2048Left();
    else if (key === 'ArrowRight') moved = move2048Right();

    if (moved) {
        addRandomTile();
        render2048();

        if (checkWin2048()) {
            alert('¡Ganaste! Llegaste a 2048!');
        } else if (checkGameOver2048()) {
            alert('Game Over! Puntuación: ' + score2048);
        }
    }
}

function move2048Left() {
    let moved = false;
    for (let i = 0; i < 4; i++) {
        const row = grid2048[i].filter(val => val !== 0);
        for (let j = 0; j < row.length - 1; j++) {
            if (row[j] === row[j + 1]) {
                row[j] *= 2;
                score2048 += row[j];
                row.splice(j + 1, 1);
            }
        }
        while (row.length < 4) row.push(0);
        if (JSON.stringify(row) !== JSON.stringify(grid2048[i])) moved = true;
        grid2048[i] = row;
    }
    return moved;
}

function move2048Right() {
    let moved = false;
    for (let i = 0; i < 4; i++) {
        const row = grid2048[i].filter(val => val !== 0);
        for (let j = row.length - 1; j > 0; j--) {
            if (row[j] === row[j - 1]) {
                row[j] *= 2;
                score2048 += row[j];
                row.splice(j - 1, 1);
                j--;
            }
        }
        while (row.length < 4) row.unshift(0);
        if (JSON.stringify(row) !== JSON.stringify(grid2048[i])) moved = true;
        grid2048[i] = row;
    }
    return moved;
}

function move2048Up() {
    let moved = false;
    for (let j = 0; j < 4; j++) {
        const column = grid2048.map(row => row[j]).filter(val => val !== 0);
        for (let i = 0; i < column.length - 1; i++) {
            if (column[i] === column[i + 1]) {
                column[i] *= 2;
                score2048 += column[i];
                column.splice(i + 1, 1);
            }
        }
        while (column.length < 4) column.push(0);
        const original = grid2048.map(row => row[j]);
        if (JSON.stringify(column) !== JSON.stringify(original)) moved = true;
        for (let i = 0; i < 4; i++) grid2048[i][j] = column[i];
    }
    return moved;
}

function move2048Down() {
    let moved = false;
    for (let j = 0; j < 4; j++) {
        const column = grid2048.map(row => row[j]).filter(val => val !== 0);
        for (let i = column.length - 1; i > 0; i--) {
            if (column[i] === column[i - 1]) {
                column[i] *= 2;
                score2048 += column[i];
                column.splice(i - 1, 1);
                i--;
            }
        }
        while (column.length < 4) column.unshift(0);
        const original = grid2048.map(row => row[j]);
        if (JSON.stringify(column) !== JSON.stringify(original)) moved = true;
        for (let i = 0; i < 4; i++) grid2048[i][j] = column[i];
    }
    return moved;
}

function render2048() {
    const container = document.getElementById('game2048');
    container.innerHTML = '';

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const tile = document.createElement('div');
            tile.className = 'tile-2048';
            if (grid2048[i][j] > 0) {
                tile.textContent = grid2048[i][j];
                tile.classList.add('tile-' + grid2048[i][j]);
            }
            container.appendChild(tile);
        }
    }

    document.getElementById('score2048').textContent = score2048;
}

function checkWin2048() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid2048[i][j] === 2048) return true;
        }
    }
    return false;
}

function checkGameOver2048() {
    // Check for empty cells
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid2048[i][j] === 0) return false;
        }
    }

    // Check for possible merges
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid2048[i][j] === grid2048[i][j + 1]) return false;
        }
    }
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 3; i++) {
            if (grid2048[i][j] === grid2048[i + 1][j]) return false;
        }
    }

    return true;
}

// ========== TETRIS GAME ==========
let tetrisCanvas, tetrisCtx;
let tetrisBoard, tetrisPiece, tetrisScore, tetrisGameLoop;
const COLS = 10, ROWS = 20, BLOCK_SIZE = 30;

const SHAPES = [
    [[1,1,1,1]], // I
    [[1,1],[1,1]], // O
    [[0,1,0],[1,1,1]], // T
    [[1,1,0],[0,1,1]], // S
    [[0,1,1],[1,1,0]], // Z
    [[1,0,0],[1,1,1]], // L
    [[0,0,1],[1,1,1]]  // J
];

const COLORS = ['#00f', '#ff0', '#f0f', '#0f0', '#f00', '#fa0', '#00f'];

function startTetris() {
    if (tetrisGameLoop) clearInterval(tetrisGameLoop);

    tetrisCanvas = document.getElementById('tetrisGame');
    tetrisCtx = tetrisCanvas.getContext('2d');

    tetrisBoard = Array(ROWS).fill().map(() => Array(COLS).fill(0));
    tetrisScore = 0;
    document.getElementById('tetrisScore').textContent = tetrisScore;

    spawnTetrisPiece();

    document.addEventListener('keydown', handleTetrisKeyPress);
    tetrisGameLoop = setInterval(dropTetrisPiece, 500);
}

function spawnTetrisPiece() {
    const shapeIndex = Math.floor(Math.random() * SHAPES.length);
    tetrisPiece = {
        shape: SHAPES[shapeIndex],
        color: COLORS[shapeIndex],
        x: Math.floor(COLS / 2) - 1,
        y: 0
    };

    if (checkTetrisCollision(tetrisPiece.x, tetrisPiece.y, tetrisPiece.shape)) {
        clearInterval(tetrisGameLoop);
        alert('Game Over! Puntuación: ' + tetrisScore);
    }
}

function handleTetrisKeyPress(e) {
    if (e.key === 'ArrowLeft') moveTetrisPiece(-1);
    if (e.key === 'ArrowRight') moveTetrisPiece(1);
    if (e.key === 'ArrowDown') dropTetrisPiece();
    if (e.key === ' ') rotateTetrisPiece();
}

function moveTetrisPiece(dir) {
    if (!checkTetrisCollision(tetrisPiece.x + dir, tetrisPiece.y, tetrisPiece.shape)) {
        tetrisPiece.x += dir;
        drawTetris();
    }
}

function dropTetrisPiece() {
    if (!checkTetrisCollision(tetrisPiece.x, tetrisPiece.y + 1, tetrisPiece.shape)) {
        tetrisPiece.y++;
        drawTetris();
    } else {
        mergeTetrisPiece();
        clearTetrisLines();
        spawnTetrisPiece();
        drawTetris();
    }
}

function rotateTetrisPiece() {
    const rotated = tetrisPiece.shape[0].map((_, i) =>
        tetrisPiece.shape.map(row => row[i]).reverse()
    );

    if (!checkTetrisCollision(tetrisPiece.x, tetrisPiece.y, rotated)) {
        tetrisPiece.shape = rotated;
        drawTetris();
    }
}

function checkTetrisCollision(x, y, shape) {
    for (let row = 0; row < shape.length; row++) {
        for (let col = 0; col < shape[row].length; col++) {
            if (shape[row][col]) {
                const newX = x + col;
                const newY = y + row;

                if (newX < 0 || newX >= COLS || newY >= ROWS) return true;
                if (newY >= 0 && tetrisBoard[newY][newX]) return true;
            }
        }
    }
    return false;
}

function mergeTetrisPiece() {
    tetrisPiece.shape.forEach((row, r) => {
        row.forEach((value, c) => {
            if (value) {
                tetrisBoard[tetrisPiece.y + r][tetrisPiece.x + c] = tetrisPiece.color;
            }
        });
    });
}

function clearTetrisLines() {
    let linesCleared = 0;

    for (let row = ROWS - 1; row >= 0; row--) {
        if (tetrisBoard[row].every(cell => cell !== 0)) {
            tetrisBoard.splice(row, 1);
            tetrisBoard.unshift(Array(COLS).fill(0));
            linesCleared++;
            row++;
        }
    }

    if (linesCleared > 0) {
        tetrisScore += linesCleared * 100;
        document.getElementById('tetrisScore').textContent = tetrisScore;
    }
}

function drawTetris() {
    tetrisCtx.fillStyle = '#000';
    tetrisCtx.fillRect(0, 0, tetrisCanvas.width, tetrisCanvas.height);

    // Draw board
    tetrisBoard.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value) {
                tetrisCtx.fillStyle = value;
                tetrisCtx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE - 1, BLOCK_SIZE - 1);
            }
        });
    });

    // Draw current piece
    tetrisCtx.fillStyle = tetrisPiece.color;
    tetrisPiece.shape.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value) {
                tetrisCtx.fillRect(
                    (tetrisPiece.x + x) * BLOCK_SIZE,
                    (tetrisPiece.y + y) * BLOCK_SIZE,
                    BLOCK_SIZE - 1,
                    BLOCK_SIZE - 1
                );
            }
        });
    });
}

// Initialize games on page load
window.addEventListener('DOMContentLoaded', () => {
    startMemory();
    startTicTacToe();
    start2048();
});
