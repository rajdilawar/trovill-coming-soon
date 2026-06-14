# Legal Compliance Summary - Trovill Website

**Date:** 14. Juni 2026  
**Company:** Trovill UG (haftungsbeschränkt)  
**Domain:** https://trovill.com

---

## ✅ Completed Items

### 1. **Impressum (Legal Notice)**
- ✅ Complete with all required information per § 5 DDG
- ✅ Company name, address, register details
- ✅ Geschäftsführerin named: Madhu
- ✅ Contact email and website
- ✅ VAT ID placeholder (to be added when issued)
- ✅ § 36 VSBG consumer dispute resolution notice
- ✅ No deprecated EU ODR platform link
- ✅ Language: German
- **File:** `impressum.html`

### 2. **Datenschutzerklärung (Privacy Policy)**
- ✅ Complete GDPR-compliant privacy policy in German
- ✅ Correct controller information (Trovill UG)
- ✅ Website visit/server log data section
- ✅ Waitlist/newsletter signup section
- ✅ Legal basis: Art. 6 Abs. 1 lit. a DSGVO (consent)
- ✅ User rights section (Art. 15-21 DSGVO)
- ✅ Response time: "innerhalb eines Monats" (not 30 days)
- ✅ Berlin data protection authority contact details
- ✅ No false legal guarantee statements
- ✅ Language: German
- **File:** `privacy-policy.html`

### 3. **Waitlist Form**
- ✅ Consent checkbox implemented
- ✅ Checkbox is NOT pre-checked
- ✅ Form validates that checkbox must be checked before submission
- ✅ Consent text in German
- ✅ Links to Datenschutzerklärung
- ✅ Success and error messages displayed
- ✅ German text: "Ich bin damit einverstanden, dass Trovill UG (haftungsbeschränkt) meine E-Mail-Adresse verwendet..."
- **File:** `index.html`, `script.js`

### 4. **Footer & Navigation**
- ✅ All legal pages use German labels
- ✅ Footer includes: Impressum, Datenschutzerklärung, Kontakt
- ✅ Copyright: "© 2026 Trovill UG (haftungsbeschränkt). Alle Rechte vorbehalten."
- ✅ Navigation uses "Kontakt" instead of "Contact"
- **Files:** `index.html`, `impressum.html`, `privacy-policy.html`, `thank-you.html`

### 5. **Content Cleanup**
- ✅ Removed risky sustainability claims
- ✅ Softened marketing language to avoid unsubstantiated "sustainable", "eco-friendly" claims
- ✅ Use safe wording: "carefully selected materials", "conscious craftsmanship", "responsible production approach"

---

## 🔍 Provider Details Identified

### **Hosting Provider: GitHub Pages**
- **Provider:** GitHub, Inc.
- **Address:** 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA
- **Purpose:** Website hosting, server logs (IP, browser, timestamps)
- **Legal basis:** Art. 6 Abs. 1 lit. f DSGVO (legitimate interest)
- **Privacy Policy:** https://docs.github.com/de/site-policy/privacy-policies/github-privacy-statement
- **Location:** USA (international data transfer)
- **Documented in:** Section 9.2 of Datenschutzerklärung

### **Email Service Provider: MailerLite**
- **Provider:** UAB MailerLite
- **Address:** J. Basanavičiaus 15, LT-03108 Vilnius, Lithuania
- **Purpose:** Waitlist management, email communication
- **Legal basis:** Art. 6 Abs. 1 lit. a DSGVO (consent)
- **Privacy Policy:** https://www.mailerlite.com/legal/privacy-policy
- **Location:** Lithuania (EU)
- **Documented in:** Section 9.1 of Datenschutzerklärung

---

## ⚠️ Double Opt-In Status

### **Current Implementation: NOT IMPLEMENTED IN FRONTEND**

The website's JavaScript code (`script.js`) submits email addresses directly to MailerLite without implementing a confirmation email flow on the frontend.

### **What this means:**
- The current form captures consent via checkbox ✅
- BUT: No confirmation email is sent from the frontend code ❌
- MailerLite MAY have Double Opt-In configured on their platform side (needs verification)

