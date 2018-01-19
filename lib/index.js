var create = function(project_folder_name) {
  var shell = require("./shellHelper");
  shell.series(
    [
      "git clone https://github.com/jglasovic/react-redux-setup-project.git " +
        project_folder_name,
      "npm --prefix ./" + project_folder_name + " install",
      "rm -rf ./" + project_folder_name + "/etc",
      "rm -rf ./" + project_folder_name + "/.git",
      "rm -rf ./" + project_folder_name + "/.gitignore"
    ],
    function(err) {
      console.log(
        "\n cd ",
        project_folder_name,
        "\n npm start \n Enjoy!!! :) "
      );
    }
  );
};
exports.create = create;
