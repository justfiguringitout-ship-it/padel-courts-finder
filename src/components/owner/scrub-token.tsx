/**
 * Removes ?token=... from the address bar as soon as the HTML is parsed, so
 * the sign-in or review token never reaches analytics (GA and Plausible load
 * after hydration and read location then) or browser history.
 * The token itself is already in the server-rendered form.
 */
const SCRIPT =
  "try{var u=new URL(location.href);if(u.searchParams.has('token')){u.searchParams.delete('token');history.replaceState(history.state,'',u.pathname+u.search+u.hash)}}catch(e){}";

export function ScrubToken() {
  return <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />;
}
