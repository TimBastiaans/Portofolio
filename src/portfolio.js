/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Tim Bastiaans",
  title: "Hi all I'm Tim Bastiaans",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1wZchZ_93igJR_xC_hjd6kYwh3sKHk841/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/timBastiaans",
  linkedin: "https://www.linkedin.com/in/tim-b-35ba07a5/",
  gmail: "Tim_Bastiaans@hotmail.nl",
  gitlab: "https://gitlab.com/timBastiaans",
  stackoverflow: "https://stackoverflow.com/story/timbastiaans",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "TRYING TO BE A CRAZY FULL STACK DEVELOPER WHO WANT TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications or backends"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
        "⚡ Integration of third party services such as Firebase / and getting to know AWS"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java/kotlin",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "js/ts",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "git vcs",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "no-sequal-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "HAN University of Applied Sciences",
      logo: require("./assets/images/HAN-logo.png"),
      subHeader: "HBO Informatica software developer",
      duration: "September 2017 - April 2021",
      desc: "propaedeutic certificate obtained in the first year",
      descBullets: [
        "UML & Scrum",
        "PHP, HTML & CSS",
        "Java / Kotlin",
        "Javascript / Typescript",
        "NoSQL & T-SQL",
        "Firebase, Ionic, Swift, Vue & Angular",
        "Microservices, SOLID principles, GRASP & Gang of Four (GoF) design patterns",
        "Automated testing, ISO 42010/25010, Twin Peaks-model, 4+1 architectural view model",
        "Clean code with the refactoring guide by Martin Fowler."
      ]
    },
    {
      schoolName: "ROC Nijmegen",
      logo: require("./assets/images/ROC-logo.jpg"),
      subHeader: "Secondary vocational education system operator / network management",
      duration: "September 2014 - April 2017",
      desc: "Schoolprogram subjects:",
      descBullets: ["Windows Networks" ,"Cisco CCNA" ,"Open Source" ,"Databases" ,"Networks" ,"IT Security" ,"Virtualization" ,"Java", "SQL"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Social",
      progressPercentage: "75%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduation internship software developer",
      company: "VTS",
      companylogo: require("./assets/images/VTS-logo.png"),
      date: "October 2020 – April 2021",
      desc: "Microsoft dynamics 365 business central development in Microsoft AL",
      descBullets: [
        "AI Custom Vision quality check for transport shipping documents.",
        "Automated testing for Dynamics 365 Business Central projects.",
        "Calculated duration of all expected shipping trips.",
        "Overview page with a dynamic and insightful set of tools\n" +
        "to determine the in- and outgoing temperature of the\n" +
        "controlled cargo trucks.",
      ]
    },
    {
      role: "Back-End Developer",
      company: "Brthrs",
      companylogo: require("./assets/images/BRTHRS-logo.png"),
      date: "February 2020 – July 2020",
      desc: "Working within a development team and helping with\n" +
        "developing, testing and deploying various applications\n" +
        "like the Silent Disco web platform with integrated\n" +
        "streaming services."
    },
    {
      role: "IT helpdesk",
      company: "Hyster-Yale",
      companylogo: require("./assets/images/HYSTER-YALE-logo.png"),
      date: "February 2016 – December 2018",
      desc: "Technical troubleshooting, system upgrades & optimization, security, backup & recovery solutions:",
      descBullets: ["First and second line helpdesk support in a > 6,800 fte\n" +
      "worldwide company." ,"Virus detection, removal & prevention."],
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/beerDistrubutionGame.png"),
      projectName: "Beer Distribution Game",
      projectDesc: "Worked as the project leader of a 25-member team on implementing a better version of the \"Beer Distribution Game\" that will solve the limitations of previous versions.",
      footerLink: [
        {
          name: "Git-project",
          url: "https://github.com/TimBastiaans/Beer-Distribution-Game"
        },
        {
          name: "Game info",
          url: "https://en.wikipedia.org/wiki/Beer_distribution_game"
        }
      ]
    },
    {
      image: require("./assets/images/bubble-trouble -logo.jpg"),
      projectName: "Bubble Trouble in Unity",
      projectDesc: "Two man project still in progress on the replication of the old Bubble Trouble Game",
      footerLink: [
        {
          name: "Git-project",
          url: "https://github.com/nymtesx/unitygame"
        },
        {
          name: "The flash Browser game",
          url: "https://spele.nl/bubble-trouble-1-spel/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Amazon Web Services - Cloud Computing Services",
      subtitle:
        "Trying to get my AWS Certification",
      image: require("./assets/images/AWS-Logo.jpg"),
      footerLink: [
        {
          name: "Certification exams",
          url: "https://aws.amazon.com/certification/"
        }
      ]
    },

    {
      title: "CCNA ",
      subtitle: "Completed Certifcation from the first three levels of the CCNA course",
      image: require("./assets/images/CCNA-Routing-and-Switching-Certification.jpg"),
      footerLink: [
        {name: "Certification", url: ""},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Playground",
  subtitle:
    "With Love for Developing cool stuff, I love to share and show some of the coolest things I found on the web.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "PRESENTATIONS",
  subtitle: emoji(
    "I LIKE TO SHARE MY LIMITED KNOWLEDGE"
  ),

  talks: [
    {
      title: "Graduation internship Presentation For VTS",
      subtitle: "The specialist in temperature-controlled pharmaceutical transport & warehousing",
      slides_url: "https://drive.google.com/file/d/1o78MToqxEFMptxDtDQQmxXUBanl6w76b/view?usp=sharing",
      event_url: "https://www.vts.nl/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+648543197",
  email_address: "Tim_Bastiaans@hotmail.nl"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo,
};
