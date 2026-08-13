export type FooterSection = {
    title: string;
    items: { name: string; href: string }[];
};

export const footerColumns: FooterSection[][] = [
    [
        {
            title: 'Shop and Learn',
            items: [
                { name: 'Store', href: '/' },
                { name: 'Mac', href: '/' },
                { name: 'iPad', href: '/' },
                { name: 'iPhone', href: '/' },
                { name: 'Watch', href: '/' },
                { name: 'Vision', href: '/' },
                { name: 'AirPods', href: '/' },
                { name: 'TV & Home', href: '/' },
                { name: 'AirTag', href: '/' },
                { name: 'Accessories', href: '/' },
                { name: 'Gift Cards', href: '/' }
            ]
        },
        {
            title: 'Apple Wallet',
            items: [
                { name: 'Wallet', href: '/' },
                { name: 'Apple Card', href: '/' },
                { name: 'Apple Pay', href: '/' },
                { name: 'Apple Cash', href: '/' }
            ]
        }
    ],
    [
        {
            title: 'Account',
            items: [
                { name: 'Manage Your Apple Account', href: '/' },
                { name: 'Apple Store Account', href: '/' },
                { name: 'iCloud.com', href: '/' }
            ]
        },
        {
            title: 'Entertainment',
            items: [
                { name: 'Apple One', href: '/' },
                { name: 'Apple TV', href: '/' },
                { name: 'Apple Music', href: '/' },
                { name: 'Apple Arcade', href: '/' },
                { name: 'Apple Fitness+', href: '/' },
                { name: 'Apple News+', href: '/' },
                { name: 'Apple Podcasts', href: '/' },
                { name: 'Apple Books', href: '/' },
                { name: 'App Store', href: '/' }
            ]
        }
    ],
    [
        {
            title: 'Apple Store',
            items: [
                { name: 'Find a Store', href: '/' },
                { name: 'Genius Bar', href: '/' },
                { name: 'Today at Apple', href: '/' },
                { name: 'Group Reservations', href: '/' },
                { name: 'Apple Camp', href: '/' },
                { name: 'Apple Store App', href: '/' },
                { name: 'Certified Refurbished', href: '/' },
                { name: 'Apple Upgrade', href: '/' },
                { name: 'Apple Trade In', href: '/' },
                { name: 'Financing', href: '/' },
                { name: 'Carrier Deals at Apple', href: '/' },
                { name: 'Order Status', href: '/' },
                { name: 'Shopping Help', href: '/' }
            ]
        }
    ],
    [
        {
            title: 'For Business',
            items: [
                { name: 'Apple and Business', href: '/' },
                { name: 'Shop for Business', href: '/' }
            ]
        },
        {
            title: 'For Education',
            items: [
                { name: 'Apple and Education', href: '/' },
                { name: 'Shop for K-12', href: '/' },
                { name: 'Shop for College', href: '/' }
            ]
        },
        {
            title: 'For Healthcare',
            items: [{ name: 'Apple and Healthcare', href: '/' }]
        },
        {
            title: 'For Government',
            items: [
                { name: 'Apple and Government', href: '/' },
                { name: 'Shop for Veterans and Military', href: '/' },
                { name: 'Shop for State and Local Employees', href: '/' },
                { name: 'Shop for Federal Employees', href: '/' }
            ]
        }
    ],
    [
        {
            title: 'Apple Values',
            items: [
                { name: 'Accessibility', href: '/' },
                { name: 'Education', href: '/' },
                { name: 'Environment', href: '/' },
                { name: 'Inclusion and Diversity', href: '/' },
                { name: 'Privacy', href: '/' },
                { name: 'Racial Equity and Justice', href: '/' },
                { name: 'Supply Chain Innovation', href: '/' }
            ]
        },
        {
            title: 'About Apple',
            items: [
                { name: 'Newsroom', href: '/' },
                { name: 'Apple Leadership', href: '/' },
                { name: 'Career Opportunities', href: '/' },
                { name: 'Investors', href: '/' },
                { name: 'Ethics & Compliance', href: '/' },
                { name: 'Events', href: '/' },
                { name: 'Contact Apple', href: '/' }
            ]
        }
    ]
];