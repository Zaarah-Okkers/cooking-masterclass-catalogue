import { createStore } from 'vuex'

const store = createStore({
    state: {
        courses: [
            {
                id: 1,
                title: 'Sourdough Basics',
                chef: 'Ava Smith',
                level: 'Beginner',
                price: 120,
                available: true,
                image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=300&fit=crop'
            },
            {
                id: 2,
                title: 'Thai Street Food',
                chef: 'Pom Nakamura',
                level: 'Intermediate',
                price: 150,
                available: true,
                image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=300&fit=crop'
            },
            {
                id: 3,
                title: 'French Pastry Essentials',
                chef: 'Laurent Dubois',
                level: 'Advanced',
                price: 250,
                available: true,
                image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=300&fit=crop'
            },
            {
                id: 4,
                title: 'Mediterranean Cooking',
                chef: 'Sofia Greco',
                level: 'Beginner',
                price: 130,
                available: false,
                image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=300&fit=crop'
            },
            {
                id: 5,
                title: 'Japanese Sushi Mastery',
                chef: 'Hiroshi Tanaka',
                level: 'Advanced',
                price: 280,
                available: true,
                image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&h=300&fit=crop'
            },
            {
                id: 6,
                title: 'Indian Spice Blending',
                chef: 'Priya Sharma',
                level: 'Intermediate',
                price: 140,
                available: true,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlybTE1cVkyHVkYuq37E5KmBbpcmlARKJxCLFFog2Q4w&s=10'
            },
            {
                id: 7,
                title: 'Mexican Mole Secrets',
                chef: 'Carlos Mendez',
                level: 'Advanced',
                price: 190,
                available: true,
                image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&h=300&fit=crop'
            },
            
            {
                id: 9,
                title: 'Italian Risotto Mastery',
                chef: 'Marco Rossi',
                level: 'Intermediate',
                price: 200,
                available: false,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeaniLULAeLB9VhwO2OirVzQ49hHlqlChAsUxjI1kZJg&s=10'
            },
            {
                id: 10,
                title: 'Molecular Gastronomy',
                chef: 'Dr. Elena Ferran',
                level: 'Advanced',
                price: 320,
                available: true,
                image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop'
            },
            {
                id: 11,
                title: 'Vegan Cooking Essentials',
                chef: 'Maya Green',
                level: 'Beginner',
                price: 110,
                available: true,
                image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop'
            },
            {
                id: 12,
                title: 'Greek Island Cuisine',
                chef: 'Nikos Dimitris',
                level: 'Beginner',
                price: 125,
                available: true,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvreB2b_Ce1vcTcaK79ZrHsE519ZeBzSAAk5ye29wLrg&s=10'
            }
        ],
        wishlist: []
    },

    mutations: {
        addToWishlist(state, courseId) {
            const course = state.courses.find(c => c.id === courseId)
            if (course && !state.wishlist.find(c => c.id === courseId)) {
                state.wishlist.push(course)
            }
        }
    },

    actions: {

    }
})

export default store
