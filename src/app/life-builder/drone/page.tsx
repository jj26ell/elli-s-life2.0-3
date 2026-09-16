import { droneCurriculum } from "@/lib/data";
import CourseCard from "@/components/CourseCard";

export default function DronePage() {
  return (
    <div className="container">
      <h1 className="section-title">드론 영상촬영 및 편집</h1>
      <p className="section-subtitle">
        하늘의 시선으로 세상을 바라보며, 아름다운 순간을 영상으로 기록하고 편집하는 기술을 배웁니다.
      </p>

      <div className="card-grid">
        {droneCurriculum.map((item) => (
          <CourseCard key={item.id} item={item} tag="드론" />
        ))}
      </div>
    </div>
  );
}
