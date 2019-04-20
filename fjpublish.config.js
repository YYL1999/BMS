module.exports = {
  modules: [{
    name: 'xxxx',
    env: 'xxxx',
    ssh: {
      host: 'xxx.xxx.x.xxx',
      port: 'xx',
      user: 'xxxx',
      userName: 'xxxx',
      password: 'xxxx'
    },
    buildCommand: 'xxxx',
    localPath: 'xxxx',
    remotePath: 'xxxx'
  }],
  afterHooks: {
    when: 'prompt',
    fn({ name, ssh: { host }, localPath = '.', localPathEntries = [], remotePath, nobackup = false, nobuild = false, merge = false }, env, next) {
      console.log(`Config: ...
    name: %s
    env: %s
    host: %s
    ======
    local path: %s
    local entries: %s
    remote path: %s
    ======
    nobuild: %s
    nobackup: %s
    merge: %s
    `, name, env, host, localPath, localPathEntries, remotePath, nobuild, nobackup, merge)
            next()
        }
  }
}
// 打*号则为必要配置
// module.exports = {
//     modules: [{                                  {Array|Object}
//         *name: '测试环境',                        {String}
//         *env: 'test',                            {String}
//         *ssh: {                                  {Object}  ssh设置
//             host: '192.168.0.xxx',
//             username: 'root',
//             password: 'xxxx',
//         },
//         buildCommand: 'webpack',                 {String}  npm script 定义的最后一个命令， 如npm run build，那么buildCommander就是build
//         *localPath: './example',                 {String}  要发布的文件根目录
//         localPathEntries: '',                    {String|Array}  要发布的文件根目录
//         localPathIgnore: '**/*.js',              {String|Array|Function}  需要忽略的文件
//         localTarFileDir: '',                     {String}  压缩后文件的放置地址
//         tarFilename: '',                         {String}  压缩的文件夹命名，不含文件后缀
//         remoteTarFileDir: '',                    {String}  远程文件的上传地址
//         *remotePath: '/www/example',             {String}  需要发布到远程的目录
//         ssh2shell: {},                           {Object}  ssh2shell的剩余参数传递
//         shellTrashPath: '',                      {String}  远程旧文件选择不备份时软‘删除’的地址
//         tag: '',                                 {String|Function}  旧文件要备份的后缀
//         extractVerbose: false,                   {Boolean}  解压时是否显示解压包的文件
//         preCommands: '',                         {String|Array|Function}  远程核心命令前的前置命令
//         postCommands: '',                        {String|Array|Function}  远程核心命令后的后置命令
//         nobuild: true,                           {Boolean}  是否需要构建
//         nobackup: true,                          {Boolean}  是否需要备份上一次的文件
//         nohistory: true,                         {Boolean}  是否使用历史记录功能
//         merge: true,                             {Boolean}  替换文件夹是否merge旧文件夹
//         diff: true,                              {Boolean}  是否只发布有变化的文件
//         prompts: [],                             {Array}  针对该module设置的提示器
//         middlewareUse: '',                       {Sting|Array}  可选择只执行哪些中间件
//         middlewareIgnore: '',                    {Sting|Array}  可选择忽略哪些中间件
//         middlewareReplace: {                     {Object|Array}  设置替换哪些中间件
//             name: '',                            {String}  要替换的中间件的名称
//             middleware: function a(){}           {Function}  必须设置一个具名函数，以防钩子函数找不到
//         },
//         beforeHooks: [{                          {Array|Object}  对某个中间件设置前置钩子函数
//             when: '',                            {String}  中间件名称
//             fn() {},                             {Function}  钩子函数
//         }],
//         afterHooks: [{                           {Array|Object}  对某个中间件设置后置钩子函数
//             when: '',                            {String}  中间件名称
//             fn() {},                             {Function}  钩子函数
//         }],
//         recoverTemplate(){}                      {Function}  设置快速还原功能时显示的列表模板
//     }],
//     prompts: [],                                 {Array}  针对metadata设置的提示器
//     promptIgnore: '',                            {String|Array}  忽略官方默认设置的一些提示器
//     promptSyncModule: '',                        {String|Array}  提示器获取值后是否将某些值覆盖入每一个module实例
//     completeHook (){},                           {Function}  任务完成后的钩子函数
//     startHook (){},                              {Function}  任务开始前的钩子函数
//     parallel: false                              {Boolean}  是否以并行的方式发布所选环境
//     check: false                                 {Boolean}  是否跳过所有中间件的核心操作，只进行参数检查
//     usePrompt: false                             {Boolean}  是否使用提示器发布
//     checkUpdate: false                           {Boolean}  是否每次发布后检查版本更新，默认检查
// }
