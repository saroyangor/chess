import { Colors } from '../Colors'
import { Cell } from '../Cell'

import logo from '../../assets/black-knight.png'

export enum FigureNames {
  FIGURE = 'Фигура',
  KING = 'Король',
  KNIGHT = 'Конь',
  PAWN = 'Пешка',
  QUEEN = 'Ферзь',
  ROOK = 'Ладья',
  BISHOP = 'Слон',
}

export class Figure {
  color: Colors
  logo: typeof logo | null
  cell: Cell
  name: FigureNames
  id: number

  constructor(color: Colors, cell: Cell) {
    this.color = color
    this.cell = cell
    this.logo = null
    this.name = FigureNames.FIGURE
    this.id = Math.random()

    this.cell.figure = this
  }

  canMove(target: Cell): boolean {
    return true
  }

  
}
