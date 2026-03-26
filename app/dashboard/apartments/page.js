  "use client"
import { db } from "@/config/firebase.config";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Apartment( ) {
    const {data: session} = useSession();
    const [houses, setHouses] = useState([]);

    useEffect(()=>{
        const fetchHouses = async()=>{
            try{
            const housesRef = query(collection(db,"houses"),where("user", "==", session?.user?.id));
            const snapShot = await getDocs(housesRef);
            const compiledHouse = [];
            snapShot.forEach((doc)=>{
                compiledHouse.push({
                id: doc.id,
                data: doc.data(),
                });
            });
            setHouses(compiledHouse);
            console.log(compiledHouse);
            }
            catch(error){
                console.error("Error fetching houses:", error);
            }
        };
        if (session){
            fetchHouses();
        }
    }, [session]);
    return (
        <main className="min-h-screen my-5 p-4">
            <h1 className="text-4xl font-bold text-center text-blue-500">Our Apartments</h1>
            <div className="px-5 py-10 grid grid-col-1 md-grid-cols-2 lg:grid-cols-3 gap-5">
                {houses.map(house =>
                <div key={house.id} className="w-80 h-85 rounded shadow-md relative">
                     <Image
                     src="/home.jpg"
                     alt="house"
                     width={200}
                     height={200}
                     className="w-80 h-45 rounded-t"
                     />
                     <div className="px-3 py-3">
                        <p className="text-2xl font-semibold text-gray-800">{house.data.title}</p>
                        <p className="mt-1text-sm text-green-500">{house.data.price}</p>
                        <p className="mt-1 text-sm ">{house.data.location}</p>
                        <p className="mt-1 text-sm text-gray-600">{house.data.description}</p>
                     </div>
                     <div className="absolute top-2 right-2 w-25 h-8 justify-center items-center bg-red-200">
                        <p className="text-white">-10% Off</p>
                     </div>
                </div>
                )}
            </div>

        </main>
    )
}