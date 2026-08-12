import dayjs from 'dayjs';
import Image from 'next/image';

import type { Project } from '@/data/projects';
import { createHeadingId } from '@/lib/anchors';
import { PROJECT_IMAGE } from '@/lib/utils';

interface CellProps {
  data: Project;
}

/**
 * Initials for a project with no screenshot. Two letters at most, so a long
 * title does not turn the cover into a word.
 */
function monogram(title: string): string {
  return title
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

export default function Cell({ data }: CellProps) {
  const { title, subtitle, link, image, date, desc, tech, featured } = data;

  const hasLink = Boolean(link);

  const cardContent = (
    <>
      <div className="project-card-image">
        {image ? (
          <Image
            src={image}
            alt=""
            width={PROJECT_IMAGE.width}
            height={PROJECT_IMAGE.height}
            sizes="(max-width: 600px) 100vw, 50vw"
          />
        ) : (
          // Client systems and coursework have no public screenshot. A drawn
          // cover holds the grid's rhythm without inventing a picture of work
          // that never looked like this.
          <span className="project-card-cover" aria-hidden="true">
            {monogram(title)}
          </span>
        )}
      </div>

      <div className="project-card-content">
        <header className="project-card-header">
          <h3 className="project-card-title">{title}</h3>
          {hasLink && (
            <span className="project-card-affordance" aria-hidden="true">
              ↗
            </span>
          )}
          {subtitle && <p className="project-card-subtitle">{subtitle}</p>}
        </header>

        <p className="project-card-desc">{desc}</p>

        {tech && tech.length > 0 && (
          <div className="project-card-tech">
            {tech.map((t) => (
              <span key={t} className="tech-tag">
                {t}
              </span>
            ))}
          </div>
        )}

        <time className="project-card-date" dateTime={date}>
          {dayjs(date).format('YYYY')}
        </time>
      </div>
    </>
  );

  return (
    <article
      // A stable anchor so the homepage can point at one project instead of
      // dropping the reader at the top of the index. Derived from the title
      // through the shared slug helper, so it matches what a link builds.
      id={createHeadingId(title)}
      className={`project-card ${featured ? 'project-card--featured' : ''} ${hasLink ? 'project-card--linked' : 'project-card--static'}`}
    >
      {hasLink ? (
        <a href={link} className="project-card-link" aria-label={title}>
          {cardContent}
        </a>
      ) : (
        <div className="project-card-static">{cardContent}</div>
      )}
    </article>
  );
}
