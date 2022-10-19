const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;
// let input = fs.readFileSync(filePath).toString().split(' '); // 한칸 띄어쓰기
// let input = fs.readFileSync(filePath).toString().split('\n'); // 줄바꿈 input
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map((a) => +a); // 한칸 띄어쓰기 된 숫자

function solution(input) {
  return input[0] + input[1];
}

console.log(solution(input));
