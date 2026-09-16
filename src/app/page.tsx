import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div style={{ position: 'relative', height: '60vh', width: '100%', overflow: 'hidden' }}>
        <img 
          src="https://picsum.photos/seed/hero/2000/1200" 
          alt="Deep forest"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center', color: 'white',
          textAlign: 'center', padding: '20px'
        }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', marginBottom: '20px' }}>
            정년퇴직 후, 하느님과 나만을 위한 제2의 인생
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '30px', lineHeight: '1.8' }}>
            그 삶을 이웃과 나누고 또 그들의 삶을 통해 배우고 성장하며 아름다운 삶을 살고자 합니다.
          </p>
          <Link href="/about" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '12px 30px' }}>
            엘리's life2.0 소개
          </Link>
        </div>
      </div>

      <div className="container" style={{ marginTop: '80px', marginBottom: '80px' }}>
        <h2 className="section-title">최근 이야기</h2>
        <div className="card-grid">
          <div className="card">
            <div className="card-image-wrap">
              <img src="https://picsum.photos/seed/forest1/800/600" className="card-img" />
            </div>
            <div className="card-content">
              <span className="card-tag">창조 이야기</span>
              <h3 className="card-title">제주 숲길 생태 탐구</h3>
              <p className="card-desc">제주의 곶자왈과 오름, 그리고 아름다운 숲길을 거닐며 자연의 경이로움을 배우는 시간입니다.</p>
              <Link href="/flora/forest" style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginTop: '10px', display: 'inline-block' }}>보러가기 &rarr;</Link>
            </div>
          </div>
          
          <div className="card">
            <div className="card-image-wrap">
              <img src="https://picsum.photos/seed/drone1/800/600" className="card-img" />
            </div>
            <div className="card-content">
              <span className="card-tag">성장 노트</span>
              <h3 className="card-title">드론 영상촬영 및 편집</h3>
              <p className="card-desc">하늘의 시선으로 세상을 바라보며, 아름다운 순간을 영상으로 기록하고 편집하는 기술을 배웁니다.</p>
              <Link href="/life-builder/drone" style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginTop: '10px', display: 'inline-block' }}>보러가기 &rarr;</Link>
            </div>
          </div>

          <div className="card">
            <div className="card-image-wrap">
              <img src="https://picsum.photos/seed/senior1/800/600" className="card-img" />
            </div>
            <div className="card-content">
              <span className="card-tag">성장 노트</span>
              <h3 className="card-title">시니어 인지 (치매예방)</h3>
              <p className="card-desc">건강한 노후를 위한 통합돌봄서비스 과정으로, 인지 기능 유지와 치매 예방 교육을 실습합니다.</p>
              <Link href="/life-builder/senior" style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginTop: '10px', display: 'inline-block' }}>보러가기 &rarr;</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
