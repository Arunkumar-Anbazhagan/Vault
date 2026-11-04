---
type: Note
---
#

# 23:41

Key Capabilities Delivered

FTS5 Search with Ranking & Operator Query Parser

BM25 Relevance Ranking: Updated SQLDelight queries to sort matching notes with ORDER BY notes.isPinned DESC, bm25(note_fts) ASC, notes.lastModified DESC.
Prefix Matching & Token Translation: Enhanced SearchQueryParser.toFtsMatchQuery to produce column-specific FTS5 match clauses (title: term\*, tags: tag\*, folderPath: folder\*, "exact phrase").
Extended Search Operators: Added support for folder:, -folder:, title:, -title:, file:, path:, tag:, and exact phrases.

Block References & Section Embeds

Obsidian-Compatible Block Syntax: Handled [[Note#^blockId]] and embeds ![[Note#^blockId]].
Block Extraction Engine: Implemented NoteEmbedHelper.extractBlock in shared/core-markdown, extracting paragraph or list item blocks while cleanly stripping block markers.
WikiLink Parser Upgrades: Updated WikiLinkParser and ParsedWikiLink with isBlockRef: Boolean and blockId: String?.

Folder Notes & Alias Disambiguation

Folder Note Resolution: Supported folder notes in LinkResolver.kt and NoteEmbedHelper.kt, resolving folder targets to folder/folder.md, folder/\_index.md, or folder/index.md.
Case-Insensitive Disambiguation: Resolves aliases and note titles, preferring siblings in the same directory.

Hierarchical Tags & Tag Browser

Nested Tag Tree: Introduced TagHierarchy.kt (TagTreeNode and TagHierarchyBuilder), building parent-child trees from tags like #work/project/alpha.
Interactive Sidebar Tag Browser: Replaced flat tag listings in LeftSidebarDrawer.kt with an expandable, indented tree view showing direct and cumulative counts.

Calendar View, Weekly Notes & "On This Day"

Interactive Calendar Dialog: Implemented CalendarViewDialog.kt with month navigation, indicators for dates containing notes, and one-tap daily note creation.
Weekly Notes Generation: Added ISO week format (YYYY-Www.md) template instantiation in TemplateManager.kt.
"On This Day" Memory Recall: Scans notes created or updated on the same day/month in prior years.

Task Aggregation with Due Dates & WorkManager Reminders

Task Parser: Implemented TaskParser.kt scanning - [ ] ... 📅 YYYY-MM-DD and - [x] across all vault notes.
Tasks Dashboard Dialog: Built TasksDashboardDialog.kt with filters (Pending, Due Today, Overdue, Completed, All) and atomic checkbox toggling writing back to files.
WorkManager Reminders: Implemented TaskReminderWorker.kt and TaskReminderScheduler.kt for background reminders.

Spaced Repetition Flashcards (SM-2)

Card Formats: Added FlashcardParser.kt parsing Q:: A, cloze deletions (==cloze== or {{c1::answer}}), and multi-line (Front \n ? \n Back).
SuperMemo-2 Scheduler: Implemented SpacedRepetitionScheduler.kt computing intervals and easiness factors.
Git-Friendly Storage: Stored review intervals in .nool/reviews.json with deterministic key ordering.
Review UI: Built FlashcardReviewDialog.kt with card flip, progress bar, and 4-tier rating (Again, Hard, Good, Easy).

File Watching Abstraction

Implemented JvmWatchServiceVaultWatcher.kt using Java NIO WatchService for JVM/desktop environments, joining Android's FileObserver behind the common VaultWatcher interface.
