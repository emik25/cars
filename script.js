let car = {
    color: prompt('which color?'),
    mark: prompt('which mark?'),
    engine: prompt('engine force?'),
    isTurbo: confirm('is turbo?'),
    hasHatch: confirm('with hatch?'),
    price: prompt('price?'),
}

let cars = [
    {
        color: "red", 
        mark: "ferrari",
        engine: 5.0,
        isTurbo: true,
        hasHatch: true,
        price: 500000,
        img: "https://cdn.motor1.com/images/mgl/Znnm7r/s3/ferrari-sp48-unica.webp"
    },
    {
        color: 'green',
        mark: 'lambo',
        engine: 4.2,
        isTurbo: true,
        hasHatch: true,
        price: 650000,
        img: 'https://avatars.mds.yandex.net/get-images-cbir/8311940/n0QqardHsbH5E0imkDPOvg9084/ocr'
    
    },
    {
        color: 'blue',
        mark: 'lacceti',
        engine: 3.2,
        isTurbo: true,
        hasHatch: true,
        price: 120000,
        img: 'https://avatars.mds.yandex.net/i?id=5fe553aefc5fa669669ae25648c42a67_l-5287716-images-thumbs&n=13'
    
    },
    {
        color: 'yellow',
        mark: 'lamborgine urus ',
        engine: 8.2,
        isTurbo: true,
        hasHatch: true,
        price: 500000,
        img: 'https://avatars.mds.yandex.net/i?id=ef9fa34842e638d11dc73528278e6577-5236667-images-thumbs&n=13'
    }
    ]

let filtered = cars.filter(item => {
    if(item.color === car.color){
        if(item.mark === car.mark){
            if(item.engine >= 2.0){
                if(item.isTurbo === true || item.isTurbo === false){
                    if(item.hasHatch === true || item.hasHatch === false){
                        if(item.price >= 100000){
                            return item
                        }
                    }
                }
            }
        }
    }
})
console.log(filtered);