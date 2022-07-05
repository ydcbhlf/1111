import * as echarts from "echarts";

export const normalOptions = {
  axisName: {
    color: "#fff",
    backgroundColor: "#59abc2",
    borderRadius: 3,
    padding: [3, 5]
  }
};

export const tinyOptions = {
  axisName: {
    color: "#fff",
    backgroundColor: "#fff",
    borderRadius: 0,
    padding: [0, 0]
  }
};

export const radarOptions = {
  color: ["#56A3F1", "#FF917C"],
  radar: [
    {
      indicator: [
        { text: "智力", max: 150 },
        { text: "体魄", max: 150 },
        { text: "性格", max: 150 },
        { text: "外貌", max: 120 },
        { text: "技能", max: 108 },
        { text: "寿命", max: 72 }
      ],
      center: ["50%", "45%"],
      radius: 80,
      axisName: normalOptions.axisName
    }
  ],
  series: [
    {
      type: "radar",
      data: [
        {
          value: [121, 118, 130, 100, 99, 70],
          name: "Data C",
          symbol: "rect",
          symbolSize: 12,
          lineStyle: {
            type: "dashed"
          },
          label: {
            show: true,
            formatter: function (params: any) {
              return params.value;
            }
          }
        },
        {
          value: [100, 93, 50, 90, 70, 60],
          name: "Data D",
          areaStyle: {
            color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
              {
                color: "rgba(255, 145, 124, 0.1)",
                offset: 0
              },
              {
                color: "rgba(255, 145, 124, 0.9)",
                offset: 1
              }
            ])
          }
        }
      ]
    }
  ]
};
