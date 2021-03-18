// This is the javascript for the login page!
// I am using a firebase backend for this



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
(function() {
    
    const config = {
        apiKey: "AIzaSyDUDQh8AdVd_1HBWHdZlmOF_fimCdp9GqU",
        authDomain: "capstone-db-78aed.firebaseapp.com",
        projectId: "capstone-db-78aed",
        storageBucket: "capstone-db-78aed.appspot.com",
        messagingSenderId: "217318348330",
        appId: "1:217318348330:web:9bf4da2123c5debc615553",
        measurementId: "G-36229PF6QP"
    };
    firebase.initializeApp(config);
    
// This is where the login elements that were created in loginpage.html are gathered

    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignup = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');


    // This is the login event
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    // This is the sign-up event 
    btnSignup.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    })

    // Authentication Listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
        } else {
            console.log('not logged in')
        }
    })

    // Logout event

    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    })

}());