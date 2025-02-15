import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();
    const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                console.log(`Fetching restaurant with ID: ${id}`);
                const res = await api.get(`/restaurants/${id}`);
                console.log('API response:', res.data);
                setRestaurant(res.data);
            } catch (err) {
                console.error('Error fetching restaurant:', err);
                setError("Erro ao carregar os dados do restaurante.");
            } finally {
                setLoading(false);
            }
        };
        fetchRestaurant();
    }, [id]);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;

    if (!restaurant) return <p>Restaurante não encontrado.</p>;

    return (
        <div className="restaurant-details-container">
            <button onClick={() => navigate(-1)} className="back-button">Voltar</button>
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