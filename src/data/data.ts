export interface QSR {
    id: number;
    qsr: string;
    sales_channel: string;
    country: string;
    state: string;
    city: string;
    store: string;
    recommendation: boolean;
}

export interface Item {
    id: number;
    qsr_id: number;
    priority: number;
    item: string;
    image: string;
    recommendation: boolean;
    description: string;
}

export interface Category {
    id: number;
    qsr_id: number;
    name: string;
    priority: number;
    items: Item[];
}

export const data: QSR[] = [
    {
        id: 1,
        qsr: "KFC",
        sales_channel: "Swiggy",
        country: "India",
        state: "Maharashtra",
        city: "Mumbai",
        store: "Store001",
        recommendation: true,
    },
    {
        id: 2,
        qsr: "McDonald's",
        sales_channel: "UberEats",
        country: "India",
        state: "Karnataka",
        city: "Bangalore",
        store: "Store002",
        recommendation: false,
    },
    {
        id: 3,
        qsr: "Burger King",
        sales_channel: "DoorDash",
        country: "India",
        state: "Delhi",
        city: "New Delhi",
        store: "Store003",
        recommendation: true,
    },
    {
        id: 4,
        qsr: "Subway",
        sales_channel: "Grubhub",
        country: "India",
        state: "Tamil Nadu",
        city: "Chennai",
        store: "Store004",
        recommendation: false,
    },
    {
        id: 5,
        qsr: "Domino's Pizza",
        sales_channel: "Postmates",
        country: "India",
        state: "West Bengal",
        city: "Kolkata",
        store: "Store005",
        recommendation: true,
    },
    {
        id: 6,
        qsr: "Pizza Hut",
        sales_channel: "Zomato",
        country: "India",
        state: "Telangana",
        city: "Hyderabad",
        store: "Store006",
        recommendation: false,
    },
];

