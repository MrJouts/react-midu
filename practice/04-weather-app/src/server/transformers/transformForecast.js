import dayjs from "dayjs";

export const transformForecast = (data) => {
  const grouped = data.reduce((acc, item) => {
    const date = dayjs(item.dt_txt).format("YYYY-MM-DD");
    const {
      main: { temp },
      weather: [{ icon }],
    } = item;

    if (!acc[date]) {
      acc[date] = {
        count: 0,
        iconCounts: {},
        tempMax: -Infinity,
        tempMin: Infinity,
      };
    }

    acc[date].count += 1;
    acc[date].iconCounts[icon] = (acc[date].iconCounts[icon] || 0) + 1;

    if (temp > acc[date].tempMax) {
      acc[date].tempMax = temp;
    }
    if (temp < acc[date].tempMin) {
      acc[date].tempMin = temp;
    }

    return acc;
  }, {});

  return Object.keys(grouped).map((date) => {
    const { iconCounts, tempMax, tempMin } = grouped[date];
    const icon = Object.keys(iconCounts).reduce((a, b) =>
      iconCounts[a] > iconCounts[b] ? a : b
    );
    const tempMaxRounded = Math.round(tempMax) + "°";
    const tempMinRounded = Math.round(tempMin) + "°";

    return {
      date,
      icon,
      tempMax: tempMaxRounded,
      tempMin: tempMinRounded,
    };
  });
};
