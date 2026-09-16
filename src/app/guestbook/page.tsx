import GuestboardClient from "./GuestboardClient";

export default function GuestbookPage() {
  return (
    <div className="container">
      <h1 className="section-title">자유게시판</h1>
      <p className="section-subtitle">
        여러분의 생각과 따뜻한 인사를 남겨주세요.
      </p>
      
      <GuestboardClient />
    </div>
  );
}
