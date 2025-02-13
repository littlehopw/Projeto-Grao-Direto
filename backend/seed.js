require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Restaurant = require("./models/Restaurant");

const seedData = async () => {
    await connectDB();

    await Restaurant.deleteMany();

    await Restaurant.create([
        {
            name: "Restaurante Saboroso",
            phone: "1234-5678",
            address: "Rua das Flores, 123",
            menu: [
                { name: "Prato Feito", description: "Arroz, feijão, carne e salada", price: 25.00 },
                { name: "Macarronada", description: "Macarrão ao molho sugo", price: 30.00 }
            ]
        },
        {
            name: "Delícias da Terra",
            phone: "9876-5432",
            address: "Av. Brasil, 456",
            menu: [
                { name: "Feijoada", description: "Feijão preto, carne seca, linguiça", price: 35.00 },
                { name: "Frango Grelhado", description: "Frango com legumes", price: 28.00 }
            ]
        }
    ]);

    console.log("Banco populado!");
    process.exit();
};

seedData();
