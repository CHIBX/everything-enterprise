interface Testimonials {
    testimonials: Array<{
        name: string;
        message: string;
        image: string;
        rating: number
    }>
} 
export default defineEventHandler(async (e): Promise<Testimonials>=>{
    return {
        "testimonials": [
            {
                "name": "Mike Ortega",
                "image": "/images/testimonials/Mike%20Ortega.jpeg",
                "rating": 5,
                "message": "I am very happy with the furniture. It has helped me in my work. I would like to work with you again. Thank you!"
            },
            {
                "name": "Christina Petra",
                "image": "/images/testimonials/Christina%20Petra.jpeg",
                "rating": 5,
                "message": "I am very happy with the furniture. It has helped me in my work. I would like to work with you again. Thank you!"
            },
            {
                "name": "Harris Simon",
                "image": "/images/testimonials/Harris%20Simon.jpeg",
                "rating": 5,
                "message": "I am very happy with the furniture. It has helped me in my work. I would like to work with you again. Thank you!"
            },
            {
                "name": "Jude Oswell",
                "image": "/images/testimonials/Jude%20Oswell.jpeg",
                "rating": 5,
                "message": "I am very happy with the furniture. It has helped me in my work. I would like to work with you again. Thank you!"
            },
            {
                "name": "Perry Mayne",
                "image": "/images/testimonials/Perry%20Mayne.jpg",
                "rating": 5,
                "message": "I am very happy with the furniture. It has helped me in my work. I would like to work with you again. Thank you!"
            },
            {
                "name": "Rose Wood",
                "image": "/images/testimonials/Rose%20Wood.jpeg",
                "rating": 5,
                "message": "I am very happy with the furniture. It has helped me in my work. I would like to work with you again. Thank you!"
            },
            {
                "name": "Scott Harris",
                "image": "/images/testimonials/Scott%20Harris.jpeg",
                "rating": 5,
                "message": "I am very happy with the furniture. It has helped me in my work. I would like to work with you again. Thank you!"
            },
            {
                "name": "Walter Smith",
                "image": "/images/testimonials/Walter%20Smith.jpeg",
                "rating": 5,
                "message": "I am very happy with the furniture. It has helped me in my work. I would like to work with you again. Thank you!"
            }
        ]
    };
});