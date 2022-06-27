// // // let isDone: boolean = false;
// // // console.log(isDone);
// // //
// // // let num: number = 123;
// // // console.log(num);
// // //
// // // const str: string = '字符串'
// // // console.log(str);
// // //
// // // let list: number[] = [1, 2, 3]
// // // let list2: string[] = ['a', 'b', 'c']
// // // console.log(list);
// // // console.log(list2);
// //
// // let isDone: boolean = true;
// //
// // let n1: number = 123;
// // let n2: number = 33;
// //
// // let str1: string = 'a';
// // let str2: string = 'b';
// // let str3: string = `jjj${n1}`;
// //
// // let arr1: number[] = [1, 2]
// // let arr2: any[] = [1, 2, 'c']
// // let arr3: Array<string> = ['a', 'b']
// //
// // let arr4: [string, number] = ['a', 2]
// //
// //
//
// // 布尔值
// let flag: boolean = true;
// let flag2: boolean = false;
//
// // 数字
// let n1: number = 1;
// let n2: number = 2;
//
// //字符
// let str1: string = 'str1';
// let str2: string = 'str2';
//
// //数组
// let arr1: [string] = ['a']
// let arr2: [number] = [NaN]
// let arr3: [string, number] = ['a', 3]
//
// let arr4: number[] = [1, 3, 3]
// let arr5: string[] = ['a', 'b']
// let arr6: Array<number> = [1, 2, 3, 4]
// let arr7: Array<string> = ['a', 'b']
// let arr8: any[] = [1, 2, 'c', [], null]
//
// // arr3[0] = 'aaa'
//
// enum Color {Red, Green, Blue}
//
// let c: Color = Color.Blue;
// console.log(Color);
//
// // Any
// let notSure: any = 4;
// notSure = '333asdf';

// let str1: string = '111'
// let n1: number = 1
// let arr1: [number, string] = [1, 's']
// let arr2: any[] = [3, 4, 45]
//
// let flag: boolean = true

// enum Color {Red, Green, Blue}
//
// let c: Color = Color.Green;
//
// console.log(c);

// function warnUser(): void {
//     console.log('jjj');
// }

// let a: number;
// a = 12;
// a = 'd'

// let a = 123;

// function sum(a: number, b: number) {
//     return a + b
// }
//
// sum(1, 2)
// sum(1, 3,)

// let b: 'true' | 'false'
//
// b = 'true'
// b = 'false'
// b = 123;

// let a: 10;
// a = 10;
// a = 33

// let b: "male" | "female";
// b = "male";
// b = "female";
// b = 1;

// let d: any = 12;
// d = 'hll'
// d = true;
// d = []

// let e: any = 1;
// let f: unknown = 2;
// let g = 3
// g = e;
// g = f;
// g = f as number

// let a: unknown = 'hello'
// let b = '3';
// b=a;
// b = b as string

// function fn(n) {
//     if (n > 3) {
//         return true
//     } else {
//         return 123
//     }
// }

// function fn(): void {
//     console.log(1 + 3);
// }
//
// function fn2(): never {
//     throw new Error('报错')
//     // return
// }

// let b: { name: string, tel?: number };
// b.name = "周杰伦"
// // b.tel = 98989;
// // b.sex = '男性'

// let c: { name: '周杰伦', [propName: string]: any }
// c.age = 13;

// let d: (a: number, b: number) => number;
// d = function (n1, n2) {
//     return n1 + n2;
// }

// let e:string[]

// let obj: { n: number, s: string, [propName: string]: any }
// obj.n = 1;
// console.log(obj);
// obj.s = 'sss'
// obj.b = true;

// let arr: [number, any]
// arr = [1, '4']

// let g: Array<number>
// let a: number | string[]
// a = ['3']

// enum Gender {
//     Male,
//     Female
// }
//
// let i: { name: string, gender: Gender }
//
// i = {
//     name: '周杰伦',
//     gender: Gender.Female
// }

// type myType = 1 | 2 | 3 | 4;


// let m: myType;
// let l: myType;

// let a: 1 = 1;
// let b = 4;
// b = 5;
// let n: 1 | 2 | 3 | 4;
// n = 7