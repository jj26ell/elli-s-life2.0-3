"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const menuData = [
  {
    title: "소개 (About)",
    path: "/about",
    sub: [{ name: "소개 및 프로필", path: "/about" }],
  },
  {
    title: "창조 이야기 (Flora & Green)",
    path: "/flora",
    sub: [
      { name: "제주숲길생태탐구", path: "/flora/forest" },
      { name: "조경이야기", path: "/flora/landscape" },
      { name: "성지순례", path: "/flora/pilgrimage" },
      { name: "여행이야기", path: "/flora/travel" },
    ],
  },
  {
    title: "포토 갤러리 (Photo Archive)",
    path: "/photo",
    sub: [
      { name: "자연/풍경", path: "/photo/nature" },
      { name: "일상", path: "/photo/daily" },
      { name: "여행", path: "/photo/travel" },
    ],
  },
  {
    title: "성장 노트 (life builder)",
    path: "/life-builder",
    sub: [
      { name: "친구책(BOOKIS♡)", path: "/life-builder/bookis" },
      { name: "드론", path: "/life-builder/drone" },
      { name: "시니어 인지", path: "/life-builder/senior" },
    ],
  },
  {
    title: "일상 일지 (Life & Hobby)",
    path: "/life-hobby",
    sub: [
      { name: "소소한 생각", path: "/life-hobby/thoughts" },
      { name: "일상 메모", path: "/life-hobby/memo" },
      { name: "운동/식단", path: "/life-hobby/health" },
    ],
  },
  {
    title: "아침 편지 (Mindfulness)",
    path: "/mindfulness",
    sub: [
      { name: "기도/성경말씀", path: "/mindfulness/pray" },
      { name: "명상/명언", path: "/mindfulness/meditation" },
    ],
  },
  {
    title: "연락하기 (Guestbook)",
    path: "/guestbook",
    sub: [
      { name: "자유게시판", path: "/guestbook" },
      { name: "Order", path: "/guestbook/order" },
      { name: "Q&A", path: "/guestbook/qna" },
    ],
  },
];

function parseTitle(title: string) {
  const match = title.match(/^(.*?)\s*(\(.*?\))$/);
  if (match) {
    return { ko: match[1], en: match[2] };
  }
  return { ko: title, en: '' };
}

export default function Header() {
  const [user, setUser] = useState<{ id: string; name: string; isAdmin: boolean } | null>(null);

  useEffect(() => {
    // Check local storage for logged in user
    const loggedInUser = localStorage.getItem("elli_user");
    if (loggedInUser) {
      try {
        setUser(JSON.parse(loggedInUser));
      } catch(e) {}
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("elli_user");
    setUser(null);
    window.location.href = "/";
  };

  return (
    <header className={styles.header}>
      {/* Top Bar for Auth */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          {user ? (
            <>
              <span className={styles.topLink}>환영합니다, {user.name}님 {user.isAdmin && "(관리자)"}</span>
              <button onClick={handleLogout} className={styles.topLink}>로그아웃</button>
            </>
          ) : (
            <>
              <Link href="/login" className={styles.topLink}>로그인</Link>
              <Link href="/register" className={styles.topLink}>회원가입</Link>
            </>
          )}
        </div>
      </div>

      {/* Main Header */}
      <div className={`container ${styles.mainHeader}`}>
        <Link href="/" className={styles.logoArea}>
          <div className={styles.logoIcon}>E</div>
          <div className={styles.logoText}>엘리's life2.0</div>
        </Link>

        <nav className={styles.nav}>
          {menuData.map((menu, idx) => (
            <div key={idx} className={styles.navItem}>
              <Link href={menu.path} className={styles.navLink}>
                <span className={styles.navLinkKo}>{parseTitle(menu.title).ko}</span>
                {parseTitle(menu.title).en && (
                  <span className={styles.navLinkEn}>{parseTitle(menu.title).en}</span>
                )}
              </Link>
              <div className={styles.dropdown}>
                {menu.sub.map((subItem, sIdx) => (
                  <Link key={sIdx} href={subItem.path} className={styles.dropdownItem}>
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
