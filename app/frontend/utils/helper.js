export const getMaxIndex = (array, key = null) => {
  let max = 0;
  let maxIndex = 0;
  array.forEach((item, index) => {
    if (key) {
      if (max < item[key]) {
        max = item[key];
        maxIndex = index;
      }
    } else {
      if (max < item) {
        max = item;
        maxIndex = index;
      }
    }
  });
  return maxIndex;
};

export const getFirstTarget = (array, target) => {
  let index = 0;
  let result = array[index];

  for(let i = 0; i < array.length; i++) {
    const item = array[i];
    if (typeof target === 'object') {
      const check = Object.keys(target).every(key => item[key] === target[key]);
      if (check) {
        result = item;
        index = i;
        break;
      }
    } else if (typeof target === 'function') {
      if (target(item)) {
        result = item;
        index = i;
        break;
      }
    } else {
      if (item === target) {
        result = item;
        index = i;
        break;
      }
    }
  }
  return [result, index];
};

export const sortRepos = (key = 'stargazersCount') => (firstRepos, secRepos) => {
  return parseInt(secRepos[key]) - parseInt(firstRepos[key]);
};