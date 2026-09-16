import { seniorCurriculum } from "@/lib/data";
import CourseCard from "@/components/CourseCard";

export default function SeniorPage() {
  return (
    <div className="container">
      <h1 className="section-title">시니어 인지 (치매예방)</h1>
      <p className="section-subtitle">
        건강한 노후를 위한 통합돌봄서비스 과정으로, 인지 기능 유지와 치매 예방 교육을 실습합니다.
      </p>

      <div className="card-grid">
        {seniorCurriculum.map((item) => (
          <CourseCard key={item.id} item={item} tag="시니어" />
        ))}
      </div>
    </div>
  );
}
