"use client";

import { useState, useEffect } from "react";
import styles from "./Guestbook.module.css";

interface Post {
  id: string;
  authorId: string;
  authorName: string;
  title: string;
  content: string;
  date: string;
}

export default function GuestboardClient() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [user, setUser] = useState<{ id: string; name: string; isAdmin: boolean } | null>(null);
  
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("elli_user");
    if (loggedInUser) {
      try { setUser(JSON.parse(loggedInUser)); } catch (e) {}
    }
    const savedPosts = localStorage.getItem("elli_posts");
    if (savedPosts) {
      try { setPosts(JSON.parse(savedPosts)); } catch (e) {}
    } else {
      // Dummy data
      const initialPosts = [
        { id: "1", authorId: "test1", authorName: "홍길동", title: "홈페이지 오픈을 축하합니다!", content: "아름다운 공간이네요.", date: new Date().toLocaleDateString() }
      ];
      setPosts(initialPosts);
      localStorage.setItem("elli_posts", JSON.stringify(initialPosts));
    }
  }, []);

  const savePosts = (newPosts: Post[]) => {
    setPosts(newPosts);
    localStorage.setItem("elli_posts", JSON.stringify(newPosts));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return alert("로그인이 필요합니다.");

    if (isEditing) {
      const updated = posts.map(p => p.id === editId ? { ...p, title, content } : p);
      savePosts(updated);
      setIsEditing(false);
      setEditId("");
    } else {
      const newPost: Post = {
        id: Date.now().toString(),
        authorId: user.id,
        authorName: user.name,
        title,
        content,
        date: new Date().toLocaleDateString()
      };
      savePosts([newPost, ...posts]);
    }
    setTitle("");
    setContent("");
  };

  const handleEdit = (post: Post) => {
    setIsEditing(true);
    setEditId(post.id);
    setTitle(post.title);
    setContent(post.content);
  };

  const handleDelete = (id: string) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      savePosts(posts.filter(p => p.id !== id));
    }
  };

  const handleDeleteAll = () => {
    if (confirm("모든 게시글을 삭제하시겠습니까? (관리자 전용)")) {
      savePosts([]);
    }
  };

  return (
    <div className={styles.boardContainer}>
      {user?.isAdmin && (
        <div className={styles.adminPanel}>
          <p>관리자 모드입니다.</p>
          <button onClick={handleDeleteAll} className="btn btn-outline" style={{ borderColor: 'red', color: 'red' }}>전체 글 일괄 삭제</button>
        </div>
      )}

      {user ? (
        <form onSubmit={handleSubmit} className={styles.writeForm}>
          <h3 className={styles.formTitle}>{isEditing ? "글 수정하기" : "새 글 쓰기"}</h3>
          <div className="form-group">
            <input 
              type="text" 
              placeholder="제목을 입력하세요" 
              value={title} 
              onChange={e => setTitle(e.target.value)} 
              required 
              className="form-input" 
            />
          </div>
          <div className="form-group">
            <textarea 
              placeholder="내용을 입력하세요" 
              value={content} 
              onChange={e => setContent(e.target.value)} 
              required 
              className={`form-input ${styles.textarea}`} 
              rows={4} 
            />
          </div>
          <button type="submit" className="btn btn-primary">{isEditing ? "수정 완료" : "작성하기"}</button>
          {isEditing && <button type="button" onClick={() => {setIsEditing(false); setTitle(''); setContent('');}} className="btn btn-outline" style={{marginLeft: '10px'}}>취소</button>}
        </form>
      ) : (
        <div className={styles.loginPrompt}>
          게시글을 작성하려면 로그인이 필요합니다.
        </div>
      )}

      <div className={styles.postList}>
        {posts.map(post => (
          <div key={post.id} className={styles.postItem}>
            <div className={styles.postHeader}>
              <span className={styles.postTitle}>{post.title}</span>
              <span className={styles.postMeta}>{post.authorName} | {post.date}</span>
            </div>
            <div className={styles.postContent}>{post.content}</div>
            
            <div className={styles.postActions}>
              {(user?.id === post.authorId || user?.isAdmin) && (
                <>
                  {user?.id === post.authorId && <button onClick={() => handleEdit(post)} className={styles.actionBtn}>수정</button>}
                  <button onClick={() => handleDelete(post.id)} className={`${styles.actionBtn} ${styles.deleteBtn}`}>삭제</button>
                </>
              )}
            </div>
          </div>
        ))}
        {posts.length === 0 && <p className={styles.emptyText}>등록된 글이 없습니다.</p>}
      </div>
    </div>
  );
}
