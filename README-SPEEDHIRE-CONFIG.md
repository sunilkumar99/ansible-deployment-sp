For Viewing log of remote application
===========================
I have created script for viewing remote log. Please find the script on below path
 
       cd /home/ubuntu/radhey/ansible/logview
        apilog-nohup.sh
        apilog.sh
        backend-ds-log.sh
        backend-ds-nohup-log.sh
        backendlog.sh
        backend-nohup-log.sh
        candidatelog.sh
        cmslog.sh
  
        

Application config related path
================================

Please use below path for making any config related changes before deployment.

For Deploying backend application
--
 - System Service file
 
        /home/ubuntu/radhey/release/config/backend/backendservice.service
  
 - Application Config path

        /home/ubuntu/radhey/release/config/backend/conf
 
For Deploying API application
--
 - System Service Path
 
        /home/ubuntu/radhey/release/config/api/
  
 - Application Config path

        /home/ubuntu/radhey/release/config/api/conf
        

For Deploying CMS application
--
  
 - Application Config path

        /home/ubuntu/radhey/ansible/roles/create_cms_build/files/app-config.ts
       /home/ubuntu/radhey/ansible/roles/create_cms_build/files/environment.prod.ts 
        

For Deploying Candidate application
--
  - Application Config path

        /home/ubuntu/radhey/ansible/roles/create_candidate_build/files/environment.prod.ts
        
For Deploying DS backend application
--
 - System Service file
 
        /home/ubuntu/radhey/release/config/dsmanager/dsbackendservice.service
  
 - Application Config path

        /home/ubuntu/radhey/release/config/dsmanager/conf
        
        
For Deploying scheduler application
--
 - System Service Path
 
        /home/ubuntu/radhey/release/config/cron/
  
 - Application Config path

        /home/ubuntu/radhey/release/config/cron/conf
        
       