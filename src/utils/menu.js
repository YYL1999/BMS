export const allMenu = [
    {
      name: '图片上传',
      url: 'manage/index',
      icon: 'bars',
    }, {
      name:'信息发布',
      url:'manage/publish',
      icon:'plus',
      children:[
        {name:'公告发布',url:'manage/announcement'}
      ]
    }
    ]