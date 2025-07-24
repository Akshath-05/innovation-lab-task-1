function runTask1() {
    let output = "";
    var a = 10;
    let b = 20;
    const c = 30;
  
    output += `var a = ${a}\nlet b = ${b}\nconst c = ${c}\n`;
    output += "Hello from Task 1!\n";
    output += "Sum of a and b: " + (a + b) + "\n";
    a = 15;
    b = 25;
    output += `Modified a = ${a}, b = ${b}\n`;
  
    document.getElementById('output').textContent = output;
  }
  
  function runTask2() {
    let output = "";
    let num = 42;
    let str = "Hello";
    let bool = true;
    let nul = null;
    let undef = undefined;
    let obj = { name: "Alice" };
    let sym = Symbol("id");
  
    output += `Number: ${num} (${typeof num})\n`;
    output += `String: "${str}" (${typeof str})\n`;
    output += `Boolean: ${bool} (${typeof bool})\n`;
    output += `Null: ${nul} (${typeof nul})\n`;
    output += `Undefined: ${undef} (${typeof undef})\n`;
    output += `Object: ${JSON.stringify(obj)} (${typeof obj})\n`;
    output += `Symbol: ${sym.toString()} (${typeof sym})\n\n`;
    let n = "123";
    output += `String to Number: Number("123") = ${Number(n)}\n`;
    output += `Number to String: String(456) = "${String(456)}"\n`;
    output += `Implicit conversion: "5" * 2 = ${"5" * 2}\n`;
  
    document.getElementById('output').textContent = output;
  }
  
  function runTask3() {
    let output = "";
    let x = 10, y = 3;
    output += `x = ${x}, y = ${y}\n`;
    output += `x + y = ${x + y}\n`;
    output += `x - y = ${x - y}\n`;
    output += `x * y = ${x * y}\n`;
    output += `x / y = ${x / y}\n`;
    output += `x % y = ${x % y}\n`;
    output += `x > y: ${x > y}\n`;
    output += `x == "10": ${x == "10"}\n`;
    output += `x === "10": ${x === "10"}\n`;
    output += `(x > 5 && y < 5): ${(x > 5 && y < 5)}\n`;
    output += `(x < 5 || y < 5): ${(x < 5 || y < 5)}\n`;
    output += `!(x == y): ${!(x == y)}\n`;  
    document.getElementById('output').textContent = output;
  }