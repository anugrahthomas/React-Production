import { useEffect, useState } from "react"

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

const Fetch = () => {
    const [data, setData] = useState<User[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        setTimeout(() => {
            fetchData();
        }, 2000);
    }, []);
  return (
    <div>
        <h2>Fetch Data</h2>
        {data.length > 0 ? data.map((user) => (
            <div className="m-2 w-fit p-2 border-2 rounded-bl-2xl rounded-tr-2xl" key={user.id}>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
            </div>
        )) : <div className="flex gap-0.5">
                <div className="h-10 w-10 border rounded-full bg-red-500 animate-bounce"></div>
                <div className="h-10 w-10 border rounded-full bg-red-500"></div>
                <div className="h-10 w-10 border rounded-full bg-red-500 animate-bounce"></div>
            </div>} 
    </div>
  )
}

export default Fetch