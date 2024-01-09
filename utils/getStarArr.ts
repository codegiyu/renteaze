

const getStarArr = (rating: number) => {
    let starArr: [number, number, number, number, number] = [0,0,0,0,0];
    let ratingNum = rating

    for (let i = 0; i < 5; i++) {
        if (ratingNum >= 1) {
            starArr.splice(i, 1, 1)
            ratingNum--
        } else if (ratingNum > 0 && ratingNum < 1) {
            starArr.splice(i, 1, 0.5)
            ratingNum = 0
        } else if (ratingNum === 0) {
            starArr.splice(i, 1, 0)
        }
    }

    return starArr
}

export default getStarArr