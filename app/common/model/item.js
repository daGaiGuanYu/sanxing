module.exports = {
  name: 'item',
  fields: {
    title: {
      type: String,
      notNull: true
    },
    detail: String,
    status: {
      enum: ['未开始', '进行中', '已完成', '已放弃']
    },
    type: {
      enum: ['不急', '普通', '紧急', '置顶']
    },
    time: Number, // 完成次数

    timeStart: Date, // 项目开始时间
    timeEnd: Date, // 项目结束时间

    // cycle: 循环类型（天、周、月、年、农历年）

    createdAt: Date,
    updatedAt: Date
  }
}