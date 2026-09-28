#!/usr/bin/env python3
"""Builds one personalised press email per journalist. Voice rules: dito-padel-voice skill."""
import json, re, subprocess, tempfile, os

REPORT = "https://www.padelcourtsfinder.com/report/us-padel-2026-c7x4k9"
PUBLIC = "https://www.padelcourtsfinder.com/state-of-us-padel-2026"

INTRO = ("I run Padel Courts Finder, a directory of padel clubs in the United States. We keep a verified list of "
         "every club we can find, and this month we updated our State of US Padel report with the latest figures. "
         "As of today we count 332 clubs and 1,250 courts across 39 states, with 29 more clubs announced or under "
         "construction. That is a little higher than the 1,000 courts the USPA reported in April, mostly because we "
         "include clubs that are not USPA members.")

FACTS = {
 "national": ["Florida and Texas account for 42 percent of all US clubs, and Miami alone has 100 courts.",
              "The typical court costs $60 an hour, based on the 82 clubs that publish their prices.",
              "Eleven operators now run two or more locations.",
              "There is a table of large US cities that still have no court within 25 miles."],
 "business": ["The typical court costs $60 an hour, based on the 82 clubs that publish their prices, and half of them charge between $40 and $80.",
              "Eleven operators now run two or more locations, which together make up about 9 percent of all clubs.",
              "More than half of US clubs have between three and five courts, and only ten clubs have ten or more.",
              "There is a table of large US cities that still have no court within 25 miles."],
 "realestate": ["Of the open clubs where we know the court type, 38 percent are indoor only and 53 percent are outdoor only.",
              "More than half of US clubs have between three and five courts, and only ten clubs have ten or more.",
              "Eleven operators now run two or more locations.",
              "There is a table of large US cities that still have no court within 25 miles, along with the clubs already announced for each one."],
 "clubs": ["About one in five US padel clubs is members only, and the rest sell court time to the public.",
              "The typical court costs $60 an hour, based on the 82 clubs that publish their prices.",
              "More than half of US clubs have between three and five courts.",
              "Florida and Texas account for 42 percent of all US clubs."],
}

CLOSE = (f"You can read the full report here:\n{REPORT}\n\n"
         "It is a private reader link, so I would ask that you not publish the URL itself.\n\n"
         "You are welcome to use any of the numbers. If you do, I would appreciate a credit to Padel Courts Finder "
         f"with a link to {PUBLIC}.\n\n"
         "If it would help to have the data cut a different way, such as by city or by state, please let me know "
         "and I will send it over.\n\n"
         "Thank you,\nDito Calderón\nPadel Courts Finder\ninfo@padelcourtsfinder.com")

def full(greet, opening, local, facts, subject, to, cc=None):
    parts = [f"Hi {greet},", opening]
    parts.append(INTRO + (" " + local if local else ""))
    parts.append("A few other figures from the report that may be useful:\n\n" + "\n".join("- " + f for f in FACTS[facts]))
    parts.append(CLOSE)
    return {"to": to, "cc": cc or [], "subject": subject, "body": "\n\n".join(parts)}

def short(greet, opening, subject, to, extra=""):
    body = (f"Hi {greet},\n\n{opening}\n\n"
            "I run Padel Courts Finder, a directory of padel clubs in the United States, and this month we updated our "
            "State of US Padel report. As of today we count 332 clubs and 1,250 courts across 39 states, with 29 more clubs "
            "announced or under construction. The report also covers the top cities by court count, court prices from 82 "
            "clubs, the operators with more than one location, and the large cities that still have no court."
            + (" " + extra if extra else "") + "\n\n"
            f"You can read the full report here:\n{REPORT}\n\n"
            "It is a private reader link, so I would ask that you not publish the URL itself. You are welcome to use any of "
            f"the numbers with a credit to Padel Courts Finder and a link to {PUBLIC}.\n\n"
            "If a different cut of the data would be useful to you, please let me know and I will send it over.\n\n"
            "Thank you,\nDito Calderón\nPadel Courts Finder\ninfo@padelcourtsfinder.com")
    return {"to": to, "cc": [], "subject": subject, "body": body}

