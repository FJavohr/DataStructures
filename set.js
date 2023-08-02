const set = new Set([1,2,3,4,5,5,5,5,5,5,5,5])
console.log(set);

set.add(24)
set.add(24)

set.delete(3)
console.log(set.has(24))
console.log(set.size);

set.clear()

for(const item of set) {
  console.log(item);
}