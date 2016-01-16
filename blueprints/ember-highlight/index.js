/*jshint node:true*/
module.exports = {
  description: '',

  normalizeEntityName: function () {},

  afterInstall: function () {
    return this.addBowerPackageToProject('jquery-highlight', '~3.2.2');
  }
};
