multitail -l 'ssh code1 "tail -f /var/log/backendservice/backendservice.log"' -l 'ssh code2 "tail -f /var/log/backendservice/backendservice.log"'