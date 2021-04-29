/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 1) {return nums[0]}
  function _product(nums) {
    if (nums.length === 1) {return}
    const last = nums.pop();
    const newProduct = nums[0] * last;
    nums[0] = newProduct;
    _product(nums);
  }
  _product(nums)
  return nums[0]
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  let result;
  function _longest(words){
    if (words.length === 1) {result = words[0].length; return}
    if (words[words.length-1].length > words[0].length) {
      words = words.slice(1);
    } else {
      words.pop();
    }
    _longest(words);
  }
  _longest(words)
  return result
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  let result = "";

  function _everyOther(str) {
    if (str.length < 1) {return};
    result = result + str[0];
    _everyOther(str.slice(2));
  }
  _everyOther(str);
  return result;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  let result = "";

  function _isPalindrome(str, i) {
    if (result.length === i) {return};
    result += str.slice(-1);
    _isPalindrome(str.slice(0, -1), i);
  }

  _isPalindrome(str, str.length);
  return result === str;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  let result = 0;
  function _findIndex(arr, val, i) {
    if (arr[0] === val) {return}
    else if (arr.length === 0) {result = -1; return}
    arr.shift();
    result++
    _findIndex(arr, val);
  }
  _findIndex(arr, val, arr.length);
  return result
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  let result = "";

  function _revString(str, i) {
    if (result.length === i) {return};
    result += str.slice(-1);;
    _revString(str.slice(0, -1), i);
  }

  _revString(str, str.length);
  return result
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];
  function _gatherStrings(obj) {
    for (item in obj) {
      if ((typeof obj[item]) === "object") {
        _gatherStrings(obj[item]);
      } else if ((typeof obj[item]) === "string") {
        result.push(obj[item]);
      }
    }
    return
  }
  _gatherStrings(obj)
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let result;

  function _binarySearch (arr, val) {
    middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    middleVal = arr[middleIdx];
    if (middleVal === val) {result = middleIdx; return}
    if (leftIdx >= rightIdx) {result = -1; return}

    if (middleVal < val) {
        // middleVal is too small, look at the right half
      leftIdx = middleIdx + 1;
      _binarySearch(arr, val);
    } else if (middleVal > val) {
        // middleVal is too large, look at the left half
      rightIdx = middleIdx - 1;
      _binarySearch(arr, val);
    }
  }
  
  _binarySearch(arr, val);
  return result;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
