class Board {
    NUMBER_OF_SQUARES = 10;
    alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    ship;

    setShip(ship) {
        this.ship = ship;
    }

    draw_board() {
        let square_div = document.querySelector(".squares");
        square_div.style.width = `${(50 * this.NUMBER_OF_SQUARES)}px`;

        square_div.style.height = `${(50 * this.NUMBER_OF_SQUARES)}px`;
        
        for(let line = 1; line <= this.NUMBER_OF_SQUARES; line++) {
            for(let column = 1; column <= this.NUMBER_OF_SQUARES; column++) {
                let square = document.createElement('div');
                square.setAttribute("class", "square");
                square.setAttribute("id", `${this.alphabet[line - 1] + column}` )
                square_div.appendChild(square);
            }
        }
    }

    draw_attack_board() {
        let square_div = document.querySelector(".mini_squares");
        square_div.style.width = `${(20 * this.NUMBER_OF_SQUARES)}px`;

        square_div.style.height = `${(20 * this.NUMBER_OF_SQUARES)}px`;
        
        for(let line = 1; line <= this.NUMBER_OF_SQUARES; line++) {
            for(let column = 1; column <= this.NUMBER_OF_SQUARES; column++) {
                let square = document.createElement('div');
                square.setAttribute("class", "mini_square");
                square.setAttribute("data-target", `${this.alphabet[line - 1] + column}` )
                square.onclick = (element) => {
                    this.click_to_attack(element, square);
                }
                square_div.appendChild(square);
            }
        }
    }

    click_to_attack(element, clicked_square) {

        let position_to_attack = element.target.attributes.getNamedItem("data-target").value;

        if (this.check_if_position_has_a_ship(position_to_attack)) {
            clicked_square.style.backgroundColor = "#871818";
        } else {
            clicked_square.style.backgroundColor = "#FFFFFF";
        }

        /**
         * @todo
         * When we have a second player we don't need to paint the main board, just attack board.
         * But for now we're painting just for visualize the conception.
         */
        if (this.check_if_position_has_a_ship(position_to_attack)) {
            let board_square = document.getElementById(position_to_attack);
            board_square.style.backgroundColor = "#871818";
            board_square.style.border = "#871818";
        }
    }

    check_if_position_has_a_ship(position) {
        for(let i = 0; i <= this.ship.ships_on_board.length - 1; i++) {
            if (this.ship.ships_on_board[i].includes(position))
                return true;
        }
        return false;
    }
}