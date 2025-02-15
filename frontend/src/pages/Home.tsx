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
        <div className="home-container">
            <input
                type="text"
                placeholder="Buscar restaurantes"
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
            />
            <ul className="restaurant-list">
                {restaurants.map((restaurant) => (
                    <li
                        key={restaurant._id}
                        onClick={() => navigate(`/restaurant/${restaurant._id}`)}
                        className="restaurant-item"
                    >
                        <h3>{restaurant.name}</h3>
                        <p className="address">{restaurant.address}</p>
                        <p>{restaurant.phone}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;