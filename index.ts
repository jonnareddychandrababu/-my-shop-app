// Simple greeting function
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// Main execution
const message = greet("World");
console.log(message);

// Interface example
interface User {
    id: number;
    name: string;
    email: string;
}

// User object
const user: User = {
    id: 1,
    name: "Chandra Vindhya",
    email: "chandra@example.com"
};

console.log(user);