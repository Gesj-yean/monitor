const chartList = [
  {
    info: {
      label: '折线图',
      name: 'chartLine'
    },
    props: [
      {
        key: 'base',
        title: '基础',
        fields: [
          {
            tag: 'el-input',
            details: {
              label: '名称',
              name: 'name',
              placeholder: ''
            }
          },
          {
            tag: 'el-input',
            details: {
              label: '简介',
              name: 'desc',
              placeholder: '',
              type: 'textarea'
            }
          },
          {
            tag: 'el-input-number',
            details: {
              label: '组件宽度',
              name: 'width',
              placeholder: ''
            }
          },
          {
            tag: 'el-input-number',
            details: {
              label: '组件高度',
              name: 'height',
              placeholder: ''
            }
          },
          {
            tag: 'el-input-number',
            details: {
              label: 'X轴坐标',
              name: 'x',
              placeholder: ''
            }
          },
          {
            tag: 'el-input-number',
            details: {
              label: 'Y轴坐标',
              name: 'y',
              placeholder: ''
            }
          },
          {
            tag: 'el-switch',
            details: {
              label: '自定义配色',
              name: 'customColor'
            }
          },
          {
            tag: 'el-color-picker',
            details: {
              label: '文字颜色',
              name: 'fontColor'
            },
            displayKey: 'customColor'
          },
          {
            tag: 'el-color-picker',
            details: {
              label: '轴线颜色',
              name: 'axisColor'
            },
            displayKey: 'customColor'
          },
          {
            tag: 'el-color-picker',
            details: {
              label: '网格颜色',
              name: 'gridColor'
            },
            displayKey: 'customColor'
          },
          {
            tag: 'el-color-picker',
            details: {
              label: '鼠标Hover时颜色',
              name: 'alignColor'
            },
            displayKey: 'customColor'
          }
        ]
      }
    ],
    models: {
      base: {
        name: 'Echart 折线图',
        desc: '',
        width: 400,
        height: 300,
        x: 0,
        y: 0,
        zIndex: '',
        customColor: false,
        fontColor: '',
        axisColor: '',
        gridColor: '',
        alignColor: ''
      }
    }
  },
  {
    info: {
      label: '饼状图',
      name: 'chartBar'
    },
    props: [
      {
        key: 'base',
        title: '基础',
        fields: [
          {
            tag: 'el-input',
            details: {
              label: '名称',
              name: 'name',
              placeholder: ''
            }
          },
          {
            tag: 'el-input',
            details: {
              label: '简介',
              name: 'desc',
              placeholder: '',
              type: 'textarea'
            }
          },
          {
            tag: 'el-input-number',
            details: {
              label: '组件宽度',
              name: 'width',
              placeholder: ''
            }
          },
          {
            tag: 'el-input-number',
            details: {
              label: '组件高度',
              name: 'height',
              placeholder: ''
            }
          },
          {
            tag: 'el-input-number',
            details: {
              label: 'X轴坐标',
              name: 'x',
              placeholder: ''
            }
          },
          {
            tag: 'el-input-number',
            details: {
              label: 'Y轴坐标',
              name: 'y',
              placeholder: ''
            }
          },
          {
            tag: 'el-switch',
            details: {
              label: '自定义配色',
              name: 'customColor'
            }
          },
          {
            tag: 'el-color-picker',
            details: {
              label: '文字颜色',
              name: 'fontColor'
            },
            displayKey: 'customColor'
          },
          {
            tag: 'el-color-picker',
            details: {
              label: '轴线颜色',
              name: 'axisColor'
            },
            displayKey: 'customColor'
          },
          {
            tag: 'el-color-picker',
            details: {
              label: '网格颜色',
              name: 'gridColor'
            },
            displayKey: 'customColor'
          },
          {
            tag: 'el-color-picker',
            details: {
              label: '鼠标Hover时颜色',
              name: 'alignColor'
            },
            displayKey: 'customColor'
          }
        ]
      }
    ],
    models: {
      base: {
        name: 'Echart 折线图',
        desc: '',
        width: 400,
        height: 300,
        x: 0,
        y: 0,
        zIndex: '',
        customColor: false,
        fontColor: '',
        axisColor: '',
        gridColor: '',
        alignColor: ''
      }
    }
  },
  {
    info: {
      label: '文本',
      name: 'gt-text'
    },
    props: [
      {
        key: 'base',
        title: '基础',
        fields: [
          {
            tag: 'el-input',
            details: {
              label: '图表名称',
              name: 'name',
              placeholder: ''
            }
          },
          {
            tag: 'el-input',
            details: {
              label: '简介',
              name: 'desc',
              placeholder: '',
              type: 'textarea'
            }
          },
          {
            tag: 'el-input-number',
            details: {
              label: '组件宽度',
              name: 'width',
              placeholder: ''
            }
          },
          {
            tag: 'el-input-number',
            details: {
              label: '组件高度',
              name: 'height',
              placeholder: ''
            }
          },
          {
            tag: 'el-input-number',
            details: {
              label: 'X轴坐标',
              name: 'x',
              placeholder: ''
            }
          },
          {
            tag: 'el-input-number',
            details: {
              label: 'Y轴坐标',
              name: 'y',
              placeholder: ''
            }
          }
        ]
      },
      {
        key: 'textContent',
        title: '文本内容',
        fields: [
          {
            tag: 'el-input',
            details: {
              label: '文本内容',
              name: 'text',
              placeholder: ''
            }
          },
          {
            tag: 'el-input-number',
            details: {
              label: '文字大小',
              name: 'fontSize'
            }
          },
          {
            tag: 'el-color-picker',
            details: {
              label: '文字颜色',
              name: 'color'
            }
          },
          {
            tag: 'el-color-picker',
            details: {
              label: '背景颜色',
              name: 'backgroundColor'
            }
          },
          {
            tag: 'el-input',
            details: {
              label: '文字粗细',
              name: 'fontWeight',
              placeholder: ''
            }
          },
          {
            tag: 'el-input',
            details: {
              label: '对齐方式',
              name: 'textAlign',
              placeholder: ''
            }
          }
        ]
      }
    ],
    models: {
      base: {
        name: '文本',
        desc: '',
        width: 120,
        height: 36,
        x: 0,
        y: 0
      },
      textContent: {
        text: '文本',
        fontSize: '12px',
        color: '#666',
        backgroundColor: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
      }
    }
  }
]

export default chartList
