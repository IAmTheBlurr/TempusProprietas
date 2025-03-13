# Tempus Proprietas: Instructing an LLM
The following markdown is meant to be provided as instructions to an LLM along with contextual data to be assessed and analyzed utilizing these instructions.

The output from using this instructive prompt is meant to lists of ordered todos within one of the 5 buckets deriving from the additionally provided contextual information provided to the LLM.

```markdown
# Instructions

## Purpose
**Tempus Proprietas** builds on Brian Tracy’s ABC123 technique, a time management strategy that prioritizes tasks by categorizing them into five levels (**A through E**) based on importance and urgency, then numbering them within each category for execution order. These instructions equip an LLM to:

- **Extract tasks** from any text, even if unprioritized or ambiguous.
- **Categorize tasks** into **A, B, C, D, or E** using clear criteria.
- **Order tasks** within each category (e.g., **A1, A2, B1**).
- **Handle uncertainty** with reasoned decision-making.

---

## Definitions of Each Letter Group
Each category reflects a task’s **importance** (impact on goals or outcomes) and **urgency** (time sensitivity). Below are detailed definitions with fundamental mappings:

### A Tasks
- **Definition:** Critical tasks that must be done. Failure to complete them results in significant negative consequences (e.g., legal, financial, safety, or reputational damage).
- **Mapped Meaning:** **“Do-or-die”** priorities requiring immediate attention.
- **Guiding Questions:** Will not doing this cause serious harm? Is there a tight deadline?

### B Tasks
- **Definition:** Important tasks that should be done. They support key goals but have moderate consequences if delayed.
- **Mapped Meaning:** **“Value-adding”** tasks that enhance outcomes without immediate pressure.
- **Guiding Questions:** Does this contribute to critical goals? Can it wait without major issues?

### C Tasks
- **Definition:** Nice-to-do tasks that could be done. They offer benefits but have minor consequences if skipped.
- **Mapped Meaning:** **“Enhancement”** tasks—helpful but not essential.
- **Guiding Questions:** Would this be beneficial but not critical? Is the impact low if ignored?

### D Tasks
- **Definition:** Low-priority tasks that can be delegated or postponed. They have negligible immediate consequences.
- **Mapped Meaning:** **“Deferrable”** tasks—worth doing eventually or by someone else.
- **Guiding Questions:** Can this be handed off or delayed without issue?

### E Tasks
- **Definition:** Optional tasks that might be eliminated. They have no significant impact if not done.
- **Mapped Meaning:** **“Expendable”** tasks—purely discretionary.
- **Guiding Questions:** Is this unnecessary? Can it be dropped without consequence?

---

## Mechanics of Relationships
- Tasks **decrease in priority from A to E**.
- **A tasks** take precedence over all others.
- **B tasks** support A tasks or medium-term goals.
- **C, D, and E tasks** are progressively less critical.
- Tasks can **shift categories** as circumstances change (e.g., a **B task** becomes **A** if its deadline nears).

---

## Detection Mechanisms
To categorize tasks from contextual details, the LLM assesses **importance** and **urgency** using:

### Importance Indicators
- **Keywords:** “critical,” “essential,” “priority,” “key,” “must.”
- **Context:** Ties to major goals (e.g., revenue, safety), assigned by authority figures, or linked to high-stakes outcomes.

### Urgency Indicators
- **Keywords:** “due by,” “ASAP,” “urgent,” “deadline.”
- **Context:** Explicit timelines or implied time sensitivity (e.g., “before the meeting”).

### Text Analysis
- For **unstructured data**, parse sentences or paragraphs to identify **verbs** (e.g., “complete,” “fix”) and their **objects** (e.g., “report,” “bug”) as tasks.
- Use surrounding language to **infer priority** (e.g., “this is vital” suggests A).

---

## Examples for Each Category

### Workplace Scenario
- **A:** “Submit quarterly financial report by 5 PM today.”
    - **Reason:** Legal deadline, high financial impact.
- **B:** “Draft proposal for next month’s client pitch.”
    - **Reason:** Important for future revenue, not urgent.
- **C:** “Update team calendar with holidays.”
    - **Reason:** Helpful for planning, low impact if delayed.
- **D:** “Research new CRM software options.”
    - **Reason:** Useful but deferrable or delegable.
- **E:** “Read industry newsletter.”
    - **Reason:** Informational, optional.

### Personal Scenario
- **A:** “Pay electricity bill by tomorrow.”
    - **Reason:** Avoids service cutoff, urgent.
- **B:** “Plan weekend hiking trip.”
    - **Reason:** Important for relaxation, not immediate.
- **C:** “Organize bookshelf.”
    - **Reason:** Nice to do, no real consequence.
- **D:** “Browse new recipe ideas.”
    - **Reason:** Can be postponed or skipped.
- **E:** “Scroll social media.”
    - **Reason:** Purely optional, eliminable.

---

## Numbered Ordering Within a Letter Group
Ordering reflects **urgency, impact, or dependency**.

### Workplace A Tasks
- **A1:** “Submit financial report by 5 PM today.”
    - **Reason:** Earliest deadline, legal consequence.
- **A2:** “Fix server outage affecting clients.”
    - **Reason:** High impact, urgent but no fixed deadline.

### Workplace B Tasks
- **B1:** “Draft client pitch for next month.”
    - **Reason:** Supports revenue goals, higher impact.
- **B2:** “Schedule team training.”
    - **Reason:** Important but less tied to immediate outcomes.

### Personal A Tasks
- **A1:** “Pay electricity bill by tomorrow.”
    - **Reason:** Tighter deadline.
- **A2:** “Book dentist appointment for cavity.”
    - **Reason:** Health-related, urgent but flexible timing.

---

## Handling Ambiguity
When priority is unclear:

1. **Analyze Language**
    - “Must” or “urgent” → **A**
    - “Should” or “soon” → **B**
    - “Could” or “nice” → **C/D/E**

2. **Infer from Context**
    - Tasks tied to **goals or authority figures** lean toward **A/B**
    - Standalone or vague tasks lean toward **C/D/E**

3. **Conservative Categorization**
    - If **potentially important**, default to **B over C**
    - If **potentially urgent**, default to **A over B**

4. **Reasoning Check**
    - Cross-reference with other tasks or goals in the text.

**Example**
- **Text:** “Need to call Sarah about the project.”
- **Ambiguity:** No deadline or impact specified.
- **Resolution:** Check context—
    - If **“project” is urgent**, classify as **A**
    - Otherwise, **B or C**

---

## Reasoning Steps for the LLM
1. **Extract Tasks** (e.g., “finish report,” “call client”).
2. **Assess Importance** (keywords, context).
3. **Assess Urgency** (deadlines, time cues).
4. **Categorize** (assign **A–E** based on definitions).
5. **Order Within Categories** (by urgency, impact, or dependency).
6. **Review** (adjust if new details emerge or reasoning shifts).

> **Note:** **Tempus Proprietas** emphasizes iterative mastery of time. Re-evaluate priorities as context evolves.

---

## Output Structure
Present the prioritized list as follows:

### Prioritized Task List

#### A Tasks (Critical)
- **A1:** [Task] - [Reason]
- **A2:** [Task] - [Reason]

#### B Tasks (Important)
- **B1:** [Task] - [Reason]
- **B2:** [Task] - [Reason]

#### C Tasks (Nice to Do)
- **C1:** [Task] - [Reason]

#### D Tasks (Low Priority)
- **D1:** [Task] - [Reason]

#### E Tasks (Optional)
- **E1:** [Task] - [Reason]

**Example Output**  
**Text:** “Finish report by Friday, call Tom about budget, plan team outing, read article.”

#### A Tasks (Critical)
- **A1:** Finish report by Friday - Deadline, likely high impact.

#### B Tasks (Important)
- **B1:** Call Tom about budget - Budget-related, unclear urgency.

#### C Tasks (Nice to Do)
- **C1:** Plan team outing - Beneficial, no deadline.

#### E Tasks (Optional)
- **E1:** Read article - Informational, eliminable.
```