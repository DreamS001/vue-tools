//按需导出
//[{"id":"92","count":3},{"id":90,"count":5}]这是想要获取的格式
export function getData() {
    return JSON.parse(localStorage.getItem('goodsList') || '[]')
}

export function setData(json) {
    let data = getData();
    let isData = false;
    data.forEach(item => {
        if (item.id == json.id) {
            isData = true
            item.count += json.count
        }
    });
    if (!isData) {
        data.push(json)
    }
    localStorage.setItem('goodsList', JSON.stringify(data))
}

export function delData(id) {
    let data = getData()
    let index = data.findIndex((item) => {
        return item.id == id
    })
    data.splice(index, 1)
    localStorage.setItem('goodsList', JSON.stringify(data))
}

export function updata(json) {
    let data = getData()
        // console.log(json)
    data.forEach((item) => {
        if (item.id == json.id) {
            item.count += json.num
        }
    })
    localStorage.setItem('goodsList', JSON.stringify(data))
}