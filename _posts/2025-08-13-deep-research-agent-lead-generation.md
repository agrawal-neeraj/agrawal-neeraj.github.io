---
layout: post
title: How to build a deep research agent for lead generation using Google’s ADK
date: 2025-08-13
description: Published on the Google Cloud Blog. Architecting a hierarchical, parallelized multi-agent system for complex analytical workflows.
redirect: https://cloud.google.com/blog/products/ai-machine-learning/build-a-deep-research-agent-with-google-adk/
tags: google-adk multi-agent research-agents genai
categories: google-cloud-blog
---

In this architecture blueprint published on the Google Cloud Blog, I detail how to move beyond static scripts and brittle scrapers by building a sophisticated, multi-agent lead generation system utilizing Google's Agent Development Kit (ADK).

Rather than relying on a single monolithic prompt, this system decomposes the problem into discrete phases, managing state transitions across user interactions and orchestrating parallel execution workflows.

### Architectural Breakdown:

* **Step 1: The Primary Orchestrator:** At the core of the architecture sits a root agent named `InteractiveLeadGenerator`. Running on `gemini-2.5-pro`, its job is to manage the high-level workflow, delegate to specialized sub-agents via localized tools, and interact directly with the user.
* **Step 2: Intent Extraction:** Before running complex workflows, the root agent utilizes a specialized `intent_extractor_agent` (running on `gemini-2.5-flash`) driven by an explicit `INTENT_EXTRACTOR_PROMPT` to parse the user's initial request into structured data (`IntentExtractionResult`).
* **Step 3: Dual-Squad Workflows:** The system splits execution into two clear pipelines:
  * **The Research Squad (Learning from the Past):** A cohort of cooperative agents tasked with executing pattern discovery workflows to discover the signals of success across historical data.
  * **The Hunter Squad (Predicting the Future):** A cohort that uses those confirmed signals to execute the actual lead generation workflow and target matching prospects.
* **Step 4: Control Mechanisms:** To maintain deterministic boundaries, the system uses precise control mechanisms like `before_agent_callback` and `after_tool_callback` hooks to safely track state updates and maintain absolute conversation context.