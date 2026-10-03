/** The note sent to anyone who asks for the State of US Padel report. Plain
 *  wording on purpose (see the dito-padel-voice skill): no selling. */
export const REPORT_URL = "https://www.padelcourtsfinder.com/report/us-padel-2026-c7x4k9";
export const PUBLIC_URL = "https://www.padelcourtsfinder.com/state-of-us-padel-2026";

export const REPORT_EMAIL_SUBJECT = "Your copy of The State of US Padel 2026";

export const REPORT_EMAIL_TEXT = `Hi,

Thank you for asking for The State of US Padel 2026. Here is the full report:
${REPORT_URL}

You are welcome to use any of the figures. If you do, a credit to Padel Courts Finder with a link to ${PUBLIC_URL} is all I ask.

If it would help to have the data cut a different way, by city, by state or by region, reply to this email and I will send it over.

Thank you,
Dito Calderón
Padel Courts Finder
info@padelcourtsfinder.com`;

export const REPORT_EMAIL_HTML = `<div>Hi,<br><br>Thank you for asking for The State of US Padel 2026. Here is the full report:<br><a href="${REPORT_URL}">The State of US Padel 2026, full report</a><br><br>You are welcome to use any of the figures. If you do, a credit to Padel Courts Finder with a link to <a href="${PUBLIC_URL}">the public report page</a> is all I ask.<br><br>If it would help to have the data cut a different way, by city, by state or by region, reply to this email and I will send it over.<br><br>Thank you,<br>Dito Calderón<br>Padel Courts Finder<br>info@padelcourtsfinder.com</div>`;
