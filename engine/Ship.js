class Ship {
    types_and_sizes = {
        carrier: 5,
        battleship: 4,
        destroyer: 3,
        submarine: 3,
        patrol_boat: 2
    };
    size;
    direction;
    start_position;
    board; 
    ships_on_board = [];

    constructor(board) {
        this.board = board;
    }

    draw(start_position, direction, type) {
        this.direction = direction;
        this.start_position = start_position;
        this.size = this.types_and_sizes[type];
        
        this.calculateAllPositions();

        for (let i = 0; i <= this.ships_on_board.length - 1; i++) {
            for(let j = 0; j <= this.ships_on_board[i].length - 1; j++) {
                let square = document.getElementById(this.ships_on_board[i][j]);
                square.style.backgroundColor = "#222";
                square.style.border = "#222";
            }
        }
    }

    calculateAllPositions() {
        let position = this.start_position;
        let ship = this.ships_on_board.length;
        this.ships_on_board[ship] = [];

        for(let iteration = 1; iteration <= this.size; iteration++) {
            let [line, column] = this.splitPositionInToWordsAndNumbers(position.split(""));

            this.ships_on_board[ship].push(line+column);
          
            if (this.direction === 'horizontal') {
                column++;
                position = line + column;
            } else {
                position = this.board.alphabet[this.board.alphabet.indexOf(line) + 1] + column;   
            }
        }
    }

    checkIfAllPositionsAreAvailable(position) {
        
    }

    splitPositionInToWordsAndNumbers([line, ...column]) {
        return [line, column.join("")];
    }
}