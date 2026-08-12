import type { Course as CourseType } from '@/data/resume/courses';

interface CourseProps {
  data: CourseType;
}

export default function Course({ data }: CourseProps) {
  return (
    <li className="course-container">
      <a href={data.link}>
        {/* Not every institution publishes a per-course code. Without this
            guard those rows rendered a literal "undefined:" prefix. */}
        {data.number && <span className="course-number">{data.number}:</span>}
        <span className="course-name">{data.title}</span>
      </a>
    </li>
  );
}
