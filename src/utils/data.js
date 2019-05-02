import {
  DiReact,
  DiJavascript1,
  DiRuby,
  DiPython,
} from "react-icons/di";
import { SiCsharp } from "react-icons/si"
import {
  MdBusinessCenter,
  MdSchool,
  MdPeople,
  MdWbIncandescent
} from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const me = {
  name: "Shih Yumei",
  jobTitle: "Software engineer",
  local: "Taipei, Taiwan",
  email: "yumeishih@csie.io",
  gitHub: "https://github.com/yumeishih",
  linkedin: "https://www.linkedin.com/in/yumeishih/"
};

export const sideBarContents = [
  {
    title: "DETAILS",
    type: "TEXT",
    data: [
      me.local,
      me.email,
      { icon: FaGithub, iconLink: me.gitHub },
      { icon: FaLinkedin, iconLink: me.linkedin }
    ]
  },
  {
    title: "SKILLS",
    type: "PROGRESS_BAR",
    data: [
      {
        text: "ReactJs",
        icon: DiReact,
      },
      {
        text: "Javascript",
        icon: DiJavascript1,
      },
      {
        text: "React Native",
        icon: DiReact,
      },
      {
        text: "RoR",
        icon: DiRuby,
      },
      {
        text: "Python",
        icon: DiPython,
      },
      {
        text: "C#",
        icon: SiCsharp,
      },
      {
        text: "C/C++",
        icon: null,
      },
    ]
  },
  {
    title: "LANGUAGES",
    type: "PROGRESS_BAR",
    data: [
      { text: "Chinese", icon: null, description: "Native" },
      { text: "English", icon: null, description: "Professional working proficiency" }
    ]
  }
];

const experience = [
  {
    subtitle: "Software Engineer",
    organization:
      "[Oursky](https://www.oursky.com/)",
    local: "Taiwan Branch",
    start: "2019",
    end: null,
    detail:
    "- Apply brand-new skills and knowledge efficiently, not constrict to one specific technology, and build rigorously structured products under a systematic dev-ops pipeline in an Agile way \n\
    - Achieve 10+ websites, apps, and libraries, including enterprise systems, e-commerce platforms, POS applications, O2O Game Center-like applications, and libraries of Angular components \n\
    - Automize development environment with shell scripts to achieve continuous integration and continuous deployment\n"
  },
  {
    subtitle: "Frontend Engineer",
    organization: "[Rakuten](https://global.rakuten.com/corp/)",
    local: "Taiwan Branch",
    start: "2017",
    end: "2018",
    detail:
      "- Developed new features in the large-scale E-commerce website with React, Angular, and Ruby on Rails, refactored legacy code to enhance website preferences and better user experience; collaborated with international teams such as Japan, US, and India \n\
      - Upgraded large codebase bundler from Webpack3 to Webpack4 to reduce more than 30 percent of building time\n"
  },
  {
    subtitle: "Software Engineer Intern",
    organization: "[TitanSoft](https://titansoft.com/en)",
    local: "Taichung Branch",
    start: "2017/07",
    end: "2017/08",
    detail:
      "- Led a team of 4 interns to establish a QR code login prototype with C#\n"
  },
  {
    subtitle: "RD team, MIS team Intern",
    organization: "[Tomofun](https://shopus.furbo.com/)",
    local: "Taiwan",
    start: "2017/02",
    end: "2017/06",
    detail:
    "Implemented API unit test(Python) and pressure test(JMeter)\n\
    Auto-generated user behavior report on a day-to-day basis by data crawling and third parties API to enhance user experience\n"
  }
];

const education = [
  {
    subtitle: null,
    organization:
      "[National Chung Cheng University (CCU)](http://ewww.ccu.edu.tw/)",
    local: "Taiwan",
    start: "2013",
    end: "2017",
    detail:
      "B.S., Computer Science and Information Engineering\n\n\
    - Last 60 GPA: 3.91/4.0 \n\
    - Presidential Honor Award with scholarship in 2016 and 2017.\n\
    - Student Assistant at Computer Center, design and develop SSO mobile web, maintain web servers(apache2) \n\
    - Participated in International Youth Ambassador Exchange Program(2014), visited 5 countries including South Africa, Swaziland, Jordan, Oman, and Bahrain.\n"
  }
];

const volunteerExperience = [
  {
    subtitle: "International Information Volunteer",
    organization: "[Taiwan ICDF](https://www.icdf.org.tw/mp.asp?mp=2)",
    local: "Belize",
    start: "2018/10",
    end: "2019/01",
    detail:
      "Project: Sheep and goat project in Belize \n\n\
      - Completed sheep nutrition calculator android application(Kotlin) and certification website prototype(React) for National Sheep and Goat Breeding Centre\n\
      - Hosted Belize Small Ruminant Registry and Digital Platform Seminar with 30+ attendees and shared topic “Introduction of Modern Livestock Technology”\n"
  }
];

const academicProject = [
  {
    subtitle: "ClassFlam: From Classic to Flamenco",
    organization: null,
    local: null,
    start: "2015/2",
    end: "2016/11",
    detail:
      "[Project Poster](https://drive.google.com/file/d/0B1eyGDboaY64NjlBa25RbnVHWm8/view)\n\
      - Advisor: Chuan-Kang Ting\n\
      - Implemented Genetic Algorithm(GA) with C language to transfer classical music into Flamenco style, and built the demo website with PHP\n\
      - Designed the data structure of representation(chromosome) with a three-layer dynamic linked list and established fitness functions based on music theories\n"
  }
];

export const mainInfoContents = [
  {
    title: "EXPERIENCE",
    icon: MdBusinessCenter,
    type: "PERIOD",
    data: experience
  },
  {
    title: "VOLUNTEER EXPERIENCE",
    icon: MdPeople,
    type: "PERIOD",
    data: volunteerExperience
  },
  {
    title: "EDUCATION",
    icon: MdSchool,
    type: "PERIOD",
    data: education
  },
  {
    title: "ACADEMIC PROJECT",
    icon: MdWbIncandescent,
    type: "PERIOD",
    data: academicProject
  }
];
