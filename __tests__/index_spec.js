let { default: Game } = require('../dist/index');


test('Game', () => {
    let players = [{name: 'player1', 'token': 'X'}, {'name': 'player2', 'token': 'O'}]
    let coordinates = Array(9)
    let game = new Game({
        players: players,
        coordinates: coordinates
    })
    expect(game.players).toBe(players)
    expect(game.coordinates).toBe(coordinates)
});
