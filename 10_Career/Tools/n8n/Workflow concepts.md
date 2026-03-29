---
created: 2026-01-04
type: video-notes
tags: [n8n, automation, workflow-design, triggers, branching, logic]
source: https://youtu.be/kkrA7tGHYNo
instructor: Maxim
status: in-progress
---

# 🏗️ Core Workflow Concepts (n8n Beginner Course)

**Instructor:** Maxim
**Video:** [n8n Beginner Course (5/9) - Core workflow concepts](https://youtu.be/kkrA7tGHYNo?si=5ex1uIxYBec3aHdF)

## 📌 The n8n Canvas
* **Overview**: The central workspace where you build workflows. It contains the nodes (atoms/building blocks) and connection lines [[00:00:28](https://youtu.be/kkrA7tGHYNo?t=28)].
* **Workflow Menu**: Located at the top left (name, tags, status) and top right (version history, settings) [[00:00:36](https://youtu.be/kkrA7tGHYNo?t=36)].
* **Activation Switch**: Located at the top right. Must be toggled to "Active" for triggers (like schedules/webhooks) to run automatically in production [[00:01:03](https://youtu.be/kkrA7tGHYNo?t=63)].

## ⚡ Triggers & Activation
* **Visual Identity**: Triggers have an orange lightning bolt icon and *only* an output handle (no input) [[00:02:31](https://youtu.be/kkrA7tGHYNo?t=151)].
* **Function**: They start the execution. You can have multiple triggers in one workflow (e.g., Manual + Scheduled) [[00:02:49](https://youtu.be/kkrA7tGHYNo?t=169)].
* **The Rule of Activation**: Triggers like "Schedule" will only fire automatically if the workflow is set to **Active**. If inactive, they only run when you manually click "Execute" [[00:02:58](https://youtu.be/kkrA7tGHYNo?t=178)].

## 🌿 Branching Logic
Branching allows you to create complex paths. There are two distinct ways to branch in n8n.

### 1. Conditional Branching (Splitting)
* **Concept**: Items are *split* between paths based on criteria. Each item goes to *only one* path [[00:04:18](https://youtu.be/kkrA7tGHYNo?t=258)].
* **Example**: Using an **If Node**.
    * Items matching the condition go to the **True** output.
    * Items failing the condition go to the **False** output.
    * *Result*: 10 items in → 5 True, 5 False (Total is still 10) [[00:04:27](https://youtu.be/kkrA7tGHYNo?t=267)].

### 2. Parallel Branching (Duplicating)
* **Concept**: Created by dragging multiple connection lines from a single node's output to different nodes [[00:04:56](https://youtu.be/kkrA7tGHYNo?t=296)].
* **Result**: *Every* item is sent to *all* connected paths.
* *Example*: 10 items in → 10 items go to Path A **AND** 10 items go to Path B (Total is now 20 processing events) [[00:12:43](https://youtu.be/kkrA7tGHYNo?t=763)].

## 🛠️ Practical Demo: Filtering & Logic
* **Goal**: Process a list of contacts from Google Sheets and separate professional emails from personal ones.
* **Step 1: Clean Data (Filter Node)**:
    * Remove rows where the email is empty or invalid.
    * Condition used: `Email` `is not equal to` `[Empty String]` [[00:08:58](https://youtu.be/kkrA7tGHYNo?t=538)].
* **Step 2: Split Data (If Node)**:
    * Separate emails that are "Gmail" or "Hotmail" from company domains.
    * **Logic Trap**: When excluding multiple things (No Gmail AND No Hotmail), use the **AND** operator, not OR [[00:11:38](https://youtu.be/kkrA7tGHYNo?t=698)].
    * *Expression*: `Email` `does not contain` `gmail` **AND** `Email` `does not contain` `hotmail`.

***

**Next Video Topic**: [00:13:22](https://youtu.be/kkrA7tGHYNo?t=802) Useful nodes for building workflows.