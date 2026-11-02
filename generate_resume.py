import os
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT

def generate_resume(output_path: str):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=14 * mm,
        rightMargin=14 * mm,
        topMargin=12 * mm,
        bottomMargin=12 * mm,
        title="Mehedi Hasan - Software Engineering & Research Resume",
        author="Mehedi Hasan (MEhe132)",
        subject="CV / Resume of Mehedi Hasan - Python, Automation & Full-Stack Tooling Developer"
    )

    styles = getSampleStyleSheet()

    # Palette
    DARK_SLATE = colors.HexColor("#0D1117")
    ACCENT_CYAN = colors.HexColor("#007799")
    TEXT_PRIMARY = colors.HexColor("#1F2937")
    TEXT_MUTED = colors.HexColor("#4B5563")
    BORDER_GRAY = colors.HexColor("#D1D5DB")
    BG_SUBTLE = colors.HexColor("#F8FAFC")

    name_style = ParagraphStyle(
        "NameHeader",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=21,
        leading=25,
        textColor=DARK_SLATE,
        alignment=TA_CENTER,
        spaceAfter=2,
    )

    role_style = ParagraphStyle(
        "RoleHeader",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=10.5,
        leading=14,
        textColor=ACCENT_CYAN,
        alignment=TA_CENTER,
        spaceAfter=4,
    )

    contact_style = ParagraphStyle(
        "ContactBar",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.8,
        leading=12,
        textColor=TEXT_MUTED,
        alignment=TA_CENTER,
        spaceAfter=6,
    )

    section_style = ParagraphStyle(
        "SectionHeading",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=10.5,
        leading=13,
        textColor=DARK_SLATE,
        spaceBefore=7,
        spaceAfter=3,
    )

    body_style = ParagraphStyle(
        "BodyTextCustom",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=9.2,
        leading=13,
        textColor=TEXT_PRIMARY,
        spaceAfter=3,
    )

    bullet_style = ParagraphStyle(
        "BulletItem",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.9,
        leading=12.4,
        leftIndent=10,
        firstLineIndent=-7,
        textColor=TEXT_PRIMARY,
        spaceAfter=2,
    )

    item_title_left = ParagraphStyle(
        "ItemTitleLeft",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=9.6,
        leading=12.5,
        textColor=DARK_SLATE,
    )

    item_meta_right = ParagraphStyle(
        "ItemMetaRight",
        parent=styles["Normal"],
        fontName="Helvetica-Oblique",
        fontSize=8.6,
        leading=12,
        textColor=TEXT_MUTED,
        alignment=TA_RIGHT,
    )

    story = []

    # 1. HEADER
    story.append(Paragraph("MEHEDI HASAN", name_style))
    story.append(Paragraph(
        "Python, Automation &amp; Full-Stack Tooling Developer &nbsp;|&nbsp; Undergraduate CSE Researcher",
        role_style
    ))
    story.append(Paragraph(
        'Faridpur / Dhaka, Bangladesh &nbsp;&bull;&nbsp; '
        '<a href="mailto:mhbhuiyan2004@gmail.com" color="#007799">mhbhuiyan2004@gmail.com</a> &nbsp;&bull;&nbsp; '
        '<a href="https://github.com/MEhe132" color="#007799">github.com/MEhe132</a> &nbsp;&bull;&nbsp; '
        '<a href="https://www.linkedin.com/in/mehedi-hasan-a8bb362a1/" color="#007799">linkedin.com/in/mehedi-hasan-a8bb362a1</a> &nbsp;&bull;&nbsp; '
        'Telegram: <a href="https://t.me/Mh_13585" color="#007799">@Mh_13585</a>',
        contact_style
    ))
    story.append(HRFlowable(width="100%", thickness=1.2, color=ACCENT_CYAN, spaceBefore=2, spaceAfter=6))

    def add_section_header(title: str):
        story.append(Paragraph(title.upper(), section_style))
        story.append(HRFlowable(width="100%", thickness=0.6, color=BORDER_GRAY, spaceBefore=0, spaceAfter=4))

    def add_split_row(left_html: str, right_html: str):
        tbl = Table(
            [[Paragraph(left_html, item_title_left), Paragraph(right_html, item_meta_right)]],
            colWidths=[132 * mm, 50 * mm]
        )
        tbl.setStyle(TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 1),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
        ]))
        story.append(tbl)

    # 2. SUMMARY
    add_section_header("Executive Summary")
    story.append(Paragraph(
        "Systems-oriented Computer Science &amp; Engineering undergraduate and Undergraduate Research Assistant at the "
        "<b>FEC CSE Research Lab</b> with deep hands-on experience building full-stack web applications, OS-level Windows "
        "desktop overlays, and Manifest V3 browser automation extensions. Proven track record of designing high-concurrency "
        "real-time streams, hybrid AI/EXIF verification pipelines, and sub-millisecond SQL aggregation architectures. "
        "Available for Software Engineering Internships, Research Collaborations, Freelance Projects, and Full-Time Roles.",
        body_style
    ))

    # 3. EDUCATION & RESEARCH EXPERIENCE
    add_section_header("Education &amp; Academic Research")
    add_split_row(
        "Faridpur Engineering College (FEC) &mdash; <font name='Helvetica'>B.Sc. in Computer Science &amp; Engineering (CSE)</font>",
        "Faridpur, Bangladesh | Active / Present"
    )
    story.append(Paragraph(
        "&bull; <b>Core Focus:</b> Algorithms, Data Structures, Systems Engineering, Database Architecture, and Full-Stack Software Tooling.",
        bullet_style
    ))
    story.append(Spacer(1, 2))
    add_split_row(
        "FEC CSE Research Lab &mdash; <font name='Helvetica'>Undergraduate Research Assistant</font>",
        "Faridpur Engineering College | Present"
    )
    story.append(Paragraph(
        "&bull; Conducting applied Computer Science &amp; Engineering research in collaboration with faculty advisors and lab peers; "
        "actively preparing research manuscripts and experimental pipelines for upcoming peer-reviewed publication.",
        bullet_style
    ))

    # 4. TECHNICAL SKILLS
    add_section_header("Technical Skills &amp; Tooling")
    skills_data = [
        [Paragraph("<b>Languages:</b>", body_style),
         Paragraph("Python (Primary), C, C++, Java, JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3", body_style)],
        [Paragraph("<b>Frameworks &amp; Web:</b>", body_style),
         Paragraph("Django, Flask, SQLAlchemy ORM, Node.js, Tailwind CSS, Leaflet.js (GIS), Server-Sent Events (SSE)", body_style)],
        [Paragraph("<b>Systems &amp; Desktop:</b>", body_style),
         Paragraph("Windows Win32 API (ctypes, User32/Shcore), Tkinter GUI, Chrome/Edge Extension APIs (Manifest V3), Pillow (PIL), ReportLab", body_style)],
        [Paragraph("<b>Databases &amp; DevOps:</b>", body_style),
         Paragraph("PostgreSQL, SQLite (Composite Indexing &amp; Bulk Aggregations), Git, GitHub Actions CI/CD, Vercel, Linux", body_style)],
    ]
    skills_tbl = Table(skills_data, colWidths=[38 * mm, 144 * mm])
    skills_tbl.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 1),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5),
    ]))
    story.append(skills_tbl)

    # 5. FEATURED ENGINEERING PROJECTS
    add_section_header("Featured Engineering &amp; Full-Stack Projects")

    # Project 1
    add_split_row(
        'Fix_my_city &mdash; <font name="Helvetica">Bangladesh Civic Infrastructure Issue Tracker &amp; GIS Platform</font>',
        '<a href="https://fix-my-city-rouge-three.vercel.app/" color="#007799">Live Demo</a> | <a href="https://github.com/MEhe132/Fix_my_city" color="#007799">GitHub Repo</a>'
    )
    story.append(Paragraph(
        "<i>Stack: Python, Django, Leaflet.js (GIS), ReportLab (PDF), EXIF/Binary Image Analysis, HTML5/CSS3/JS</i>",
        bullet_style
    ))
    story.append(Paragraph(
        "&bull; Engineered a two-tier civic-tech platform (Citizen Reporter &amp; Municipal Authority Triage Console) with immutable audit trails (<b>StatusHistory</b>) across Dhaka municipal wards (DNCC &amp; DSCC).",
        bullet_style
    ))
    story.append(Paragraph(
        "&bull; Built a hybrid AI-generated image &amp; spam verification pipeline combining Camera Hardware EXIF fast-path validation with a binary header/noise detector blocking synthetic uploads (Midjourney/DALL-E).",
        bullet_style
    ))
    story.append(Paragraph(
        "&bull; Automated statutory PDF petition generation under the Local Government Act 2009 &amp; RTI Act 2009 using <b>ReportLab</b> with GPS watermarks and interactive multi-layer <b>Leaflet.js</b> Nominatim reverse geocoding.",
        bullet_style
    ))
    story.append(Spacer(1, 3))

    # Project 2
    add_split_row(
        'Meal_management_web_app (Plate &amp; Spoon) &mdash; <font name="Helvetica">Real-Time Hostel Meal &amp; Financial Auditing System</font>',
        '<a href="https://fix-my-city-jotq.vercel.app/menu" color="#007799">Live App</a> | <a href="https://github.com/MEhe132/Meal_management_web_app" color="#007799">GitHub Repo</a>'
    )
    story.append(Paragraph(
        "<i>Stack: Python, Flask, SQLAlchemy ORM, PostgreSQL/SQLite, Server-Sent Events (SSE), Vanilla JS, Tailwind CSS</i>",
        bullet_style
    ))
    story.append(Paragraph(
        "&bull; Architected a thread-safe real-time <b>Server-Sent Events (SSE)</b> streaming engine (<b>MessageAnnouncer</b> with <b>threading.Lock()</b>) for non-blocking live group chat and instant financial notifications.",
        bullet_style
    ))
    story.append(Paragraph(
        "&bull; Optimized database performance via composite indexes and bulk SQL aggregations (<b>get_bulk_user_monthly_stats</b>), cutting dashboard load complexity from 100+ N+1 queries down to 3&ndash;4 sub-millisecond queries.",
        bullet_style
    ))
    story.append(Paragraph(
        "&bull; Designed a dynamic financial auditing engine calculating live per-meal rates, member deposits, shared expenses, role-based slot locks, and net balances with seamless manager role transfers.",
        bullet_style
    ))
    story.append(Spacer(1, 3))

    # Project 3
    add_split_row(
        'Convert_php_to_usdt (calc-php-converter) &mdash; <font name="Helvetica">Desktop Currency &amp; OCR Calculator Overlay</font>',
        '<a href="https://github.com/MEhe132/Convert_php_to_usdt/releases/tag/v4.0.0" color="#007799">Release v4.0.0</a> | <a href="https://github.com/MEhe132/Convert_php_to_usdt" color="#007799">GitHub Repo</a>'
    )
    story.append(Paragraph(
        "<i>Stack: Python, Tkinter GUI, Pillow (PIL), Windows Win32 API (ctypes: User32 &amp; Shcore)</i>",
        bullet_style
    ))
    story.append(Paragraph(
        "&bull; Built a frameless, always-on-top Windows desktop overlay utility for instant PHP &harr; USDT currency conversion, live math evaluation, dynamic UI scaling, and integrated quick notes.",
        bullet_style
    ))
    story.append(Paragraph(
        "&bull; Integrated OS-level Win32 APIs via <b>ctypes</b> for global system hotkeys (<b>Ctrl+/</b> to summon, <b>Ctrl++/-</b> for live transparency) and High-DPI monitor scaling alongside a Google Lens OCR screen-region snipping tool.",
        bullet_style
    ))
    story.append(Spacer(1, 3))

    # Project 4
    add_split_row(
        'Safe-Seller-Keep-Alive &mdash; <font name="Helvetica">Stealth Marketplace Session Manager (Manifest V3)</font>',
        '<a href="https://github.com/MEhe132/Safe-Seller-Keep-Alive/releases/tag/v1.3.0" color="#007799">Release v1.3.0</a> | <a href="https://github.com/MEhe132/Safe-Seller-Keep-Alive" color="#007799">GitHub Repo</a>'
    )
    story.append(Paragraph(
        "<i>Stack: JavaScript (ES6+), Chrome &amp; Edge Extension Manifest V3 (chrome.alarms, chrome.power, Service Workers)</i>",
        bullet_style
    ))
    story.append(Paragraph(
        "&bull; Developed a background Manifest V3 extension that keeps G2G &amp; U7BUY seller accounts active in a single background tab using randomized jitter intervals (600s&ndash;1000s) without stealing window focus.",
        bullet_style
    ))
    story.append(Paragraph(
        "&bull; Engineered hardware wake-lock protection (<b>chrome.power</b> preventing Windows S0 Modern Standby), automatic timer recovery after PC restarts, and Cloudflare challenge / logout detection safeguards.",
        bullet_style
    ))

    # 6. AVAILABILITY & LINKS
    add_section_header("Availability &amp; Collaboration")
    story.append(Paragraph(
        "Open to <b>Software Engineering Internships</b>, <b>Undergraduate Research Collaborations</b>, "
        "<b>Freelance Tooling &amp; Web Projects</b>, and <b>Full-Time Engineering Opportunities</b>. "
        "Direct contact via Email (<a href='mailto:mhbhuiyan2004@gmail.com' color='#007799'>mhbhuiyan2004@gmail.com</a>), "
        "LinkedIn (<a href='https://www.linkedin.com/in/mehedi-hasan-a8bb362a1/' color='#007799'>mehedi-hasan-a8bb362a1</a>), "
        "Telegram (<a href='https://t.me/Mh_13585' color='#007799'>@Mh_13585</a>), or Discord (<b>mh_13585</b>).",
        body_style
    ))

    doc.build(story)
    print(f"Resume successfully generated at: {output_path}")

if __name__ == "__main__":
    out_file = os.path.join(os.path.dirname(os.path.abspath(__file__)), "assets", "Mehedi_Hasan_Resume.pdf")
    generate_resume(out_file)
