import User from "./user";

const user = new User();

user.setName("John");
user.setAge(29);

user.getName(); // output => John
user.getAge(); // output => 29

user.name = "John";