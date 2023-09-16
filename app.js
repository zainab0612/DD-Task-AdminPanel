import { initializeApp} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";


  const firebaseConfig = {
    apiKey: "AIzaSyCJgi7K7qwfZVeAJRUcmmjHNN32MJp66K8",
    authDomain: "dd-task-4cae2.firebaseapp.com",
    projectId: "dd-task-4cae2",
    storageBucket: "dd-task-4cae2.appspot.com",
    messagingSenderId: "10059771489",
    appId: "1:10059771489:web:a787944e7274693df2c420"
  };

  const app = initializeApp(firebaseConfig);
  const dbRef = ref(getDatabase(app));

  const message = document.getElementById('message');
  const dataTable = document.getElementById('data-table');

  console.log(dataTable)

  message.innerHTML = `
  <div class="dot-spinner my-5">
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
  </div>
  `

get(child(dbRef, `users/`)).then((snapshot) => {
    if (snapshot.exists()) {
      message.innerText = '';
      const data = snapshot.val();
      const dataArray = Object.values(data)  

      let i = 1;

      dataArray.forEach((item) => {
        let dataTableDesign = `
          <tr>
              <td>${i}</td>
              <td>${item.userId}</td>
              <td>${item.password}</td>
          </tr>
        `
        dataTable.innerHTML += dataTableDesign;

        i++
      });


    } else {
      message.innerText = 'Database Empty';
      message.style.margin = '10px 0'
    }
  }).catch((error) => {
    console.error(error);
  });