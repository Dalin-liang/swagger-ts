'use strict';
module.exports = {
  QuestionBank: {
    id: {
      type: 'number',
      description: 'id',
      required: true,
    },
    topic: {
      type: 'number',
      description: '主题类型',
      required: true,
    },
    question_type: {
      type: 'number',
      description: '试题类型',
      required: true,
    },
    question: {
      type: 'string',
      description: '试题',
      required: true,
    },
    optionA: {
      type: 'string',
      description: 'A选项',
      required: true,
    },
    optionB: {
      type: 'string',
      description: 'B选项',
      required: true,
    },
    optionC: {
      type: 'string',
      description: 'C选项',
      required: true,
    },
    optionD: {
      type: 'string',
      description: 'D选项',
      required: true,
    },
    answer: {
      type: 'string',
      description: '试题答案',
      required: true,
    },
  },
  // 成绩单
  Score: {
    id: {
      type: 'number',
      description: 'id',
      required: true,
    },
    name: {
      type: 'string',
      description: '学生姓名',
      required: true,
    },
    phone: {
      type: 'string',
      description: '地址',
      required: true,
    },
    jurisdiction: {
      type: 'string',
      description: '所属辖区',
      required: true,
    },
    score: {
      type: 'number',
      description: '成绩',
      required: true,
    },
    time: {
      type: 'string',
      description: '上传时间',
      required: true,
    },
    openid: {
      type: 'string',
      description: '微信id',
      required: true,
    },
  },
  // 成绩单
  Integrals: {
    id: {
      type: 'number',
      description: 'id',
      required: true,
    },
    name: {
      type: 'string',
      description: '学生姓名',
      required: true,
    },
    openid: {
      type: 'string',
      description: '微信id',
      required: true,
    },
    integrals: {
      type: 'number',
      description: '微信id',
      required: true,
    },
  },
};
