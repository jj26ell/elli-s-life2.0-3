import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <div>
      <HeroSlider />

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
