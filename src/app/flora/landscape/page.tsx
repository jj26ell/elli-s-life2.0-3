import { landscapeCurriculum } from "@/lib/data";
import CourseCard from "@/components/CourseCard";

export default function LandscapePage() {
  return (
    <div className="container">
      <h1 className="section-title">조경이야기 (조경기능사)</h1>
      <p className="section-subtitle">
        자연을 다루는 지혜를 배우고 나만의 정원을 아름답게 꾸미는 조경의 기초를 다집니다.
      </p>

      <div className="card-grid">
        {landscapeCurriculum.map((item) => (
          <CourseCard key={item.id} item={item} tag="조경" />
        ))}
      </div>
    </div>
  );
}
