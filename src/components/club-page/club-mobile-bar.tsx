import { TrackedLink } from "@/components/TrackedLink";
import type { HeroAction } from "@/components/club-page/club-hero";

/**
 * Phone-only action bar. It is `position: sticky; bottom: 0` and sits last
 * inside the club page wrapper, so it rides along the bottom of the screen
 * while you scroll and comes to rest above the site footer instead of
 * covering it. Hidden from 768px up. Pads for the home indicator.
 */
export function ClubMobileBar({ name, actions }: { name: string; actions: HeroAction[] }) {
  if (actions.length === 0) return null;
  return (
    <div className="club-mobilebar" role="region" aria-label={`Quick actions for ${name}`}>
      <p className="club-mobilebar-name">{name}</p>
      <div className="club-mobilebar-actions">
        {actions.map((a, i) => (
          <TrackedLink
            key={a.key}
            href={a.href}
            type={a.kind}
            clubName={name}
            className={`club-mobilebar-btn ${i === actions.length - 1 ? "is-primary" : ""}`}
            {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {a.icon}
            <span>{a.label}</span>
          </TrackedLink>
        ))}
      </div>
    </div>
  );
}
