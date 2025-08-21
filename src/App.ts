import { Client } from 'boardgame.io/react';
import { TicTacToe } from './Game';
import { Board } from './Board';

export default Client({ game: TicTacToe, board: Board });
