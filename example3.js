// Promise의 세 가지 상태
// 1. Pending
// 2. Resolved
// 3. Rejected

function promiseTest1(timer) {
    // Promise 객체의 new 키워드를 통해 만들어줍니다.
    let promiseObj = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve 함수를 통해 메시지를 반환해줍니다.
            resolve(`Timer : ${timer}`)
        }, timer);
    });

    // 반환된 메시지는 then 함수를 통해 익명함수의 매개변수
    // 여기서는 value로 들어가게 되고,
    // console.log(value)로 출력됩니다.
    promiseObj.then((value) => console.log(value));
}

function promiseTest2(timer) {
    // status를 랜덤으로 만듭니다.
    // Math.floor() : 바닥함수 -> 소수점이하를 버립니다.
    // Math.random() : 0~1 사이의 랜덤한 숫자를 반환합니다.
    const status = Math.floor(Math.random() * 10) % 2;
    let promiseObj = new Promise((resolve, reject) => {
        // 랜덤으로 뽑은 status가 1이면 resolve
        // status가 0이면 reject로 메시지를 반환합니다.
        setTimeout(() => {
            if (status === 1) resolve('성공!');
            else reject('실패ㅠ');
        }, timer)
    })

    promiseObj
        .then((value) => console.log(value))
        .catch((error) => console.log(error));
}