// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url, callback) {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url);
  xmlhttp.addEventListener("load", function () {
    if (xmlhttp.status >= 200 && xmlhttp.status < 400) {
    // Appelle la fonction callback en lui passant la réponse de la requête
    callback(xmlhttp.responseText);
    }
    else {
    console.error(xmlhttp.status + " " + xmlhttp.statusText + " " + url);
    }
  });

  xmlhttp.addEventListener("error", function () {
    console.error("Erreur réseau avec l'URL " + url);
  });
  xmlhttp.send(null);
}
