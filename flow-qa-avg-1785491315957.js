function avg(nums){
  let sum = 0;
  for (let i=0; i<=nums.length; i++){ sum += nums[i]; }  // off-by-one + no guard
  return sum / nums.length;  // divide by zero if empty
}
module.exports = avg;
