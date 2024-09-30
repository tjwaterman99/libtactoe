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
}

