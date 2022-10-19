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

## Declearing props in type script pass props in functional component
```script
interface IProps {
    name: string;
    age: number;
    title: string;
}

const Customer:React.FC<IProps> = ({name, age, title}) => {return ()}
```
## Declearing 