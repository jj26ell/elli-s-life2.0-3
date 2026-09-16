"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate register & login
    localStorage.setItem("elli_user", JSON.stringify({ id, name, isAdmin: false }));
    alert("회원가입이 완료되었습니다!");
    router.push("/");
    router.refresh();
  };

  return (
    <div className="container" style={{ maxWidth: '500px', marginTop: '60px' }}>
      <div className="card" style={{ padding: '40px' }}>
        <h1 className="section-title" style={{ fontSize: '2rem', marginBottom: '1rem' }}>회원가입</h1>
        <p style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--text-light)' }}>
          엘리's life2.0의 가족이 되어주세요.
        </p>

        <form onSubmit={handleRegister}>
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
            <label className="form-label">이름</label>
            <input 
              type="text" 
              className="form-input" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
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
            가입하기
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.9rem' }}>
          이미 회원이신가요? <Link href="/login" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>로그인</Link>
        </div>
      </div>
    </div>
  );
}
