"use strict";
let user =
{
	mane: "jack",
	age: 20,
	phone: 43424234,
	skills: {
		html: 5,
		css: 5,
		js: 10,
	},
};

for (const key in user && user.skills) {
	console.log(key + " | " + user[key] + user.skills[key])
};

