function getRepositories() {
  const req = new XMLHTTPrequest();
  req.open("GET", 'https://api.github.com/users/octocat/repos')
  req.send()
}
