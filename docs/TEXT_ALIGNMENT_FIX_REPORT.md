# Text Alignment Fix Report

**Date:** 2026-01-30  
**Purpose:** Ensure factual accuracy and alignment with real app behavior  
**Scope:** TEXT-ONLY changes (no design modifications)

---

## Summary

Updated the Scoopy Log landing website and legal pages to ensure all text accurately reflects the app's actual functionality. Removed claims about analytics, insights, or analysis. Clarified data storage, privacy, and payment handling. Replaced analysis/interpretation language with record-keeping verbs (log, record, review, export, document).

---

## Files Modified

1. `privacy.html` - Privacy Policy
2. `terms.html` - Terms of Use
3. `index.html` - Landing page

---

## Changes by File

### 1. privacy.html

#### Change 1: Added Intended Users Statement
**Section:** "What Data We Store"  
**Before:**
```html
<h2>What Data We Store</h2>
<p>Scoopy Log stores data that you enter into the app:</p>
```

**After:**
```html
<h2>What Data We Store</h2>
<p><strong>Intended Users:</strong> Scoopy Log is intended for use by parents or legal guardians. Children do not use the app directly.</p>
<p>Scoopy Log stores data that you enter into the app:</p>
```

**Reason:** Required clarification that the app is for parents/guardians, not children.

---

#### Change 2: Enhanced Data Storage Clarification
**Section:** "How Data Is Stored"  
**Before:**
```html
<p>Your data is stored on your device by default. All tracking entries and profile information remain on your iPhone or iPad.</p>
<p><strong>Optional iCloud Sync:</strong> If you choose to enable iCloud sync, your data may be stored in your personal iCloud account. This is optional and controlled by you.</p>
```

**After:**
```html
<p><strong>On-Device Storage:</strong> Your data is stored on your device by default. All tracking entries and profile information remain on your iPhone or iPad. We do not have access to data stored on your device.</p>
<p><strong>Optional iCloud Sync:</strong> If you choose to enable iCloud sync, your data may be stored in your personal iCloud account. This is optional and controlled by you. When you use iCloud sync, your data is stored in your private iCloud account, which is managed by Apple. We do not have access to your iCloud data. iCloud sync is private and encrypted by Apple's infrastructure.</p>
```

**Reason:** Required explicit clarification that:
- Data is stored on-device
- Company has no access to on-device data
- iCloud sync is optional and private
- Company has no access to iCloud data

---

### 2. terms.html

#### Change 1: Clarified Premium Feature Description
**Section:** "Premium Features"  
**Before:**
```html
<p>Scoopy Log offers a premium feature: <strong>Captain's Log (PDF)</strong> export.</p>
<p>This is a paid feature that allows you to export your logged data as a PDF document. Pricing and availability are determined by the App Store.</p>
<p class="small">Specific pricing and terms are displayed in the App Store at the time of purchase.</p>
```

**After:**
```html
<p>Scoopy Log offers a premium feature: <strong>Exporting Captain's Log (PDF)</strong>, a structured document of user-recorded data.</p>
<p>This feature allows you to export your logged data as a PDF document. All payments and subscriptions are handled exclusively by Apple through the App Store. Pricing and renewal terms are shown in the App Store at the time of purchase.</p>
<p class="small">Specific pricing, payment terms, and subscription management are controlled by Apple and displayed in the App Store.</p>
```

**Reason:** 
- Ensured premium is described ONLY as PDF export (no analytics/insights)
- Clarified that all payments are handled by Apple
- Made it explicit that pricing is shown in App Store

---

### 3. index.html

#### Change 1: Updated Pricing Section Header
**Section:** "Pricing"  
**Before:**
```html
<h2>Simple, transparent pricing</h2>
```

**After:**
```html
<h2>Pricing</h2>
<p style="text-align: center; margin-bottom: var(--spacing-xl); color: var(--text-secondary);">All purchases are made via the App Store. Pricing and subscription terms are shown in the App Store.</p>
```

**Reason:** Removed marketing language, added clear statement about App Store purchases.

---

#### Change 2: Removed Specific Price from Premium Card
**Section:** "Pricing" - Premium card  
**Before:**
```html
<div class="pricing-amount">$4.99<span class="pricing-period">/month</span></div>
```

**After:**
```html
<div class="pricing-amount">Premium</div>
```

**Reason:** Do not display specific prices; pricing is shown in App Store.

