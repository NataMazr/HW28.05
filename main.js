// let a = document.querySelector('div').innerHTML;
// console.log(a);
// let elem = document.querySelector('div');
// elem.style.backgroundColor = '#100';
// elem.addEventListener('mouseover', function() {
//     elem.style.backgroundColor = '#fff';
// })
// elem.addEventListener('mouseout', function() {
//     elem.style.backgroundColor = '#900';
// })


// let input = document.querySelector('input');
// let div = document.querySelector('div');
// input.addEventListener('change', function() {
//     console.log(input.value);
//     div.innerHTML = input.value;
// })

let m = document.querySelector('.main');
const msrc = document.querySelector('.main').src;
let img = document.querySelectorAll('.c');
for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('mouseover', function() {
        m.src = img[i].src;
    })
    img[i].addEventListener('mouseout', function() {
        m.src = msrc;
    })

}


// let arr = [8, 4, 9, 12, 3, 6, 32];
// arr.pop(2);
// arr.shift();
// arr.unshift(0);

// for (i = 0; i < arr.length - 1; i++) {
//     //     if (arr[i] < min) {
//     //         min = arr[i];
//     //     } else if (arr[i] > max) {
//     //         max = arr[i];
//     //     }
//     }
// console.log(arr);

// let kachok = {
//     name: 'Серега',
//     weight: '103 kg',
//     ant: {
//         biceps: 46,
//         chest: 130,
//     },
//     last_year: {
//         biceps: 42,
//         chest: 124,
//         legs: 42
//     },
//     // result: function() {
//     //     ant.biceps - last_year.biceps
//     // }
// }

// for (let i in kachok) {
//     if (typeof kachok[i] === "object") {
//         for (let k in kachok.ant) {
//             console.log(`это ключ: ${[k]}, значение: ${kachok[i][k]}`);
//             // for (let j in kachok.last_year) {
//             //     console.log(`это ключ: ${[j] }, значение: $ { last_year[j] }
//             //             `)
//             // }
//         }
//     } else {
//         console.log(`это ключ: ${[i] }, значение: ${ kachok[i] }`);
//     }


// }


// `)
// // console.log(i);
// // console.log(kachok[i]);
// // console.log(kachok.i);
// // console.log(`
// // это ключ: $ {
// //     [i]
// // }, значение: $ { kachok[i] }
// `)
// // }
// // kachok['name'];


// // kachok.ant.legs = 60;
// // kachok.says = function() {
// //     console.log('сегодня грудь');
// // }
// // console.log('этого качка зовут ', kachok.name,
// //     'весит он ', kachok.weight, '\n бицепс у  него ', kachok.ant.biceps);
// // console.log(`
// // этого качка зовут $ { kachok.name }, бицепс у него: $ { kachok.ant.biceps }
// `);
// // console.log(kachok);
// // kachok.says();
// // kachok.result = kachok.ant.biceps - kachok.last_year.biceps;
// // console.log(kachok.result);


// // console.log(max);

// // let mas = [
// //     11,\
// //     30,
// //     false,
// //     5.5,
// //     "строка1",
// //     25,
// //     "строка2",
// //     true,
// //     9.81, [2, 34],
// //     10, [12, 45, 0]
// // ];
// // let result1 = [];
// // let result2 = [];
// // let result3 = [];
// // let result4 = [];
// // for (let j = 0; j < mas.length - 1; j++) {
// //     let t = mas[j];
// //     // console.log(typeof t);
// //     if (typeof t === "object") {
// //         result1.push(t);
// //     } else if (typeof t === "boolean") {
// //         result2.push(t);
// //     } else if (typeof t === "number") {
// //         result3.push(t);
// //     } else if (typeof t === "string") {
// //         result4.push(t);
// //     }
// // }
// // console.log(result2);
// // console.log(result1);
// // console.log(result3);
// // console.log(result4);