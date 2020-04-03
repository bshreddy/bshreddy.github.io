pinned = ["Sputify", "PhysicsSims", "ArcadeGames", "TextClassifier-FlaskWebApp"]

$.get("https://api.github.com/users/saihemanthbr/repos", (repos, status) => {
  if(repos == undefined)
    return

  var repoCards = ""
  repos = repos.filter((repo) => { return pinned.includes(repo.name) && !(repo.name.startsWith('.') || repo.fork)})
  repos = repos.sort(function(a, b) {return pinned.indexOf(a.name) - pinned.indexOf(b.name);});
  
  repos.forEach((repo) => {
    const repoCard = `
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-8-mobile">
        <div class="mdc-card project-card mdc-elevation--z4">
          <a class="project-title" href=${repo.html_url}>${repo.name}</a>
          <div class="project-desc">${(repo.description) ? repo.description : ""}</div>
          <div class="project-info">
            <span class="project-lang">
              <span class="project-lang-color" style="background-color: ${github_lang_colors[repo.language]}"></span>
              <span class="project-lang-name">${repo.language}</span>
            </span>

            ${(repo.stargazers_count != 0) ?
                `<a href="" class="project-stat project-stars">
                  <svg aria-label="stars" class="project-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
                  ${repo.stargazers_count}
                </a>` : ""}

            ${(repo.forks != 0) ?
                `<a href="" class="project-stat project-forks" ${(repo.stargazers_count == 0) ? 'style="margin: 0px"' : ""}>
                  <svg aria-label="fork" class="project-fork" viewBox="0 0 10 16" version="1.1" width="10" height="16" role="img"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
                  1
                </a>` : ""
            }
          </div>
        </div>
      </div>
    `

    repoCards += repoCard + "\n"
  });

  $("#projects-list").html(repoCards)
})