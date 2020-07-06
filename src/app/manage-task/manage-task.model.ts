import { Task } from '../task/task';

export interface ITaskStatus {
  statusTitle: string;
  id: string;
  tasks: Task[];
}

export const taskBoardConfig: ITaskStatus[] = [
  {
    statusTitle: 'ToDo',
    id: 'todo',
    tasks: [
      {
        id: 1,
        title: 'Prepare moodboard for website branding',
        description: 'task description',
        img: 'task_1.png',
        createdBy: 'task created by user',
        linkedUsers: [],
        chips: [
          {
            icon: 'icon-icomoon-attachment',
            text: '3',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          }
        ]
      },
      {
        id: 2,
        title: 'Create an announcement about product launch',
        description: 'task description',
        img: '',
        createdBy: 'task created by user',
        linkedUsers: [],
        chips: [
          {
            icon: 'icon-icomoon-attachment',
            text: '1',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          }
        ]
      },
      {
        id: 3,
        title: 'Prepare moodboard for LP',
        description: 'task description',
        img: '',
        createdBy: 'task created by user',
        linkedUsers: [],
        chips: [
          {
            icon: 'icon-icomoon-bell',
            text: 'Oct, 23',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          }
        ]
      },
      {
        id: 4,
        title: 'Final editions',
        description: 'task description',
        img: 'task_4.png',
        createdBy: 'task created by user',
        linkedUsers: [],
        chips: [
          {
            icon: 'icon-icomoon-bell',
            text: 'Oct, 23',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          },
          {
            icon: 'icon-icomoon-bubble2',
            text: '1',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          }
        ]
      }
    ]
  },
  {
    statusTitle: 'In progress',
    id: 'progress',
    tasks: [
      {
        id: 5,
        title: 'Interview with users',
        description: 'task description',
        img: 'task_2.PNG',
        createdBy: 'task created by user',
        linkedUsers: [],
        chips: [
          {
            icon: 'icon-icomoon-bell',
            text: 'Oct, 23',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          },
          {
            icon: 'icon-icomoon-bubble2',
            text: '9',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          },
          {
            icon: 'icon-icomoon-attachment',
            text: '3',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          }
        ]
      },
      {
        id: 6,
        title: 'Search references for multicolored background',
        description: 'task description',
        img: 'task_3.png',
        createdBy: 'task created by user',
        linkedUsers: [],
        chips: [
          {
            icon: 'icon-icomoon-bell',
            text: 'Oct, 23',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          },
          {
            icon: 'icon-icomoon-attachment',
            text: '3',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          }
        ]
      },
      {
        id: 7,
        title: 'Create UI kit for project',
        description: 'task description',
        img: '',
        createdBy: 'task created by user',
        linkedUsers: [],
        chips: [
          {
            icon: 'icon-icomoon-bell',
            text: 'Oct, 23',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          },
          {
            icon: 'icon-icomoon-bubble2',
            text: '4',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          }
        ]
      },
      {
        id: 8,
        title: 'Prepare detailed brief for devs & designers',
        description: 'task description',
        img: '',
        createdBy: 'task created by user',
        linkedUsers: [],
        chips: [
          {
            icon: 'icon-icomoon-bell',
            text: 'Oct, 23',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          },
          {
            icon: 'icon-icomoon-bubble2',
            text: '4',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          },
          {
            icon: 'icon-icomoon-attachment',
            text: '3',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          }
        ]
      }
    ]
  },
  {
    statusTitle: 'In review',
    id: 'review',
    tasks: [
      {
        id: 9,
        title: 'Describe the problem with supermassive black hole',
        description: 'task description',
        img: '',
        createdBy: 'task created by user',
        linkedUsers: [],
        chips: [
          {
            icon: 'icon-icomoon-bell',
            text: 'Oct, 23',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          },
          {
            icon: 'icon-icomoon-bubble2',
            text: '4',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          },
          {
            icon: 'icon-icomoon-attachment',
            text: '3',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          }
        ]
      },
      {
        id: 10,
        title: 'Facebook post about new case study on Behance',
        description: 'task description',
        img: '',
        createdBy: 'task created by user',
        linkedUsers: [],
        chips: [
          {
            icon: 'icon-icomoon-bell',
            text: 'Oct, 23',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          },
          {
            icon: 'icon-icomoon-bubble2',
            text: '4',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          }
        ]
      },
      {
        id: 11,
        title: 'Chatbot screen for app',
        description: 'task description',
        img: '',
        createdBy: 'task created by user',
        linkedUsers: [],
        chips: [
          {
            icon: 'icon-icomoon-bell',
            text: 'Oct, 23',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          }
        ]
      },
      {
        id: 12,
        title: 'Read Hawking\'s \'A brief History of Time\'',
        description: 'task description',
        img: '',
        createdBy: 'task created by user',
        linkedUsers: [],
        chips: [
          {
            icon: 'icon-icomoon-bubble2',
            text: '16',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          },
          {
            icon: 'icon-icomoon-attachment',
            text: '9',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          }
        ]
      }
    ]
  },
  {
    statusTitle: 'Done',
    id: 'done',
    tasks: [
      {
        id: 13,
        title: 'Prepare detailed brief for devs & designers',
        description: 'task description',
        img: 'task_1.png',
        createdBy: 'task created by user',
        linkedUsers: [],
        chips: [
          {
            icon: 'icon-icomoon-check',
            text: 'Sept, 29',
            backgroundColor: '#04d56b',
            textColor: 'white'
          },
          {
            icon: 'icon-icomoon-bubble2',
            text: '4',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          },
          {
            icon: 'icon-icomoon-attachment',
            text: '3',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          }
        ]
      },
      {
        id: 14,
        title: 'Skype call with client',
        description: 'task description',
        img: 'task_2.PNG',
        createdBy: 'task created by user',
        linkedUsers: [],
        chips: [
          {
            icon: 'icon-icomoon-check',
            text: 'Oct, 12',
            backgroundColor: '#04d56b',
            textColor: 'white'
          },
          {
            icon: 'icon-icomoon-bubble2',
            text: '4',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          }
        ]
      },
      {
        id: 15,
        title: 'Develop a design language for project',
        description: 'task description',
        img: '',
        createdBy: 'task created by user',
        linkedUsers: [],
        chips: [
          {
            icon: 'icon-icomoon-check',
            text: 'Oct, 23',
            backgroundColor: '#04d56b',
            textColor: 'white'
          },
          {
            icon: 'icon-icomoon-bubble2',
            text: '16',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          },
          {
            icon: 'icon-icomoon-attachment',
            text: '9',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          }
        ]
      },
      {
        id: 16,
        title: 'Read Hawking\'s \'A brief History of Time\'',
        description: 'task description',
        img: '',
        createdBy: 'task created by user',
        linkedUsers: [],
        chips: [
          {
            icon: 'icon-icomoon-check',
            text: 'Oct, 23',
            backgroundColor: '#04d56b',
            textColor: 'white'
          },
          {
            icon: 'icon-icomoon-bubble2',
            text: '16',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          },
          {
            icon: 'icon-icomoon-attachment',
            text: '9',
            backgroundColor: 'whitesmoke',
            textColor: 'gray'
          }
        ]
      },
      {
        id: 17,
        title: 'Illustration for hero section',
        description: 'task description',
        img: 'task_4.png',
        createdBy: 'task created by user',
        linkedUsers: [],
        chips: [
          {
            icon: 'icon-icomoon-check',
            text: 'Oct, 23',
            backgroundColor: '#04d56b',
            textColor: 'white'
          }
        ]
      }
    ]
  }
];
