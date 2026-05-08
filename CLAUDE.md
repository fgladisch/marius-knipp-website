# Marius Knipp Website

## Workflow

After completing each task, verify the implementation using Playwright by navigating to the local dev server (http://localhost:3000) and checking that the changes render correctly in the browser.

## Overview

A portfolio website for Marius Knipp, a product and industrial designer specializing in spatial design, trade fair construction, retail design, and branding. The design is a single-page layout with distinct sections.

## Design Source

The design is accessible in Figma in the frame "Final Draft" in the project "Marius Website".

## Git Commits

Format: `<gitmoji> <type>: <description>`

| Gitmoji | Use         |
| ------- | ----------- |
| ✨      | New feature |
| 🐛      | Bug fix     |
| ♻️      | Refactor    |
| ✅      | Tests       |
| 📝      | Docs        |
| 🔥      | Remove code |

## MCP Servers

The following MCP servers are available:

### figma-desktop

Use for working with Figma designs. Key tools:

- `get_design_context` - Generate UI code from Figma designs (preferred)
- `get_screenshot` - Capture screenshots of Figma nodes
- `get_metadata` - Get structure overview in XML format
- `get_variable_defs` - Get design token/variable definitions
- `create_design_system_rules` - Generate design system rules

### context7

Use for retrieving up-to-date library documentation and code examples:

- `resolve-library-id` - Find Context7 library ID (call first)
- `query-docs` - Query documentation for a specific library

### playwright

Use for browser automation and testing:

- `browser_navigate` - Navigate to URLs
- `browser_snapshot` - Capture accessibility snapshot (preferred over screenshots)
- `browser_click`, `browser_type`, `browser_fill_form` - Interact with elements
- `browser_take_screenshot` - Capture visual screenshots
- `browser_console_messages` - Get console output
- `browser_network_requests` - Monitor network activity
