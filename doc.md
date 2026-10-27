d:/view/
├── public/                               # Static assets served directly
│   └── assets/
│       ├── avatar.png
│       ├── background.jpg
│       ├── dino-run-3d.png
│       └── topographic-wave.svg
│
├── src/                                  # Application source code
│   ├── assets/                           # Bundled media assets
│   │   ├── avatar.png
│   │   └── dino-run-3d.png
│   │
│   ├── components/                       # UI components
│   │   ├── About.jsx                     # About section with bio & education
│   │   ├── Contact.jsx                   # Contact section & channel links (Email, GitHub, GitLab, LinkedIn)
│   │   ├── Footer.jsx                    # Footer component
│   │   ├── Header.jsx                    # Navigation bar & brand header
│   │   ├── Hero.jsx                      # Hero section with HUD cards & CTA
│   │   ├── ProjectCard.jsx               # Individual project card with cyber chamfered banner
│   │   ├── Projects.jsx                  # Project showcase & preview modal
│   │   ├── SectionHeading.jsx            # Reusable section heading wrapper
│   │   ├── Skills.jsx                    # Technical skills display
│   │   └── TopographicBackground.jsx     # Dynamic topographic wave backdrop
│   │
│   ├── data/
│   │   └── portfolio.js                  # Personal profile, skills, projects, & navigation data
│   │
│   ├── App.jsx                           # Root application layout component
│   ├── index.css                         # Tailwind CSS v4 & global theme styles
│   ├── main.jsx                          # React application entry point
│   └── styles.css                        # Supplementary custom CSS styles
│
├── index.html                            # HTML entry document
├── package.json                          # Project configuration & npm dependencies
└── vite.config.js                        # Vite bundler & Tailwind plugin configuration
