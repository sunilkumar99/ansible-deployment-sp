Deployment Steps
==========================

We have created tag for each type of task which are mainly
  -  setup : This tag is used for setting up environment of application.
  -  docker: This tag is use to configure docker on machine
  -  build : Used for pulling code from git repo and creating build and moving executable to release folder 
  -  deploy : Used to deploy code on remote from release folder
  -  gitpull: Used to checkout and pull code from git

For Deploying backend application
--
 - For first time
 
        ansible-playbook release_backend_service.yaml --ask-vault-pass --tags "setup,build,deploy"
 
 
 - Normally we use

        ansible-playbook release_backend_service.yaml --ask-vault-pass --tags "build,deploy"
 
For Deploying API application
--
 - For first time
 
        ansible-playbook release_api_service.yaml --ask-vault-pass --tags "setup,build,deploy"
 - for deploying code with gitpull 
 
        ansible-playbook release_api_service.yaml --ask-vault-pass --tags "gitpull,build,deploy"
        
 - for deploying local checkout code 
 
        ansible-playbook release_api_service.yaml --ask-vault-pass --tags "build,deploy"
        
For Deploying CMS application
--
 - For first time
 
        ansible-playbook release_cms_service.yaml --ask-vault-pass --tags "setup,docker,build,deploy"
  
 - for deploying code with gitpull 
 
        ansible-playbook release_cms_service.yaml --ask-vault-pass --tags "gitpull,build,deploy"
 
 - for deploying local checkout code
 
        ansible-playbook release_cms_service.yaml --ask-vault-pass --tags "build,deploy"    

For Deploying Candidate application
--
 - For first time
 
        ansible-playbook release_candidate_service.yaml --ask-vault-pass --tags "setup,docker,build,deploy"
 
 - for deploying code with gitpull 
 
        ansible-playbook release_candidate_service.yaml --ask-vault-pass --tags "gitpull,build,deploy"
   
 - for deploying local checkout code
 
        ansible-playbook release_candidate_service.yaml --ask-vault-pass --tags "build,deploy"                    

For Deploying DS backend application
--
 - For first time
 
        ansible-playbook release_ds_backend_service.yaml --ask-vault-pass --tags "setup,build,deploy"
  
 - Normally we use

        ansible-playbook release_ds_backend_service.yaml --ask-vault-pass --tags "build,deploy"
 
 For Deploying scheduler application
--
 - For first time
 
        ansible-playbook release_scheduler_service.yaml --ask-vault-pass --tags "setup,build,deploy"
  
 - Normally we use

        ansible-playbook release_scheduler_service.yaml --ask-vault-pass --tags "build,deploy"

 For Deploying Interview Candidate application
--
 - For first time
 
        ansible-playbook release_interview_candidate_service.yaml --ask-vault-pass --tags "setup,docker,build,deploy"
 
 - for deploying code with gitpull 
 
        ansible-playbook release_interview_candidate_service.yaml --ask-vault-pass --tags "gitpull,build,deploy"
   
 - for deploying local checkout code
 
        ansible-playbook release_interview_candidate_service.yaml --ask-vault-pass --tags "build,deploy"                    
  
  
Restarting services
--
 We have created below tags for restarting services
  - backend  : Code evaluation application
  - dsbackend: Data science backend
  - cand : Candidate application
  - cms  : CMS application
  - intcand: Interview candidate
  - api    : Api service
  - cron   : Scheduler service  
  
  Command to restart application
  
        ansible-playbook restart_services.yaml  --ask-vault-pass --tags "backend,dsbackend,cand,cms,intcand,api,cron"
    

Stopping services
--
 We have created below tags for Stopping services
  - backend  : Code evaluation application
  - dsbackend: Data science backend
  - cand : Candidate application
  - cms  : CMS application
  - intcand: Interview candidate
  - api    : Api service
  - cron   : Scheduler service  
  
  Command to restart application
  
        ansible-playbook stop_services.yaml  --ask-vault-pass --tags "backend,dsbackend,cand,cms,intcand,api,cron"        