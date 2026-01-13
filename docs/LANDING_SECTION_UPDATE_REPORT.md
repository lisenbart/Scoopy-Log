# Landing Section Update Report

**Date:** 2026-01-30  
**Section:** "Simple by design"  
**Purpose:** Replace tracker-focused content with product value-focused content

---

## Summary

Updated the "Simple by design" section to focus on product value rather than individual trackers. The section now explains what the app provides (calm daily log, everyday usability, PDF export) rather than listing specific tracking features.

---

## Section Details

**Section Name:** "Simple by design"  
**Section ID:** `#simple-design`  
**Location:** `index.html`, lines 893-948

---

## Changes Made

### Card 1: Removed → Added

**OLD:**
- **Title:** "Track sleep patterns"
- **Text:** None (only title)
- **Visual:** Sleep tracker UI placeholder

**NEW:**
- **Title:** "A calm daily log"
- **Text:** "Keep a simple, private record of your baby's daily routines. No advice. No pressure. Just clear notes you can trust."
- **Visual:** Abstract log/journal UI placeholder (neutral lines, calm colors)

**Reason:** Shifted from feature (tracking sleep) to value (calm, private record-keeping). Emphasizes trust and simplicity over specific functionality.

---

### Card 2: Removed → Added

**OLD:**
- **Title:** "Log feeding times"
- **Text:** None (only title)
- **Visual:** Feeding tracker UI placeholder

**NEW:**
- **Title:** "Designed for everyday life"
- **Text:** "Log moments as they happen. Nothing to set up, nothing to manage. The app stays out of your way."
- **Visual:** Time-of-day markers UI placeholder (neutral, minimal)

**Reason:** Shifted from feature (feeding tracking) to value (ease of use, no setup burden). Emphasizes the app's unobtrusive nature and everyday usability.

---

### Card 3: Removed → Added

**OLD:**
- **Title:** "Monitor diapers"
- **Text:** None (only title)
- **Visual:** Diapers tracker UI placeholder

**NEW:**
- **Title:** "Captain's Log (PDF)"
- **Text:** "When you need it, export a clear, well-structured PDF with your records — calm, readable, and yours to keep."
- **Visual:** PDF document UI placeholder (clean document layout)

**Reason:** Shifted from feature (diaper tracking) to value (PDF export capability). Highlights the premium feature (Captain's Log) as a benefit rather than listing another tracker.

---

## Content Strategy

### What Was Removed
- ❌ Specific tracker mentions (sleep, feeding, diapers)
- ❌ Feature-focused language
- ❌ Implicit feature listing

### What Was Added
- ✅ Value-focused messaging (calm, trust, simplicity)
- ✅ Product philosophy alignment (Calm Confidence)
- ✅ Premium feature highlight (Captain's Log PDF)
- ✅ Everyday usability emphasis
- ✅ No setup/management burden messaging

### Language Constraints Respected
- ✅ No mention of sleep, feeding, diapers, or trackers by name
- ✅ No analytics, insights, patterns, or improvement language
- ✅ Calm, adult, factual tone maintained
- ✅ No medical language
- ✅ No onboarding or step-by-step language

---

## Visual Updates

### Card Structure
- Maintained existing `screenshot-item` structure
- Updated SVG placeholders to reflect new content intent:
  - Card 1: Abstract log/journal (lines, neutral colors)
  - Card 2: Time markers (minimal, calm)
  - Card 3: PDF document (clean layout)

### Typography
- Added `h3` styling for card titles
- Updated `p` styling for card descriptions (lighter weight, secondary color)
- Maintained existing spacing and layout

---

## Before → After Comparison

### Before (Tracker-Focused)
```
Card 1: "Track sleep patterns"
Card 2: "Log feeding times"
Card 3: "Monitor diapers"
```

### After (Value-Focused)
```
Card 1: "A calm daily log" + value text
Card 2: "Designed for everyday life" + value text
Card 3: "Captain's Log (PDF)" + value text
```

---

## Alignment with Product Philosophy

The updated content aligns with the core philosophy "Calm Confidence":

- **Calm:** "calm daily log", "calm, readable", "stays out of your way"
- **Confidence:** "notes you can trust", "clear, well-structured", "yours to keep"
- **No pressure:** "No advice. No pressure."
- **Simplicity:** "Nothing to set up, nothing to manage"

---

## Files Modified

1. `index.html`
   - Section content (lines 897-946)
   - CSS styling for `.screenshot-item h3` and `.screenshot-item p` (lines 419-430)

---

## Verification

- ✅ Section title unchanged ("Simple by design")
- ✅ Section structure unchanged (3 cards in grid)
- ✅ No new sections added
- ✅ No layout/spacing changes
- ✅ Tracker names removed
- ✅ Value-focused messaging added
- ✅ Premium feature (PDF) highlighted
- ✅ Tone remains calm, adult, factual

---

## Notes

The visual placeholders (SVG) were updated to reflect the new content intent but remain abstract. Final visual design will be implemented by designers based on the visual intent descriptions provided in the task requirements.
