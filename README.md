# Introduction

### 的

   tooltip: {
          trigger: 'item',
          formatter: '{a}<br/>{b}:{c}',
        },
        legend: {
          show: true,
          orient: 'vertical',
          left: 10,
          data: ['进行中', '已结束', '未开始']
        },

        series: [
          {
            name: '任务总量占比',
            type: 'pie',
            radius: [52.5, 87.1],
            center: ['50%', '50%'],
            hoverAnimation: true,
            label: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 332,
                name: '进行中'
              },
              {
                value: 332,
                name: '已结束'
              },
              {
                value: 332,
                name: '未开始'
              }
            ]
          }
        ]