---

#### Change 3: Removed "Advanced Analytics" Feature
**Section:** "Pricing" - Premium card  
**Before:**
```html
<li>
  <svg>...</svg>
  Advanced analytics
</li>
<li>
  <svg>...</svg>
  Priority support
</li>
```

**After:**
```html
<!-- "Advanced analytics" removed -->
<!-- "Priority support" removed -->
```

**Reason:** Premium feature is ONLY PDF export. No analytics, insights, or analysis features exist.

---

#### Change 4: Added App Store Purchase Statement to Premium Card
**Section:** "Pricing" - Premium card  
**After:**
```html
<p style="margin-top: var(--spacing-lg); font-size: 14px; color: var(--text-secondary);">All purchases are made via the App Store. Pricing and subscription terms are shown in the App Store.</p>
```

**Reason:** Required clarification that all purchases go through App Store.

---

#### Change 5: Updated Free Card Pricing Display
**Section:** "Pricing" - Free card  
**Before:**
```html
<div class="pricing-amount">$0</div>
```

**After:**
```html
<div class="pricing-amount">Free</div>
```

**Reason:** Consistency with Premium card (no specific prices displayed).

---

#### Change 6: Replaced "Understand Patterns" with "Review Records"
**Section:** "How it helps parents" - Sleep card  
**Before:**
```html
<p>Track nap times and overnight sleep to understand your baby's patterns.</p>
```

**After:**
```html
<p>Track nap times and overnight sleep to review your baby's records.</p>
```

**Reason:** Removed analysis/interpretation language. App records data; users review it.

---

#### Change 7: Replaced "Clear Patterns" with "Review Records"
**Section:** "Why parents choose" - Patterns card  
**Before:**
```html
<h3>Clear patterns</h3>
<p>See daily and weekly patterns at a glance to understand what's working.</p>
```

**After:**
```html
<h3>Review records</h3>
<p>View daily and weekly records at a glance to review your logged data.</p>
```

**Reason:** Removed analysis/interpretation language ("understand what's working"). Changed to record-keeping verbs.

---

#### Change 8: Updated Free Plan Feature Description
**Section:** "Pricing" - Free card  
**Before:**
```html
View daily patterns
```

**After:**
```html
Review daily records
```

**Reason:** Consistency with global copy changes (patterns → records, view → review).

---

#### Change 9: Removed "Summaries and Patterns" from Captain's Log
**Section:** "Captain's Log"  
**Before:**
```html
<p>Perfect for pediatrician visits, care transitions, or your own records. The Captain's Log includes all logged activities organized by date, with clear summaries and patterns.</p>
```

**After:**
```html
<p>Perfect for pediatrician visits, care transitions, or your own records. The Captain's Log includes all logged activities organized by date.</p>
```

**Reason:** Removed "summaries and patterns" - the PDF is a structured document of user-recorded data, not an analysis.

---

## Language Changes Summary

### Verbs Replaced
- "understand" → "review" / "view"
- "analyze" → removed
- "interpret" → removed
- "optimize" → removed

### Nouns Replaced
- "patterns" → "records" (where appropriate)
- "analytics" → removed
- "insights" → removed
- "summaries" → removed
- "recommendations" → removed

### Preferred Verbs (Now Used)
- log
- record
- review
- export
- document
- view

---

## Verification Checklist

- ✅ Privacy Policy: On-device storage clarified
- ✅ Privacy Policy: iCloud sync privacy clarified
- ✅ Privacy Policy: Company access to data denied
- ✅ Privacy Policy: Parent/guardian usage stated
- ✅ Terms of Use: Premium = PDF export only
- ✅ Terms of Use: Apple payment handling clarified
- ✅ Landing Page: "Advanced analytics" removed
- ✅ Landing Page: Specific prices removed
- ✅ Landing Page: App Store purchase statement added
- ✅ Global Copy: Analysis language removed/replaced
- ✅ Global Copy: Record-keeping verbs used

---

## Notes

- No design changes were made
- All changes are text-only
- Pricing section now accurately reflects that pricing is shown in App Store
- Premium feature is correctly described as PDF export only
- All analysis/interpretation claims removed
- Data storage and privacy statements are explicit and accurate

---

## Files Status

All files have been updated and are ready for review. The website text now accurately represents the app's functionality without making claims about analytics, insights, or analysis capabilities.
