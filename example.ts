// TypeScript örnek dosyası

// Temel tiplerle değişken tanımlamaları
const userName: string = "Onur";
let userAge: number = 30;
let isActive: boolean = true;
let userHobbies: string[] = ["coding", "reading", "gaming"];
let tuple: [string, number] = ["TypeScript", 2023];
let anyType: any = "Bu herhangi bir değer olabilir";
let unknown: unknown = 42;

// Enum tanımı
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER"
}

// Interface tanımı
interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  createdAt: Date;
  update(): void;
}

// Tip tanımı
type UserResponse = {
  data: User;
  status: number;
  message?: string;
};

// Jenerik tip örneği
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Jenerik fonksiyon
function getItems<T>(items: T[]): T[] {
  return items;
}

// Class örneği
class UserService {
  private users: User[] = [];
  
  constructor(initialUsers: User[] = []) {
    this.users = initialUsers;
  }

  public getUser(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  public addUser(user: User): void {
    this.users.push(user);
  }

  public static createDefaultUser(): User {
    return {
      id: 0,
      name: "Default User",
      email: "default@example.com",
      role: UserRole.Viewer,
      createdAt: new Date(),
      update() { console.log("User updated"); }
    };
  }
}

// Async fonksiyon
async function fetchUserData(userId: number): Promise<User> {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    const userData: User = await response.json();
    return userData;
  } catch (error) {
    console.error(`Error fetching user data: ${error}`);
    throw error;
  }
}

// Type Guards
function isUserAdmin(user: User): user is User & { role: UserRole.Admin } {
  return user.role === UserRole.Admin;
}

// Decorators
function log(target: any, key: string) {
  console.log(`Method ${key} called`);
}

class ExampleClass {
  @log
  doSomething() {
    return "Did something";
  }
}

// Conditional Types
type IsString<T> = T extends string ? true : false;
type Result = IsString<string>; // true

// Mapped Types
type Optional<T> = {
  [P in keyof T]?: T[P];
};

// Utility Types kullanımı
type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;
type UserKeys = keyof User;

// Template Literal Types
type EventName<T extends string> = `${T}Event`;
type UserEventName = EventName<"user">; // "userEvent"

// Export örneği
export { User, UserService, fetchUserData };
export default UserService; 