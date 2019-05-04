import {
  DiReact,
  DiJavascript1,
  DiGit,
  DiRuby
} from "react-icons/di";

export const me = {
  name: "Shih Yu-Mei",
  jobTitle: "Software engineer",
  local: "Taichung City, Taiwan",
  phoneNumber: "(+886)963117962",
  email: "yumeishih17@gmail.com",
  gitHub: "https://github.com/yumeishih",
  linkedin: "https://www.linkedin.com/in/yumeishih/"
};

export const sideBarContents = [
  {
    title: "DETAILS",
    type: "TEXT",
    data: [me.local, me.phoneNumber, me.email]
  },
  {
    title: "SKILLS",
    type: "PROGRESS_BAR",
    data: [
      {
        text: "ReactJs",
        rate: "85",
        icon: DiReact,
        description:
          "This is favor front-end framework, also I'm familiar with react/redux development."
      },
      {
        text: "JavaScript",
        rate: "80",
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
      { text: "Git", rate: "80", icon: DiGit, description: null },
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
]
