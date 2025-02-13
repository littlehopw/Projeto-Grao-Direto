import { useState } from "react";
import api from "../services/api";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const res = await api.post("/auth/login", { email, password });
            localStorage.setItem("token", res.data.token);
            window.location.href = "/home";
        } catch (error) {
            alert("Erro ao fazer login");
        }
    };

    return (
        <div>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Entrar</button>
        </div>
    );
}

export default Login;
