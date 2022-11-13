export const INITIAL_STATE = {
    calender_events: [
        {
            id:1,
            date: '2022-11-12',
            task: 'Feed the baby',
            time: '5:30 AM',
            task_label: 'C',
            completed: false
        },
        {
            id:2,
            date: '2022-11-12',
            task: 'Workout',
            time: '6:30 PM',
            task_label: 'P',
            completed:false
        },
        {
            id:3,
            date: '2022-11-17',
            task: 'Baby Wakeup',
            time: '5:30 AM',
            task_label: 'C',
            completed: false
        },
        {
            id:4,
            date: '2022-11-17',
            task: 'Doctor Appointment',
            time: '6:00 PM',
            task_label: 'C',
            completed: false
        },
        {
            id:5,
            date: '2022-11-18',
            task: 'Hiking',
            time: '7:30 AM',
            task_label: 'P',
            completed: false
        }
    ],
    hobbies: [{
            id: 4,            
            name: 'Cooking',
            category: 'Culinary',
            image: 'cooking',
            events: [{
                    id: 1,
                    title: 'Plant Based Cooking',
                    img: 'https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F508061545%2F676x380.webp&w=3840&q=75',
                    date: 'WED, NOV 17 · 11:00 AM CST',
                    location: '3100 Northside Blvd · Richardson, TX'
                },
                {
                    id: 2,        
                    title: 'Chicken alla Pizzaiola',
                    img: 'https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F508228920%2F676x380.webp&w=3840&q=75',
                    date: 'SAT, NOV 18 · 7:00 PM CST',
                    location: '580 W Arapaho Rd #290 · Richardson, TX'
                },
                {
                    id: 3,
                    title: 'Cooking Class-Mushroom Mania',
                    img: 'https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F507566669%2F676x380.webp&w=3840&q=75',
                    date: 'SAT, NOV 27 · 6:00 PM CST',
                    location: '320 Coit Rd · Plano, TX'
                }
            ]
        }
    ],
    reward_stats: {
        reward_points: 100,
        reward_counter: 4
    },
    children:[{
            id:1,
            name: 'Ezikiel',
            age: '4 months',
            gender: 'Male',
            image: 'ezikiel'
        },
        {
            id:2,
            name: 'Zack',
            age: '1 year 6 months',
            gender: 'Male',
            image: 'zack'
        }
  ]
}