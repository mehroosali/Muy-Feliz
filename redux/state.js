export const INITIAL_STATE = {
    current_user: {},
    users: [{
            email: 'mehroosali@gmail.com',
            password: 'testuser',
            name: 'Mehroos Ali',
            imageUri: 'https://i.postimg.cc/BQYS0ybg/mehroosali.jpg'
        },
        {
            email: 'grace.kozuch@gmail.com',
            password: 'testuser2',
            name: 'Mary Grace Kozuch',
            imageUri: 'https://media-exp1.licdn.com/dms/image/C5603AQFEquq_nsCf5Q/profile-displayphoto-shrink_800_800/0/1639771820510?e=1675900800&v=beta&t=TqQSAXlB-z7rW_4xv1eKYdWE6nytec7Vt3mT6opFZ9Q'
        }
    ],
    login_message_flag: true,
    calender_events: [{
            id: 1,
            date: '2022-12-08',
            task: 'Feed the baby',
            time: '5:30 AM',
            task_label: 'C',
            completed: false
        },
        {
            id: 2,
            date: '2022-12-08',
            task: 'Workout',
            time: '6:30 PM',
            task_label: 'P',
            completed: false
        }
    ],
    hobbies: [{
        id: 4,
        name: 'Cooking',
        category: 'Culinary',
        events_attending: 0,
        image: 'https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg',
        events: [{
                id: 1,
                hobby_id: 4,
                title: 'Plant Based Cooking',
                img: 'https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F508061545%2F676x380.webp&w=3840&q=75',
                date: 'WED, DEC 11 · 11:00 AM CST',
                location: '3100 Northside Blvd · Richardson, TX'
            },
            {
                id: 2,
                hobby_id: 4,
                title: 'Chicken alla Pizzaiola',
                img: 'https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F508228920%2F676x380.webp&w=3840&q=75',
                date: 'SAT, DEC 29 · 7:00 PM CST',
                location: '580 W Arapaho Rd #290 · Richardson, TX'
            },
            {
                id: 3,
                hobby_id: 4,
                title: 'Cooking Class-Mushroom Mania',
                img: 'https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F507566669%2F676x380.webp&w=3840&q=75',
                date: 'SAT, DEC 24 · 6:00 PM CST',
                location: '320 Coit Rd · Plano, TX'
            }
        ]
    }],
    reward_stats: {
        reward_points: 100,
        reward_counter: 4
    },
    children: [{
            id: 1,
            name: 'Ezikiel',
            dob: 'Jun 27 2022',
            gender: 'Male',
            image: 'https://thumbs.dreamstime.com/b/baby-boy-posing-2607278.jpg',
            user: 'grace.kozuch@gmail.com'
        },
        {
            id: 2,
            name: 'Zack',
            dob: 'May 04 2022',
            gender: 'Male',
            image: 'https://images.unsplash.com/photo-1617331140180-e8262094733a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGZhY2V8ZW58MHx8MHx8&w=1000&q=80',
            user: 'mehroosali@gmail.com'
        }
    ]
}