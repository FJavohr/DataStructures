const obj = {
  name: "Javakhir",
  age: 16,
  "key-three": true,
  sayMyName: function() {
    console.log(this.name);
  }
}
obj.hobby = 'footbal'
delete obj.hobby

console.log(obj.name);
console.log(obj['age']);
console.log(obj['key-three']);
console.log(obj);
obj.sayMyName()

// Object.keys/values/entries 