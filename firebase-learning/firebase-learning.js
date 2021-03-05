const addStoreButton = document.getElementById('addstore')
const storeList = document.getElementById('allstores')

addStoreButton.addEventListener("click", function () {

    const storeName = document.getElementById('storename').value;
    const storeAddress = document.getElementById('storeaddress').value;

    if (storeName && storeAddress) {
        db.collection("stores").add({
            name: storeName,
            address: storeAddress,
        }).then(function (docRef) {
            console.log('hit then')
            getAllStores()
        })
    }
    else {
        storeList.innerHTML = `<h1>Girl what are you trying to pull?`
    }

})

function getAllStores() {
    storeList.innerHTML = '';

    db.collection("stores")
        .get()
        .then((snapshot) => {
            snapshot.forEach((store) => {
                console.log(store.data())
                let storeData = store.data()
                console.log(storeData.name, storeData.address)
                let storeItem = `<li>
            <h3>${storeData.name} is at ${storeData.address}</h3>
            <button onclick="deleteStore('${store.id}')">Delete</button>
            </li>`
                storeList.insertAdjacentHTML('beforeend', storeItem)
            })
        })
}
getAllStores()

function deleteStore(uniqueStoreID) {
    db.collection("stores")
        .doc(uniqueStoreID)
        .delete()
        .then(() => {
            getAllStores()
        })
}