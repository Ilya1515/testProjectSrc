import * as fb from 'firebase';

class User {
    constructor(id){
        this.id = id;
    }
}

export default {
    state : {
        user : null,
        Users : []
    },
    mutations : {
        setUser(state, payload) {
            state.user = payload;
        }
    },
    actions : {
        async registerUser ({commit},{email, password}) {

            await fb.auth().createUserWithEmailAndPassword(email,password)
            .then(user =>{
            commit('setUser', new User(user.uid));
            });
        },
        async loginUser ({commit},{email, password}) {

            await fb.auth().signInWithEmailAndPassword(email,password)
            .then(user =>{
            commit('setUser', new User(user.uid));
            });
        },
        autoLoginUser({commit}, payload){
            commit('setUser', new User(payload.uid));
        },
        logoutUser({commit}){
            fb.auth().signOut();
            commit('setUser', null);
        }
    }, 
    getters : {
        user (state) {
            return state.user;
        },
        isUserLoggedIn(state){
            return state.user !== null;
        }
    },
} ;