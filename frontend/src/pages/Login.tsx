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
    <div className="login-container">
      <h1 className="login-title">Bem-vindo!</h1>
      <p className="login-subtitle">Faça login para continuar</p>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
      <p>
        Esqueceu a senha? <a href="#">Recupere aqui</a>
      </p>
    </div>
  );
}

export default Login;
