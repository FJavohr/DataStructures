const arr = [1, 2, 3, 'javakhir']

arr.push(4)
arr.unshift(0)
arr.pop()
arr.shift()

for (const item of arr) {
  console.log(`item: ${item}`)
}

// map, filter, reduce, concat, slice, splice. 

// splice начало, удалять по, заменить. Изменяет исходный массив.
// slice - начала, удалять по. Удаляет из массива и возвращает новый массив с удалёнными значениями.

// O(1) push pop
// O(n) unshift shift, map, filter, reduce, concat, slice, splice.