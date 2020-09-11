export default {
    state : {
        reviews : [
            {
                text : 'test ',
                name : 'Natasha',
                id : '@simeone',
              },
        ],
    },
    mutations : {
        addReview(state, item) {
            state.reviews.push(item);
        }
    },
    actions : {

    },
    getters : {
        reviews(state) {
            return state.reviews;
        },
    },
};