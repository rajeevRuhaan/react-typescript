import { IUser } from "../models/IUser";

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