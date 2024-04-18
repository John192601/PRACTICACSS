function stringIncludes(substring, string) {
    return string.includes(substring);
  }
  
  // Ejemplos de uso
  console.log(stringIncludes("hello", "hello world")); // Devuelve true
  console.log(stringIncludes("world", "hello world")); // Devuelve true
  console.log(stringIncludes("foo", "hello world")); // Devuelve false