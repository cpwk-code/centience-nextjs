import { NextResponse } from 'next/server';

/**
 * Branded booking links — centience.ai/book/<person>
 *
 * A short link that reads well in an email signature, a proposal footer or a
 * one-pager, and that survives the underlying Microsoft Bookings URL changing.
 *
 * Why a route handler rather than a `redirects()` entry in next.config:
 *
 *  1. **The query string is preserved exactly.** A Bookings "book with me"
 *     URL carries valueless flags (`&anonymous&ismsaljsauthenabled`). The
 *     config redirector normalises those to `&anonymous=&ismsaljsauthenabled=`.
 *     Both forms appear to behave the same, but this is somebody else's URL
 *     and we gain nothing by rewriting it — so we hand it over byte for byte.
 *
 *  2. **It cannot be cached into a corner.** The response is 307 with
 *     `no-store`. A Bookings booking code rotates; a permanent redirect would
 *     be cached hard by browsers, by the edge and by Google, and a code change
 *     would strand people on a dead link with no way to flush it. Every other
 *     redirect on this site is a 301 because the destination is a page we own
 *     and never intend to move. This one stays revocable.
 *
 * To add someone: add an entry below. The key becomes the public path.
 *
 * Two URL shapes come out of Microsoft Bookings and they are not equally
 * durable:
 *
 *   /book/<mailbox>/                  — a published shared booking page.
 *                                       Stable, publicly reachable, no code.
 *   /bookwithme/user/<id>/meetingtype/<id>?bookingcode=<uuid>
 *                                     — a personal "book with me" link. The
 *                                       booking code rotates and the link dies
 *                                       when the meeting type is changed or
 *                                       removed.
 *
 * Prefer the first shape where a mailbox exists for the purpose. If a personal
 * link stops resolving, it needs regenerating in Bookings — no redirect here
 * can repair it.
 */
const BOOKING_LINKS: Record<string, string> = {
  // Personal "book with me" page. Carries a rotating booking code.
  orvillem:
    'https://bookings.cloud.microsoft/bookwithme/user/d262028309eb4a55b36d34827efbd937%40Compuwork.ai/meetingtype/r3HBcBLKrk25a4c7QwJ3rQ2?bookingcode=d3e1335e-dda2-4ce2-9347-4a915524bb08&anonymous&ismsaljsauthenabled',

  // Published shared booking page for the support mailbox — the durable shape.
  support:
    'https://bookings.cloud.microsoft/book/CentienceSupport@centience.ai/?ismsaljsauthenabled=true',
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ person: string }> },
) {
  const { person } = await params;
  const destination = BOOKING_LINKS[person.toLowerCase()];

  // An unknown name goes to the contact page rather than a dead end. A
  // mistyped link in a signature should still reach a person.
  if (!destination) {
    return NextResponse.redirect(new URL('/contact', 'https://centience.ai'), {
      status: 307,
      headers: { 'Cache-Control': 'no-store' },
    });
  }

  return new NextResponse(null, {
    status: 307,
    headers: {
      Location: destination,
      'Cache-Control': 'no-store, max-age=0',
      // Keep the booking code out of the referrer sent to Microsoft.
      'Referrer-Policy': 'no-referrer',
    },
  });
}
