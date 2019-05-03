import {
  DiReact,
  DiJavascript1,
  DiGit,
  DiCss3Full,
  DiHtml5,
  DiRuby
} from "react-icons/di";

export const me = {
  name: 'Shih Yu-Mei',
  jobTitle: 'Software engineer',
  local: 'Taichung City, Taiwan',
  phoneNumber: '(+886)963117962',
  email: 'yumeishih17@gmail.com',
  gitHub: 'https://github.com/yumeishih',
  linkedin: 'https://www.linkedin.com/in/yumeishih/'
}

export const sideBarContents = [
  {
    title: 'DETAILS',
    type: 'TEXT',
    data: [
      me.local,
      me.phoneNumber,
      me.email,
    ]
  },
  {
    title: 'SKILLS',
    type: 'PROGRESS_BAR',
    data: [
      { text: 'ReactJs', rate: '85', icon: DiReact },
      { text: 'JavaScript', rate: '80', icon: DiJavascript1 },
      { text: 'Html', rate: '75', icon: DiHtml5 },
      { text: 'Css/Scss', rate: '80', icon: DiCss3Full },
      { text: 'Git', rate: '80', icon: DiGit },
      { text: 'C', rate: '70', icon: null },
      { text: 'React Native', rate: '60', icon: DiReact },
      { text: 'Redux', rate: '50', icon: null },
      { text: 'RoR', rate: '35', icon: DiRuby },
    ]
  },
  {
    title: 'LANGUAGES',
    type: 'PROGRESS_BAR',
    data: [
      { text: 'Mandarin', rate: '100', icon: null },
      { text: 'English', rate: '68', icon: null },
    ]
  },
]
