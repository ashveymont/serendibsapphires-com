import { MaybeLink } from "@/components/Todo";
import { whatsappHref } from "@/lib/site-config";

/** "WhatsApp Us" button. Shows a placeholder instead of a dead link until the number is configured. */
export default function WhatsAppButton({
  message,
  className = "btn-gold",
  label = "WhatsApp Us",
}: {
  message?: string;
  className?: string;
  label?: string;
}) {
  return (
    <MaybeLink href={whatsappHref(message)} placeholder="[number]" className={className}>
      {label}
    </MaybeLink>
  );
}
