# WEBSITE_AUDIT_REPORT.md
Scoopy Log — Website / Landing Page Audit (content-based)

Scope: **Only** what is explicitly present in `index.html`, `privacy.html`, and `terms.html` (headlines, subheadings, feature descriptions, visual captions, pricing mentions, privacy/disclaimer sections). No inferred features.

---

## 1. Product Identity & Messaging

- **App name (as presented)**: “Scoopy Log”
- **Tagline (as presented)**: “A calm daily log for parents of babies.”
- **Core promise communicated**
  - “Track sleep, feeding, and diaper changes with ease. Built for parents who want clarity without complexity.”
  - “Scoopy Log is a simple daily tracker designed for parents of babies and toddlers.”
  - “...keep a gentle record of your child's routines—sleep, feeding, diapers, and growth—so you can stay organized, share updates with caregivers, and have clarity during pediatric visits. No clutter, no stress.”
- **Emotional tone**
  - **Calm / reassuring**: “No clutter, no stress.” “No advice. No pressure.”
  - **Privacy-forward / trust-oriented**: “Your privacy matters” / “No ads. No data selling. No tracking.”
  - **Confident** social proof tone: “Join thousands of parents who trust Scoopy Log every day.” and “4.9 rating”

---

## 2. Feature Claims

Below is **every** feature claim found on the website and legal pages, with exact wording, claim strength, and potential ambiguity/overstatement risks.

### Tracking & Logging

- **Sleep tracking**
  - **Exact wording**: “Sleep” / “Track nap times and overnight sleep to review your baby's records.”
  - **Strength**: Descriptive (states what the app does)
  - **Ambiguity / risk**: None obvious (scope is clear: nap/overnight sleep)

- **Feeding tracking**
  - **Exact wording**: “Feeding” / “Log nursing sessions, bottles, and solid foods with simple taps.”
  - **Strength**: Descriptive + ease claim (“simple taps”)
  - **Ambiguity / risk**: “simple taps” is subjective but low risk