export const categories: Category[] = [
    // KFC Categories and Items
    {
        id: 1,
        qsr_id: 1,
        name: "Burgers",
        priority: 1,
        items: [
            {
                id: 1,
                qsr_id: 1,
                priority: 1,
                item: "Zinger Burger",
                image: "https://placehold.co/25x25/png",
                recommendation: true,
                description: "Description"
            },
            {
                id: 2,
                qsr_id: 1,
                priority: 2,
                item: "Chicken Burger",
                image: "https://placehold.co/25x25/png",
                recommendation: false,
                description: "Description"
            }
        ]
    },
    {
        id: 2,
        qsr_id: 1,
        name: "Sides",
        priority: 2,
        items: [
            {
                id: 3,
                qsr_id: 1,
                priority: 1,
                item: "French Fries",
                image: "https://placehold.co/25x25/png",
                recommendation: true,
                description: "Description"
            },
            {
                id: 4,
                qsr_id: 1,
                priority: 2,
                item: "Onion Rings",
                image: "https://placehold.co/25x25/png",
                recommendation: false,
                description: "Description"
            }
        ]
    },
    // McDonald's Categories and Items
    {
        id: 3,
        qsr_id: 2,
        name: "Sandwiches",
        priority: 1,
        items: [
            {
                id: 5,
                qsr_id: 2,
                priority: 1,
                item: "Big Mac",
                image: "https://placehold.co/25x25/png",
                recommendation: true,
                description: "Description"
            },
            {
                id: 6,
                qsr_id: 2,
                priority: 2,
                item: "McChicken",
                image: "https://placehold.co/25x25/png",
                recommendation: false,
                description: "Description"
            }
        ]
    },
    {
        id: 4,
        qsr_id: 2,
        name: "Desserts",
        priority: 2,
        items: [
            {
                id: 7,
                qsr_id: 2,
                priority: 1,
                item: "Apple Pie",
                image: "https://placehold.co/25x25/png",
                recommendation: true,
                description: "Description"
            },
            {
                id: 8,
                qsr_id: 2,
                priority: 2,
                item: "Sundae",
                image: "https://placehold.co/25x25/png",
                recommendation: false,
                description: "Description"
            }
        ]
    },
    // Burger King Categories and Items
    {
        id: 5,
        qsr_id: 3,
        name: "Whoppers",
        priority: 1,
        items: [
            {
                id: 9,
                qsr_id: 3,
                priority: 1,
                item: "Whopper",
                image: "https://placehold.co/25x25/png",
                recommendation: true,
                description: "Description"
            },
            {
                id: 10,
                qsr_id: 3,
                priority: 2,
                item: "Whopper Jr.",
                image: "https://placehold.co/25x25/png",
                recommendation: false,
                description: "Description"
            }
        ]
    },
    {
        id: 6,
        qsr_id: 3,
        name: "Drinks",
        priority: 2,
        items: [
            {
                id: 11,
                qsr_id: 3,
                priority: 1,
                item: "Coca-Cola",
                image: "https://placehold.co/25x25/png",
                recommendation: true,
                description: "Description"
            },
            {
                id: 12,
                qsr_id: 3,
                priority: 2,
                item: "Pepsi",
                image: "https://placehold.co/25x25/png",
                recommendation: false,
                description: "Description"
            }
        ]
    },
    // Subway Categories and Items
    {
        id: 7,
        qsr_id: 4,
        name: "Subs",
        priority: 1,
        items: [
            {
                id: 13,
                qsr_id: 4,
                priority: 1,
                item: "Italian B.M.T.",
                image: "https://placehold.co/25x25/png",
                recommendation: true,
                description: "Description"
            },
            {
                id: 14,
                qsr_id: 4,
                priority: 2,
                item: "Turkey Breast",
                image: "https://placehold.co/25x25/png",
                recommendation: false,
                description: "Description"
            }
        ]
    },
    {
        id: 8,
        qsr_id: 4,
        name: "Salads",
        priority: 2,
        items: [
            {
                id: 15,
                qsr_id: 4,
                priority: 1,
                item: "Veggie Delight",
                image: "https://placehold.co/25x25/png",
                recommendation: true,
                description: "Description"
            },
            {
                id: 16,
                qsr_id: 4,
                priority: 2,
                item: "Chicken Caesar",
                image: "https://placehold.co/25x25/png",
                recommendation: false,
                description: "Description"
            }
        ]
    },
    // Domino's Pizza Categories and Items
    {
        id: 9,
        qsr_id: 5,
        name: "Pizzas",
        priority: 1,
        items: [
            {
                id: 17,
                qsr_id: 5,
                priority: 1,
                item: "Pepperoni Pizza",
                image: "https://placehold.co/25x25/png",
                recommendation: true,
                description: "Description"
            },
            {
                id: 18,
                qsr_id: 5,
                priority: 2,
                item: "Margherita Pizza",
                image: "https://placehold.co/25x25/png",
                recommendation: false,
                description: "Description"
            }
        ]
    },
    {
        id: 10,
        qsr_id: 5,
        name: "Wings",
        priority: 2,
        items: [
            {
                id: 19,
                qsr_id: 5,
                priority: 1,
                item: "Buffalo Wings",
                image: "https://placehold.co/25x25/png",
                recommendation: true,
                description: "Description"
            },
            {
                id: 20,
                qsr_id: 5,
                priority: 2,
                item: "BBQ Wings",
                image: "https://placehold.co/25x25/png",
                recommendation: false,
                description: "Description"
            }

        ]
    },
    // Pizza Hut Categories and Items
    {
        id: 11,
        qsr_id: 6,
        name: "Specialty Pizzas",
        priority: 1,
        items: [
            {
                id: 21,
                qsr_id: 6,
                priority: 1,
                item: "Meat Lover's Pizza",
                image: "https://placehold.co/25x25/png",
                recommendation: true,
                description: "Description"
            },
            {
                id: 22,
                qsr_id: 6,
                priority: 2,
                item: "Veggie Lover's Pizza",
                image: "https://placehold.co/25x25/png",
                recommendation: false,
                description: "Description"
            }
        ]
    },
    {
        id: 12,
        qsr_id: 6,
        name: "Pastas",
        priority: 2,
        items: [
            {
                id: 23,
                qsr_id: 6,
                priority: 1,
                item: "Chicken Alfredo Pasta",
                image: "https://placehold.co/25x25/png",
                recommendation: true,
                description: "Description"
            },
            {
                id: 24,
                qsr_id: 6,
                priority: 2,
                item: "Spaghetti",
                image: "https://placehold.co/25x25/png",
                recommendation: false,
                description: "Description"
            }
        ]
    }
];

