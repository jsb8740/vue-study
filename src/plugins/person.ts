export default {
  install(app: any, options: object) {
    const person = {
      name: "정승백",
      say() {
        alert("gdgd");
      },
    };

    app.config.globalProperties.$person = person.name;
    app.provide("person", person);
  },
};