D = []
D.append(full("Kurt", "I read your piece on Eva Longoria and David Beckham earlier this month, and I thought you might find some current court numbers useful for your next padel story.", "", "national", "Current US padel court numbers", ["kbadenhausen@sportico.com"]))
D.append(full("Eric", "I read your story in March about Rick Schnall leading the Pro Padel League round, and I thought the numbers on where the courts actually are might be useful for your next padel piece.", "", "business", "US padel court numbers for your next story", ["eric@frontofficesports.com"]))
D.append(full("Nicole", "I enjoyed your June story on padel in Austin, and I thought some current local numbers might be useful if you write about it again.", "In the city of Austin we count four open clubs with 23 courts, and three more clubs have been announced. Our Austin count is lower than the Playtomic figure in your story because we only include clubs inside the city that are open today, and I am happy to walk through the differences. Texas as a whole has 57 clubs and 234 courts, which puts it second to Florida.", "national", "Padel court numbers for Austin and Texas", ["nicole.cobler@axios.com"]))
D.append(full("Sommer", "I read your story last year on the Ultra club planned for Midtown, and I thought an updated picture of padel in Miami might be useful to you.", "In the city of Miami we count 18 open clubs with 100 courts, which is more than any other city in the country. Doral and North Miami add another 66 courts between them.", "realestate", "Padel court numbers for Miami", ["sommer.brugal@axios.com"]))
D.append(full("Martin", "I read your story last year on the Padel X proposal for the Lincoln Road garage, and I thought an updated picture of padel in Miami might be useful to you.", "In the city of Miami we count 18 open clubs with 100 courts, which is more than any other city in the country. Doral and North Miami add another 66 courts between them.", "realestate", "Padel court numbers for Miami and Miami Beach", ["martin.vassolo@axios.com"]))
D.append(full("Jessica and Maxwell", "I read your story last fall on Phoenix getting ready for the national padel league, and I thought some current local numbers might be useful if you return to the subject.", "In the Phoenix area we count three open clubs with 13 courts across Phoenix, Scottsdale, Tempe and Mesa, and two more clubs have been announced. Arizona as a whole has nine clubs and 44 courts, and Tucson has four of those clubs.", "national", "Padel court numbers for Phoenix and Arizona", ["jessica.boehm@axios.com"], ["maxwell.millington@axios.com"]))
D.append(full("Kate", "I read your story last October on padel in San Diego, and I thought some current local numbers might be useful if you write about it again.", "In San Diego County we count eight open clubs with 32 courts, and four of those clubs are in the city itself. California as a whole has 31 clubs and 119 courts, which puts it third behind Florida and Texas.", "national", "Padel court numbers for San Diego", ["kate.murphy@axios.com"]))
D.append(full("Nadia", "I read your story last September on padel in San Francisco, and I thought some current local numbers might be useful if you write about it again.", "In the Bay Area we count six open clubs with 25 courts, and three of those clubs are in San Francisco itself. California as a whole has 31 clubs and 119 courts, which puts it third behind Florida and Texas.", "national", "Padel court numbers for San Francisco and the Bay Area", ["nadia.lopez@axios.com"]))
D.append(full("Kathryn", "I read your story in May on Tampa Bay joining the Florida padel boom, and I thought some statewide numbers might be useful if you return to the subject.", "Florida has 83 clubs and 387 courts, more than any other state. For Tampa and St. Petersburg we currently list two open clubs, and I suspect your reporting has turned up newer ones that we still need to add, so I would welcome any corrections.", "national", "Padel court numbers for Tampa Bay and Florida", ["kathryn.varn@axios.com"]))
D.append(full("Anna", "I read your story last summer on padel arriving in the DMV, and I thought some current local numbers might be useful if you write about it again.", "In the Washington area we count four open clubs with 12 courts, in Washington, Bethesda, College Park and Sterling. Maryland and Virginia each have six clubs statewide.", "national", "Padel court numbers for the DC area", ["anna.spiegel@axios.com"]))
D.append(full("Sami", "I read your story in April on home padel courts in the DC area, and I thought some numbers on the public side of the sport might be a useful companion to it.", "In the Washington area we count four open clubs with 12 courts, in Washington, Bethesda, College Park and Sterling. Maryland and Virginia each have six clubs statewide.", "clubs", "Padel club numbers for the DC area", ["sami.sparber@axios.com"]))
D.append(full("Ashley", "I read your story last year on Epic Padel opening in Charlotte with five courts, and I thought some current local numbers might be useful if you return to the subject.", "In the Charlotte area we count four open clubs with at least 12 courts, including one in Matthews. North Carolina as a whole has five clubs.", "national", "Padel court numbers for Charlotte", ["ashley.mahoney@axios.com"]))
D.append(full("Sarah", "I read your story last October on Padel Haus coming to Dallas-Fort Worth, and I thought some current local numbers might be useful if you write about it again.", "In the Dallas-Fort Worth area we count eight open clubs with at least 22 courts, across Dallas, Carrollton, Farmers Branch and Frisco. Texas as a whole has 57 clubs and 234 courts, which puts it second to Florida.", "national", "Padel court numbers for Dallas-Fort Worth", ["sblaskovich@dallasnews.com"]))
D.append(full("Sondra", "I read your story last December on the padel and pickleball complex planned for Montgomery County, and I thought some current local numbers might be useful if you return to the subject.", "In the Houston area we count 14 open clubs with at least 49 courts, including clubs in The Woodlands, Spring and Katy, and three more clubs have been announced. Texas as a whole has 57 clubs and 234 courts, which puts it second to Florida.", "national", "Padel court numbers for the Houston area", ["shernandez@houstonchronicle.com"]))
D.append(full("Sonia", "I read your story last year on the padel and pickleball lounge opening in Midtown, and I thought some current local numbers might be useful if you write about padel again.", "In the Houston area we count 14 open clubs with at least 49 courts, including clubs in The Woodlands, Spring and Katy, and three more clubs have been announced. Texas as a whole has 57 clubs and 234 courts, which puts it second to Florida.", "national", "Padel court numbers for Houston", ["sonia.garza@houstonchronicle.com"]))
D.append(full("Lidia", "I read your lease roundup last year that included Ultra Padel in Midtown Miami, and I thought some numbers on padel clubs as tenants might be useful for your coverage.", "In the city of Miami we count 18 open clubs with 100 courts, which is more than any other city in the country. Doral and North Miami add another 66 courts between them.", "realestate", "Padel club numbers for South Florida", ["Lidia.Dinkova@TheRealDeal.com"]))
D.append(full("Josh", "I read Elizabeth Ostertag's piece in March on the business of padel in the US, and I thought some current numbers on clubs and pricing might be useful for your team.", "", "business", "US padel club and pricing data for Athletech News", ["josh@athletechnews.com"]))
D.append(full("Joanna", "I read your piece in May on the Playtomic report, and I thought some US numbers at the club level might be useful for your readers who are deciding whether to add courts.", "", "clubs", "US padel club data for Club + Resort Business", ["jdechellis@arrowfly.com"]))
D.append(full("Peter", "I have been following the padel news in Racquet Sports Industry, including the US Open announcement in August, and I thought some current club and court numbers might be useful for your readers.", "", "business", "US padel club and court data for RSI", ["peter@acepublishinggroup.com"]))
D.append(full("Mary Helen", "I read your piece on padel making inroads into the US sports market, and I have been following the padel section at Sports Destination Management since then. I thought some current numbers by city might be useful for your readers.", "", "realestate", "US padel court numbers by city and state", ["msprecher@duenorthmedia.com"]))
D.append(short("Austin", "I read The Changeover every month, and I thought our latest numbers might be useful for a future recap.", "Padel court numbers for The Changeover", ["padelnation.io@gmail.com"]))
D.append(short("Ben", "I follow The 22 and the work Padel 22 has done on the US market, and I thought our latest numbers might be useful to you.", "US padel club and court numbers", ["ben@padel22.com"]))
D.append(short("Franck", "I read your story in August on the United States qualifying two teams, and I thought some numbers on the American club scene might be useful for your English edition.", "US padel club and court numbers for Padel Magazine", ["contact@padelmagazine.fr"]))
D.append(short("Racquet team", "I read Jeury San's piece in April, Padel Party in the U.S.A., and I thought some numbers on where Americans are playing might be useful for a future story.", "US padel club and court numbers for Racquet", ["submissions@racquetmag.com"]))
D.append(short("Victoria and Valentina", "I read your report in April on the state of play in racquet sports, and I thought some current numbers from the US padel market might be useful for your coverage.", "US padel club and court numbers", ["admin@edmpublications.com"]))
D.append(short("Minter", "I listen to The Joy of Padel, and I thought some numbers on how the sport is spreading in the United States might be useful background for a future episode.", "US padel numbers for The Joy of Padel", ["NMinterDial@gmail.com"]))
D.append(short("Padel Alto team", "I follow your news coverage, and I thought some current numbers from the US market might be useful to your newsdesk.", "US padel club and court numbers", ["newsdesk@padelalto.com"]))
D.append(short("Padel Paper team", "I read your piece in June on the questions every US court buyer should ask, and I thought some current numbers on American clubs might be useful for your coverage.", "US padel club and court numbers for The Padel Paper", ["info@thepadelpaper.com"]))

check = os.path.expanduser("~/.claude/skills/dito-padel-voice/scripts/voice_check.py")
bad = 0
for d in D:
    with tempfile.NamedTemporaryFile("w", suffix=".md", delete=False) as f:
        f.write(d["body"]); p = f.name
    r = subprocess.run(["python3", check, p], capture_output=True, text=True)
    os.unlink(p)
    if "CLEAN" not in r.stdout:
        bad += 1; print("FLAG:", d["to"], r.stdout.strip()[:400])
    assert "—" not in d["body"] and "–" not in d["body"] and "—" not in d["subject"]
json.dump(D, open("press-research/drafts-2026-09-28.json", "w"), indent=1, ensure_ascii=False)
print(len(D), "drafts built;", bad, "flagged")
