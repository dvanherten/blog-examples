'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to my '+ chalk.red('simple generator') + '!'
    ));

    var prompts = [{
      name: 'applicationName',
      message: 'What\'s the name of your application?',
      default: 'WebApplication'
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  }

  writing() {
    this.fs.copyTpl(this.templatePath('Program.cs'), this.props.applicationName + '/Program.cs', this.props);
    this.fs.copyTpl(this.templatePath('project.json'), this.props.applicationName + '/project.json', this.props);
  }
};