### **Why Double Opt-In matters:**
According to German case law and best practices, marketing emails should use Double Opt-In to:
1. Prove explicit consent
2. Prevent abuse (fake signups)
3. Meet stricter German consent requirements

### **Privacy Policy Note:**
Section 3.2 now includes a disclaimer:
> "Bitte beachten Sie, dass eine rechtssichere Newsletter-Anmeldung in Deutschland in der Regel ein Double-Opt-In-Verfahren erfordert. Die technische Konfiguration des Double-Opt-In-Verfahrens erfolgt über unseren E-Mail-Dienstleister MailerLite und sollte vor dem Versand von Marketing-E-Mails sichergestellt werden."

---

## 📋 REQUIRED MANUAL ACTIONS (Before Sending Marketing Emails)

### **1. Configure Double Opt-In in MailerLite** ⚠️ CRITICAL
**Action Required:**
1. Log into MailerLite account
2. Go to Forms/Settings for the waitlist form
3. **Enable Double Opt-In** for the group/form
4. Configure confirmation email template
5. Test the full flow: signup → confirmation email → confirmation link → confirmed subscriber

**Documentation:**
- MailerLite DOI Guide: https://www.mailerlite.com/help/how-to-use-double-opt-in
- Ensure confirmation emails are sent before any marketing emails

**Status:** ❌ NOT YET VERIFIED
**Priority:** HIGH - Required before sending any marketing emails

---

### **2. Sign Auftragsverarbeitungsverträge (Data Processing Agreements / AVV)** ⚠️ CRITICAL

#### **2.1 MailerLite AVV (Art. 28 DSGVO)**
**Action Required:**
1. Log into MailerLite account
2. Navigate to: Account Settings → Legal → Data Processing Agreement
3. Review and accept MailerLite's DPA
4. Download/save a copy for your records
5. Verify that MailerLite's DPA covers:
   - EU Standard Contractual Clauses for international transfers
   - Technical and organizational measures (TOMs)
   - Subprocessor list

**Documentation:**
- MailerLite DPA: https://www.mailerlite.com/legal/data-processing-agreement
- Privacy Policy already states: "Mit MailerLite wurde bzw. wird ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO abgeschlossen."

**Status:** ❌ NOT YET COMPLETED
**Priority:** HIGH

#### **2.2 GitHub Pages AVV**
**Action Required:**
1. Review GitHub's Data Protection Agreement
2. GitHub provides standard terms for enterprise customers
3. For free/standard GitHub Pages, GitHub's Terms of Service and Privacy Statement apply
4. Document this in your records

**Note:**
- GitHub Pages is primarily a hosting service
- Server logs are processed by GitHub
- GitHub Privacy Statement covers data processing
- For small businesses, GitHub's standard terms are typically sufficient

**Documentation:**
- GitHub Privacy Statement: https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement
- GitHub Data Protection: https://docs.github.com/en/site-policy/privacy-policies/github-data-protection-agreement

**Status:** ❌ NOT YET REVIEWED
**Priority:** MEDIUM

---

### **3. Update Privacy Policy When VAT ID Is Issued**
**Action Required:**
1. When you receive your USt-IdNr. from Finanzamt
2. Update `impressum.html`:
   - Replace "Die Umsatzsteuer-Identifikationsnummer wird ergänzt, sobald sie erteilt wurde."
   - With: "Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE [YOUR VAT ID]"

**Status:** ⏳ WAITING FOR TAX OFFICE
**Priority:** LOW (update when received)

---

### **4. Test Unsubscribe Functionality**
**Action Required:**
1. Send a test email to yourself via MailerLite
2. Verify the unsubscribe link works
3. Confirm that unsubscribe requests are processed within 30 days
4. Test the manual unsubscribe process (email to info@trovill.com)

**Status:** ❌ NOT YET TESTED
**Priority:** HIGH - Must work before sending marketing emails

---

### **5. Document Internal Processes**
**Action Required:**
Create internal documentation for:
1. **Data deletion requests:** How to handle Art. 17 DSGVO requests
2. **Data access requests:** How to export user data from MailerLite (Art. 15 DSGVO)
3. **Consent withdrawal:** Process for removing users from mailing list
4. **Response timeline:** Ensure responses within 1 month
5. **Record keeping:** Save copies of AVV/DPA agreements

