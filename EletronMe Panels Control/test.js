//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// Função que faz o login no Dashboard do Painel EletronMe
function loginIntoEletronMe() {

    var username = $("#username").val();
    var password = $("#password").val();

    everlive.authentication.login(username, password, function (data) {
        var accessToken = data.result.access_token;
        alert("Successfully logged the user in! Received access token: " + accessToken);
    }, function (err) {
        alert("Unfortunately an error occurred: " + err.message);
    });

} // end of function: loginIntoEletronMe() 