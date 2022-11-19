const objPlugins = {
  install(app: object, options: object) {
    console.log("objPlugins app: ", app);
    console.log("objPlugins options: ", options);
  },
};
export default objPlugins;
