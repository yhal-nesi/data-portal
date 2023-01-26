# Updating Portal - Checklist 

When updating Portal, please do the following:

- ensure local development is not broken (instructions here: https://nznesi.atlassian.net/wiki/spaces/CIT/pages/2284093447/Running+Gen3+portal+UI+locally)
- ensure everything is working expected on a deployment, e.g. repotest.data.nesi.org.nz 
- when doing development work, please use the development branch or some other branch before merging into master 
- **update nesi_version.txt** before pushing changes, so that existing dockerhub images are not disturbed

data-portal documentation is available here: https://github.com/uc-cdis/data-portal
