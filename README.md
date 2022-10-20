# Getting Started with Create React App 
## Learning react and typescript

```script
npx create-react-app [project name] --template=typescript
npm i bootstrap 
npm i @fortawesome/fontawesome-free
```
apart from installing fontawesome you need to add cdnjs link for fontawesome
https://cdnjs.com/libraries (link to find libraries)

- paste link to index.html page 
```script
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
```
configure fontawesome and bootstrap in index.tsx
```script
/** Font Awesome */
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"
/**Bootstrap */
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
```

To use google font go to https://fonts.google.com
select desire font and copy the import link and paste to index.css
```script
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400&display=swap');
```

## List rendering define types and data
### Types provided in seprate component models
```script
export interface IUser {
    sno: string;
    name: string;
    age: number;
    designation: string;
    company: string,

}
```
### Data provides in seprate component
```script
export class UserService {
    private static users :IUser[] = [
        {
            sno: "AA01",
            name: "Rajeev",
            age: 35,
            designation: "Software Engineer",
            company: "Infosys",
            },
        {
            sno: "AA02",
            name: "John",
            age: 25,
            designation: "Sr. Software Engineer",
            company: "Infosys",
            },   
        {
            sno: "AA03",
            name: "Shyam",
            age: 35,
            designation: "Tech Lead",
            company: "Infosys",        
            },
        {
            sno: "AA04",
            name: "Nora",
            age: 35,
            designation: "Project Manager",
            company: "Infosys",        
            },
    ]

    public static getAllUsers() {
       return  this.users;
    }
}
```