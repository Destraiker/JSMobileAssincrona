
window.onload = function () {
    const URL_TO_FETCH = 'json.txt'; 
    
    fetch(URL_TO_FETCH, {
      method: 'get' // opcional
    })
      .then(function (response) {
        response.text()
          .then(function (result) {
            var objectResult = JSON.parse(result);
            document.getElementById("receitas").innerHTML="<h4>"+objectResult.title+"</h4>";
            document.getElementById("receitas").innerHTML+="<img src='"+objectResult.href+"'>";
            document.getElementById("receitas").innerHTML+="<p>"+objectResult.ingredients+"</p>";
            document.getElementById("receitas").innerHTML+="<img src='"+objectResult.thumbnail+"'>";
          })
      })
      .catch(function (err) { console.error(err); });
  };