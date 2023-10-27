const goWasm = new Go();

console.log("test");

WebAssembly.instantiateStreaming(fetch("/assets/main.wasm"), goWasm.importObject).then((result) => {
    goWasm.run(result.instance);
});