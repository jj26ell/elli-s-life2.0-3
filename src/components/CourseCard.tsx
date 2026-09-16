import Image from "next/image";

interface CourseCardProps {
  item: {
    id: number;
    title: string;
    desc: string;
    img: string;
  };
  tag?: string;
}

export default function CourseCard({ item, tag }: CourseCardProps) {
  return (
    <div className="card">
      <div className="card-image-wrap">
        {/* Using standard img to avoid Next.js Image external domain config hassle for dummy data */}
        <img src={item.img} alt={item.title} className="card-img" />
      </div>
      <div className="card-content">
        {tag && <span className="card-tag">{tag}</span>}
        <h3 className="card-title">{item.id}강. {item.title}</h3>
        <p className="card-desc">{item.desc}</p>
      </div>
    </div>
  );
}
