const getStoreWishList = () => {
    const storeWishList = localStorage.getItem('wish-list');

    if (storeWishList) {
        return JSON.parse(storeWishList);
    }

    return [];
};

const saveWishList = (id) => {
    const storeWishList = getStoreWishList();

    const exists = storeWishList.includes(id);

    if (!exists) {
        storeWishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storeWishList));
        return true;
    }

    return false;
};

export { getStoreWishList, saveWishList };
