---
layout: post
title: "An AI Travel Agent in Action: A Detailed Look at How Two Agents Plan a Trip"
date: 2025-06-18
description: Published in the Google Cloud Community on Medium. Demonstrating practical task orchestration and protocol delegation between multi-vendor AI agents.
redirect: https://medium.com/google-cloud/an-ai-travel-agent-in-action-a-detailed-look-at-how-two-agents-plan-a-trip-86a1735368e1
tags: a2a-framework mcp multi-agent interoperability
categories: insights
---

The future of Artificial Intelligence is intrinsically collaborative. Complex tasks are best handled by a decentralized team of specialized AI agents working together across boundaries. 

In this technical breakdown published on Medium, I analyze a cross-agent travel scenario to show how two crucial industry standards—Google’s Agent-to-Agent (A2A) protocol and Anthropic’s Model Context Protocol (MCP)—join forces to create a highly interoperable system using a flight-booking scenario (New York to Paris).

### Dual-Protocol Architectural Layout:

* **The Scenario Setup:** The system utilizes a user-facing **Travel Planner Agent** (the high-level strategist that lacks built-in search functions) and a specialized **Flight Booker Agent** (the technical execution specialist with access to live travel APIs).
* **Step 1: The A2A Delegation Loop (Agent-to-Agent):** To delegate work, the Travel Planner reads the Flight Booker's machine-readable **Agent Card**—a digital business card specifying its endpoints and capability schemas (like `find_flights`). The Planner issues an A2A work order over HTTP with a distinct `task_id`, structured payloads containing inputs (`departure_city`, `arrival_city`, `date`), and a target execution `callback_url`.
* **Step 2: The MCP Execution Loop (Agent-to-Tool):** Upon receiving the task, the Flight Booker needs to hit the live Airline Global Distribution System (GDS) API. Instead of fighting with a custom API wrapper, it acts as an **MCP Client**, reading the GDS API’s **MCP Server** capability manifests. It passes native parameters to the `search_one_way_flights` tool layer, executing an open, universal communication cycle.
* **Step 3: Completion and Synthesis:** The GDS tool returns raw seat JSON data via MCP to the Flight Booker. The Booker processes and cleanses the raw parameters, translates the list into an optimal user arrangement, and calls the original A2A callback URL to return a completed status string seamlessly to the root Planner.