/**
 *----------------------------------------------------------------------------------------
 * ABSTRACTION
 *----------------------------------------------------------------------------------------
 * 
 * Data abstraction and encapuslation are closely tied together, because a simple 
 * definition of data abstraction is the development of classes, objects, types in terms 
 * of their interfaces and functionality, instead of their implementation details. 
 * Abstraction denotes a model, a view, or some other focused representation for an actual item.
 * 
 * “An abstraction denotes the essential characteristics of an object that distinguish it 
 * from all other kinds of object and thus provide crisply defined conceptual boundaries, 
 * relative to the perspective of the viewer.” — G. Booch
 * 
 * In short, data abstraction is nothing more than the implementation of an object that 
 * contains the same essential properties and actions we can find in the original 
 * object we are representing.
 * 
 * 
 * STEP 1: WHAT (Abstraction)
 *----------------------------------------------------------------------------------------
 * 
 * -> Given a `end-user:viewer` I want to be able to access the 
 *    id, username, name, age and emails, and other meta info such as created 
 *    and updated details of the user.
 * 
 * STEP 2: HOW (Implimentation)
 *----------------------------------------------------------------------------------------
 * 
 * -> Create the public accessor methods to expose only the needed properties.
 * 
 * STEP 3: Hide the complicated methods (Encapsulation)
 *----------------------------------------------------------------------------------------
 * 
 * -> Reduces the complexity of of the class.
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
user.setName("John"); // override the user's name from `john` to `John`
user.setAge(26); // set the user's age to 26
user.addEmail("admin@Example.com"); // adds a email to the user
user.addEmail("info@EXAMPLE.com");
user.addEmail("john@example.com");
user.deleteEmail("info@example.com"); // removes an email

// These are the only accessors the user are interested in.
// We do not need to expose the `generateId` or `setCreatedAt` and `setUpdated` at methods.
const id: number = user.getId(); // 342349003984203234
const gender: string = user.getGender(); // male
const name: string = user.getName(); // John
const emails: string[] = user.getEmails(); // ["admin@example.com", "john@example.com"]
const createdAt: Date = user.getCreatedAt(); // Mon Dec 04 2017 15:07:13 GMT+0200 (SAST)
const updatedAt: Date = user.getUpdatedAt(); // Mon Jan 01 2018 05:01:12 GMT+0500 (SAST)