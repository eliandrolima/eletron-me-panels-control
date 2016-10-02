var apiKey = "dq4csr9s59pcalxu";
var everlive = new Everlive({
    appId: apiKey
});

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// Função que faz o login no Dashboard do Painel EletronMe
/*
function loginIntoEletronMe() {

    var username = $("#username").val();
    var password = $("#password").val();

    // verifica se os campos foram preenchidos
    if (username === "" || password === "") {
        alert("Campo vazio!");
    } else {

        everlive.authentication.login(username, password, function (data) {

            var accessToken = data.result.access_token;
            alert("Successfully logged the user in! Received access token: " + accessToken);
            location.href = "#home";
        }, function (err) {
            // alert("Unfortunately an error occurred: " + err.message);
            window.plugins.toast.showLongCenter(err.message);
        });

    } // end of conditional: if (username === "" || password === "")
} // end of function: loginIntoEletronMe() 

*/