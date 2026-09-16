import { forestCurriculum } from "@/lib/data";
import CourseCard from "@/components/CourseCard";

export default function ForestPage() {
  return (
    <div className="container">
      <h1 className="section-title">제주숲길생태탐구</h1>
      <p className="section-subtitle">
        제주의 곶자왈과 오름, 그리고 아름다운 숲길을 거닐며 자연의 경이로움을 배우는 시간입니다.
      </p>

      <div className="card-grid">
        {forestCurriculum.map((item) => (
          <CourseCard key={item.id} item={item} tag="생태탐구" />
        ))}
      </div>
    </div>
  );
}
