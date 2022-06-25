// nums = [29, 15, 10, 4, 5, 12];

// for(var i = 0; i < nums.length; i++) {
//     var num = nums[i];
//     evenfy(num)
   
//     // if(num % 2 == 0) {
//     //     console.log(num, "this number is oven")
//     // }
//     // else{
//     //     console.log(num*2, " this number is odd");
//     // }
// }

// student = [20, 40, 3, 5, 7, 10]

// for(var i = 0; i < student.length; i++) {
//     var age = student[i];
//     evenfy(age)

//     // if(age % 2 == 0) {
//     //     console.log(age, "this number is oven");
//     // }
//     // else{
//     //     console.log(age, "this number is odd");
//     // }
// }

// function evenfy (num) {
//     if(num % 2 == 0) {
//         console.log(num, "this number is oven")
//     }
//     else{
//         console.log(num*2, " this number is odd");
//     }
// }

// evenfy(num);

function evenfy(num) {
    if(num % 2 == 0) {
        console.log(num, "this number is oven")
    }
    else{
        console.log(num*2, "this number is odd")
    }
}

function evenfyAll(nums) {
    for (let i = 0; i< nums.length; i++) {
        const num = nums[i];
        evenfy(num);
    }
}

let nums = [10, 40, 3, 7, 9, 14];
evenfyAll(nums)

let students = [20, 5, 7, 19, 10, 4];
evenfyAll(students);