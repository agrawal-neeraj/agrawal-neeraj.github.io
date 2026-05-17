// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications-amp-patents",
          title: "publications &amp; patents",
          description: "Peer-reviewed research papers and global patent filings.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Open-source implementations, multi-agent frameworks, and technical codebases.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-certificates",
          title: "certificates",
          description: "Technical certifications, professional credentials, and advanced coursework.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/certificates/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-how-to-build-a-real-time-voice-agent-with-gemini-and-google-adk",
        
          title: 'How to build a real-time voice agent with Gemini and Google ADK <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Published on the Google Cloud Blog. Codifying scalable architectural patterns for multi-modal streaming and low-latency bidirectional communication.",
        section: "Posts",
        handler: () => {
          
            window.open("https://cloud.google.com/blog/products/ai-machine-learning/build-a-real-time-voice-agent-with-gemini-adk", "_blank");
          
        },
      },{id: "post-how-to-build-a-deep-research-agent-for-lead-generation-using-google-s-adk",
        
          title: 'How to build a deep research agent for lead generation using Google’s ADK... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Published on the Google Cloud Blog. Architecting a hierarchical, parallelized multi-agent system for complex analytical workflows.",
        section: "Posts",
        handler: () => {
          
            window.open("https://cloud.google.com/blog/products/ai-machine-learning/build-a-deep-research-agent-with-google-adk/", "_blank");
          
        },
      },{id: "post-a-guide-to-converting-adk-agents-with-mcp-to-the-a2a-framework",
        
          title: 'A guide to converting ADK agents with MCP to the A2A framework <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Published on the Google Cloud Blog. Authored a step-by-step engineering guide for upgrading standalone ADK agents with MCP tools into interoperable Agent-to-Agent (A2A) ecosystems.",
        section: "Posts",
        handler: () => {
          
            window.open("https://cloud.google.com/blog/products/ai-machine-learning/unlock-ai-agent-collaboration-convert-adk-agents-for-a2a", "_blank");
          
        },
      },{id: "post-how-to-build-a-simple-multi-agentic-system-using-google-s-adk",
        
          title: 'How to build a simple multi-agentic system using Google’s ADK <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Published on the Google Cloud Blog. Establishing best practices for scaling enterprise AI by replacing brittle, monolithic LLMs with coordinated, specialized multi-agent teams.",
        section: "Posts",
        handler: () => {
          
            window.open("https://cloud.google.com/blog/products/ai-machine-learning/build-multi-agentic-systems-using-google-adk", "_blank");
          
        },
      },{id: "post-an-ai-travel-agent-in-action-a-detailed-look-at-how-two-agents-plan-a-trip",
        
          title: 'An AI Travel Agent in Action: A Detailed Look at How Two Agents... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Published in the Google Cloud Community on Medium. Demonstrating practical task orchestration and protocol delegation between multi-vendor AI agents.",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/google-cloud/an-ai-travel-agent-in-action-a-detailed-look-at-how-two-agents-plan-a-trip-86a1735368e1", "_blank");
          
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%65%65%72%61%6A%31%33%37%38%38@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=QAnoqosAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/neeraj-agrawal", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/MagnIeeT", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
