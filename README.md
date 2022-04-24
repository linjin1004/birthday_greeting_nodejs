# birthday_greeting_nodejs

### To start the service
1. go to ./app and run `npm install`
2. run `node index.js`
3. visit http://localhost:3000

------

use `mysql.sql` script to generate seed data to mysql db if needed

------

 use `app.yaml` to start depended docker containers (mongodb, mysql db, and phpmyadmin) if needed
 
 ex: `docker compose -f .\app.yaml up -d`
