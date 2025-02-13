import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

interface MenuItem {
    name: string;
    description: string;
    price: number;
}

interface Restaurant {
    name: string;
    phone: string;
    address: string;
    menu: MenuItem[];
}

function RestaurantDetails() {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

    useEffect(() => {
        const fetchRestaurant = async () => {
            const res = await api.get(`/restaurants/${id}`);
            setRestaurant(res.data);
        };
        fetchRestaurant();
    }, [id]);

    if (!restaurant) return <p>Carregando...</p>;

    return (
        <div>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.phone}</p>
            <p>{restaurant.address}</p>
            <h2>Cardápio</h2>
            <ul>
                {restaurant.menu.map((item, index) => (
                    <li key={index}>
                        <strong>{item.name}</strong> - {item.description} - R${item.price.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RestaurantDetails;
