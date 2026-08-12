import type { Degree as DegreeType } from '@/data/resume/degrees';

interface DegreeProps {
  data: DegreeType;
}

export default function Degree({ data }: DegreeProps) {
  return (
    <article className="degree-container">
      <header>
        <h3 className="degree">{data.degree}</h3>
        <p className="school">
          <a href={data.link}>{data.school}</a>,{' '}
          {/* The year stays inside <time> on its own so `dateTime` remains a
              valid HTML date string; "expected" is annotation, not a date. */}
          <time dateTime={String(data.year)}>{data.year}</time>
          {data.expected ? ' (expected)' : ''}
        </p>
      </header>
    </article>
  );
}
