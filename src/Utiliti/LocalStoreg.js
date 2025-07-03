const getStoreReadList = () => {
    const storeReadList = localStorage.getItem('read-list');

    if (storeReadList) {
        return JSON.parse(storeReadList);
    }

    return [];
};

const saveReadList = (id) => {
    const storeReadList = getStoreReadList();

    const exists = storeReadList.includes(id);

    if (!exists) {
        storeReadList.push(id);
        localStorage.setItem('read-list', JSON.stringify(storeReadList));
        return true;
    }

    return false;
};

export { getStoreReadList, saveReadList };
