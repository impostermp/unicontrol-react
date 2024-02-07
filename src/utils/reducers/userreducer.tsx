// import React from 'react';

// interface UserProps {
//     loggedIn: boolean;
//     user: {
//         email: string;
//         username: string;
//         password: string;
//     };
//     }

//     const initialState: UserProps = {
//         loggedIn: false,
//     }

// function myReducer(state, action) {
//     switch (action.type) {
//         case 'LOGIN':
//         return { ...state, loggedIn: true, user: action.payload };

//         case 'LOGOUT':
//         return { ...state, loggedIn: false, user: {} };

//         default:
//         return state;
//     }
// }

// export default myReducer;