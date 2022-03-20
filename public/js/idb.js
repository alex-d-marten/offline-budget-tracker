let db;

const request = indexedDB.open('budget_tracker', 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore('budget', { autoIncrement: true });
};

request.onsuccess = function(event) {
    db = event.target.result;
    if(navigator.onLine) {
        // upload budget
    }
};

request.onerror = function(event) {
    console.log(event.target.errorCode);
};

function saveRecord(record) {
    const transaction = db.transaction(['budget'], 'readwrite');

    const budgetObjectStore = transaction.objectStore('budget');
    console.log(record)
    budgetObjectStore.add(record);
}