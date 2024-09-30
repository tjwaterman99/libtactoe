let { default: Game } = require('../dist/index');


test('Game', () => {
    let players = [{name: 'player1', 'token': 'X'}, {'name': 'player2', 'token': 'O'}]
    let coordinates = new Array()
    for (var x of Array(9).keys()) {
        coordinates.push({id: x})
    }
    let game = new Game({
        players: players,
        coordinates: coordinates
    })
    expect(game.players).toBe(players)
    expect(game.coordinates).toBe(coordinates)
    expect(game.current_player).toBe(0)

    game.play(0)
    expect(game.coordinates[0].played = players[0])
    expect(game.current_player).toBe(1)

    game.play(1)
    expect(game.coordinates[1].played = players[1])
    expect(game.current_player).toBe(0)
});
