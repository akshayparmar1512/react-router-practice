
interface StudentData {
    id: number;
    name: string;
    email: string;
    course: string;
    gender: string;
}
const students: StudentData[] = [
    {
        id: 101,
        name: "Akshay Parmar",
        email: "akshay@example.com",
        course: "React",
        gender: "Male",
    },
    {
        id: 102,
        name: "Rahul Sharma",
        email: "rahul@example.com",
        course: "Node.js",
        gender: "Male",
    },
    {
        id: 103,
        name: "Priya Patel",
        email: "priya@example.com",
        course: "TypeScript",
        gender: "Female",
    },
    {
        id: 104,
        name: "Amit Shah",
        email: "amit@example.com",
        course: "JavaScript",
        gender: "Male",
    },
];

export default students