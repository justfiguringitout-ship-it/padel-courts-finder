#!/usr/bin/env python3
"""Put the press emails into Gmail Drafts via IMAP, with clean links.

Why IMAP: drafts created through the Gmail API get Google's click-tracking
wrapper (google.com/url?q=...&ust=...) baked into the saved message, and the
wrapper expires after 24 hours, so recipients land on a "Redirect Notice"
page. A message appended over IMAP is stored exactly as written.

Credentials come from ~/.claude/padel-mail.env (chmod 600):
  GMAIL_ADDRESS=info@padelcourtsfinder.com
  GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx   (Google App Password for that account)

Usage:
  python3 append_drafts_imap.py --dry-run     # writes .eml files, no login
  python3 append_drafts_imap.py               # appends all drafts
  python3 append_drafts_imap.py --only 0,2    # append just these indexes
"""
import argparse, email.utils, imaplib, json, os, sys, time
from email.message import EmailMessage
from pathlib import Path

HERE = Path(__file__).resolve().parent
DRAFTS = HERE / "drafts-final.json"
ENV = Path.home() / ".claude" / "padel-mail.env"
PUBLIC = "https://www.padelcourtsfinder.com/state-of-us-padel-2026"
LINK_TEXT = "The State of US Padel 2026"


def load_env():
    if not ENV.exists():
        sys.exit(f"missing {ENV} (see docstring)")
    cfg = {}
    for line in ENV.read_text().splitlines():
        if "=" in line and not line.strip().startswith("#"):
            k, v = line.split("=", 1)
            cfg[k.strip()] = v.strip().strip('"').strip("'")
    for k in ("GMAIL_ADDRESS", "GMAIL_APP_PASSWORD"):
        if not cfg.get(k):
            sys.exit(f"{ENV} is missing {k}")
    return cfg


def html_body(text: str) -> str:
    esc = (text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"))
    esc = esc.replace(PUBLIC, f'<a href="{PUBLIC}">{LINK_TEXT}</a>')
    return "<div>" + esc.replace("\n", "<br>") + "</div>"


def build(d: dict, sender: str) -> EmailMessage:
    msg = EmailMessage()
    msg["From"] = email.utils.formataddr(("Dito Calderón", sender))
    msg["To"] = ", ".join(d["to"])
    if d.get("cc"):
        msg["Cc"] = ", ".join(d["cc"])
    msg["Subject"] = d["subject"]
    msg["Date"] = email.utils.formatdate(localtime=True)
    msg["Message-ID"] = email.utils.make_msgid(domain=sender.split("@")[1])
    msg.set_content(d["body"])
    msg.add_alternative(html_body(d["body"]), subtype="html")
    return msg


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--only", help="comma-separated draft indexes")
    ap.add_argument("--login", help="Gmail account to log in to (default: GMAIL_ADDRESS)")
    ap.add_argument("--sender", default="info@padelcourtsfinder.com", help="From address (must be a send-as alias on the login account)")
    a = ap.parse_args()

    drafts = json.load(open(DRAFTS))
    idx = [int(x) for x in a.only.split(",")] if a.only else list(range(len(drafts)))

    if a.dry_run:
        out = HERE / "eml-preview"; out.mkdir(exist_ok=True)
        for i in idx:
            m = build(drafts[i], "info@padelcourtsfinder.com")
            (out / f"{i:02d}-{drafts[i]['to'][0]}.eml").write_bytes(bytes(m))
        print(f"wrote {len(idx)} .eml files to {out}")
        return

    cfg = load_env()
    box = imaplib.IMAP4_SSL("imap.gmail.com")
    login = a.login or cfg["GMAIL_ADDRESS"]
    box.login(login, cfg["GMAIL_APP_PASSWORD"])
    ok = 0
    for i in idx:
        m = build(drafts[i], a.sender)
        typ, _ = box.append("[Gmail]/Drafts", "(\\Draft)", imaplib.Time2Internaldate(time.time()), bytes(m))
        print(("ok  " if typ == "OK" else "FAIL"), i, drafts[i]["to"][0], "|", drafts[i]["subject"])
        ok += typ == "OK"
    box.logout()
    print(f"{ok}/{len(idx)} drafts appended to {login} Drafts, From {a.sender}")


if __name__ == "__main__":
    main()
