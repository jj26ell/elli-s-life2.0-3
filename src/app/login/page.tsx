"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    if (id === "admin" && password === "admin") {
      localStorage.setItem("elli_user", JSON.stringify({ id: "admin", name: "최고관리자", isAdmin: true }));
      router.push("/");
      router.refresh();
    } else {
      // Allow any login for simulation
      localStorage.setItem("elli_user", JSON.stringify({ id, name: id, isAdmin: false }));
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="container" style={{ maxWidth: '400px', marginTop: '60px' }}>
      <div className="card" style={{ padding: '40px' }}>
        <h1 className="section-title" style={{ fontSize: '2rem', marginBottom: '1rem' }}>로그인</h1>
        <p style={{ textAlign: 'center', marginBottom: '20px', color: 'var(--text-light)' }}>
          테스트를 위해 아무 아이디나 입력하세요.<br/>(관리자 테스트: admin / admin)
        </p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">아이디</label>
            <input 
              type="text" 
              className="form-input" 
              value={id} 
              onChange={(e) => setId(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label className="form-label">비밀번호</label>
            <input 
              type="password" 
              className="form-input" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
            로그인
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.9rem' }}>
          아직 회원이 아니신가요? <Link href="/register" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>회원가입</Link>
        </div>
      </div>
    </div>
  );
}
