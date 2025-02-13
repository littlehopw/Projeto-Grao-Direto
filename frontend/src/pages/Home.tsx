import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

interface Restaurant {
    _id: string;
    name: string;
    phone: string;
    address: string;
}

function Home() {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRestaurants = async () => {
            const res = await api.get(`/restaurants?q=${search}`);
            setRestaurants(res.data);
        };
        fetchRestaurants();
    }, [search]);

    return (
        <div>
            <input type="text" placeholder="Buscar restaurantes" onChange={(e) => setSearch(e.target.value)} />
            <ul>
                {restaurants.map((restaurant) => (
                    <li key={restaurant._id} onClick={() => navigate(`/restaurant/${restaurant._id}`)}>
                        {restaurant.name} - {restaurant.address}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
