// ============================================================
//  modules.js — All lesson content lives here
//  To add a new lesson: copy a module block and fill it in.
//  videoId: the part after "watch?v=" in any YouTube URL
//  e.g. https://www.youtube.com/watch?v=Fi3AJZZregI → "Fi3AJZZregI"
// ============================================================

const MODULES = [

  // ── LEVEL 100s : FOUNDATIONS ────────────────────────────

  {
    id: '101',
    level: 'Level 101',
    series: 'Foundations',
    title: 'Ask, Edit & Agent — Copilot Chat Modes in VS Code',
    duration: '80 min',
    videoId: 's7Qzq0ejhjg', // ← Paste YouTube video ID here
    objectives: [
      'Understand the three core chat modes: Ask, Edit, and Agent',
      'Know when to choose each mode for different coding tasks',
      'Use @workspace to give Copilot full project context',
      'Navigate and accept or reject Copilot suggestions confidently'
    ],
    takeaways: [
      'Ask mode is for exploration and questions — no files are changed automatically',
      'Edit mode proposes changes in a diff view so you can review before accepting',
      'Agent mode can autonomously navigate your project, run terminal commands, and fix its own errors',
      'Context is everything — the more relevant context you provide, the better results you get'
    ],
    resources: [
      { title: 'GitHub Copilot Chat in VS Code (official docs)', url: 'https://code.visualstudio.com/docs/copilot/copilot-chat' },
      { title: 'GitHub Copilot overview', url: 'https://docs.github.com/en/copilot/using-github-copilot/copilot-chat/asking-github-copilot-questions-in-your-ide' }
    ],
    quiz: [
      {
        question: 'What are the three main chat modes in GitHub Copilot for VS Code?',
        type: 'single',
        options: ['Ask, Edit, Agent', 'Code, Chat, Voice', 'Inline, Panel, Terminal', 'Ask, Generate, Debug'],
        answer: 0
      },
      {
        question: 'Which mode is best for exploring a codebase and asking questions WITHOUT automatically modifying any files?',
        type: 'single',
        options: ['Agent', 'Ask', 'Edit', 'Inline Completion'],
        answer: 1
      },
      {
        question: 'In Edit mode, how does Copilot present code changes to you?',
        type: 'single',
        options: ['It writes directly into files without asking', 'It opens a diff/review view so you can accept or reject each change', 'It automatically creates a new Git branch', 'It opens a pull request on GitHub'],
        answer: 1
      },
      {
        question: 'Which statement about Agent mode is most accurate?',
        type: 'single',
        options: ['It can only read files, not edit them', 'It can autonomously run terminal commands and validate results in a loop', 'It requires a GitHub Enterprise license', 'It only supports JavaScript and Python files'],
        answer: 1
      },
      {
        question: 'What does @workspace do when used in Copilot Chat?',
        type: 'single',
        options: ['It opens all files in separate editor tabs', 'It gives Copilot context about your entire project structure', 'It syncs your local workspace to GitHub.com', 'It runs all unit tests in the workspace'],
        answer: 1
      },
      {
        question: 'Which chat modes can make edits to your files? (Select all that apply)',
        type: 'multi',
        options: ['Ask', 'Edit', 'Agent', 'View'],
        answers: [1, 2]
      },
      {
        question: 'What key advantage does Agent mode have over Edit mode?',
        type: 'single',
        options: ['Agent mode is always faster', 'Agent mode can iterate — run code, observe errors, and fix them automatically', 'Edit mode cannot handle multi-file changes', 'Agent mode works fully offline'],
        answer: 1
      }
    ]
  },

  {
    id: '102',
    level: 'Level 102',
    series: 'Foundations',
    title: 'Hands-On Lab — The Power of GitHub Copilot in VS Code',
    duration: '63 min',
    videoId: 'dxDqelvVc2U',
    objectives: [
      'Experience inline code completions and understand how they work',
      'Use Copilot to generate functions, tests, and documentation from comments',
      'Navigate multi-line suggestions and partial completions',
      'Recognize situations where Copilot excels and where to be cautious'
    ],
    takeaways: [
      'Inline completions trigger as you type — Tab accepts, Escape dismisses',
      'Writing a descriptive comment above a function dramatically improves suggestion quality',
      'Copilot is a collaborator, not a replacement — always review what it generates',
      'You can cycle through multiple suggestions using Alt+] and Alt+[ on Windows/Linux'
    ],
    resources: [
      { title: 'VS Code Copilot keyboard shortcuts', url: 'https://code.visualstudio.com/docs/copilot/copilot-chat#_keyboard-shortcuts' },
      { title: 'GitHub Copilot quickstart', url: 'https://docs.github.com/en/copilot/quickstart' }
    ],
    quiz: [
      {
        question: 'How do you accept an inline code suggestion from GitHub Copilot?',
        type: 'single',
        options: ['Ctrl+Enter', 'Tab', 'Space', 'Enter'],
        answer: 1
      },
      {
        question: 'What is the best way to guide Copilot toward the function you want it to write?',
        type: 'single',
        options: ['Write a vague comment like "// do stuff"', 'Write a detailed comment describing inputs, outputs, and behavior', 'Use very long function names only', 'Leave the file completely empty'],
        answer: 1
      },
      {
        question: 'Copilot generates suggestions based on which of the following? (Select all that apply)',
        type: 'multi',
        options: ['The current file content', 'Other open files in your editor', 'Your GitHub profile description', 'The file name and language type'],
        answers: [0, 1, 3]
      },
      {
        question: 'What should you always do with Copilot-generated code before committing it?',
        type: 'single',
        options: ['Nothing — Copilot is always correct', 'Review it for correctness, security, and style', 'Run it through a separate AI model for validation', 'Delete the original comment prompt'],
        answer: 1
      },
      {
        question: 'Which of the following tasks is GitHub Copilot particularly good at? (Select all that apply)',
        type: 'multi',
        options: ['Generating boilerplate code', 'Writing unit tests for existing functions', 'Making architecture decisions for your company', 'Writing JSDoc or inline documentation'],
        answers: [0, 1, 3]
      },
      {
        question: 'How can you view alternative suggestions when Copilot shows an inline completion?',
        type: 'single',
        options: ['Right-click on the suggestion', 'Use Alt+] / Alt+[ to cycle, or open Copilot panel with Ctrl+Enter', 'Type "next suggestion" in the editor', 'Press F1 and search for suggestions'],
        answer: 1
      }
    ]
  },

  // ── LEVEL 200s : PROMPT ENGINEERING ────────────────────

  {
    id: '201',
    level: 'Level 201',
    series: 'Prompt Engineering',
    title: 'Prompt Engineering Foundations — Simple, Specific, Short',
    duration: '12 min',
    videoId: 'hh1nOX14TyY',
    objectives: [
      'Apply the three core principles: Simple, Specific, Short',
      'Distinguish between high-quality and low-quality prompts',
      'Provide context effectively without overwhelming the model',
      'Iterate on prompts to progressively improve output quality'
    ],
    takeaways: [
      'Vague prompts produce vague code — specificity is the single biggest lever you have',
      '"Simple" means one task at a time, not dumbing down your request',
      '"Short" means no unnecessary padding — every word should earn its place',
      'Including examples (few-shot prompting) is one of the most effective prompt techniques'
    ],
    resources: [
      { title: 'GitHub Copilot prompting guide', url: 'https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot' },
      { title: 'Anthropic prompt engineering guide', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' }
    ],
    quiz: [
      {
        question: 'What do the "3 S\'s" of good Copilot prompting stand for?',
        type: 'single',
        options: ['Simple, Specific, Short', 'Smart, Structured, Sequential', 'Syntactic, Semantic, Specific', 'Standard, Shared, Sequential'],
        answer: 0
      },
      {
        question: 'Which of the following is an example of a POOR prompt?',
        type: 'single',
        options: ['"Add input validation to the email field in LoginForm.tsx to reject malformed addresses"', '"Fix my code"', '"Refactor getUserById to use async/await instead of callbacks and add JSDoc comments"', '"Write a unit test for calculateTotal that covers edge cases including empty arrays"'],
        answer: 1
      },
      {
        question: 'What does "Simple" mean in the context of Copilot prompting?',
        type: 'single',
        options: ['Use childlike language', 'Ask one task at a time — don\'t combine unrelated requests', 'Always keep prompts under 10 words', 'Never use technical terminology'],
        answer: 1
      },
      {
        question: 'Which technique helps Copilot most when generating code that follows a pattern you already use?',
        type: 'single',
        options: ['Asking Copilot to search Stack Overflow', 'Providing an example of what you want (few-shot prompting)', 'Using only single-word prompts', 'Opening as many files as possible'],
        answer: 1
      },
      {
        question: 'What should you include in a prompt to maximize the quality of suggestions? (Select all that apply)',
        type: 'multi',
        options: ['The programming language or framework', 'Relevant constraints or edge cases to handle', 'Your personal opinion about the language', 'Expected inputs and outputs'],
        answers: [0, 1, 3]
      },
      {
        question: 'What is the best approach when a Copilot suggestion doesn\'t meet your expectations?',
        type: 'single',
        options: ['Restart VS Code', 'Refine your prompt — add more context, be more specific, or break the task down', 'Accept it and manually fix it every time', 'Switch to a different code editor'],
        answer: 1
      }
    ]
  },

  {
    id: '211',
    level: 'Level 211',
    series: 'Prompt Engineering',
    title: 'Custom Chat Modes in VS Code — From Workflow to Beast Mode',
    duration: '32 min',
    videoId: '5-HRDXO3iC0',
    objectives: [
      'Understand what custom chat modes are and how they differ from default modes',
      'Create a .chatmode.md file to define a reusable workflow prompt',
      'Use custom modes to enforce consistent behavior for repeated tasks',
      'Share chat mode files with your team via version control'
    ],
    takeaways: [
      'Custom chat modes are system-level instructions that shape how Copilot responds in that mode',
      'A .chatmode.md file lives in your .github/ folder and can be committed to your repo',
      'Great use cases: code review mode, documentation mode, refactoring mode, PR description mode',
      'Custom modes can reference other files and tools, making them composable'
    ],
    resources: [
      { title: 'VS Code custom chat modes (docs)', url: 'https://code.visualstudio.com/docs/copilot/chat/chat-modes' },
      { title: 'GitHub .github folder convention', url: 'https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file' }
    ],
    quiz: [
      {
        question: 'Where does a custom chat mode file live in your project?',
        type: 'single',
        options: ['In the root of the project as chatmode.json', 'In .github/ as a .chatmode.md file', 'In node_modules/', 'In the VS Code settings.json file'],
        answer: 1
      },
      {
        question: 'What is the primary purpose of a custom chat mode?',
        type: 'single',
        options: ['To restrict Copilot from accessing certain files', 'To define reusable system instructions that shape how Copilot responds', 'To change the VS Code color theme', 'To create new keyboard shortcuts'],
        answer: 1
      },
      {
        question: 'Which of the following would make a good custom chat mode? (Select all that apply)',
        type: 'multi',
        options: ['A "Code Review" mode that checks for security issues', 'A "Documentation Writer" mode that generates JSDoc comments', 'A mode that changes your monitor brightness', 'A "PR Description" mode that generates structured pull request summaries'],
        answers: [0, 1, 3]
      },
      {
        question: 'How can you share a custom chat mode with your entire team?',
        type: 'single',
        options: ['Email the file to each team member manually', 'Commit the .chatmode.md file to your shared Git repository', 'Upload it to the VS Code Marketplace', 'Export it from VS Code settings sync'],
        answer: 1
      },
      {
        question: 'What makes custom chat modes "composable"?',
        type: 'single',
        options: ['They can be written in any programming language', 'They can reference other files, tools, and instructions, building on each other', 'They automatically compose music while you code', 'They combine multiple VS Code extensions'],
        answer: 1
      }
    ]
  },

  {
    id: '221',
    level: 'Level 221',
    series: 'Prompt Engineering',
    title: 'Plan Agent in VS Code — From Idea to Reviewable Steps',
    duration: '8 min',
    videoId: 'xR3fuKtWGN0',
    objectives: [
      'Use the Plan agent to break a large feature request into reviewable steps',
      'Edit and refine the generated plan before execution begins',
      'Understand when planning mode adds value versus when to go straight to implementation',
      'Review the plan output and iterate until it matches your intent'
    ],
    takeaways: [
      'Planning mode generates a structured step-by-step breakdown before writing any code',
      'You can edit, reorder, or remove plan steps before confirming — giving you full control',
      'Planning is most valuable for multi-file changes or complex new features',
      'A good plan = a good result; time spent reviewing the plan saves debugging time later'
    ],
    resources: [
      { title: 'Copilot Edits and Agent mode (VS Code docs)', url: 'https://code.visualstudio.com/docs/copilot/copilot-edits' }
    ],
    quiz: [
      {
        question: 'What does the Plan agent do before writing any code?',
        type: 'single',
        options: ['It immediately starts editing all files', 'It generates a step-by-step plan for you to review and approve first', 'It creates a new Git branch automatically', 'It deploys your app to a staging environment'],
        answer: 1
      },
      {
        question: 'When is planning mode most useful?',
        type: 'single',
        options: ['When fixing a single typo', 'When implementing a multi-file feature or complex change', 'When running unit tests', 'When changing a color variable in CSS'],
        answer: 1
      },
      {
        question: 'What can you do with a generated plan before execution? (Select all that apply)',
        type: 'multi',
        options: ['Edit individual steps', 'Remove steps you don\'t want', 'Reorder the sequence of steps', 'Add steps Copilot missed'],
        answers: [0, 1, 2, 3]
      },
      {
        question: 'Why does investing time in reviewing the plan help you overall?',
        type: 'single',
        options: ['It makes the code run faster', 'Catching a wrong approach at the plan stage is much cheaper than debugging generated code', 'Plans are automatically shared with your manager', 'It unlocks extra Copilot features'],
        answer: 1
      }
    ]
  },

  {
    id: '231',
    level: 'Level 231',
    series: 'Prompt Engineering',
    title: 'Behind the Scenes of VS Code\'s Planning Agent',
    duration: '28 min',
    videoId: 'S9GZWSNOPK8',
    objectives: [
      'Understand how the planning agent assembles context from your codebase',
      'Learn why context window limits affect the quality of generated plans',
      'Recognize the difference between shallow and deep context gathering',
      'Apply this knowledge to write better prompts for the planning agent'
    ],
    takeaways: [
      'The planning agent reads file structure, open files, and your instructions to build a context window',
      'Context window limits mean not everything in your project can be included — Copilot makes decisions about what\'s most relevant',
      'Attaching the right files explicitly improves plan quality significantly',
      'Understanding the internals helps you debug why a plan misses something and how to fix it'
    ],
    resources: [
      { title: 'Context window and Copilot (GitHub docs)', url: 'https://docs.github.com/en/copilot/using-github-copilot/copilot-chat/asking-github-copilot-questions-in-your-ide' }
    ],
    quiz: [
      {
        question: 'What does the planning agent use to build its understanding of your project?',
        type: 'single',
        options: ['Only the file you currently have open', 'File structure, open files, attached context, and your written instructions', 'Only your package.json or requirements.txt', 'Your GitHub commit history'],
        answer: 1
      },
      {
        question: 'Why can\'t the planning agent always read every file in a large project?',
        type: 'single',
        options: ['It doesn\'t have file system access', 'Context windows have token limits — not everything fits', 'Large projects require a paid enterprise license', 'VS Code limits file access for security'],
        answer: 1
      },
      {
        question: 'What is the most effective action you can take to improve plan quality on a large project?',
        type: 'single',
        options: ['Delete unused files first', 'Explicitly attach the most relevant files to your chat context', 'Ask Copilot to summarize the whole project first', 'Open all files in separate tabs'],
        answer: 1
      },
      {
        question: 'Understanding how the planning agent works internally helps you do which of the following? (Select all that apply)',
        type: 'multi',
        options: ['Write better-targeted prompts', 'Debug why a plan seems to miss important context', 'Decide which files to attach for a given request', 'Understand why sometimes a plan is shallow'],
        answers: [0, 1, 2, 3]
      }
    ]
  },

  // ── LEVEL 300s : CUSTOMIZATION ──────────────────────────

  {
    id: '301',
    level: 'Level 301',
    series: 'Customization',
    title: 'Smaller Prompts, Better Answers — Copilot Custom Instructions',
    duration: '13 min',
    videoId: 'zwIlqbTHjac',
    objectives: [
      'Create a .github/copilot-instructions.md file in your repository',
      'Write effective repository-level instructions that persist across all sessions',
      'Use custom instructions to enforce team coding standards automatically',
      'Understand the difference between prompt-level and instruction-level guidance'
    ],
    takeaways: [
      'Custom instructions are loaded automatically by Copilot every time you open that repository',
      'This means you don\'t have to repeat yourself in every chat — the instructions are always there',
      'Great things to put in instructions: coding style preferences, framework conventions, things to avoid',
      'Instructions work best when they are specific, actionable rules rather than vague preferences'
    ],
    resources: [
      { title: 'Custom instructions for GitHub Copilot', url: 'https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot' }
    ],
    quiz: [
      {
        question: 'Where does the Copilot custom instructions file live in a project?',
        type: 'single',
        options: ['.vscode/instructions.json', '.github/copilot-instructions.md', 'copilot.config.js in the project root', '.copilot/settings.yml'],
        answer: 1
      },
      {
        question: 'When are repository-level custom instructions loaded?',
        type: 'single',
        options: ['Only when you explicitly mention them in a chat prompt', 'Automatically every time you use Copilot in that repository', 'Once per VS Code session, regardless of which project is open', 'Only in Agent mode'],
        answer: 1
      },
      {
        question: 'Which of the following are good things to include in custom instructions? (Select all that apply)',
        type: 'multi',
        options: ['Preferred coding style (e.g. "use functional components, not class components")', 'Frameworks and libraries your project uses', 'Your personal biography', 'Patterns or approaches to avoid in this codebase'],
        answers: [0, 1, 3]
      },
      {
        question: 'What is the main benefit of using custom instructions vs. typing the same context in every prompt?',
        type: 'single',
        options: ['Instructions are processed faster by the AI', 'You don\'t have to repeat yourself — context is always present automatically', 'Instructions are encrypted for security', 'Instructions allow Copilot to access the internet'],
        answer: 1
      },
      {
        question: 'What makes a custom instruction effective?',
        type: 'single',
        options: ['Making it as long as possible with lots of background story', 'Being specific and actionable — concrete rules rather than vague preferences', 'Writing it in a programming language like Python', 'Using ALL CAPS for important rules'],
        answer: 1
      }
    ]
  },

  {
    id: '311',
    level: 'Level 311',
    series: 'Customization',
    title: 'Customizing Copilot in VS Code',
    duration: '11 min',
    videoId: 'WdZCv4OZcxM',
    objectives: [
      'Configure Copilot settings in VS Code for your preferred workflow',
      'Enable or disable inline suggestions for specific languages',
      'Adjust suggestion delay, length, and behavior',
      'Manage which files and folders Copilot has access to'
    ],
    takeaways: [
      'VS Code settings (settings.json) give you fine-grained control over Copilot\'s behavior',
      'You can exclude specific file types or paths from Copilot suggestions for privacy or focus',
      'Keyboard shortcuts for Copilot can be rebound in VS Code\'s keybindings editor',
      'Per-language settings let you turn Copilot on or off for specific file types'
    ],
    resources: [
      { title: 'Configuring GitHub Copilot in your environment', url: 'https://docs.github.com/en/copilot/configuring-github-copilot/configuring-github-copilot-in-your-environment' },
      { title: 'VS Code settings reference', url: 'https://code.visualstudio.com/docs/getstarted/settings' }
    ],
    quiz: [
      {
        question: 'Where do you configure GitHub Copilot behavior in VS Code?',
        type: 'single',
        options: ['Directly on github.com', 'In VS Code Settings (settings.json or the Settings UI)', 'In a separate Copilot desktop app', 'In your GitHub profile README'],
        answer: 1
      },
      {
        question: 'How can you disable Copilot inline suggestions for a specific language (e.g. Markdown)?',
        type: 'single',
        options: ['You cannot — it\'s all or nothing', 'Using the github.copilot.enable setting with a per-language override', 'By uninstalling and reinstalling the extension', 'By signing out of GitHub in VS Code'],
        answer: 1
      },
      {
        question: 'Why might you want to exclude certain files from Copilot\'s access?',
        type: 'single',
        options: ['To make VS Code load faster', 'To prevent Copilot from seeing sensitive files like .env or credentials', 'To reduce your GitHub Copilot subscription cost', 'Exclusions are required by GitHub Terms of Service'],
        answer: 1
      },
      {
        question: 'Which VS Code feature allows you to change the keyboard shortcut for accepting Copilot suggestions?',
        type: 'single',
        options: ['The Command Palette search box', 'The Keybindings editor (Ctrl+K Ctrl+S)', 'A separate Copilot keybindings app', 'The VS Code marketplace extension page'],
        answer: 1
      }
    ]
  },

  {
    id: '321',
    level: 'Level 321',
    series: 'Customization',
    title: 'VS Code Agent Mode — Building With Tools, Docs & MCP',
    duration: '22 min',
    videoId: 'dutyOc_cAEU',
    objectives: [
      'Understand what "tools" are in the context of Agent mode',
      'Attach documentation files (#file) to give Copilot precise API knowledge',
      'Connect an MCP server to extend Copilot with external data and actions',
      'Build multi-step workflows where Copilot uses tools in sequence'
    ],
    takeaways: [
      'Tools are functions that Agent mode can call — including running code, searching files, and reading web docs',
      'Using #file:docs/api.md in a prompt gives Copilot exact, up-to-date API context',
      'MCP (Model Context Protocol) lets you plug in external tools — databases, web search, GitHub issues, etc.',
      'Chaining tools together is where Agent mode becomes truly powerful'
    ],
    resources: [
      { title: 'Using tools with Copilot agent mode', url: 'https://code.visualstudio.com/docs/copilot/copilot-extensibility-overview' },
      { title: 'Model Context Protocol introduction', url: 'https://modelcontextprotocol.io/introduction' }
    ],
    quiz: [
      {
        question: 'What is a "tool" in the context of GitHub Copilot Agent mode?',
        type: 'single',
        options: ['A VS Code extension', 'A function that Agent mode can call to take actions (run code, read files, query APIs)', 'A GitHub Actions workflow', 'A custom keyboard shortcut'],
        answer: 1
      },
      {
        question: 'How do you give Copilot precise context about a specific file (like your API docs)?',
        type: 'single',
        options: ['Paste the entire file contents manually into every prompt', 'Use #file:path/to/file.md in your chat prompt', 'Upload the file to GitHub and share the URL', 'Enable "full context mode" in VS Code settings'],
        answer: 1
      },
      {
        question: 'What does MCP stand for in the context of GitHub Copilot?',
        type: 'single',
        options: ['Multi-Code Processor', 'Model Context Protocol', 'Microsoft Copilot Platform', 'Managed Code Pipeline'],
        answer: 1
      },
      {
        question: 'Which of the following could be connected to Copilot via an MCP server? (Select all that apply)',
        type: 'multi',
        options: ['A database query tool', 'External web search', 'A GitHub Issues reader', 'An internal company knowledge base'],
        answers: [0, 1, 2, 3]
      },
      {
        question: 'What makes chaining tools in Agent mode powerful?',
        type: 'single',
        options: ['It runs multiple Copilot windows simultaneously', 'Copilot can use the output of one tool as input to the next, completing complex workflows autonomously', 'It bypasses the context window limit', 'It allows offline usage'],
        answer: 1
      }
    ]
  },

  {
    id: '331',
    level: 'Level 331',
    series: 'Customization',
    title: 'Level Up Your VS Code Productivity — Mastering AI Workflows',
    duration: '28 min',
    videoId: '0XoXNG65rfg',
    objectives: [
      'Build a personal productivity workflow combining Copilot with VS Code features',
      'Use keyboard shortcuts to stay in flow without reaching for the mouse',
      'Leverage multi-root workspaces for cross-project Copilot suggestions',
      'Create workflow templates for common developer tasks'
    ],
    takeaways: [
      'The best workflows minimize context-switching — keep your hands on the keyboard',
      'Multi-root workspaces let Copilot understand relationships between separate projects',
      'Creating snippets and chat templates for repeated tasks multiplies your output',
      'Measuring your own before/after productivity helps you improve and justify AI tooling to your team'
    ],
    resources: [
      { title: 'VS Code productivity tips', url: 'https://code.visualstudio.com/docs/getstarted/tips-and-tricks' },
      { title: 'Multi-root workspaces in VS Code', url: 'https://code.visualstudio.com/docs/editor/multi-root-workspaces' }
    ],
    quiz: [
      {
        question: 'What is a multi-root workspace in VS Code?',
        type: 'single',
        options: ['A workspace with multiple color themes', 'A single VS Code window that contains two or more separate project folders', 'A workspace saved to a network drive', 'A VS Code feature that requires GitHub Copilot Enterprise'],
        answer: 1
      },
      {
        question: 'Why do multi-root workspaces improve Copilot suggestions for full-stack developers?',
        type: 'single',
        options: ['They load files faster', 'Copilot can understand the relationship between your frontend and backend code simultaneously', 'They reduce subscription costs', 'They enable offline mode'],
        answer: 1
      },
      {
        question: 'Which of the following strategies help maintain "flow" while using Copilot? (Select all that apply)',
        type: 'multi',
        options: ['Learning keyboard shortcuts for common Copilot actions', 'Creating reusable prompt templates for repeated tasks', 'Switching to a different IDE for every task', 'Keeping frequently referenced docs attached in your workspace'],
        answers: [0, 1, 3]
      },
      {
        question: 'What is the most effective way to measure whether AI tools are improving your productivity?',
        type: 'single',
        options: ['Count how many lines of code you generate', 'Track time spent on specific task types before and after adopting AI tools', 'Count how many suggestions you accept', 'Ask your manager for an assessment'],
        answer: 1
      }
    ]
  },

  // ── LEVEL 300s : ADVANCED ──────────────────────────────

  {
    id: '341',
    level: 'Level 341',
    series: 'Advanced',
    title: 'Beast Mode — Custom Chat Modes & Alternative Prompts',
    duration: '91 min',
    videoId: '0Muxg3xhRLo',
    objectives: [
      'Combine custom instructions, chat modes, and agent tools into a unified "beast mode" workflow',
      'Design prompt strategies for complex, multi-step engineering tasks',
      'Build a personal library of high-performing prompts for your domain',
      'Evaluate and iterate on prompts systematically'
    ],
    takeaways: [
      '"Beast mode" means all the dials are turned up: custom instructions + custom mode + MCP tools + rich context',
      'A prompt library stored in your repo means the whole team benefits from best practices',
      'Meta-prompting (asking Copilot to improve your own prompt) is a powerful iteration technique',
      'The goal is not to type less — it\'s to get dramatically better results per interaction'
    ],
    resources: [
      { title: 'GitHub Copilot extensibility overview', url: 'https://docs.github.com/en/copilot/building-copilot-extensions/about-building-copilot-extensions' }
    ],
    quiz: [
      {
        question: 'What does "beast mode" refer to in the context of this lesson?',
        type: 'single',
        options: ['A special paid tier of GitHub Copilot', 'Combining custom instructions, custom chat modes, tools, and rich context for maximum effectiveness', 'Enabling all VS Code extensions at once', 'A hidden VS Code keyboard shortcut'],
        answer: 1
      },
      {
        question: 'What is "meta-prompting"?',
        type: 'single',
        options: ['Prompting from a mobile device', 'Asking Copilot to critique and improve your own prompts', 'Writing prompts using metadata files', 'Using Copilot to write other AI prompts for different models'],
        answer: 1
      },
      {
        question: 'Why is storing a prompt library in your Git repository valuable?',
        type: 'single',
        options: ['It reduces storage costs', 'The whole team can benefit from and contribute to proven, high-performing prompts', 'It counts toward your commit history', 'GitHub Copilot requires a prompt library to activate'],
        answer: 1
      },
      {
        question: 'Which elements can be combined to create a maximum-effectiveness Copilot workflow? (Select all that apply)',
        type: 'multi',
        options: ['Repository custom instructions', 'A domain-specific custom chat mode', 'MCP tools for external data', 'Explicitly attached reference files for context'],
        answers: [0, 1, 2, 3]
      },
      {
        question: 'What is the primary goal of advanced prompt engineering?',
        type: 'single',
        options: ['To type as few characters as possible', 'To get dramatically better, more accurate results per AI interaction', 'To impress colleagues with complex prompts', 'To reduce the number of files in your project'],
        answer: 1
      }
    ]
  },

  {
    id: '351',
    level: 'Level 351',
    series: 'Advanced',
    title: 'Agent Skills — A Practical Guide',
    duration: '22 min',
    videoId: 'fabAI1OKKww',
    objectives: [
      'Understand what agent skills are and how they differ from built-in tools',
      'Browse and evaluate available skills for your workflow',
      'Invoke skills explicitly in agent mode prompts',
      'Understand the security model around skills and when to trust them'
    ],
    takeaways: [
      'Skills are packaged, reusable agent capabilities — think of them like apps for your AI',
      'Some skills are built-in (run tests, search files); others are installed via extensions or MCP',
      'Explicitly naming a skill in your prompt ensures Copilot uses it',
      'Always review what a skill does before deploying it in a production context'
    ],
    resources: [
      { title: 'GitHub Copilot skills and tools', url: 'https://code.visualstudio.com/docs/copilot/copilot-extensibility-overview' }
    ],
    quiz: [
      {
        question: 'What is an agent skill in the context of Copilot?',
        type: 'single',
        options: ['A Copilot subscription tier', 'A packaged, reusable capability that the agent can invoke to perform a specific task', 'A GitHub Actions job template', 'A VS Code snippet'],
        answer: 1
      },
      {
        question: 'How do you ensure Copilot uses a specific skill in your agent mode prompt?',
        type: 'single',
        options: ['Skills are always selected automatically — you can\'t influence the choice', 'Name the skill explicitly in your prompt so Copilot knows to invoke it', 'Open the skill file before starting the conversation', 'Enable the skill in settings.json first'],
        answer: 1
      },
      {
        question: 'What should you do before using a third-party skill in an important project?',
        type: 'single',
        options: ['Nothing — all skills are verified by GitHub', 'Review what the skill does and understand its permissions and data access', 'Run it once on a test project and check the output', 'Both B and C — review and test it first'],
        answer: 3
      },
      {
        question: 'Which of the following are examples of agent skills? (Select all that apply)',
        type: 'multi',
        options: ['A skill that searches your codebase for usages', 'A skill that reads and writes GitHub issues', 'A skill that adjusts your monitor brightness', 'A skill that fetches documentation from a URL'],
        answers: [0, 1, 3]
      }
    ]
  },

  {
    id: '361',
    level: 'Level 361',
    series: 'Advanced',
    title: 'Let It Code — Agent Skills (skills.md) in VS Code',
    duration: '41 min',
    videoId: 'rIrxkB-02P0',
    objectives: [
      'Create and configure a skills.md file for your project',
      'Define custom skills that Copilot can invoke autonomously',
      'Chain multiple skills together for complex automated workflows',
      'Understand the difference between skills.md and copilot-instructions.md'
    ],
    takeaways: [
      'skills.md is a project-level file that defines what the agent is allowed to do autonomously',
      'Unlike instructions (which shape tone/style), skills define discrete actions and their triggers',
      'Well-defined skills let you say "run the full test suite and fix failures" and walk away',
      'The key to effective skills is clear, unambiguous descriptions of inputs, outputs, and conditions'
    ],
    resources: [
      { title: 'VS Code agent skills documentation', url: 'https://code.visualstudio.com/docs/copilot/copilot-extensibility-overview' }
    ],
    quiz: [
      {
        question: 'What is the role of skills.md in a project?',
        type: 'single',
        options: ['It stores your npm scripts', 'It defines custom, project-specific capabilities that the Copilot agent can invoke autonomously', 'It replaces package.json', 'It defines TypeScript type aliases'],
        answer: 1
      },
      {
        question: 'What is the key difference between skills.md and copilot-instructions.md?',
        type: 'single',
        options: ['skills.md is for frontend projects, instructions.md is for backend', 'Instructions shape behavior and tone; skills define discrete, triggerable actions', 'They are two names for the same file', 'skills.md is read by GitHub Actions, not Copilot'],
        answer: 1
      },
      {
        question: 'What makes a skill definition effective?',
        type: 'single',
        options: ['Making it as short as possible', 'Clear, unambiguous descriptions of inputs, outputs, preconditions, and what success looks like', 'Using code comments instead of markdown', 'Defining the skill in YAML format'],
        answer: 1
      },
      {
        question: 'What can you do when skills are well-defined? (Select all that apply)',
        type: 'multi',
        options: ['Give the agent a high-level goal and let it run autonomously', 'Chain multiple skills in sequence for complex workflows', 'Have confidence the agent won\'t exceed the defined boundaries', 'Share skills across projects via version control'],
        answers: [0, 1, 2, 3]
      }
    ]
  },

  // ── LEVEL 400s : DEEP DIVES ─────────────────────────────

  {
    id: '401',
    level: 'Level 401',
    series: 'Deep Dives',
    title: 'Model Context Protocol (MCP) — A Standard for Tool Access',
    duration: '26 min',
    videoId: '7j_NE6Pjv-E',
    objectives: [
      'Explain what MCP is and why it was created',
      'Understand the client-server architecture of MCP',
      'Distinguish between MCP tools, resources, and prompts',
      'Connect an MCP server to Copilot in VS Code'
    ],
    takeaways: [
      'MCP is an open standard (from Anthropic) that lets AI models connect to any external tool or data source in a uniform way',
      'The architecture is simple: an MCP client (Copilot/VS Code) connects to an MCP server that exposes tools, resources, and prompts',
      'Tools = actions the AI can invoke; Resources = data it can read; Prompts = reusable instructions',
      'Any developer can write an MCP server — making it infinitely extensible'
    ],
    resources: [
      { title: 'Model Context Protocol official site', url: 'https://modelcontextprotocol.io/introduction' },
      { title: 'MCP servers directory', url: 'https://github.com/modelcontextprotocol/servers' },
      { title: 'VS Code MCP documentation', url: 'https://code.visualstudio.com/docs/copilot/chat/mcp-servers' }
    ],
    quiz: [
      {
        question: 'What is the Model Context Protocol (MCP)?',
        type: 'single',
        options: ['A GitHub Copilot pricing tier', 'An open standard for connecting AI models to external tools and data sources in a uniform way', 'A VS Code extension packaging format', 'A Microsoft internal API'],
        answer: 1
      },
      {
        question: 'Who created and open-sourced the MCP standard?',
        type: 'single',
        options: ['Microsoft', 'Anthropic', 'OpenAI', 'Google DeepMind'],
        answer: 1
      },
      {
        question: 'In the MCP architecture, what role does VS Code (with Copilot) play?',
        type: 'single',
        options: ['MCP server', 'MCP client', 'MCP proxy', 'MCP registry'],
        answer: 1
      },
      {
        question: 'In MCP terminology, what is a "Tool"?',
        type: 'single',
        options: ['A VS Code extension', 'An action that the AI model can invoke on the MCP server', 'A type of prompt template', 'A file that the AI can read'],
        answer: 1
      },
      {
        question: 'What are the three primitive types exposed by an MCP server? (Select all that apply)',
        type: 'multi',
        options: ['Tools (actions)', 'Resources (readable data)', 'Prompts (reusable instructions)', 'Themes (UI customization)'],
        answers: [0, 1, 2]
      },
      {
        question: 'Why is MCP\'s open standard approach significant?',
        type: 'single',
        options: ['It locks developers into using only Microsoft-approved tools', 'Any developer can build an MCP server for any tool, making the ecosystem infinitely extensible', 'It requires a paid GitHub subscription to use', 'It only works with cloud-hosted services'],
        answer: 1
      }
    ]
  },

  {
    id: '411',
    level: 'Level 411',
    series: 'Deep Dives',
    title: 'Most Devs Don\'t Understand How Context Windows Work',
    duration: '15 min',
    videoId: '-uW5-TaVXu4',
    objectives: [
      'Define what a context window is and how it is measured in tokens',
      'Understand what content gets included in a context window during a Copilot session',
      'Identify what causes context to degrade or become "stale" in a long session',
      'Apply strategies to manage context window health'
    ],
    takeaways: [
      'The context window is the total amount of information the AI model can "see" at one time — measured in tokens',
      'Each message, code file, and tool result consumes tokens — when the window fills, earlier content is dropped',
      'Starting a new chat clears the context — sometimes a fresh start gets better results than a long degraded session',
      'Strategic context management (attaching right files, clearing old sessions) is a superpower'
    ],
    resources: [
      { title: 'Understanding tokens and context windows', url: 'https://docs.github.com/en/copilot/using-github-copilot/copilot-chat/asking-github-copilot-questions-in-your-ide' }
    ],
    quiz: [
      {
        question: 'What is a "context window" in the context of an AI model like Copilot?',
        type: 'single',
        options: ['The VS Code editor window size', 'The total amount of text/information the model can process at one time, measured in tokens', 'The number of files open in VS Code', 'The size of your project folder'],
        answer: 1
      },
      {
        question: 'What is a "token" in AI terms?',
        type: 'single',
        options: ['Your GitHub authentication token', 'Roughly a word or part of a word — the unit by which context window size is measured', 'A single line of code', 'A VS Code extension license'],
        answer: 1
      },
      {
        question: 'What happens when a conversation exceeds the context window limit?',
        type: 'single',
        options: ['Copilot stops responding entirely', 'Earlier messages and context are dropped, which can degrade the quality of responses', 'VS Code crashes', 'Your GitHub account is charged extra'],
        answer: 1
      },
      {
        question: 'Which of the following consume tokens in a Copilot session? (Select all that apply)',
        type: 'multi',
        options: ['Your chat messages', 'Attached file contents', 'Copilot\'s own responses', 'Tool/MCP call results'],
        answers: [0, 1, 2, 3]
      },
      {
        question: 'What is often the best fix when you notice Copilot giving worse responses later in a long session?',
        type: 'single',
        options: ['Restart your computer', 'Start a fresh chat with a well-structured context summary', 'Clear the VS Code cache', 'Upgrade your GitHub Copilot plan'],
        answer: 1
      }
    ]
  },

  {
    id: '421',
    level: 'Level 421',
    series: 'Deep Dives',
    title: 'Stop Wasting Tokens — The Art of Context Engineering',
    duration: '30 min',
    videoId: 'zMM5zqesL1g',
    objectives: [
      'Apply deliberate strategies to maximize the useful information per token',
      'Prioritize which files and content to include in a context window',
      'Recognize and eliminate common forms of context waste',
      'Design conversation flows that maintain context quality over many turns'
    ],
    takeaways: [
      'Context engineering is the discipline of deliberately managing what goes into the context window',
      'The most common waste: attaching large irrelevant files, overly long conversation history, repeating yourself',
      'Summaries outperform transcripts — distill past context rather than repeating it verbatim',
      'Structure your prompts so the most important instruction is never buried in the middle'
    ],
    resources: [
      { title: 'Prompt engineering best practices', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' }
    ],
    quiz: [
      {
        question: 'What is "context engineering"?',
        type: 'single',
        options: ['Writing code for context menus in UI', 'Deliberately managing what information goes into the AI\'s context window to maximize quality', 'A type of software architecture pattern', 'A GitHub Copilot Enterprise feature'],
        answer: 1
      },
      {
        question: 'Which of the following are common forms of context waste? (Select all that apply)',
        type: 'multi',
        options: ['Attaching large files that aren\'t relevant to the current task', 'Letting a conversation run for 50+ turns without clearing it', 'Repeating the same instructions in every message', 'Attaching only the specific file sections that matter'],
        answers: [0, 1, 2]
      },
      {
        question: 'Why does a summary of prior conversation context outperform just repeating the full transcript?',
        type: 'single',
        options: ['Summaries are processed faster', 'Summaries convey the essential information in far fewer tokens, leaving room for more useful content', 'Transcripts aren\'t supported by Copilot', 'Summaries are required by GitHub Terms of Service'],
        answer: 1
      },
      {
        question: 'Where should the most important instruction in a prompt be placed?',
        type: 'single',
        options: ['Always in the middle of the prompt', 'At the very end so the model reads it last', 'At the beginning, or clearly at the end — never buried in the middle', 'It doesn\'t matter where instructions are placed'],
        answer: 2
      },
      {
        question: 'What is the best approach when starting a complex new task in a long existing session?',
        type: 'single',
        options: ['Continue in the same session to preserve history', 'Start a new chat with a crisp, targeted context setup for the new task', 'Copy-paste the entire conversation history into the new task', 'Use a different AI tool for the new task'],
        answer: 1
      }
    ]
  },

  {
    id: '431',
    level: 'Level 431',
    series: 'Deep Dives',
    title: 'Your Codebases, Your Rules',
    duration: '31 min',
    videoId: '_fZZz_gIE8A',
    objectives: [
      'Configure multiple layers of Copilot guidance: user, workspace, and repository',
      'Use .editorconfig and linting rules in combination with Copilot instructions',
      'Build a consistent team standard that Copilot enforces automatically',
      'Version control your Copilot configuration for reproducibility'
    ],
    takeaways: [
      'Copilot respects a hierarchy: repository instructions > workspace settings > user settings',
      'Combining .editorconfig, ESLint/Prettier, and copilot-instructions.md creates a cohesive, self-enforcing standard',
      'Team Copilot configs committed to your repo mean every team member has the same AI behavior',
      'This is especially powerful for onboarding — new developers get Copilot-guided code that matches team standards from day one'
    ],
    resources: [
      { title: 'EditorConfig specification', url: 'https://editorconfig.org/' },
      { title: 'GitHub Copilot for organizations', url: 'https://docs.github.com/en/copilot/managing-copilot/managing-copilot-for-your-enterprise/about-copilot-for-your-enterprise' }
    ],
    quiz: [
      {
        question: 'In GitHub Copilot\'s configuration hierarchy, which level takes highest precedence?',
        type: 'single',
        options: ['User-level settings in VS Code', 'Repository-level instructions (.github/copilot-instructions.md)', 'Workspace settings', 'GitHub.com account settings'],
        answer: 1
      },
      {
        question: 'What is the benefit of combining .editorconfig with Copilot instructions?',
        type: 'single',
        options: ['It doubles the context window size', 'Both enforce the same code style — one at the editor level, one at the AI suggestion level — creating a cohesive standard', 'It removes the need for a linter', 'It enables offline Copilot mode'],
        answer: 1
      },
      {
        question: 'Why is committing your Copilot configuration files to your repository particularly valuable for onboarding?',
        type: 'single',
        options: ['It reduces the repository file count', 'New developers immediately get AI suggestions that match the team\'s standards without any manual configuration', 'It\'s required by GitHub\'s onboarding guide', 'It prevents new developers from changing settings'],
        answer: 1
      },
      {
        question: 'Which files contribute to a "self-enforcing" code standard when used together? (Select all that apply)',
        type: 'multi',
        options: ['.editorconfig', '.github/copilot-instructions.md', 'eslint.config.js / .prettierrc', '.env.example'],
        answers: [0, 1, 2]
      }
    ]
  },

  // ── LEVEL 500s : TESTING ─────────────────────────────────

  {
    id: '501',
    level: 'Level 501',
    series: 'Testing & Quality',
    title: 'Generate a Test Suite with GitHub Copilot & TDD',
    duration: '18 min',
    videoId: 'f-4NNlIQzQw',
    objectives: [
      'Apply test-driven development (TDD) principles using Copilot as your testing co-pilot',
      'Generate comprehensive unit tests for existing functions using Copilot Chat',
      'Use Copilot to identify edge cases you might have missed',
      'Iterate on failing tests with Copilot assistance until all pass'
    ],
    takeaways: [
      'Copilot can generate a skeleton test suite from a function signature in seconds — but you should still think about what cases matter',
      'TDD with Copilot: write a failing test, ask Copilot to write the implementation to make it pass, repeat',
      'Copilot is excellent at generating edge case variations — ask it "what edge cases am I missing?"',
      'Always review generated tests — a test that always passes regardless of implementation is worse than no test'
    ],
    resources: [
      { title: 'TDD with GitHub Copilot (blog)', url: 'https://github.blog/developer-skills/github/how-to-write-tests-with-github-copilot/' },
      { title: 'VS Code Testing overview', url: 'https://code.visualstudio.com/docs/editor/testing' }
    ],
    quiz: [
      {
        question: 'What does TDD (Test-Driven Development) mean?',
        type: 'single',
        options: ['Writing tests after the code is complete', 'Writing a failing test first, then writing just enough code to make it pass', 'Testing only in production', 'Using AI to skip testing entirely'],
        answer: 1
      },
      {
        question: 'What is the recommended Copilot + TDD workflow?',
        type: 'single',
        options: ['Ask Copilot to write all code first, then test it', 'Write a failing test → ask Copilot to implement the code → verify it passes → repeat', 'Let Copilot write both tests and implementation simultaneously', 'Disable Copilot during testing to avoid bias'],
        answer: 1
      },
      {
        question: 'How can you use Copilot to find edge cases in your tests?',
        type: 'single',
        options: ['Copilot cannot suggest edge cases', 'Ask Copilot directly: "What edge cases am I missing in this test suite?"', 'Run all tests and Copilot will automatically flag uncovered cases', 'Use the @edge participant in Copilot Chat'],
        answer: 1
      },
      {
        question: 'Why should you always review Copilot-generated tests carefully?',
        type: 'single',
        options: ['Copilot tests always have syntax errors', 'A test that always passes regardless of the implementation is worse than no test at all', 'Generated tests don\'t work in all frameworks', 'VS Code requires manual approval for all generated tests'],
        answer: 1
      },
      {
        question: 'Which of the following are good uses of Copilot in a testing workflow? (Select all that apply)',
        type: 'multi',
        options: ['Generating an initial test skeleton from a function signature', 'Asking for edge case variations you may have missed', 'Writing implementation code to satisfy a failing test', 'Reviewing test coverage and suggesting what\'s missing'],
        answers: [0, 1, 2, 3]
      }
    ]
  }

];

// Make available globally (used by app.js)
window.MODULES = MODULES;
