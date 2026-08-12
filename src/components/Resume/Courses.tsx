import type { Course as CourseType } from '@/data/resume/courses';

import Course from './Courses/Course';

interface CoursesProps {
  data: CourseType[];
}

function getRows(courses: CourseType[]) {
  // Copy first: `sort` mutates in place, and this receives the imported
  // module array, so rendering was reordering shared data as a side effect.
  // Sorting on `number` is no longer possible now that it is optional —
  // graduate papers with no published catalog code would have thrown here.
  // `courses.ts` already lists institutions most recent first, so display
  // order is data order.
  return [...courses].map((course) => (
    <Course data={course} key={course.title} />
  ));
}

export default function Courses({ data }: CoursesProps) {
  return (
    <div className="courses">
      <div className="title">
        <h2>Selected Courses</h2>
      </div>
      <ul className="course-list">{getRows(data)}</ul>
    </div>
  );
}
