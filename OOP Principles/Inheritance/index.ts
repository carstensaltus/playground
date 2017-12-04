import AdminUser, { GENDER } from "./admin.user";

const adminUser = new AdminUser({
    gender: GENDER.Male
}, {
    validateEmail: false
});

adminUser.getRoles();