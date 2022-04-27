# birthday_greeting_nodejs

### To start the service
1. go to ./app and run `npm install`
2. run `node index.js` (in ./app folder)
3. visit http://localhost:3000
4. API url list:
    + Version 1: simple message - http://localhost:3000/version_1/simple_message
    + Version 2: Tailer-made Message for different gender - http://localhost:3000/version_2/message_for_different_gender
    + Version 3: Message with an Elder Picture for those whose age is over 49 - http://localhost:3000/version_3/message_with_elder_pic
    + Version 4: Simple Message with full name - http://localhost:3000/version_4/message_with_full_name
    + Version 5: Simple Message but database changes - http://localhost:3000/version_5/database_changes
    + Version 6: Simple Message but different output data format - http://localhost:3000/version_6/message_in_xml

PS: Most of the code of business logic is in ./app/controllers/greeting_controller.js

------

use `./testing/app_postman_collection.json` to run test with [Postman]

[Postman]: https://www.postman.com/

------

 use `app.yaml` to start dependant docker containers (mongodb, mysql db, and phpmyadmin) if needed

 ex: run `docker compose -f .\app.yaml up -d` to start dependant conatiners before starting nodejs service

------

use `mysql.sql` script to manually generate seed data to mysql db if needed
