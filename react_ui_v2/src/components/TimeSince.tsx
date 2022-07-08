import { formatDuration, intervalToDuration, parseISO } from "date-fns";
import fi from "date-fns/locale/fi";

export default function TimeSince({ iso8601 }: { iso8601: string }) {
  const dur = intervalToDuration({ start: parseISO(iso8601), end: new Date() });
  return (
    <span title={iso8601}>
      {formatDuration(dur, {
        format: ["days", "hours", "minutes"],
        locale: fi,
      })}{" "}
      sitten
    </span>
  );
}
