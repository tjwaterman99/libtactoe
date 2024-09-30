interface Player {
    name: string,
    token: string
}


interface Coordinate {
    id: number
    played?: Player
}


interface GameState {
    players: Player[],
    coordinates: Coordinate[]
}


export default class Game {
    players: Player[]
    coordinates: Coordinate[]
    current_player: number

    constructor(state: GameState) {
        this.players = state.players
        this.coordinates = state.coordinates
        this.current_player = 0
    }

    changePlayer() {
        this.current_player = Math.abs(this.current_player - 1)
    }

    play(coordinate: number) {
        let player = this.players[this.current_player]
        this.coordinates[coordinate].played = player
        this.changePlayer()
    }

    // TODO: check the winning conditions to see if any of them
    // are all occupied by a single player
    isFinished() {
        let winning_conditions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [1,4,8],
            [6,4,2],
        ]
    }
}

