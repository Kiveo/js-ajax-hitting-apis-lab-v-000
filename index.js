// Request
function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener("load", displayRepositories());
  req.open("GET", 'https://api.github.com/users/octocat/repos');
  req.send();
}
// Response
// called within getRepos: Handle + Display
function displayRepositories(event, data) {
  // parse responseText as JSON
  var repos = JSON.parse(this.responseText);
  // iterate and format the output
  const repoList = `<ul>${repos.map(repo => '<li>' + repo.name + '</li>').join('')}`
  // place the formatted output into our DOM
  document.getElementById("repositories").innerHTML = repoList;
}