- **Diaper tracking**
  - **Exact wording**: “Diapers” / “Keep a record of diaper changes to stay on top of your baby's health.”
  - **Strength**: Descriptive + implied outcome (“stay on top of your baby's health”)
  - **Ambiguity / risk**: “stay on top of your baby's health” can be interpreted as a health benefit; see Medical/Regulatory risk section

- **Growth tracking**
  - **Exact wording**: “Growth” / “Monitor milestones, weight, and height as your child grows.”
  - **Strength**: Descriptive (“monitor”)
  - **Ambiguity / risk**: “milestones” can imply developmental guidance; no explicit guidance is promised, but the term is broad

### Speed/Simplicity (UX claims)

- **Fast logging**
  - **Exact wording**: “Simple and fast” / “Log an activity in seconds. No complicated forms or overwhelming interfaces.”
  - **Strength**: Promise (“in seconds”) + comparative language
  - **Ambiguity / risk**: “in seconds” is measurable/absolute; could be challenged if flow is longer for some actions

- **Low setup / low overhead**
  - **Exact wording**: “Designed for everyday life” / “Log moments as they happen. Nothing to set up, nothing to manage. The app stays out of your way.”
  - **Strength**: Promise (absolute phrasing)
  - **Ambiguity / risk**: “Nothing to set up” may conflict with any onboarding/account creation expectations (Privacy Policy mentions “Parent account information (if you create an account)”)

### Sharing / Multi-caregiver

- **Sharing with caregivers**
  - **Exact wording**: “Share with caregivers” / “Invite partners, grandparents, or nannies to view and contribute to your log.”
  - **Strength**: Descriptive (feature exists) + capability claim (“contribute”)
  - **Ambiguity / risk**: Not qualified on the landing copy itself; pricing later imposes limits (“Share with one caregiver” on Free; “Unlimited caregivers” on Premium). Potential mismatch if a user reads the benefits section before pricing.

- **Free vs Premium caregiver limits**
  - **Exact wording**: Free: “Share with one caregiver” / Premium: “Unlimited caregivers”
  - **Strength**: Descriptive (plan limits)
  - **Ambiguity / risk**: The concept “caregiver” is not defined (who counts, how invited, whether they need accounts)

### Records & Reporting

- **Review records**
  - **Exact wording**: “Review records” / “View daily and weekly records at a glance to review your logged data.”
  - **Strength**: Descriptive
  - **Ambiguity / risk**: “weekly records” could imply charts/analytics; no specifics provided

- **Export & share PDF**
  - **Exact wording**: “Export and share” / “Generate clean PDF reports to share with your pediatrician or keep for your records.”
  - **Strength**: Descriptive + implied professional utility
  - **Ambiguity / risk**: “clean PDF reports” is subjective; “share with your pediatrician” introduces medical context (see Medical/Regulatory section)

### Captain’s Log (PDF) — Premium narrative + content scope

- **Feature name & positioning**
  - **Exact wording**: “Captain's Log (PDF)” / “When you need it, export a clear, well-structured PDF with your records — calm, readable, and yours to keep.”
  - **Strength**: Descriptive + quality adjectives
  - **Ambiguity / risk**: Quality adjectives (“clear”, “well-structured”, “professional”) can be subjective

- **What the report includes**
  - **Exact wording**: “Export your complete care history as a professional PDF report.”
  - **Strength**: Strong promise (“complete care history”)
  - **Ambiguity / risk**: “complete” is absolute; “care history” is broad. The next line partially constrains it: “includes all logged activities organized by date.”

- **Use cases**
  - **Exact wording**: “Perfect for pediatrician visits, care transitions, or your own records.”
  - **Strength**: Descriptive + implied benefit
  - **Ambiguity / risk**: Medical adjacency; ensure disclaimers are discoverable and not contradicted

- **Premium gating**
  - **Exact wording**: “Available with Scoopy Log Premium.”
  - **Strength**: Clear gating statement
  - **Ambiguity / risk**: “Premium” price/terms are not specified on the site (see Monetization section)

### Privacy & Data Handling (as product claims)

- **No ads / no tracking**
  - **Exact wording**: “No ads. No data selling. No tracking.”
  - **Strength**: Strong promise (absolute)
  - **Ambiguity / risk**: Must match actual SDKs/telemetry practices; Privacy Policy further clarifies (good)

- **No third-party analytics / crash reporting**
  - **Exact wording** (landing): “We do not use Firebase, Google Analytics, or any other analytics or crash reporting services.”
  - **Exact wording** (privacy policy): “Scoopy Log does not use Firebase, Google Analytics, or any other third-party analytics, tracking, or crash reporting services.”
  - **Strength**: Strong promise (absolute)
  - **Ambiguity / risk**: Requires continuous enforcement (e.g., ensure no third-party analytics/crash SDKs)

- **Storage model**
  - **Exact wording**: “On-Device Storage: Your data is stored on your device by default... We do not have access to data stored on your device.”
  - **Strength**: Strong claim (data access)
  - **Ambiguity / risk**: Must remain true if any remote services exist; the policy also mentions optional iCloud

- **Optional iCloud sync**
  - **Exact wording**: “Optional iCloud Sync: If you choose to enable iCloud sync, your data may be stored in your personal iCloud account... We do not have access to your iCloud data.”
  - **Strength**: Descriptive + strong access claim
  - **Ambiguity / risk**: Must remain accurate; “encrypted by Apple's infrastructure” is generally plausible but still a claim to maintain carefully

- **Account concept**
  - **Exact wording**: “Parent account information (if you create an account)”
  - **Strength**: Implies optional account creation feature
  - **Ambiguity / risk**: The landing page does not describe accounts; could conflict with “Nothing to set up” messaging

### Social proof / credibility (non-feature, but claim)

- **Rating display**
  - **Exact wording**: “4.9 rating” (shown with 5 stars)
  - **Strength**: Credibility claim
  - **Ambiguity / risk**: No attribution or source (“based on X reviews”, link to App Store ratings). Higher compliance/credibility risk if unverified.

- **User base claim**
  - **Exact wording**: “Join thousands of parents who trust Scoopy Log every day.”
  - **Strength**: Credibility claim (scale)
  - **Ambiguity / risk**: “thousands” implies verified adoption; no source provided

---

## 3. Monetization Communication

### How pricing/subscription is described

- **Pricing section headline**: “Pricing”
- **Disclosure text (repeated)**: “All purchases are made via the App Store. Pricing and subscription terms are shown in the App Store.”
- **Plan labels**:
  - “Free” (pricing amount also shown as “Free”)
  - “Premium” (pricing amount also shown as “Premium”; badge “POPULAR”)
- **Premium callout**: “Available with Scoopy Log Premium.”

### Free vs paid expectations created

- **Free includes**
  - “Track sleep, feeding, and diapers”
  - “Review daily records”
  - “Share with one caregiver”
- **Premium includes**
  - “Everything in Free”
  - “Captain's Log PDF export”
  - “Unlimited caregivers”

### Trial or PDF mentions

- **PDF mention**: “Captain’s Log (PDF)” appears in multiple places and is explicitly gated: “Available with Scoopy Log Premium.”
- **Trial mention**: No free trial language on the landing page. (Terms mentions premium may be “One-time purchase” or “Subscription (monthly or annual)”; no trial is stated.)

### Missing clarity (user perspective)

- **No price shown**: “Premium” is labeled but no numeric price or subscription period is presented on the site.
- **Subscription model ambiguity**: Landing implies Premium; Terms says premium may be one-time or subscription (monthly/annual). The landing does not clarify which applies.
- **Feature gating clarity is partial**: Captain’s Log is clearly Premium-gated; caregiver limits are split by plan in pricing, but benefits section earlier says “Invite ... to view and contribute” without qualifier.

---

## 4. Medical / Regulatory Risk Scan

### Language that could imply health outcomes / medical guidance / expert authority

- **Health outcome adjacency**
  - “Keep a record of diaper changes to stay on top of your baby's health.”
  - “...have clarity during pediatric visits.”
  - “Generate clean PDF reports to share with your pediatrician...”
  - “Perfect for pediatrician visits...”
  - “Export your complete care history...”

These statements do not explicitly offer diagnosis/treatment, but they position the app in **medical-adjacent contexts** (pediatric visits, “health”, “care history”).

### Presence and visibility of disclaimers

- **Strong disclaimer present (Terms of Use)**
  - “Important: Scoopy Log is not a medical device or diagnostic tool. It does not provide medical advice, diagnosis, or treatment recommendations.”
  - “The information you log in the app is for your personal reference only. It should not be used to make medical decisions.”
  - “Always consult with qualified healthcare professionals...”
- **Landing page disclaimer visibility**
  - No medical disclaimer appears on the landing page content itself; it is only accessible via footer link to “Terms of Use”.

### Overall compliance tone

- **Good**: Explicit “Not Medical Advice” language exists and is unambiguous (on Terms page).
- **Watch-outs**: Repeated “pediatrician” and “health” framing on landing page increases the importance of disclaimer discoverability and avoiding implied health outcomes.

---

## 5. Consistency & Accuracy Risks

- **Unattributed social proof**
  - “4.9 rating” is shown without source or link.
  - “Join thousands of parents...” is a scale claim without evidence on-page.

- **Absolute / broad claims**
  - “Nothing to set up, nothing to manage.” (Potentially conflicts with account creation possibilities noted in Privacy Policy.)
  - “Export your complete care history...” (Absolute “complete”; “care history” broad.)
  - “No ads. No data selling. No tracking.” / “We do not use Firebase... or any other...” (Strong absolutes; must remain true.)

- **Feature gating timing**
  - Benefits section: “Invite partners, grandparents, or nannies to view and contribute...” appears before pricing section where limits are defined (“Share with one caregiver” vs “Unlimited caregivers”).

- **Terminology ambiguity**
  - “caregivers” not defined (accounts, permissions, invite mechanics).
  - “milestones” not defined (could be interpreted as developmental guidance vs simple recording).
  - “weekly records” not defined (could imply analytics).

---

## 6. Trust & Transparency Check

### Is it clear what the user gets immediately?

- **Partially**: The site communicates core tracking categories (sleep/feeding/diapers/growth) and general workflow simplicity.
- **CTA directs to App Store**: “Download on App Store” (no “coming soon” messaging present in this version).

### Is it clear what requires payment?

- **Moderately clear** for Captain’s Log:
  - “Available with Scoopy Log Premium.”
  - Premium plan lists “Captain's Log PDF export”.
- **Less clear** on pricing terms:
  - No numeric price on-site.
  - Terms of Use says premium may be one-time or subscription monthly/annual; landing does not specify.

### Is data/privacy positioning clear?

- **Strong** on-page privacy positioning:
  - “No ads. No data selling. No tracking.”
  - Explicit “We do not use Firebase, Google Analytics, or any other analytics or crash reporting services.”
- **Detailed** in Privacy Policy:
  - What data is stored (lists categories)
  - How stored (on-device default; optional iCloud sync)
  - Clear “What We Do NOT Do” list

---

## Website Truth Summary

- **What the website claims Scoopy Log is**
  - A “simple daily tracker” / “calm daily log” for parents of babies/toddlers to log routines (sleep, feeding, diapers, growth), review records, share with caregivers, and export PDF reports (Captain’s Log).

- **Where claims may exceed confirmed app reality (risk flags)**
  - **Social proof**: “4.9 rating” and “Join thousands of parents...” are presented without attribution.
  - **Absolute language**: “Nothing to set up, nothing to manage.” and “complete care history” can be interpreted broadly.
  - **Health-adjacent phrasing**: “stay on top of your baby's health” + pediatrician framing increases scrutiny; disclaimer exists but only on Terms page.

- **Overall risk level**: **Medium**
  - **Why**: The functional claims are mostly scoped and plausible, and legal disclaimers are strong; however, unattributed rating/scale claims and medical-adjacent framing (without on-page disclaimer) create avoidable compliance/credibility exposure.

