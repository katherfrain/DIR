import firebase from 'firebase/app';
import 'firebase/firestore'

const storeList = document.getElementById('storelist')
const addStoreButton = document.getElementById('addstore')
var db = firebase.firestore();


addStoreButton.addEventListener('click', function() {
   //when we click the add store button, scrape the values out
   const storeName = document.getElementById('storename').value 
   const storeAddress = document.getElementById('storeaddress').value 

    db.collection('stores').add({
        name: storeName,
        address: storeAddress,
    })
    .then(function(docRef) {
        getAllStores()
    })
})

function getAllStores() {
    storeList.innerHTML = '';

    db.collection('stores')
    .get()
    .then((snapshot) => {
        snapshot.forEach((store) => {
            let stores = doc.data()
            let storeItem = `<li>
            <h3>${stores.storeName} is at ${stores.storeAddress}</h3>
            </li>`
            storeList.insertAdjacentElement('beforeend', storeItem)
        })
    })
}