**Status:** ❌ NOT YET CREATED
**Priority:** MEDIUM

---

## 🔒 IP Address & Server Logs

### **Current Status:**
- Privacy policy states that **IP addresses** are collected in server logs
- Does **NOT** claim IP anonymization (correct - GitHub Pages does not anonymize IPs)
- Legal basis: Art. 6 Abs. 1 lit. f DSGVO (legitimate interest)
- Retention: Typically 7-30 days (GitHub's standard practice)

### **What GitHub Pages Collects Automatically:**
- IP address (not anonymized)
- Browser type and version
- Operating system
- Referrer URL
- Date and time of access
- Requested pages

**No action required** - This is accurate and correctly documented.

---

## 📝 Legal Review Recommendation

### **Status:** ⚠️ RECOMMENDED

While the legal pages have been updated to follow German GDPR requirements and best practices, it is **highly recommended** to have the following reviewed by:

1. **German lawyer specializing in data protection (Fachanwalt für IT-Recht)**
2. **Legal template provider** (e.g., eRecht24, IT-Recht Kanzlei, Händlerbund)

### **Why:**
- Legal requirements can change
- Court decisions may create new requirements
- Your specific business model may have unique requirements
- Professional legal advice provides additional protection

### **What to review:**
- ✅ Impressum completeness
- ✅ Privacy policy GDPR compliance
- ✅ Consent mechanism legality
- ✅ AVV/DPA requirements
- ✅ Double Opt-In implementation
- ✅ International data transfers (GitHub in USA)

---

## 📊 Summary Status Table

| Item | Status | Priority | Action Required |
|------|--------|----------|----------------|
| Impressum | ✅ Complete | ✓ | Add VAT ID when issued |
| Datenschutzerklärung | ✅ Complete | ✓ | None |
| Waitlist Form | ✅ Functional | ✓ | None |
| Footer/Navigation | ✅ German | ✓ | None |
| Double Opt-In | ❌ Not Implemented | HIGH | Configure in MailerLite |
| MailerLite AVV | ❌ Not Signed | HIGH | Accept DPA in MailerLite |
| GitHub AVV | ⚠️ Not Reviewed | MEDIUM | Review GitHub terms |
| Unsubscribe Test | ❌ Not Tested | HIGH | Test before launch |
| Legal Review | ⚠️ Recommended | MEDIUM | Consult lawyer |

---

## ✅ Ready to Publish?

### **Website Pages: YES** ✅
The website pages (Impressum, Datenschutzerklärung, waitlist form) are ready to be published.

### **Ready to Send Marketing Emails: NO** ❌

**Do NOT send marketing/waitlist emails until:**
1. ✅ Double Opt-In is configured and tested in MailerLite
2. ✅ MailerLite AVV/DPA is signed
3. ✅ Unsubscribe functionality is tested and working
4. ✅ Internal processes for GDPR requests are documented

---

## 📞 Contact for Legal Questions

**Trovill UG (haftungsbeschränkt)**  
Prenzlauer Allee 7  
10405 Berlin  
Deutschland

E-Mail: info@trovill.com  
Website: www.trovill.com

**Data Protection Authority:**  
Berliner Beauftragte für Datenschutz und Informationsfreiheit  
Alt-Moabit 59-61  
10555 Berlin  
Deutschland  
E-Mail: mailbox@datenschutz-berlin.de  
Website: www.datenschutz-berlin.de

---

## 📚 Additional Resources

- **DSGVO (GDPR):** https://dsgvo-gesetz.de
- **TMG/DDG:** https://www.gesetze-im-internet.de/ddg
- **MailerLite GDPR Guide:** https://www.mailerlite.com/gdpr
- **German Data Protection Law:** https://www.bfdi.bund.de
- **eRecht24 (Legal Templates):** https://www.e-recht24.de

---

**Document prepared:** June 14, 2026  
**Last updated:** June 14, 2026  
**Next review:** Before sending first marketing email
