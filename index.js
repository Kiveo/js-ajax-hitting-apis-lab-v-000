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
  console.log(repos);
  // iterate and format the output
  const repoList = `<ul>${repos.map(repo => '<li>' + repo.name + '</li>').join('')}</ul>`
  // place the formatted output into our DOM
  document.getElementById("repositories").innerHTML = repoList;
}

// 
// function showRepositories(event, data) {
//   var repos = JSON.parse(this.responseText)
//   console.log(repos)
//   const repoList = `<ul>${repos.map(r => '<li>' + r.name + '</li>').join('')}</ul>`
//   document.getElementById("repositories").innerHTML = repoList
// }
