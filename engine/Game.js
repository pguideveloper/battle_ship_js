class Game {
    board;
    ship;
    start() {

        this.board = new Board(10);
        this.board.draw();
        this.board.draw_attack_board();
        
        this.ship = new Ship(this.board);    
    }

    add_ship(start, position, type) {
        this.ship.draw(start, position, type);
    }

    
    
}