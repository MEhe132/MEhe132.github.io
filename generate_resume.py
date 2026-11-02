import os
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT


def generate_reverse_chronological_resume(output_path: str):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=13 * mm,
        rightMargin=13 * mm,
        topMargin=11 * mm,
        bottomMargin=11 * mm,
        title="Mehedi Hasan - Reverse-Chronological Resume",
        author="Mehedi Hasan (MEhe132)",
        subject="Reverse-Chronological CV / Resume of Mehedi Hasan"
    )

    styles = getSampleStyleSheet()

    # Classic ATS-Friendly Reverse-Chronological Typography & Colors
    INK_BLACK = colors.HexColor("#111827")
    NAVY_ACCENT = colors.HexColor("#0F172A")
    LINK_BLUE = colors.HexColor("#0369A1")
    TEXT_BODY = colors.HexColor("#1F2937")
    TEXT_MUTED = colors.HexColor("#4B5563")
    RULE_COLOR = colors.HexColor("#374151")

    name_style = ParagraphStyle(
        "RC_Name",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=20,
        leading=23,
        textColor=INK_BLACK,
        alignment=TA_CENTER,
        spaceAfter=2,
    )

    headline_style = ParagraphStyle(
        "RC_Headline",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=9.8,
        leading=13,
        textColor=LINK_BLUE,
        alignment=TA_CENTER,
        spaceAfter=3,
    )

    contact_style = ParagraphStyle(
        "RC_Contact",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.6,
        leading=11.5,
        textColor=TEXT_MUTED,
        alignment=TA_CENTER,
        spaceAfter=5,
    )

    section_heading = ParagraphStyle(
        "RC_Section",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=10,
        leading=12.5,
        textColor=NAVY_ACCENT,
        spaceBefore=6,
        spaceAfter=2,
    )

    org_title_left = ParagraphStyle(
        "RC_OrgLeft",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=9.5,
        leading=12,
        textColor=INK_BLACK,
    )

    date_loc_right = ParagraphStyle(
        "RC_DateRight",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=8.8,
        leading=12,
        textColor=INK_BLACK,
        alignment=TA_RIGHT,
    )

    role_sub_left = ParagraphStyle(
        "RC_RoleSubLeft",
        parent=styles["Normal"],
        fontName="Helvetica-Oblique",
        fontSize=9.0,
        leading=11.5,
        textColor=TEXT_BODY,
    )

    meta_sub_right = ParagraphStyle(
        "RC_MetaSubRight",
        parent=styles["Normal"],
        fontName="Helvetica-Oblique",
        fontSize=8.5,
        leading=11.5,
        textColor=TEXT_MUTED,
        alignment=TA_RIGHT,
    )

    bullet_style = ParagraphStyle(
        "RC_Bullet",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.8,
        leading=12.0,
        leftIndent=10,
        firstLineIndent=-7,
        textColor=TEXT_BODY,
        spaceAfter=1.8,
    )

    body_style = ParagraphStyle(
        "RC_Body",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.9,
        leading=12.2,
        textColor=TEXT_BODY,
        spaceAfter=2,
    )

    story = []
    col_w_left = 134 * mm
    col_w_right = 50 * mm

    def add_section(title: str):
        story.append(Paragraph(title.upper(), section_heading))
        story.append(HRFlowable(width="100%", thickness=0.8, color=RULE_COLOR, spaceBefore=0, spaceAfter=4))

    def add_chrono_header(org_or_title: str, date_str: str, role_or_stack: str = "", location_or_links: str = ""):
        rows = [
            [Paragraph(org_or_title, org_title_left), Paragraph(date_str, date_loc_right)]
        ]
        if role_or_stack or location_or_links:
            rows.append([
                Paragraph(role_or_stack, role_sub_left),
                Paragraph(location_or_links, meta_sub_right)
            ])
        tbl = Table(rows, colWidths=[col_w_left, col_w_right])
        tbl.setStyle(TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0.5),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5),
        ]))
        story.append(tbl)

    # ==================== HEADER ====================
    story.append(Paragraph("MEHEDI HASAN", name_style))
    story.append(Paragraph(
        "Python, Automation &amp; Full-Stack Tooling Developer &nbsp;|&nbsp; Undergraduate CSE Researcher",
        headline_style
    ))
    story.append(Paragraph(
        'Faridpur / Dhaka, Bangladesh &nbsp;&bull;&nbsp; '
        '<a href="mailto:mhbhuiyan2004@gmail.com" color="#0369A1">mhbhuiyan2004@gmail.com</a> &nbsp;&bull;&nbsp; '
        '<a href="https://mehe132.github.io" color="#0369A1">mehe132.github.io</a> &nbsp;&bull;&nbsp; '
        '<a href="https://github.com/MEhe132" color="#0369A1">github.com/MEhe132</a> &nbsp;&bull;&nbsp; '
        '<a href="https://www.linkedin.com/in/mehedi-hasan-a8bb362a1/" color="#0369A1">linkedin.com/in/mehedi-hasan-a8bb362a1</a>',
        contact_style
    ))

    # ==================== 1. PROFESSIONAL & RESEARCH EXPERIENCE (Reverse-Chronological) ====================
    add_section("Professional &amp; Research Experience")

    # Role 1 (Most Recent / Current)
    add_chrono_header(
        "FEC CSE Research Lab, Faridpur Engineering College",
        "Present (Active)",
        "Undergraduate Research Assistant",
        "Faridpur, Bangladesh"
    )
    story.append(Paragraph(
        "&bull; Conducting applied Computer Science &amp; Engineering research in collaboration with faculty advisors and lab peers, focusing on empirical evaluation, verification pipelines, and reproducible systems.",
        bullet_style
    ))
    story.append(Paragraph(
        "&bull; Designing experimental benchmarks, data processing workflows, and preparing technical manuscripts for upcoming peer-reviewed academic publication.",
        bullet_style
    ))
    story.append(Spacer(1, 3))

    # Role 2 (Concurrent / Independent Software Engineering)
    add_chrono_header(
        "Independent Full-Stack &amp; Automation Systems Developer (@MEhe132)",
        "Present (Active)",
        "Python, Full-Stack Web &amp; OS-Level Tooling Engineer",
        "Remote / Dhaka, Bangladesh"
    )
    story.append(Paragraph(
        "&bull; Architected and deployed full-stack web applications on Vercel (Django, Flask, SQLAlchemy, Leaflet.js GIS) serving real-time civic tracking and multi-user financial auditing.",
        bullet_style
    ))
    story.append(Paragraph(
        "&bull; Engineered OS-level Windows desktop utilities using Python <b>ctypes</b> (Win32 API) and published open-source Manifest V3 browser automation extensions for Microsoft Edge and Google Chrome.",
        bullet_style
    ))

    # ==================== 2. EDUCATION (Reverse-Chronological) ====================
    add_section("Education")
    add_chrono_header(
        "Faridpur Engineering College (FEC)",
        "Present (Undergraduate)",
        "Bachelor of Science (B.Sc.) in Computer Science &amp; Engineering (CSE)",
        "Faridpur, Bangladesh"
    )
    story.append(Paragraph(
        "&bull; <b>Relevant Coursework &amp; Focus:</b> Data Structures &amp; Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, and Software Engineering.",
        bullet_style
    ))
    story.append(Paragraph(
        "&bull; <b>Research Affiliation:</b> Active member and Undergraduate Research Assistant at the <b>FEC CSE Research Lab</b>.",
        bullet_style
    ))

    # ==================== 3. CHRONOLOGICAL ENGINEERING PROJECTS (Newest Releases & Deployments First) ====================
    add_section("Selected Engineering Projects (Reverse-Chronological)")

    # Project 1
    add_chrono_header(
        "Fix_my_city &mdash; Bangladesh Civic Infrastructure Issue Tracker &amp; GIS Platform",
        "2026 &ndash; Present",
        "Python, Django, Leaflet.js (GIS), ReportLab (PDF), EXIF/AI Forensic Analysis",
        '<a href="https://fix-my-city-rouge-three.vercel.app/" color="#0369A1">Live Demo</a> | <a href="https://github.com/MEhe132/Fix_my_city" color="#0369A1">GitHub</a>'
    )
    story.append(Paragraph(
        "&bull; Built a two-tier civic-tech platform (Citizen Reporter vs. Municipal Authority Triage Console) with immutable audit trails (<b>StatusHistory</b>) across Dhaka municipal wards (DNCC &amp; DSCC).",
        bullet_style
    ))
    story.append(Paragraph(
        "&bull; Engineered a hybrid AI-generated image &amp; spam verification pipeline combining Camera Hardware EXIF fast-path checks with binary header/noise detection blocking Midjourney/DALL-E uploads.",
        bullet_style
    ))
    story.append(Paragraph(
        "&bull; Automated statutory PDF petition generation under the Local Government Act 2009 &amp; RTI Act 2009 using <b>ReportLab</b> with GPS watermarks and multi-layer <b>Leaflet.js</b> Nominatim reverse geocoding.",
        bullet_style
    ))
    story.append(Spacer(1, 2.5))

    # Project 2
    add_chrono_header(
        "Meal_management_web_app (Plate &amp; Spoon) &mdash; Real-Time Hostel Meal &amp; Auditing System",
        "2026 &ndash; Present",
        "Python, Flask, SQLAlchemy ORM, Server-Sent Events (SSE), PostgreSQL/SQLite, Tailwind CSS",
        '<a href="https://fix-my-city-jotq.vercel.app/menu" color="#0369A1">Live App</a> | <a href="https://github.com/MEhe132/Meal_management_web_app" color="#0369A1">GitHub</a>'
    )
    story.append(Paragraph(
        "&bull; Implemented a thread-safe real-time <b>Server-Sent Events (SSE)</b> streaming engine (<b>MessageAnnouncer</b> using <b>threading.Lock()</b>) for non-blocking live group chat and instant financial notifications.",
        bullet_style
    ))
    story.append(Paragraph(
        "&bull; Reduced dashboard query complexity from 100+ N+1 queries to 3&ndash;4 sub-millisecond queries via composite SQLite/PostgreSQL indexes and bulk aggregation (<b>get_bulk_user_monthly_stats</b>).",
        bullet_style
    ))
    story.append(Spacer(1, 2.5))

    # Project 3
    add_chrono_header(
        "Convert_php_to_usdt (calc-php-converter v4.0.0) &mdash; Win32 Desktop OCR &amp; Currency Overlay",
        "2026 (Release v4.0.0)",
        "Python, Tkinter GUI, Windows Win32 API (ctypes: User32/Shcore), Pillow (PIL) OCR",
        '<a href="https://github.com/MEhe132/Convert_php_to_usdt/releases/tag/v4.0.0" color="#0369A1">Release v4.0.0</a> | <a href="https://github.com/MEhe132/Convert_php_to_usdt" color="#0369A1">GitHub</a>'
    )
    story.append(Paragraph(
        "&bull; Developed a frameless, always-on-top Windows overlay utility with direct Win32 API integration for global hotkeys (<b>Ctrl+/</b> to summon, <b>Ctrl++/-</b> for live opacity) and High-DPI scaling.",
        bullet_style
    ))
    story.append(Paragraph(
        "&bull; Integrated a Google Lens OCR screen-region snipping tool, dynamic UI scaling buttons, and persistent session state (<b>window_config.json</b>).",
        bullet_style
    ))
    story.append(Spacer(1, 2.5))

    # Project 4
    add_chrono_header(
        "Safe-Seller-Keep-Alive (v1.3.0) &mdash; Stealth Marketplace Session Manager Extension",
        "2026 (Release v1.3.0)",
        "JavaScript (ES6+), Chrome &amp; Edge Extension Manifest V3 (chrome.alarms, chrome.power)",
        '<a href="https://github.com/MEhe132/Safe-Seller-Keep-Alive/releases/tag/v1.3.0" color="#0369A1">Release v1.3.0</a> | <a href="https://github.com/MEhe132/Safe-Seller-Keep-Alive" color="#0369A1">GitHub</a>'
    )
    story.append(Paragraph(
        "&bull; Built a silent Manifest V3 background extension maintaining active G2G &amp; U7BUY seller sessions using randomized jitter intervals (600s&ndash;1000s) without stealing window focus.",
        bullet_style
    ))
    story.append(Paragraph(
        "&bull; Added Windows S0 Modern Standby wake-lock protection (<b>chrome.power</b>), automatic countdown recovery after PC restarts, and Cloudflare challenge / logout auto-pause safeguards.",
        bullet_style
    ))

    # ==================== 4. TECHNICAL SKILLS ====================
    add_section("Technical Skills")
    skills_rows = [
        [Paragraph("<b>Languages:</b>", body_style),
         Paragraph("Python (Primary), C, C++, Java, JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3", body_style)],
        [Paragraph("<b>Frameworks &amp; Libraries:</b>", body_style),
         Paragraph("Django, Flask, SQLAlchemy ORM, Tkinter, Tailwind CSS, Node.js, Leaflet.js (GIS), ReportLab, Pillow (PIL)", body_style)],
        [Paragraph("<b>Systems &amp; Tooling:</b>", body_style),
         Paragraph("Windows Win32 API (ctypes), Chrome/Edge Extension APIs (Manifest V3), Server-Sent Events (SSE), Git, GitHub Actions, Vercel, Linux", body_style)],
    ]
    skills_tbl = Table(skills_rows, colWidths=[38 * mm, 146 * mm])
    skills_tbl.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5),
    ]))
    story.append(skills_tbl)

    doc.build(story)
    print(f"Reverse-Chronological Resume successfully generated at: {output_path}")


if __name__ == "__main__":
    out_file = os.path.join(
        os.path.dirname(os.path.abspath(__file__)),
        "assets",
        "Mehedi_Hasan_Resume.pdf"
    )
    generate_reverse_chronological_resume(out_file)
