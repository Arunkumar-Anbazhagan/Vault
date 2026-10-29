# Reel Breakdown
URL: https://www.instagram.com/reel/DbqM-xgTNG7/
Author: Shyam GM | Video Editor (@theshyamgm) - 359K followers
Posted: 2026-08-05
Likes: 53,722 | Comments: 65
Hashtags: #tamiltutorial #editing #tamil #videoediting
Language: Tamil voiceover

## What is shown
A quick After Effects workflow to keep a face centered / stabilized while the camera moves, using a wedding song clip as example.

## Steps shown in the video

1. OPEN AFTER EFFECTS
   - Software: Adobe After Effects 2026
   - Splash screen shown: Artwork by Anastasia Knypyts

2. IMPORT FOOTAGE
   - File imported: Wedding Song.mp4 (82.4 MB, QuickTime)
   - Drag to timeline to create new Composition: Wedding Song
   - Comp Settings: 1920x1080, 23.976 fps

3. OPEN TRACKER PANEL
   - Right panel > Tracker
   - Buttons: Track Camera / Warp Stabilizer / Stabilize Motion / Track Motion
   - Select: Track Motion
   - Motion Source: Wedding Song.mp4
   - Track Type: Stabilize
   - Current Track: Tracker 1
   - Track Target: Wedding Song.mp4

4. PLACE TRACK POINT ON FACE
   - In Viewer: Track Point 1 appears
   - Move / Resize the tracker box to the subject's face (the man in maroon kurta dancing)
   - Ensure the inner feature box is on high-contrast area (eyes / nose)

5. MOTION TRACKER OPTIONS
   - Click Options...
   - Track Name: Tracker 1
   - Tracker Plug-in: Built-in
   - Channel: Luminance (instead of RGB / Saturation)
   - Checked: Track Fields, Subpixel Positioning, Adapt Feature On Every Frame
   - If Confidence is Below: 80% -> Stop Tracking / Adapt Feature

6. ANALYZE FORWARD
   - Click the Play Forward button (Analyze: >) in Tracker panel
   - After Effects tracks the face frame-by-frame
   - You see the dotted track path with hundreds of keyframes following the head movement

7. APPLY TRACKING DATA
   - Click Apply
   - Motion Tracker Apply Options: Apply Dimensions: X and Y
   - Click OK
   - This creates keyframes on Position (and Scale if enabled) under Layer > Transform

8. RESULT
   - Final playback: Footage is now stabilized around the face
   - The subject stays locked in center while background moves around him
   - Same effect used in the intro examples (red party dance, military dance, denim jacket dance)

## Key Settings to Replicate
- Tracker Type: Stabilize (not Track Motion for this effect)
- Track Point: 1 point only, on face
- Channel: Luminance for better contrast
- Subpixel Positioning: ON
- Adapt Feature: ON

## Use Cases
- Viral Reels / Dance videos - face stays centered
- Wedding / event highlights
- Music video edits
- Stabilize shaky handheld shots