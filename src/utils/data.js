import {
  DiReact,
  DiJavascript1,
  DiRuby
} from "react-icons/di";
import {
  MdPerson,
  MdBusinessCenter,
  MdSchool,
  MdPeople,
  MdWbIncandescent
} from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const me = {
  name: "Shih Yu-Mei",
  jobTitle: "Software engineer",
  local: "Taichung City, Taiwan",
  email: "yumeishih17@gmail.com",
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
        rate: "75",
        icon: DiReact,
        description:
          "This is favor front-end framework, also I'm familiar with react/redux development."
      },
      {
        text: "JavaScript",
        rate: "70",
        icon: DiJavascript1,
        description:
          "1+ years experiences on Javascript. Keep focusing on the latest ECMAScript standard like ES6, ES7."
      },
      {
        text: "React Native",
        rate: "60",
        icon: DiReact,
        description:
          "Develop 3+ app including noteTaker, BluetoothTesting, and fileSharing etc"
      },
      {
        text: "RoR",
        rate: "35",
        icon: DiRuby,
        description:
          "1 years experience in developing web server of large scale EC website written by Ruby on Rails."
      },
      {
        text: "C",
        rate: "70",
        icon: null,
        description: "This is how I learn Data structure and Algorithm :)"
      }
    ]
  },
  {
    title: "LANGUAGES",
    type: "PROGRESS_BAR",
    data: [
      { text: "Mandarin", rate: "100", icon: null, description: "Native" },
      { text: "English", rate: "68", icon: null, description: "TOEFL: 71(2016)" }
    ]
  }
];

const profile =
  "Hi, I'm Yumi. I have 3+ years of experience in software development and have 1+ years of industry experience developing large scale EC website and cooperating with several global teams. I enjoy working with JavaScript and have professional experience in React and React Native.";

const experience = [
  {
    subtitle: "Software Engineer",
    organization:
      "[Strength Master](http://www.strengthmastergroup.com/index-en.html)",
    local: "Taiwan",
    start: "2019/03",
    end: null,
    detail:
      "- Developed Bluetooth protocols testing app saving time from testing(React Native, Realm). \n\
    - Setup team development progress, import git, Eslint, and unit testing. Improve product stability. \n\
    - Participated in new product design.\n\
    - Mentor for team members.\n"
  },
  {
    subtitle: "Front-End Engineer",
    organization: "[Rakuten](https://www.rakuten.com.tw/)",
    local: "Taiwan",
    start: "2017/12",
    end: "2018/10",
    detail:
      "- Develop new features and service maintained by React.js, Angular.js, Ruby on Rails, etc by cooperating with several teams in Taiwan, Japan and India.\n\
    - Cooperate with the GPP team in Japan to implement Point Club UI.\n\
    - Refactor Shop related pages(shop top, shop info, shop ranking, etc) into RWD/AWD, using GraphQL fetching API.\n\
    - Upgrade Webpack 3 to Webpack 4.\n\
    - Implement shell scripts on Jenkins and project to improve development efficiency.\n\
    - Migrate discrete code to code base reduce duplicate and reload.\n"
  },
  {
    subtitle: "Internship",
    organization: "[Titansoft](https://titansoft.com/en)",
    local: "Taiwan",
    start: "2017/07",
    end: "2017/08",
    detail:
      "- Developed C# app to log in to the same account by scanning QR code.\n\
      - Learning Scrum as a development team.\
    "
  },
  {
    subtitle: "Internship",
    organization: "[Tomofun](https://shopus.furbo.com/)",
    local: "Taiwan",
    start: "2017/02",
    end: "2017/06",
    detail:
      "R&D team and MIS team \n\
      - QA testing, include API unit test(python) and pressure test(JMeter), app, and firmware) \n\
      - Concatenate third parties API(Facebook, GA) automatic doing data crawling \n\
    "
  }
];

const education = [
  {
    subtitle: null,
    organization:
      "[National Chung Cheng University (CCU)](http://ewww.ccu.edu.tw/)",
    local: "Taiwan",
    start: "2013/09",
    end: "2017/06",
    detail:
      "B.S., Computer Science and Information Engineering\n\n\
    - Presidential Honor Award with scholarship twice.\n\
    - Student Assistant at Computer Center, design and develop SSO mobile web, maintain web servers(apache2) \n\
    - Participated in Youth Ambassadors Taiwan(2014), visited 5 countries including South Africa, Swaziland, Jordan, Oman, and Bahrain.\n\
    - Participated in the Computer science department badminton team. \n\
    - Participated in Dong-Li Chinese orchestra.\n"
  }
];

const volunteerExperience = [
  {
    subtitle: "International Volunteer",
    organization: "[Taiwan ICDF](https://www.icdf.org.tw/mp.asp?mp=2)",
    local: "Belize",
    start: "2018/10",
    end: "2019/02",
    detail:
      "Project: Sheep and goat project in Belize \n\n\
    - Developed sheep nutrition calculator and registration demo web(React [Github](https://github.com/yumeishih/livestock-app-demo)), as well as an android app (Kotlin). Helping farmers improve efficiency.\n\
    - Acted as a reporter at `Belize Small Ruminant Registry and Digital Platform Seminar`. \n\
    - Assisted in National Sheep and Goat Breeding Center. \n\
    - Assisted in `Embassy of the Republic of China(Taiwan)`.\n"
  }
];

const academicProject = [
  {
    subtitle: "ClassFlam: From Classic to Flamenco",
    organization: null,
    local: null,
    start: "2016/2",
    end: "2016/11",
    detail:
      "[Project Poster](https://drive.google.com/file/d/0B1eyGDboaY64NjlBa25RbnVHWm8/view)\n\
    - Developed genetic algorithm (GA) in C language to transfer classical music into a Flamenco style.\n\
    - Design the structure of representation(chromosome) and fitness functions base on music theory.\n"
  }
];

export const mainInfoContents = [
  {
    title: "PROFILE",
    icon: MdPerson,
    type: "TEXT",
    data: profile
  },
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
