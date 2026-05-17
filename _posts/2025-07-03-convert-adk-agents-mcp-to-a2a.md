---
layout: post
title: A guide to converting ADK agents with MCP to the A2A framework
date: 2025-07-03
description: Published on the Google Cloud Blog. Authored a step-by-step engineering guide for upgrading standalone ADK agents with MCP tools into interoperable Agent-to-Agent (A2A) ecosystems.
redirect: https://cloud.google.com/blog/products/ai-machine-learning/unlock-ai-agent-collaboration-convert-adk-agents-for-a2a
tags: google-adk mcp a2a-framework multi-agent
categories: google-cloud-blog
---

In this hands-on engineering guide published on the Google Cloud Blog, I outline how to break down the boundaries of standalone AI applications by upgrading Google Agent Development Kit (ADK) agents into fully cooperative components using the Agent-to-Agent (A2A) framework. 

By wrapping a standalone agent—specifically a `MultiURLBrowser` initialized with a `firecrawl-mcp` tool execution set—into the universal A2A protocol, we allow disparate agentic microservices to dynamically discover, communicate, and delegate tasks to one another.

### Step-by-Step Refactoring Blueprint:

* **Step 1: Define the Core Agent and its MCP Tool (`agent.py`)**
  The foundation relies on setting up the core execution logic. Inside `agent.py`, the `_build_agent` method initializes the foundational ADK `LlmAgent` (running on `gemini-1.5-pro-preview-0514`) and links its corresponding `MCPToolset` to launch and manage the `firecrawl-mcp` stdio server parameter requirements securely.
* **Step 2: Establish a Public Identity (`__main__.py`)**
  For secondary enterprise networks to seamlessly discover your microservice, it must broadcast its unique capabilities. This is achieved by creating an explicit `AgentSkill` declaration (specifying identifiers, descriptive schemas, and usage examples like web scraping execution intents) paired with an `AgentCard` metadata anchor exposing endpoint networking variables.
* **Step 3: Implement the A2A Task Manager (`task_manager.py`)**
  The ultimate operational bridge relies on inheriting the A2A server's `AgentExecutor` interface. By overriding the asynchronous `execute` and `cancel` method loops, the manager intercepts remote pipeline invocations, wraps runtime state updates via a localized `TaskUpdater`, and pushes streaming structural outputs back to the orchestration cluster smoothly.