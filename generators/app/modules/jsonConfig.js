/**
 * Read prompts from config file named: prompts_config.json present in app folder.
 */

module.exports = function jsonConfig() {
  this.props = {};

  var jsonObject = require('../prompts_config.json');

  this.props.bannerName = jsonObject.bannerName;
  this.props.bannerDesc = jsonObject.bannerDesc;
  this.props.bannerType = jsonObject.bannerType;
  this.props.bannerRepo = jsonObject.bannerRepo;
  this.props.includeOfflineScripts = jsonObject.includeOfflineScripts;
};