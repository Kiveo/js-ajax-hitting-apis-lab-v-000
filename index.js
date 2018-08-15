function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener("load", displayRepositories());
  req.open("GET", 'https://api.github.com/users/octocat/repos');
  req.send();
}
// called within getRepos: Handler
function displayRepositories(event, data) {
  console.log(this.responseText)
}
