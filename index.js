function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener("load", displayRepositories());
  req.open("GET", 'https://api.github.com/users/octocat/repos');
  req.send();
}
// called within getRepos: Handler
function displayRepositories(event, data) {
  var repos = JSON.parse(this.responseText);
  const repoList = `<ul>${repos.map(repo => '<li>' + repo.name + '</li>').join('')}`
  document.getElementById("repositories").innerHTML = repoList;
}
