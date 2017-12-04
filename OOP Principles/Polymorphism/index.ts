/**
 *----------------------------------------------------------------------------------------
 * POLYMORPHISM
 *----------------------------------------------------------------------------------------
 * 
 * Polymorphism means one name, many forms. Polymorphism manifests itself by having 
 * multiple methods all with the same name, but slightly different functionality.
 *
 * There are 2 basic types of polymorphism. Overridding, also called run-time polymorphism. 
 * For method overloading, the compiler determines which method will be executed, 
 * and this decision is made when the code gets compiled. Overloading, which is referred 
 * to as compile-time polymorphism. Method will be used for method overriding is determined 
 * at runtime based on the dynamic type of an object.
 *
 * If you can grasp these four principles, OOP can be much of a breeze for you. 
 * It might take more than one read, I encourage you to practically try it.
 * 
 *----------------------------------------------------------------------------------------
 * EXAMPLE
 *----------------------------------------------------------------------------------------
 */

import User, { GENDER, UserParams, UserOptions} from "../../Classes/user";

// User params to set the default state of the object.
const params: UserParams = {
    username: "rambo",
    name: "john",
    gender: GENDER.Male
};

// User options to change the default behaviour of the object.
const options: UserOptions = {
    validateEmail: false
};

// Instantiatign the new user
const user = new User(params, options);

// These are the exposed mutators.
// We do not need to expose the `generateId` or `setCreatedAt` and `setUpdated` at methods.
user.setName("John");
user.setAge(26);
user.addEmail("admin@Example.com");
user.addEmail("info@EXAMPLE.com");
user.addEmail("john@example.com");
user.deleteEmail("info@example.com");

// These are the only accessors the user are interested in.
// We do not need to expose the `generateId` or `setCreatedAt` and `setUpdated` at methods.
const id: number = user.getId(); // 342349003984203234
const gender: string = user.getGender(); // male
const name: string = user.getName(); // John
const emails: string[] = user.getEmails(); // ["admin@example.com", "john@example.com"]
const createdAt: Date = user.getCreatedAt(); // Mon Dec 04 2017 15:07:13 GMT+0200 (SAST)
const updatedAt: Date = user.getUpdatedAt(); // Mon Jan 01 2018 05:01:12 GMT+0500 (SAST)