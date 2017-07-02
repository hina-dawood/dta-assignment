# dta-assignment

Steps to run the project
You’ll need to have Node >= 6 on your machine
1. git clone git@github.com:hina-dawood/dta-assignment.git
2. cd dta-assignment
3. Execute 'npm install' to install required node modules
4. npm start
5. open url http://localhost:3000/ in browser to view the app
6. Execute 'npm run test' to run unit testcases
7. Code linting will be performed during 'npm run build' and lint warnings displayed in terminal

Requirements
1. Must read data from the endpoint. - Yes
2. Multiple bars. - Yes
3. One set of controls that can control each bar on the fly. - Yes
4. Can't go under 0. - Yes (stops at last possible positive percentage value)
5. Can go over 100%, but limit the bar itself and change its colour. - Yes
6. Display usage amount as a percentage, centered on each bar. - Yes
7. Write tests for your code (hint: TDD strongly preferred). - Yes
8. Implement a responsive solution: testing it on mobile, tablet, etc. Getting it working nicely. - Yes (media queries added)
9. Animate the bar change, make sure it works well when you tap buttons quickly. - Yes
10. Version control. - Yes
11. Setting it up as a project. -Yes
12. Setting up some automated tools. - Yes (axios, eslint, enzyme etc)
13. Linting, code quality, etc. - Yes
14. Comment code. - Yes

Deliverables
1. Link to GitHub pages of the final product.
https://github.com/hina-dawood/dta-assignment

2. Link to the source on GitHub.
https://github.com/hina-dawood/dta-assignment/tree/master/src

3. How long the exercise took.
7-8 hours

4. Rationale around tech choices.
Some of the tech choices made are: Redux - for maintaining application state; Axios - for Ajax request; Enzyme - javascript testing utility for React; Nock - Http mocking library for test; create-react-app used for quick project configuration

5. Next steps / features missing.
We could have a feature to display changing percentage value during animation.
