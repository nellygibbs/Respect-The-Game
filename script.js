// need the button to be able to be able to grab the date of the game

$('#btn-search').click(function(){
    let dateOfGame = $('#dateOfGame')
    // the date i want to get from the game

    const ballDontLieApi = `https://www.balldontlie.io/api/v1/games?start_date=${dateOfGame.val()}&end_date=${dateOfGame.val()}`

    $.ajax({
        method: 'GET',
        url: ballDontLieApi,
        success: function (response)
        {
        // console.log(response) finally got data in the console


        $('#scores-div').html('');

        for(let i = 0; i < response.data.length; i++){
            $('#scores-div').append(`
            <div class="col-3">
                    <div class="card">
                        <div class="card-header">
                          Final
                        </div>
                        <div class="score-card">
                            <p><small>${response.data[i].visitor_team.city}</small> <b>${response.data[i].visitor_team.name}</b> - ${response.data[i].visitor_team_score}</p>
                            <hr>
                            <p><small>${response.data[i].home_team.city}</small> <b>${response.data[i].home_team.name}</b> - ${response.data[i].home_team_score}</p>
                        </div>
                      </div>
                </div>
            `)
        }
       
        }
    });
})