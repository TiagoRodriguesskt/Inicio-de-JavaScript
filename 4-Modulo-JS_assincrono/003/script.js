axios.get('https://api.github.com/users/repos')
    .then(function(response) {
        console.log(response);

    })
    .catch(function(error) {
        console.warn(error);
    });