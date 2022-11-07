export const INITIAL_STATE = {
    current_user: {},
    users: [{
        'username': 'mehroosali',
        'name': 'Mehroos Ali',
        'email': 'mehroosali@gmail.com',
        'password': '12345',
        'image': 'mehroos'
    },
    {
        'username': 'gracekozuch',
        'name': 'Grace Kozuch',
        'email': 'grace.kozuch@gmail.com',
        'password': '12345',
        'image': 'grace'
    }],
    calender_events: [{
            id:1,
            date: '2022-11-06',
            task: 'Workout',
            time: '2:30 PM',
            task_label: 'P',
            user: 'mehroosali',
            completed:false
        },
        {
            id: 2,
            date: '2022-11-06',
            task: 'Feed the baby',
            time: '5:30 AM',
            task_label: 'C',
            user: 'mehroosali',
            completed: false
        }
    ],
    hobbies: [{
            name: 'Chess',
            category: 'Sports (Indoors)',
            image: 'chess',
            events: [{
                    id: '1',
                    title: 'Casual Chess Night!',
                    img: 'https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F502117255%2F676x380.webp&w=1920&q=75',
                    date: 'WED, NOV 04 · 6:00 PM CST',
                    location: '5001 Addison Cir · Addison, TX'
                },
                {
                    id: '2',
                    title: 'Dallas Chess Meetup',
                    img: 'https://secure.meetupstatic.com/photos/event/a/0/2/1/highres_498940993.webp?w=3840',
                    date: 'SUN, NOV 07 · 3:00 PM CST',
                    location: '6060 Northpark · Richardson, TX'
                },
                {
                    id: '3',
                    title: 'Online Chess',
                    img: 'https://secure-content.meetupstatic.com/images/classic-events/448596586/1200x676.webp?w=3840',
                    date: 'SAT, NOV 10 · 7:00 PM CST',
                    location: '412 Settlers Drive · Plano, TX'
                }
            ]
        },
        {
            name: 'Football',
            category: 'Sports (Outdoors)',
            image: 'football',
            events: [{
                    id: '1',
                    title: '6 VS 6 Football!',
                    img: 'https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F500966983%2F676x380.webp&w=3840&q=75',
                    date: 'FRI, NOV 05 · 5:00 PM CST',
                    location: '1000 Hampshire Ln · Richardson, TX'
                },
                {
                    id: '2',
                    title: 'Turf War Football!',
                    img: 'https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F498736384%2F676x380.webp&w=3840&q=75',
                    date: 'WED, NOV 12 · 7:50 PM CST',
                    location: '14725 Preston Rd · Dallas, TX'
                },
                {
                    id: '3',
                    title: 'Pick Up Football War!',
                    img: 'https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F501962396%2F676x380.webp&w=3840&q=75',
                    date: 'TUE, NOV 08 · 9:00 PM CST',
                    location: '2550 Rental Car Dr · Dallas, TX'
                }
            ]
        },
        {
            name: 'Painting',
            category: 'Arts',
            image: 'painting',
            events: [{
                    id: '1',
                    title: 'Water Colour for Beginners!',
                    img: 'https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F502199932%2F676x380.webp&w=3840&q=75',
                    date: 'SAT, NOV 16 · 10:00 AM CST',
                    location: '850 Cecil Dr · Richardson, TX'
                },
                {
                    id: '2',
                    title: 'Open Figure Drawing!',
                    img: 'https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F496215023%2F676x380.webp&w=3840&q=75',
                    date: 'WED, NOV 09 · 7:50 PM CST',
                    location: '580 W Arapaho Rd #290 · Richardson, TX'
                },
                {
                    id: '3',
                    title: 'Painting With Light',
                    img: 'https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F508141080%2F676x380.webp&w=3840&q=75',
                    date: 'SUN, NOV 04 · 4:30 PM CST',
                    location: '2550 Rental Car Dr · Dallas, TX'
                }
            ]
        },
        {
            name: 'Cooking',
            category: 'Culinary',
            image: 'cooking',
            events: [{
                    id: '1',
                    title: 'Plant Based Cooking',
                    img: 'https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F508061545%2F676x380.webp&w=3840&q=75',
                    date: 'WED, NOV 13 · 11:00 AM CST',
                    location: '3100 Northside Blvd · Richardson, TX'
                },
                {
                    id: '2',
                    title: 'Chicken alla Pizzaiola',
                    img: 'https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F508228920%2F676x380.webp&w=3840&q=75',
                    date: 'SAT, NOV 17 · 7:00 PM CST',
                    location: '580 W Arapaho Rd #290 · Richardson, TX'
                },
                {
                    id: '3',
                    title: 'Cooking Class-Mushroom Mania',
                    img: 'https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F507566669%2F676x380.webp&w=3840&q=75',
                    date: 'SAT, NOV 27 · 6:00 PM CST',
                    location: '320 Coit Rd · Plano, TX'
                }
            ]
        },
        {
            name: 'Gaming',
            category: 'Games',
            image: 'gaming',
            events: [{
                    id: '1',
                    title: 'PANDA Game Night',
                    img: 'https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F494758151%2F676x380.webp&w=3840&q=75',
                    date: 'MON, NOV 14 · 11:00 AM CST',
                    location: '3100 Northside Blvd · Richardson, TX'
                },
                {
                    id: '2',
                    title: 'Game/Movie Night',
                    img: 'https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F497631574%2F676x380.webp&w=3840&q=75',
                    date: 'SAT, NOV 17 · 7:00 PM CST',
                    location: '6060 Northpark · Richardson, TX'
                },
                {
                    id: '3',
                    title: 'On Rotation Gaming!',
                    img: 'https://secure-content.meetupstatic.com/images/classic-events/450652500/1200x676.webp?w=3840',
                    date: 'SAT, NOV 25 · 6:00 PM CST',
                    location: '7701 Lemmon Ave, Suite 200 · Dallas, TX'
                }
            ]
        }
    ],
    rewards: [{
        id: 1,
        title: '50% Flash Sale Copouns',
        brand: '',
        description: '',
        promo_code:'',
        expiry: '',
        claimed:false
    }],
    rewards_count: 0
}