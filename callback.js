function bioAll(name, age, task) {
    console.log("name", name);
    console.log("age", age);
    task();
    
}
function washhands() {
    console.log("wash your hands")
}
function takeSawar() {
    console.log("take a shawar")
}
bioAll("hasan khan", 25, washhands);
bioAll("nayem", 25, takeSawar);