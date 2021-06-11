module.exports = function (source) {

    // 单行打印日志
    require('@hai2007/nodejs').linelog("\n[" + new Date() + "]" + this.resourcePath + "\n\n");

    return source;

}
